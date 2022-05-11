import React from "react";
import UseGoogleSearch from "./components/useGoogleSearch";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import Search from "./components/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = UseGoogleSearch(term);
  console.log(data);
  return (
    <div className="search__page">
      <div className="search__page--header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
            className="search__page--logo"
          />
        </Link>
        <div className="search__page--header-body">
          <Search hideButtons></Search>
          <div className="search__page--options">
            <div className="options__left">
              <div className="option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="option">
                <DescriptionIcon />
                <Link to="/all">News</Link>
              </div>
              <div className="option">
                <ImageIcon />
                <Link to="/all">Images</Link>
              </div>
              <div className="option">
                <LocalOfferIcon />
                <Link to="/all">Shopping</Link>
              </div>
              <div className="option">
                <RoomIcon />
                <Link to="/all">Maps</Link>
              </div>
              <div className="option">
                <MoreVertIcon />
                <Link to="/all">More</Link>
              </div>
            </div>
            <div className="options__right">
              <div className="option">
                <Link to="/all">Settings</Link>
              </div>
              <div className="option">
                <Link to="/all">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="search__page--results">
          <p className="result__count">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data.items.map((result) => {
            <div className="search__page--result">
              <a href={result.link}>{result.displayLink}</a>

              {result.pagemap?.cse_image?.length > 0 &&
                result.pagemap.cse_image[0]?.src && (
                  <img
                    src={result.pagemap?.cse_image[0]?.src}
                    alt=""
                    className="search__page--img"
                  />
                )}

              <a className="search__result--title" href={result.link}>
                <h2>{result.title}</h2>
              </a>
              <p className="search__result--snippet">{result.snippet}</p>
            </div>;
          })}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
