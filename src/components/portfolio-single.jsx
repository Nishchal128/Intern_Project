import React from "react";

function PortSingle() {
  return (
    <>
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
                    <a href="files/cv.txt" className="art-link" download="">
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

              <div
                className="art-top-bg"
                style={{ backgroundImage: "url(img/bg.jpg)" }}
              >
                <div className="art-top-bg-overlay" />
              </div>

              <div className="transition-fade" id="swup">
                <div id="scrollbar" className="art-scroll-frame">
                  <div className="container-fluid">
                    <div className="row p-30-0">
                      <div className="col-lg-12">
                        <div className="art-section-title">
                          <div className="art-title-frame">
                            <h4>Project title</h4>
                          </div>

                          <div className="art-right-frame">
                            <div className="art-project-category">
                              Ui Design, Graphic
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div
                          className="swiper-container art-works-slider"
                          style={{ overflow: "visible" }}
                        >
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <a
                                data-fancybox="gallery"
                                href="img/works/original-size/1.jpg"
                                className="art-a art-portfolio-item-frame art-horizontal"
                              >
                                <img
                                  src="img/works/thumbnail/1.jpg"
                                  alt="item"
                                />

                                <span className="art-item-hover">
                                  <i className="fas fa-expand" />
                                </span>
                              </a>
                            </div>

                            <div className="swiper-slide">
                              <a
                                data-fancybox="gallery"
                                href="img/works/original-size/7.jpg"
                                className="art-a art-portfolio-item-frame art-horizontal"
                              >
                                <img
                                  src="img/works/thumbnail/7.jpg"
                                  alt="item"
                                />

                                <span className="art-item-hover">
                                  <i className="fas fa-expand" />
                                </span>
                              </a>
                            </div>

                            <div className="swiper-slide">
                              <a
                                data-fancybox="gallery"
                                href="img/works/original-size/4.jpg"
                                className="art-a art-portfolio-item-frame art-horizontal"
                              >
                                <img
                                  src="img/works/thumbnail/4.jpg"
                                  alt="item"
                                />

                                <span className="art-item-hover">
                                  <i className="fas fa-expand" />
                                </span>
                              </a>
                            </div>

                            <div className="swiper-slide">
                              <a
                                data-fancybox="gallery"
                                href="img/works/original-size/5.jpg"
                                className="art-a art-portfolio-item-frame art-horizontal"
                              >
                                <img
                                  src="img/works/thumbnail/5.jpg"
                                  alt="item"
                                />

                                <span className="art-item-hover">
                                  <i className="fas fa-expand" />
                                </span>
                              </a>
                            </div>

                            <div className="swiper-slide">
                              <a
                                data-fancybox="gallery"
                                href="img/works/original-size/4.jpg"
                                className="art-a art-portfolio-item-frame art-horizontal"
                              >
                                <img
                                  src="img/works/thumbnail/4.jpg"
                                  alt="item"
                                />

                                <span className="art-item-hover">
                                  <i className="fas fa-expand" />
                                </span>
                              </a>
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
                              <div className="art-slider-nav art-works-swiper-prev">
                                <i className="fas fa-chevron-left" />
                              </div>

                              <div className="art-slider-nav art-works-swiper-next">
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
                            <h4>Project details</h4>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-8">
                        <div className="art-a art-card art-fluid-card">
                          <h5 className="mb-15">Description</h5>
                          <div className="mb-15">
                            Perferendis modi tempora, minus facere! Animi ipsam
                            explicabo beatae soluta qui repellat minus
                            perspiciatis placeat doloribus praesentium laborum
                            debitis error sed ex nisi, ipsum ad obcaecati
                            assumenda ut recusandae. Vero, voluptate, magni unde
                            accusantium vel ducimus expedita!
                          </div>

                          <div className="art-buttons-frame">
                            <a
                              href="https://www.behance.net/gallery/83236527/VIE"
                              className="art-link art-color-link art-w-chevron"
                              target="_blank"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="art-a art-card">
                          <div className="art-table p-15-15">
                            <ul>
                              <li>
                                <h6>Order Date:</h6>
                                <span>24.12.2019</span>
                              </li>
                              <li>
                                <h6>Final Date:</h6>
                                <span>12.03.2020</span>
                              </li>
                              <li>
                                <h6>Status:</h6>
                                <span>Completed</span>
                              </li>
                              <li>
                                <h6>Client:</h6>
                                <span>Envato Market</span>
                              </li>
                              <li>
                                <h6>Location:</h6>
                                <span>
                                  <a
                                    href="https://goo.gl/maps/b4w13Zuk9iWCsLMX7"
                                    target="_blank"
                                  >
                                    Ukraine, Lviv
                                  </a>
                                </span>
                              </li>
                            </ul>
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
                            <h4>Client reviews</h4>
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
                        <div
                          className="art-a art-banner"
                          style={{ backgroundImage: "url(img/bg.jpg)" }}
                        >
                          <div className="art-banner-overlay">
                            <div className="art-banner-title text-center">
                              <h1 className="mb-15">
                                Ready to order your project?
                              </h1>

                              <div className="art-lg-text art-code mb-25">
                                Let's work together!
                              </div>

                              <a
                                href="/contact.html"
                                className="art-btn art-btn-md"
                              >
                                <span>Contact me</span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="art-a art-pagination">
                          <a
                            href="/portfolio-single-2.html"
                            className="art-link art-color-link art-w-chevron art-left-link"
                          >
                            <span>Previous project</span>
                          </a>
                          <div className="art-pagination-center art-m-hidden">
                            <a
                              className="art-link"
                              href="/portfolio-3-col-masonry"
                            >
                              All projects
                            </a>
                          </div>

                          <a
                            href="/portfolio-single-2.html"
                            className="art-link art-color-link art-w-chevron"
                          >
                            <span>Next project</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container-fluid">
                    <div className="row p-30-0">
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

            <div className="art-menu-bar">
              <div className="art-menu-bar-frame">
                <div className="art-menu-bar-header">
                  <a className="art-menu-bar-btn" href="#.">
                    <span />
                  </a>
                </div>

                <div className="art-current-page" />

                <div className="art-scroll-frame">
                  <nav id="swupMenu">
                    <ul className="main-menu">
                      <li className="menu-item">
                        <a href="/home.html">Home</a>
                      </li>

                      <li className="menu-item menu-item-has-children current-menu-item">
                        <a href="#.">Portfolio</a>

                        <ul className="sub-menu">
                          <li className="menu-item">
                            <a href="/portfolio-2-col.html">2 column</a>
                          </li>

                          <li className="menu-item">
                            <a href="/portfolio-3-col.html">3 column</a>
                          </li>

                          <li className="menu-item">
                            <a href="/portfolio-2-col-masonry.html">
                              2 column masonry
                            </a>
                          </li>

                          <li className="menu-item">
                            <a href="/portfolio-3-col-masonry.html">
                              3 column masonry
                            </a>
                          </li>

                          <li className="menu-item">
                            <a href="/portfolio-single.html">Single project</a>
                          </li>

                          <li className="menu-item">
                            <a href="/portfolio-single-2.html">
                              Single project 2
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="menu-item">
                        <a href="/history.html">History</a>
                      </li>

                      <li className="menu-item">
                        <a href="/contact.html">Contact</a>
                      </li>

                      <li className="menu-item menu-item-has-children">
                        <a href="#.">Blog</a>

                        <ul className="sub-menu">
                          <li className="menu-item">
                            <a href="/blog-2-col.html">2 column</a>
                          </li>

                          <li className="menu-item">
                            <a href="/blog-3-col.html">3 column</a>
                          </li>

                          <li className="menu-item">
                            <a href="/blog-post.html">Publication</a>
                          </li>
                        </ul>
                      </li>

                      <li className="menu-item">
                        <a href="onepage.html" target="_blank">
                          Onepage
                        </a>
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
    </>
  );
}

export default PortSingle;
