import React, { useState, useEffect } from "react";
import Search from "./pages/search";
import AccountDetails from "./pages/accountDetails";
import './App.css';
import Post from "./pages/Post";
import Posts from "./pages/Test";
import Filter from "./pages/filter";
import Results from "./pages/Results";
import TestPost from "./pages/TestPost";
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
  Authenticator,
} from "@aws-amplify/ui-react";
import { generateClient} from 'aws-amplify/api';
import { uploadData, getUrl, remove } from 'aws-amplify/storage';

function App() {
  return (
    <Authenticator.Provider>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/post" element={<Post />} />
          <Route path="/account" element={<AccountDetails />} />
          <Route path="/Test" element={<Posts />} />
          <Route path="/search-results" element={<Results />} />
          <Route path="/Filter" element={<Filter />} />
          <Route path="/TestPost" element={<TestPost/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </Authenticator.Provider>
  );
}

export default App;
