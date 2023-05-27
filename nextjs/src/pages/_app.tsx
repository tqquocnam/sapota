import "styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "libs/apolloClient";
import Layout from "src/components/Layout";
import { AppContext } from "@/context/GlobalContext";
export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <AppContext>
        <Layout>
          <div className="pt-12 md:px-0 px-3 sm:mx-auto md:max-w-7xl">
            <Component {...pageProps} />
          </div>
        </Layout>
      </AppContext>
    </ApolloProvider>
  );
}
