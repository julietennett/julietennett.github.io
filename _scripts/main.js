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
  $('.before-load').removeClass('before-load');
  $('.before-load-left').removeClass('before-load-left');
  $('.before-load-right').removeClass('before-load-right');

  var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
  if (isSafari) $('body').addClass('safari');
});
