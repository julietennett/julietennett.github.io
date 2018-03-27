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
      'an interaction designer who loves the problem solving that goes on behind screens',
      'a lover of all things related to design process',
      'a designer with some development chops',
      'and i love to iterate, retrospect, and improve every step of the way',
      'a senior design student @ northeastern university',
      'someone who tags ppl in a lot of memes',
      'and i&apos;ve recently been obsessed with micro-interactions, animations, and hover effects',
      'a designer who solves problems with, like, a lot of sticky notes',
      'and i use a lot of  exclamation points and custom slack emojis',
      'and i prefer illustrating in sketch over ai #unpopularopinion'
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
