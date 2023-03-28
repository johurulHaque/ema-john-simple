import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    
    const handleAddToCart = (product)=>{        
        const newCart = [...cart,product];    
        setCart(newCart);
    }

    let item = 0;
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        item += 1;
        total += product.price;
        shipping += product.shipping;
        console.log(product);
    }
    const tax = (total * 7) / 100;
    const grandTotal = total + shipping + tax;

    console.log(item);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2>Order Summary</h2>
                <p>Selected Item: {item}</p>
                <p>Total : $ {total}</p>
                <p>Total Shipping Charge: {shipping}</p>
                <p>Tax: {tax}</p>
                <h6>Grand Total: {grandTotal}</h6>
            </div>
        </div>
    );
};

export default Shop;