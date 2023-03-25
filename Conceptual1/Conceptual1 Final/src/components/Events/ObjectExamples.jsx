import React, { useState } from 'react';

const ObjectExamples = () => {
    const [value, setValue] = useState({
        name: "Ridoy",
        age: 23,
        hobby: 'Cricket',
    });

    const handleShowMe = () => {
        setValue({
            name: "Hamza",
            age: 26,
            hobby: "Football",
        });
    };

    return (
        <div className='text-center text-2xl mt-5 font-bold'>
            <h1>{value.name}</h1>
            <p>{value.age}</p>
            <p>{value.hobby}</p>
            <button className='btn btn-error' onClick={handleShowMe}>Show Me</button>
        </div>
    );
};

export default ObjectExamples;