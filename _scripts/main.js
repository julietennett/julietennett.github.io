import Nav from './modules/nav';

$(document).ready(function() {
  new Nav();
  workLinksColor();
}); //this creates a jquery object on document then calling .ready() on that jquery object, which takes in a function tnats called afer the jquery obkect is loaded

function workLinksColor() {
  var $linkContainer = $(".link--container");
  var $workLink = $(".work__link");
  var $hamburger = $(".nav__hamburger--icon");
  var $hoverDesc = $(".hover__description");

  $linkContainer.on("mouseenter", function() {
    $workLink.addClass("text-white");
    $(this).children($workLink).addClass("text-outline");
    $(this).children($workLink).removeClass("text-white");
    $(this).children($hoverDesc).css('opacity', '1');
    $hamburger.css('stroke', 'white');
  })
  $linkContainer.on("mouseleave", function() {
    $workLink.removeClass("text-white");
    $(this).children($workLink).removeClass("text-outline");
    $hoverDesc.css('opacity', '0');
    $hamburger.css('stroke', '#745e84');
  })
}
