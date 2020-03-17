import React from "react";
import { useDispatch } from "react-redux";
import updateSearch from "actions/updateSearch";
import getFacilities from "api/getFacilities";
import "./Search.scss";

function runSearch(e) {
  const value = e.target.value;
}

function Search() {
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value;
    dispatch(updateSearch(value));
    getFacilities(value);
  };

  return (
    <label className="Search">
      <input
        type="text"
        className="Search__input"
        placeholder="Search for 'Picnic', 'Camp', 'Boat'"
        onChange={onChange}
      />
    </label>
  );
}

export default Search;
