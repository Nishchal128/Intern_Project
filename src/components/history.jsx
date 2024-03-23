import React from "react";

function History() {
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
                    <div className="row p-30-0">
                      <div className="col-lg-6">
                        <div className="art-section-title">
                          <div className="art-title-frame">
                            <h4>Education</h4>
                          </div>
                        </div>

                        <div className="art-timeline art-gallery">
                          <div className="art-timeline-item">
                            <div className="art-timeline-mark-light" />
                            <div className="art-timeline-mark" />
                            <div className="art-a art-timeline-content">
                              <div className="art-card-header">
                                <div className="art-left-side">
                                  <h5>University of toronto</h5>
                                  <div className="art-el-suptitle mb-15">
                                    Student
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
                                  <h5>Arter design school</h5>
                                  <div className="art-el-suptitle mb-15">
                                    Student
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
                                  <h5>Web developer courses</h5>
                                  <div className="art-el-suptitle mb-15">
                                    Student
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
                                  <h5>Academy of Art University</h5>
                                  <div className="art-el-suptitle mb-15">
                                    Student
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
                                  <h5>Envato</h5>
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
                                  <h5>Themeforest</h5>
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
                                  <h5>Envato market</h5>
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
                                  <h5>SoftService company</h5>
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

                      <li className="menu-item menu-item-has-children">
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

                      <li className="menu-item current-menu-item">
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
    </div>
  );
}

export default History;
