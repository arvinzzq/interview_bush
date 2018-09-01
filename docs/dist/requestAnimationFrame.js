'use strict';

// cancelAnimationFrame & requestAnimationFrame

function animDraw(cycle, interval) {
  var startTime = performance.now();
  var count = 0;
  function draw(timestamp) {
    if (timestamp - startTime > interval) {
      startTime = timestamp;
      count++;
      console.log('count -> ', count);
    }
    if (count < cycle) {
      requestAnimationFrame(draw);
    }
  }
  requestAnimationFrame(draw);
}

animDraw(10, 1000);