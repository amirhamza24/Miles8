import React from 'react';
import { add, multiply } from '../../Utilities/Calculate';

const Shoes = () => {
    const first = 13;
    const second = 11;
    const result = multiply(first, second);

    const sum = add(first, second)
    return (
        <div>
            <h1>This is Shoes Compo!!</h1>
            <p>Result: {result} and Total: {sum}</p>
        </div>
    );
};

export default Shoes;