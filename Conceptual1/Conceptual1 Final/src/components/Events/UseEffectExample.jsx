import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {
    const [value, setValue] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/user`)
        .then(res=>res.json())
        .then(data => {
            setValue(data);
        });
    } ,[]);


    // same thing but this time used "async, await"
    // useEffect(() => {
    //     const loadData = async () => {
    //         const res = await fetch(`https://api.github.com/user`);
    //         const data = await res.json();
    //         setValue(data);
    //     };
    //     loadData();
    // }, []); 


    // same thing using "axios"
    // useEffect(() => {
    //     const loadData = async () => {
    //         const { data } = await axios.get(`https://api.github.com/user`);
    //         setValue(data);
    //     };
    //     loadData();
    // }, []); 


    console.log(value);
    return (
        <div>
            {
                value.map((singleData) => {
                    return <img src={singleData.avatar_url} alt="" />
                })
            }
        </div>
    );
};

export default UseEffectExample;
