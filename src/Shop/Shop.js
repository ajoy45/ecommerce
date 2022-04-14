import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([]);
    const[cart,setCart]=useState([]);
    
    // console.log(cart);
    // console.log(products);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const AddToCart=(selectProduct)=>{
        const newCart=[...cart,selectProduct]
        setCart(newCart)
    }
   
    return (
        <div className='shop'>
            <div className="product-container">
              {
                  products.map(product=> <Product
                    key={product.id}
                    product={product}
                     AddToCart={AddToCart}
                   ></Product>)
                
              }
             
            </div>
            <div   className="choice-product">
                <h1 className='select-pro'>SELECT PRODUCT</h1>
                
                <Cart
                cart={cart}
                products={products}
                ></Cart>
                
            </div>
        </div>
    );
};

export default Shop;