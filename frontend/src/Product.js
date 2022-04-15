import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating, days, number, address, name }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        days,
        number,
        address,
        name,
      },
    });
  };

  return (
    <div className="product">
      

      <img src={image} alt="" />

      <div className="product__info">
        <p className="title">{title}</p>
        <div className="details">
        <p className="product__price">
          <small> Rs.</small>
          <strong>{price}/day</strong>
        </p>
        <p>Days: {days}</p>
        </div>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      
      <button onClick={addToBasket}>Add to selection</button>
      
    </div>
  );
}

export default Product;
