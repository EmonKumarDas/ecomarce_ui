import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Files/Footer/Footer';
import SecondHeader from '../Files/Header/SecondHeader/SecondHeader';
import TopHeader from '../Files/Header/TopHeader/TopHeader';

const LayOut = () => {
    return (
        <>
            <TopHeader></TopHeader>
            <SecondHeader></SecondHeader>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default LayOut;