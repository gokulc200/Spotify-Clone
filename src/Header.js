import React from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import { useEffect } from "react";

function Header({ spotify }) {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar alt={user?.display_name} src={user?.images[0]?.url} id="profile"/>
        <h2>{user?.display_name}</h2>
      </div>
    </div>
  );
}

export default Header;