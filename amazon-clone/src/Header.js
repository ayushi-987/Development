import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";


function Header() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="headerline1"> Hello Guest</span>
          <span className="headerline2">Sign In</span>
        </div>
        <div className="header_option">
          <span className="headerline1">Return</span>
          <span className="headerline2">& Order</span>
        </div>
        <div className="header_option">
          <span className="headerline1"> Your</span>
          <span className="headerline2"> Prime</span>
        </div>
        <Link to="/checkout">
        <div className="header_optionBasket">
          <ShoppingCartIcon />
          <span className="header_optionline2 haeder_basketCount">{basket.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
