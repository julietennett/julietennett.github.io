import Nav from './modules/nav';
import Homepage from './modules/homepage';

$(document).ready(function() {
  new Nav();
  new Homepage();
}); //this creates a jquery object on document then calling .ready() on that jquery object, which takes in a function tnats called afer the jquery obkect is loaded
