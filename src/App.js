import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/scss/style.scss'; // Your Sass stylesheet
import Home from './components/home';
import Swup from 'swup'; // Import Swup
import Scrollbar from 'smooth-scrollbar'; // Import SmoothScrollbar
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'; // Import OverscrollPlugin
import './components/progressBars';
import { initCircleProgressBar, initLineProgressBar } from './components/progressBars';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OnePage from './components/onepage';
import PortThree from './components/portfolio-3-col-masonry';
import PortThreeCol from './components/portfolio-3-col';
import PortTwo from './components/portfolio-2-col-masonry';
import PortTwoCol from './components/portfolio-2-col';
import anime from "animejs"; // Import anime.js
import $ from "jquery"; // Import jQuery (if not already imported)
import ProgressBar from "progressbar.js"; // Import ProgressBar.js
import "./components/scss/style.scss";


function App() {
  useEffect(() => {

     // Page loading animation
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

    // Swup initialization
    const options = {
      containers: ["#swup", "#swupMenu"],
      animateHistoryBrowsing: true,
    };
    const swup = new Swup(options);

    // SmoothScrollbar initialization
    Scrollbar.use(OverscrollPlugin);
    const scrollbar1 = Scrollbar.init(document.querySelector('#scrollbar'), {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
    });
    const scrollbar2 = Scrollbar.init(document.querySelector('#scrollbar2'), {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
    });

    // Progress bars initialization
    initCircleProgressBar('circleprog1', 2500, 1);
    initCircleProgressBar('circleprog2', 2600, 0.9);
    initCircleProgressBar('circleprog3', 2700, 0.7);
    initLineProgressBar('lineprog1', 2800, 0.9);
    initLineProgressBar('lineprog2', 2900, 0.95);
    initLineProgressBar('lineprog3', 3000, 0.75);
    initLineProgressBar('lineprog4', 3100, 0.65);
    initLineProgressBar('lineprog5', 3200, 0.85);

    
    // Cleanup function
    return () => {
      // Remove event listeners if necessary
      scrollbar1.destroy();
      scrollbar2.destroy();
    };
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onepage" element={<OnePage />} />
          <Route path="/portthree" element={<PortThree />} />
          <Route path="/portthreecol" element={<PortThreeCol />} />
          <Route path="/porttwo" element={<PortTwo />} />
          <Route path="/porttwocol" element={<PortTwoCol />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
