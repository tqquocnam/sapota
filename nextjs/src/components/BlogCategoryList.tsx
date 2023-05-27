import Link from "next/link";
import Image from "next/image";
import ChevronDown from "public/icon/chevron-down.png";
import { UploadFileEntityResponse } from "generated/graphql";
import Tag from "./Tag";
import { IBlogCategories } from "@/pages/kien-thuc";
import CustomImage from "./Image";

interface IProps {
  data: IBlogCategories;
  loadMore: () => void;
  total?: number;
}

const BlogCategoryList = ({ data, loadMore, total }: IProps) => {
  return (
    <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
      <div className="text-center">
        <p className="text-xl font-semibold text-ink sm:text-2xl lg:text-3xl">
          {data.name}
        </p>
      </div>
      <div className="flex flex-wrap justify-start gap-2 sm:gap-10 sm:gap-y-6">
        {data?.data?.map((item) => (
          <article
            className="basis-47 sm:basis-22 mt-6"
            key={item?.attributes?.slug}
          >
            {item?.attributes?.thumbnail && item?.attributes?.slug ? (
              <Link href={item?.attributes?.slug}>
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
                  slug={""} // slug={utils.mapSlugInTag(category)}
                />
              ))}
            </div>
            {item?.attributes?.slug ? (
              <Link passHref={true} href={item?.attributes?.slug}>
                <div className="mt-4 cursor-pointer">
                  <h2 className="font-semibold h-72 text-ink text-base multi-line-ellipsis-3">
                    {item?.attributes?.title}
                  </h2>
                </div>
              </Link>
            ) : (
              ""
            )}
          </article>
        ))}
      </div>

      {total !== data.data.length ? (
        <div className="flex justify-center items-center mt-6 cursor-pointer">
          <div
            className="flex border border-solid border-inkLighter py-1 px-28 rounded-lg"
            onClick={() => loadMore()}
          >
            <p className="text-base font-semibold text-inkLighter pr-2">
              Xem Thêm
            </p>
            <span className="w-6 h-6" style={{ minWidth: 24 }}>
              <Image src={ChevronDown} alt="Cheron" />
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BlogCategoryList;
