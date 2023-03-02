import React from 'react';
import Carousel from '../Carousal/Slider';
import ImageWithTimeCounter from '../Counter/Couter';
import Features from '../Features/Features';
import Card from '../ProductCard/ProductCard';

const Index = () => {

    return (
        <>
            <Carousel></Carousel>
            <ImageWithTimeCounter></ImageWithTimeCounter>
            <Features></Features>
        </>
    );
};

export default Index;