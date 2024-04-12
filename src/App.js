import React, { useState, useEffect } from "react";
import {ReactDOM} from "react";
import {render} from "react-dom";
import Search from "./pages/search";
import AccountDetails from "./pages/accountDetails";
import './App.css';
import Post from "./pages/Post";
import searchResults from "./pages/searchResults";
import {
  BrowserRouter,
  Routes,
  Route,
  Link} from 'react-router-dom';
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  Image,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { generateClient} from 'aws-amplify/api';
import { uploadData, getUrl, remove } from 'aws-amplify/storage';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://your-graphql-api-endpoint', // Your GraphQL endpoint
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/post" element={<Post />} />
          <Route path="/account" element={<AccountDetails />} />
          <Route path="/search-results" element={<searchResults />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
