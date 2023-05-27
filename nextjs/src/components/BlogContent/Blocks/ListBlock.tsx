import { ListBlockData } from "types/blogContent";
import classNames from "classnames";

type IComp = { data: ListBlockData };

export const ListBlock = ({ data }: IComp) => {
  if (!data.items) return null;
  const { style, items } = data;

  return (
    <ul
      className={classNames("list-inside mt-4", {
        "list-decimal": style === "ordered",
        "list-disc": style === "unordered",
      })}
    >
      {items.map((item, index) => (
        <li
          key={`${item}-${index}`}
          className="mt-1"
          dangerouslySetInnerHTML={{ __html: item }}
        ></li>
      ))}
    </ul>
  );
};
