import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Component/Header/Header';

const Hom = () => {

    const navigation = useNavigation();

    return (
        <div>
            <Header></Header>
            <div>{navigation.state === "loading" && 'Loading...'}</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Hom;