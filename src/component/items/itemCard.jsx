import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ItemCard = ({ item }) => {
  return (
    <div className="image-card">
      <div className="image-card_image">
        <img src={item.image} alt="" />
        <p className="image-card__description">
          {item.desc}
        </p>
      </div>
      <h5>{item.name}</h5>
      <p>{item.weight} gms</p>
      <p>Rs {item.price}/- </p>
      <button>
        <FaShoppingCart style={{marginRight:'20px'}}/> Add to cart
      </button>
    </div>
  );
};

export default ItemCard;
