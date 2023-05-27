import { KEYS } from "src/contanst";
import Image from "next/image";
import Tag from "src/components/Tag";
import { gql } from "@apollo/client";
import {
  ArticleEntity,
  CategoriesListDocument,
  CategoryEntity,
  GetAllBlogsDocument,
  GetBlogDetailDocument,
  GetRecentBlogListInBlogDetailDocument,
  UploadFileEntityResponse,
} from "generated/graphql";
import { utils } from "src/utils";
import BlogBody from "src/components/BlogBody";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { addApolloState, initializeApollo } from "libs/apolloClient";
import markdownToHTML from "libs/markdownToHTML";
import { BlogContent } from "@/components/BlogContent";
import { isJSONString } from "libs/helpers/isJSONString";
import { useAppContext } from "@/context/GlobalContext";
import CustomImage from "../components/CustomImage";
import { FacebookShareButton, EmailShareButton, EmailIcon } from "next-share";

interface IProps {
  article: ArticleEntity[];
  recentBlogList: ArticleEntity[];
  categoriesList: CategoryEntity[];
  articleContent: string;
}

const BlogDetail = ({
  article,
  articleContent,
  recentBlogList,
  categoriesList,
}: IProps) => {
  const { setParentCategory } = useAppContext();
  const router = useRouter();
  const blogDetail = article && article[0]?.attributes;
  const categories = blogDetail?.categories?.data;
  const parentCategoryBlog = categories?.find(
    (category) => category?.attributes?.category?.data == null
  );
  const relatedBlogs = blogDetail?.related_article?.data;
  const content = blogDetail?.content;

  useEffect(() => {
    const elements = document.querySelectorAll("a");
    if (elements) {
      elements.forEach((element) => element.setAttribute("target", "_blank"));
    }
  });

  useEffect(() => {
    if (parentCategoryBlog) {
      setParentCategory(parentCategoryBlog?.attributes?.slug || "");
    }
  }, [parentCategoryBlog, setParentCategory]);

  return (
    <>
      {/* <Seo
        seo={{
          title: blogDetail?.title,
          metaTitle: blogDetail?.meta_title,
          metaDescription: blogDetail?.description,
          image: blogDetail?.thumbnail?.data?.attributes?.url,
        }}
      /> */}
      <div className="flex flex-col	sm:flex-row gap-x-6">
        <article className="flex-auto md:w-2/3">
          <div className="pt-6">
            <h1 className="text-xl	sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-ink tracking-wide">
              {blogDetail?.title}
            </h1>
          </div>

          <div className="flex pt-6 gap-x-2">
            {categories?.map((category) => (
              <Tag
                key={category.attributes?.name}
                secondary={false}
                slug={utils.mapSlugInTag(category)}
                name={category.attributes?.name || ""}
              />
            ))}
          </div>

          <div className="pt-6">
            <p className="text-ink">
              {utils.formatDate(blogDetail?.createdAt)}
            </p>
          </div>

          <div className="pt-6">
            {content && isJSONString(content) ? (
              <BlogContent content={content} />
            ) : (
              <BlogBody content={articleContent} />
            )}
          </div>

          <div className="flex pt-6 gap-x-2">
            {categories?.map((category) => (
              <Tag
                key={category.attributes?.name}
                secondary={true}
                slug={utils.mapSlugInTag(category)}
                name={category.attributes?.name || ""}
              />
            ))}
          </div>

          <div className="pt-8">
            {relatedBlogs?.length ? (
              <>
                <p className="text-base sm:text-xl text-inkLighter font-semibold">
                  Bài viết có liên quan
                </p>
                <div className="flex flex-wrap justify-start gap-2 sm:gap-x-10 sm:gap-y-6">
                  {relatedBlogs?.map((item: ArticleEntity) => (
                    <div className="basis-47 mt-6" key={item?.attributes?.slug}>
                      {item?.attributes?.thumbnail && item?.attributes?.slug ? (
                        <Link href={item?.attributes?.slug}>
                          <div className="cursor-pointer">
                            <CustomImage
                              image={item?.attributes?.thumbnail}
                              widthCustom={540}
                              heightCustom={360}
                            />
                          </div>
                        </Link>
                      ) : (
                        ""
                      )}
                      <div className="mt-4 flex gap-2">
                        {item.attributes?.categories?.data?.map((category) => (
                          <Tag
                            key={category?.attributes?.slug}
                            name={category?.attributes?.name || ""}
                            secondary={false}
                            slug={utils.mapSlugInTag(category)}
                          />
                        ))}
                      </div>
                      {item?.attributes?.slug ? (
                        <Link passHref={true} href={item?.attributes?.slug}>
                          <div className="mt-4 cursor-pointer">
                            <p className="font-semibold h-72 text-ink text-base multi-line-ellipsis-3">
                              {item?.attributes?.title}
                            </p>
                            <p className="mt-4 text-sm text-inkLighter">
                              {utils.formatDate(item?.attributes?.createdAt)}
                            </p>
                          </div>
                        </Link>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </article>
        <div className="flex-auto md:w-1/3">
          <div className="mt-6">
            <p className="text-inkLighter">Bài viết mới nhất</p>
            {recentBlogList?.map((blog) => (
              <Link
                passHref={true}
                href={blog?.attributes?.slug || ""}
                key={blog?.attributes?.slug}
              >
                <article className="mt-4 cursor-pointer">
                  <p className="text-ink font-semibold">
                    {blog?.attributes?.title}
                  </p>
                  <div className="mt-1 w-10 h-1 bg-branding" />
                </article>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <p className="text-inkLighter">Tag</p>
            <div className="mt-4 flex flex-wrap gap-4">
              {categoriesList?.map((category) => {
                if (category?.attributes?.articles?.data?.length) {
                  return (
                    <Tag
                      name={category?.attributes?.name || ""}
                      secondary={true}
                      count={category?.attributes?.articles?.data?.length}
                      slug={`${KEYS.KNOWLEDGE_PAGE}/${category?.attributes?.slug}`}
                      key={category.attributes?.name}
                    />
                  );
                } else {
                  return "";
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const { data: allBlogs } = await apolloClient.query({
    query: GetAllBlogsDocument,
  });

  return {
    paths:
      allBlogs?.articles.data.map((post: ArticleEntity) => {
        return { params: { blog: post.attributes?.slug } };
      }) || [],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps({ params }: { params: { blog: string } }) {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: GetBlogDetailDocument,
    variables: {
      slug: params.blog,
    },
  });

  const { data: recentBlogList } = await apolloClient.query({
    query: GetRecentBlogListInBlogDetailDocument,
  });

  const { data: categoriesList } = await apolloClient.query({
    query: CategoriesListDocument,
  });

  return addApolloState(apolloClient, {
    props: {
      article: data?.articles.data,
      articleContent: await markdownToHTML(
        data?.articles?.data[0]?.attributes?.content
      ),
      recentBlogList: recentBlogList?.articles.data,
      categoriesList: categoriesList?.categories.data,
    },
    revalidate: 1,
  });
}
