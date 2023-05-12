import { Inter } from "next/font/google";
import { PageSeo } from "@/components/SEO";
import { siteMetadata } from "data/siteMetadata";
import React, { useEffect } from "react";
import Typed from "typed.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let el = React.useRef(null);
  let typed = React.useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: "#bios",
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    });
    return () => typed.current.destroy();
  }, []);

  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
      />

      <div className="grid md:px-36 md:pt-12">
        <span
          className="bg-gradient-to-r from-cyan-500 to-blue-500
    mb-8 bg-clip-text text-6xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-7xl md:leading-[86px]"
        >
          Hello !
        </span>
        <span
          className="bg-gradient-to-r from-cyan-500 to-blue-500
    mb-6 bg-clip-text text-3xl font-medium text-transparent md:text-4xl "
        >
          My name is Nam.<i className="twa twa-waving-hand"></i>
        </span>
        <div className="text-lg md:text-2xl">
          <p>
            I am
            <span className="font-medium"> Software Engineer</span> in{" "}
            <span className="font-medium"> Ho Chi Minh City, Vietnam.</span>
          </p>
          <div className="pt-2">
            <ul id="bios" className="hidden">
              <li>
                I live in{" "}
                <b className="font-medium">Ho Chi Minh City, Viet Nam</b>.
              </li>
              <li>
                I was born in the beautiful{" "}
                <b className="font-medium">Bac Lieu City.</b>{" "}
              </li>
              <li>
                My first programming language I learned was{" "}
                <b className="font-medium">JavaScript</b>.
              </li>
              <li>I work mostly with JavaScript technologies.</li>
              <li>I love playing and watching football.</li>
              <li>I love playing E-sport.</li>
              <li>I love music and watching cinema.</li>
            </ul>
            <span
              ref={el}
              className="text-neutral-900 dark:text-neutral-200 bg-gradient-to-r from-cyan-500 to-blue-500
                mb-8 bg-clip-text tracking-tight text-transparent"
            />
          </div>
          <p className="pt-2">
            I started learning to code in 2018 and have been hooked ever since.
          </p>
          <p className="pt-2">
            I have a passion for <span className="font-medium">JavaScript</span>
            .
          </p>
          <p className="pt-2">
            I started this blog to document and share my knowledge and
            experience.
          </p>
        </div>
      </div>
    </>
  );
}
