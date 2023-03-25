import React, { useState } from 'react';

const Basic = () => {
    const [value, setValue] = useState(0);

    const handleCountIncrease = () => {
        setValue(value + 1);
    }
    const handleCountDecrease = () => {
        setValue(value - 1);
    }
    return (
        <div className='text-center text-3xl mt-6'>
            <h1>Count: {value} </h1>
            <button onClick={handleCountIncrease} className='btn primary mr-2'>Plus</button>
            <button onClick={handleCountDecrease} className='btn error'>Minus</button>
        </div>
    );
};

export default Basic;