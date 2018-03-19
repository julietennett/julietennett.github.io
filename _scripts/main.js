import Nav from './modules/nav';
import Homepage from './modules/homepage';
// import Homepage from './modules/about';

$(document).ready(function() {
  new Nav();
  new Homepage();
  // new About();
  changeFact();
}); //this creates a jquery object on document then calling .ready() on that jquery object, which takes in a function tnats called afer the jquery obkect is loaded

var aboutFacts = [
  'a lover of all things related to design process',
  'a designer who solves problems with, like, a lot of sticky notes',
  'someone who tags ppl in a lot of memes',
  'a lover of micro-interactions, animations, and hover effects',
  'a senior design student @ northeastern university',
  'a person who uses a lot of  exclamation points and custom slack emojis',
  'an iterater, retrospect-er, and improver',
  'a designer who loves to illustrate with Sketch’s pen tool',
  'a designer who recently learned that code is not, indeed, magic because she knows how to do it now',
  'an interaction designer who loves the problem solving that goes on behind screens',
];

function changeFact() {
  let $aboutText = $(".about__text");
  let $aboutFact = $(".about__text--fact");
  let randomFact = aboutFacts[Math.floor(Math.random()*aboutFacts.length)];

  $aboutText.on("click", function () {
    randomFact = aboutFacts[Math.floor(Math.random()*aboutFacts.length)];
    $aboutFact.text(randomFact);
    console.log('i am working');
    console.log($aboutFact.text());
  });

}
