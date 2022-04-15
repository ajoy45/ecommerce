import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToLocalStorage, getFromLocalStorage,clearLocalStorage } from '../Utilitis/Utilities';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([]);
    // console.log(products)
    const[cart,setCart]=useState([]);
    
    // console.log(cart);
    // console.log(products);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    
    // for localstorage
    useEffect(()=>{
      if(products.length){
        const storedProductIds=getFromLocalStorage();
      
      const previousCart=[];
      for(const id in storedProductIds){
        // console.log(id);
        const foundProduct=products.find(product=>product.id===id);
         
        if(foundProduct){
          const quantity=storedProductIds[id];
          foundProduct.quantity=quantity;
          previousCart.push(foundProduct)
        }
        setCart(previousCart)
      }
    }
    },[products])
    // selected product
    const AddToCart=(selectProduct)=>{

        let newCart=[];
        const exist=cart.find(product=>product.id===selectProduct.id)
        if(!exist){
             selectProduct.quantity=1;
             newCart=[...cart,selectProduct];
        }
        else{
          const rest=cart.filter(product=>product.id!==selectProduct.id);
          selectProduct.quantity=selectProduct.quantity+1;
          newCart=[...rest,selectProduct];
        }
        // console.log(exist)
        // newCart=[...cart,selectProduct]
        // let newCart = [];

        // const exist = cart.find((product) => product.id === selectProduct.id);
    
        // if (!exist) {
        //   selectProduct.quantity = 1;
        //   newCart = [...cart, selectProduct];
        // } else {
        //   const rest = cart.filter((product) => product.id !== selectProduct.id);
    
        //   selectProduct.quantity = selectProduct.quantity + 1;
        //   newCart = [...rest, selectProduct];
        // }
    
         addToLocalStorage(selectProduct.id);
        setCart(newCart);
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
                <div className='choice-pro-container'>
                <h1 className='select-pro'>SELECT PRODUCT</h1>
                    
                    <Cart
                    cart={cart}
                    products={products}
                    ></Cart>
                </div>
                
            </div>
        </div>
    );
};

export default Shop;