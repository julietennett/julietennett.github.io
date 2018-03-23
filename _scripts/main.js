import Nav from './modules/nav';
import Homepage from './modules/homepage';
import About from './modules/about';

$(document).ready(function() {
  new Nav();
  new Homepage();
  new About();
  // changeFact();
  $('.before-load').removeClass('before-load');
});
