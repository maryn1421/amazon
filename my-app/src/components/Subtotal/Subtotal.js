import React from "react";
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "../../contexts/StateProvider";

const Subtotal = () => {
    const [{basket}, dispatch] = useStateValue();
    const itemNum = basket.length;
    let total = 0
    const totalPrice = basket.forEach(item => {
        total += item.price;
    })
    return (
        <div className="subtotal">
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({itemNum} items): <strong>{`${value}`}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/> This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={total}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
        <button>Proceed to Checkout</button>
    </div>)
}

export default Subtotal;