import { GetMenuHeaderQuery } from "generated/graphql";
import Link from "next/link";
import { useRouter } from "next/router";

type IComp = {
  onClose: () => void;
  items: itemType[];
};
type itemType = NonNullable<GetMenuHeaderQuery["menus"]>["data"][number];

export const ModalMenuMobile = ({ onClose, items }: IComp) => {
  const { pathname } = useRouter();
  return (
    <div className="">
      {items.map((item: itemType, index) => (
        <Link
          key={item?.attributes?.order}
          href={item.attributes?.link || ""}
          className={`${index > 0 ? "block border-t border-grayBottom" : ""}`}
        >
          <div
            className="block lg:hidden p-4"
            key={item?.attributes?.order}
            onClick={() => onClose()}
          >
            <p
              className={`${
                pathname === item.attributes?.link
                  ? "text-branding"
                  : "text-inkLighter"
              } text-inkLighter font-semibold cursor-pointer text-lg`}
            >
              {item?.attributes?.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
