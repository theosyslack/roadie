import React from "react";
import store from "store/store";
import debounce from "debounce";
import updateSearch from "actions/updateSearch";
import getFacilities from "api/getFacilities";
import "./Search.scss";

const debouncedGetFacilities = debounce(value => getFacilities(value));

const onChange = debounce(value => {
  const { dispatch } = store;
  dispatch(updateSearch(value));
  debouncedGetFacilities(value);
});

function Search() {
  return (
    <label className="Search">
      <input
        type="text"
        className="Search__input"
        placeholder="Search for 'Hotel', 'Camp', 'Boat'"
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
}

export default Search;
