import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Flex,
  Heading,
  TextField,
  View,
  useAuthenticator,
  withAuthenticator,
} from "@aws-amplify/ui-react";

const Search = ({ onSearchChange }) => {

  const { signOut } = useAuthenticator();


  return (
  <div>
    <Heading>Nom Nom Next</Heading>
    <div>
    <div className="search-container">
    <input type="text" placeholder="Search..." name="search"></input>
          <nav>
          <Link to="/Test" className="link-style">
            <button>Search</button>
          </Link>
          </nav>
          <select name="category">
            <option value="">All Categories</option>
            <option value="Vegan">Vegan</option>
            <option value="Gluten-Free">Gluten-Free</option>
            <option value="Dairy-Free">Dairy-Free</option>
            <option value="Japanese">Japanese</option>
            <option value="Mexican">Mexican</option>
            <option value="American">American</option>
          </select>
      </div>
      <View>
      <div className="App-header">
          <nav>
            <Link to="/Filter" className="link-style"><button className="button-post">Filter</button></Link>
            <Link to="/post" className="link-style"><button className="button-post">Post</button></Link>
            <Link to="/TestPost" className="link-style"><button className="button-post">TestPost</button></Link>
            <Link to="/account" className="link-style"><button className="button-signout">Account Details</button></Link>
            <button className="button-signout" onClick={signOut}>Sign Out</button>
          </nav>
        </div>
        </View>
    </div>
    </div>
  )
}

export default withAuthenticator(Search);
