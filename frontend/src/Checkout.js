import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import image from "./images/default.png"

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h3>Hello, user</h3>
          <h2 className="checkout__title">Your Selections</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={image}
              price={item.price}
              number={item.number}
              address={item.address}
              name={item.name}
              rating={0}
            />
          ))}

        </div>
      </div>

    </div>
  );
}

export default Checkout;
