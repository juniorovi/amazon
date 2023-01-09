import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props)
    const { name, price, img, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p><small>Price: ${price}</small></p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button className='btn-cart'><p>Add to cart</p></button>
        </div>
    );
};

export default Product;