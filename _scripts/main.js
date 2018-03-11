import Nav from './modules/nav';

$( document ).ready( function() {
  new Nav();
  hamburgerColor();
} ) //this creates a jquery object on document then calling .ready() on that jquery object, which takes in a function tnats called afer the jquery obkect is loaded

function checkPage() {
  var currentPage = window.location.pathname;
  return currentPage;
}

function hamburgerColor() {
  var $hamburgerIcon = $('.nav--hamburger-icon');
  var heroHeight = $('.hero').innerHeight();
  var projectSection = $('.project-section').innerHeight();

  const $projectSectionArr = $('.project-section');

  $hamburgerIcon.addClass('icon-white');

  $(document).scroll(function () {
    var scrollPos = window.scrollY;

    for (var i = 0; i < $projectSectionArr.length; i++) {
      var $projectSection = $projectSectionArr.eq(i);
      var offset = $projectSection.offset();
      var sectionHeight = $projectSection.innerWidth();
      if (scrollPos > offset && scrollPos < sectionHeight) {
      //   console.log('hello');
      //   console.log(offset);
      //   if ($projectSection.hasClass(.dark)) {
      //     $hamburgerIcon.addClass('icon-white');
      //   } else {
      //     $hamburgerIcon.removeClass('icon-white');
      //   }
      }
    }

    // if (scrollPos > offset && scrollPos < sectionHeight) {
    //   console.log('hello');
    //   console.log(offset);
    //   // if ($projectSection.hasClass(.dark)) {
    //   //   $hamburgerIcon.addClass('icon-white');
    //   // } else {
    //   //   $hamburgerIcon.removeClass('icon-white');
    //   // }
    // }
  });

  // $(document).scroll(function () {
  //   var scrollPos = window.scrollY;
  //   if (scrollPos < heroHeight) {
  //     $hamburgerIcon.addClass('icon-white');
  //   } else if (scrollPos > heroHeight) {
  //     $hamburgerIcon.removeClass('icon-white');
  //   }
  // });
}
