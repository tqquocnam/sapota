import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>my-project</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="my-project" key="title" />
        <meta name="description" content="my-project" />
        <meta name="keywords" content="my-project" />
        <meta charSet="UTF-8" />
      </Head>

      <div>
        <span>hello</span>
      </div>
    </>
  );
}
