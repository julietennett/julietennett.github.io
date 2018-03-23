import Nav from './modules/nav';
import Homepage from './modules/homepage';
import About from './modules/about';

$(document).ready(function() {
  new Nav();
  new Homepage();
  new About();
  $('.before-load').removeClass('before-load');
});
