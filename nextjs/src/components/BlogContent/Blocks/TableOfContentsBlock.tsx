import classNames from "classnames";
import { generateSlug } from "libs/helpers/generateSlug";
import { HeaderBlockData } from "types/blogContent";

export const TableOfContentBlock = ({ data }: { data: HeaderBlockData[] }) => {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const position =
        el.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top;
      const offset = 150;
      window.scrollTo({
        behavior: "smooth",
        top: position - offset,
      });
    }
  };

  return (
    <div className="mt-4 border rounded-lg p-4 lg:max-w-[500px]">
      <p className="lg:text-2xl font-bold">Nội dung chính</p>
      {data.map((item, index) => {
        return (
          <div
            className={classNames("mt-2 text-sm cursor-pointer", {
              "font-bold !mt-4": item.level === 1,
              "ml-2": item.level === 2,
              "ml-4 italic": item.level === 3,
              "ml-6 text-xs": item.level === 4,
              "ml-8 text-xs": item.level === 5,
              "ml-10 text-xs": item.level === 6,
            })}
            key={item.text}
            onClick={() => scrollToId(generateSlug(item.text))}
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        );
      })}
    </div>
  );
};
