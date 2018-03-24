import Nav from './modules/nav';
import Homepage from './modules/homepage';
import About from './modules/about';
import ScrollAnimation from './modules/scroll-magic'

$(document).ready(function() {
  new Nav();
  new Homepage();
  new About();
  // new ScrollAnimation();
  $('.before-load').removeClass('before-load');
});
