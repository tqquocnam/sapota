import classNames from "classnames";
import { generateSlug } from "libs/helpers/generateSlug";
import { HeaderBlockData } from "types/blogContent";

type IComp = { data: HeaderBlockData };

export const HeaderBlock = ({ data }: IComp) => {
  if (!data.text) return null;
  const { text, level } = data;
  const slug = generateSlug(text);
  const HeaderTag: keyof JSX.IntrinsicElements = `h${level ?? 3}`;
  return (
    <HeaderTag
      id={slug}
      className={classNames("mt-6 font-bold", {
        "text-2xl leading-[1.375]": level > 3,
      })}
      dangerouslySetInnerHTML={{ __html: data.text }}
    />
  );
};
