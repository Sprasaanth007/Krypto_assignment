import React from "react";
import Navbar from "../Navbar/Navbar";
import data from "../../db.json";
import Item from "../Item/Item";
import "./WishList.css";

const WishList = () => {
  return (
    <div>
      <Navbar />
      <div className="wishlist-card">
        {data["favourites"].map((product) => (
          <Item
            title={product.title}
            amount={product.amount}
            image={product.image}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default WishList;
