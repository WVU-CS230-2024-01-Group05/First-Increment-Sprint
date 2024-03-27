import React, { useState, useEffect } from "react";
import Search from "./pages/search";
import AccountDetails from "./pages/accountDetails";
import './App.css';
import Post from "./pages/Post";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/post" element={<Post />} />
          <Route path="/account" element={<AccountDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
