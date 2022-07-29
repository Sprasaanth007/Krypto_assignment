import React from "react";
import data from "../../db.json";
import Item from "../Item/Item";
import "./Items.css";

const Items = () => {
  console.log(data["products"]);
  return (
    <div className="products">
      {data["products"].map((product) => (
        <Item
          key={product.id}
          title={product.title}
          amount={product.amount}
          rating={product.rating}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default Items;
