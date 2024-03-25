import React from 'react';
import { TextField, Flex } from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';

const Search = ({ onSearchChange }) => {
  return <div>
    <header>Nom Nom Next</header>
    <div>
      <button className="post"><Link to={'/post'}>Post</Link></button>
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
};

export default Search;
