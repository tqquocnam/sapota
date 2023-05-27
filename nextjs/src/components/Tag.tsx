import Link from "next/link";

const Tag = ({
  name,
  slug,
  secondary,
  count,
}: {
  name: string;
  secondary: boolean;
  slug: string;
  count?: number;
}) => {
  return (
    <Link passHref={true} href={slug}>
      <div
        className={`w-fit rounded-md sm:rounded-lg cursor-pointer text-xs sm:text-sm ${
          secondary
            ? "px-2 sm:px-4 py-1 text-inkLighter bg-white border border-solid border-inkLighter"
            : "px-1 sm:px-2 py-0.5 text-white bg-ink "
        }`}
      >
        {name} {count ? <span>({count})</span> : ""}
      </div>
    </Link>
  );
};

export default Tag;
