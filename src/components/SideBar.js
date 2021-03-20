import { useState } from "react";
import { useLocation } from "react-router";
import { Link, useHistory } from "react-router-dom";
import "../styles/SideBar.css";
import qs from "qs";
import { FaSearch } from "react-icons/fa";

const SideBar = () => {
  const { search } = useLocation();
  const history = useHistory();

  const [searchQuery, setSearchQuery] = useState("");

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
      ...JSON.parse(currentQueryParams[operation] || "{}"),
      ...valueObj,
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: searchQuery },
    });
    history.push(newQueryString);
  };
  return (
    <div className="side-bar">
      <form onSubmit={handleSearch}>
        <input
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type="submit">
          <FaSearch /> Search
        </button>
      </form>
      <ul>
        <p>Filter by City</p>
        <Link to={buildQueryString("query", { city: "Manchester" })}>
          Manchesterr
        </Link>
        <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
        <Link to={buildQueryString("query", { city: "Sheffield" })}>
          Sheffield
        </Link>
        <Link to={buildQueryString("query", { city: "Liverpool" })}>
          Liverpool
        </Link>
        <p>Filter by Price</p>
        <Link to={buildQueryString("sort", { price: 1 })}>Ascending</Link>
        <Link to={buildQueryString("sort", { price: -1 })}>Descending</Link>
      </ul>
    </div>
  );
};

export default SideBar;
