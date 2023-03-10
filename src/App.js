import React from 'react';
import { RouterProvider } from 'react-router-dom';
import SecondHeader from './Components/Files/Header/SecondHeader/SecondHeader';
import TopHeader from './Components/Files/Header/TopHeader/TopHeader';
import Features from './Components/Files/Home/Features/Features';
import router from './Components/Router/Router';

const App = () => {
  return (
    <div className="MainDiv">
    <div class="humberger__menu__overlay"></div>
      {/* <div class="humberger__menu__wrapper">
          <div class="humberger__menu__logo">
              <a href="#" class="logo">V-Shop</a>
          </div>
          <div class="humberger__menu__cart">
              <ul>
                  <li><a href="#"><i class="fa fa-heart"></i> <span>1</span></a></li>
                  <li><a href="#"><i class="fa fa-shopping-bag"></i> <span>3</span></a></li>
              </ul>
              <div class="header__cart__price">item: <span>$150.00</span></div>
          </div>
          <div class="humberger__menu__widget">
              <div class="header__top__right__language">
                  <img src="assets/img/language.png" alt="" />
                  <div>English</div>
                  <span class="arrow_carrot-down"></span>
                  <ul>
                      <li><a href="#">Spanis</a></li>
                      <li><a href="#">English</a></li>
                  </ul>
              </div>
              <div class="header__top__right__auth">
                  <a href="#"><i class="fa fa-user"></i> Login</a>
              </div>
          </div>
          <nav class="humberger__menu__nav mobile-menu">
              <ul>
                  <li class="active"><a href="#">Home</a></li>
                  <li><a href="#">Shop</a></li>
                  <li><a href="#">Pages</a>
                      <ul class="header__menu__dropdown">
                          <li><a href="#">Shop Details</a></li>
                          <li><a href="#">Shoping Cart</a></li>
                          <li><a href="#">Check Out</a></li>
                          <li><a href="#">Blog Details</a></li>
                      </ul>
                  </li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
          </nav>
          <div id="mobile-menu-wrap"></div>
          <div class="header__top__right__social">
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-linkedin"></i></a>
              <a href="#"><i class="fa fa-pinterest-p"></i></a>
          </div>
          <div class="humberger__menu__contact">
              <ul>
                  <li><i class="fa fa-envelope"></i> therichposts@gmail.com</li>
                  <li>Free Shipping for all Order of $99</li>
              </ul>
          </div>
      </div> */}
     {/* -------*******************************************----------------------------------------------- */}
     <RouterProvider router={router} />
    
      {/* <section class="categories">
          <div class="container">
              <div class="row">
                  <div class="categories__slider owl-carousel">
                      <div class="col-lg-3">
                          <div class="categories__item set-bg" data-setbg="assets/img/categories/cat-1.jpg">
                              <h5><a href="#">Fresh Fruit</a></h5>
                          </div>
                      </div>
                      <div class="col-lg-3">
                          <div class="categories__item set-bg" data-setbg="assets/img/categories/cat-2.jpg">
                              <h5><a href="#">Dried Fruit</a></h5>
                          </div>
                      </div>
                      <div class="col-lg-3">
                          <div class="categories__item set-bg" data-setbg="assets/img/categories/cat-3.jpg">
                              <h5><a href="#">Vegetables</a></h5>
                          </div>
                      </div>
                      <div class="col-lg-3">
                          <div class="categories__item set-bg" data-setbg="assets/img/categories/cat-4.jpg">
                              <h5><a href="#">drink fruits</a></h5>
                          </div>
                      </div>
                      <div class="col-lg-3">
                          <div class="categories__item set-bg" data-setbg="assets/img/categories/cat-5.jpg">
                              <h5><a href="#">drink fruits</a></h5>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section> */}
    
      {/* <Features></Features> */}
    
      {/* <div class="banner">
          <div class="container">
              <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6">
                      <div class="banner__pic">
                          <img src="assets/img/banner/banner-1.jpg" alt="" />
                      </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6">
                      <div class="banner__pic">
                          <img src="assets/img/banner/banner-2.jpg" alt="" />
                      </div>
                  </div>
              </div>
          </div>
      </div> */}
   
      {/* <section class="latest-product spad">
          <div class="container">
              <div class="row">
                  <div class="col-lg-4 col-md-6">
                      <div class="latest-product__text">
                          <h4>Latest Products</h4>
                          <div class="latest-product__slider owl-carousel">
                              <div class="latest-prdouct__slider__item">
                                  <a href="#" class="latest-product__item">
                                      <div class="latest-product__item__pic">
                                          <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                      </div>
                                      <div class="latest-product__item__text">
                                          <h6>Crab Pool Security</h6>
                                          <span>$30.00</span>
                                      </div>
                                  </a>
                                  <a href="#" class="latest-product__item">
                                      <div class="latest-product__item__pic">
                                          <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                      </div>
                                      <div class="latest-product__item__text">
                                          <h6>Crab Pool Security</h6>
                                          <span>$30.00</span>
                                      </div>
                                  </a>
                                  <a href="#" class="latest-product__item">
                                      <div class="latest-product__item__pic">
                                          <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                      </div>
                                      <div class="latest-product__item__text">
                                          <h6>Crab Pool Security</h6>
                                          <span>$30.00</span>
                                      </div>
                                  </a>
                              </div>
                              <div class="latest-prdouct__slider__item">
                                  <a href="#" class="latest-product__item">
                                      <div class="latest-product__item__pic">
                                          <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                      </div>
                                      <div class="latest-product__item__text">
                                          <h6>Crab Pool Security</h6>
                                          <span>$30.00</span>
                                      </div>
                                  </a>
                                  <a href="#" class="latest-product__item">
                                      <div class="latest-product__item__pic">
                                          <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                      </div>
                                      <div class="latest-product__item__text">
                                          <h6>Crab Pool Security</h6>
                                          <span>$30.00</span>
                                      </div>
                                  </a>
                                  <a href="#" class="latest-product__item">
                                      <div class="latest-product__item__pic">
                                          <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                      </div>
                                      <div class="latest-product__item__text">
                                          <h6>Crab Pool Security</h6>
                                          <span>$30.00</span>
                                      </div>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                      <div class="latest-product__text">
                          <h4>Top Rated Products</h4>
                          <div class="latest-product__slider owl-carousel">
                              <div class="latest-prdouct__slider__item">
                                  <a href="#" class="latest-product__item">
                                      <div class="latest-product__item__pic">
                                          <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                      </div>
                                      <div class="latest-product__item__text">
                                          <h6>Crab Pool Security</h6>
                                          <span>$30.00</span>
                                      </div>
                                  </a>
                                  <a href="#" class="latest-product__item">
                                      <div class="latest-product__item__pic">
                                          <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                      </div>
                                      <div class="latest-product__item__text">
                                          <h6>Crab Pool Security</h6>
                                          <span>$30.00</span>
                                      </div>
                                  </a>
                                  <a href="#" class="latest-product__item">
                                      <div class="latest-product__item__pic">
                                          <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                      </div>
                                      <div class="latest-product__item__text">
                                          <h6>Crab Pool Security</h6>
                                          <span>$30.00</span>
                                      </div>
                                  </a>
                              </div>
                              <div class="latest-prdouct__slider__item">
                                  <a href="#" class="latest-product__item">
                                      <div class="latest-product__item__pic">
                                          <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                      </div>
                                      <div class="latest-product__item__text">
                                          <h6>Crab Pool Security</h6>
                                          <span>$30.00</span>
                                      </div>
                                  </a>
                                  <a href="#" class="latest-product__item">
                                      <div class="latest-product__item__pic">
                                          <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                      </div>
                                      <div class="latest-product__item__text">
                                          <h6>Crab Pool Security</h6>
                                          <span>$30.00</span>
                                      </div>
                                  </a>
                                  <a href="#" class="latest-product__item">
                                      <div class="latest-product__item__pic">
                                          <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                      </div>
                                      <div class="latest-product__item__text">
                                          <h6>Crab Pool Security</h6>
                                          <span>$30.00</span>
                                      </div>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                      <div class="latest-product__text">
                          <h4>Review Products</h4>
                          <div class="latest-product__slider owl-carousel">
                              <div class="latest-prdouct__slider__item">
                                  <a href="#" class="latest-product__item">
                                      <div class="latest-product__item__pic">
                                          <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                      </div>
                                      <div class="latest-product__item__text">
                                          <h6>Crab Pool Security</h6>
                                          <span>$30.00</span>
                                      </div>
                                  </a>
                                  <a href="#" class="latest-product__item">
                                      <div class="latest-product__item__pic">
                                          <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                      </div>
                                      <div class="latest-product__item__text">
                                          <h6>Crab Pool Security</h6>
                                          <span>$30.00</span>
                                      </div>
                                  </a>
                                  <a href="#" class="latest-product__item">
                                      <div class="latest-product__item__pic">
                                          <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                      </div>
                                      <div class="latest-product__item__text">
                                          <h6>Crab Pool Security</h6>
                                          <span>$30.00</span>
                                      </div>
                                  </a>
                              </div>
                              <div class="latest-prdouct__slider__item">
                                  <a href="#" class="latest-product__item">
                                      <div class="latest-product__item__pic">
                                          <img src="assets/img/latest-product/lp-1.jpg" alt="" />
                                      </div>
                                      <div class="latest-product__item__text">
                                          <h6>Crab Pool Security</h6>
                                          <span>$30.00</span>
                                      </div>
                                  </a>
                                  <a href="#" class="latest-product__item">
                                      <div class="latest-product__item__pic">
                                          <img src="assets/img/latest-product/lp-2.jpg" alt="" />
                                      </div>
                                      <div class="latest-product__item__text">
                                          <h6>Crab Pool Security</h6>
                                          <span>$30.00</span>
                                      </div>
                                  </a>
                                  <a href="#" class="latest-product__item">
                                      <div class="latest-product__item__pic">
                                          <img src="assets/img/latest-product/lp-3.jpg" alt="" />
                                      </div>
                                      <div class="latest-product__item__text">
                                          <h6>Crab Pool Security</h6>
                                          <span>$30.00</span>
                                      </div>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section> */}
  </div>
  );
};

export default App;
