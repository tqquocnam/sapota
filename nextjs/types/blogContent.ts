import { UploadFile } from "generated/graphql";

export type ImageBlockData = {
  file: UploadFile;
  caption: string;
  stretched: boolean;
  withBackground: boolean;
  withBorder: boolean;
};

export type ParagraphBlockData = {
  text?: string;
};

export type HeaderBlockData = {
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export type ListBlockData = {
  style: "unordered" | "ordered";
  items: string[];
};

export type TableBlockData = {
  withHeadings: boolean;
  content: string[][];
};

export type EmbedBlockData = {
  caption: string;
  embed: string;
  service: "youtube";
  source: string;
  width: number;
  height: number;
};

type BlockType = "paragraph" | "image" | "header" | "list" | "table" | "embed";

type Block =
  | {
      id: string;
      type: "paragraph";
      data: ParagraphBlockData;
    }
  | {
      id: string;
      type: "image";
      data: ImageBlockData;
    }
  | {
      id: string;
      type: "header";
      data: HeaderBlockData;
    }
  | {
      id: string;
      type: "list";
      data: ListBlockData;
    }
  | {
      id: string;
      type: "table";
      data: TableBlockData;
    }
  | {
      id: string;
      type: "embed";
      data: EmbedBlockData;
    };

export type ContentJson = {
  blocks: Block[];
};

type BlockComponent = React.ComponentType<any>;

export type BlockComponentMap = Record<BlockType, BlockComponent>;
