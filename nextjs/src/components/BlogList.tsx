import Image from "next/image";
import { ArticleEntity, UploadFileEntityResponse } from "generated/graphql";
import ChevronLeft from "public/icon/chevron-left-black.png";
import ChevronRight from "public/icon/chevron-right-black.png";
import Link from "next/link";
import CustomImage from "./Image";
import Tag from "./Tag";
import { utils } from "src/utils";
import { VALUES } from "../contanst";

interface IProps {
  data: ArticleEntity[];
  pages: number[];
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
  selectPage: (page: number) => void;
}

const BlogList = ({
  data,
  currentPage,
  nextPage,
  prevPage,
  selectPage,
  pages,
}: IProps) => {
  const startIndex =
    currentPage > 1 ? VALUES.ITEMS_PER_PAGE * (currentPage - 1) : 0;
  const endIndex = startIndex + VALUES.ITEMS_PER_PAGE;
  const dataBlog = [...data.slice(startIndex, endIndex)];
  return (
    <>
      <div className="flex flex-wrap justify-start gap-2 sm:gap-x-10 sm:gap-y-6">
        {dataBlog.map((item: ArticleEntity) => (
          <article
            className="basis-47 sm:basis-22 mt-6"
            key={item?.attributes?.slug}
          >
            {item?.attributes?.thumbnail && item?.attributes?.slug ? (
              <Link href={`/${item?.attributes?.slug}`}>
                <div className="cursor-pointer">
                  <CustomImage
                    image={
                      item?.attributes?.thumbnail as UploadFileEntityResponse
                    }
                    widthCustom={270}
                    heightCustom={180}
                  />
                </div>
              </Link>
            ) : (
              ""
            )}
            <div className="mt-4 flex gap-2 flex-wrap">
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
              <Link passHref={true} href={`/${item?.attributes?.slug}`}>
                <div className="mt-4 cursor-pointer">
                  <h2 className="font-semibold h-72 text-ink text-base multi-line-ellipsis-3">
                    {item?.attributes?.title}
                  </h2>
                  <p className="mt-4 text-sm text-inkLighter">
                    {utils.formatDate(item?.attributes?.createdAt)}
                  </p>
                </div>
              </Link>
            ) : (
              ""
            )}
          </article>
        ))}
      </div>

      <div className="mt-16">
        {pages.length ? (
          <div className="flex justify-center items-center gap-x-4">
            <Image
              src={ChevronLeft}
              alt="chevronLeft"
              className="cursor-pointer ml-2"
              onClick={() => {
                if (currentPage > 1) {
                  prevPage();
                }
              }}
            />
            {pages?.map((page) => {
              if (currentPage === page) {
                return (
                  <div
                    className="py-2 px-4 bg-branding rounded-40 cursor-pointer"
                    key={page}
                  >
                    <p className="text-white font-semibold">{page}</p>
                  </div>
                );
              } else {
                return (
                  <p
                    className="text-inkLighter cursor-pointer"
                    key={page}
                    onClick={() => {
                      selectPage(page);
                    }}
                  >
                    {page}
                  </p>
                );
              }
            })}
            <Image
              src={ChevronRight}
              alt="chevronRight"
              className="cursor-pointer mr-2"
              onClick={() => {
                if (currentPage <= Math.floor(data.length / 4)) {
                  nextPage();
                }
              }}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default BlogList;
