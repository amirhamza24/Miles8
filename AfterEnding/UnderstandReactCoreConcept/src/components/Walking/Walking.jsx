import React from 'react';

const Walking = (props) => {
    return (
        <div style={{border: '2px dotted green', padding: '15px', margin: '15px'}}>
            <h4>This is Walking Components...</h4>
            <p>Walking Steps: {props.steps}</p>

        </div>
    );
};

export default Walking;