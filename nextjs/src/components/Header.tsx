import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import Close from "public/icon/close.png";
import Menu from "public/icon/menu.png";
import { ModalWrapper } from "./Modals/ModalWrapper";
import { ModalMenuMobile } from "./Modals/ModalMenuMobile";

const Header = () => {
  const { pathname } = useRouter();

  const focusForm = () => {
    const formElement = document.getElementById("base-input");
    if (formElement) formElement.focus();
  };
  const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false);

  return (
    <>
      <div className="flex lg:py-7 lg:px-10 justify-between border-b border-grayBottom sticky top-0 bg-white z-40">
        <div className="py-3 px-3 flex lg:justify-around lg:items-center lg:gap-x-6 md:gap-x-4 ">
          <Link href="/lodash">
            <span className="font-medium">tqquocnam*</span>
          </Link>
          {/* <Link href="/">
            <span className="w-24 cursor-pointer">
              <Image src="/next.svg" width={92} height={27} alt="Logo" />
            </span>
          </Link> */}
          <div className="hidden md:block lg:block pt-1">
            <Link href="/lodash">
              <span className="px-6">lodash</span>
            </Link>
            <Link href="/resume">
              <span className="px-6">resume</span>
            </Link>
            <Link href="/blog">
              <span className="px-6">blog</span>
            </Link>

            {/* <span className=" font-semibold cursor-pointer lg:text-base md:text-sm ">lodash</span>
            <span className=" font-semibold cursor-pointer lg:text-base md:text-sm">resume</span>
            <span className=" font-semibold cursor-pointer lg:text-base md:text-sm">About</span> */}
          </div>
        </div>
        <div className="flex items-center xl:pr-3">
          <div
            className="px-3 ml-2 flex items-center justify-center md:hidden lg:hidden cursor-pointer"
            onClick={() => setIsVisibleMenu(!isVisibleMenu)}
          >
            {isVisibleMenu ? <Image src={Close} alt="close" /> : <Image src={Menu} alt="Menu" />}
          </div>
        </div>
      </div>
      <ModalWrapper isVisible={isVisibleMenu}>
        <ModalMenuMobile
          onClose={() => {
            setIsVisibleMenu(false);
          }}
          // items={data?.menus?.data || []}
        />
      </ModalWrapper>
    </>
  );
};

export default Header;
