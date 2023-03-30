import Link from "next/link";
import { useRouter } from "next/router";

// type itemType = NonNullable<GetMenuHeaderQuery["menus"]>["data"][number];

type IComp = {
  onClose: () => void;
  //   items: itemType[];
};

export const ModalMenuMobile = ({ onClose }: IComp) => {
  const { pathname } = useRouter();
  return (
    <div className=" lg:hidden p-4 flex flex-col items-center" onClick={() => onClose()}>
      <Link href="/lodash">
        <span className="px-4">lodash</span>
      </Link>
      <Link href="/resume">
        <span className="px-4">resume</span>
      </Link>
      <Link href="/blog">
        <span className="px-4">blog</span>
      </Link>
      {/* <span className="font-medium cursor-pointer text-sm">Lodash</span>
      <span className="font-medium cursor-pointer text-sm">Resume</span>
      <span className="font-medium cursor-pointer text-sm">Blog</span> */}
      {/* {items.map((item: itemType, index) => (
        <Link key={item?.attributes?.order} href={item.attributes?.link || ""} className={`${index > 0 ? "block border-t border-grayBottom": ""}`}>
          <div className="block lg:hidden p-4" key={item?.attributes?.order} onClick={() => onClose()}>
            <p
              className={`${
                pathname === item.attributes?.link ? "text-branding" : "text-inkLighter"
              } text-inkLighter font-semibold cursor-pointer text-lg`}
            >
              {item?.attributes?.title}
            </p>
          </div>
        </Link>
      ))} */}
    </div>
  );
};
