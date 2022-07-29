import React from "react";
import "./Item.css";
import { BsSuitHeartFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import data from "../../db.json";

const Item = ({ title, amount, rating, image }) => {
  function wishlistAdd() {
    var length = data["favourites"].length;
    data["favourites"].splice(length, 0, { title, amount, image, rating });
    console.log(data["favourites"]);
  }
  return (
    <div className="item-card">
      <img src={image} alt="dress" className="item-image" />
      <div className="item-details">
        <div className="title">{title}</div>
        <div className="amount">$ {amount}</div>
        <div className="rating">{rating}</div>
        <div className="icons">
          <BsSuitHeartFill className="heart" onClick={wishlistAdd} />
          <BsFillCartCheckFill className="cart" />
        </div>
      </div>
    </div>
  );
};

export default Item;
