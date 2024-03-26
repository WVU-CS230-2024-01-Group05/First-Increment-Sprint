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


  return <div>
    <Heading>Nom Nom Next</Heading>
    <div>
      <View>
      <button><Link to='/post'>Post</Link></button>
      <Button onClick={signOut}>Sign Out</Button>
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
}

export default withAuthenticator(Search);
