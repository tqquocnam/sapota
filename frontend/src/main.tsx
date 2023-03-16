import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { onError } from "apollo-link-error";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";

const errorLink: any = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log("graphQLErrors", graphQLErrors);
  }
  if (networkError) {
    console.log("networkError", networkError);
  }
});

const httpLink = createHttpLink({
  // uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
  uri: "https://flyby-router-demo.herokuapp.com/",
});

const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
