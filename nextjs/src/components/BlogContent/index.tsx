import React, { Fragment } from "react";
import {
  BlockComponentMap,
  ContentJson,
  HeaderBlockData,
} from "types/blogContent";
import {
  EmbedBlock,
  HeaderBlock,
  ImageBlock,
  ListBlock,
  NotSupportedBlock,
  ParagraphBlock,
  TableBlock,
  TableOfContentBlock,
} from "./Blocks";

const BLOCKS: BlockComponentMap = {
  image: ImageBlock,
  paragraph: ParagraphBlock,
  header: HeaderBlock,
  list: ListBlock,
  embed: EmbedBlock,
  table: TableBlock,
};

export const BlogContent = ({ content }: { content: string }) => {
  const contentJson: ContentJson = JSON.parse(content);
  const headerBlocks: HeaderBlockData[] = [];
  contentJson.blocks.forEach((block) => {
    if (block.type === "header") {
      headerBlocks.push(block.data);
    }
  });

  return (
    <div className="blog-content mx-auto text-lg leading-[1.625]">
      {headerBlocks.length > 0 ? (
        <TableOfContentBlock data={headerBlocks} />
      ) : null}
      {contentJson.blocks.map((block) => {
        const Component = BLOCKS[block.type];
        return (
          <Fragment key={block.id}>
            {BLOCKS[block.type] ? (
              <Component data={block.data} />
            ) : (
              <NotSupportedBlock data={block.data} />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
