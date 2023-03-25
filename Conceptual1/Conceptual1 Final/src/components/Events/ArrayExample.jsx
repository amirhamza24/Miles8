import React, { useState } from 'react';
import { guns } from "../../../text"

const ArrayExample = () => {
    const [data, setData] = useState(guns);
    console.log(data);

    const singleRemove = (id) => {
        const filteredData = data.filter((d) => d.id != id);
        setData(filteredData);
    }

    const handleRemove = () => {
        setData([]);
    }

    return (
        <div>
            <div className='text-center text-xl font-bold my-4'>
            {
                data && data.map((singleData) => (
                    <>
                        <p>Name: {singleData.name}</p>
                        <button onClick={() => singleRemove(singleData.id)} className='btn btn-primary mt-4'>Remove</button>
                    </>
                ))
            }
            </div>
            <div className='text-center'>
                <button onClick={handleRemove} className='btn btn-accent'>Remove All</button>

                {/* this button will also work same thing */}
                {/* <button onClick={() => setData([])} className='btn btn-accent'>Remove All</button> */}
            </div>
        </div>
    );
};

export default ArrayExample;