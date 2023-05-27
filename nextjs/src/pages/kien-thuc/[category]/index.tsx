import Head from "next/head";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import {
  ArticleEntity,
  CategoryEntity,
  GetBlogByCategoryInCategoryPageDocument,
  GetParentCategoriesDocument,
  GetSubCategoriesDocument,
  ResponseCollectionMeta,
  useGetBlogByCategoryInCategoryPageQuery,
} from "generated/graphql";
import BlogRecentList from "src/components/BlogRecentList";
import Tag from "src/components/Tag";
import { utils } from "src/utils";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ROUTE_NAME, VALUES } from "@/contanst";
import BlogList from "@/components/BlogList";
import { addApolloState, initializeApollo } from "libs/apolloClient";

interface IBlogByCategory {
  blogList: ArticleEntity[];
  categoryList: CategoryEntity[];
  blogMeta: ResponseCollectionMeta;
  categorySlug: string;
}

const ListBlogFilterByCategory = ({
  blogList,
  categoryList,
  blogMeta,
  categorySlug,
}: IBlogByCategory) => {
  const router = useRouter();
  const blogListRef = useRef<HTMLDivElement>(null);
  const { data } = useGetBlogByCategoryInCategoryPageQuery({
    variables: {
      slug: categorySlug,
    },
  });
  const blogListData = data?.articles?.data as ArticleEntity[];
  const currentPage = parseInt(router.query.page as string) || 1;

  useEffect(() => {
    const page = router.query.page as string;
    if (page && blogListRef?.current) {
      blogListRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [router.query.page, blogListRef]);

  const handlePage = () => {
    const totalItem =
      Math.ceil(
        (Number(blogMeta?.pagination?.total) -
          blogListData.slice(0, 5).length) /
          VALUES.ITEMS_PER_PAGE
      ) || 0;
    return [...Array(totalItem < 0 ? 0 : totalItem)].map((_, i) => i + 1);
  };

  const handleSelectPage = useCallback(
    (page: number) => {
      router.push({
        pathname: "/kien-thuc/[category]",
        query: {
          page: page.toString(),
          category: router.query.category as string,
        },
      });
    },
    [router]
  );

  return (
    <div>
      {/* <Head>
        <title>{ROUTE_HEADER[router.query.category as string]}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head> */}
      <div>
        <p className="font-semibold text-2xl md:text-4xl text-ink">
          {ROUTE_NAME[router.query.category as string]}
        </p>
        <div className="flex mt-4 gap-x-2">
          {categoryList?.map((category) => (
            <Tag
              key={category.attributes?.name}
              secondary={false}
              slug={utils.mapSlugInTag(category)}
              name={category.attributes?.name || ""}
            />
          ))}
        </div>
      </div>
      <div className="mt-6">
        {blogListData ? <BlogRecentList data={blogListData.slice(0, 5)} /> : ""}
      </div>
      <div className="mt-10" ref={blogListRef}>
        {blogListData ? (
          <BlogList
            data={blogListData.slice(5)}
            pages={handlePage()}
            currentPage={currentPage}
            nextPage={() => {
              if (currentPage < blogMeta.pagination.total) {
                handleSelectPage(currentPage + 1);
              }
            }}
            prevPage={() => {
              if (currentPage > 1) {
                handleSelectPage(currentPage - 1);
              }
            }}
            selectPage={(page) => {
              handleSelectPage(page);
            }}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ListBlogFilterByCategory;

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const { data: subCategories } = await apolloClient.query({
    query: GetParentCategoriesDocument,
  });

  return {
    paths:
      subCategories?.categories.data.map((category: CategoryEntity) => {
        return { params: { category: category.attributes?.slug } };
      }) || [],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps({
  params,
}: {
  params: { category: string };
}) {
  const apolloClient = initializeApollo();

  const { data: subCategories } = await apolloClient.query({
    query: GetSubCategoriesDocument,
    variables: {
      slug: params.category,
    },
  });

  const { data: blogList } = await apolloClient.query({
    query: GetBlogByCategoryInCategoryPageDocument,
    variables: {
      slug: params.category,
    },
  });

  return addApolloState(apolloClient, {
    props: {
      blogList: blogList.articles.data,
      blogMeta: blogList.articles.meta,
      categoryList: subCategories.categories.data,
      categorySlug: params.category,
    },
    revalidate: 10,
  });
}
