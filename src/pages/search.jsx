import React from 'react';
import { TextField, Flex } from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';

const Search = ({ onSearchChange }) => {
  return <div>
    <h1>Nom Nom Next</h1>
    <div>
      <button className="post"><Link to={'/Post'}>Post</Link></button>
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
