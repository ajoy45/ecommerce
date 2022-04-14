import React from 'react';
import img from'../../src/banner.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner'>
            <img src={img} alt="" />
        </div>
    );
};

export default Banner;