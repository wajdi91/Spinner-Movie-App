import React from "react";
import "./MovieApp.css";

const SearchFilter = ({ value = "", onChange = () => {} }) => (
  <div className="name-filter">
    <input
      className="name-filter-text"
      type="text"
      placeholder="Type a movie to search..."
      value={value}
      onChange={event => {
        onChange(event.target.value);
      }}
    />
  </div>
);

export default SearchFilter;
