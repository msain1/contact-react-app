import React from 'react';
import './SearchBar.css'

const SearchBar = ({ searchValue, setSearchValue }) => {
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;