import Nav from './modules/nav';
import Homepage from './modules/homepage';
import About from './modules/about';
import ScrollAnimation from './modules/scroll-magic'
import ImageHover from './modules/img-hover'

$(document).ready(function() {
  new Nav();
  new Homepage();
  new About();
  new ImageHover();
  // new ScrollAnimation();
  $('.before-load').removeClass('before-load');
});
