import React from "react";
import { usePlantsy } from "../contexts/PlantsyContext";

function Search() {
  // retrieve props using our custom usePlantsy hook
  const { query, handleQuery } = usePlantsy();
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={query}
        onChange={handleQuery}
      />
    </div>
  );
}

export default Search;
