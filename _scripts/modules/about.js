import Typed from 'typed.js';

class About {

  constructor() {
    this.$body = $('body');
    if (this.$body.hasClass('about')) {
      this.changeFact();
    }
  }

  changeFact() {
    let $aboutText = $(".about__text");
    let $aboutFact = $(".about__text--fact");

    var aboutFacts = [
      'an interaction designer who loves the problem solving that goes on behind screens',
      'a lover of all things related to design process',
      'a designer who solves problems with, like, a lot of sticky notes',
      'someone who tags ppl in a lot of memes',
      'a lover of micro-interactions, animations, and hover effects',
      'a senior design student @ northeastern university',
      'a person who uses a lot of  exclamation points and custom slack emojis',
      'an iterater, retrospect-er, and improver',
      'a designer who loves to illustrate with Sketch’s pen tool',
      'a designer who recently learned that code is not, indeed, magic because she knows how to do it now',
    ];
    let randomFact = aboutFacts[Math.floor(Math.random()*aboutFacts.length)];
    var typed = new Typed('.about__text--fact', {
      strings: [aboutFacts[0]],
      typeSpeed: 20
    });

    $aboutText.on("click", function () {
      $aboutFact.text(randomFact);
      randomFact = aboutFacts[Math.floor(Math.random()*aboutFacts.length)];
      $(".about__text--fact").text(''); //ugh remove the current text :\

      typed = new Typed('.about__text--fact', {
        strings: [randomFact],
        typeSpeed: 20
      });
    });
  }

}


export default About;
