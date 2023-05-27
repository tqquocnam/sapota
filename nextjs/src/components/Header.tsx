import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Close from "public/icon/close.png";
import Menu from "public/icon/menu.png";
import { ModalWrapper } from "./Modals/ModalWrapper";
import { ModalMenuMobile } from "./Modals/ModalMenuMobile";
import { GetMenuHeaderQuery, useGetMenuHeaderQuery } from "generated/graphql";
import { useRouter } from "next/router";

type itemType = NonNullable<GetMenuHeaderQuery["menus"]>["data"][number];

const Header = () => {
  const { pathname } = useRouter();
  const { data } = useGetMenuHeaderQuery();
  const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false);

  return (
    <>
      <div className="flex lg:py-1 lg:px-12 justify-between  sticky top-0 bg-white z-40  shadow-sm">
        <div className="py-4 px-3 flex lg:justify-around lg:items-center lg:gap-x-6 md:gap-x-4 ">
          <Link href="/">
            <span className="w-24 cursor-pointer">
              <Image
                src="https://res.cloudinary.com/dv8kkrvvw/image/upload/v1685202507/person_cf54e75887.png"
                width={40}
                height={20}
                alt="Logo"
              />
            </span>
          </Link>
          {data?.menus?.data?.map((item: itemType) => (
            <Link
              passHref={true}
              key={item?.attributes?.order}
              href={item.attributes?.link || ""}
            >
              <div className="hidden md:block lg:block pt-1">
                <p
                  className={`${
                    pathname === item.attributes?.link
                      ? "text-branding"
                      : "text-inkLighter"
                  } font-semibold cursor-pointer lg:text-base md:text-sm`}
                >
                  {item?.attributes?.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center xl:pr-3">
          <div />
          <div
            className="ml-2 px-3 flex items-center justify-center md:hidden lg:hidden cursor-pointer"
            onClick={() => setIsVisibleMenu(!isVisibleMenu)}
          >
            {isVisibleMenu ? (
              <Image src={Close} alt="close" />
            ) : (
              <Image src={Menu} alt="Menu" />
            )}
          </div>
        </div>
      </div>
      <ModalWrapper isVisible={isVisibleMenu}>
        <ModalMenuMobile
          onClose={() => {
            setIsVisibleMenu(false);
          }}
          items={data?.menus?.data || []}
        />
      </ModalWrapper>
    </>
  );
};

export default Header;
