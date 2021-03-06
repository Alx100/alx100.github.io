// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

// import DE from './modules/dots';
import Hamburger from './modules/hamburger';
import Scroll from './modules/scroll';
import SectionScroll from './modules/sectionScroll';
import Slder from './modules/slider';
import VideoControls from './modules/videoControls';

(($) => {
  'use strict';

  // When DOM is ready
  $(() => {
    Hamburger();
    Scroll();
    SectionScroll();
    Slder();
    VideoControls();
  });

})(jQuery);