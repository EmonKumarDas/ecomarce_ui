import React, { useState, useEffect } from 'react';
// import './Carousel.css';

const Carousel = () => {
  const images = [
    {
      url: "https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heroText: (
        <div class="hero__text">
        <span>FRUIT FRESH1</span>
        <h2>Vegetable <br />100% Organic</h2>
        <p>Free Pickup and Delivery Available</p>
        <a href="#" class="primary-btn">SHOP NOW</a>
    </div>
      ),
    },
    {
      url: "https://images.pexels.com/photos/533309/pexels-photo-533309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heroText: (
        <div class="hero__text">
        <span>FRUIT FRESH2</span>
        <h2>Vegetable <br />100% Organic</h2>
        <p>Free Pickup and Delivery Available</p>
        <a href="#" class="primary-btn">SHOP NOW</a>
    </div>
      ),
    },
    {
      url: "https://images.pexels.com/photos/4033025/pexels-photo-4033025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heroText: (
        <div class="hero__text">
        <span>FRUIT FRESH3</span>
        <h2>Vegetable <br />100% Organic</h2>
        <p>Free Pickup and Delivery Available</p>
        <a href="#" class="primary-btn">SHOP NOW</a>
    </div>
      ),
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(handleNext, 5000);
    return () => clearInterval(slideInterval);
  }, [currentImageIndex]);

  const handleNext = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

  return (
    <div className="carousel-container">
      <div className="carousel" style={{ height: "70vh", overflow: "hidden" }}>
        <img src={images[currentImageIndex].url} alt={`slide ${currentImageIndex + 1}`} style={{ maxHeight: "70vh",objectFit:"cover", width: "100%" }} />
        <div className="slide-bg">
          <div className="slide-text">{images[currentImageIndex].heroText}</div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
