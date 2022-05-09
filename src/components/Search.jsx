import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";

const Search = () => {
  return (
    <div className="search">
      <div className="search__input--container">
        <SearchIcon className="search__input--icon" />
        <input className="search__input  " />
        <MicIcon />
      </div>

      <div className="search__buttons">
        <Button>Google Search</Button>
        <Button>I'm Feeling Lucky</Button>
      </div>
    </div>
  );
};

export default Search;
