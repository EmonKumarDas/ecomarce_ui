import React, { useEffect, useRef, useState } from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';

const Card = ({
  img,
  name,
  price,
  category,
  types
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const intersection = useIntersection(cardRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  });

  useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0.5) {
      setIsVisible(true);
    }
  }, [intersection]);

  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(cardRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' });
    }
  }, [isVisible]);

  return (
    <div ref={cardRef} className={`col-lg-3 col-md-4 col-sm-6 mix ${category} ${types}`}>
      <div className="featured__item">
        <div className="featured__item__pic set-bg" data-setbg={img}>
          <ul className="featured__item__pic__hover">
            <li><a href="#"><i className="fa fa-heart"></i></a></li>
            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
          </ul>
        </div>
        <div className="featured__item__text">
          <h6><a href="#">{name}</a></h6>
          <h5>{price}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
