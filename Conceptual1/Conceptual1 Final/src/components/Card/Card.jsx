import React from 'react';
import Image from './Image';
import Price from './Price';
import Title from './Title';
import "./Card.css"

const Card = (props) => {
    console.log(props.item);

    const { name, img, price } = props.item;

    return (
        <div>
            <img className='w-96' src={img} alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
        </div>
    );
};

export default Card;