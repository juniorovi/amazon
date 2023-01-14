import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'

// const Product = (props) => {
    // const {product, handleAddToCart}= props;
    const Product =({product, handleAddToCart})=>{
    const { name, price, img, seller, ratings } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p><small>Price: ${price}</small></p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button onClick={() =>handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Product;