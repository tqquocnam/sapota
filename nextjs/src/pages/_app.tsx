import "styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "libs/apolloClient";
import Layout from "src/components/Layout";
export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <div className="my-16 mx-4 sm:mx-auto max-w-1200">
          <Component {...pageProps} />
        </div>
      </Layout>
    </ApolloProvider>
  );
}
