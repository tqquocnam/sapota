import { useRouter } from "next/router";
import Head from "next/head";
import { ROUTE_HEADER, ROUTE_NAME, VALUES } from "src/contanst";
import {
  ArticleEntity,
  CategoryEntity,
  GetBlogByCategoryInSubCategoryPageDocument,
  GetListCategoryDocument,
  ResponseCollectionMeta,
  useGetBlogByCategoryInSubCategoryPageQuery,
} from "generated/graphql";
import BlogRecentList from "src/components/BlogRecentList";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import BlogList from "src/components/BlogList";
import { addApolloState, initializeApollo } from "libs/apolloClient";

interface IBlogBySubCategory {
  blogList: ArticleEntity[];
  blogMeta: ResponseCollectionMeta;
  subCategorySlug: string;
}

const ListBlogFilterBySubCategory = ({
  blogList,
  blogMeta,
  subCategorySlug,
}: IBlogBySubCategory) => {
  const router = useRouter();
  const blogListRef = useRef<HTMLDivElement>(null);
  const { data } = useGetBlogByCategoryInSubCategoryPageQuery({
    variables: {
      slug: subCategorySlug,
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
        pathname: "/kien-thuc/[category]/[subCategory]",
        query: {
          page: page.toString(),
          subCategory: router.query.subCategory as string,
          category: router.query.category as string,
        },
      });
    },
    [router]
  );

  return (
    <div>
      <Head>
        <title>{ROUTE_HEADER[router.query.subCategory as string]}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <p className="font-semibold text-2xl md:text-4xl text-ink">
          {ROUTE_NAME[router.query.subCategory as string]}
        </p>
      </div>
      {blogListData ? (
        <div className="mt-6">
          <BlogRecentList data={blogListData.slice(0, 5)} />
        </div>
      ) : null}
      <div className="mt-10" ref={blogListRef}>
        {blogListData ? (
          <BlogList
            data={blogListData.slice(5)}
            currentPage={currentPage}
            pages={handlePage()}
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

export default ListBlogFilterBySubCategory;

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const { data: categories } = await apolloClient.query({
    query: GetListCategoryDocument,
  });

  const pathList: {
    params: { category: string | undefined; subCategory: string | undefined };
  }[] = [];

  categories?.categories.data.forEach((category: CategoryEntity) => {
    if (category.attributes?.categories?.data.length) {
      category.attributes?.categories?.data.forEach(
        (subCategory: CategoryEntity) => {
          pathList.push({
            params: {
              category: category.attributes?.slug ?? "",
              subCategory: subCategory?.attributes?.slug ?? "",
            },
          });
        }
      );
    }
  });

  return {
    paths: pathList || [],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps({
  params,
}: {
  params: { subCategory: string };
}) {
  const apolloClient = initializeApollo();

  const { data: blogList } = await apolloClient.query({
    query: GetBlogByCategoryInSubCategoryPageDocument,
    variables: {
      slug: params.subCategory,
    },
  });

  return addApolloState(apolloClient, {
    props: {
      blogList: blogList.articles.data,
      blogMeta: blogList.articles.meta,
      subCategorySlug: params.subCategory,
    },
    revalidate: 10,
  });
}
