import Link from "next/link";
import kebabCase from "utils/kebabCase";

const Tag = ({ text }: { text: any }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <div
        className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        href={""}
      >
        {text.split(" ").join("-")}
      </div>
    </Link>
  );
};

export default Tag;
