import React from "react";
import topImg from "../assets/nav_bar/TOP-STRIP_FASHION-WEEK.gif";
import Button from "./Button";
import Logo from "./Logo";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import UserInfo from "./UserInfo";

export default function Header() {
  return (
    <>
      <Nav type="wrapperOne">
        <img src={topImg} alt="" />
      </Nav>
      <Nav type="wrapperTwo">
        <div className="first-logo">
          <span>star</span>
          <span>sell on jumia</span>
        </div>
      </Nav>
      <Nav type="wrapperThree">
        <div className="wrapper-items">
          <Logo />
          <SearchBar />
          <Button />
          <UserInfo />
        </div>
      </Nav>
    </>
  );
}
