import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { createHttpLink } from "apollo-link-http";

import App from './components/App';
import { ProductsContextProvider, CurrencyContextProvider, CartContextProvider } from "../src/state";

import './styles/index.css';

const httpLink = createHttpLink({
  uri: 'https://pangaea-interviews.now.sh/api/graphql'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <CartContextProvider>
      <ProductsContextProvider>
        <CurrencyContextProvider>
          <App />   
        </CurrencyContextProvider>
      </ProductsContextProvider>
    </CartContextProvider>
  </ApolloProvider>,
  document.getElementById('root')
);