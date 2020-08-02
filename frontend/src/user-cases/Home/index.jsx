import React, {useState} from 'react';
import {TypeWriter, FeaturedWrapper, SearchField} from './Home.style';
import {Typography, InputAdornment, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Home = () => {
  const [searchBar, setSearchBar] = useState();
  return (
    <FeaturedWrapper>
      <TypeWriter>
        <Typography variant="h2">Let&apos;s get coding</Typography>
      </TypeWriter>
      <SearchField
        placeholder="Find a repository"
        variant="outlined"
        value={searchBar}
        onChange={(e) => setSearchBar(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FeaturedWrapper>
  );
};

export default Home;
