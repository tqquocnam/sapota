import { UploadFileEntityResponse } from "generated/graphql";
import NextImage from "next/image";

interface IImageProps {
  image: UploadFileEntityResponse;
  widthCustom?: number;
  heightCustom?: number;
  sizes?: string | undefined;
}

const CustomImage = ({
  image,
  widthCustom,
  heightCustom,
  sizes,
}: IImageProps) => {
  if (image?.data?.attributes) {
    const { url, alternativeText, width, height } = image?.data?.attributes;

    const getStrapiURL = () => {
      return `${
        process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://localhost:1337"
      }${url}`;
    };

    const getStrapiMedia = () => {
      return url.startsWith("/") ? getStrapiURL() : url;
    };

    return (
      <NextImage
        className="rounded-md"
        sizes={sizes}
        width={widthCustom || width || 1}
        height={heightCustom || height || 1}
        src={getStrapiMedia()}
        alt={alternativeText || ""}
      />
    );
  } else {
    return <div />;
  }
};

export default CustomImage;
