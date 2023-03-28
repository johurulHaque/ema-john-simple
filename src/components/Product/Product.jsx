import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props)
    const {id,name,img,price,ratings,seller,shipping} = props.product;
    const  handleAddToCart =  props.handleAddToCart;

    return (
        <div className='product'>
           <img src={img} alt="" /> 
           <div className='product-info'>            
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star</p>
           </div>
           <button className='btn-cart' onClick={()=> handleAddToCart(id)}>Add to Cart <FontAwesomeIcon icon={faEnvelope} /></button>
        </div>
    );
};

export default Product;