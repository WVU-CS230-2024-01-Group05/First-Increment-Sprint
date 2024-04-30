import React from "react";
import Search from "./pages/search";
import AccountDetails from "./pages/accountDetails";
import './App.css';
import Post from "./pages/Post";
import Filter from "./pages/filter";
import {
  BrowserRouter,
  Routes,
  Route} from 'react-router-dom';
import "./App.css";
import "@aws-amplify/ui-react/styles.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/post" element={<Post />} />
          <Route path="/account" element={<AccountDetails />} />
          <Route path="/Filter" element={<Filter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
