import markdownStyles from "styles/markdown-styles.module.css";

const PostBody = ({ content }: { content: string }) => {
  return (
    <div className="mx-auto">
      <article
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;
