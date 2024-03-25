import React from 'react';
import { TextField, Flex } from '@aws-amplify/ui-react';

const Search = ({ onSearchChange }) => {
  return (
    <Flex direction="row" justifyContent="center" margin="3rem 0">
      <TextField
        onChange={e => onSearchChange(e.target.value)}
        placeholder="Search notes"
        label="Search Notes"
        labelHidden
        variation="quiet"
      />
    </Flex>
  );
};

export default Search;
