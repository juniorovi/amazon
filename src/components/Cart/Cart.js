import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    console.log(props.children)

    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }
    let tax = parseFloat((total * .1).toFixed(2));
    let grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h3>Order sumary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: {shipping}</p>
            <p>Tax: {tax}</p>
            <p><b>Grand Total: {grandTotal.toFixed(2)}</b></p>
            {props.children}
        </div>
    );
};

export default Cart;