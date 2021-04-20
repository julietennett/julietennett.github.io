import Typed from 'typed.js';

class About {
  constructor() {
    this.$body = $('body');
    if (this.$body.hasClass('about')) {
      this.changeFact();
    }
  }

  changeFact() {
    let _this = this;
    let $aboutText = $('.about__text');
    let $aboutFact = $('.about__text--fact');
    let aboutFacts = [
      'a product designer who loves the problem solving that goes on behind screens',
      'a lover of all things process',
      'and i love to iterate, retrospect, and improve every step of the way',
      'a product designer at drift',
      // 'a product designer at <a href="https://www.drift.com/" target="_blank" rel=noopener noreferer">drift</a>',
      'and i use a lot of exclamation points and custom slack emojis',
      'and making complex components in Figma is my jam'
    ];
    let factNum = 0;

    let typed = new Typed('.about__text--fact', {
      strings: [aboutFacts[0]],
      typeSpeed: 20,
    });

    $aboutText.on('click', function() {
      typed.destroy();
      if (factNum < aboutFacts.length - 1) {
        factNum += 1;
      } else {
        factNum = 0;
      }
      typed = new Typed('.about__text--fact', {
        strings: [aboutFacts[factNum]],
        typeSpeed: 20,
      });
    });
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}


export default About;
