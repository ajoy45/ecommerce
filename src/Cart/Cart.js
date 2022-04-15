import React, { useEffect, useState } from 'react';
import './Cart.css'
const Cart = ({cart,products}) => {
      const[changeImg,setChangeImg]=useState(false);
      const [checkCart,setCheckCart]=useState(false);
      const[offer,setOffer]=useState({});
      const AddTOffer=()=>{
        const randomNumber=Math.floor( Math.random()*products.length);
        const item=products[randomNumber];
        setOffer(item);
    }
    useEffect(()=>{
        if(cart.length>0){
            setCheckCart(true);
        }
    },[cart.length])
    return (
        <div 
         onMouseEnter={()=>setChangeImg(true)}
         onMouseLeave={()=>setChangeImg(false)}
        >
                 <div>
            {
             cart.map(product=><div className='select-product-design'>
                 <img width={50} height={50} src={changeImg?product.sideImage:product.pairImage} alt=''/>
                 <div className='heading'>
                 <h3>{product.name}</h3>
                 <h5>${product.price}</h5>
                 <h5>{product.quantity}</h5>
                 </div>
                 
                 
             </div>)
            }
            <small>Bue one take one</small>
            <button onClick={AddTOffer} className='bueOneBtn' disabled={!checkCart}>BUE ONE GET ONE</button>
             { Object.keys(offer).length>0 &&<div className='select-product-design'>
                 <img width={50} height={50} src={changeImg?offer.sideImage:offer.pairImage} alt=''/>
                 <div className='heading'>
                 <h3>{offer.name}</h3>
                 <h5>{offer.color}</h5>
                 </div>
                 
                 
             </div>}
            
        </div>
        </div>
       
    );
};

export default Cart;