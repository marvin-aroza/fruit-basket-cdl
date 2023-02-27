import React from "react";
import "./SearchBar.css";

function SearchBar({onSearch}) {
  return (
    <section>
      <div class="search-box">
        <input type="text" placeholder="Search Product..." onChange={onSearch}/>
        <button type="submit">Search</button>
      </div>
    </section>
  );
}

export default SearchBar;
