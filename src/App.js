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
      <Router>
        <div className="App-header">
          <nav>
            <Link to="/" className="link-style"><button className="button-account">Search</button></Link>
            <Link to="/post" className="link-style"><button className="button-post">Post</button></Link>
            <Link to="/account" className="link-style"><button className="button-signout">Account Details</button></Link>
            <button className="button-signout" onClick={() => alert('Sign Out Logic Here')}>Sign Out</button>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/post" element={<Post />} />
          <Route path="/account" element={<AccountDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
