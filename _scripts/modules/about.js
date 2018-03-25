import Typed from 'typed.js';

class About {
  constructor() {
    this.changeFact();
  }

  changeFact() {
    let _this = this;
    let $aboutText = $('.about__text');
    let $aboutFact = $('.about__text--fact');
    let aboutFacts = [
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

    let typed = new Typed('.about__text--fact', {
      strings: [aboutFacts[_this.getRandomInt(aboutFacts.length)]],
      typeSpeed: 20,
    });

    $aboutText.on('click', function() {
      typed.destroy();
      typed = new Typed('.about__text--fact', {
        strings: [aboutFacts[_this.getRandomInt(aboutFacts.length)]],
        typeSpeed: 20,
      });
    });
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}


export default About;
