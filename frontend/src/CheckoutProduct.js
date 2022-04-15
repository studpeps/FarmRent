import React from 'react';
import './CheckoutProduct.css'
import Items from './Items';
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton, number, address, name }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    
    

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>Rs </small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                <p>{name}</p>
                <p>{number}</p>
                <p>{address}</p>
               {/* Add renter details */}
                {!hideButton && (
                    <button className='removeBtn' onClick={removeFromBasket}>Remove from Selections</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
