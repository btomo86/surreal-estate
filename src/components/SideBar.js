import { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "../styles/SideBar.css";
import qs from "qs";

const SideBar = () => {
  const { search } = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };
  return (
    <div className="side-bar">
      <form>
        <input
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
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
          Liverpoolr
        </Link>
        <p>Filter by Price</p>
        <Link to={buildQueryString("sort", { price: 1 })}>Ascending</Link>
        <Link to={buildQueryString("sort", { price: -1 })}>Descending</Link>
      </ul>
    </div>
  );
};

export default SideBar;
