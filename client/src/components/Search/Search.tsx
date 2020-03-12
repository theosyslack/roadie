import React from "react";
import "./Search.scss";

function Search() {
  return (
    <label className="Search">
      <input
        type="text"
        className="Search__input"
        placeholder="Search for 'Picnic', 'Camp', 'Boat'"
      />
    </label>
  );
}

export default Search;
