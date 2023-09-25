import React from 'react';
import Walking from '../Walking/Walking';

const Dial = (props) => {
    return (
        <div style={{border: '2px dotted red', padding: '15px', margin: '15px'}}>
            <h3>This is Dial Components...</h3>
            <p>Your Steps: {props.steps}</p>
            <Walking steps={props.steps}></Walking>
        </div>
    );
};

export default Dial;