import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import anime from "animejs";
import $ from "jquery";
import ProgressBar from "progressbar.js";

function OnePage() {
  useEffect(() => {
    $(document).ready(function () {
      anime({
        targets: ".art-preloader .art-preloader-content",
        opacity: [0, 1],
        delay: 200,
        duration: 600,
        easing: "linear",
        complete: function (anim) {},
      });
      anime({
        targets: ".art-preloader",
        opacity: [1, 0],
        delay: 2200,
        duration: 400,
        easing: "linear",
        complete: function (anim) {
          $(".art-preloader").css("display", "none");
        },
      });
    });

    var bar = new ProgressBar.Line(preloader, {
      strokeWidth: 1.7,
      easing: "easeInOut",
      duration: 1400,
      delay: 750,
      trailWidth: 1.7,
      step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + " %");
      },
    });

    bar.animate(1);
  });

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
      <title>Arter onepage</title>

      <div className="art-app art-app-onepage">
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

                  <h5 className="art-name mb-10">Artur Carter</h5>

                  <div className="art-sm-text">
                    Front-end Deweloper <br />
                    Ui/UX Designer,{" "}
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
                                &lt;<i>code</i>&gt; I build{" "}
                                <span
                                  className="txt-rotate"
                                  data-period={2000}
                                  data-rotate='[ "web interfaces.", "ios and android applications.", "design mocups.", "automation tools." ]'
                                />
                                &lt;/<i>code</i>&gt;
                              </div>
                              <div className="art-buttons-frame">
                                <a href="#." className="art-btn art-btn-md">
                                  <span>Explore now</span>
                                </a>

                                <a
                                  href="#."
                                  className="art-link art-white-link art-w-chevron"
                                >
                                  Hire me
                                </a>
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
                                href="#."
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
                                href="#."
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
                                href="#."
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
                                href="#."
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
                                href="#."
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
                              href="#."
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
                              href="#."
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
                            <h5 className="mb-30"> Full time</h5>

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
                              href="#."
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
                                  <div className="art-right-side"></div>
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
                                  <div className="art-right-side"></div>
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
                                  <div className="art-right-side"></div>
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
                                  <div className="art-right-side"></div>
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
                    <div className="row p-30-0">
                      <div className="col-lg-12">
                        <div className="art-section-title">
                          <div className="art-title-frame">
                            <h4>Works</h4>
                          </div>

                          <div className="art-right-frame">
                            <div className="art-filter">
                              <a
                                href="#"
                                data-filter="*"
                                className="art-link art-current"
                              >
                                All Categories
                              </a>

                              <a
                                href="#"
                                data-filter=".webTemplates"
                                className="art-link"
                              >
                                Web Templates
                              </a>

                              <a
                                href="#"
                                data-filter=".logos"
                                className="art-link"
                              >
                                Logos
                              </a>

                              <a
                                href="#"
                                data-filter=".drawings"
                                className="art-link"
                              >
                                Drawings
                              </a>

                              <a
                                href="#"
                                data-filter=".ui"
                                className="art-link"
                              >
                                UI Elements
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="art-grid art-grid-3-col art-gallery">
                        <div className="art-grid-item webTemplates">
                          <a
                            data-fancybox="gallery"
                            href="img/works/original-size/1.jpg"
                            className="art-a art-portfolio-item-frame art-horizontal"
                          >
                            <img src="img/works/thumbnail/1.jpg" alt="item" />

                            <span className="art-item-hover">
                              <i className="fas fa-expand" />
                            </span>
                          </a>

                          <div className="art-item-description">
                            <h5 className="mb-15">Project title</h5>

                            <a
                              href="#."
                              className="art-link art-color-link art-w-chevron"
                            >
                              Read more
                            </a>
                          </div>
                        </div>

                        <div className="art-grid-item logos">
                          <a
                            data-fancybox="gallery"
                            href="img/works/original-size/2.jpg"
                            className="art-a art-portfolio-item-frame art-vertical"
                          >
                            <img src="img/works/thumbnail/2.jpg" alt="item" />

                            <span className="art-item-hover">
                              <i className="fas fa-expand" />
                            </span>
                          </a>

                          <div className="art-item-description">
                            <h5 className="mb-15">Project title</h5>
                            <div className="mb-15">
                              Sit amet, consectetur adipisicing elit. Quas,
                              architecto.
                            </div>

                            <a
                              href="#."
                              className="art-link art-color-link art-w-chevron"
                            >
                              Read more
                            </a>
                          </div>
                        </div>

                        <div className="art-grid-item drawings">
                          <a
                            data-fancybox="gallery"
                            href="img/works/original-size/3.jpg"
                            className="art-a art-portfolio-item-frame art-square"
                          >
                            <img src="img/works/thumbnail/3.jpg" alt="item" />

                            <span className="art-item-hover">
                              <i className="fas fa-expand" />
                            </span>
                          </a>

                          <div className="art-item-description">
                            <h5 className="mb-15">Project title</h5>
                            <div className="mb-15">
                              Sit amet, consectetur adipisicing elit. Quas,
                              architecto.
                            </div>

                            <a
                              href="#."
                              className="art-link art-color-link art-w-chevron"
                            >
                              Read more
                            </a>
                          </div>
                        </div>

                        <div className="art-grid-item ui">
                          <a
                            data-fancybox="gallery"
                            href="img/works/original-size/4.jpg"
                            className="art-a art-portfolio-item-frame art-vertical"
                          >
                            <img src="img/works/thumbnail/4.jpg" alt="item" />

                            <span className="art-item-hover">
                              <i className="fas fa-expand" />
                            </span>
                          </a>

                          <div className="art-item-description">
                            <h5 className="mb-15">Project title</h5>
                            <div className="mb-15">
                              Sit amet, consectetur adipisicing elit. Quas,
                              architecto.
                            </div>

                            <a
                              href="#."
                              className="art-link art-color-link art-w-chevron"
                            >
                              Read more
                            </a>
                          </div>
                        </div>

                        <div className="art-grid-item webTemplates">
                          <a
                            data-fancybox="gallery"
                            href="img/works/original-size/5.jpg"
                            className="art-a art-portfolio-item-frame art-square"
                          >
                            <img src="img/works/thumbnail/5.jpg" alt="item" />

                            <span className="art-item-hover">
                              <i className="fas fa-expand" />
                            </span>
                          </a>

                          <div className="art-item-description">
                            <h5 className="mb-15">Project title</h5>
                            <div className="mb-15">
                              Sit amet, consectetur adipisicing elit. Quas,
                              architecto.
                            </div>

                            <a
                              href="#."
                              className="art-link art-color-link art-w-chevron"
                            >
                              Read more
                            </a>
                          </div>
                        </div>

                        <div className="art-grid-item logos">
                          <a
                            data-fancybox="gallery"
                            href="img/works/original-size/6.jpg"
                            className="art-a art-portfolio-item-frame art-vertical"
                          >
                            <img src="img/works/thumbnail/6.jpg" alt="item" />

                            <span className="art-item-hover">
                              <i className="fas fa-expand" />
                            </span>
                          </a>

                          <div className="art-item-description">
                            <h5 className="mb-15">Project title</h5>
                            <div className="mb-15">
                              Sit amet, consectetur adipisicing elit. Quas,
                              architecto.
                            </div>

                            <a
                              href="#."
                              className="art-link art-color-link art-w-chevron"
                            >
                              Read more
                            </a>
                          </div>
                        </div>

                        <div className="art-grid-item drawings">
                          <a
                            data-fancybox="gallery"
                            href="img/works/original-size/7.jpg"
                            className="art-a art-portfolio-item-frame art-square"
                          >
                            <img src="img/works/thumbnail/7.jpg" alt="item" />

                            <span className="art-item-hover">
                              <i className="fas fa-expand" />
                            </span>
                          </a>

                          <div className="art-item-description">
                            <h5 className="mb-15">Project title</h5>
                            <div className="mb-15">
                              Sit amet, consectetur adipisicing elit. Quas,
                              architecto.
                            </div>

                            <a
                              href="#."
                              className="art-link art-color-link art-w-chevron"
                            >
                              Read more
                            </a>
                          </div>
                        </div>

                        <div className="art-grid-item ui">
                          <a
                            data-fancybox="gallery"
                            href="img/works/original-size/8.jpg"
                            className="art-a art-portfolio-item-frame art-horizontal"
                          >
                            <img src="img/works/thumbnail/8.jpg" alt="item" />

                            <span className="art-item-hover">
                              <i className="fas fa-expand" />
                            </span>
                          </a>

                          <div className="art-item-description">
                            <h5 className="mb-15">Project title</h5>

                            <a
                              href="#."
                              className="art-link art-color-link art-w-chevron"
                            >
                              Read more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="art-section-title">
                          <div className="art-title-frame">
                            <h4>Education</h4>
                          </div>
                        </div>

                        <div className="art-timeline art-gallery" id="history">
                          <div className="art-timeline-item">
                            <div className="art-timeline-mark-light" />
                            <div className="art-timeline-mark" />
                            <div className="art-a art-timeline-content">
                              <div className="art-card-header">
                                <div className="art-left-side">
                                  <h5>Title of section 1</h5>
                                  <div className="art-el-suptitle mb-15">
                                    Template author
                                  </div>
                                </div>
                                <div className="art-right-side">
                                  <span className="art-date">
                                    jan 2018 - may 2020
                                  </span>
                                </div>
                              </div>
                              <p>
                                Dolor sit amet, consectetur adipisicing elit.
                                Iusto, optio, dolorum provident rerum aut hic
                                quasi placeat iure tempora laudantium ipsa ad
                                debitis unde? Iste voluptatibus minus veritatis
                                qui ut.
                              </p>
                              <a
                                data-fancybox="diplome"
                                href="files/certificate.jpg"
                                className="art-link art-color-link art-w-chevron"
                              >
                                Diplome
                              </a>
                            </div>
                          </div>
                          <div className="art-timeline-item">
                            <div className="art-timeline-mark-light" />
                            <div className="art-timeline-mark" />
                            <div className="art-a art-timeline-content">
                              <div className="art-card-header">
                                <div className="art-left-side">
                                  <h5>Title of section 1</h5>
                                  <div className="art-el-suptitle mb-15">
                                    Template author
                                  </div>
                                </div>
                                <div className="art-right-side">
                                  <span className="art-date">
                                    jan 2018 - may 2020
                                  </span>
                                </div>
                              </div>
                              <div>
                                Consectetur adipisicing elit. Iusto, optio,
                                dolorum provident rerum aut hic quasi placeat
                                iure tempora laudantium ipsa ad debitis unde?
                              </div>
                            </div>
                          </div>
                          <div className="art-timeline-item">
                            <div className="art-timeline-mark-light" />
                            <div className="art-timeline-mark" />
                            <div className="art-a art-timeline-content">
                              <div className="art-card-header">
                                <div className="art-left-side">
                                  <h5>Title of section 1</h5>
                                  <div className="art-el-suptitle mb-15">
                                    Template author
                                  </div>
                                </div>
                                <div className="art-right-side">
                                  <span className="art-date">
                                    jan 2018 - may 2020
                                  </span>
                                </div>
                              </div>
                              <p>
                                Dolorum provident rerum aut hic quasi placeat
                                iure tempora laudantium ipsa ad debitis unde?
                                Iste voluptatibus minus veritatis qui ut.
                              </p>
                              <a
                                data-fancybox="diplome"
                                href="files/certificate.jpg"
                                className="art-link art-color-link art-w-chevron"
                              >
                                Licence
                              </a>
                            </div>
                          </div>
                          <div className="art-timeline-item">
                            <div className="art-timeline-mark-light" />
                            <div className="art-timeline-mark" />
                            <div className="art-a art-timeline-content">
                              <div className="art-card-header">
                                <div className="art-left-side">
                                  <h5>Title of section 1</h5>
                                  <div className="art-el-suptitle mb-15">
                                    Template author
                                  </div>
                                </div>
                                <div className="art-right-side">
                                  <span className="art-date">
                                    jan 2018 - may 2020
                                  </span>
                                </div>
                              </div>
                              <p>
                                Ipsum dolor sit amet, consectetur adipisicing
                                elit. Iusto, optio, dolorum provident rerum.
                              </p>
                              <a
                                data-fancybox="diplome"
                                href="files/certificate.jpg"
                                className="art-link art-color-link art-w-chevron"
                              >
                                Certificate
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="art-section-title">
                          <div className="art-title-frame">
                            <h4>Work History</h4>
                          </div>
                        </div>

                        <div className="art-timeline">
                          <div className="art-timeline-item">
                            <div className="art-timeline-mark-light" />
                            <div className="art-timeline-mark" />
                            <div className="art-a art-timeline-content">
                              <div className="art-card-header">
                                <div className="art-left-side">
                                  <h5>Title of section 1</h5>
                                  <div className="art-el-suptitle mb-15">
                                    Template author
                                  </div>
                                </div>
                                <div className="art-right-side">
                                  <span className="art-date">
                                    jan 2018 - may 2020
                                  </span>
                                </div>
                              </div>
                              <p>
                                Placeat iure tempora laudantium ipsa ad debitis
                                unde? Iste voluptatibus minus veritatis qui ut.
                              </p>
                            </div>
                          </div>
                          <div className="art-timeline-item">
                            <div className="art-timeline-mark-light" />
                            <div className="art-timeline-mark" />
                            <div className="art-a art-timeline-content">
                              <div className="art-card-header">
                                <div className="art-left-side">
                                  <h5>Title of section 1</h5>
                                  <div className="art-el-suptitle mb-15">
                                    Template author
                                  </div>
                                </div>
                                <div className="art-right-side">
                                  <span className="art-date">
                                    jan 2018 - may 2020
                                  </span>
                                </div>
                              </div>
                              <p>
                                Adipisicing elit. Iusto, optio, dolorum
                                provident rerum aut hic quasi placeat iure
                                tempora laudantium ipsa ad debitis unde?
                              </p>
                              <a
                                data-fancybox="recommendation"
                                href="#art-recomendation-popup-1"
                                className="art-link art-color-link art-w-chevron"
                              >
                                Recommendation
                              </a>
                            </div>

                            <div
                              className="art-recomendation-popup"
                              style={{ display: "none" }}
                              id="art-recomendation-popup-1"
                            >
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
                                  <div className="art-right-side"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="art-timeline-item">
                            <div className="art-timeline-mark-light" />
                            <div className="art-timeline-mark" />
                            <div className="art-a art-timeline-content">
                              <div className="art-card-header">
                                <div className="art-left-side">
                                  <h5>Title of section 1</h5>
                                  <div className="art-el-suptitle mb-15">
                                    Template author
                                  </div>
                                </div>
                                <div className="art-right-side">
                                  <span className="art-date">
                                    jan 2018 - may 2020
                                  </span>
                                </div>
                              </div>
                              <p>
                                Consectetur adipisicing elit. Excepturi,
                                obcaecati, quisquam id molestias eaque
                                asperiores voluptatibus cupiditate error
                                assumenda delectus odit similique earum
                                voluptatem doloremque dolorem ipsam quae rerum
                                quis. Odit, itaque, deserunt corporis vero ipsum
                                nisi eius odio natus ullam provident pariatur
                                temporibus quia eos repellat consequuntur
                                perferendis enim amet quae quasi repudiandae sed
                                quod veniam dolore possimus rem voluptatum
                                eveniet eligendi quis fugiat aliquam sunt
                                similique aut adipisci.
                              </p>
                              <a
                                data-fancybox="recommendation"
                                href="#art-recomendation-popup-2"
                                className="art-link art-color-link art-w-chevron"
                              >
                                Recommendation
                              </a>
                            </div>

                            <div
                              className="art-recomendation-popup"
                              style={{ display: "none" }}
                              id="art-recomendation-popup-2"
                            >
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
                                  <div className="art-right-side"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="art-timeline-item">
                            <div className="art-timeline-mark-light" />
                            <div className="art-timeline-mark" />
                            <div className="art-a art-timeline-content">
                              <div className="art-card-header">
                                <div className="art-left-side">
                                  <h5>Title of section 1</h5>
                                  <div className="art-el-suptitle mb-15">
                                    Template author
                                  </div>
                                </div>
                                <div className="art-right-side">
                                  <span className="art-date">
                                    jan 2018 - tonight
                                  </span>
                                </div>
                              </div>
                              <p>
                                Dolor sit amet, consectetur adipisicing elit.
                                Iusto, optio, dolorum provident rerum.
                              </p>
                              <a
                                data-fancybox="recommendation"
                                href="#art-recomendation-popup-3"
                                className="art-link art-color-link art-w-chevron"
                              >
                                Recommendation
                              </a>
                            </div>

                            <div
                              className="art-recomendation-popup"
                              style={{ display: "none" }}
                              id="art-recomendation-popup-3"
                            >
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
                                  <div className="art-right-side"></div>
                                </div>
                              </div>
                            </div>
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
                            <h4>Newsletter</h4>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div
                          className="swiper-container art-blog-slider"
                          style={{ overflow: "visible" }}
                        >
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="art-a art-blog-card">
                                <a href="#." className="art-port-cover">
                                  <img src="img/blog/1.jpg" alt="blog post" />
                                </a>

                                <div className="art-post-description">
                                  <a href="#.">
                                    <h5 className="mb-15">Blog post title</h5>
                                  </a>

                                  <div className="mb-15">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Amet!
                                  </div>

                                  <a
                                    href="#."
                                    className="art-link art-color-link art-w-chevron"
                                  >
                                    Read more
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="swiper-slide">
                              <div className="art-a art-blog-card">
                                <a href="#." className="art-port-cover">
                                  <img src="img/blog/2.jpg" alt="blog post" />
                                </a>

                                <div className="art-post-description">
                                  <a href="#.">
                                    <h5 className="mb-15">Blog post title</h5>
                                  </a>

                                  <div className="mb-15">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Amet!
                                  </div>

                                  <a
                                    href="#."
                                    className="art-link art-color-link art-w-chevron"
                                  >
                                    Read more
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="swiper-slide">
                              <div className="art-a art-blog-card">
                                <a href="#." className="art-port-cover">
                                  <img src="img/blog/3.jpg" alt="blog post" />
                                </a>

                                <div className="art-post-description">
                                  <a href="#.">
                                    <h5 className="mb-15">Blog post title</h5>
                                  </a>

                                  <div className="mb-15">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Amet!
                                  </div>

                                  <a
                                    href="#."
                                    className="art-link art-color-link art-w-chevron"
                                  >
                                    Read more
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="swiper-slide">
                              <div className="art-a art-blog-card">
                                <a href="#." className="art-port-cover">
                                  <img src="img/blog/4.jpg" alt="blog post" />
                                </a>

                                <div className="art-post-description">
                                  <a href="#.">
                                    <h5 className="mb-15">Blog post title</h5>
                                  </a>

                                  <div className="mb-15">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Amet!
                                  </div>

                                  <a
                                    href="#."
                                    className="art-link art-color-link art-w-chevron"
                                  >
                                    Read more
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="swiper-slide">
                              <div className="art-a art-blog-card">
                                <a href="#." className="art-port-cover">
                                  <img src="img/blog/5.jpg" alt="blog post" />
                                </a>

                                <div className="art-post-description">
                                  <a href="#.">
                                    <h5 className="mb-15">Blog post title</h5>
                                  </a>

                                  <div className="mb-15">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Amet!
                                  </div>

                                  <a
                                    href="#."
                                    className="art-link art-color-link art-w-chevron"
                                  >
                                    Read more
                                  </a>
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
                              <div className="art-slider-nav art-blog-swiper-prev">
                                <i className="fas fa-chevron-left" />
                              </div>

                              <div className="art-slider-nav art-blog-swiper-next">
                                <i className="fas fa-chevron-right" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container-fluid">
                    <div className="row p-30-0">
                      <div className="col-lg-12">
                        <div className="art-section-title">
                          <div className="art-title-frame">
                            <h4>Contact information</h4>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="art-a art-card">
                          <div className="art-table p-15-15">
                            <ul>
                              <li>
                                <h6>Country:</h6>
                                <span>Canada</span>
                              </li>
                              <li>
                                <h6>City:</h6>
                                <span>Toronto</span>
                              </li>
                              <li>
                                <h6>Streat:</h6>
                                <span>20 Dellbank Rd</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="art-a art-card">
                          <div className="art-table p-15-15">
                            <ul>
                              <li>
                                <h6>Email:</h6>
                                <span>carter.inbox@mail.com</span>
                              </li>
                              <li>
                                <h6>Telegram:</h6>
                                <span>@arter</span>
                              </li>
                              <li>
                                <h6>Skype:</h6>
                                <span>Arter</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="art-a art-card">
                          <div className="art-table p-15-15">
                            <ul>
                              <li>
                                <h6>Support service:</h6>
                                <span>+78 (098) 333 11 22</span>
                              </li>
                              <li>
                                <h6>Office:</h6>
                                <span>+78 (098) 326 11 22</span>
                              </li>
                              <li>
                                <h6>Personal:</h6>
                                <span>+78 (077) 114 26 53</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="art-section-title">
                          <div className="art-title-frame">
                            <h4>Get in touch</h4>
                          </div>
                        </div>

                        <div className="art-a art-card">
                          <form id="form" className="art-contact-form">
                            <div className="art-form-field">
                              <input
                                id="name"
                                name="name"
                                className="art-input"
                                type="text"
                                placeholder="Name"
                                required
                              />

                              <label htmlFor="name">
                                <i className="fas fa-user" />
                              </label>
                            </div>

                            <div className="art-form-field">
                              <input
                                id="email"
                                name="email"
                                className="art-input"
                                type="email"
                                placeholder="Email"
                                required
                              />

                              <label htmlFor="email">
                                <i className="fas fa-at" />
                              </label>
                            </div>

                            <div className="art-form-field">
                              <textarea
                                id="message"
                                name="text"
                                className="art-input"
                                placeholder="Message"
                                required
                                defaultValue={""}
                              />

                              <label htmlFor="message">
                                <i className="far fa-envelope" />
                              </label>
                            </div>

                            <div className="art-submit-frame">
                              <button
                                className="art-btn art-btn-md art-submit"
                                type="submit"
                              >
                                <span>Send message</span>
                              </button>

                              <div className="art-success">
                                Success <i className="fas fa-check" />
                              </div>
                            </div>
                          </form>
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
                        Template author:&nbsp;{" "}
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
          </div>
        </div>

        <div className="art-preloader">
          <div className="art-preloader-content">
            <h4>Artur Carter</h4>

            <div id="preloader" className="art-preloader-load" />
          </div>
        </div>
      </div>

      <div id="swupMenu" />
    </div>
  );
}

export default OnePage;
