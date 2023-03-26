import React from 'react';
import { addToDb } from '../../../Utilities/Fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;

    const addToCart = (id) => {
        addToDb(id);
    }


    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: $ {price}</p>
            <p><small>It has Id: {id}</small></p>
            
            <button onClick={() => addToCart(id)}>Add to Cart</button>   
        </div>
    );
};

// beshi use korbona eta

export default Cosmetic;