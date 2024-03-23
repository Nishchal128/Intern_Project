import React from "react";

function PortThreeCol() {
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
                      <div className="col-lg-12">
                        <div className="art-filter mb-30">
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

                          <a href="#" data-filter=".logos" className="art-link">
                            Logos
                          </a>

                          <a
                            href="#"
                            data-filter=".drawings"
                            className="art-link"
                          >
                            Drawings
                          </a>

                          <a href="#" data-filter=".ui" className="art-link">
                            UI Elements
                          </a>
                        </div>
                      </div>

                      <div className="art-grid art-grid-3-col art-gallery">
                        <div className="art-grid-item webTemplates">
                          <a
                            data-fancybox="gallery"
                            href="img/works/original-size/1.jpg"
                            className="art-a art-portfolio-item-frame art-square"
                          >
                            <img src="img/works/thumbnail/1.jpg" alt="item" />

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
                              href="/portfolio-single.html"
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
                            className="art-a art-portfolio-item-frame art-square"
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
                              href="/portfolio-single.html"
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
                              href="/portfolio-single.html"
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
                            className="art-a art-portfolio-item-frame art-square"
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
                              href="/portfolio-single.html"
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
                              href="/portfolio-single.html"
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
                            className="art-a art-portfolio-item-frame art-square"
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
                              href="/portfolio-single.html"
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
                              href="/portfolio-single.html"
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
                            className="art-a art-portfolio-item-frame art-square"
                          >
                            <img src="img/works/thumbnail/8.jpg" alt="item" />

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
                              href="/portfolio-single.html"
                              className="art-link art-color-link art-w-chevron"
                            >
                              Read more
                            </a>
                          </div>
                        </div>

                        <div className="art-grid-item webTemplates">
                          <a
                            data-fancybox="gallery"
                            href="img/works/original-size/9.jpg"
                            className="art-a art-portfolio-item-frame art-square"
                          >
                            <img src="img/works/thumbnail/9.jpg" alt="item" />

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
                              href="/portfolio-single.html"
                              className="art-link art-color-link art-w-chevron"
                            >
                              Read more
                            </a>
                          </div>
                        </div>

                        <div className="art-grid-item logos">
                          <a
                            data-fancybox="gallery"
                            href="img/works/original-size/10.jpg"
                            className="art-a art-portfolio-item-frame art-square"
                          >
                            <img src="img/works/thumbnail/10.jpg" alt="item" />

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
                              href="/portfolio-single.html"
                              className="art-link art-color-link art-w-chevron"
                            >
                              Read more
                            </a>
                          </div>
                        </div>

                        <div className="art-grid-item drawings">
                          <a
                            data-fancybox="gallery"
                            href="img/works/original-size/11.jpg"
                            className="art-a art-portfolio-item-frame art-square"
                          >
                            <img src="img/works/thumbnail/11.jpg" alt="item" />

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
                              href="/portfolio-single.html"
                              className="art-link art-color-link art-w-chevron"
                            >
                              Read more
                            </a>
                          </div>
                        </div>

                        <div className="art-grid-item drawings">
                          <a
                            data-fancybox="gallery"
                            href="img/works/original-size/13.jpg"
                            className="art-a art-portfolio-item-frame art-square"
                          >
                            <img src="img/works/thumbnail/13.jpg" alt="item" />

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
                              href="/portfolio-single.html"
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
    </div>
  );
}

export default PortThreeCol;
