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

      <div className="grid md:px-12">
        <span className="md:text-6xl text-2xl font-medium">HELLO.</span>
        <span className="md:text-4xl text-lg font-medium">My name is Nam.</span>
      </div>
    </>
  );
}
