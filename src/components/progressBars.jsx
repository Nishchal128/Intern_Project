import React from 'react';
import ProgressBar from 'progressbar.js';

export function initCircleProgressBar(id, delay, animationValue) {
  var element = document.getElementById(id);
  var bar = new ProgressBar.Circle(element, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    delay: delay,
    trailWidth: 7,
    step: function(state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });
  bar.animate(animationValue);
}

export function initLineProgressBar(id, delay, animationValue) {
  var element = document.getElementById(id);
  var bar = new ProgressBar.Line(element, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: delay,
    trailWidth: 1.72,
    width: '100%',
    height: '100%',
    
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  bar.animate(animationValue);
}
