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
      <div className="flex lg:py-3 lg:px-10 justify-between border-b border-grayBottom sticky top-0 bg-white z-40">
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
          <div>
            {/* <button
              className="px-2 py-1 bg-branding md:text-sm md:px-3 md:py-1 lg:px-5 lg:text-base lg:py-2 font-semibold text-white rounded-lg"
              onClick={() => focusForm()}
            >
              Nhận tư vấn miễn phí
            </button> */}
          </div>
          <div
            className="ml-2 flex items-center justify-center md:hidden lg:hidden cursor-pointer"
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
          // items={data?.menus?.data || []}
        />
      </ModalWrapper>
    </>
  );
};

export default Header;
