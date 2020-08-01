import React from "react";
import { TypeWriter } from "./Home.style";
import { Typography } from "@material-ui/core";

const Home = () => {
  return (
    <div>
      <TypeWriter>
        <Typography variant="h2">Let's get coding</Typography>
      </TypeWriter>
    </div>
  );
};

export default Home;
