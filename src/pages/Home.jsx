import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/icons-material/AccountCircle";
import Search from "../components/Search";

const Home = () => {
  return (
    <div id="home">
      <div className="home__header">
        <div className="home__header--left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__header--right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <div className="header__right--icon">
            <Avatar />
          </div>
        </div>
      </div>
      <div className="home__body">
        <img
          className="body__img"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />

        <Search />
      </div>
    </div>
  );
};

export default Home;
