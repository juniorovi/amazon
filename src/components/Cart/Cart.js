import React from 'react';

// const Cart = (props) => {
    const Cart = ({cart}) =>{
    return (
        <div>
            <h3>Order sumary</h3>
            <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Cart;