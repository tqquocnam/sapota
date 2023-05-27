import { EmbedBlockData } from "types/blogContent";

type IComp = { data: EmbedBlockData };

export const EmbedBlock = ({ data }: IComp) => {
  if (!data.source) return null;
  const { caption, embed, source, service, width, height } = data;
  return (
    <>
      {service === "youtube" ? (
        <iframe
          className="mx-auto mt-4"
          width={width}
          height={height}
          src={embed}
        ></iframe>
      ) : null}

      <p
        className="text-center text-sm italic mt-4"
        dangerouslySetInnerHTML={{ __html: caption }}
      ></p>
    </>
  );
};
