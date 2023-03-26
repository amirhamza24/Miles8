import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;

    const addToCart = (id) => {
        console.log('Item Added', id);   
    }

    const addToCartWithParam = () => addToCart(id);

    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: $ {price}</p>
            <p><small>It has Id: {id}</small></p>
            
            <button onClick={addToCartWithParam}>Add to Cart</button>
            <button onClick={() => addToCart(id)}>Add to Cart : Shortcut</button>   
        </div>
    );
};

// beshi use korbona eta

export default Cosmetic;