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
      <View>
      <div className="App-header">
          <nav>
            <Link to="/" className="link-style"><button className="button-account">Search</button></Link>
            <Link to="/post" className="link-style"><button className="button-post">Post</button></Link>
            <Link to="/account" className="link-style"><button className="button-signout">Account Details</button></Link>
            <button className="button-signout" onClick={signOut}>Sign Out</button>
            <button><Link to='/account'>Account</Link></button>
          </nav>
        </div>
        </View>
    </div>
    <Flex direction="row" justifyContent="center" margin="3rem 0">
      <TextField
        onChange={e => onSearchChange(e.target.value)}
        placeholder="Search notes"
        label="Search Notes"
        labelHidden
        variation="quiet"
      />
    </Flex>
    </div>
  )
}

export default withAuthenticator(Search);
