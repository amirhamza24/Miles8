import React, { useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    
    const increaseSteps = () => {
        const nextSteps = steps + 1;
        setSteps(nextSteps);
    }

    const decreaseSteps = () => {
        const previousSteps = steps - 1;
        setSteps(previousSteps);
    }

    return (
        <div>
            <h1>This is my smart Watch!</h1>
            <p>Steps: {steps}</p>
            <button onClick={decreaseSteps}>Decrease Steps</button>
            <button onClick={increaseSteps}>Increase Steps</button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;