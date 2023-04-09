import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Close from "public/icon/close.png";
import Menu from "public/icon/menu.png";
import { ModalWrapper } from "./Modals/ModalWrapper";
import { ModalMenuMobile } from "./Modals/ModalMenuMobile";

const Header = () => {
  const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false);

  return (
    <>
      <div className="flex lg:py-1 lg:px-12 justify-between border-b border-grayBottom sticky top-0 bg-white z-40">
        <div className="py-3 px-3 flex lg:justify-around lg:items-center lg:gap-x-6 md:gap-x-4 ">
          <Link href="/">
            <span className="font-medium text-lg">tqquocnam*</span>
          </Link>

          <div className="hidden md:block lg:block pt-1">
            <Link href="/lodash">
              <span className="px-6 text-lg">lodash</span>
            </Link>
            <Link href="/resume">
              <span className="px-6 text-lg">resume</span>
            </Link>
            <Link href="/blog">
              <span className="px-6 text-lg">blog</span>
            </Link>
          </div>
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
        />
      </ModalWrapper>
    </>
  );
};

export default Header;