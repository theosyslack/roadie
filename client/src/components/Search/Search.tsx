import React from "react";
import { useDispatch } from "react-redux";
import updateSearch from "actions/updateSearch";
import "./Search.scss";

function Search() {
  const dispatch = useDispatch();

  return (
    <label className="Search">
      <input
        type="text"
        className="Search__input"
        placeholder="Search for 'Picnic', 'Camp', 'Boat'"
        onChange={e => dispatch(updateSearch(e.target.value))}
      />
    </label>
  );
}

export default Search;
