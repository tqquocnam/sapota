import Head from "next/head";
import { gql } from "@apollo/client";
import {
  ArticleEntity,
  GetBlogByCategoryDocument,
  GetBlogByCategoryQuery,
  GetParentCategoriesDocument,
  GetRecentBlogListDocument,
  useLoadMoreBlogLazyQuery,
} from "generated/graphql";
import BlogCategoryList from "src/components/BlogCategoryList";
import BlogRecentList from "src/components/BlogRecentList";
import { useState } from "react";
import { addApolloState, initializeApollo } from "libs/apolloClient";

export interface IBlogCategories {
  slug: string;
  name: string;
  total: number;
  data: NonNullable<GetBlogByCategoryQuery["articles"]>["data"];
}

const KnowledgePage = ({
  blogListByCategories,
  recentBlogList,
}: {
  blogListByCategories: IBlogCategories[];
  recentBlogList: ArticleEntity[];
}) => {
  const [blogListData, setBlogListData] =
    useState<IBlogCategories[]>(blogListByCategories);
  const [loadMoreBlog] = useLoadMoreBlogLazyQuery();

  const loadMoreData = async (slug: string, count: number, total: number) => {
    if (count < total) {
      const newBlogListData = [...(blogListData ?? [])];
      const page = Math.floor(count / 4 + 1);
      const response = await loadMoreBlog({
        variables: {
          slug: slug,
          page: page,
        },
      });
      if (response?.data && response?.data?.articles?.data && page > 1) {
        const index = newBlogListData.findIndex(
          (blogList) => blogList.slug === slug
        );
        if (index >= 0) {
          newBlogListData[index].data = newBlogListData[index].data.concat(
            response.data.articles.data
          );
          setBlogListData(newBlogListData);
        }
      }
    }
  };

  return (
    <div>
      <Head>
        <title>Kiến thức | Sapota</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {recentBlogList ? <BlogRecentList data={recentBlogList} /> : ""}
      <div className="mt-24">
        {blogListData?.map((blogList) => {
          if (blogList.data.length) {
            return (
              <BlogCategoryList
                data={blogList}
                key={blogList.name}
                total={blogList.total}
                loadMore={() =>
                  loadMoreData(
                    blogList.slug,
                    blogList?.data?.length,
                    blogList?.total
                  )
                }
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default KnowledgePage;

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data: parentCategories } = await apolloClient.query({
    query: GetParentCategoriesDocument,
  });

  const { data: recentBlogList } = await apolloClient.query({
    query: GetRecentBlogListDocument,
  });

  const blogListByCategories: IBlogCategories[] = [];
  if (parentCategories.categories.data) {
    for (const category of parentCategories.categories.data) {
      if (category.attributes.slug) {
        const { data: blogList } = await apolloClient.query({
          query: GetBlogByCategoryDocument,
          variables: {
            slug: category.attributes.slug,
            limit: 4,
          },
        });
        blogListByCategories.push({
          slug: category.attributes.slug,
          name: category.attributes.name,
          data: blogList.articles.data,
          total: blogList.articles.meta.pagination.total,
        });
      }
    }
  }

  return addApolloState(apolloClient, {
    props: {
      recentBlogList: recentBlogList.articles.data,
      blogListByCategories: blogListByCategories,
    },
    revalidate: 10,
  });
}
