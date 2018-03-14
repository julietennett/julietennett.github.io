import Nav from './modules/nav';

$(document).ready(function() {
  new Nav();
  workLinksColor();
}); //this creates a jquery object on document then calling .ready() on that jquery object, which takes in a function tnats called afer the jquery obkect is loaded

function workLinksColor() {
  var $linkContainer = $(".link--container");
  var $workLink = $(".work__link");

  $linkContainer.on("mouseenter", function() {
    $workLink.addClass("text-white");
    $(this).children($workLink).removeClass("text-white");
    $(this).children($('.hover__description')).css('opacity', '1');
    $('.nav__hamburger--icon').css('stroke', 'white');
  })
  $linkContainer.on("mouseleave", function() {
    $workLink.removeClass("text-white");
    $('.hover__description').css('opacity', '0');
    $('.nav__hamburger--icon').css('stroke', '#745e84');
  })
}
