import React from 'react';
import Card from '../ProductCard/ProductCard';

const Features = () => {
    const products =
        [
            {
                image: "assets/img/featured/feature-1.jpg",
                name: "Crab Pool Security",
                price: "$30.00",
                categori: "oranges",
                types: "fresh-meat"
            },
            {
                image: "assets/img/featured/feature-2.jpg",
                name: "Crab Pool Security",
                price: "$30.00",
                categori: "vegetables",
                types: "fastfood"

            },
            {
                image: "assets/img/featured/feature-3.jpg",
                name: "Crab Pool Security",
                price: "$30.00",
                categori: "vegetables",
                types: "fresh-meat"
            },
            {
                image: "assets/img/featured/feature-4.jpg",
                name: "Crab Pool Security",
                price: "$30.00",
                categori: "oranges",
                types: "fastfood"
            },
            {
                image: "assets/img/featured/feature-5.jpg",
                name: "Crab Pool Security",
                price: "$30.00",
                categori: "vegetables",
                types: "fastfood"
            },
            {
                image: "assets/img/featured/feature-6.jpg",
                name: "Crab Pool Security",
                price: "$30.00",
                categori: "vegetables",
                types: "fresh-meat"
            },
            {
                image: "assets/img/featured/feature-7.jpg",
                name: "Crab Pool Security",
                price: "$30.00",
                categori: "oranges",
                types: "fastfood"
            },
        ]
    return (
        <section class="featured spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title">
                            <h2>Featured Product</h2>
                        </div>
                        <div class="featured__controls">
                            <ul>
                                <li class="active" data-filter="*">All</li>
                                <li data-filter=".oranges">Oranges</li>
                                <li data-filter=".fresh-meat">Fresh Meat</li>
                                <li data-filter=".vegetables">Vegetables</li>
                                <li data-filter=".fastfood">Fastfood</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row featured__filter">

                    {
                        products.map(product =>
                            <Card
                                img={product.image}
                                name={product.name}
                                price={product.price}
                                categori={product.categori}
                                types={product.types}
                            ></Card>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Features;