import type { AuthorFrontMatter, MdxFileData } from "./mdx";

export interface SnippetProps {
  snippet: MdxFileData;
  // commentConfig: CommentConfigType
}

export interface BlogListProps {
  // posts: BlogFrontMatter[]
  // initialDisplayPosts: BlogFrontMatter[]
}

export interface BlogProps {
  post: MdxFileData;
  authorDetails: AuthorFrontMatter[];
  // prev: BlogFrontMatter
  // next: BlogFrontMatter
  page: number;
  // commentConfig: CommentConfigType
}
