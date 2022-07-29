import React from "react";
import "./Navbar.css";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h1 className="navbar-heading">ShopKart.</h1>
      </Link>

      <div className="navbar-others">
        <Link to="/wishlist" style={{ textDecoration: "none", color: "white" }}>
          <div>WishList</div>
        </Link>
        <div>
          <BsFillCartCheckFill className="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
