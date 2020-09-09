import React from "react";
import './Product.css'
import {useStateValue} from "../../contexts/StateProvider";

const Product = ({id, title, image, price, rating, checkout}) => {
    const [{basket}, dispatch] = useStateValue()


    console.log("this is the basket: ", basket)
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })


    }

    function removeFromBasket() {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })

    }

    let button = <button onClick={addToBasket}>Add to basket</button>

    if (checkout) {
        button = <button onClick={removeFromBasket}>Remove from basket</button>
    }


    return (
        <div className={"product"}>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>

            </div>
            <img src={image} alt=""/>

            {button}

        </div>
    )
}

export default Product;