import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import anime from "animejs"; 
import $ from "jquery"; 
import ProgressBar from "progressbar.js";
import "./scss/style.scss";

function Home() {
  const [userData, setUserData] = useState(null);
  const userId = "65b3a22c01d900e96c4219ae";
  const apiUrl = `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`;

  useEffect(() => {
    
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching user data: ", error));
  }, [apiUrl]);

  return (

    <div>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="theme-color" content="#2B2B35" />
      <link rel="shortcut icon" href="img/thumbnail.ico" type="image/x-icon" />
      <link rel="stylesheet" href="css/plugins/bootstrap.min.css" />
      <link rel="stylesheet" href="css/plugins/font-awesome.min.css" />
      <link rel="stylesheet" href="css/plugins/swiper.min.css" />
      <link rel="stylesheet" href="css/plugins/fancybox.min.css" />
      <link rel="stylesheet" href="css/style.css" />
      <title>Arter</title>
      <div className="art-app">
        <div className="art-mobile-top-bar" />
        <div className="art-app-wrapper">
          <div className="art-app-container">
            <div className="art-info-bar">
              <div className="art-info-bar-frame">
                <div className="art-info-bar-header">
                  <a className="art-info-bar-btn" href="#.">
                    <i className="fas fa-ellipsis-v" />
                  </a>
                </div>
                <div className="art-header">
                  <div className="art-avatar">
                    <a
                      data-fancybox="avatar"
                      href="img/face-1.jpg"
                      className="art-avatar-curtain"
                    >
                      <img src="img/face-1.jpg" alt="avatar" />
                      <i className="fas fa-expand" />
                    </a>
                    <div className="art-lamp-light">
                      <div className="art-available-lamp" />
                    </div>
                  </div>
                  <h5 className="art-name mb-10">
                    <a href="/home.html">Artur Carter</a>
                  </h5>
                  <div className="art-sm-text">
                    Front-end Deweloper <br />
                    Ui/UX Designer,
                  </div>
                </div>
                <div id="scrollbar2" className="art-scroll-frame">
                  <div className="art-table p-15-15">
                    <ul>
                      <li>
                        <h6>Residence:</h6>
                        <span>Canada</span>
                      </li>
                      <li>
                        <h6>City:</h6>
                        <span>Toronto</span>
                      </li>
                      <li>
                        <h6>Age:</h6>
                        <span>26</span>
                      </li>
                    </ul>
                  </div>
                  <div className="art-ls-divider" />
                  <div className="art-lang-skills p-30-15">
                    <div className="art-lang-skills-item">
                      <div id="circleprog1" className="art-cirkle-progress" />
                      <h6>French</h6>
                    </div>
                    <div className="art-lang-skills-item">
                      <div id="circleprog2" className="art-cirkle-progress" />
                      <h6>English</h6>
                    </div>
                    <div className="art-lang-skills-item">
                      <div id="circleprog3" className="art-cirkle-progress" />
                      <h6>Spanish</h6>
                    </div>
                  </div>
                  <div className="art-ls-divider" />
                  <div className="art-hard-skills p-30-15">
                    <div className="art-hard-skills-item">
                      <div className="art-skill-heading">
                        <h6>html</h6>
                      </div>
                      <div className="art-line-progress">
                        <div id="lineprog1" />
                      </div>
                    </div>
                    <div className="art-hard-skills-item">
                      <div className="art-skill-heading">
                        <h6>CSS</h6>
                      </div>
                      <div className="art-line-progress">
                        <div id="lineprog2" />
                      </div>
                    </div>
                    <div className="art-hard-skills-item">
                      <div className="art-skill-heading">
                        <h6>Js</h6>
                      </div>
                      <div className="art-line-progress">
                        <div id="lineprog3" />
                      </div>
                    </div>
                    <div className="art-hard-skills-item">
                      <div className="art-skill-heading">
                        <h6>PHP</h6>
                      </div>
                      <div className="art-line-progress">
                        <div id="lineprog4" />
                      </div>
                    </div>
                    <div className="art-hard-skills-item">
                      <div className="art-skill-heading">
                        <h6>Wordpress</h6>
                      </div>
                      <div className="art-line-progress">
                        <div id="lineprog5" />
                      </div>
                    </div>
                  </div>
                  <div className="art-ls-divider" />
                  <ul className="art-knowledge-list p-15-0">
                    <li>Bootstrap, Materialize</li>
                    <li>Stylus, Sass, Less</li>
                    <li>Gulp, Webpack, Grunt</li>
                    <li>GIT knowledge</li>
                  </ul>
                  <div className="art-ls-divider" />
                  <div className="art-links-frame p-15-15">
                    <a href="files/cv.txt" className="art-link" download>
                      Download cv <i className="fas fa-download" />
                    </a>
                  </div>
                </div>
                <div className="art-ls-social">
                  <a href="#." target="_blank">
                    <i className="far fa-circle" />
                  </a>
                  <a href="#." target="_blank">
                    <i className="far fa-circle" />
                  </a>
                  <a href="#." target="_blank">
                    <i className="far fa-circle" />
                  </a>
                  <a href="#." target="_blank">
                    <i className="far fa-circle" />
                  </a>
                  <a href="#." target="_blank">
                    <i className="far fa-circle" />
                  </a>
                </div>
              </div>
            </div>
            <div className="art-content">
              <div className="art-curtain" />
              <div className="art-top-bg" style={{}}>
                <div className="art-top-bg-overlay" />
              </div>
              <div className="transition-fade" id="swup">
                <div id="scrollbar" className="art-scroll-frame">
                  <div className="container-fluid">
                    <div className="row p-60-0 p-lg-30-0 p-md-15-0">
                      <div className="col-lg-12">
                        <div className="art-a art-banner" style={{}}>
                          <div className="art-banner-back" />
                          <div className="art-banner-dec" />
                          <div className="art-banner-overlay">
                            <div className="art-banner-title">
                              <h1 className="mb-15">
                                Discover my Amazing <br />
                                Art Space!
                              </h1>
                              <div className="art-lg-text art-code mb-25">
                                &lt;<i>code</i>&gt; I build
                                <span
                                  className="txt-rotate"
                                  data-period={2000}
                                  data-rotate='[ "web interfaces.", "ios and android applications.", "design mocups.", "automation tools." ]'
                                />
                                &lt;/<i>code</i>&gt;
                              </div>
                              <div className="art-buttons-frame">
                                <Link to="/onepage">
                                  <button className="art-btn art-btn-md">
                                    <span>Explore now</span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                            <img
                              src="img/face-2.png"
                              className="art-banner-photo"
                              alt="Your Name"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid">
                    <div className="row p-30-0">
                      <div className="col-md-3 col-6">
                        <div className="art-counter-frame">
                          <div className="art-counter-box">
                            <span className="art-counter">10</span>
                            <span className="art-counter-plus">+</span>
                          </div>
                          <h6>Years Experience</h6>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="art-counter-frame">
                          <div className="art-counter-box">
                            <span className="art-counter">143</span>
                          </div>
                          <h6>Completed Projects</h6>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="art-counter-frame">
                          <div className="art-counter-box">
                            <span className="art-counter">114</span>
                          </div>
                          <h6>Happy Customers</h6>
                        </div>
                      </div>
                      <div className="col-md-3 col-6">
                        <div className="art-counter-frame">
                          <div className="art-counter-box">
                            <span className="art-counter">20</span>
                            <span className="art-counter-plus">+</span>
                          </div>
                          <h6>Honors and Awards</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="art-section-title">
                          <div className="art-title-frame">
                            <h4>My Services</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="art-a art-service-icon-box">
                          <div className="art-service-ib-content">
                            <h5 className="mb-15">Web Development</h5>
                            <div className="mb-15">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Delectus esse commodi deserunt
                              vitae, vero quasi! Veniam quaerat tenetur pariatur
                              doloribus.
                            </div>
                            <div className="art-buttons-frame">
                              <a
                                href="/contact.html"
                                className="art-link art-color-link art-w-chevron"
                              >
                                Order now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="art-a art-service-icon-box">
                          <div className="art-service-ib-content">
                            <h5 className="mb-15">UI/UX Design</h5>
                            <div className="mb-15">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Delectus esse commodi deserunt
                              vitae, vero quasi! Veniam quaerat tenetur pariatur
                              doloribus.
                            </div>
                            <div className="art-buttons-frame">
                              <a
                                href="/contact.html"
                                className="art-link art-color-link art-w-chevron"
                              >
                                Order now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="art-a art-service-icon-box">
                          <div className="art-service-ib-content">
                            <h5 className="mb-15">Sound Design</h5>
                            <div className="mb-15">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Delectus esse commodi deserunt
                              vitae, vero quasi! Veniam quaerat tenetur pariatur
                              doloribus.
                            </div>
                            <div className="art-buttons-frame">
                              <a
                                href="/contact.html"
                                className="art-link art-color-link art-w-chevron"
                              >
                                Order now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="art-a art-service-icon-box">
                          <div className="art-service-ib-content">
                            <h5 className="mb-15">Game Design</h5>
                            <div className="mb-15">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Delectus esse commodi deserunt
                              vitae, vero quasi! Veniam quaerat tenetur pariatur
                              doloribus.
                            </div>
                            <div className="art-buttons-frame">
                              <a
                                href="/contact.html"
                                className="art-link art-color-link art-w-chevron"
                              >
                                Order now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="art-a art-service-icon-box">
                          <div className="art-service-ib-content">
                            <h5 className="mb-15">Advertising</h5>
                            <div className="mb-15">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Delectus esse commodi deserunt
                              vitae, vero quasi! Veniam quaerat tenetur pariatur
                              doloribus.
                            </div>
                            <div className="art-buttons-frame">
                              <a
                                href="/contact.html"
                                className="art-link art-color-link art-w-chevron"
                              >
                                Order now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid">
                    <div className="row p-0-0">
                      <div className="col-lg-12">
                        <div className="art-section-title">
                          <div className="art-title-frame">
                            <h4>Price Plans</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="art-a art-price">
                          <div className="art-price-body">
                            <h5 className="mb-30">Starter Price</h5>
                            <div className="art-price-cost">
                              <div className="art-number">
                                FREE<sup>*</sup>
                              </div>
                            </div>
                            <ul className="art-price-list">
                              <li>Ui Design</li>
                              <li>Web Development</li>
                              <li className="art-empty-item">Logo design</li>
                              <li className="art-empty-item">
                                SEO optimization
                              </li>
                              <li className="art-empty-item">
                                Wordpress integration
                              </li>
                            </ul>
                            <a
                              href="/contact.html"
                              className="art-link art-color-link art-w-chevron"
                            >
                              Order now
                            </a>
                            <div className="art-asterisk">
                              <sup>*</sup>Free only when ordering paid services
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="art-a art-price art-popular-price">
                          <div className="art-price-body">
                            <h5 className="mb-30">Hourly payment</h5>
                            <div className="art-price-cost">
                              <div className="art-number">
                                <span>$</span>29<span>h</span>
                              </div>
                            </div>
                            <ul className="art-price-list">
                              <li>Ui Design</li>
                              <li>Web Development</li>
                              <li>Logo design</li>
                              <li className="art-empty-item">
                                SEO optimization
                              </li>
                              <li className="art-empty-item">
                                Wordpress integration
                              </li>
                            </ul>
                            <a
                              href="/contact.html"
                              className="art-link art-color-link art-w-chevron"
                            >
                              Order now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="art-a art-price">
                          <div className="art-price-body">
                            <h5 className="mb-30">Full time</h5>
                            <div className="art-price-cost">
                              <div className="art-number">
                                <span>$</span>2999<span>m</span>
                              </div>
                            </div>
                            <ul className="art-price-list">
                              <li>Ui Design</li>
                              <li>Web Development</li>
                              <li>Logo design</li>
                              <li>SEO optimization</li>
                              <li>Wordpress integration</li>
                            </ul>
                            <a
                              href="/contact.html"
                              className="art-link art-color-link art-w-chevron"
                            >
                              Order now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="art-section-title">
                          <div className="art-title-frame">
                            <h4>Recommendations</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div
                          className="swiper-container art-testimonial-slider"
                          style={{ overflow: "visible" }}
                        >
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="art-a art-testimonial">
                                <div className="testimonial-body">
                                  <img
                                    className="art-testimonial-face"
                                    src="img/testimonials/face-1.jpg"
                                    alt="face"
                                  />
                                  <h5>Paul Trueman</h5>
                                  <div className="art-el-suptitle mb-15">
                                    Template author
                                  </div>
                                  <div className="mb-15">
                                    Working with Artur has been a pleasure.
                                    Better yet - I alerted them of a minor issue
                                    before going to sleep. The issue was fixed
                                    the next morning. I couldn't ask for better
                                    support. Thank you Artur! This is easily a 5
                                    star freelancer.
                                  </div>
                                </div>
                                <div className="art-testimonial-footer">
                                  <div className="art-left-side">
                                    <ul className="art-star-rate">
                                      <li>
                                        <i className="fas fa-star" />
                                      </li>
                                      <li>
                                        <i className="fas fa-star" />
                                      </li>
                                      <li>
                                        <i className="fas fa-star" />
                                      </li>
                                      <li>
                                        <i className="fas fa-star" />
                                      </li>
                                      <li>
                                        <i className="fas fa-star" />
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="art-right-side" />
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="art-a art-testimonial">
                                <div className="testimonial-body">
                                  <img
                                    className="art-testimonial-face"
                                    src="img/testimonials/face-2.jpg"
                                    alt="face"
                                  />
                                  <h5>Paul Trueman</h5>
                                  <div className="art-el-suptitle mb-15">
                                    Template author
                                  </div>
                                  <div className="mb-15">
                                    Working with Artur has been a pleasure.
                                    Better yet - I alerted them of a minor issue
                                    before going to sleep. The issue was fixed
                                    the next morning. I couldn't ask for better
                                    support. Thank you Artur! This is easily a 5
                                    star freelancer.
                                  </div>
                                </div>
                                <div className="art-testimonial-footer">
                                  <div className="art-left-side">
                                    <ul className="art-star-rate">
                                      <li>
                                        <i className="fas fa-star" />
                                      </li>
                                      <li>
                                        <i className="fas fa-star" />
                                      </li>
                                      <li>
                                        <i className="fas fa-star" />
                                      </li>
                                      <li>
                                        <i className="fas fa-star" />
                                      </li>
                                      <li className="art-empty-item">
                                        <i className="fas fa-star" />
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="art-right-side" />
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="art-a art-testimonial">
                                <div className="testimonial-body">
                                  <img
                                    className="art-testimonial-face"
                                    src="img/testimonials/face-3.jpg"
                                    alt="face"
                                  />
                                  <h5>Paul Trueman</h5>
                                  <div className="art-el-suptitle mb-15">
                                    Template author
                                  </div>
                                  <div className="mb-15">
                                    Working with Artur has been a pleasure.
                                    Better yet - I alerted them of a minor issue
                                    before going to sleep. The issue was fixed
                                    the next morning. I couldn't ask for better
                                    support. Thank you Artur! This is easily a 5
                                    star freelancer.
                                  </div>
                                </div>
                                <div className="art-testimonial-footer">
                                  <div className="art-left-side">
                                    <ul className="art-star-rate">
                                      <li>
                                        <i className="fas fa-star" />
                                      </li>
                                      <li>
                                        <i className="fas fa-star" />
                                      </li>
                                      <li>
                                        <i className="fas fa-star" />
                                      </li>
                                      <li>
                                        <i className="fas fa-star" />
                                      </li>
                                      <li>
                                        <i className="fas fa-star" />
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="art-right-side" />
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="art-a art-testimonial">
                                <div className="testimonial-body">
                                  <img
                                    className="art-testimonial-face"
                                    src="img/testimonials/face-4.jpg"
                                    alt="face"
                                  />
                                  <h5>Paul Trueman</h5>
                                  <div className="art-el-suptitle mb-15">
                                    Template author
                                  </div>
                                  <div className="mb-15">
                                    Working with Artur has been a pleasure.
                                    Better yet - I alerted them of a minor issue
                                    before going to sleep. The issue was fixed
                                    the next morning. I couldn't ask for better
                                    support. Thank you Artur! This is easily a 5
                                    star freelancer.
                                  </div>
                                </div>
                                <div className="art-testimonial-footer">
                                  <div className="art-left-side">
                                    <ul className="art-star-rate">
                                      <li>
                                        <i className="fas fa-star" />
                                      </li>
                                      <li>
                                        <i className="fas fa-star" />
                                      </li>
                                      <li>
                                        <i className="fas fa-star" />
                                      </li>
                                      <li>
                                        <i className="fas fa-star" />
                                      </li>
                                      <li>
                                        <i className="fas fa-star" />
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="art-right-side" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="art-slider-navigation">
                          <div className="art-sn-left">
                            <div className="swiper-pagination" />
                          </div>
                          <div className="art-sn-right">
                            <div className="art-slider-nav-frame">
                              <div className="art-slider-nav art-testi-swiper-prev">
                                <i className="fas fa-chevron-left" />
                              </div>
                              <div className="art-slider-nav art-testi-swiper-next">
                                <i className="fas fa-chevron-right" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-6 col-lg-3">
                        <img
                          className="art-brand"
                          src="img/brands/1.png"
                          alt="brand"
                        />
                      </div>
                      <div className="col-6 col-lg-3">
                        <img
                          className="art-brand"
                          src="img/brands/2.png"
                          alt="brand"
                        />
                      </div>
                      <div className="col-6 col-lg-3">
                        <img
                          className="art-brand"
                          src="img/brands/3.png"
                          alt="brand"
                        />
                      </div>
                      <div className="col-6 col-lg-3">
                        <img
                          className="art-brand"
                          src="img/brands/1.png"
                          alt="brand"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid">
                    <footer>
                      <div>© 2020 Artur Carter</div>
                      <div>
                        Template author:&nbsp;
                        <a
                          href="https://themeforest.net/user/millerdigitaldesign"
                          target="_blank"
                        >
                          Nazar Miller
                        </a>
                      </div>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
            <div className="art-menu-bar">
            <div className="art-menu-bar-frame">
              <div className="art-menu-bar-header">
                <a className="art-menu-bar-btn" href="#."> <span></span> </a>
              </div>
              <div className="art-current-page"></div>
              <div className="art-scroll-frame">
                <nav id="swupMenu">
                    <ul className="main-menu">
                      <li className="menu-item current-menu-item">
                        <Link to="/home.html">Home</Link>
                      </li>
                      <li className="menu-item menu-item-has-children">
                        <Link to="#.">Portfolio</Link>
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <Link to="/portfolio-2-col.html">2 column</Link>
                          </li>
                          <li className="menu-item">
                            <Link to="/portfolio-3-col.html">3 column</Link>
                          </li>
                          <li className="menu-item">
                            <Link to="/portfolio-2-col-masonry.html">
                              2 column masonry
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link to="/portfolio-3-col-masonry.html">
                              3 column masonry
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link to="/portfolio-single.html">
                              Single project
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link to="/portfolio-single-2.html">
                              Single project 2
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <Link to="/history.html">History</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/contact.html">Contact</Link>
                      </li>
                      <li className="menu-item menu-item-has-children">
                        <Link to="#.">Blog</Link>
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <Link to="/blog-2-col.html">2 column</Link>
                          </li>
                          <li className="menu-item">
                            <Link to="/blog-3-col.html">3 column</Link>
                          </li>
                          <li className="menu-item">
                            <Link to="/blog-post.html">Publication</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <Link to="/onepage">One Page</Link>
                      </li>
                    </ul>
                  </nav>
                  <ul className="art-language-change">
                    <li>
                      <a href="#.">FR</a>
                    </li>
                    <li className="art-active-lang">
                      <a href="#.">EN</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="art-preloader">
          <div className="art-preloader-content">
            <h4>Artur Carter</h4>
            <div id="preloader" className="art-preloader-load" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
