import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    
    const handleAddToCart = (product)=>{        
        const newCart = [...cart,product];    
        setCart(newCart);
        addToDb(product.id);
    }

    useEffect(()=>{
        const storedCart = getShoppingCart();
        console.log(storedCart);
    },[]);
   

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
                <Cart cart={cart}> </Cart>
            </div>
        </div>
    );
};

export default Shop;