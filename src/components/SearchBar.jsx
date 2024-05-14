import React from "react";
import { IoIosHome } from "react-icons/io";
import Button from "./Button";
import "./searchBar.css";
export default function SearchBar() {
  return (
    <>
      <input
        className="search-input"
        type="text"
        placeholder="Search product"
      />
      <IoIosHome />
      <Button />
    </>
  );
}
