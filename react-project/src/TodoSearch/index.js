import React, { useEffect } from "react";
import { TodoContext } from "../TodoContext";
import { FcSearch } from "react-icons/fc";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="search-var">
      <span className="search-icon">
        <FcSearch size="22px" />
      </span>
      <input
        className="input-todo-search"
        placeholder="Search..."
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  );
}

export { TodoSearch };
