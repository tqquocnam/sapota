import CustomImage from "./CustomImage";
import Tag from "./Tag";
import { ArticleEntity, UploadFileEntityResponse } from "generated/graphql";
import { utils } from "src/utils";
import Link from "next/link";

interface IProps {
  data: ArticleEntity[];
}

const BlogRecentList = ({ data }: IProps) => {
  return (
    <div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col md:flex-row gap-7">
          {data[0]?.attributes ? (
            <article className="w-full h-full max-w-570">
              {data[0]?.attributes?.thumbnail ? (
                <Link href={`/${data[0]?.attributes?.slug}`}>
                  <div className="cursor-pointer">
                    <CustomImage
                      image={data[0].attributes?.thumbnail}
                      widthCustom={570}
                      heightCustom={381}
                    />
                  </div>
                </Link>
              ) : (
                ""
              )}
              <div className="pt-3 flex gap-x-2">
                {data[0]?.attributes?.categories?.data?.map((category) => (
                  <Tag
                    key={category.attributes?.slug}
                    secondary={false}
                    slug={utils.mapSlugInTag(category)}
                    name={category.attributes?.name || ""}
                  />
                ))}
              </div>
              <Link passHref={true} href={`/${data[0]?.attributes?.slug}`}>
                <div className="md:pt-3 items-center justify-center w-full h-full md:w-full md:h-auto cursor-pointer">
                  <h2 className="md:text-3xl text-lg font-semibold multi-line-ellipsis-3">
                    {data[0]?.attributes?.title}
                  </h2>
                </div>
              </Link>
              <Link href={`/${data[0]?.attributes?.slug}`}>
                <div className="pt-3 items-center justify-center w-full h-full cursor-pointer">
                  <p className="md:text-lg text-base text-inkLighter multi-line-ellipsis-3">
                    {data[0]?.attributes?.description}
                  </p>
                </div>
              </Link>
            </article>
          ) : (
            <div />
          )}
          <div>
            <div className="md:flex flex-row">
              {data[1]?.attributes ? (
                <article className="flex flex-1 flex-row gap-5 md:flex-col md:gap-1 md:h-auto">
                  <div className="sm:w-auto h-auto w-52">
                    {data[1]?.attributes?.thumbnail ? (
                      <Link href={`/${data[1]?.attributes?.slug}`}>
                        <div className="cursor-pointer">
                          <CustomImage
                            image={data[1]?.attributes?.thumbnail}
                            widthCustom={330}
                            heightCustom={181}
                          />
                        </div>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="sm:pt-2 flex gap-2 flex-wrap">
                      {data[1]?.attributes?.categories?.data?.map(
                        (category) => (
                          <Tag
                            key={category.attributes?.slug}
                            secondary={false}
                            slug={utils.mapSlugInTag(category)}
                            name={category.attributes?.name || ""}
                          />
                        )
                      )}
                    </div>
                    <Link
                      passHref={true}
                      href={`/${data[1]?.attributes?.slug}`}
                    >
                      <div className="md:pt-2 pt-0 items-center justify-center cursor-pointer">
                        <h2 className="multi-line-ellipsis-2 text-base text-black font-semibold md:text-xl overflow-ellipsis whitespace-normal overflow-y-hidden">
                          {data[1]?.attributes?.title}
                        </h2>
                      </div>
                    </Link>
                    <Link href={`/${data[1]?.attributes?.slug}`}>
                      <div className="hidden sm:block pt-1 cursor-pointer">
                        <p className="text-base text-inkLighter multi-line-ellipsis-3">
                          {data[1]?.attributes?.description}
                        </p>
                      </div>
                    </Link>
                  </div>
                </article>
              ) : (
                <div />
              )}

              {data[2]?.attributes ? (
                <article className="flex flex-1	flex-row gap-5 md:flex-col md:gap-1 md:h-auto  pt-1 md:pt-0">
                  <div className="sm:w-auto h-auto w-52">
                    {data[2]?.attributes?.thumbnail ? (
                      <Link href={`/${data[2]?.attributes?.slug}`}>
                        <div className="cursor-pointer">
                          <CustomImage
                            image={data[2]?.attributes?.thumbnail}
                            widthCustom={330}
                            heightCustom={181}
                          />
                        </div>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="sm:pt-2 flex gap-2 flex-wrap">
                      {data[2]?.attributes?.categories?.data?.map(
                        (category) => (
                          <Tag
                            key={category.attributes?.slug}
                            secondary={false}
                            slug={utils.mapSlugInTag(category)}
                            name={category.attributes?.name || ""}
                          />
                        )
                      )}
                    </div>
                    <Link
                      passHref={true}
                      href={`/${data[2]?.attributes?.slug}`}
                    >
                      <div className="md:pt-2 pt-0 items-center justify-center cursor-pointer">
                        <h2 className="multi-line-ellipsis-2  text-base text-black font-semibold md:text-xl overflow-ellipsis whitespace-normal overflow-y-hidden">
                          {data[2]?.attributes?.title}
                        </h2>
                      </div>
                    </Link>
                    <Link href={`/${data[2]?.attributes?.slug}`}>
                      <div className="hidden sm:block pt-1 cursor-pointer">
                        <p className="multi-line-ellipsis-3 text-base text-inkLighter">
                          {data[2]?.attributes?.description}
                        </p>
                      </div>
                    </Link>
                  </div>
                </article>
              ) : (
                <div />
              )}
            </div>
            <div className="flex flex-col md:pt-7">
              {data[3]?.attributes ? (
                <article className="flex flex-row md:h-auto gap-5 md:gap-0 pt-1">
                  <div className="md:w-72 h-auto w-52">
                    {data[3]?.attributes?.thumbnail ? (
                      <Link href={`/${data[3]?.attributes?.slug}`}>
                        <div className="cursor-pointer">
                          <CustomImage
                            image={data[3]?.attributes?.thumbnail}
                            widthCustom={190}
                            heightCustom={124}
                          />
                        </div>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="flex gap-x-2">
                      {data[3]?.attributes?.categories?.data?.map(
                        (category) => (
                          <Tag
                            key={category.attributes?.slug}
                            secondary={false}
                            slug={utils.mapSlugInTag(category)}
                            name={category.attributes?.name || ""}
                          />
                        )
                      )}
                    </div>
                    <Link
                      passHref={true}
                      href={`/${data[3]?.attributes?.slug}`}
                    >
                      <div className="md:pt-1 pt-0 items-center justify-center cursor-pointer">
                        <h2 className="text-base text-black font-semibold multi-line-ellipsis-3">
                          {data[3]?.attributes?.title}
                        </h2>
                      </div>
                    </Link>
                    <Link
                      passHref={true}
                      href={`/${data[3]?.attributes?.slug}`}
                    >
                      <div className="hidden sm:block pt-1 cursor-pointer">
                        <p className="multi-line-ellipsis-3 text-sm text-inkLighter">
                          {data[3]?.attributes?.description}
                        </p>
                      </div>
                    </Link>
                  </div>
                </article>
              ) : (
                <div />
              )}
              {data[4]?.attributes ? (
                <article className="flex flex-row md:pt-3 md:h-auto h-40 gap-5 md:gap-0 pt-2">
                  <div className="md:w-72 h-auto w-52 ">
                    {data[4]?.attributes?.thumbnail ? (
                      <Link href={`/${data[4]?.attributes?.slug}`}>
                        <div className="cursor-pointer ">
                          <CustomImage
                            image={data[4]?.attributes?.thumbnail}
                            widthCustom={190}
                            heightCustom={124}
                          />
                        </div>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col w-full ">
                    <div className="flex gap-x-2">
                      {data[4]?.attributes?.categories?.data?.map(
                        (category) => (
                          <Tag
                            key={category?.attributes?.slug}
                            secondary={false}
                            slug={utils.mapSlugInTag(category)}
                            name={category?.attributes?.name || ""}
                          />
                        )
                      )}
                    </div>
                    <Link
                      passHref={true}
                      href={`/${data[4]?.attributes?.slug}`}
                    >
                      <div className="md:pt-1 pt-0 items-center justify-center cursor-pointer">
                        <h2 className="text-base text-black font-semibold multi-line-ellipsis-3">
                          {data[4]?.attributes?.title}
                        </h2>
                      </div>
                    </Link>
                    <Link
                      passHref={true}
                      href={`/${data[4]?.attributes?.slug}`}
                    >
                      <div className="hidden sm:block pt-1 cursor-pointer">
                        <p className="multi-line-ellipsis-3 text-sm text-inkLighter">
                          {data[4]?.attributes?.description}
                        </p>
                      </div>
                    </Link>
                  </div>
                </article>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogRecentList;
