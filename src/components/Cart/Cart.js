import React from 'react';
import './Cart.css'

// const Cart = (props) => {
const Cart = ({ cart }) => {
    // console.log(cart);

    let total = 0;
    let shipping = 0;


    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    let tax = parseFloat((total * .1).toFixed(2));
    let grandTotal = total+shipping+tax;

    return (
        <div className='cart'>
            <h3>Order sumary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: {shipping}</p>
            <p>Tax: {tax}</p>
            <p><b>Grand Total: {grandTotal.toFixed(2)}</b></p>
        </div>
    );
};

export default Cart;