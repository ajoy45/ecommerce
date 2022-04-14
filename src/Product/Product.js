import React, { useState } from 'react';
import'./Product.css'
const Product = (props) => {
    const {name,color,pairImage,sideImage,price}=props.product;
    // console.log(name)
    const[flipImage,setFlipImage]=useState(false);
    
    return (
        <div 
        onMouseEnter={()=>setFlipImage(true)}
        onMouseLeave={()=>setFlipImage(false)}
        
        >
             <div className='product'>
                 <img src={flipImage?sideImage:pairImage} alt="" />
            
            <div className='product-details'>   
                <h1>{name}</h1>
                <p>{color}</p>
                <p>${price}</p>
            </div>
            <button onClick={()=>props.AddToCart(props.product)} className='btn'>Add To Cart</button>
        </div>
             
        </div>
    );
};

export default Product;