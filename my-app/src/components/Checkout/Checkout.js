import React from "react";
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'
import {useStateValue} from "../../contexts/StateProvider";
import Product from "../Product/Product";

const Checkout = () => {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className={"checkout__ad"} src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>

            <div className="checkout__title">
                <h2>Your shopping basket</h2>
            </div>
                <React.Fragment>
                    <div className="checkout__products">
                        {basket.map((item) => (
                            <Product image={item.image}
                                     title={item.title}
                                     id={item.id}
                                     price={item.price}
                                     rating={item.rating}
                                     checkout={true}
                            />
                        ))}
                    </div>
                </React.Fragment>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>

    )
}

export default Checkout