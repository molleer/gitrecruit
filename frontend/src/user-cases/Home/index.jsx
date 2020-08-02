import React, {useState} from 'react';
import {TypeWriter, FeaturedWrapper, SearchField} from './Home.style';
import {Typography, InputAdornment, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InspirationItem from './InspirationItem';

const Home = () => {
  const [searchBar, setSearchBar] = useState();
  return (
    <div>
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: '15rem',
          alignItems: 'flex-start',
        }}
      >
        <InspirationItem
          text="Learn something new"
          icon={
            <img style={{height: '5rem'}} src="elearning.png" alt="learning" />
          }
        />
        <InspirationItem
          text="Fulfill your ideas"
          icon={<img style={{height: '5rem'}} src="idea.png" alt="idea" />}
        />
        <InspirationItem
          text="Collaborate with others"
          icon={
            <img style={{height: '5rem'}} src="meeting.png" alt="meeting" />
          }
        />
      </div>
    </div>
  );
};

export default Home;
