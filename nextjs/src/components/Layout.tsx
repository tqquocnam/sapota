import React from "react";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer.";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useRouter();

  return (
    <>
      <Header />
      {/* {pathname.includes(KEYS.KNOWLEDGE_PAGE) || pathname === "/[blog]" ? <SearchBlog /> : <div />} */}
      <main>{children}</main>

      {/* <Footer /> */}
    </>
  );
};

export default Layout;
