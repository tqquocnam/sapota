import Image from "next/image";
import { ImageBlockData } from "types/blogContent";

type IComp = { data: ImageBlockData };

export const ImageBlock = ({ data }: IComp) => {
  if (!data.file) return null;
  const { file, caption, stretched, withBackground, withBorder } = data;
  return (
    <>
      <Image
        alt={caption ?? file.alternativeText ?? file.name ?? ""}
        src={file.url}
        width={file.width ?? 1}
        height={file.height ?? 1}
        className="mt-4"
      />
      <p
        className="text-center text-sm italic mt-4"
        dangerouslySetInnerHTML={{ __html: caption }}
      ></p>
    </>
  );
};
