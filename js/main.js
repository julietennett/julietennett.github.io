(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

var _nav = require('./modules/nav');

var _nav2 = _interopRequireDefault(_nav);

var _homepage = require('./modules/homepage');

var _homepage2 = _interopRequireDefault(_homepage);

var _about = require('./modules/about');

var _about2 = _interopRequireDefault(_about);

var _scrollMagic = require('./modules/scroll-magic');

var _scrollMagic2 = _interopRequireDefault(_scrollMagic);

var _imgHover = require('./modules/img-hover');

var _imgHover2 = _interopRequireDefault(_imgHover);

var _scrollTo = require('./modules/scrollTo');

var _scrollTo2 = _interopRequireDefault(_scrollTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
  new _nav2.default();
  new _homepage2.default();
  new _about2.default();
  new _imgHover2.default();
  new _scrollTo2.default();
  setTimeout(function () {
    $('.before-load').removeClass('before-load');
    $('.before-load-left').removeClass('before-load-left');
    $('.before-load-right').removeClass('before-load-right');
  }, 200);

  var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
  if (isSafari) $('body').addClass('safari');
});

},{"./modules/about":2,"./modules/homepage":3,"./modules/img-hover":4,"./modules/nav":5,"./modules/scroll-magic":6,"./modules/scrollTo":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typed = require('typed.js');

var _typed2 = _interopRequireDefault(_typed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var About = function () {
  function About() {
    _classCallCheck(this, About);

    this.$body = $('body');
    if (this.$body.hasClass('about')) {
      this.changeFact();
    }
  }

  _createClass(About, [{
    key: 'changeFact',
    value: function changeFact() {
      var _this = this;
      var $aboutText = $('.about__text');
      var $aboutFact = $('.about__text--fact');
      var aboutFacts = ['an interaction designer who loves the problem solving that goes on behind screens', 'a lover of all things related to design process', 'a designer with some development chops', 'and i love to iterate, retrospect, and improve every step of the way', 'a senior design student @ northeastern university', 'someone who tags ppl in a lot of memes', 'and i&apos;ve recently been obsessed with micro-interactions, animations, and hover effects', 'a designer who solves problems with, like, a lot of sticky notes', 'and i use a lot of  exclamation points and custom slack emojis', 'and i prefer illustrating in sketch over ai #unpopularopinion'];
      var factNum = 0;

      var typed = new _typed2.default('.about__text--fact', {
        strings: [aboutFacts[0]],
        typeSpeed: 20
      });

      $aboutText.on('click', function () {
        typed.destroy();
        if (factNum < aboutFacts.length - 1) {
          factNum += 1;
        } else {
          factNum = 0;
        }
        typed = new _typed2.default('.about__text--fact', {
          strings: [aboutFacts[factNum]],
          typeSpeed: 20
        });
      });
    }
  }, {
    key: 'getRandomInt',
    value: function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  }]);

  return About;
}();

exports.default = About;

},{"typed.js":9}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Homepage = function () {
  function Homepage() {
    _classCallCheck(this, Homepage);

    this.$body = $('body');
    if (this.$body.hasClass('home')) {
      this.workLinksColor();
      this.backgroundImg();
    }
  }

  _createClass(Homepage, [{
    key: 'backgroundImg',
    value: function backgroundImg() {
      var $linkContainer = $('.link--container');
      var $trailTag = $('.link--trailtag');
      var $unsent = $('.link--unsent');
      var $videogame = $('.link--videogame');
      var $zealery = $('.link--zealery');
      var $illustrations = $('.link--illustrations');
      var $lacentrale = $('.link--lacentrale');
      var $hoverImg = $('.hover__img');

      $linkContainer.hover(function () {
        $hoverImg.css("opacity", "1");
      }, function () {
        $hoverImg.css("background-image", "none");
        $hoverImg.css("opacity", "0");
      });

      $zealery.hover(function () {
        $hoverImg.css("background-image", "url(/img/home/work__link--zealery.png)");
        $hoverImg.css("background-size", "cover");
      });

      $unsent.hover(function () {
        $hoverImg.css("background-image", "url(/img/unsent/hero-background.png)");
        $hoverImg.css("background-size", "cover");
      });

      $videogame.hover(function () {
        $hoverImg.css("background-image", "url(/img/videogame/hero-background.png)");
        $hoverImg.css("background-size", "cover");
      });

      $trailTag.hover(function () {
        $hoverImg.css("background-image", "url(/img/trailtag/hero-background.png)");
        $hoverImg.css("background-size", "cover");
      });

      $illustrations.hover(function () {
        $hoverImg.css("background-image", "url(/img/illustrations/hero-background.png)");
        $hoverImg.css("background-size", "cover");
      });

      $lacentrale.hover(function () {
        $hoverImg.css("background-image", "url(/img/home/work__link--lacentrale.png)");
        $hoverImg.css("background-size", "cover");
      });
    }
  }, {
    key: 'workLinksColor',
    value: function workLinksColor() {
      var $linkContainer = $(".link--container");
      var $workLink = $(".work__link");
      var $hamburger = $(".nav__hamburger--icon");
      var $hoverDesc = $(".hover__description");
      var $footer__container = $(".footer__container");
      var $heroIntro = $(".hero__intro");

      $linkContainer.hover(function () {
        $workLink.addClass('js-text-white');
        $(this).children($workLink).addClass('js-text-outline');
        $(this).children($hoverDesc).addClass('js-show');
        $hamburger.addClass('js-icon-white');
        $footer__container.addClass('js-hide');
        $heroIntro.css('opacity', '0');
      }, function () {
        $workLink.removeClass('js-text-white');
        $(this).children($workLink).removeClass('js-text-outline');
        $hoverDesc.removeClass('js-show');
        $hamburger.removeClass('js-icon-white');
        $footer__container.removeClass('js-hide');
        $heroIntro.css('opacity', '1');
      });
    }
  }]);

  return Homepage;
}();

exports.default = Homepage;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageHover = function () {
  function ImageHover() {
    _classCallCheck(this, ImageHover);

    this.scrollImageX();
  }

  _createClass(ImageHover, [{
    key: 'scrollImageX',
    value: function scrollImageX() {
      var $image = $('.hover-image-x');
      var $pageSection = $('.page-section');

      $image.mousemove(function (evt) {
        var xPos = evt.pageX; //works thank god
        var pageW = $(document.body).width();
        var xPerc = xPos / pageW;

        $(this).children($pageSection).css('background-position-x', function () {
          return -(xPerc * pageW);
        });
      });
    }
  }]);

  return ImageHover;
}();

exports.default = ImageHover;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Nav = function () {
  function Nav() {
    _classCallCheck(this, Nav);

    this.$body = $('body');
    this.$navButton = $('.nav__hamburger--button');
    this.$sliderButton = $('.nav__slider--button');

    this.init();
  }

  _createClass(Nav, [{
    key: 'init',
    value: function init() {
      this.$sliderButton.click(this.toggleNav.bind(this));
      this.$navButton.click(this.toggleNav.bind(this));

      this.hamburgerColor();
    }
  }, {
    key: 'toggleNav',
    value: function toggleNav() {
      this.$body.toggleClass('js-slider-open');
    }
  }, {
    key: 'hamburgerColor',
    value: function hamburgerColor() {
      var $hamburgerIcon = $('.nav__hamburger--icon');
      var $hero = $('.hero');
      var heroHeight = $('.hero').innerHeight();
      var projectSection = $('.page-section').innerHeight();
      var scrollPos = window.scrollY;

      var $projectSectionArr = $('.page-section');

      if ($hero.hasClass('dark')) {
        $hamburgerIcon.addClass('js-icon-white');
      }

      $(document).scroll(function () {
        var scrollPos = window.scrollY;

        for (var i = 0; i < $projectSectionArr.length; i++) {
          var $projectSection = $projectSectionArr.eq(i);
          var offset = $projectSection.offset().top;
          var sectionHeight = $projectSection.innerHeight();
          if (scrollPos > offset - 37 && scrollPos < offset + sectionHeight) {
            if ($projectSection.hasClass('dark')) {
              $hamburgerIcon.addClass('js-icon-white');
            } else {
              $hamburgerIcon.removeClass('js-icon-white');
            }
          }
        }
      });
    }
  }]);

  return Nav;
}();

exports.default = Nav;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scrollmagic = require('scrollmagic');

var _scrollmagic2 = _interopRequireDefault(_scrollmagic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScrollAnimation = function () {
  function ScrollAnimation() {
    _classCallCheck(this, ScrollAnimation);

    this.$body = $('body');
    this.controller = new _scrollmagic2.default.Controller(); //property of this class, rather than global var

    if (this.$body.hasClass('home')) {
      this.homeScroll();
    }
  }

  _createClass(ScrollAnimation, [{
    key: 'homeScroll',
    value: function homeScroll() {
      var $workContainer = $('.work__links--container');
      new _scrollmagic2.default.Scene({
        triggerElement: $workContainer,
        duration: $workContainer.height()
      }).setPin(".hover__img") // pins the element for the the scene's duration
      .addTo(controller); // assign the scene to the controller
    }
  }]);

  return ScrollAnimation;
}();

exports.default = ScrollAnimation;

},{"scrollmagic":8}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scroll = function () {
  function Scroll() {
    _classCallCheck(this, Scroll);

    this.scrollTo();
  }

  _createClass(Scroll, [{
    key: 'scrollTo',
    value: function scrollTo() {
      var $scrollLink = $('.js-scroll-link');
      var $scrollToThis = $('#js-scroll-to');

      $scrollLink.click(function () {
        console.log('clicked');
        $('html, body').animate({
          scrollTop: $scrollToThis.offset().top
        }, 400);
      });
    }
  }]);

  return Scroll;
}();

exports.default = Scroll;

},{}],8:[function(require,module,exports){
/*!
 * ScrollMagic v2.0.5 (2015-04-29)
 * The javascript library for magical scroll interactions.
 * (c) 2015 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.5
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */
/**
 * @namespace ScrollMagic
 */
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		module.exports = factory();
	} else {
		// Browser global
		root.ScrollMagic = factory();
	}
}(this, function () {
	"use strict";

	var ScrollMagic = function () {
		_util.log(2, '(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use \'new ScrollMagic.Controller()\' to create a new controller instance. Use \'new ScrollMagic.Scene()\' to instance a scene.');
	};

	ScrollMagic.version = "2.0.5";

	// TODO: temporary workaround for chrome's scroll jitter bug
	window.addEventListener("mousewheel", function () {});

	// global const
	var PIN_SPACER_ATTRIBUTE = "data-scrollmagic-pin-spacer";

	/**
	 * The main class that is needed once per scroll container.
	 *
	 * @class
	 *
	 * @example
	 * // basic initialization
	 * var controller = new ScrollMagic.Controller();
	 *
	 * // passing options
	 * var controller = new ScrollMagic.Controller({container: "#myContainer", loglevel: 3});
	 *
	 * @param {object} [options] - An object containing one or more options for the controller.
	 * @param {(string|object)} [options.container=window] - A selector, DOM object that references the main container for scrolling.
	 * @param {boolean} [options.vertical=true] - Sets the scroll mode to vertical (`true`) or horizontal (`false`) scrolling.
	 * @param {object} [options.globalSceneOptions={}] - These options will be passed to every Scene that is added to the controller using the addScene method. For more information on Scene options see {@link ScrollMagic.Scene}.
	 * @param {number} [options.loglevel=2] Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
	 ** `0` => silent
	 ** `1` => errors
	 ** `2` => errors, warnings
	 ** `3` => errors, warnings, debuginfo
	 * @param {boolean} [options.refreshInterval=100] - Some changes don't call events by default, like changing the container size or moving a scene trigger element.  
	 This interval polls these parameters to fire the necessary events.  
	 If you don't use custom containers, trigger elements or have static layouts, where the positions of the trigger elements don't change, you can set this to 0 disable interval checking and improve performance.
	 *
	 */
	ScrollMagic.Controller = function (options) {
/*
	 * ----------------------------------------------------------------
	 * settings
	 * ----------------------------------------------------------------
	 */
		var
		NAMESPACE = 'ScrollMagic.Controller',
			SCROLL_DIRECTION_FORWARD = 'FORWARD',
			SCROLL_DIRECTION_REVERSE = 'REVERSE',
			SCROLL_DIRECTION_PAUSED = 'PAUSED',
			DEFAULT_OPTIONS = CONTROLLER_OPTIONS.defaults;

/*
	 * ----------------------------------------------------------------
	 * private vars
	 * ----------------------------------------------------------------
	 */
		var
		Controller = this,
			_options = _util.extend({}, DEFAULT_OPTIONS, options),
			_sceneObjects = [],
			_updateScenesOnNextCycle = false,
			// can be boolean (true => all scenes) or an array of scenes to be updated
			_scrollPos = 0,
			_scrollDirection = SCROLL_DIRECTION_PAUSED,
			_isDocument = true,
			_viewPortSize = 0,
			_enabled = true,
			_updateTimeout, _refreshTimeout;

/*
	 * ----------------------------------------------------------------
	 * private functions
	 * ----------------------------------------------------------------
	 */

		/**
		 * Internal constructor function of the ScrollMagic Controller
		 * @private
		 */
		var construct = function () {
			for (var key in _options) {
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			_options.container = _util.get.elements(_options.container)[0];
			// check ScrollContainer
			if (!_options.container) {
				log(1, "ERROR creating object " + NAMESPACE + ": No valid scroll container supplied");
				throw NAMESPACE + " init failed."; // cancel
			}
			_isDocument = _options.container === window || _options.container === document.body || !document.body.contains(_options.container);
			// normalize to window
			if (_isDocument) {
				_options.container = window;
			}
			// update container size immediately
			_viewPortSize = getViewportSize();
			// set event handlers
			_options.container.addEventListener("resize", onChange);
			_options.container.addEventListener("scroll", onChange);

			_options.refreshInterval = parseInt(_options.refreshInterval) || DEFAULT_OPTIONS.refreshInterval;
			scheduleRefresh();

			log(3, "added new " + NAMESPACE + " controller (v" + ScrollMagic.version + ")");
		};

		/**
		 * Schedule the next execution of the refresh function
		 * @private
		 */
		var scheduleRefresh = function () {
			if (_options.refreshInterval > 0) {
				_refreshTimeout = window.setTimeout(refresh, _options.refreshInterval);
			}
		};

		/**
		 * Default function to get scroll pos - overwriteable using `Controller.scrollPos(newFunction)`
		 * @private
		 */
		var getScrollPos = function () {
			return _options.vertical ? _util.get.scrollTop(_options.container) : _util.get.scrollLeft(_options.container);
		};

		/**
		 * Returns the current viewport Size (width vor horizontal, height for vertical)
		 * @private
		 */
		var getViewportSize = function () {
			return _options.vertical ? _util.get.height(_options.container) : _util.get.width(_options.container);
		};

		/**
		 * Default function to set scroll pos - overwriteable using `Controller.scrollTo(newFunction)`
		 * Make available publicly for pinned mousewheel workaround.
		 * @private
		 */
		var setScrollPos = this._setScrollPos = function (pos) {
			if (_options.vertical) {
				if (_isDocument) {
					window.scrollTo(_util.get.scrollLeft(), pos);
				} else {
					_options.container.scrollTop = pos;
				}
			} else {
				if (_isDocument) {
					window.scrollTo(pos, _util.get.scrollTop());
				} else {
					_options.container.scrollLeft = pos;
				}
			}
		};

		/**
		 * Handle updates in cycles instead of on scroll (performance)
		 * @private
		 */
		var updateScenes = function () {
			if (_enabled && _updateScenesOnNextCycle) {
				// determine scenes to update
				var scenesToUpdate = _util.type.Array(_updateScenesOnNextCycle) ? _updateScenesOnNextCycle : _sceneObjects.slice(0);
				// reset scenes
				_updateScenesOnNextCycle = false;
				var oldScrollPos = _scrollPos;
				// update scroll pos now instead of onChange, as it might have changed since scheduling (i.e. in-browser smooth scroll)
				_scrollPos = Controller.scrollPos();
				var deltaScroll = _scrollPos - oldScrollPos;
				if (deltaScroll !== 0) { // scroll position changed?
					_scrollDirection = (deltaScroll > 0) ? SCROLL_DIRECTION_FORWARD : SCROLL_DIRECTION_REVERSE;
				}
				// reverse order of scenes if scrolling reverse
				if (_scrollDirection === SCROLL_DIRECTION_REVERSE) {
					scenesToUpdate.reverse();
				}
				// update scenes
				scenesToUpdate.forEach(function (scene, index) {
					log(3, "updating Scene " + (index + 1) + "/" + scenesToUpdate.length + " (" + _sceneObjects.length + " total)");
					scene.update(true);
				});
				if (scenesToUpdate.length === 0 && _options.loglevel >= 3) {
					log(3, "updating 0 Scenes (nothing added to controller)");
				}
			}
		};

		/**
		 * Initializes rAF callback
		 * @private
		 */
		var debounceUpdate = function () {
			_updateTimeout = _util.rAF(updateScenes);
		};

		/**
		 * Handles Container changes
		 * @private
		 */
		var onChange = function (e) {
			log(3, "event fired causing an update:", e.type);
			if (e.type == "resize") {
				// resize
				_viewPortSize = getViewportSize();
				_scrollDirection = SCROLL_DIRECTION_PAUSED;
			}
			// schedule update
			if (_updateScenesOnNextCycle !== true) {
				_updateScenesOnNextCycle = true;
				debounceUpdate();
			}
		};

		var refresh = function () {
			if (!_isDocument) {
				// simulate resize event. Only works for viewport relevant param (performance)
				if (_viewPortSize != getViewportSize()) {
					var resizeEvent;
					try {
						resizeEvent = new Event('resize', {
							bubbles: false,
							cancelable: false
						});
					} catch (e) { // stupid IE
						resizeEvent = document.createEvent("Event");
						resizeEvent.initEvent("resize", false, false);
					}
					_options.container.dispatchEvent(resizeEvent);
				}
			}
			_sceneObjects.forEach(function (scene, index) { // refresh all scenes
				scene.refresh();
			});
			scheduleRefresh();
		};

		/**
		 * Send a debug message to the console.
		 * provided publicly with _log for plugins
		 * @private
		 *
		 * @param {number} loglevel - The loglevel required to initiate output for the message.
		 * @param {...mixed} output - One or more variables that should be passed to the console.
		 */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};
		// for scenes we have getters for each option, but for the controller we don't, so we need to make it available externally for plugins
		this._options = _options;

		/**
		 * Sort scenes in ascending order of their start offset.
		 * @private
		 *
		 * @param {array} ScenesArray - an array of ScrollMagic Scenes that should be sorted
		 * @return {array} The sorted array of Scenes.
		 */
		var sortScenes = function (ScenesArray) {
			if (ScenesArray.length <= 1) {
				return ScenesArray;
			} else {
				var scenes = ScenesArray.slice(0);
				scenes.sort(function (a, b) {
					return a.scrollOffset() > b.scrollOffset() ? 1 : -1;
				});
				return scenes;
			}
		};

		/**
		 * ----------------------------------------------------------------
		 * public functions
		 * ----------------------------------------------------------------
		 */

		/**
		 * Add one ore more scene(s) to the controller.  
		 * This is the equivalent to `Scene.addTo(controller)`.
		 * @public
		 * @example
		 * // with a previously defined scene
		 * controller.addScene(scene);
		 *
		 * // with a newly created scene.
		 * controller.addScene(new ScrollMagic.Scene({duration : 0}));
		 *
		 * // adding multiple scenes
		 * controller.addScene([scene, scene2, new ScrollMagic.Scene({duration : 0})]);
		 *
		 * @param {(ScrollMagic.Scene|array)} newScene - ScrollMagic Scene or Array of Scenes to be added to the controller.
		 * @return {Controller} Parent object for chaining.
		 */
		this.addScene = function (newScene) {
			if (_util.type.Array(newScene)) {
				newScene.forEach(function (scene, index) {
					Controller.addScene(scene);
				});
			} else if (newScene instanceof ScrollMagic.Scene) {
				if (newScene.controller() !== Controller) {
					newScene.addTo(Controller);
				} else if (_sceneObjects.indexOf(newScene) < 0) {
					// new scene
					_sceneObjects.push(newScene); // add to array
					_sceneObjects = sortScenes(_sceneObjects); // sort
					newScene.on("shift.controller_sort", function () { // resort whenever scene moves
						_sceneObjects = sortScenes(_sceneObjects);
					});
					// insert Global defaults.
					for (var key in _options.globalSceneOptions) {
						if (newScene[key]) {
							newScene[key].call(newScene, _options.globalSceneOptions[key]);
						}
					}
					log(3, "adding Scene (now " + _sceneObjects.length + " total)");
				}
			} else {
				log(1, "ERROR: invalid argument supplied for '.addScene()'");
			}
			return Controller;
		};

		/**
		 * Remove one ore more scene(s) from the controller.  
		 * This is the equivalent to `Scene.remove()`.
		 * @public
		 * @example
		 * // remove a scene from the controller
		 * controller.removeScene(scene);
		 *
		 * // remove multiple scenes from the controller
		 * controller.removeScene([scene, scene2, scene3]);
		 *
		 * @param {(ScrollMagic.Scene|array)} Scene - ScrollMagic Scene or Array of Scenes to be removed from the controller.
		 * @returns {Controller} Parent object for chaining.
		 */
		this.removeScene = function (Scene) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.removeScene(scene);
				});
			} else {
				var index = _sceneObjects.indexOf(Scene);
				if (index > -1) {
					Scene.off("shift.controller_sort");
					_sceneObjects.splice(index, 1);
					log(3, "removing Scene (now " + _sceneObjects.length + " left)");
					Scene.remove();
				}
			}
			return Controller;
		};

		/**
		 * Update one ore more scene(s) according to the scroll position of the container.  
		 * This is the equivalent to `Scene.update()`.  
		 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
		 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.  
		 * _**Note:** This method gets called constantly whenever Controller detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
		 * @public
		 * @example
		 * // update a specific scene on next cycle
		 * controller.updateScene(scene);
		 *
		 * // update a specific scene immediately
		 * controller.updateScene(scene, true);
		 *
		 * // update multiple scenes scene on next cycle
		 * controller.updateScene([scene1, scene2, scene3]);
		 *
		 * @param {ScrollMagic.Scene} Scene - ScrollMagic Scene or Array of Scenes that is/are supposed to be updated.
		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle.  
		 This is useful when changing multiple properties of the scene - this way it will only be updated once all new properties are set (updateScenes).
		 * @return {Controller} Parent object for chaining.
		 */
		this.updateScene = function (Scene, immediately) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.updateScene(scene, immediately);
				});
			} else {
				if (immediately) {
					Scene.update(true);
				} else if (_updateScenesOnNextCycle !== true && Scene instanceof ScrollMagic.Scene) { // if _updateScenesOnNextCycle is true, all connected scenes are already scheduled for update
					// prep array for next update cycle
					_updateScenesOnNextCycle = _updateScenesOnNextCycle || [];
					if (_updateScenesOnNextCycle.indexOf(Scene) == -1) {
						_updateScenesOnNextCycle.push(Scene);
					}
					_updateScenesOnNextCycle = sortScenes(_updateScenesOnNextCycle); // sort
					debounceUpdate();
				}
			}
			return Controller;
		};

		/**
		 * Updates the controller params and calls updateScene on every scene, that is attached to the controller.  
		 * See `Controller.updateScene()` for more information about what this means.  
		 * In most cases you will not need this function, as it is called constantly, whenever ScrollMagic detects a state change event, like resize or scroll.  
		 * The only application for this method is when ScrollMagic fails to detect these events.  
		 * One application is with some external scroll libraries (like iScroll) that move an internal container to a negative offset instead of actually scrolling. In this case the update on the controller needs to be called whenever the child container's position changes.
		 * For this case there will also be the need to provide a custom function to calculate the correct scroll position. See `Controller.scrollPos()` for details.
		 * @public
		 * @example
		 * // update the controller on next cycle (saves performance due to elimination of redundant updates)
		 * controller.update();
		 *
		 * // update the controller immediately
		 * controller.update(true);
		 *
		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance)
		 * @return {Controller} Parent object for chaining.
		 */
		this.update = function (immediately) {
			onChange({
				type: "resize"
			}); // will update size and set _updateScenesOnNextCycle to true
			if (immediately) {
				updateScenes();
			}
			return Controller;
		};

		/**
		 * Scroll to a numeric scroll offset, a DOM element, the start of a scene or provide an alternate method for scrolling.  
		 * For vertical controllers it will change the top scroll offset and for horizontal applications it will change the left offset.
		 * @public
		 *
		 * @since 1.1.0
		 * @example
		 * // scroll to an offset of 100
		 * controller.scrollTo(100);
		 *
		 * // scroll to a DOM element
		 * controller.scrollTo("#anchor");
		 *
		 * // scroll to the beginning of a scene
		 * var scene = new ScrollMagic.Scene({offset: 200});
		 * controller.scrollTo(scene);
		 *
		 * // define a new scroll position modification function (jQuery animate instead of jump)
		 * controller.scrollTo(function (newScrollPos) {
		 *	$("html, body").animate({scrollTop: newScrollPos});
		 * });
		 * controller.scrollTo(100); // call as usual, but the new function will be used instead
		 *
		 * // define a new scroll function with an additional parameter
		 * controller.scrollTo(function (newScrollPos, message) {
		 *  console.log(message);
		 *	$(this).animate({scrollTop: newScrollPos});
		 * });
		 * // call as usual, but supply an extra parameter to the defined custom function
		 * controller.scrollTo(100, "my message");
		 *
		 * // define a new scroll function with an additional parameter containing multiple variables
		 * controller.scrollTo(function (newScrollPos, options) {
		 *  someGlobalVar = options.a + options.b;
		 *	$(this).animate({scrollTop: newScrollPos});
		 * });
		 * // call as usual, but supply an extra parameter containing multiple options
		 * controller.scrollTo(100, {a: 1, b: 2});
		 *
		 * // define a new scroll function with a callback supplied as an additional parameter
		 * controller.scrollTo(function (newScrollPos, callback) {
		 *	$(this).animate({scrollTop: newScrollPos}, 400, "swing", callback);
		 * });
		 * // call as usual, but supply an extra parameter, which is used as a callback in the previously defined custom scroll function
		 * controller.scrollTo(100, function() {
		 *	console.log("scroll has finished.");
		 * });
		 *
		 * @param {mixed} scrollTarget - The supplied argument can be one of these types:
		 * 1. `number` -> The container will scroll to this new scroll offset.
		 * 2. `string` or `object` -> Can be a selector or a DOM object.  
		 *  The container will scroll to the position of this element.
		 * 3. `ScrollMagic Scene` -> The container will scroll to the start of this scene.
		 * 4. `function` -> This function will be used for future scroll position modifications.  
		 *  This provides a way for you to change the behaviour of scrolling and adding new behaviour like animation. The function receives the new scroll position as a parameter and a reference to the container element using `this`.  
		 *  It may also optionally receive an optional additional parameter (see below)  
		 *  _**NOTE:**  
		 *  All other options will still work as expected, using the new function to scroll._
		 * @param {mixed} [additionalParameter] - If a custom scroll function was defined (see above 4.), you may want to supply additional parameters to it, when calling it. You can do this using this parameter – see examples for details. Please note, that this parameter will have no effect, if you use the default scrolling function.
		 * @returns {Controller} Parent object for chaining.
		 */
		this.scrollTo = function (scrollTarget, additionalParameter) {
			if (_util.type.Number(scrollTarget)) { // excecute
				setScrollPos.call(_options.container, scrollTarget, additionalParameter);
			} else if (scrollTarget instanceof ScrollMagic.Scene) { // scroll to scene
				if (scrollTarget.controller() === Controller) { // check if the controller is associated with this scene
					Controller.scrollTo(scrollTarget.scrollOffset(), additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", scrollTarget);
				}
			} else if (_util.type.Function(scrollTarget)) { // assign new scroll function
				setScrollPos = scrollTarget;
			} else { // scroll to element
				var elem = _util.get.elements(scrollTarget)[0];
				if (elem) {
					// if parent is pin spacer, use spacer position instead so correct start position is returned for pinned elements.
					while (elem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
						elem = elem.parentNode;
					}

					var
					param = _options.vertical ? "top" : "left",
						// which param is of interest ?
						containerOffset = _util.get.offset(_options.container),
						// container position is needed because element offset is returned in relation to document, not in relation to container.
						elementOffset = _util.get.offset(elem);

					if (!_isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
						containerOffset[param] -= Controller.scrollPos();
					}

					Controller.scrollTo(elementOffset[param] - containerOffset[param], additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", scrollTarget);
				}
			}
			return Controller;
		};

		/**
		 * **Get** the current scrollPosition or **Set** a new method to calculate it.  
		 * -> **GET**:
		 * When used as a getter this function will return the current scroll position.  
		 * To get a cached value use Controller.info("scrollPos"), which will be updated in the update cycle.  
		 * For vertical controllers it will return the top scroll offset and for horizontal applications it will return the left offset.
		 *
		 * -> **SET**:
		 * When used as a setter this method prodes a way to permanently overwrite the controller's scroll position calculation.  
		 * A typical usecase is when the scroll position is not reflected by the containers scrollTop or scrollLeft values, but for example by the inner offset of a child container.  
		 * Moving a child container inside a parent is a commonly used method for several scrolling frameworks, including iScroll.  
		 * By providing an alternate calculation function you can make sure ScrollMagic receives the correct scroll position.  
		 * Please also bear in mind that your function should return y values for vertical scrolls an x for horizontals.
		 *
		 * To change the current scroll position please use `Controller.scrollTo()`.
		 * @public
		 *
		 * @example
		 * // get the current scroll Position
		 * var scrollPos = controller.scrollPos();
		 *
		 * // set a new scroll position calculation method
		 * controller.scrollPos(function () {
		 *	return this.info("vertical") ? -mychildcontainer.y : -mychildcontainer.x
		 * });
		 *
		 * @param {function} [scrollPosMethod] - The function to be used for the scroll position calculation of the container.
		 * @returns {(number|Controller)} Current scroll position or parent object for chaining.
		 */
		this.scrollPos = function (scrollPosMethod) {
			if (!arguments.length) { // get
				return getScrollPos.call(Controller);
			} else { // set
				if (_util.type.Function(scrollPosMethod)) {
					getScrollPos = scrollPosMethod;
				} else {
					log(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");
				}
			}
			return Controller;
		};

		/**
		 * **Get** all infos or one in particular about the controller.
		 * @public
		 * @example
		 * // returns the current scroll position (number)
		 * var scrollPos = controller.info("scrollPos");
		 *
		 * // returns all infos as an object
		 * var infos = controller.info();
		 *
		 * @param {string} [about] - If passed only this info will be returned instead of an object containing all.  
		 Valid options are:
		 ** `"size"` => the current viewport size of the container
		 ** `"vertical"` => true if vertical scrolling, otherwise false
		 ** `"scrollPos"` => the current scroll position
		 ** `"scrollDirection"` => the last known direction of the scroll
		 ** `"container"` => the container element
		 ** `"isDocument"` => true if container element is the document.
		 * @returns {(mixed|object)} The requested info(s).
		 */
		this.info = function (about) {
			var values = {
				size: _viewPortSize,
				// contains height or width (in regard to orientation);
				vertical: _options.vertical,
				scrollPos: _scrollPos,
				scrollDirection: _scrollDirection,
				container: _options.container,
				isDocument: _isDocument
			};
			if (!arguments.length) { // get all as an object
				return values;
			} else if (values[about] !== undefined) {
				return values[about];
			} else {
				log(1, "ERROR: option \"" + about + "\" is not available");
				return;
			}
		};

		/**
		 * **Get** or **Set** the current loglevel option value.
		 * @public
		 *
		 * @example
		 * // get the current value
		 * var loglevel = controller.loglevel();
		 *
		 * // set a new value
		 * controller.loglevel(3);
		 *
		 * @param {number} [newLoglevel] - The new loglevel setting of the Controller. `[0-3]`
		 * @returns {(number|Controller)} Current loglevel or parent object for chaining.
		 */
		this.loglevel = function (newLoglevel) {
			if (!arguments.length) { // get
				return _options.loglevel;
			} else if (_options.loglevel != newLoglevel) { // set
				_options.loglevel = newLoglevel;
			}
			return Controller;
		};

		/**
		 * **Get** or **Set** the current enabled state of the controller.  
		 * This can be used to disable all Scenes connected to the controller without destroying or removing them.
		 * @public
		 *
		 * @example
		 * // get the current value
		 * var enabled = controller.enabled();
		 *
		 * // disable the controller
		 * controller.enabled(false);
		 *
		 * @param {boolean} [newState] - The new enabled state of the controller `true` or `false`.
		 * @returns {(boolean|Controller)} Current enabled state or parent object for chaining.
		 */
		this.enabled = function (newState) {
			if (!arguments.length) { // get
				return _enabled;
			} else if (_enabled != newState) { // set
				_enabled = !! newState;
				Controller.updateScene(_sceneObjects, true);
			}
			return Controller;
		};

		/**
		 * Destroy the Controller, all Scenes and everything.
		 * @public
		 *
		 * @example
		 * // without resetting the scenes
		 * controller = controller.destroy();
		 *
		 * // with scene reset
		 * controller = controller.destroy(true);
		 *
		 * @param {boolean} [resetScenes=false] - If `true` the pins and tweens (if existent) of all scenes will be reset.
		 * @returns {null} Null to unset handler variables.
		 */
		this.destroy = function (resetScenes) {
			window.clearTimeout(_refreshTimeout);
			var i = _sceneObjects.length;
			while (i--) {
				_sceneObjects[i].destroy(resetScenes);
			}
			_options.container.removeEventListener("resize", onChange);
			_options.container.removeEventListener("scroll", onChange);
			_util.cAF(_updateTimeout);
			log(3, "destroyed " + NAMESPACE + " (reset: " + (resetScenes ? "true" : "false") + ")");
			return null;
		};

		// INIT
		construct();
		return Controller;
	};

	// store pagewide controller options
	var CONTROLLER_OPTIONS = {
		defaults: {
			container: window,
			vertical: true,
			globalSceneOptions: {},
			loglevel: 2,
			refreshInterval: 100
		}
	};
/*
 * method used to add an option to ScrollMagic Scenes.
 */
	ScrollMagic.Controller.addOption = function (name, defaultValue) {
		CONTROLLER_OPTIONS.defaults[name] = defaultValue;
	};
	// instance extension function for plugins
	ScrollMagic.Controller.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Controller = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Controller, oldClass); // copy properties
		ScrollMagic.Controller.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Controller.prototype.constructor = ScrollMagic.Controller; // restore constructor
	};


	/**
	 * A Scene defines where the controller should react and how.
	 *
	 * @class
	 *
	 * @example
	 * // create a standard scene and add it to a controller
	 * new ScrollMagic.Scene()
	 *		.addTo(controller);
	 *
	 * // create a scene with custom options and assign a handler to it.
	 * var scene = new ScrollMagic.Scene({
	 * 		duration: 100,
	 *		offset: 200,
	 *		triggerHook: "onEnter",
	 *		reverse: false
	 * });
	 *
	 * @param {object} [options] - Options for the Scene. The options can be updated at any time.  
	 Instead of setting the options for each scene individually you can also set them globally in the controller as the controllers `globalSceneOptions` option. The object accepts the same properties as the ones below.  
	 When a scene is added to the controller the options defined using the Scene constructor will be overwritten by those set in `globalSceneOptions`.
	 * @param {(number|function)} [options.duration=0] - The duration of the scene. 
	 If `0` tweens will auto-play when reaching the scene start point, pins will be pinned indefinetly starting at the start position.  
	 A function retuning the duration value is also supported. Please see `Scene.duration()` for details.
	 * @param {number} [options.offset=0] - Offset Value for the Trigger Position. If no triggerElement is defined this will be the scroll distance from the start of the page, after which the scene will start.
	 * @param {(string|object)} [options.triggerElement=null] - Selector or DOM object that defines the start of the scene. If undefined the scene will start right at the start of the page (unless an offset is set).
	 * @param {(number|string)} [options.triggerHook="onCenter"] - Can be a number between 0 and 1 defining the position of the trigger Hook in relation to the viewport.  
	 Can also be defined using a string:
	 ** `"onEnter"` => `1`
	 ** `"onCenter"` => `0.5`
	 ** `"onLeave"` => `0`
	 * @param {boolean} [options.reverse=true] - Should the scene reverse, when scrolling up?
	 * @param {number} [options.loglevel=2] - Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
	 ** `0` => silent
	 ** `1` => errors
	 ** `2` => errors, warnings
	 ** `3` => errors, warnings, debuginfo
	 * 
	 */
	ScrollMagic.Scene = function (options) {

/*
	 * ----------------------------------------------------------------
	 * settings
	 * ----------------------------------------------------------------
	 */

		var
		NAMESPACE = 'ScrollMagic.Scene',
			SCENE_STATE_BEFORE = 'BEFORE',
			SCENE_STATE_DURING = 'DURING',
			SCENE_STATE_AFTER = 'AFTER',
			DEFAULT_OPTIONS = SCENE_OPTIONS.defaults;

/*
	 * ----------------------------------------------------------------
	 * private vars
	 * ----------------------------------------------------------------
	 */

		var
		Scene = this,
			_options = _util.extend({}, DEFAULT_OPTIONS, options),
			_state = SCENE_STATE_BEFORE,
			_progress = 0,
			_scrollOffset = {
				start: 0,
				end: 0
			},
			// reflects the controllers's scroll position for the start and end of the scene respectively
			_triggerPos = 0,
			_enabled = true,
			_durationUpdateMethod, _controller;

		/**
		 * Internal constructor function of the ScrollMagic Scene
		 * @private
		 */
		var construct = function () {
			for (var key in _options) { // check supplied options
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			// add getters/setters for all possible options
			for (var optionName in DEFAULT_OPTIONS) {
				addSceneOption(optionName);
			}
			// validate all options
			validateOption();
		};

/*
 * ----------------------------------------------------------------
 * Event Management
 * ----------------------------------------------------------------
 */

		var _listeners = {};
		/**
		 * Scene start event.  
		 * Fires whenever the scroll position its the starting point of the scene.  
		 * It will also fire when scrolling back up going over the start position of the scene. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#start
		 *
		 * @example
		 * scene.on("start", function (event) {
		 * 	console.log("Hit start point of scene.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"DURING"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene end event.  
		 * Fires whenever the scroll position its the ending point of the scene.  
		 * It will also fire when scrolling back up from after the scene and going over its end position. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#end
		 *
		 * @example
		 * scene.on("end", function (event) {
		 * 	console.log("Hit end point of scene.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"DURING"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene enter event.  
		 * Fires whenever the scene enters the "DURING" state.  
		 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene enters its active scroll timeframe, regardless of the scroll-direction.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#enter
		 *
		 * @example
		 * scene.on("enter", function (event) {
		 * 	console.log("Scene entered.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene - always `"DURING"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene leave event.  
		 * Fires whenever the scene's state goes from "DURING" to either "BEFORE" or "AFTER".  
		 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene leaves its active scroll timeframe, regardless of the scroll-direction.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#leave
		 *
		 * @example
		 * scene.on("leave", function (event) {
		 * 	console.log("Scene left.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene update event.  
		 * Fires whenever the scene is updated (but not necessarily changes the progress).
		 *
		 * @event ScrollMagic.Scene#update
		 *
		 * @example
		 * scene.on("update", function (event) {
		 * 	console.log("Scene updated.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.startPos - The starting position of the scene (in relation to the conainer)
		 * @property {number} event.endPos - The ending position of the scene (in relation to the conainer)
		 * @property {number} event.scrollPos - The current scroll position of the container
		 */
		/**
		 * Scene progress event.  
		 * Fires whenever the progress of the scene changes.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#progress
		 *
		 * @example
		 * scene.on("progress", function (event) {
		 * 	console.log("Scene progress changed to " + event.progress);
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene change event.  
		 * Fires whenvever a property of the scene is changed.
		 *
		 * @event ScrollMagic.Scene#change
		 *
		 * @example
		 * scene.on("change", function (event) {
		 * 	console.log("Scene Property \"" + event.what + "\" changed to " + event.newval);
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {string} event.what - Indicates what value has been changed
		 * @property {mixed} event.newval - The new value of the changed property
		 */
		/**
		 * Scene shift event.  
		 * Fires whenvever the start or end **scroll offset** of the scene change.
		 * This happens explicitely, when one of these values change: `offset`, `duration` or `triggerHook`.
		 * It will fire implicitly when the `triggerElement` changes, if the new element has a different position (most cases).
		 * It will also fire implicitly when the size of the container changes and the triggerHook is anything other than `onLeave`.
		 *
		 * @event ScrollMagic.Scene#shift
		 * @since 1.1.0
		 *
		 * @example
		 * scene.on("shift", function (event) {
		 * 	console.log("Scene moved, because the " + event.reason + " has changed.)");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {string} event.reason - Indicates why the scene has shifted
		 */
		/**
		 * Scene destroy event.  
		 * Fires whenvever the scene is destroyed.
		 * This can be used to tidy up custom behaviour used in events.
		 *
		 * @event ScrollMagic.Scene#destroy
		 * @since 1.1.0
		 *
		 * @example
		 * scene.on("enter", function (event) {
		 *        // add custom action
		 *        $("#my-elem").left("200");
		 *      })
		 *      .on("destroy", function (event) {
		 *        // reset my element to start position
		 *        if (event.reset) {
		 *          $("#my-elem").left("0");
		 *        }
		 *      });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {boolean} event.reset - Indicates if the destroy method was called with reset `true` or `false`.
		 */
		/**
		 * Scene add event.  
		 * Fires when the scene is added to a controller.
		 * This is mostly used by plugins to know that change might be due.
		 *
		 * @event ScrollMagic.Scene#add
		 * @since 2.0.0
		 *
		 * @example
		 * scene.on("add", function (event) {
		 * 	console.log('Scene was added to a new controller.');
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {boolean} event.controller - The controller object the scene was added to.
		 */
		/**
		 * Scene remove event.  
		 * Fires when the scene is removed from a controller.
		 * This is mostly used by plugins to know that change might be due.
		 *
		 * @event ScrollMagic.Scene#remove
		 * @since 2.0.0
		 *
		 * @example
		 * scene.on("remove", function (event) {
		 * 	console.log('Scene was removed from its controller.');
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 */

		/**
		 * Add one ore more event listener.  
		 * The callback function will be fired at the respective event, and an object containing relevant data will be passed to the callback.
		 * @method ScrollMagic.Scene#on
		 *
		 * @example
		 * function callback (event) {
		 * 		console.log("Event fired! (" + event.type + ")");
		 * }
		 * // add listeners
		 * scene.on("change update progress start end enter leave", callback);
		 *
		 * @param {string} names - The name or names of the event the callback should be attached to.
		 * @param {function} callback - A function that should be executed, when the event is dispatched. An event object will be passed to the callback.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.on = function (names, callback) {
			if (_util.type.Function(callback)) {
				names = names.trim().split(' ');
				names.forEach(function (fullname) {
					var
					nameparts = fullname.split('.'),
						eventname = nameparts[0],
						namespace = nameparts[1];
					if (eventname != "*") { // disallow wildcards
						if (!_listeners[eventname]) {
							_listeners[eventname] = [];
						}
						_listeners[eventname].push({
							namespace: namespace || '',
							callback: callback
						});
					}
				});
			} else {
				log(1, "ERROR when calling '.on()': Supplied callback for '" + names + "' is not a valid function!");
			}
			return Scene;
		};

		/**
		 * Remove one or more event listener.
		 * @method ScrollMagic.Scene#off
		 *
		 * @example
		 * function callback (event) {
		 * 		console.log("Event fired! (" + event.type + ")");
		 * }
		 * // add listeners
		 * scene.on("change update", callback);
		 * // remove listeners
		 * scene.off("change update", callback);
		 *
		 * @param {string} names - The name or names of the event that should be removed.
		 * @param {function} [callback] - A specific callback function that should be removed. If none is passed all callbacks to the event listener will be removed.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.off = function (names, callback) {
			if (!names) {
				log(1, "ERROR: Invalid event name supplied.");
				return Scene;
			}
			names = names.trim().split(' ');
			names.forEach(function (fullname, key) {
				var
				nameparts = fullname.split('.'),
					eventname = nameparts[0],
					namespace = nameparts[1] || '',
					removeList = eventname === '*' ? Object.keys(_listeners) : [eventname];
				removeList.forEach(function (remove) {
					var
					list = _listeners[remove] || [],
						i = list.length;
					while (i--) {
						var listener = list[i];
						if (listener && (namespace === listener.namespace || namespace === '*') && (!callback || callback == listener.callback)) {
							list.splice(i, 1);
						}
					}
					if (!list.length) {
						delete _listeners[remove];
					}
				});
			});
			return Scene;
		};

		/**
		 * Trigger an event.
		 * @method ScrollMagic.Scene#trigger
		 *
		 * @example
		 * this.trigger("change");
		 *
		 * @param {string} name - The name of the event that should be triggered.
		 * @param {object} [vars] - An object containing info that should be passed to the callback.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.trigger = function (name, vars) {
			if (name) {
				var
				nameparts = name.trim().split('.'),
					eventname = nameparts[0],
					namespace = nameparts[1],
					listeners = _listeners[eventname];
				log(3, 'event fired:', eventname, vars ? "->" : '', vars || '');
				if (listeners) {
					listeners.forEach(function (listener, key) {
						if (!namespace || namespace === listener.namespace) {
							listener.callback.call(Scene, new ScrollMagic.Event(eventname, listener.namespace, Scene, vars));
						}
					});
				}
			} else {
				log(1, "ERROR: Invalid event name supplied.");
			}
			return Scene;
		};

		// set event listeners
		Scene.on("change.internal", function (e) {
			if (e.what !== "loglevel" && e.what !== "tweenChanges") { // no need for a scene update scene with these options...
				if (e.what === "triggerElement") {
					updateTriggerElementPosition();
				} else if (e.what === "reverse") { // the only property left that may have an impact on the current scene state. Everything else is handled by the shift event.
					Scene.update();
				}
			}
		}).on("shift.internal", function (e) {
			updateScrollOffset();
			Scene.update(); // update scene to reflect new position
		});

		/**
		 * Send a debug message to the console.
		 * @private
		 * but provided publicly with _log for plugins
		 *
		 * @param {number} loglevel - The loglevel required to initiate output for the message.
		 * @param {...mixed} output - One or more variables that should be passed to the console.
		 */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};

		/**
		 * Add the scene to a controller.  
		 * This is the equivalent to `Controller.addScene(scene)`.
		 * @method ScrollMagic.Scene#addTo
		 *
		 * @example
		 * // add a scene to a ScrollMagic Controller
		 * scene.addTo(controller);
		 *
		 * @param {ScrollMagic.Controller} controller - The controller to which the scene should be added.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.addTo = function (controller) {
			if (!(controller instanceof ScrollMagic.Controller)) {
				log(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller");
			} else if (_controller != controller) {
				// new controller
				if (_controller) { // was associated to a different controller before, so remove it...
					_controller.removeScene(Scene);
				}
				_controller = controller;
				validateOption();
				updateDuration(true);
				updateTriggerElementPosition(true);
				updateScrollOffset();
				_controller.info("container").addEventListener('resize', onContainerResize);
				controller.addScene(Scene);
				Scene.trigger("add", {
					controller: _controller
				});
				log(3, "added " + NAMESPACE + " to controller");
				Scene.update();
			}
			return Scene;
		};

		/**
		 * **Get** or **Set** the current enabled state of the scene.  
		 * This can be used to disable this scene without removing or destroying it.
		 * @method ScrollMagic.Scene#enabled
		 *
		 * @example
		 * // get the current value
		 * var enabled = scene.enabled();
		 *
		 * // disable the scene
		 * scene.enabled(false);
		 *
		 * @param {boolean} [newState] - The new enabled state of the scene `true` or `false`.
		 * @returns {(boolean|Scene)} Current enabled state or parent object for chaining.
		 */
		this.enabled = function (newState) {
			if (!arguments.length) { // get
				return _enabled;
			} else if (_enabled != newState) { // set
				_enabled = !! newState;
				Scene.update(true);
			}
			return Scene;
		};

		/**
		 * Remove the scene from the controller.  
		 * This is the equivalent to `Controller.removeScene(scene)`.
		 * The scene will not be updated anymore until you readd it to a controller.
		 * To remove the pin or the tween you need to call removeTween() or removePin() respectively.
		 * @method ScrollMagic.Scene#remove
		 * @example
		 * // remove the scene from its controller
		 * scene.remove();
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.remove = function () {
			if (_controller) {
				_controller.info("container").removeEventListener('resize', onContainerResize);
				var tmpParent = _controller;
				_controller = undefined;
				tmpParent.removeScene(Scene);
				Scene.trigger("remove");
				log(3, "removed " + NAMESPACE + " from controller");
			}
			return Scene;
		};

		/**
		 * Destroy the scene and everything.
		 * @method ScrollMagic.Scene#destroy
		 * @example
		 * // destroy the scene without resetting the pin and tween to their initial positions
		 * scene = scene.destroy();
		 *
		 * // destroy the scene and reset the pin and tween
		 * scene = scene.destroy(true);
		 *
		 * @param {boolean} [reset=false] - If `true` the pin and tween (if existent) will be reset.
		 * @returns {null} Null to unset handler variables.
		 */
		this.destroy = function (reset) {
			Scene.trigger("destroy", {
				reset: reset
			});
			Scene.remove();
			Scene.off("*.*");
			log(3, "destroyed " + NAMESPACE + " (reset: " + (reset ? "true" : "false") + ")");
			return null;
		};


		/**
		 * Updates the Scene to reflect the current state.  
		 * This is the equivalent to `Controller.updateScene(scene, immediately)`.  
		 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
		 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.
		 * This means an update doesn't necessarily result in a progress change. The `progress` event will be fired if the progress has indeed changed between this update and the last.  
		 * _**NOTE:** This method gets called constantly whenever ScrollMagic detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
		 * @method ScrollMagic.Scene#update
		 * @example
		 * // update the scene on next tick
		 * scene.update();
		 *
		 * // update the scene immediately
		 * scene.update(true);
		 *
		 * @fires Scene.update
		 *
		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance).
		 * @returns {Scene} Parent object for chaining.
		 */
		this.update = function (immediately) {
			if (_controller) {
				if (immediately) {
					if (_controller.enabled() && _enabled) {
						var
						scrollPos = _controller.info("scrollPos"),
							newProgress;

						if (_options.duration > 0) {
							newProgress = (scrollPos - _scrollOffset.start) / (_scrollOffset.end - _scrollOffset.start);
						} else {
							newProgress = scrollPos >= _scrollOffset.start ? 1 : 0;
						}

						Scene.trigger("update", {
							startPos: _scrollOffset.start,
							endPos: _scrollOffset.end,
							scrollPos: scrollPos
						});

						Scene.progress(newProgress);
					} else if (_pin && _state === SCENE_STATE_DURING) {
						updatePinState(true); // unpin in position
					}
				} else {
					_controller.updateScene(Scene, false);
				}
			}
			return Scene;
		};

		/**
		 * Updates dynamic scene variables like the trigger element position or the duration.
		 * This method is automatically called in regular intervals from the controller. See {@link ScrollMagic.Controller} option `refreshInterval`.
		 * 
		 * You can call it to minimize lag, for example when you intentionally change the position of the triggerElement.
		 * If you don't it will simply be updated in the next refresh interval of the container, which is usually sufficient.
		 *
		 * @method ScrollMagic.Scene#refresh
		 * @since 1.1.0
		 * @example
		 * scene = new ScrollMagic.Scene({triggerElement: "#trigger"});
		 * 
		 * // change the position of the trigger
		 * $("#trigger").css("top", 500);
		 * // immediately let the scene know of this change
		 * scene.refresh();
		 *
		 * @fires {@link Scene.shift}, if the trigger element position or the duration changed
		 * @fires {@link Scene.change}, if the duration changed
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.refresh = function () {
			updateDuration();
			updateTriggerElementPosition();
			// update trigger element position
			return Scene;
		};

		/**
		 * **Get** or **Set** the scene's progress.  
		 * Usually it shouldn't be necessary to use this as a setter, as it is set automatically by scene.update().  
		 * The order in which the events are fired depends on the duration of the scene:
		 *  1. Scenes with `duration == 0`:  
		 *  Scenes that have no duration by definition have no ending. Thus the `end` event will never be fired.  
		 *  When the trigger position of the scene is passed the events are always fired in this order:  
		 *  `enter`, `start`, `progress` when scrolling forward  
		 *  and  
		 *  `progress`, `start`, `leave` when scrolling in reverse
		 *  2. Scenes with `duration > 0`:  
		 *  Scenes with a set duration have a defined start and end point.  
		 *  When scrolling past the start position of the scene it will fire these events in this order:  
		 *  `enter`, `start`, `progress`  
		 *  When continuing to scroll and passing the end point it will fire these events:  
		 *  `progress`, `end`, `leave`  
		 *  When reversing through the end point these events are fired:  
		 *  `enter`, `end`, `progress`  
		 *  And when continuing to scroll past the start position in reverse it will fire:  
		 *  `progress`, `start`, `leave`  
		 *  In between start and end the `progress` event will be called constantly, whenever the progress changes.
		 * 
		 * In short:  
		 * `enter` events will always trigger **before** the progress update and `leave` envents will trigger **after** the progress update.  
		 * `start` and `end` will always trigger at their respective position.
		 * 
		 * Please review the event descriptions for details on the events and the event object that is passed to the callback.
		 * 
		 * @method ScrollMagic.Scene#progress
		 * @example
		 * // get the current scene progress
		 * var progress = scene.progress();
		 *
		 * // set new scene progress
		 * scene.progress(0.3);
		 *
		 * @fires {@link Scene.enter}, when used as setter
		 * @fires {@link Scene.start}, when used as setter
		 * @fires {@link Scene.progress}, when used as setter
		 * @fires {@link Scene.end}, when used as setter
		 * @fires {@link Scene.leave}, when used as setter
		 *
		 * @param {number} [progress] - The new progress value of the scene `[0-1]`.
		 * @returns {number} `get` -  Current scene progress.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */
		this.progress = function (progress) {
			if (!arguments.length) { // get
				return _progress;
			} else { // set
				var
				doUpdate = false,
					oldState = _state,
					scrollDirection = _controller ? _controller.info("scrollDirection") : 'PAUSED',
					reverseOrForward = _options.reverse || progress >= _progress;
				if (_options.duration === 0) {
					// zero duration scenes
					doUpdate = _progress != progress;
					_progress = progress < 1 && reverseOrForward ? 0 : 1;
					_state = _progress === 0 ? SCENE_STATE_BEFORE : SCENE_STATE_DURING;
				} else {
					// scenes with start and end
					if (progress < 0 && _state !== SCENE_STATE_BEFORE && reverseOrForward) {
						// go back to initial state
						_progress = 0;
						_state = SCENE_STATE_BEFORE;
						doUpdate = true;
					} else if (progress >= 0 && progress < 1 && reverseOrForward) {
						_progress = progress;
						_state = SCENE_STATE_DURING;
						doUpdate = true;
					} else if (progress >= 1 && _state !== SCENE_STATE_AFTER) {
						_progress = 1;
						_state = SCENE_STATE_AFTER;
						doUpdate = true;
					} else if (_state === SCENE_STATE_DURING && !reverseOrForward) {
						updatePinState(); // in case we scrolled backwards mid-scene and reverse is disabled => update the pin position, so it doesn't move back as well.
					}
				}
				if (doUpdate) {
					// fire events
					var
					eventVars = {
						progress: _progress,
						state: _state,
						scrollDirection: scrollDirection
					},
						stateChanged = _state != oldState;

					var trigger = function (eventName) { // tmp helper to simplify code
						Scene.trigger(eventName, eventVars);
					};

					if (stateChanged) { // enter events
						if (oldState !== SCENE_STATE_DURING) {
							trigger("enter");
							trigger(oldState === SCENE_STATE_BEFORE ? "start" : "end");
						}
					}
					trigger("progress");
					if (stateChanged) { // leave events
						if (_state !== SCENE_STATE_DURING) {
							trigger(_state === SCENE_STATE_BEFORE ? "start" : "end");
							trigger("leave");
						}
					}
				}

				return Scene;
			}
		};


		/**
		 * Update the start and end scrollOffset of the container.
		 * The positions reflect what the controller's scroll position will be at the start and end respectively.
		 * Is called, when:
		 *   - Scene event "change" is called with: offset, triggerHook, duration 
		 *   - scroll container event "resize" is called
		 *   - the position of the triggerElement changes
		 *   - the controller changes -> addTo()
		 * @private
		 */
		var updateScrollOffset = function () {
			_scrollOffset = {
				start: _triggerPos + _options.offset
			};
			if (_controller && _options.triggerElement) {
				// take away triggerHook portion to get relative to top
				_scrollOffset.start -= _controller.info("size") * _options.triggerHook;
			}
			_scrollOffset.end = _scrollOffset.start + _options.duration;
		};

		/**
		 * Updates the duration if set to a dynamic function.
		 * This method is called when the scene is added to a controller and in regular intervals from the controller through scene.refresh().
		 * 
		 * @fires {@link Scene.change}, if the duration changed
		 * @fires {@link Scene.shift}, if the duration changed
		 *
		 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
		 * @private
		 */
		var updateDuration = function (suppressEvents) {
			// update duration
			if (_durationUpdateMethod) {
				var varname = "duration";
				if (changeOption(varname, _durationUpdateMethod.call(Scene)) && !suppressEvents) { // set
					Scene.trigger("change", {
						what: varname,
						newval: _options[varname]
					});
					Scene.trigger("shift", {
						reason: varname
					});
				}
			}
		};

		/**
		 * Updates the position of the triggerElement, if present.
		 * This method is called ...
		 *  - ... when the triggerElement is changed
		 *  - ... when the scene is added to a (new) controller
		 *  - ... in regular intervals from the controller through scene.refresh().
		 * 
		 * @fires {@link Scene.shift}, if the position changed
		 *
		 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
		 * @private
		 */
		var updateTriggerElementPosition = function (suppressEvents) {
			var
			elementPos = 0,
				telem = _options.triggerElement;
			if (_controller && telem) {
				var
				controllerInfo = _controller.info(),
					containerOffset = _util.get.offset(controllerInfo.container),
					// container position is needed because element offset is returned in relation to document, not in relation to container.
					param = controllerInfo.vertical ? "top" : "left"; // which param is of interest ?
				// if parent is spacer, use spacer position instead so correct start position is returned for pinned elements.
				while (telem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
					telem = telem.parentNode;
				}

				var elementOffset = _util.get.offset(telem);

				if (!controllerInfo.isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
					containerOffset[param] -= _controller.scrollPos();
				}

				elementPos = elementOffset[param] - containerOffset[param];
			}
			var changed = elementPos != _triggerPos;
			_triggerPos = elementPos;
			if (changed && !suppressEvents) {
				Scene.trigger("shift", {
					reason: "triggerElementPosition"
				});
			}
		};

		/**
		 * Trigger a shift event, when the container is resized and the triggerHook is > 1.
		 * @private
		 */
		var onContainerResize = function (e) {
			if (_options.triggerHook > 0) {
				Scene.trigger("shift", {
					reason: "containerResize"
				});
			}
		};

		var _validate = _util.extend(SCENE_OPTIONS.validate, {
			// validation for duration handled internally for reference to private var _durationMethod
			duration: function (val) {
				if (_util.type.String(val) && val.match(/^(\.|\d)*\d+%$/)) {
					// percentage value
					var perc = parseFloat(val) / 100;
					val = function () {
						return _controller ? _controller.info("size") * perc : 0;
					};
				}
				if (_util.type.Function(val)) {
					// function
					_durationUpdateMethod = val;
					try {
						val = parseFloat(_durationUpdateMethod());
					} catch (e) {
						val = -1; // will cause error below
					}
				}
				// val has to be float
				val = parseFloat(val);
				if (!_util.type.Number(val) || val < 0) {
					if (_durationUpdateMethod) {
						_durationUpdateMethod = undefined;
						throw ["Invalid return value of supplied function for option \"duration\":", val];
					} else {
						throw ["Invalid value for option \"duration\":", val];
					}
				}
				return val;
			}
		});

		/**
		 * Checks the validity of a specific or all options and reset to default if neccessary.
		 * @private
		 */
		var validateOption = function (check) {
			check = arguments.length ? [check] : Object.keys(_validate);
			check.forEach(function (optionName, key) {
				var value;
				if (_validate[optionName]) { // there is a validation method for this option
					try { // validate value
						value = _validate[optionName](_options[optionName]);
					} catch (e) { // validation failed -> reset to default
						value = DEFAULT_OPTIONS[optionName];
						var logMSG = _util.type.String(e) ? [e] : e;
						if (_util.type.Array(logMSG)) {
							logMSG[0] = "ERROR: " + logMSG[0];
							logMSG.unshift(1); // loglevel 1 for error msg
							log.apply(this, logMSG);
						} else {
							log(1, "ERROR: Problem executing validation callback for option '" + optionName + "':", e.message);
						}
					} finally {
						_options[optionName] = value;
					}
				}
			});
		};

		/**
		 * Helper used by the setter/getters for scene options
		 * @private
		 */
		var changeOption = function (varname, newval) {
			var
			changed = false,
				oldval = _options[varname];
			if (_options[varname] != newval) {
				_options[varname] = newval;
				validateOption(varname); // resets to default if necessary
				changed = oldval != _options[varname];
			}
			return changed;
		};

		// generate getters/setters for all options
		var addSceneOption = function (optionName) {
			if (!Scene[optionName]) {
				Scene[optionName] = function (newVal) {
					if (!arguments.length) { // get
						return _options[optionName];
					} else {
						if (optionName === "duration") { // new duration is set, so any previously set function must be unset
							_durationUpdateMethod = undefined;
						}
						if (changeOption(optionName, newVal)) { // set
							Scene.trigger("change", {
								what: optionName,
								newval: _options[optionName]
							});
							if (SCENE_OPTIONS.shifts.indexOf(optionName) > -1) {
								Scene.trigger("shift", {
									reason: optionName
								});
							}
						}
					}
					return Scene;
				};
			}
		};

		/**
		 * **Get** or **Set** the duration option value.
		 * As a setter it also accepts a function returning a numeric value.  
		 * This is particularly useful for responsive setups.
		 *
		 * The duration is updated using the supplied function every time `Scene.refresh()` is called, which happens periodically from the controller (see ScrollMagic.Controller option `refreshInterval`).  
		 * _**NOTE:** Be aware that it's an easy way to kill performance, if you supply a function that has high CPU demand.  
		 * Even for size and position calculations it is recommended to use a variable to cache the value. (see example)  
		 * This counts double if you use the same function for multiple scenes._
		 *
		 * @method ScrollMagic.Scene#duration
		 * @example
		 * // get the current duration value
		 * var duration = scene.duration();
		 *
		 * // set a new duration
		 * scene.duration(300);
		 *
		 * // use a function to automatically adjust the duration to the window height.
		 * var durationValueCache;
		 * function getDuration () {
		 *   return durationValueCache;
		 * }
		 * function updateDuration (e) {
		 *   durationValueCache = window.innerHeight;
		 * }
		 * $(window).on("resize", updateDuration); // update the duration when the window size changes
		 * $(window).triggerHandler("resize"); // set to initial value
		 * scene.duration(getDuration); // supply duration method
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {(number|function)} [newDuration] - The new duration of the scene.
		 * @returns {number} `get` -  Current scene duration.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the offset option value.
		 * @method ScrollMagic.Scene#offset
		 * @example
		 * // get the current offset
		 * var offset = scene.offset();
		 *
		 * // set a new offset
		 * scene.offset(100);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {number} [newOffset] - The new offset of the scene.
		 * @returns {number} `get` -  Current scene offset.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the triggerElement option value.
		 * Does **not** fire `Scene.shift`, because changing the trigger Element doesn't necessarily mean the start position changes. This will be determined in `Scene.refresh()`, which is automatically triggered.
		 * @method ScrollMagic.Scene#triggerElement
		 * @example
		 * // get the current triggerElement
		 * var triggerElement = scene.triggerElement();
		 *
		 * // set a new triggerElement using a selector
		 * scene.triggerElement("#trigger");
		 * // set a new triggerElement using a DOM object
		 * scene.triggerElement(document.getElementById("trigger"));
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {(string|object)} [newTriggerElement] - The new trigger element for the scene.
		 * @returns {(string|object)} `get` -  Current triggerElement.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the triggerHook option value.
		 * @method ScrollMagic.Scene#triggerHook
		 * @example
		 * // get the current triggerHook value
		 * var triggerHook = scene.triggerHook();
		 *
		 * // set a new triggerHook using a string
		 * scene.triggerHook("onLeave");
		 * // set a new triggerHook using a number
		 * scene.triggerHook(0.7);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {(number|string)} [newTriggerHook] - The new triggerHook of the scene. See {@link Scene} parameter description for value options.
		 * @returns {number} `get` -  Current triggerHook (ALWAYS numerical).
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the reverse option value.
		 * @method ScrollMagic.Scene#reverse
		 * @example
		 * // get the current reverse option
		 * var reverse = scene.reverse();
		 *
		 * // set new reverse option
		 * scene.reverse(false);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {boolean} [newReverse] - The new reverse setting of the scene.
		 * @returns {boolean} `get` -  Current reverse option value.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the loglevel option value.
		 * @method ScrollMagic.Scene#loglevel
		 * @example
		 * // get the current loglevel
		 * var loglevel = scene.loglevel();
		 *
		 * // set new loglevel
		 * scene.loglevel(3);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {number} [newLoglevel] - The new loglevel setting of the scene. `[0-3]`
		 * @returns {number} `get` -  Current loglevel.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** the associated controller.
		 * @method ScrollMagic.Scene#controller
		 * @example
		 * // get the controller of a scene
		 * var controller = scene.controller();
		 *
		 * @returns {ScrollMagic.Controller} Parent controller or `undefined`
		 */
		this.controller = function () {
			return _controller;
		};

		/**
		 * **Get** the current state.
		 * @method ScrollMagic.Scene#state
		 * @example
		 * // get the current state
		 * var state = scene.state();
		 *
		 * @returns {string} `"BEFORE"`, `"DURING"` or `"AFTER"`
		 */
		this.state = function () {
			return _state;
		};

		/**
		 * **Get** the current scroll offset for the start of the scene.  
		 * Mind, that the scrollOffset is related to the size of the container, if `triggerHook` is bigger than `0` (or `"onLeave"`).  
		 * This means, that resizing the container or changing the `triggerHook` will influence the scene's start offset.
		 * @method ScrollMagic.Scene#scrollOffset
		 * @example
		 * // get the current scroll offset for the start and end of the scene.
		 * var start = scene.scrollOffset();
		 * var end = scene.scrollOffset() + scene.duration();
		 * console.log("the scene starts at", start, "and ends at", end);
		 *
		 * @returns {number} The scroll offset (of the container) at which the scene will trigger. Y value for vertical and X value for horizontal scrolls.
		 */
		this.scrollOffset = function () {
			return _scrollOffset.start;
		};

		/**
		 * **Get** the trigger position of the scene (including the value of the `offset` option).  
		 * @method ScrollMagic.Scene#triggerPosition
		 * @example
		 * // get the scene's trigger position
		 * var triggerPosition = scene.triggerPosition();
		 *
		 * @returns {number} Start position of the scene. Top position value for vertical and left position value for horizontal scrolls.
		 */
		this.triggerPosition = function () {
			var pos = _options.offset; // the offset is the basis
			if (_controller) {
				// get the trigger position
				if (_options.triggerElement) {
					// Element as trigger
					pos += _triggerPos;
				} else {
					// return the height of the triggerHook to start at the beginning
					pos += _controller.info("size") * Scene.triggerHook();
				}
			}
			return pos;
		};

		var
		_pin, _pinOptions;

		Scene.on("shift.internal", function (e) {
			var durationChanged = e.reason === "duration";
			if ((_state === SCENE_STATE_AFTER && durationChanged) || (_state === SCENE_STATE_DURING && _options.duration === 0)) {
				// if [duration changed after a scene (inside scene progress updates pin position)] or [duration is 0, we are in pin phase and some other value changed].
				updatePinState();
			}
			if (durationChanged) {
				updatePinDimensions();
			}
		}).on("progress.internal", function (e) {
			updatePinState();
		}).on("add.internal", function (e) {
			updatePinDimensions();
		}).on("destroy.internal", function (e) {
			Scene.removePin(e.reset);
		});
		/**
		 * Update the pin state.
		 * @private
		 */
		var updatePinState = function (forceUnpin) {
			if (_pin && _controller) {
				var
				containerInfo = _controller.info(),
					pinTarget = _pinOptions.spacer.firstChild; // may be pin element or another spacer, if cascading pins
				if (!forceUnpin && _state === SCENE_STATE_DURING) { // during scene or if duration is 0 and we are past the trigger
					// pinned state
					if (_util.css(pinTarget, "position") != "fixed") {
						// change state before updating pin spacer (position changes due to fixed collapsing might occur.)
						_util.css(pinTarget, {
							"position": "fixed"
						});
						// update pin spacer
						updatePinDimensions();
					}

					var
					fixedPos = _util.get.offset(_pinOptions.spacer, true),
						// get viewport position of spacer
						scrollDistance = _options.reverse || _options.duration === 0 ? containerInfo.scrollPos - _scrollOffset.start // quicker
						: Math.round(_progress * _options.duration * 10) / 10; // if no reverse and during pin the position needs to be recalculated using the progress
					// add scrollDistance
					fixedPos[containerInfo.vertical ? "top" : "left"] += scrollDistance;

					// set new values
					_util.css(_pinOptions.spacer.firstChild, {
						top: fixedPos.top,
						left: fixedPos.left
					});
				} else {
					// unpinned state
					var
					newCSS = {
						position: _pinOptions.inFlow ? "relative" : "absolute",
						top: 0,
						left: 0
					},
						change = _util.css(pinTarget, "position") != newCSS.position;

					if (!_pinOptions.pushFollowers) {
						newCSS[containerInfo.vertical ? "top" : "left"] = _options.duration * _progress;
					} else if (_options.duration > 0) { // only concerns scenes with duration
						if (_state === SCENE_STATE_AFTER && parseFloat(_util.css(_pinOptions.spacer, "padding-top")) === 0) {
							change = true; // if in after state but havent updated spacer yet (jumped past pin)
						} else if (_state === SCENE_STATE_BEFORE && parseFloat(_util.css(_pinOptions.spacer, "padding-bottom")) === 0) { // before
							change = true; // jumped past fixed state upward direction
						}
					}
					// set new values
					_util.css(pinTarget, newCSS);
					if (change) {
						// update pin spacer if state changed
						updatePinDimensions();
					}
				}
			}
		};

		/**
		 * Update the pin spacer and/or element size.
		 * The size of the spacer needs to be updated whenever the duration of the scene changes, if it is to push down following elements.
		 * @private
		 */
		var updatePinDimensions = function () {
			if (_pin && _controller && _pinOptions.inFlow) { // no spacerresize, if original position is absolute
				var
				after = (_state === SCENE_STATE_AFTER),
					before = (_state === SCENE_STATE_BEFORE),
					during = (_state === SCENE_STATE_DURING),
					vertical = _controller.info("vertical"),
					pinTarget = _pinOptions.spacer.firstChild,
					// usually the pined element but can also be another spacer (cascaded pins)
					marginCollapse = _util.isMarginCollapseType(_util.css(_pinOptions.spacer, "display")),
					css = {};

				// set new size
				// if relsize: spacer -> pin | else: pin -> spacer
				if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
					if (during) {
						_util.css(_pin, {
							"width": _util.get.width(_pinOptions.spacer)
						});
					} else {
						_util.css(_pin, {
							"width": "100%"
						});
					}
				} else {
					// minwidth is needed for cascaded pins.
					css["min-width"] = _util.get.width(vertical ? _pin : pinTarget, true, true);
					css.width = during ? css["min-width"] : "auto";
				}
				if (_pinOptions.relSize.height) {
					if (during) {
						// the only padding the spacer should ever include is the duration (if pushFollowers = true), so we need to substract that.
						_util.css(_pin, {
							"height": _util.get.height(_pinOptions.spacer) - (_pinOptions.pushFollowers ? _options.duration : 0)
						});
					} else {
						_util.css(_pin, {
							"height": "100%"
						});
					}
				} else {
					// margin is only included if it's a cascaded pin to resolve an IE9 bug
					css["min-height"] = _util.get.height(vertical ? pinTarget : _pin, true, !marginCollapse); // needed for cascading pins
					css.height = during ? css["min-height"] : "auto";
				}

				// add space for duration if pushFollowers is true
				if (_pinOptions.pushFollowers) {
					css["padding" + (vertical ? "Top" : "Left")] = _options.duration * _progress;
					css["padding" + (vertical ? "Bottom" : "Right")] = _options.duration * (1 - _progress);
				}
				_util.css(_pinOptions.spacer, css);
			}
		};

		/**
		 * Updates the Pin state (in certain scenarios)
		 * If the controller container is not the document and we are mid-pin-phase scrolling or resizing the main document can result to wrong pin positions.
		 * So this function is called on resize and scroll of the document.
		 * @private
		 */
		var updatePinInContainer = function () {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
				updatePinState();
			}
		};

		/**
		 * Updates the Pin spacer size state (in certain scenarios)
		 * If container is resized during pin and relatively sized the size of the pin might need to be updated...
		 * So this function is called on resize of the container.
		 * @private
		 */
		var updateRelativePinSpacer = function () {
			if (_controller && _pin && // well, duh
			_state === SCENE_STATE_DURING && // element in pinned state?
			( // is width or height relatively sized, but not in relation to body? then we need to recalc.
			((_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) && _util.get.width(window) != _util.get.width(_pinOptions.spacer.parentNode)) || (_pinOptions.relSize.height && _util.get.height(window) != _util.get.height(_pinOptions.spacer.parentNode)))) {
				updatePinDimensions();
			}
		};

		/**
		 * Is called, when the mousewhel is used while over a pinned element inside a div container.
		 * If the scene is in fixed state scroll events would be counted towards the body. This forwards the event to the scroll container.
		 * @private
		 */
		var onMousewheelOverPin = function (e) {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) { // in pin state
				e.preventDefault();
				_controller._setScrollPos(_controller.info("scrollPos") - ((e.wheelDelta || e[_controller.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || -e.detail * 30));
			}
		};

		/**
		 * Pin an element for the duration of the tween.  
		 * If the scene duration is 0 the element will only be unpinned, if the user scrolls back past the start position.  
		 * Make sure only one pin is applied to an element at the same time.
		 * An element can be pinned multiple times, but only successively.
		 * _**NOTE:** The option `pushFollowers` has no effect, when the scene duration is 0._
		 * @method ScrollMagic.Scene#setPin
		 * @example
		 * // pin element and push all following elements down by the amount of the pin duration.
		 * scene.setPin("#pin");
		 *
		 * // pin element and keeping all following elements in their place. The pinned element will move past them.
		 * scene.setPin("#pin", {pushFollowers: false});
		 *
		 * @param {(string|object)} element - A Selector targeting an element or a DOM object that is supposed to be pinned.
		 * @param {object} [settings] - settings for the pin
		 * @param {boolean} [settings.pushFollowers=true] - If `true` following elements will be "pushed" down for the duration of the pin, if `false` the pinned element will just scroll past them.  
		 Ignored, when duration is `0`.
		 * @param {string} [settings.spacerClass="scrollmagic-pin-spacer"] - Classname of the pin spacer element, which is used to replace the element.
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.setPin = function (element, settings) {
			var
			defaultSettings = {
				pushFollowers: true,
				spacerClass: "scrollmagic-pin-spacer"
			};
			settings = _util.extend({}, defaultSettings, settings);

			// validate Element
			element = _util.get.elements(element)[0];
			if (!element) {
				log(1, "ERROR calling method 'setPin()': Invalid pin element supplied.");
				return Scene; // cancel
			} else if (_util.css(element, "position") === "fixed") {
				log(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'.");
				return Scene; // cancel
			}

			if (_pin) { // preexisting pin?
				if (_pin === element) {
					// same pin we already have -> do nothing
					return Scene; // cancel
				} else {
					// kill old pin
					Scene.removePin();
				}

			}
			_pin = element;

			var
			parentDisplay = _pin.parentNode.style.display,
				boundsParams = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];

			_pin.parentNode.style.display = 'none'; // hack start to force css to return stylesheet values instead of calculated px values.
			var
			inFlow = _util.css(_pin, "position") != "absolute",
				pinCSS = _util.css(_pin, boundsParams.concat(["display"])),
				sizeCSS = _util.css(_pin, ["width", "height"]);
			_pin.parentNode.style.display = parentDisplay; // hack end.
			if (!inFlow && settings.pushFollowers) {
				log(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled.");
				settings.pushFollowers = false;
			}
			window.setTimeout(function () { // wait until all finished, because with responsive duration it will only be set after scene is added to controller
				if (_pin && _options.duration === 0 && settings.pushFollowers) {
					log(2, "WARNING: pushFollowers =", true, "has no effect, when scene duration is 0.");
				}
			}, 0);

			// create spacer and insert
			var
			spacer = _pin.parentNode.insertBefore(document.createElement('div'), _pin),
				spacerCSS = _util.extend(pinCSS, {
					position: inFlow ? "relative" : "absolute",
					boxSizing: "content-box",
					mozBoxSizing: "content-box",
					webkitBoxSizing: "content-box"
				});

			if (!inFlow) { // copy size if positioned absolutely, to work for bottom/right positioned elements.
				_util.extend(spacerCSS, _util.css(_pin, ["width", "height"]));
			}

			_util.css(spacer, spacerCSS);
			spacer.setAttribute(PIN_SPACER_ATTRIBUTE, "");
			_util.addClass(spacer, settings.spacerClass);

			// set the pin Options
			_pinOptions = {
				spacer: spacer,
				relSize: { // save if size is defined using % values. if so, handle spacer resize differently...
					width: sizeCSS.width.slice(-1) === "%",
					height: sizeCSS.height.slice(-1) === "%",
					autoFullWidth: sizeCSS.width === "auto" && inFlow && _util.isMarginCollapseType(pinCSS.display)
				},
				pushFollowers: settings.pushFollowers,
				inFlow: inFlow,
				// stores if the element takes up space in the document flow
			};

			if (!_pin.___origStyle) {
				_pin.___origStyle = {};
				var
				pinInlineCSS = _pin.style,
					copyStyles = boundsParams.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
				copyStyles.forEach(function (val) {
					_pin.___origStyle[val] = pinInlineCSS[val] || "";
				});
			}

			// if relative size, transfer it to spacer and make pin calculate it...
			if (_pinOptions.relSize.width) {
				_util.css(spacer, {
					width: sizeCSS.width
				});
			}
			if (_pinOptions.relSize.height) {
				_util.css(spacer, {
					height: sizeCSS.height
				});
			}

			// now place the pin element inside the spacer	
			spacer.appendChild(_pin);
			// and set new css
			_util.css(_pin, {
				position: inFlow ? "relative" : "absolute",
				margin: "auto",
				top: "auto",
				left: "auto",
				bottom: "auto",
				right: "auto"
			});

			if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
				_util.css(_pin, {
					boxSizing: "border-box",
					mozBoxSizing: "border-box",
					webkitBoxSizing: "border-box"
				});
			}

			// add listener to document to update pin position in case controller is not the document.
			window.addEventListener('scroll', updatePinInContainer);
			window.addEventListener('resize', updatePinInContainer);
			window.addEventListener('resize', updateRelativePinSpacer);
			// add mousewheel listener to catch scrolls over fixed elements
			_pin.addEventListener("mousewheel", onMousewheelOverPin);
			_pin.addEventListener("DOMMouseScroll", onMousewheelOverPin);

			log(3, "added pin");

			// finally update the pin to init
			updatePinState();

			return Scene;
		};

		/**
		 * Remove the pin from the scene.
		 * @method ScrollMagic.Scene#removePin
		 * @example
		 * // remove the pin from the scene without resetting it (the spacer is not removed)
		 * scene.removePin();
		 *
		 * // remove the pin from the scene and reset the pin element to its initial position (spacer is removed)
		 * scene.removePin(true);
		 *
		 * @param {boolean} [reset=false] - If `false` the spacer will not be removed and the element's position will not be reset.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.removePin = function (reset) {
			if (_pin) {
				if (_state === SCENE_STATE_DURING) {
					updatePinState(true); // force unpin at position
				}
				if (reset || !_controller) { // if there's no controller no progress was made anyway...
					var pinTarget = _pinOptions.spacer.firstChild; // usually the pin element, but may be another spacer (cascaded pins)...
					if (pinTarget.hasAttribute(PIN_SPACER_ATTRIBUTE)) { // copy margins to child spacer
						var
						style = _pinOptions.spacer.style,
							values = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
						margins = {};
						values.forEach(function (val) {
							margins[val] = style[val] || "";
						});
						_util.css(pinTarget, margins);
					}
					_pinOptions.spacer.parentNode.insertBefore(pinTarget, _pinOptions.spacer);
					_pinOptions.spacer.parentNode.removeChild(_pinOptions.spacer);
					if (!_pin.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) { // if it's the last pin for this element -> restore inline styles
						// TODO: only correctly set for first pin (when cascading) - how to fix?
						_util.css(_pin, _pin.___origStyle);
						delete _pin.___origStyle;
					}
				}
				window.removeEventListener('scroll', updatePinInContainer);
				window.removeEventListener('resize', updatePinInContainer);
				window.removeEventListener('resize', updateRelativePinSpacer);
				_pin.removeEventListener("mousewheel", onMousewheelOverPin);
				_pin.removeEventListener("DOMMouseScroll", onMousewheelOverPin);
				_pin = undefined;
				log(3, "removed pin (reset: " + (reset ? "true" : "false") + ")");
			}
			return Scene;
		};


		var
		_cssClasses, _cssClassElems = [];

		Scene.on("destroy.internal", function (e) {
			Scene.removeClassToggle(e.reset);
		});
		/**
		 * Define a css class modification while the scene is active.  
		 * When the scene triggers the classes will be added to the supplied element and removed, when the scene is over.
		 * If the scene duration is 0 the classes will only be removed if the user scrolls back past the start position.
		 * @method ScrollMagic.Scene#setClassToggle
		 * @example
		 * // add the class 'myclass' to the element with the id 'my-elem' for the duration of the scene
		 * scene.setClassToggle("#my-elem", "myclass");
		 *
		 * // add multiple classes to multiple elements defined by the selector '.classChange'
		 * scene.setClassToggle(".classChange", "class1 class2 class3");
		 *
		 * @param {(string|object)} element - A Selector targeting one or more elements or a DOM object that is supposed to be modified.
		 * @param {string} classes - One or more Classnames (separated by space) that should be added to the element during the scene.
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.setClassToggle = function (element, classes) {
			var elems = _util.get.elements(element);
			if (elems.length === 0 || !_util.type.String(classes)) {
				log(1, "ERROR calling method 'setClassToggle()': Invalid " + (elems.length === 0 ? "element" : "classes") + " supplied.");
				return Scene;
			}
			if (_cssClassElems.length > 0) {
				// remove old ones
				Scene.removeClassToggle();
			}
			_cssClasses = classes;
			_cssClassElems = elems;
			Scene.on("enter.internal_class leave.internal_class", function (e) {
				var toggle = e.type === "enter" ? _util.addClass : _util.removeClass;
				_cssClassElems.forEach(function (elem, key) {
					toggle(elem, _cssClasses);
				});
			});
			return Scene;
		};

		/**
		 * Remove the class binding from the scene.
		 * @method ScrollMagic.Scene#removeClassToggle
		 * @example
		 * // remove class binding from the scene without reset
		 * scene.removeClassToggle();
		 *
		 * // remove class binding and remove the changes it caused
		 * scene.removeClassToggle(true);
		 *
		 * @param {boolean} [reset=false] - If `false` and the classes are currently active, they will remain on the element. If `true` they will be removed.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.removeClassToggle = function (reset) {
			if (reset) {
				_cssClassElems.forEach(function (elem, key) {
					_util.removeClass(elem, _cssClasses);
				});
			}
			Scene.off("start.internal_class end.internal_class");
			_cssClasses = undefined;
			_cssClassElems = [];
			return Scene;
		};

		// INIT
		construct();
		return Scene;
	};

	// store pagewide scene options
	var SCENE_OPTIONS = {
		defaults: {
			duration: 0,
			offset: 0,
			triggerElement: undefined,
			triggerHook: 0.5,
			reverse: true,
			loglevel: 2
		},
		validate: {
			offset: function (val) {
				val = parseFloat(val);
				if (!_util.type.Number(val)) {
					throw ["Invalid value for option \"offset\":", val];
				}
				return val;
			},
			triggerElement: function (val) {
				val = val || undefined;
				if (val) {
					var elem = _util.get.elements(val)[0];
					if (elem) {
						val = elem;
					} else {
						throw ["Element defined in option \"triggerElement\" was not found:", val];
					}
				}
				return val;
			},
			triggerHook: function (val) {
				var translate = {
					"onCenter": 0.5,
					"onEnter": 1,
					"onLeave": 0
				};
				if (_util.type.Number(val)) {
					val = Math.max(0, Math.min(parseFloat(val), 1)); //  make sure its betweeen 0 and 1
				} else if (val in translate) {
					val = translate[val];
				} else {
					throw ["Invalid value for option \"triggerHook\": ", val];
				}
				return val;
			},
			reverse: function (val) {
				return !!val; // force boolean
			},
			loglevel: function (val) {
				val = parseInt(val);
				if (!_util.type.Number(val) || val < 0 || val > 3) {
					throw ["Invalid value for option \"loglevel\":", val];
				}
				return val;
			}
		},
		// holder for  validation methods. duration validation is handled in 'getters-setters.js'
		shifts: ["duration", "offset", "triggerHook"],
		// list of options that trigger a `shift` event
	};
/*
 * method used to add an option to ScrollMagic Scenes.
 * TODO: DOC (private for dev)
 */
	ScrollMagic.Scene.addOption = function (name, defaultValue, validationCallback, shifts) {
		if (!(name in SCENE_OPTIONS.defaults)) {
			SCENE_OPTIONS.defaults[name] = defaultValue;
			SCENE_OPTIONS.validate[name] = validationCallback;
			if (shifts) {
				SCENE_OPTIONS.shifts.push(name);
			}
		} else {
			ScrollMagic._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + name + "', because it already exists.");
		}
	};
	// instance extension function for plugins
	// TODO: DOC (private for dev)
	ScrollMagic.Scene.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Scene = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Scene, oldClass); // copy properties
		ScrollMagic.Scene.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Scene.prototype.constructor = ScrollMagic.Scene; // restore constructor
	};


	/**
	 * TODO: DOCS (private for dev)
	 * @class
	 * @private
	 */

	ScrollMagic.Event = function (type, namespace, target, vars) {
		vars = vars || {};
		for (var key in vars) {
			this[key] = vars[key];
		}
		this.type = type;
		this.target = this.currentTarget = target;
		this.namespace = namespace || '';
		this.timeStamp = this.timestamp = Date.now();
		return this;
	};

/*
 * TODO: DOCS (private for dev)
 */

	var _util = ScrollMagic._util = (function (window) {
		var U = {},
			i;

		/**
		 * ------------------------------
		 * internal helpers
		 * ------------------------------
		 */

		// parse float and fall back to 0.
		var floatval = function (number) {
			return parseFloat(number) || 0;
		};
		// get current style IE safe (otherwise IE would return calculated values for 'auto')
		var _getComputedStyle = function (elem) {
			return elem.currentStyle ? elem.currentStyle : window.getComputedStyle(elem);
		};

		// get element dimension (width or height)
		var _dimension = function (which, elem, outer, includeMargin) {
			elem = (elem === document) ? window : elem;
			if (elem === window) {
				includeMargin = false;
			} else if (!_type.DomElement(elem)) {
				return 0;
			}
			which = which.charAt(0).toUpperCase() + which.substr(1).toLowerCase();
			var dimension = (outer ? elem['offset' + which] || elem['outer' + which] : elem['client' + which] || elem['inner' + which]) || 0;
			if (outer && includeMargin) {
				var style = _getComputedStyle(elem);
				dimension += which === 'Height' ? floatval(style.marginTop) + floatval(style.marginBottom) : floatval(style.marginLeft) + floatval(style.marginRight);
			}
			return dimension;
		};
		// converts 'margin-top' into 'marginTop'
		var _camelCase = function (str) {
			return str.replace(/^[^a-z]+([a-z])/g, '$1').replace(/-([a-z])/g, function (g) {
				return g[1].toUpperCase();
			});
		};

		/**
		 * ------------------------------
		 * external helpers
		 * ------------------------------
		 */

		// extend obj – same as jQuery.extend({}, objA, objB)
		U.extend = function (obj) {
			obj = obj || {};
			for (i = 1; i < arguments.length; i++) {
				if (!arguments[i]) {
					continue;
				}
				for (var key in arguments[i]) {
					if (arguments[i].hasOwnProperty(key)) {
						obj[key] = arguments[i][key];
					}
				}
			}
			return obj;
		};

		// check if a css display type results in margin-collapse or not
		U.isMarginCollapseType = function (str) {
			return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(str) > -1;
		};

		// implementation of requestAnimationFrame
		// based on https://gist.github.com/paulirish/1579671
		var
		lastTime = 0,
			vendors = ['ms', 'moz', 'webkit', 'o'];
		var _requestAnimationFrame = window.requestAnimationFrame;
		var _cancelAnimationFrame = window.cancelAnimationFrame;
		// try vendor prefixes if the above doesn't work
		for (i = 0; !_requestAnimationFrame && i < vendors.length; ++i) {
			_requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
			_cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
		}

		// fallbacks
		if (!_requestAnimationFrame) {
			_requestAnimationFrame = function (callback) {
				var
				currTime = new Date().getTime(),
					timeToCall = Math.max(0, 16 - (currTime - lastTime)),
					id = window.setTimeout(function () {
						callback(currTime + timeToCall);
					}, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
		}
		if (!_cancelAnimationFrame) {
			_cancelAnimationFrame = function (id) {
				window.clearTimeout(id);
			};
		}
		U.rAF = _requestAnimationFrame.bind(window);
		U.cAF = _cancelAnimationFrame.bind(window);

		var
		loglevels = ["error", "warn", "log"],
			console = window.console || {};

		console.log = console.log ||
		function () {}; // no console log, well - do nothing then...
		// make sure methods for all levels exist.
		for (i = 0; i < loglevels.length; i++) {
			var method = loglevels[i];
			if (!console[method]) {
				console[method] = console.log; // prefer .log over nothing
			}
		}
		U.log = function (loglevel) {
			if (loglevel > loglevels.length || loglevel <= 0) loglevel = loglevels.length;
			var now = new Date(),
				time = ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2) + ":" + ("0" + now.getSeconds()).slice(-2) + ":" + ("00" + now.getMilliseconds()).slice(-3),
				method = loglevels[loglevel - 1],
				args = Array.prototype.splice.call(arguments, 1),
				func = Function.prototype.bind.call(console[method], console);
			args.unshift(time);
			func.apply(console, args);
		};

		/**
		 * ------------------------------
		 * type testing
		 * ------------------------------
		 */

		var _type = U.type = function (v) {
			return Object.prototype.toString.call(v).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
		};
		_type.String = function (v) {
			return _type(v) === 'string';
		};
		_type.Function = function (v) {
			return _type(v) === 'function';
		};
		_type.Array = function (v) {
			return Array.isArray(v);
		};
		_type.Number = function (v) {
			return !_type.Array(v) && (v - parseFloat(v) + 1) >= 0;
		};
		_type.DomElement = function (o) {
			return (
			typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
			o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string");
		};

		/**
		 * ------------------------------
		 * DOM Element info
		 * ------------------------------
		 */
		// always returns a list of matching DOM elements, from a selector, a DOM element or an list of elements or even an array of selectors
		var _get = U.get = {};
		_get.elements = function (selector) {
			var arr = [];
			if (_type.String(selector)) {
				try {
					selector = document.querySelectorAll(selector);
				} catch (e) { // invalid selector
					return arr;
				}
			}
			if (_type(selector) === 'nodelist' || _type.Array(selector)) {
				for (var i = 0, ref = arr.length = selector.length; i < ref; i++) { // list of elements
					var elem = selector[i];
					arr[i] = _type.DomElement(elem) ? elem : _get.elements(elem); // if not an element, try to resolve recursively
				}
			} else if (_type.DomElement(selector) || selector === document || selector === window) {
				arr = [selector]; // only the element
			}
			return arr;
		};
		// get scroll top value
		_get.scrollTop = function (elem) {
			return (elem && typeof elem.scrollTop === 'number') ? elem.scrollTop : window.pageYOffset || 0;
		};
		// get scroll left value
		_get.scrollLeft = function (elem) {
			return (elem && typeof elem.scrollLeft === 'number') ? elem.scrollLeft : window.pageXOffset || 0;
		};
		// get element height
		_get.width = function (elem, outer, includeMargin) {
			return _dimension('width', elem, outer, includeMargin);
		};
		// get element width
		_get.height = function (elem, outer, includeMargin) {
			return _dimension('height', elem, outer, includeMargin);
		};

		// get element position (optionally relative to viewport)
		_get.offset = function (elem, relativeToViewport) {
			var offset = {
				top: 0,
				left: 0
			};
			if (elem && elem.getBoundingClientRect) { // check if available
				var rect = elem.getBoundingClientRect();
				offset.top = rect.top;
				offset.left = rect.left;
				if (!relativeToViewport) { // clientRect is by default relative to viewport...
					offset.top += _get.scrollTop();
					offset.left += _get.scrollLeft();
				}
			}
			return offset;
		};

		/**
		 * ------------------------------
		 * DOM Element manipulation
		 * ------------------------------
		 */

		U.addClass = function (elem, classname) {
			if (classname) {
				if (elem.classList) elem.classList.add(classname);
				else elem.className += ' ' + classname;
			}
		};
		U.removeClass = function (elem, classname) {
			if (classname) {
				if (elem.classList) elem.classList.remove(classname);
				else elem.className = elem.className.replace(new RegExp('(^|\\b)' + classname.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}
		};
		// if options is string -> returns css value
		// if options is array -> returns object with css value pairs
		// if options is object -> set new css values
		U.css = function (elem, options) {
			if (_type.String(options)) {
				return _getComputedStyle(elem)[_camelCase(options)];
			} else if (_type.Array(options)) {
				var
				obj = {},
					style = _getComputedStyle(elem);
				options.forEach(function (option, key) {
					obj[option] = style[_camelCase(option)];
				});
				return obj;
			} else {
				for (var option in options) {
					var val = options[option];
					if (val == parseFloat(val)) { // assume pixel for seemingly numerical values
						val += 'px';
					}
					elem.style[_camelCase(option)] = val;
				}
			}
		};

		return U;
	}(window || {}));

	ScrollMagic.Scene.prototype.addIndicators = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeIndicators = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
		return this;
	}
	ScrollMagic.Scene.prototype.setTween = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeTween = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
		return this;
	}
	ScrollMagic.Scene.prototype.setVelocity = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeVelocity = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
		return this;
	}

	return ScrollMagic;
}));
},{}],9:[function(require,module,exports){
/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.6
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Typed"] = factory();
	else
		root["Typed"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _initializerJs = __webpack_require__(1);
	
	var _htmlParserJs = __webpack_require__(3);
	
	/**
	 * Welcome to Typed.js!
	 * @param {string} elementId HTML element ID _OR_ HTML element
	 * @param {object} options options object
	 * @returns {object} a new Typed object
	 */
	
	var Typed = (function () {
	  function Typed(elementId, options) {
	    _classCallCheck(this, Typed);
	
	    // Initialize it up
	    _initializerJs.initializer.load(this, options, elementId);
	    // All systems go!
	    this.begin();
	  }
	
	  /**
	   * Toggle start() and stop() of the Typed instance
	   * @public
	   */
	
	  _createClass(Typed, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.pause.status ? this.start() : this.stop();
	    }
	
	    /**
	     * Stop typing / backspacing and enable cursor blinking
	     * @public
	     */
	  }, {
	    key: 'stop',
	    value: function stop() {
	      if (this.typingComplete) return;
	      if (this.pause.status) return;
	      this.toggleBlinking(true);
	      this.pause.status = true;
	      this.options.onStop(this.arrayPos, this);
	    }
	
	    /**
	     * Start typing / backspacing after being stopped
	     * @public
	     */
	  }, {
	    key: 'start',
	    value: function start() {
	      if (this.typingComplete) return;
	      if (!this.pause.status) return;
	      this.pause.status = false;
	      if (this.pause.typewrite) {
	        this.typewrite(this.pause.curString, this.pause.curStrPos);
	      } else {
	        this.backspace(this.pause.curString, this.pause.curStrPos);
	      }
	      this.options.onStart(this.arrayPos, this);
	    }
	
	    /**
	     * Destroy this instance of Typed
	     * @public
	     */
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.reset(false);
	      this.options.onDestroy(this);
	    }
	
	    /**
	     * Reset Typed and optionally restarts
	     * @param {boolean} restart
	     * @public
	     */
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var restart = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      clearInterval(this.timeout);
	      this.replaceText('');
	      if (this.cursor && this.cursor.parentNode) {
	        this.cursor.parentNode.removeChild(this.cursor);
	        this.cursor = null;
	      }
	      this.strPos = 0;
	      this.arrayPos = 0;
	      this.curLoop = 0;
	      if (restart) {
	        this.insertCursor();
	        this.options.onReset(this);
	        this.begin();
	      }
	    }
	
	    /**
	     * Begins the typing animation
	     * @private
	     */
	  }, {
	    key: 'begin',
	    value: function begin() {
	      var _this = this;
	
	      this.typingComplete = false;
	      this.shuffleStringsIfNeeded(this);
	      this.insertCursor();
	      if (this.bindInputFocusEvents) this.bindFocusEvents();
	      this.timeout = setTimeout(function () {
	        // Check if there is some text in the element, if yes start by backspacing the default message
	        if (!_this.currentElContent || _this.currentElContent.length === 0) {
	          _this.typewrite(_this.strings[_this.sequence[_this.arrayPos]], _this.strPos);
	        } else {
	          // Start typing
	          _this.backspace(_this.currentElContent, _this.currentElContent.length);
	        }
	      }, this.startDelay);
	    }
	
	    /**
	     * Called for each character typed
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'typewrite',
	    value: function typewrite(curString, curStrPos) {
	      var _this2 = this;
	
	      if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
	        this.el.classList.remove(this.fadeOutClass);
	        if (this.cursor) this.cursor.classList.remove(this.fadeOutClass);
	      }
	
	      var humanize = this.humanizer(this.typeSpeed);
	      var numChars = 1;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, true);
	        return;
	      }
	
	      // contain typing function in a timeout humanize'd delay
	      this.timeout = setTimeout(function () {
	        // skip over any HTML chars
	        curStrPos = _htmlParserJs.htmlParser.typeHtmlChars(curString, curStrPos, _this2);
	
	        var pauseTime = 0;
	        var substr = curString.substr(curStrPos);
	        // check for an escape character before a pause value
	        // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
	        // single ^ are removed from string
	        if (substr.charAt(0) === '^') {
	          if (/^\^\d+/.test(substr)) {
	            var skip = 1; // skip at least 1
	            substr = /\d+/.exec(substr)[0];
	            skip += substr.length;
	            pauseTime = parseInt(substr);
	            _this2.temporaryPause = true;
	            _this2.options.onTypingPaused(_this2.arrayPos, _this2);
	            // strip out the escape character and pause value so they're not printed
	            curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
	            _this2.toggleBlinking(true);
	          }
	        }
	
	        // check for skip characters formatted as
	        // "this is a `string to print NOW` ..."
	        if (substr.charAt(0) === '`') {
	          while (curString.substr(curStrPos + numChars).charAt(0) !== '`') {
	            numChars++;
	            if (curStrPos + numChars > curString.length) break;
	          }
	          // strip out the escape characters and append all the string in between
	          var stringBeforeSkip = curString.substring(0, curStrPos);
	          var stringSkipped = curString.substring(stringBeforeSkip.length + 1, curStrPos + numChars);
	          var stringAfterSkip = curString.substring(curStrPos + numChars + 1);
	          curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
	          numChars--;
	        }
	
	        // timeout for any pause after a character
	        _this2.timeout = setTimeout(function () {
	          // Accounts for blinking while paused
	          _this2.toggleBlinking(false);
	
	          // We're done with this sentence!
	          if (curStrPos === curString.length) {
	            _this2.doneTyping(curString, curStrPos);
	          } else {
	            _this2.keepTyping(curString, curStrPos, numChars);
	          }
	          // end of character pause
	          if (_this2.temporaryPause) {
	            _this2.temporaryPause = false;
	            _this2.options.onTypingResumed(_this2.arrayPos, _this2);
	          }
	        }, pauseTime);
	
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Continue to the next string & begin typing
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'keepTyping',
	    value: function keepTyping(curString, curStrPos, numChars) {
	      // call before functions if applicable
	      if (curStrPos === 0) {
	        this.toggleBlinking(false);
	        this.options.preStringTyped(this.arrayPos, this);
	      }
	      // start typing each new char into existing string
	      // curString: arg, this.el.html: original text inside element
	      curStrPos += numChars;
	      var nextString = curString.substr(0, curStrPos);
	      this.replaceText(nextString);
	      // loop the function
	      this.typewrite(curString, curStrPos);
	    }
	
	    /**
	     * We're done typing all strings
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'doneTyping',
	    value: function doneTyping(curString, curStrPos) {
	      var _this3 = this;
	
	      // fires callback function
	      this.options.onStringTyped(this.arrayPos, this);
	      this.toggleBlinking(true);
	      // is this the final string
	      if (this.arrayPos === this.strings.length - 1) {
	        // callback that occurs on the last typed string
	        this.complete();
	        // quit if we wont loop back
	        if (this.loop === false || this.curLoop === this.loopCount) {
	          return;
	        }
	      }
	      this.timeout = setTimeout(function () {
	        _this3.backspace(curString, curStrPos);
	      }, this.backDelay);
	    }
	
	    /**
	     * Backspaces 1 character at a time
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'backspace',
	    value: function backspace(curString, curStrPos) {
	      var _this4 = this;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, true);
	        return;
	      }
	      if (this.fadeOut) return this.initFadeOut();
	
	      this.toggleBlinking(false);
	      var humanize = this.humanizer(this.backSpeed);
	
	      this.timeout = setTimeout(function () {
	        curStrPos = _htmlParserJs.htmlParser.backSpaceHtmlChars(curString, curStrPos, _this4);
	        // replace text with base text + typed characters
	        var curStringAtPosition = curString.substr(0, curStrPos);
	        _this4.replaceText(curStringAtPosition);
	
	        // if smartBack is enabled
	        if (_this4.smartBackspace) {
	          // the remaining part of the current string is equal of the same part of the new string
	          var nextString = _this4.strings[_this4.arrayPos + 1];
	          if (nextString && curStringAtPosition === nextString.substr(0, curStrPos)) {
	            _this4.stopNum = curStrPos;
	          } else {
	            _this4.stopNum = 0;
	          }
	        }
	
	        // if the number (id of character in current string) is
	        // less than the stop number, keep going
	        if (curStrPos > _this4.stopNum) {
	          // subtract characters one by one
	          curStrPos--;
	          // loop the function
	          _this4.backspace(curString, curStrPos);
	        } else if (curStrPos <= _this4.stopNum) {
	          // if the stop number has been reached, increase
	          // array position to next string
	          _this4.arrayPos++;
	          // When looping, begin at the beginning after backspace complete
	          if (_this4.arrayPos === _this4.strings.length) {
	            _this4.arrayPos = 0;
	            _this4.options.onLastStringBackspaced();
	            _this4.shuffleStringsIfNeeded();
	            _this4.begin();
	          } else {
	            _this4.typewrite(_this4.strings[_this4.sequence[_this4.arrayPos]], curStrPos);
	          }
	        }
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Full animation is complete
	     * @private
	     */
	  }, {
	    key: 'complete',
	    value: function complete() {
	      this.options.onComplete(this);
	      if (this.loop) {
	        this.curLoop++;
	      } else {
	        this.typingComplete = true;
	      }
	    }
	
	    /**
	     * Has the typing been stopped
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @param {boolean} isTyping
	     * @private
	     */
	  }, {
	    key: 'setPauseStatus',
	    value: function setPauseStatus(curString, curStrPos, isTyping) {
	      this.pause.typewrite = isTyping;
	      this.pause.curString = curString;
	      this.pause.curStrPos = curStrPos;
	    }
	
	    /**
	     * Toggle the blinking cursor
	     * @param {boolean} isBlinking
	     * @private
	     */
	  }, {
	    key: 'toggleBlinking',
	    value: function toggleBlinking(isBlinking) {
	      if (!this.cursor) return;
	      // if in paused state, don't toggle blinking a 2nd time
	      if (this.pause.status) return;
	      if (this.cursorBlinking === isBlinking) return;
	      this.cursorBlinking = isBlinking;
	      var status = isBlinking ? 'infinite' : 0;
	      this.cursor.style.animationIterationCount = status;
	    }
	
	    /**
	     * Speed in MS to type
	     * @param {number} speed
	     * @private
	     */
	  }, {
	    key: 'humanizer',
	    value: function humanizer(speed) {
	      return Math.round(Math.random() * speed / 2) + speed;
	    }
	
	    /**
	     * Shuffle the sequence of the strings array
	     * @private
	     */
	  }, {
	    key: 'shuffleStringsIfNeeded',
	    value: function shuffleStringsIfNeeded() {
	      if (!this.shuffle) return;
	      this.sequence = this.sequence.sort(function () {
	        return Math.random() - 0.5;
	      });
	    }
	
	    /**
	     * Adds a CSS class to fade out current string
	     * @private
	     */
	  }, {
	    key: 'initFadeOut',
	    value: function initFadeOut() {
	      var _this5 = this;
	
	      this.el.className += ' ' + this.fadeOutClass;
	      if (this.cursor) this.cursor.className += ' ' + this.fadeOutClass;
	      return setTimeout(function () {
	        _this5.arrayPos++;
	        _this5.replaceText('');
	
	        // Resets current string if end of loop reached
	        if (_this5.strings.length > _this5.arrayPos) {
	          _this5.typewrite(_this5.strings[_this5.sequence[_this5.arrayPos]], 0);
	        } else {
	          _this5.typewrite(_this5.strings[0], 0);
	          _this5.arrayPos = 0;
	        }
	      }, this.fadeOutDelay);
	    }
	
	    /**
	     * Replaces current text in the HTML element
	     * depending on element type
	     * @param {string} str
	     * @private
	     */
	  }, {
	    key: 'replaceText',
	    value: function replaceText(str) {
	      if (this.attr) {
	        this.el.setAttribute(this.attr, str);
	      } else {
	        if (this.isInput) {
	          this.el.value = str;
	        } else if (this.contentType === 'html') {
	          this.el.innerHTML = str;
	        } else {
	          this.el.textContent = str;
	        }
	      }
	    }
	
	    /**
	     * If using input elements, bind focus in order to
	     * start and stop the animation
	     * @private
	     */
	  }, {
	    key: 'bindFocusEvents',
	    value: function bindFocusEvents() {
	      var _this6 = this;
	
	      if (!this.isInput) return;
	      this.el.addEventListener('focus', function (e) {
	        _this6.stop();
	      });
	      this.el.addEventListener('blur', function (e) {
	        if (_this6.el.value && _this6.el.value.length !== 0) {
	          return;
	        }
	        _this6.start();
	      });
	    }
	
	    /**
	     * On init, insert the cursor element
	     * @private
	     */
	  }, {
	    key: 'insertCursor',
	    value: function insertCursor() {
	      if (!this.showCursor) return;
	      if (this.cursor) return;
	      this.cursor = document.createElement('span');
	      this.cursor.className = 'typed-cursor';
	      this.cursor.innerHTML = this.cursorChar;
	      this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
	    }
	  }]);
	
	  return Typed;
	})();
	
	exports['default'] = Typed;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _defaultsJs = __webpack_require__(2);
	
	var _defaultsJs2 = _interopRequireDefault(_defaultsJs);
	
	/**
	 * Initialize the Typed object
	 */
	
	var Initializer = (function () {
	  function Initializer() {
	    _classCallCheck(this, Initializer);
	  }
	
	  _createClass(Initializer, [{
	    key: 'load',
	
	    /**
	     * Load up defaults & options on the Typed instance
	     * @param {Typed} self instance of Typed
	     * @param {object} options options object
	     * @param {string} elementId HTML element ID _OR_ instance of HTML element
	     * @private
	     */
	
	    value: function load(self, options, elementId) {
	      // chosen element to manipulate text
	      if (typeof elementId === 'string') {
	        self.el = document.querySelector(elementId);
	      } else {
	        self.el = elementId;
	      }
	
	      self.options = _extends({}, _defaultsJs2['default'], options);
	
	      // attribute to type into
	      self.isInput = self.el.tagName.toLowerCase() === 'input';
	      self.attr = self.options.attr;
	      self.bindInputFocusEvents = self.options.bindInputFocusEvents;
	
	      // show cursor
	      self.showCursor = self.isInput ? false : self.options.showCursor;
	
	      // custom cursor
	      self.cursorChar = self.options.cursorChar;
	
	      // Is the cursor blinking
	      self.cursorBlinking = true;
	
	      // text content of element
	      self.elContent = self.attr ? self.el.getAttribute(self.attr) : self.el.textContent;
	
	      // html or plain text
	      self.contentType = self.options.contentType;
	
	      // typing speed
	      self.typeSpeed = self.options.typeSpeed;
	
	      // add a delay before typing starts
	      self.startDelay = self.options.startDelay;
	
	      // backspacing speed
	      self.backSpeed = self.options.backSpeed;
	
	      // only backspace what doesn't match the previous string
	      self.smartBackspace = self.options.smartBackspace;
	
	      // amount of time to wait before backspacing
	      self.backDelay = self.options.backDelay;
	
	      // Fade out instead of backspace
	      self.fadeOut = self.options.fadeOut;
	      self.fadeOutClass = self.options.fadeOutClass;
	      self.fadeOutDelay = self.options.fadeOutDelay;
	
	      // variable to check whether typing is currently paused
	      self.isPaused = false;
	
	      // input strings of text
	      self.strings = self.options.strings.map(function (s) {
	        return s.trim();
	      });
	
	      // div containing strings
	      if (typeof self.options.stringsElement === 'string') {
	        self.stringsElement = document.querySelector(self.options.stringsElement);
	      } else {
	        self.stringsElement = self.options.stringsElement;
	      }
	
	      if (self.stringsElement) {
	        self.strings = [];
	        self.stringsElement.style.display = 'none';
	        var strings = Array.prototype.slice.apply(self.stringsElement.children);
	        var stringsLength = strings.length;
	
	        if (stringsLength) {
	          for (var i = 0; i < stringsLength; i += 1) {
	            var stringEl = strings[i];
	            self.strings.push(stringEl.innerHTML.trim());
	          }
	        }
	      }
	
	      // character number position of current string
	      self.strPos = 0;
	
	      // current array position
	      self.arrayPos = 0;
	
	      // index of string to stop backspacing on
	      self.stopNum = 0;
	
	      // Looping logic
	      self.loop = self.options.loop;
	      self.loopCount = self.options.loopCount;
	      self.curLoop = 0;
	
	      // shuffle the strings
	      self.shuffle = self.options.shuffle;
	      // the order of strings
	      self.sequence = [];
	
	      self.pause = {
	        status: false,
	        typewrite: true,
	        curString: '',
	        curStrPos: 0
	      };
	
	      // When the typing is complete (when not looped)
	      self.typingComplete = false;
	
	      // Set the order in which the strings are typed
	      for (var i in self.strings) {
	        self.sequence[i] = i;
	      }
	
	      // If there is some text in the element
	      self.currentElContent = this.getCurrentElContent(self);
	
	      self.autoInsertCss = self.options.autoInsertCss;
	
	      this.appendAnimationCss(self);
	    }
	  }, {
	    key: 'getCurrentElContent',
	    value: function getCurrentElContent(self) {
	      var elContent = '';
	      if (self.attr) {
	        elContent = self.el.getAttribute(self.attr);
	      } else if (self.isInput) {
	        elContent = self.el.value;
	      } else if (self.contentType === 'html') {
	        elContent = self.el.innerHTML;
	      } else {
	        elContent = self.el.textContent;
	      }
	      return elContent;
	    }
	  }, {
	    key: 'appendAnimationCss',
	    value: function appendAnimationCss(self) {
	      if (!self.autoInsertCss) {
	        return;
	      }
	      if (!self.showCursor || !self.fadeOut) {
	        return;
	      }
	
	      var css = document.createElement('style');
	      css.type = 'text/css';
	      var innerCss = '';
	      if (self.showCursor) {
	        innerCss += '\n        .typed-cursor{\n          opacity: 1;\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ';
	      }
	      if (self.fadeOut) {
	        innerCss += '\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n          -webkit-animation: 0;\n                  animation: 0;\n        }\n      ';
	      }
	      if (css.length === 0) {
	        return;
	      }
	      css.innerHTML = innerCss;
	      document.head.appendChild(css);
	    }
	  }]);
	
	  return Initializer;
	})();
	
	exports['default'] = Initializer;
	var initializer = new Initializer();
	exports.initializer = initializer;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/**
	 * Defaults & options
	 * @returns {object} Typed defaults & options
	 * @public
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var defaults = {
	  /**
	   * @property {array} strings strings to be typed
	   * @property {string} stringsElement ID of element containing string children
	   */
	  strings: ['These are the default values...', 'You know what you should do?', 'Use your own!', 'Have a great day!'],
	  stringsElement: null,
	
	  /**
	   * @property {number} typeSpeed type speed in milliseconds
	   */
	  typeSpeed: 0,
	
	  /**
	   * @property {number} startDelay time before typing starts in milliseconds
	   */
	  startDelay: 0,
	
	  /**
	   * @property {number} backSpeed backspacing speed in milliseconds
	   */
	  backSpeed: 0,
	
	  /**
	   * @property {boolean} smartBackspace only backspace what doesn't match the previous string
	   */
	  smartBackspace: true,
	
	  /**
	   * @property {boolean} shuffle shuffle the strings
	   */
	  shuffle: false,
	
	  /**
	   * @property {number} backDelay time before backspacing in milliseconds
	   */
	  backDelay: 700,
	
	  /**
	   * @property {boolean} fadeOut Fade out instead of backspace
	   * @property {string} fadeOutClass css class for fade animation
	   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
	   */
	  fadeOut: false,
	  fadeOutClass: 'typed-fade-out',
	  fadeOutDelay: 500,
	
	  /**
	   * @property {boolean} loop loop strings
	   * @property {number} loopCount amount of loops
	   */
	  loop: false,
	  loopCount: Infinity,
	
	  /**
	   * @property {boolean} showCursor show cursor
	   * @property {string} cursorChar character for cursor
	   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
	   */
	  showCursor: true,
	  cursorChar: '|',
	  autoInsertCss: true,
	
	  /**
	   * @property {string} attr attribute for typing
	   * Ex: input placeholder, value, or just HTML text
	   */
	  attr: null,
	
	  /**
	   * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
	   */
	  bindInputFocusEvents: false,
	
	  /**
	   * @property {string} contentType 'html' or 'null' for plaintext
	   */
	  contentType: 'html',
	
	  /**
	   * All typing is complete
	   * @param {Typed} self
	   */
	  onComplete: function onComplete(self) {},
	
	  /**
	   * Before each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  preStringTyped: function preStringTyped(arrayPos, self) {},
	
	  /**
	   * After each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStringTyped: function onStringTyped(arrayPos, self) {},
	
	  /**
	   * During looping, after last string is typed
	   * @param {Typed} self
	   */
	  onLastStringBackspaced: function onLastStringBackspaced(self) {},
	
	  /**
	   * Typing has been stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingPaused: function onTypingPaused(arrayPos, self) {},
	
	  /**
	   * Typing has been started after being stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingResumed: function onTypingResumed(arrayPos, self) {},
	
	  /**
	   * After reset
	   * @param {Typed} self
	   */
	  onReset: function onReset(self) {},
	
	  /**
	   * After stop
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStop: function onStop(arrayPos, self) {},
	
	  /**
	   * After start
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStart: function onStart(arrayPos, self) {},
	
	  /**
	   * After destroy
	   * @param {Typed} self
	   */
	  onDestroy: function onDestroy(self) {}
	};
	
	exports['default'] = defaults;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	
	/**
	 * TODO: These methods can probably be combined somehow
	 * Parse HTML tags & HTML Characters
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var HTMLParser = (function () {
	  function HTMLParser() {
	    _classCallCheck(this, HTMLParser);
	  }
	
	  _createClass(HTMLParser, [{
	    key: 'typeHtmlChars',
	
	    /**
	     * Type HTML tags & HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	
	    value: function typeHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '<' || curChar === '&') {
	        var endTag = '';
	        if (curChar === '<') {
	          endTag = '>';
	        } else {
	          endTag = ';';
	        }
	        while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
	          curStrPos++;
	          if (curStrPos + 1 > curString.length) {
	            break;
	          }
	        }
	        curStrPos++;
	      }
	      return curStrPos;
	    }
	
	    /**
	     * Backspace HTML tags and HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	  }, {
	    key: 'backSpaceHtmlChars',
	    value: function backSpaceHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '>' || curChar === ';') {
	        var endTag = '';
	        if (curChar === '>') {
	          endTag = '<';
	        } else {
	          endTag = '&';
	        }
	        while (curString.substr(curStrPos - 1).charAt(0) !== endTag) {
	          curStrPos--;
	          if (curStrPos < 0) {
	            break;
	          }
	        }
	        curStrPos--;
	      }
	      return curStrPos;
	    }
	  }]);
	
	  return HTMLParser;
	})();
	
	exports['default'] = HTMLParser;
	var htmlParser = new HTMLParser();
	exports.htmlParser = htmlParser;

/***/ })
/******/ ])
});
;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfc2NyaXB0cy9tYWluLmpzIiwiX3NjcmlwdHMvbW9kdWxlcy9hYm91dC5qcyIsIl9zY3JpcHRzL21vZHVsZXMvaG9tZXBhZ2UuanMiLCJfc2NyaXB0cy9tb2R1bGVzL2ltZy1ob3Zlci5qcyIsIl9zY3JpcHRzL21vZHVsZXMvbmF2LmpzIiwiX3NjcmlwdHMvbW9kdWxlcy9zY3JvbGwtbWFnaWMuanMiLCJfc2NyaXB0cy9tb2R1bGVzL3Njcm9sbFRvLmpzIiwibm9kZV9tb2R1bGVzL3Njcm9sbG1hZ2ljL3Njcm9sbG1hZ2ljL3VuY29tcHJlc3NlZC9TY3JvbGxNYWdpYy5qcyIsIm5vZGVfbW9kdWxlcy90eXBlZC5qcy9saWIvdHlwZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsRUFBRSxRQUFGLEVBQVksS0FBWixDQUFrQixZQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFXLFlBQVU7QUFDbkIsTUFBRSxjQUFGLEVBQWtCLFdBQWxCLENBQThCLGFBQTlCO0FBQ0EsTUFBRSxtQkFBRixFQUF1QixXQUF2QixDQUFtQyxrQkFBbkM7QUFDQSxNQUFFLG9CQUFGLEVBQXdCLFdBQXhCLENBQW9DLG1CQUFwQztBQUNELEdBSkQsRUFJRyxHQUpIOztBQU1BLE1BQUksV0FBVyxTQUFTLElBQVQsQ0FBYyxVQUFVLFNBQXhCLEtBQXNDLGlCQUFpQixJQUFqQixDQUFzQixVQUFVLE1BQWhDLENBQXJEO0FBQ0EsTUFBSSxRQUFKLEVBQWMsRUFBRSxNQUFGLEVBQVUsUUFBVixDQUFtQixRQUFuQjtBQUNmLENBZEQ7Ozs7Ozs7Ozs7O0FDUkE7Ozs7Ozs7O0lBRU0sSztBQUNKLG1CQUFjO0FBQUE7O0FBQ1osU0FBSyxLQUFMLEdBQWEsRUFBRSxNQUFGLENBQWI7QUFDQSxRQUFJLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsT0FBcEIsQ0FBSixFQUFrQztBQUNoQyxXQUFLLFVBQUw7QUFDRDtBQUNGOzs7O2lDQUVZO0FBQ1gsVUFBSSxRQUFRLElBQVo7QUFDQSxVQUFJLGFBQWEsRUFBRSxjQUFGLENBQWpCO0FBQ0EsVUFBSSxhQUFhLEVBQUUsb0JBQUYsQ0FBakI7QUFDQSxVQUFJLGFBQWEsQ0FDZixtRkFEZSxFQUVmLGlEQUZlLEVBR2Ysd0NBSGUsRUFJZixzRUFKZSxFQUtmLG1EQUxlLEVBTWYsd0NBTmUsRUFPZiw2RkFQZSxFQVFmLGtFQVJlLEVBU2YsZ0VBVGUsRUFVZiwrREFWZSxDQUFqQjtBQVlBLFVBQUksVUFBVSxDQUFkOztBQUVBLFVBQUksUUFBUSxvQkFBVSxvQkFBVixFQUFnQztBQUMxQyxpQkFBUyxDQUFDLFdBQVcsQ0FBWCxDQUFELENBRGlDO0FBRTFDLG1CQUFXO0FBRitCLE9BQWhDLENBQVo7O0FBS0EsaUJBQVcsRUFBWCxDQUFjLE9BQWQsRUFBdUIsWUFBVztBQUNoQyxjQUFNLE9BQU47QUFDQSxZQUFJLFVBQVUsV0FBVyxNQUFYLEdBQW9CLENBQWxDLEVBQXFDO0FBQ25DLHFCQUFXLENBQVg7QUFDRCxTQUZELE1BRU87QUFDTCxvQkFBVSxDQUFWO0FBQ0Q7QUFDRCxnQkFBUSxvQkFBVSxvQkFBVixFQUFnQztBQUN0QyxtQkFBUyxDQUFDLFdBQVcsT0FBWCxDQUFELENBRDZCO0FBRXRDLHFCQUFXO0FBRjJCLFNBQWhDLENBQVI7QUFJRCxPQVhEO0FBWUQ7OztpQ0FFWSxHLEVBQUs7QUFDaEIsYUFBTyxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBZ0IsS0FBSyxLQUFMLENBQVcsR0FBWCxDQUEzQixDQUFQO0FBQ0Q7Ozs7OztrQkFLWSxLOzs7Ozs7Ozs7Ozs7O0lDdERULFE7QUFDSixzQkFBYztBQUFBOztBQUNaLFNBQUssS0FBTCxHQUFhLEVBQUUsTUFBRixDQUFiO0FBQ0EsUUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLE1BQXBCLENBQUosRUFBaUM7QUFDL0IsV0FBSyxjQUFMO0FBQ0EsV0FBSyxhQUFMO0FBQ0Q7QUFDRDs7OztvQ0FFYztBQUNkLFVBQUksaUJBQWlCLEVBQUUsa0JBQUYsQ0FBckI7QUFDQSxVQUFJLFlBQVksRUFBRSxpQkFBRixDQUFoQjtBQUNBLFVBQUksVUFBVSxFQUFFLGVBQUYsQ0FBZDtBQUNBLFVBQUksYUFBYSxFQUFFLGtCQUFGLENBQWpCO0FBQ0EsVUFBSSxXQUFXLEVBQUUsZ0JBQUYsQ0FBZjtBQUNBLFVBQUksaUJBQWlCLEVBQUUsc0JBQUYsQ0FBckI7QUFDQSxVQUFJLGNBQWMsRUFBRSxtQkFBRixDQUFsQjtBQUNBLFVBQUksWUFBWSxFQUFFLGFBQUYsQ0FBaEI7O0FBRUEscUJBQWUsS0FBZixDQUNFLFlBQVk7QUFDVixrQkFBVSxHQUFWLENBQWMsU0FBZCxFQUF5QixHQUF6QjtBQUNELE9BSEgsRUFJRSxZQUFZO0FBQ1Ysa0JBQVUsR0FBVixDQUFjLGtCQUFkLEVBQWtDLE1BQWxDO0FBQ0Esa0JBQVUsR0FBVixDQUFjLFNBQWQsRUFBeUIsR0FBekI7QUFDRCxPQVBIOztBQVVBLGVBQVMsS0FBVCxDQUFlLFlBQVk7QUFDekIsa0JBQVUsR0FBVixDQUFjLGtCQUFkLEVBQWtDLHdDQUFsQztBQUNBLGtCQUFVLEdBQVYsQ0FBYyxpQkFBZCxFQUFpQyxPQUFqQztBQUNELE9BSEQ7O0FBS0EsY0FBUSxLQUFSLENBQWMsWUFBWTtBQUN4QixrQkFBVSxHQUFWLENBQWMsa0JBQWQsRUFBa0Msc0NBQWxDO0FBQ0Esa0JBQVUsR0FBVixDQUFjLGlCQUFkLEVBQWlDLE9BQWpDO0FBQ0QsT0FIRDs7QUFLQSxpQkFBVyxLQUFYLENBQWlCLFlBQVk7QUFDM0Isa0JBQVUsR0FBVixDQUFjLGtCQUFkLEVBQWtDLHlDQUFsQztBQUNBLGtCQUFVLEdBQVYsQ0FBYyxpQkFBZCxFQUFpQyxPQUFqQztBQUNELE9BSEQ7O0FBS0EsZ0JBQVUsS0FBVixDQUFnQixZQUFZO0FBQzFCLGtCQUFVLEdBQVYsQ0FBYyxrQkFBZCxFQUFrQyx3Q0FBbEM7QUFDQSxrQkFBVSxHQUFWLENBQWMsaUJBQWQsRUFBaUMsT0FBakM7QUFDRCxPQUhEOztBQUtBLHFCQUFlLEtBQWYsQ0FBcUIsWUFBWTtBQUMvQixrQkFBVSxHQUFWLENBQWMsa0JBQWQsRUFBa0MsNkNBQWxDO0FBQ0Esa0JBQVUsR0FBVixDQUFjLGlCQUFkLEVBQWlDLE9BQWpDO0FBQ0QsT0FIRDs7QUFLQSxrQkFBWSxLQUFaLENBQWtCLFlBQVk7QUFDNUIsa0JBQVUsR0FBVixDQUFjLGtCQUFkLEVBQWtDLDJDQUFsQztBQUNBLGtCQUFVLEdBQVYsQ0FBYyxpQkFBZCxFQUFpQyxPQUFqQztBQUNELE9BSEQ7QUFLRDs7O3FDQUVnQjtBQUNmLFVBQUksaUJBQWlCLEVBQUUsa0JBQUYsQ0FBckI7QUFDQSxVQUFJLFlBQVksRUFBRSxhQUFGLENBQWhCO0FBQ0EsVUFBSSxhQUFhLEVBQUUsdUJBQUYsQ0FBakI7QUFDQSxVQUFJLGFBQWEsRUFBRSxxQkFBRixDQUFqQjtBQUNBLFVBQUkscUJBQXFCLEVBQUUsb0JBQUYsQ0FBekI7QUFDQSxVQUFJLGFBQWEsRUFBRSxjQUFGLENBQWpCOztBQUVBLHFCQUFlLEtBQWYsQ0FDRSxZQUFZO0FBQ1Ysa0JBQVUsUUFBVixDQUFtQixlQUFuQjtBQUNBLFVBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsU0FBakIsRUFBNEIsUUFBNUIsQ0FBcUMsaUJBQXJDO0FBQ0EsVUFBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixVQUFqQixFQUE2QixRQUE3QixDQUFzQyxTQUF0QztBQUNBLG1CQUFXLFFBQVgsQ0FBb0IsZUFBcEI7QUFDQSwyQkFBbUIsUUFBbkIsQ0FBNEIsU0FBNUI7QUFDQSxtQkFBVyxHQUFYLENBQWUsU0FBZixFQUEwQixHQUExQjtBQUNELE9BUkgsRUFTRSxZQUFZO0FBQ1Ysa0JBQVUsV0FBVixDQUFzQixlQUF0QjtBQUNBLFVBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsU0FBakIsRUFBNEIsV0FBNUIsQ0FBd0MsaUJBQXhDO0FBQ0EsbUJBQVcsV0FBWCxDQUF1QixTQUF2QjtBQUNBLG1CQUFXLFdBQVgsQ0FBdUIsZUFBdkI7QUFDQSwyQkFBbUIsV0FBbkIsQ0FBK0IsU0FBL0I7QUFDQSxtQkFBVyxHQUFYLENBQWUsU0FBZixFQUEwQixHQUExQjtBQUNELE9BaEJIO0FBa0JEOzs7Ozs7a0JBR1ksUTs7Ozs7Ozs7Ozs7OztJQzFGVCxVO0FBQ0osd0JBQWM7QUFBQTs7QUFDWixTQUFLLFlBQUw7QUFDRDs7OzttQ0FFYztBQUNiLFVBQUksU0FBUyxFQUFFLGdCQUFGLENBQWI7QUFDQSxVQUFJLGVBQWUsRUFBRSxlQUFGLENBQW5COztBQUVBLGFBQU8sU0FBUCxDQUFrQixVQUFTLEdBQVQsRUFBYztBQUM5QixZQUFJLE9BQU8sSUFBSSxLQUFmLENBRDhCLENBQ1Q7QUFDckIsWUFBSSxRQUFRLEVBQUUsU0FBUyxJQUFYLEVBQWlCLEtBQWpCLEVBQVo7QUFDQSxZQUFJLFFBQVEsT0FBTyxLQUFuQjs7QUFHQSxVQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLFlBQWpCLEVBQStCLEdBQS9CLENBQW1DLHVCQUFuQyxFQUE2RCxZQUFXO0FBQ3RFLGlCQUFPLEVBQUcsUUFBUSxLQUFYLENBQVA7QUFDRCxTQUZEO0FBR0QsT0FURDtBQVVEOzs7Ozs7a0JBSVksVTs7Ozs7Ozs7Ozs7OztJQ3ZCVCxHO0FBQ0osaUJBQWM7QUFBQTs7QUFDWixTQUFLLEtBQUwsR0FBYSxFQUFFLE1BQUYsQ0FBYjtBQUNBLFNBQUssVUFBTCxHQUFrQixFQUFFLHlCQUFGLENBQWxCO0FBQ0EsU0FBSyxhQUFMLEdBQXFCLEVBQUUsc0JBQUYsQ0FBckI7O0FBRUEsU0FBSyxJQUFMO0FBQ0Q7Ozs7MkJBRU07QUFDTCxXQUFLLGFBQUwsQ0FBbUIsS0FBbkIsQ0FBeUIsS0FBSyxTQUFMLENBQWUsSUFBZixDQUFvQixJQUFwQixDQUF6QjtBQUNBLFdBQUssVUFBTCxDQUFnQixLQUFoQixDQUFzQixLQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CLElBQXBCLENBQXRCOztBQUVBLFdBQUssY0FBTDtBQUNEOzs7Z0NBRVc7QUFDVixXQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXVCLGdCQUF2QjtBQUNEOzs7cUNBRWdCO0FBQ2YsVUFBSSxpQkFBaUIsRUFBRSx1QkFBRixDQUFyQjtBQUNBLFVBQUksUUFBUSxFQUFFLE9BQUYsQ0FBWjtBQUNBLFVBQUksYUFBYSxFQUFFLE9BQUYsRUFBVyxXQUFYLEVBQWpCO0FBQ0EsVUFBSSxpQkFBaUIsRUFBRSxlQUFGLEVBQW1CLFdBQW5CLEVBQXJCO0FBQ0EsVUFBSSxZQUFZLE9BQU8sT0FBdkI7O0FBRUEsVUFBTSxxQkFBcUIsRUFBRSxlQUFGLENBQTNCOztBQUVBLFVBQUksTUFBTSxRQUFOLENBQWUsTUFBZixDQUFKLEVBQTRCO0FBQzFCLHVCQUFlLFFBQWYsQ0FBd0IsZUFBeEI7QUFDRDs7QUFFRCxRQUFFLFFBQUYsRUFBWSxNQUFaLENBQW1CLFlBQVc7QUFDNUIsWUFBSSxZQUFZLE9BQU8sT0FBdkI7O0FBRUEsYUFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLG1CQUFtQixNQUF2QyxFQUErQyxHQUEvQyxFQUFvRDtBQUNsRCxjQUFJLGtCQUFrQixtQkFBbUIsRUFBbkIsQ0FBc0IsQ0FBdEIsQ0FBdEI7QUFDQSxjQUFJLFNBQVMsZ0JBQWdCLE1BQWhCLEdBQXlCLEdBQXRDO0FBQ0EsY0FBSSxnQkFBZ0IsZ0JBQWdCLFdBQWhCLEVBQXBCO0FBQ0EsY0FBSSxZQUFhLFNBQVMsRUFBdEIsSUFBNkIsWUFBWSxTQUFTLGFBQXRELEVBQXFFO0FBQ25FLGdCQUFJLGdCQUFnQixRQUFoQixDQUF5QixNQUF6QixDQUFKLEVBQXNDO0FBQ3BDLDZCQUFlLFFBQWYsQ0FBd0IsZUFBeEI7QUFDRCxhQUZELE1BRU87QUFDTCw2QkFBZSxXQUFmLENBQTJCLGVBQTNCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsT0FmRDtBQWdCRDs7Ozs7O2tCQUdZLEc7Ozs7Ozs7Ozs7O0FDcERmOzs7Ozs7OztJQUVNLGU7QUFDSiw2QkFBYztBQUFBOztBQUNaLFNBQUssS0FBTCxHQUFhLEVBQUUsTUFBRixDQUFiO0FBQ0EsU0FBSyxVQUFMLEdBQWtCLElBQUksc0JBQVksVUFBaEIsRUFBbEIsQ0FGWSxDQUVvQzs7QUFFaEQsUUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLE1BQXBCLENBQUosRUFBaUM7QUFDL0IsV0FBSyxVQUFMO0FBQ0Q7QUFDRjs7OztpQ0FFWTtBQUNYLFVBQUksaUJBQWlCLEVBQUUseUJBQUYsQ0FBckI7QUFDQSxVQUFJLHNCQUFZLEtBQWhCLENBQXNCO0FBQ3BCLHdCQUFnQixjQURJO0FBRXBCLGtCQUFVLGVBQWUsTUFBZjtBQUZVLE9BQXRCLEVBSUMsTUFKRCxDQUlRLGFBSlIsRUFJdUI7QUFKdkIsT0FLQSxLQUxBLENBS00sVUFMTixFQUZXLENBT1E7QUFDcEI7Ozs7OztrQkFLWSxlOzs7Ozs7Ozs7Ozs7O0lDekJULE07QUFDSixvQkFBYztBQUFBOztBQUNaLFNBQUssUUFBTDtBQUNEOzs7OytCQUVVO0FBQ1QsVUFBSSxjQUFjLEVBQUUsaUJBQUYsQ0FBbEI7QUFDQSxVQUFJLGdCQUFnQixFQUFFLGVBQUYsQ0FBcEI7O0FBRUEsa0JBQVksS0FBWixDQUFtQixZQUFXO0FBQzVCLGdCQUFRLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsVUFBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXdCO0FBQ3RCLHFCQUFXLGNBQWMsTUFBZCxHQUF1QjtBQURaLFNBQXhCLEVBRUUsR0FGRjtBQUdELE9BTEQ7QUFNRDs7Ozs7O2tCQUlZLE07OztBQ25CZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsImltcG9ydCBOYXYgZnJvbSAnLi9tb2R1bGVzL25hdic7XG5pbXBvcnQgSG9tZXBhZ2UgZnJvbSAnLi9tb2R1bGVzL2hvbWVwYWdlJztcbmltcG9ydCBBYm91dCBmcm9tICcuL21vZHVsZXMvYWJvdXQnO1xuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbiBmcm9tICcuL21vZHVsZXMvc2Nyb2xsLW1hZ2ljJ1xuaW1wb3J0IEltYWdlSG92ZXIgZnJvbSAnLi9tb2R1bGVzL2ltZy1ob3ZlcidcbmltcG9ydCBTY3JvbGwgZnJvbSAnLi9tb2R1bGVzL3Njcm9sbFRvJ1xuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICBuZXcgTmF2KCk7XG4gIG5ldyBIb21lcGFnZSgpO1xuICBuZXcgQWJvdXQoKTtcbiAgbmV3IEltYWdlSG92ZXIoKTtcbiAgbmV3IFNjcm9sbCgpO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgJCgnLmJlZm9yZS1sb2FkJykucmVtb3ZlQ2xhc3MoJ2JlZm9yZS1sb2FkJyk7XG4gICAgJCgnLmJlZm9yZS1sb2FkLWxlZnQnKS5yZW1vdmVDbGFzcygnYmVmb3JlLWxvYWQtbGVmdCcpO1xuICAgICQoJy5iZWZvcmUtbG9hZC1yaWdodCcpLnJlbW92ZUNsYXNzKCdiZWZvcmUtbG9hZC1yaWdodCcpO1xuICB9LCAyMDApO1xuXG4gIHZhciBpc1NhZmFyaSA9IC9TYWZhcmkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgL0FwcGxlIENvbXB1dGVyLy50ZXN0KG5hdmlnYXRvci52ZW5kb3IpO1xuICBpZiAoaXNTYWZhcmkpICQoJ2JvZHknKS5hZGRDbGFzcygnc2FmYXJpJyk7XG59KTtcbiIsImltcG9ydCBUeXBlZCBmcm9tICd0eXBlZC5qcyc7XG5cbmNsYXNzIEFib3V0IHtcbsKgwqBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xuICAgIGlmICh0aGlzLiRib2R5Lmhhc0NsYXNzKCdhYm91dCcpKSB7XG4gICAgICB0aGlzLmNoYW5nZUZhY3QoKTtcbiAgICB9XG7CoMKgfVxuXG4gIGNoYW5nZUZhY3QoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgJGFib3V0VGV4dCA9ICQoJy5hYm91dF9fdGV4dCcpO1xuICAgIGxldCAkYWJvdXRGYWN0ID0gJCgnLmFib3V0X190ZXh0LS1mYWN0Jyk7XG4gICAgbGV0IGFib3V0RmFjdHMgPSBbXG4gICAgICAnYW4gaW50ZXJhY3Rpb24gZGVzaWduZXIgd2hvIGxvdmVzIHRoZSBwcm9ibGVtIHNvbHZpbmcgdGhhdCBnb2VzIG9uIGJlaGluZCBzY3JlZW5zJyxcbiAgICAgICdhIGxvdmVyIG9mIGFsbCB0aGluZ3MgcmVsYXRlZCB0byBkZXNpZ24gcHJvY2VzcycsXG4gICAgICAnYSBkZXNpZ25lciB3aXRoIHNvbWUgZGV2ZWxvcG1lbnQgY2hvcHMnLFxuICAgICAgJ2FuZCBpIGxvdmUgdG8gaXRlcmF0ZSwgcmV0cm9zcGVjdCwgYW5kIGltcHJvdmUgZXZlcnkgc3RlcCBvZiB0aGUgd2F5JyxcbiAgICAgICdhIHNlbmlvciBkZXNpZ24gc3R1ZGVudCBAIG5vcnRoZWFzdGVybiB1bml2ZXJzaXR5JyxcbiAgICAgICdzb21lb25lIHdobyB0YWdzIHBwbCBpbiBhIGxvdCBvZiBtZW1lcycsXG4gICAgICAnYW5kIGkmYXBvczt2ZSByZWNlbnRseSBiZWVuIG9ic2Vzc2VkIHdpdGggbWljcm8taW50ZXJhY3Rpb25zLCBhbmltYXRpb25zLCBhbmQgaG92ZXIgZWZmZWN0cycsXG4gICAgICAnYSBkZXNpZ25lciB3aG8gc29sdmVzIHByb2JsZW1zIHdpdGgsIGxpa2UsIGEgbG90IG9mIHN0aWNreSBub3RlcycsXG4gICAgICAnYW5kIGkgdXNlIGEgbG90IG9mICBleGNsYW1hdGlvbiBwb2ludHMgYW5kIGN1c3RvbSBzbGFjayBlbW9qaXMnLFxuICAgICAgJ2FuZCBpIHByZWZlciBpbGx1c3RyYXRpbmcgaW4gc2tldGNoIG92ZXIgYWkgI3VucG9wdWxhcm9waW5pb24nXG4gICAgXTtcbiAgICBsZXQgZmFjdE51bSA9IDA7XG5cbiAgICBsZXQgdHlwZWQgPSBuZXcgVHlwZWQoJy5hYm91dF9fdGV4dC0tZmFjdCcsIHtcbiAgICAgIHN0cmluZ3M6IFthYm91dEZhY3RzWzBdXSxcbiAgICAgIHR5cGVTcGVlZDogMjAsXG4gICAgfSk7XG5cbiAgICAkYWJvdXRUZXh0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgdHlwZWQuZGVzdHJveSgpO1xuICAgICAgaWYgKGZhY3ROdW0gPCBhYm91dEZhY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgZmFjdE51bSArPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmFjdE51bSA9IDA7XG4gICAgICB9XG4gICAgICB0eXBlZCA9IG5ldyBUeXBlZCgnLmFib3V0X190ZXh0LS1mYWN0Jywge1xuICAgICAgICBzdHJpbmdzOiBbYWJvdXRGYWN0c1tmYWN0TnVtXV0sXG4gICAgICAgIHR5cGVTcGVlZDogMjAsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFJhbmRvbUludChtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihtYXgpKTtcbiAgfVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iLCJjbGFzcyBIb21lcGFnZSB7XG7CoMKgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcbiAgICBpZiAodGhpcy4kYm9keS5oYXNDbGFzcygnaG9tZScpKSB7XG4gICAgICB0aGlzLndvcmtMaW5rc0NvbG9yKCk7XG4gICAgICB0aGlzLmJhY2tncm91bmRJbWcoKTtcbiAgICB9XG4gIMKgfVxuXG4gIGJhY2tncm91bmRJbWcoKSB7XG4gICAgbGV0ICRsaW5rQ29udGFpbmVyID0gJCgnLmxpbmstLWNvbnRhaW5lcicpO1xuICAgIGxldCAkdHJhaWxUYWcgPSAkKCcubGluay0tdHJhaWx0YWcnKTtcbiAgICBsZXQgJHVuc2VudCA9ICQoJy5saW5rLS11bnNlbnQnKTtcbiAgICBsZXQgJHZpZGVvZ2FtZSA9ICQoJy5saW5rLS12aWRlb2dhbWUnKTtcbiAgICBsZXQgJHplYWxlcnkgPSAkKCcubGluay0temVhbGVyeScpO1xuICAgIGxldCAkaWxsdXN0cmF0aW9ucyA9ICQoJy5saW5rLS1pbGx1c3RyYXRpb25zJyk7XG4gICAgbGV0ICRsYWNlbnRyYWxlID0gJCgnLmxpbmstLWxhY2VudHJhbGUnKTtcbiAgICBsZXQgJGhvdmVySW1nID0gJCgnLmhvdmVyX19pbWcnKTtcblxuICAgICRsaW5rQ29udGFpbmVyLmhvdmVyKFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAkaG92ZXJJbWcuY3NzKFwib3BhY2l0eVwiLCBcIjFcIik7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAkaG92ZXJJbWcuY3NzKFwiYmFja2dyb3VuZC1pbWFnZVwiLCBcIm5vbmVcIik7XG4gICAgICAgICRob3ZlckltZy5jc3MoXCJvcGFjaXR5XCIsIFwiMFwiKTtcbiAgICAgIH1cbiAgICApXG5cbiAgICAkemVhbGVyeS5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAkaG92ZXJJbWcuY3NzKFwiYmFja2dyb3VuZC1pbWFnZVwiLCBcInVybCgvaW1nL2hvbWUvd29ya19fbGluay0temVhbGVyeS5wbmcpXCIpO1xuICAgICAgJGhvdmVySW1nLmNzcyhcImJhY2tncm91bmQtc2l6ZVwiLCBcImNvdmVyXCIpO1xuICAgIH0pO1xuXG4gICAgJHVuc2VudC5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAkaG92ZXJJbWcuY3NzKFwiYmFja2dyb3VuZC1pbWFnZVwiLCBcInVybCgvaW1nL3Vuc2VudC9oZXJvLWJhY2tncm91bmQucG5nKVwiKTtcbiAgICAgICRob3ZlckltZy5jc3MoXCJiYWNrZ3JvdW5kLXNpemVcIiwgXCJjb3ZlclwiKTtcbiAgICB9KTtcblxuICAgICR2aWRlb2dhbWUuaG92ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgJGhvdmVySW1nLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIiwgXCJ1cmwoL2ltZy92aWRlb2dhbWUvaGVyby1iYWNrZ3JvdW5kLnBuZylcIik7XG4gICAgICAkaG92ZXJJbWcuY3NzKFwiYmFja2dyb3VuZC1zaXplXCIsIFwiY292ZXJcIik7XG4gICAgfSk7XG5cbiAgICAkdHJhaWxUYWcuaG92ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgJGhvdmVySW1nLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIiwgXCJ1cmwoL2ltZy90cmFpbHRhZy9oZXJvLWJhY2tncm91bmQucG5nKVwiKTtcbiAgICAgICRob3ZlckltZy5jc3MoXCJiYWNrZ3JvdW5kLXNpemVcIiwgXCJjb3ZlclwiKTtcbiAgICB9KTtcblxuICAgICRpbGx1c3RyYXRpb25zLmhvdmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICRob3ZlckltZy5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsIFwidXJsKC9pbWcvaWxsdXN0cmF0aW9ucy9oZXJvLWJhY2tncm91bmQucG5nKVwiKTtcbiAgICAgICRob3ZlckltZy5jc3MoXCJiYWNrZ3JvdW5kLXNpemVcIiwgXCJjb3ZlclwiKTtcbiAgICB9KTtcblxuICAgICRsYWNlbnRyYWxlLmhvdmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICRob3ZlckltZy5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsIFwidXJsKC9pbWcvaG9tZS93b3JrX19saW5rLS1sYWNlbnRyYWxlLnBuZylcIik7XG4gICAgICAkaG92ZXJJbWcuY3NzKFwiYmFja2dyb3VuZC1zaXplXCIsIFwiY292ZXJcIik7XG4gICAgfSk7XG5cbiAgfVxuXG7CoMKgd29ya0xpbmtzQ29sb3IoKSB7XG7CoMKgwqDCoHZhciAkbGlua0NvbnRhaW5lciA9ICQoXCIubGluay0tY29udGFpbmVyXCIpO1xuwqDCoMKgwqB2YXIgJHdvcmtMaW5rID0gJChcIi53b3JrX19saW5rXCIpO1xuwqDCoMKgwqB2YXIgJGhhbWJ1cmdlciA9ICQoXCIubmF2X19oYW1idXJnZXItLWljb25cIik7XG7CoMKgwqDCoHZhciAkaG92ZXJEZXNjID0gJChcIi5ob3Zlcl9fZGVzY3JpcHRpb25cIik7XG4gICAgdmFyICRmb290ZXJfX2NvbnRhaW5lciA9ICQoXCIuZm9vdGVyX19jb250YWluZXJcIik7XG4gICAgbGV0ICRoZXJvSW50cm8gPSAkKFwiLmhlcm9fX2ludHJvXCIpXG5cbiAgICAkbGlua0NvbnRhaW5lci5ob3ZlcihcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHdvcmtMaW5rLmFkZENsYXNzKCdqcy10ZXh0LXdoaXRlJyk7XG4gIMKgwqDCoMKgwqDCoCQodGhpcykuY2hpbGRyZW4oJHdvcmtMaW5rKS5hZGRDbGFzcygnanMtdGV4dC1vdXRsaW5lJyk7XG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oJGhvdmVyRGVzYykuYWRkQ2xhc3MoJ2pzLXNob3cnKTtcbiAgICAgICAgJGhhbWJ1cmdlci5hZGRDbGFzcygnanMtaWNvbi13aGl0ZScpO1xuICAgICAgICAkZm9vdGVyX19jb250YWluZXIuYWRkQ2xhc3MoJ2pzLWhpZGUnKTtcbiAgICAgICAgJGhlcm9JbnRyby5jc3MoJ29wYWNpdHknLCAnMCcpO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHdvcmtMaW5rLnJlbW92ZUNsYXNzKCdqcy10ZXh0LXdoaXRlJyk7XG4gIMKgwqDCoMKgwqDCoCQodGhpcykuY2hpbGRyZW4oJHdvcmtMaW5rKS5yZW1vdmVDbGFzcygnanMtdGV4dC1vdXRsaW5lJyk7XG4gICAgICAgICRob3ZlckRlc2MucmVtb3ZlQ2xhc3MoJ2pzLXNob3cnKTtcbiAgICAgICAgJGhhbWJ1cmdlci5yZW1vdmVDbGFzcygnanMtaWNvbi13aGl0ZScpO1xuICAgICAgICAkZm9vdGVyX19jb250YWluZXIucmVtb3ZlQ2xhc3MoJ2pzLWhpZGUnKTtcbiAgICAgICAgJGhlcm9JbnRyby5jc3MoJ29wYWNpdHknLCAnMScpO1xuICAgICAgfVxuICAgIClcbsKgwqB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlO1xuIiwiY2xhc3MgSW1hZ2VIb3ZlciB7XG7CoMKgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zY3JvbGxJbWFnZVgoKTtcbsKgwqB9XG5cbiAgc2Nyb2xsSW1hZ2VYKCkge1xuICAgIGxldCAkaW1hZ2UgPSAkKCcuaG92ZXItaW1hZ2UteCcpO1xuICAgIGxldCAkcGFnZVNlY3Rpb24gPSAkKCcucGFnZS1zZWN0aW9uJyk7XG5cbiAgICAkaW1hZ2UubW91c2Vtb3ZlKCBmdW5jdGlvbihldnQpIHtcbiAgICAgIGxldCB4UG9zID0gZXZ0LnBhZ2VYOy8vd29ya3MgdGhhbmsgZ29kXG4gICAgICBsZXQgcGFnZVcgPSAkKGRvY3VtZW50LmJvZHkpLndpZHRoKCk7XG4gICAgICBsZXQgeFBlcmMgPSB4UG9zIC8gcGFnZVc7XG5cblxuICAgICAgJCh0aGlzKS5jaGlsZHJlbigkcGFnZVNlY3Rpb24pLmNzcygnYmFja2dyb3VuZC1wb3NpdGlvbi14JywgIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gLSAoeFBlcmMgKiBwYWdlVyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlSG92ZXI7XG4iLCJjbGFzcyBOYXYge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xuICAgIHRoaXMuJG5hdkJ1dHRvbiA9ICQoJy5uYXZfX2hhbWJ1cmdlci0tYnV0dG9uJyk7XG4gICAgdGhpcy4kc2xpZGVyQnV0dG9uID0gJCgnLm5hdl9fc2xpZGVyLS1idXR0b24nKTtcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLiRzbGlkZXJCdXR0b24uY2xpY2sodGhpcy50b2dnbGVOYXYuYmluZCh0aGlzKSk7XG4gICAgdGhpcy4kbmF2QnV0dG9uLmNsaWNrKHRoaXMudG9nZ2xlTmF2LmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5oYW1idXJnZXJDb2xvcigpO1xuICB9XG5cbiAgdG9nZ2xlTmF2KCkge1xuICAgIHRoaXMuJGJvZHkudG9nZ2xlQ2xhc3MoJ2pzLXNsaWRlci1vcGVuJyk7XG4gIH1cblxuICBoYW1idXJnZXJDb2xvcigpIHtcbiAgICBsZXQgJGhhbWJ1cmdlckljb24gPSAkKCcubmF2X19oYW1idXJnZXItLWljb24nKTtcbiAgICBsZXQgJGhlcm8gPSAkKCcuaGVybycpO1xuICAgIGxldCBoZXJvSGVpZ2h0ID0gJCgnLmhlcm8nKS5pbm5lckhlaWdodCgpO1xuICAgIGxldCBwcm9qZWN0U2VjdGlvbiA9ICQoJy5wYWdlLXNlY3Rpb24nKS5pbm5lckhlaWdodCgpO1xuICAgIGxldCBzY3JvbGxQb3MgPSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgIGNvbnN0ICRwcm9qZWN0U2VjdGlvbkFyciA9ICQoJy5wYWdlLXNlY3Rpb24nKTtcblxuICAgIGlmICgkaGVyby5oYXNDbGFzcygnZGFyaycpKSB7XG4gICAgICAkaGFtYnVyZ2VySWNvbi5hZGRDbGFzcygnanMtaWNvbi13aGl0ZScpO1xuICAgIH1cblxuICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzY3JvbGxQb3MgPSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkcHJvamVjdFNlY3Rpb25BcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0ICRwcm9qZWN0U2VjdGlvbiA9ICRwcm9qZWN0U2VjdGlvbkFyci5lcShpKTtcbiAgICAgICAgbGV0IG9mZnNldCA9ICRwcm9qZWN0U2VjdGlvbi5vZmZzZXQoKS50b3A7XG4gICAgICAgIGxldCBzZWN0aW9uSGVpZ2h0ID0gJHByb2plY3RTZWN0aW9uLmlubmVySGVpZ2h0KCk7XG4gICAgICAgIGlmIChzY3JvbGxQb3MgPiAob2Zmc2V0IC0gMzcpICYmIHNjcm9sbFBvcyA8IG9mZnNldCArIHNlY3Rpb25IZWlnaHQpIHtcbiAgICAgICAgICBpZiAoJHByb2plY3RTZWN0aW9uLmhhc0NsYXNzKCdkYXJrJykpIHtcbiAgICAgICAgICAgICRoYW1idXJnZXJJY29uLmFkZENsYXNzKCdqcy1pY29uLXdoaXRlJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRoYW1idXJnZXJJY29uLnJlbW92ZUNsYXNzKCdqcy1pY29uLXdoaXRlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIiwiaW1wb3J0IFNjcm9sbE1hZ2ljIGZyb20gJ3Njcm9sbG1hZ2ljJztcblxuY2xhc3MgU2Nyb2xsQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcigpOyAvL3Byb3BlcnR5IG9mIHRoaXMgY2xhc3MsIHJhdGhlciB0aGFuIGdsb2JhbCB2YXJcblxuICAgIGlmICh0aGlzLiRib2R5Lmhhc0NsYXNzKCdob21lJykpIHtcbiAgICAgIHRoaXMuaG9tZVNjcm9sbCgpO1xuICAgIH1cbiAgfVxuXG4gIGhvbWVTY3JvbGwoKSB7XG4gICAgbGV0ICR3b3JrQ29udGFpbmVyID0gJCgnLndvcmtfX2xpbmtzLS1jb250YWluZXInKTtcbiAgICBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xuICAgICAgdHJpZ2dlckVsZW1lbnQ6ICR3b3JrQ29udGFpbmVyLFxuICAgICAgZHVyYXRpb246ICR3b3JrQ29udGFpbmVyLmhlaWdodCgpXG4gICAgfSlcbiAgICAuc2V0UGluKFwiLmhvdmVyX19pbWdcIikgLy8gcGlucyB0aGUgZWxlbWVudCBmb3IgdGhlIHRoZSBzY2VuZSdzIGR1cmF0aW9uXG5cdCAgLmFkZFRvKGNvbnRyb2xsZXIpOyAvLyBhc3NpZ24gdGhlIHNjZW5lIHRvIHRoZSBjb250cm9sbGVyXG4gIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbEFuaW1hdGlvbjtcbiIsImNsYXNzIFNjcm9sbCB7XG7CoMKgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zY3JvbGxUbygpO1xuwqDCoH1cblxuICBzY3JvbGxUbygpIHtcbiAgICBsZXQgJHNjcm9sbExpbmsgPSAkKCcuanMtc2Nyb2xsLWxpbmsnKTtcbiAgICBsZXQgJHNjcm9sbFRvVGhpcyA9ICQoJyNqcy1zY3JvbGwtdG8nKTtcblxuICAgICRzY3JvbGxMaW5rLmNsaWNrKCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgIHNjcm9sbFRvcDogJHNjcm9sbFRvVGhpcy5vZmZzZXQoKS50b3BcbiAgICAgfSwgNDAwKTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbDtcbiIsIi8qIVxuICogU2Nyb2xsTWFnaWMgdjIuMC41ICgyMDE1LTA0LTI5KVxuICogVGhlIGphdmFzY3JpcHQgbGlicmFyeSBmb3IgbWFnaWNhbCBzY3JvbGwgaW50ZXJhY3Rpb25zLlxuICogKGMpIDIwMTUgSmFuIFBhZXBrZSAoQGphbnBhZXBrZSlcbiAqIFByb2plY3QgV2Vic2l0ZTogaHR0cDovL3Njcm9sbG1hZ2ljLmlvXG4gKiBcbiAqIEB2ZXJzaW9uIDIuMC41XG4gKiBAbGljZW5zZSBEdWFsIGxpY2Vuc2VkIHVuZGVyIE1JVCBsaWNlbnNlIGFuZCBHUEwuXG4gKiBAYXV0aG9yIEphbiBQYWVwa2UgLSBlLW1haWxAamFucGFlcGtlLmRlXG4gKlxuICogQGZpbGUgU2Nyb2xsTWFnaWMgbWFpbiBsaWJyYXJ5LlxuICovXG4vKipcbiAqIEBuYW1lc3BhY2UgU2Nyb2xsTWFnaWNcbiAqL1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gQnJvd3NlciBnbG9iYWxcblx0XHRyb290LlNjcm9sbE1hZ2ljID0gZmFjdG9yeSgpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0dmFyIFNjcm9sbE1hZ2ljID0gZnVuY3Rpb24gKCkge1xuXHRcdF91dGlsLmxvZygyLCAnKENPTVBBVElCSUxJVFkgTk9USUNFKSAtPiBBcyBvZiBTY3JvbGxNYWdpYyAyLjAuMCB5b3UgbmVlZCB0byB1c2UgXFwnbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKVxcJyB0byBjcmVhdGUgYSBuZXcgY29udHJvbGxlciBpbnN0YW5jZS4gVXNlIFxcJ25ldyBTY3JvbGxNYWdpYy5TY2VuZSgpXFwnIHRvIGluc3RhbmNlIGEgc2NlbmUuJyk7XG5cdH07XG5cblx0U2Nyb2xsTWFnaWMudmVyc2lvbiA9IFwiMi4wLjVcIjtcblxuXHQvLyBUT0RPOiB0ZW1wb3Jhcnkgd29ya2Fyb3VuZCBmb3IgY2hyb21lJ3Mgc2Nyb2xsIGppdHRlciBidWdcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIGZ1bmN0aW9uICgpIHt9KTtcblxuXHQvLyBnbG9iYWwgY29uc3Rcblx0dmFyIFBJTl9TUEFDRVJfQVRUUklCVVRFID0gXCJkYXRhLXNjcm9sbG1hZ2ljLXBpbi1zcGFjZXJcIjtcblxuXHQvKipcblx0ICogVGhlIG1haW4gY2xhc3MgdGhhdCBpcyBuZWVkZWQgb25jZSBwZXIgc2Nyb2xsIGNvbnRhaW5lci5cblx0ICpcblx0ICogQGNsYXNzXG5cdCAqXG5cdCAqIEBleGFtcGxlXG5cdCAqIC8vIGJhc2ljIGluaXRpYWxpemF0aW9uXG5cdCAqIHZhciBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTtcblx0ICpcblx0ICogLy8gcGFzc2luZyBvcHRpb25zXG5cdCAqIHZhciBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoe2NvbnRhaW5lcjogXCIjbXlDb250YWluZXJcIiwgbG9nbGV2ZWw6IDN9KTtcblx0ICpcblx0ICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtIEFuIG9iamVjdCBjb250YWluaW5nIG9uZSBvciBtb3JlIG9wdGlvbnMgZm9yIHRoZSBjb250cm9sbGVyLlxuXHQgKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gW29wdGlvbnMuY29udGFpbmVyPXdpbmRvd10gLSBBIHNlbGVjdG9yLCBET00gb2JqZWN0IHRoYXQgcmVmZXJlbmNlcyB0aGUgbWFpbiBjb250YWluZXIgZm9yIHNjcm9sbGluZy5cblx0ICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy52ZXJ0aWNhbD10cnVlXSAtIFNldHMgdGhlIHNjcm9sbCBtb2RlIHRvIHZlcnRpY2FsIChgdHJ1ZWApIG9yIGhvcml6b250YWwgKGBmYWxzZWApIHNjcm9sbGluZy5cblx0ICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zLmdsb2JhbFNjZW5lT3B0aW9ucz17fV0gLSBUaGVzZSBvcHRpb25zIHdpbGwgYmUgcGFzc2VkIHRvIGV2ZXJ5IFNjZW5lIHRoYXQgaXMgYWRkZWQgdG8gdGhlIGNvbnRyb2xsZXIgdXNpbmcgdGhlIGFkZFNjZW5lIG1ldGhvZC4gRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gU2NlbmUgb3B0aW9ucyBzZWUge0BsaW5rIFNjcm9sbE1hZ2ljLlNjZW5lfS5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmxvZ2xldmVsPTJdIExvZ2xldmVsIGZvciBkZWJ1Z2dpbmcuIE5vdGUgdGhhdCBsb2dnaW5nIGlzIGRpc2FibGVkIGluIHRoZSBtaW5pZmllZCB2ZXJzaW9uIG9mIFNjcm9sbE1hZ2ljLlxuXHQgKiogYDBgID0+IHNpbGVudFxuXHQgKiogYDFgID0+IGVycm9yc1xuXHQgKiogYDJgID0+IGVycm9ycywgd2FybmluZ3Ncblx0ICoqIGAzYCA9PiBlcnJvcnMsIHdhcm5pbmdzLCBkZWJ1Z2luZm9cblx0ICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yZWZyZXNoSW50ZXJ2YWw9MTAwXSAtIFNvbWUgY2hhbmdlcyBkb24ndCBjYWxsIGV2ZW50cyBieSBkZWZhdWx0LCBsaWtlIGNoYW5naW5nIHRoZSBjb250YWluZXIgc2l6ZSBvciBtb3ZpbmcgYSBzY2VuZSB0cmlnZ2VyIGVsZW1lbnQuICBcblx0IFRoaXMgaW50ZXJ2YWwgcG9sbHMgdGhlc2UgcGFyYW1ldGVycyB0byBmaXJlIHRoZSBuZWNlc3NhcnkgZXZlbnRzLiAgXG5cdCBJZiB5b3UgZG9uJ3QgdXNlIGN1c3RvbSBjb250YWluZXJzLCB0cmlnZ2VyIGVsZW1lbnRzIG9yIGhhdmUgc3RhdGljIGxheW91dHMsIHdoZXJlIHRoZSBwb3NpdGlvbnMgb2YgdGhlIHRyaWdnZXIgZWxlbWVudHMgZG9uJ3QgY2hhbmdlLCB5b3UgY2FuIHNldCB0aGlzIHRvIDAgZGlzYWJsZSBpbnRlcnZhbCBjaGVja2luZyBhbmQgaW1wcm92ZSBwZXJmb3JtYW5jZS5cblx0ICpcblx0ICovXG5cdFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuLypcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKiBzZXR0aW5nc1xuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqL1xuXHRcdHZhclxuXHRcdE5BTUVTUEFDRSA9ICdTY3JvbGxNYWdpYy5Db250cm9sbGVyJyxcblx0XHRcdFNDUk9MTF9ESVJFQ1RJT05fRk9SV0FSRCA9ICdGT1JXQVJEJyxcblx0XHRcdFNDUk9MTF9ESVJFQ1RJT05fUkVWRVJTRSA9ICdSRVZFUlNFJyxcblx0XHRcdFNDUk9MTF9ESVJFQ1RJT05fUEFVU0VEID0gJ1BBVVNFRCcsXG5cdFx0XHRERUZBVUxUX09QVElPTlMgPSBDT05UUk9MTEVSX09QVElPTlMuZGVmYXVsdHM7XG5cbi8qXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogcHJpdmF0ZSB2YXJzXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICovXG5cdFx0dmFyXG5cdFx0Q29udHJvbGxlciA9IHRoaXMsXG5cdFx0XHRfb3B0aW9ucyA9IF91dGlsLmV4dGVuZCh7fSwgREVGQVVMVF9PUFRJT05TLCBvcHRpb25zKSxcblx0XHRcdF9zY2VuZU9iamVjdHMgPSBbXSxcblx0XHRcdF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSA9IGZhbHNlLFxuXHRcdFx0Ly8gY2FuIGJlIGJvb2xlYW4gKHRydWUgPT4gYWxsIHNjZW5lcykgb3IgYW4gYXJyYXkgb2Ygc2NlbmVzIHRvIGJlIHVwZGF0ZWRcblx0XHRcdF9zY3JvbGxQb3MgPSAwLFxuXHRcdFx0X3Njcm9sbERpcmVjdGlvbiA9IFNDUk9MTF9ESVJFQ1RJT05fUEFVU0VELFxuXHRcdFx0X2lzRG9jdW1lbnQgPSB0cnVlLFxuXHRcdFx0X3ZpZXdQb3J0U2l6ZSA9IDAsXG5cdFx0XHRfZW5hYmxlZCA9IHRydWUsXG5cdFx0XHRfdXBkYXRlVGltZW91dCwgX3JlZnJlc2hUaW1lb3V0O1xuXG4vKlxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqIHByaXZhdGUgZnVuY3Rpb25zXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICovXG5cblx0XHQvKipcblx0XHQgKiBJbnRlcm5hbCBjb25zdHJ1Y3RvciBmdW5jdGlvbiBvZiB0aGUgU2Nyb2xsTWFnaWMgQ29udHJvbGxlclxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dmFyIGNvbnN0cnVjdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGZvciAodmFyIGtleSBpbiBfb3B0aW9ucykge1xuXHRcdFx0XHRpZiAoIURFRkFVTFRfT1BUSU9OUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0bG9nKDIsIFwiV0FSTklORzogVW5rbm93biBvcHRpb24gXFxcIlwiICsga2V5ICsgXCJcXFwiXCIpO1xuXHRcdFx0XHRcdGRlbGV0ZSBfb3B0aW9uc1trZXldO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRfb3B0aW9ucy5jb250YWluZXIgPSBfdXRpbC5nZXQuZWxlbWVudHMoX29wdGlvbnMuY29udGFpbmVyKVswXTtcblx0XHRcdC8vIGNoZWNrIFNjcm9sbENvbnRhaW5lclxuXHRcdFx0aWYgKCFfb3B0aW9ucy5jb250YWluZXIpIHtcblx0XHRcdFx0bG9nKDEsIFwiRVJST1IgY3JlYXRpbmcgb2JqZWN0IFwiICsgTkFNRVNQQUNFICsgXCI6IE5vIHZhbGlkIHNjcm9sbCBjb250YWluZXIgc3VwcGxpZWRcIik7XG5cdFx0XHRcdHRocm93IE5BTUVTUEFDRSArIFwiIGluaXQgZmFpbGVkLlwiOyAvLyBjYW5jZWxcblx0XHRcdH1cblx0XHRcdF9pc0RvY3VtZW50ID0gX29wdGlvbnMuY29udGFpbmVyID09PSB3aW5kb3cgfHwgX29wdGlvbnMuY29udGFpbmVyID09PSBkb2N1bWVudC5ib2R5IHx8ICFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKF9vcHRpb25zLmNvbnRhaW5lcik7XG5cdFx0XHQvLyBub3JtYWxpemUgdG8gd2luZG93XG5cdFx0XHRpZiAoX2lzRG9jdW1lbnQpIHtcblx0XHRcdFx0X29wdGlvbnMuY29udGFpbmVyID0gd2luZG93O1xuXHRcdFx0fVxuXHRcdFx0Ly8gdXBkYXRlIGNvbnRhaW5lciBzaXplIGltbWVkaWF0ZWx5XG5cdFx0XHRfdmlld1BvcnRTaXplID0gZ2V0Vmlld3BvcnRTaXplKCk7XG5cdFx0XHQvLyBzZXQgZXZlbnQgaGFuZGxlcnNcblx0XHRcdF9vcHRpb25zLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uQ2hhbmdlKTtcblx0XHRcdF9vcHRpb25zLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uQ2hhbmdlKTtcblxuXHRcdFx0X29wdGlvbnMucmVmcmVzaEludGVydmFsID0gcGFyc2VJbnQoX29wdGlvbnMucmVmcmVzaEludGVydmFsKSB8fCBERUZBVUxUX09QVElPTlMucmVmcmVzaEludGVydmFsO1xuXHRcdFx0c2NoZWR1bGVSZWZyZXNoKCk7XG5cblx0XHRcdGxvZygzLCBcImFkZGVkIG5ldyBcIiArIE5BTUVTUEFDRSArIFwiIGNvbnRyb2xsZXIgKHZcIiArIFNjcm9sbE1hZ2ljLnZlcnNpb24gKyBcIilcIik7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFNjaGVkdWxlIHRoZSBuZXh0IGV4ZWN1dGlvbiBvZiB0aGUgcmVmcmVzaCBmdW5jdGlvblxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dmFyIHNjaGVkdWxlUmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChfb3B0aW9ucy5yZWZyZXNoSW50ZXJ2YWwgPiAwKSB7XG5cdFx0XHRcdF9yZWZyZXNoVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHJlZnJlc2gsIF9vcHRpb25zLnJlZnJlc2hJbnRlcnZhbCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIERlZmF1bHQgZnVuY3Rpb24gdG8gZ2V0IHNjcm9sbCBwb3MgLSBvdmVyd3JpdGVhYmxlIHVzaW5nIGBDb250cm9sbGVyLnNjcm9sbFBvcyhuZXdGdW5jdGlvbilgXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR2YXIgZ2V0U2Nyb2xsUG9zID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIF9vcHRpb25zLnZlcnRpY2FsID8gX3V0aWwuZ2V0LnNjcm9sbFRvcChfb3B0aW9ucy5jb250YWluZXIpIDogX3V0aWwuZ2V0LnNjcm9sbExlZnQoX29wdGlvbnMuY29udGFpbmVyKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogUmV0dXJucyB0aGUgY3VycmVudCB2aWV3cG9ydCBTaXplICh3aWR0aCB2b3IgaG9yaXpvbnRhbCwgaGVpZ2h0IGZvciB2ZXJ0aWNhbClcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHZhciBnZXRWaWV3cG9ydFNpemUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gX29wdGlvbnMudmVydGljYWwgPyBfdXRpbC5nZXQuaGVpZ2h0KF9vcHRpb25zLmNvbnRhaW5lcikgOiBfdXRpbC5nZXQud2lkdGgoX29wdGlvbnMuY29udGFpbmVyKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogRGVmYXVsdCBmdW5jdGlvbiB0byBzZXQgc2Nyb2xsIHBvcyAtIG92ZXJ3cml0ZWFibGUgdXNpbmcgYENvbnRyb2xsZXIuc2Nyb2xsVG8obmV3RnVuY3Rpb24pYFxuXHRcdCAqIE1ha2UgYXZhaWxhYmxlIHB1YmxpY2x5IGZvciBwaW5uZWQgbW91c2V3aGVlbCB3b3JrYXJvdW5kLlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dmFyIHNldFNjcm9sbFBvcyA9IHRoaXMuX3NldFNjcm9sbFBvcyA9IGZ1bmN0aW9uIChwb3MpIHtcblx0XHRcdGlmIChfb3B0aW9ucy52ZXJ0aWNhbCkge1xuXHRcdFx0XHRpZiAoX2lzRG9jdW1lbnQpIHtcblx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oX3V0aWwuZ2V0LnNjcm9sbExlZnQoKSwgcG9zKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfb3B0aW9ucy5jb250YWluZXIuc2Nyb2xsVG9wID0gcG9zO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoX2lzRG9jdW1lbnQpIHtcblx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8ocG9zLCBfdXRpbC5nZXQuc2Nyb2xsVG9wKCkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdF9vcHRpb25zLmNvbnRhaW5lci5zY3JvbGxMZWZ0ID0gcG9zO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZSB1cGRhdGVzIGluIGN5Y2xlcyBpbnN0ZWFkIG9mIG9uIHNjcm9sbCAocGVyZm9ybWFuY2UpXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR2YXIgdXBkYXRlU2NlbmVzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKF9lbmFibGVkICYmIF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSkge1xuXHRcdFx0XHQvLyBkZXRlcm1pbmUgc2NlbmVzIHRvIHVwZGF0ZVxuXHRcdFx0XHR2YXIgc2NlbmVzVG9VcGRhdGUgPSBfdXRpbC50eXBlLkFycmF5KF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSkgPyBfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgOiBfc2NlbmVPYmplY3RzLnNsaWNlKDApO1xuXHRcdFx0XHQvLyByZXNldCBzY2VuZXNcblx0XHRcdFx0X3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlID0gZmFsc2U7XG5cdFx0XHRcdHZhciBvbGRTY3JvbGxQb3MgPSBfc2Nyb2xsUG9zO1xuXHRcdFx0XHQvLyB1cGRhdGUgc2Nyb2xsIHBvcyBub3cgaW5zdGVhZCBvZiBvbkNoYW5nZSwgYXMgaXQgbWlnaHQgaGF2ZSBjaGFuZ2VkIHNpbmNlIHNjaGVkdWxpbmcgKGkuZS4gaW4tYnJvd3NlciBzbW9vdGggc2Nyb2xsKVxuXHRcdFx0XHRfc2Nyb2xsUG9zID0gQ29udHJvbGxlci5zY3JvbGxQb3MoKTtcblx0XHRcdFx0dmFyIGRlbHRhU2Nyb2xsID0gX3Njcm9sbFBvcyAtIG9sZFNjcm9sbFBvcztcblx0XHRcdFx0aWYgKGRlbHRhU2Nyb2xsICE9PSAwKSB7IC8vIHNjcm9sbCBwb3NpdGlvbiBjaGFuZ2VkP1xuXHRcdFx0XHRcdF9zY3JvbGxEaXJlY3Rpb24gPSAoZGVsdGFTY3JvbGwgPiAwKSA/IFNDUk9MTF9ESVJFQ1RJT05fRk9SV0FSRCA6IFNDUk9MTF9ESVJFQ1RJT05fUkVWRVJTRTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyByZXZlcnNlIG9yZGVyIG9mIHNjZW5lcyBpZiBzY3JvbGxpbmcgcmV2ZXJzZVxuXHRcdFx0XHRpZiAoX3Njcm9sbERpcmVjdGlvbiA9PT0gU0NST0xMX0RJUkVDVElPTl9SRVZFUlNFKSB7XG5cdFx0XHRcdFx0c2NlbmVzVG9VcGRhdGUucmV2ZXJzZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHVwZGF0ZSBzY2VuZXNcblx0XHRcdFx0c2NlbmVzVG9VcGRhdGUuZm9yRWFjaChmdW5jdGlvbiAoc2NlbmUsIGluZGV4KSB7XG5cdFx0XHRcdFx0bG9nKDMsIFwidXBkYXRpbmcgU2NlbmUgXCIgKyAoaW5kZXggKyAxKSArIFwiL1wiICsgc2NlbmVzVG9VcGRhdGUubGVuZ3RoICsgXCIgKFwiICsgX3NjZW5lT2JqZWN0cy5sZW5ndGggKyBcIiB0b3RhbClcIik7XG5cdFx0XHRcdFx0c2NlbmUudXBkYXRlKHRydWUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKHNjZW5lc1RvVXBkYXRlLmxlbmd0aCA9PT0gMCAmJiBfb3B0aW9ucy5sb2dsZXZlbCA+PSAzKSB7XG5cdFx0XHRcdFx0bG9nKDMsIFwidXBkYXRpbmcgMCBTY2VuZXMgKG5vdGhpbmcgYWRkZWQgdG8gY29udHJvbGxlcilcIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogSW5pdGlhbGl6ZXMgckFGIGNhbGxiYWNrXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR2YXIgZGVib3VuY2VVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRfdXBkYXRlVGltZW91dCA9IF91dGlsLnJBRih1cGRhdGVTY2VuZXMpO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGVzIENvbnRhaW5lciBjaGFuZ2VzXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR2YXIgb25DaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuXHRcdFx0bG9nKDMsIFwiZXZlbnQgZmlyZWQgY2F1c2luZyBhbiB1cGRhdGU6XCIsIGUudHlwZSk7XG5cdFx0XHRpZiAoZS50eXBlID09IFwicmVzaXplXCIpIHtcblx0XHRcdFx0Ly8gcmVzaXplXG5cdFx0XHRcdF92aWV3UG9ydFNpemUgPSBnZXRWaWV3cG9ydFNpemUoKTtcblx0XHRcdFx0X3Njcm9sbERpcmVjdGlvbiA9IFNDUk9MTF9ESVJFQ1RJT05fUEFVU0VEO1xuXHRcdFx0fVxuXHRcdFx0Ly8gc2NoZWR1bGUgdXBkYXRlXG5cdFx0XHRpZiAoX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlICE9PSB0cnVlKSB7XG5cdFx0XHRcdF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSA9IHRydWU7XG5cdFx0XHRcdGRlYm91bmNlVXBkYXRlKCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciByZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKCFfaXNEb2N1bWVudCkge1xuXHRcdFx0XHQvLyBzaW11bGF0ZSByZXNpemUgZXZlbnQuIE9ubHkgd29ya3MgZm9yIHZpZXdwb3J0IHJlbGV2YW50IHBhcmFtIChwZXJmb3JtYW5jZSlcblx0XHRcdFx0aWYgKF92aWV3UG9ydFNpemUgIT0gZ2V0Vmlld3BvcnRTaXplKCkpIHtcblx0XHRcdFx0XHR2YXIgcmVzaXplRXZlbnQ7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdHJlc2l6ZUV2ZW50ID0gbmV3IEV2ZW50KCdyZXNpemUnLCB7XG5cdFx0XHRcdFx0XHRcdGJ1YmJsZXM6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRjYW5jZWxhYmxlOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkgeyAvLyBzdHVwaWQgSUVcblx0XHRcdFx0XHRcdHJlc2l6ZUV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcblx0XHRcdFx0XHRcdHJlc2l6ZUV2ZW50LmluaXRFdmVudChcInJlc2l6ZVwiLCBmYWxzZSwgZmFsc2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRfb3B0aW9ucy5jb250YWluZXIuZGlzcGF0Y2hFdmVudChyZXNpemVFdmVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdF9zY2VuZU9iamVjdHMuZm9yRWFjaChmdW5jdGlvbiAoc2NlbmUsIGluZGV4KSB7IC8vIHJlZnJlc2ggYWxsIHNjZW5lc1xuXHRcdFx0XHRzY2VuZS5yZWZyZXNoKCk7XG5cdFx0XHR9KTtcblx0XHRcdHNjaGVkdWxlUmVmcmVzaCgpO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBTZW5kIGEgZGVidWcgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cblx0XHQgKiBwcm92aWRlZCBwdWJsaWNseSB3aXRoIF9sb2cgZm9yIHBsdWdpbnNcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IGxvZ2xldmVsIC0gVGhlIGxvZ2xldmVsIHJlcXVpcmVkIHRvIGluaXRpYXRlIG91dHB1dCBmb3IgdGhlIG1lc3NhZ2UuXG5cdFx0ICogQHBhcmFtIHsuLi5taXhlZH0gb3V0cHV0IC0gT25lIG9yIG1vcmUgdmFyaWFibGVzIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgY29uc29sZS5cblx0XHQgKi9cblx0XHR2YXIgbG9nID0gdGhpcy5fbG9nID0gZnVuY3Rpb24gKGxvZ2xldmVsLCBvdXRwdXQpIHtcblx0XHRcdGlmIChfb3B0aW9ucy5sb2dsZXZlbCA+PSBsb2dsZXZlbCkge1xuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJndW1lbnRzLCAxLCAwLCBcIihcIiArIE5BTUVTUEFDRSArIFwiKSAtPlwiKTtcblx0XHRcdFx0X3V0aWwubG9nLmFwcGx5KHdpbmRvdywgYXJndW1lbnRzKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8vIGZvciBzY2VuZXMgd2UgaGF2ZSBnZXR0ZXJzIGZvciBlYWNoIG9wdGlvbiwgYnV0IGZvciB0aGUgY29udHJvbGxlciB3ZSBkb24ndCwgc28gd2UgbmVlZCB0byBtYWtlIGl0IGF2YWlsYWJsZSBleHRlcm5hbGx5IGZvciBwbHVnaW5zXG5cdFx0dGhpcy5fb3B0aW9ucyA9IF9vcHRpb25zO1xuXG5cdFx0LyoqXG5cdFx0ICogU29ydCBzY2VuZXMgaW4gYXNjZW5kaW5nIG9yZGVyIG9mIHRoZWlyIHN0YXJ0IG9mZnNldC5cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHthcnJheX0gU2NlbmVzQXJyYXkgLSBhbiBhcnJheSBvZiBTY3JvbGxNYWdpYyBTY2VuZXMgdGhhdCBzaG91bGQgYmUgc29ydGVkXG5cdFx0ICogQHJldHVybiB7YXJyYXl9IFRoZSBzb3J0ZWQgYXJyYXkgb2YgU2NlbmVzLlxuXHRcdCAqL1xuXHRcdHZhciBzb3J0U2NlbmVzID0gZnVuY3Rpb24gKFNjZW5lc0FycmF5KSB7XG5cdFx0XHRpZiAoU2NlbmVzQXJyYXkubGVuZ3RoIDw9IDEpIHtcblx0XHRcdFx0cmV0dXJuIFNjZW5lc0FycmF5O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIHNjZW5lcyA9IFNjZW5lc0FycmF5LnNsaWNlKDApO1xuXHRcdFx0XHRzY2VuZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuXHRcdFx0XHRcdHJldHVybiBhLnNjcm9sbE9mZnNldCgpID4gYi5zY3JvbGxPZmZzZXQoKSA/IDEgOiAtMTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiBzY2VuZXM7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQgKiBwdWJsaWMgZnVuY3Rpb25zXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdCAqL1xuXG5cdFx0LyoqXG5cdFx0ICogQWRkIG9uZSBvcmUgbW9yZSBzY2VuZShzKSB0byB0aGUgY29udHJvbGxlci4gIFxuXHRcdCAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgdG8gYFNjZW5lLmFkZFRvKGNvbnRyb2xsZXIpYC5cblx0XHQgKiBAcHVibGljXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiAvLyB3aXRoIGEgcHJldmlvdXNseSBkZWZpbmVkIHNjZW5lXG5cdFx0ICogY29udHJvbGxlci5hZGRTY2VuZShzY2VuZSk7XG5cdFx0ICpcblx0XHQgKiAvLyB3aXRoIGEgbmV3bHkgY3JlYXRlZCBzY2VuZS5cblx0XHQgKiBjb250cm9sbGVyLmFkZFNjZW5lKG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7ZHVyYXRpb24gOiAwfSkpO1xuXHRcdCAqXG5cdFx0ICogLy8gYWRkaW5nIG11bHRpcGxlIHNjZW5lc1xuXHRcdCAqIGNvbnRyb2xsZXIuYWRkU2NlbmUoW3NjZW5lLCBzY2VuZTIsIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7ZHVyYXRpb24gOiAwfSldKTtcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7KFNjcm9sbE1hZ2ljLlNjZW5lfGFycmF5KX0gbmV3U2NlbmUgLSBTY3JvbGxNYWdpYyBTY2VuZSBvciBBcnJheSBvZiBTY2VuZXMgdG8gYmUgYWRkZWQgdG8gdGhlIGNvbnRyb2xsZXIuXG5cdFx0ICogQHJldHVybiB7Q29udHJvbGxlcn0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXG5cdFx0ICovXG5cdFx0dGhpcy5hZGRTY2VuZSA9IGZ1bmN0aW9uIChuZXdTY2VuZSkge1xuXHRcdFx0aWYgKF91dGlsLnR5cGUuQXJyYXkobmV3U2NlbmUpKSB7XG5cdFx0XHRcdG5ld1NjZW5lLmZvckVhY2goZnVuY3Rpb24gKHNjZW5lLCBpbmRleCkge1xuXHRcdFx0XHRcdENvbnRyb2xsZXIuYWRkU2NlbmUoc2NlbmUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSBpZiAobmV3U2NlbmUgaW5zdGFuY2VvZiBTY3JvbGxNYWdpYy5TY2VuZSkge1xuXHRcdFx0XHRpZiAobmV3U2NlbmUuY29udHJvbGxlcigpICE9PSBDb250cm9sbGVyKSB7XG5cdFx0XHRcdFx0bmV3U2NlbmUuYWRkVG8oQ29udHJvbGxlcik7XG5cdFx0XHRcdH0gZWxzZSBpZiAoX3NjZW5lT2JqZWN0cy5pbmRleE9mKG5ld1NjZW5lKSA8IDApIHtcblx0XHRcdFx0XHQvLyBuZXcgc2NlbmVcblx0XHRcdFx0XHRfc2NlbmVPYmplY3RzLnB1c2gobmV3U2NlbmUpOyAvLyBhZGQgdG8gYXJyYXlcblx0XHRcdFx0XHRfc2NlbmVPYmplY3RzID0gc29ydFNjZW5lcyhfc2NlbmVPYmplY3RzKTsgLy8gc29ydFxuXHRcdFx0XHRcdG5ld1NjZW5lLm9uKFwic2hpZnQuY29udHJvbGxlcl9zb3J0XCIsIGZ1bmN0aW9uICgpIHsgLy8gcmVzb3J0IHdoZW5ldmVyIHNjZW5lIG1vdmVzXG5cdFx0XHRcdFx0XHRfc2NlbmVPYmplY3RzID0gc29ydFNjZW5lcyhfc2NlbmVPYmplY3RzKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQvLyBpbnNlcnQgR2xvYmFsIGRlZmF1bHRzLlxuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBfb3B0aW9ucy5nbG9iYWxTY2VuZU9wdGlvbnMpIHtcblx0XHRcdFx0XHRcdGlmIChuZXdTY2VuZVtrZXldKSB7XG5cdFx0XHRcdFx0XHRcdG5ld1NjZW5lW2tleV0uY2FsbChuZXdTY2VuZSwgX29wdGlvbnMuZ2xvYmFsU2NlbmVPcHRpb25zW2tleV0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRsb2coMywgXCJhZGRpbmcgU2NlbmUgKG5vdyBcIiArIF9zY2VuZU9iamVjdHMubGVuZ3RoICsgXCIgdG90YWwpXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsb2coMSwgXCJFUlJPUjogaW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCBmb3IgJy5hZGRTY2VuZSgpJ1wiKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBSZW1vdmUgb25lIG9yZSBtb3JlIHNjZW5lKHMpIGZyb20gdGhlIGNvbnRyb2xsZXIuICBcblx0XHQgKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IHRvIGBTY2VuZS5yZW1vdmUoKWAuXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogLy8gcmVtb3ZlIGEgc2NlbmUgZnJvbSB0aGUgY29udHJvbGxlclxuXHRcdCAqIGNvbnRyb2xsZXIucmVtb3ZlU2NlbmUoc2NlbmUpO1xuXHRcdCAqXG5cdFx0ICogLy8gcmVtb3ZlIG11bHRpcGxlIHNjZW5lcyBmcm9tIHRoZSBjb250cm9sbGVyXG5cdFx0ICogY29udHJvbGxlci5yZW1vdmVTY2VuZShbc2NlbmUsIHNjZW5lMiwgc2NlbmUzXSk7XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyhTY3JvbGxNYWdpYy5TY2VuZXxhcnJheSl9IFNjZW5lIC0gU2Nyb2xsTWFnaWMgU2NlbmUgb3IgQXJyYXkgb2YgU2NlbmVzIHRvIGJlIHJlbW92ZWQgZnJvbSB0aGUgY29udHJvbGxlci5cblx0XHQgKiBAcmV0dXJucyB7Q29udHJvbGxlcn0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXG5cdFx0ICovXG5cdFx0dGhpcy5yZW1vdmVTY2VuZSA9IGZ1bmN0aW9uIChTY2VuZSkge1xuXHRcdFx0aWYgKF91dGlsLnR5cGUuQXJyYXkoU2NlbmUpKSB7XG5cdFx0XHRcdFNjZW5lLmZvckVhY2goZnVuY3Rpb24gKHNjZW5lLCBpbmRleCkge1xuXHRcdFx0XHRcdENvbnRyb2xsZXIucmVtb3ZlU2NlbmUoc2NlbmUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBpbmRleCA9IF9zY2VuZU9iamVjdHMuaW5kZXhPZihTY2VuZSk7XG5cdFx0XHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRcdFx0U2NlbmUub2ZmKFwic2hpZnQuY29udHJvbGxlcl9zb3J0XCIpO1xuXHRcdFx0XHRcdF9zY2VuZU9iamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHRsb2coMywgXCJyZW1vdmluZyBTY2VuZSAobm93IFwiICsgX3NjZW5lT2JqZWN0cy5sZW5ndGggKyBcIiBsZWZ0KVwiKTtcblx0XHRcdFx0XHRTY2VuZS5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIENvbnRyb2xsZXI7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFVwZGF0ZSBvbmUgb3JlIG1vcmUgc2NlbmUocykgYWNjb3JkaW5nIHRvIHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIGNvbnRhaW5lci4gIFxuXHRcdCAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgdG8gYFNjZW5lLnVwZGF0ZSgpYC4gIFxuXHRcdCAqIFRoZSB1cGRhdGUgbWV0aG9kIGNhbGN1bGF0ZXMgdGhlIHNjZW5lJ3Mgc3RhcnQgYW5kIGVuZCBwb3NpdGlvbiAoYmFzZWQgb24gdGhlIHRyaWdnZXIgZWxlbWVudCwgdHJpZ2dlciBob29rLCBkdXJhdGlvbiBhbmQgb2Zmc2V0KSBhbmQgY2hlY2tzIGl0IGFnYWluc3QgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBjb250YWluZXIuICBcblx0XHQgKiBJdCB0aGVuIHVwZGF0ZXMgdGhlIGN1cnJlbnQgc2NlbmUgc3RhdGUgYWNjb3JkaW5nbHkgKG9yIGRvZXMgbm90aGluZywgaWYgdGhlIHN0YXRlIGlzIGFscmVhZHkgY29ycmVjdCkg4oCTIFBpbnMgd2lsbCBiZSBzZXQgdG8gdGhlaXIgY29ycmVjdCBwb3NpdGlvbiBhbmQgdHdlZW5zIHdpbGwgYmUgdXBkYXRlZCB0byB0aGVpciBjb3JyZWN0IHByb2dyZXNzLiAgXG5cdFx0ICogXyoqTm90ZToqKiBUaGlzIG1ldGhvZCBnZXRzIGNhbGxlZCBjb25zdGFudGx5IHdoZW5ldmVyIENvbnRyb2xsZXIgZGV0ZWN0cyBhIGNoYW5nZS4gVGhlIG9ubHkgYXBwbGljYXRpb24gZm9yIHlvdSBpcyBpZiB5b3UgY2hhbmdlIHNvbWV0aGluZyBvdXRzaWRlIG9mIHRoZSByZWFsbSBvZiBTY3JvbGxNYWdpYywgbGlrZSBtb3ZpbmcgdGhlIHRyaWdnZXIgb3IgY2hhbmdpbmcgdHdlZW4gcGFyYW1ldGVycy5fXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogLy8gdXBkYXRlIGEgc3BlY2lmaWMgc2NlbmUgb24gbmV4dCBjeWNsZVxuXHRcdCAqIGNvbnRyb2xsZXIudXBkYXRlU2NlbmUoc2NlbmUpO1xuXHRcdCAqXG5cdFx0ICogLy8gdXBkYXRlIGEgc3BlY2lmaWMgc2NlbmUgaW1tZWRpYXRlbHlcblx0XHQgKiBjb250cm9sbGVyLnVwZGF0ZVNjZW5lKHNjZW5lLCB0cnVlKTtcblx0XHQgKlxuXHRcdCAqIC8vIHVwZGF0ZSBtdWx0aXBsZSBzY2VuZXMgc2NlbmUgb24gbmV4dCBjeWNsZVxuXHRcdCAqIGNvbnRyb2xsZXIudXBkYXRlU2NlbmUoW3NjZW5lMSwgc2NlbmUyLCBzY2VuZTNdKTtcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7U2Nyb2xsTWFnaWMuU2NlbmV9IFNjZW5lIC0gU2Nyb2xsTWFnaWMgU2NlbmUgb3IgQXJyYXkgb2YgU2NlbmVzIHRoYXQgaXMvYXJlIHN1cHBvc2VkIHRvIGJlIHVwZGF0ZWQuXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbaW1tZWRpYXRlbHk9ZmFsc2VdIC0gSWYgYHRydWVgIHRoZSB1cGRhdGUgd2lsbCBiZSBpbnN0YW50LCBpZiBgZmFsc2VgIGl0IHdpbGwgd2FpdCB1bnRpbCBuZXh0IHVwZGF0ZSBjeWNsZS4gIFxuXHRcdCBUaGlzIGlzIHVzZWZ1bCB3aGVuIGNoYW5naW5nIG11bHRpcGxlIHByb3BlcnRpZXMgb2YgdGhlIHNjZW5lIC0gdGhpcyB3YXkgaXQgd2lsbCBvbmx5IGJlIHVwZGF0ZWQgb25jZSBhbGwgbmV3IHByb3BlcnRpZXMgYXJlIHNldCAodXBkYXRlU2NlbmVzKS5cblx0XHQgKiBAcmV0dXJuIHtDb250cm9sbGVyfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cblx0XHQgKi9cblx0XHR0aGlzLnVwZGF0ZVNjZW5lID0gZnVuY3Rpb24gKFNjZW5lLCBpbW1lZGlhdGVseSkge1xuXHRcdFx0aWYgKF91dGlsLnR5cGUuQXJyYXkoU2NlbmUpKSB7XG5cdFx0XHRcdFNjZW5lLmZvckVhY2goZnVuY3Rpb24gKHNjZW5lLCBpbmRleCkge1xuXHRcdFx0XHRcdENvbnRyb2xsZXIudXBkYXRlU2NlbmUoc2NlbmUsIGltbWVkaWF0ZWx5KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoaW1tZWRpYXRlbHkpIHtcblx0XHRcdFx0XHRTY2VuZS51cGRhdGUodHJ1ZSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlICE9PSB0cnVlICYmIFNjZW5lIGluc3RhbmNlb2YgU2Nyb2xsTWFnaWMuU2NlbmUpIHsgLy8gaWYgX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlIGlzIHRydWUsIGFsbCBjb25uZWN0ZWQgc2NlbmVzIGFyZSBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgdXBkYXRlXG5cdFx0XHRcdFx0Ly8gcHJlcCBhcnJheSBmb3IgbmV4dCB1cGRhdGUgY3ljbGVcblx0XHRcdFx0XHRfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgPSBfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgfHwgW107XG5cdFx0XHRcdFx0aWYgKF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZS5pbmRleE9mKFNjZW5lKSA9PSAtMSkge1xuXHRcdFx0XHRcdFx0X3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlLnB1c2goU2NlbmUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgPSBzb3J0U2NlbmVzKF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSk7IC8vIHNvcnRcblx0XHRcdFx0XHRkZWJvdW5jZVVwZGF0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogVXBkYXRlcyB0aGUgY29udHJvbGxlciBwYXJhbXMgYW5kIGNhbGxzIHVwZGF0ZVNjZW5lIG9uIGV2ZXJ5IHNjZW5lLCB0aGF0IGlzIGF0dGFjaGVkIHRvIHRoZSBjb250cm9sbGVyLiAgXG5cdFx0ICogU2VlIGBDb250cm9sbGVyLnVwZGF0ZVNjZW5lKClgIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgdGhpcyBtZWFucy4gIFxuXHRcdCAqIEluIG1vc3QgY2FzZXMgeW91IHdpbGwgbm90IG5lZWQgdGhpcyBmdW5jdGlvbiwgYXMgaXQgaXMgY2FsbGVkIGNvbnN0YW50bHksIHdoZW5ldmVyIFNjcm9sbE1hZ2ljIGRldGVjdHMgYSBzdGF0ZSBjaGFuZ2UgZXZlbnQsIGxpa2UgcmVzaXplIG9yIHNjcm9sbC4gIFxuXHRcdCAqIFRoZSBvbmx5IGFwcGxpY2F0aW9uIGZvciB0aGlzIG1ldGhvZCBpcyB3aGVuIFNjcm9sbE1hZ2ljIGZhaWxzIHRvIGRldGVjdCB0aGVzZSBldmVudHMuICBcblx0XHQgKiBPbmUgYXBwbGljYXRpb24gaXMgd2l0aCBzb21lIGV4dGVybmFsIHNjcm9sbCBsaWJyYXJpZXMgKGxpa2UgaVNjcm9sbCkgdGhhdCBtb3ZlIGFuIGludGVybmFsIGNvbnRhaW5lciB0byBhIG5lZ2F0aXZlIG9mZnNldCBpbnN0ZWFkIG9mIGFjdHVhbGx5IHNjcm9sbGluZy4gSW4gdGhpcyBjYXNlIHRoZSB1cGRhdGUgb24gdGhlIGNvbnRyb2xsZXIgbmVlZHMgdG8gYmUgY2FsbGVkIHdoZW5ldmVyIHRoZSBjaGlsZCBjb250YWluZXIncyBwb3NpdGlvbiBjaGFuZ2VzLlxuXHRcdCAqIEZvciB0aGlzIGNhc2UgdGhlcmUgd2lsbCBhbHNvIGJlIHRoZSBuZWVkIHRvIHByb3ZpZGUgYSBjdXN0b20gZnVuY3Rpb24gdG8gY2FsY3VsYXRlIHRoZSBjb3JyZWN0IHNjcm9sbCBwb3NpdGlvbi4gU2VlIGBDb250cm9sbGVyLnNjcm9sbFBvcygpYCBmb3IgZGV0YWlscy5cblx0XHQgKiBAcHVibGljXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiAvLyB1cGRhdGUgdGhlIGNvbnRyb2xsZXIgb24gbmV4dCBjeWNsZSAoc2F2ZXMgcGVyZm9ybWFuY2UgZHVlIHRvIGVsaW1pbmF0aW9uIG9mIHJlZHVuZGFudCB1cGRhdGVzKVxuXHRcdCAqIGNvbnRyb2xsZXIudXBkYXRlKCk7XG5cdFx0ICpcblx0XHQgKiAvLyB1cGRhdGUgdGhlIGNvbnRyb2xsZXIgaW1tZWRpYXRlbHlcblx0XHQgKiBjb250cm9sbGVyLnVwZGF0ZSh0cnVlKTtcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ltbWVkaWF0ZWx5PWZhbHNlXSAtIElmIGB0cnVlYCB0aGUgdXBkYXRlIHdpbGwgYmUgaW5zdGFudCwgaWYgYGZhbHNlYCBpdCB3aWxsIHdhaXQgdW50aWwgbmV4dCB1cGRhdGUgY3ljbGUgKGJldHRlciBwZXJmb3JtYW5jZSlcblx0XHQgKiBAcmV0dXJuIHtDb250cm9sbGVyfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cblx0XHQgKi9cblx0XHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uIChpbW1lZGlhdGVseSkge1xuXHRcdFx0b25DaGFuZ2Uoe1xuXHRcdFx0XHR0eXBlOiBcInJlc2l6ZVwiXG5cdFx0XHR9KTsgLy8gd2lsbCB1cGRhdGUgc2l6ZSBhbmQgc2V0IF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSB0byB0cnVlXG5cdFx0XHRpZiAoaW1tZWRpYXRlbHkpIHtcblx0XHRcdFx0dXBkYXRlU2NlbmVzKCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogU2Nyb2xsIHRvIGEgbnVtZXJpYyBzY3JvbGwgb2Zmc2V0LCBhIERPTSBlbGVtZW50LCB0aGUgc3RhcnQgb2YgYSBzY2VuZSBvciBwcm92aWRlIGFuIGFsdGVybmF0ZSBtZXRob2QgZm9yIHNjcm9sbGluZy4gIFxuXHRcdCAqIEZvciB2ZXJ0aWNhbCBjb250cm9sbGVycyBpdCB3aWxsIGNoYW5nZSB0aGUgdG9wIHNjcm9sbCBvZmZzZXQgYW5kIGZvciBob3Jpem9udGFsIGFwcGxpY2F0aW9ucyBpdCB3aWxsIGNoYW5nZSB0aGUgbGVmdCBvZmZzZXQuXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqXG5cdFx0ICogQHNpbmNlIDEuMS4wXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiAvLyBzY3JvbGwgdG8gYW4gb2Zmc2V0IG9mIDEwMFxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oMTAwKTtcblx0XHQgKlxuXHRcdCAqIC8vIHNjcm9sbCB0byBhIERPTSBlbGVtZW50XG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbyhcIiNhbmNob3JcIik7XG5cdFx0ICpcblx0XHQgKiAvLyBzY3JvbGwgdG8gdGhlIGJlZ2lubmluZyBvZiBhIHNjZW5lXG5cdFx0ICogdmFyIHNjZW5lID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtvZmZzZXQ6IDIwMH0pO1xuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oc2NlbmUpO1xuXHRcdCAqXG5cdFx0ICogLy8gZGVmaW5lIGEgbmV3IHNjcm9sbCBwb3NpdGlvbiBtb2RpZmljYXRpb24gZnVuY3Rpb24gKGpRdWVyeSBhbmltYXRlIGluc3RlYWQgb2YganVtcClcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKGZ1bmN0aW9uIChuZXdTY3JvbGxQb3MpIHtcblx0XHQgKlx0JChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBuZXdTY3JvbGxQb3N9KTtcblx0XHQgKiB9KTtcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKDEwMCk7IC8vIGNhbGwgYXMgdXN1YWwsIGJ1dCB0aGUgbmV3IGZ1bmN0aW9uIHdpbGwgYmUgdXNlZCBpbnN0ZWFkXG5cdFx0ICpcblx0XHQgKiAvLyBkZWZpbmUgYSBuZXcgc2Nyb2xsIGZ1bmN0aW9uIHdpdGggYW4gYWRkaXRpb25hbCBwYXJhbWV0ZXJcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKGZ1bmN0aW9uIChuZXdTY3JvbGxQb3MsIG1lc3NhZ2UpIHtcblx0XHQgKiAgY29uc29sZS5sb2cobWVzc2FnZSk7XG5cdFx0ICpcdCQodGhpcykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBuZXdTY3JvbGxQb3N9KTtcblx0XHQgKiB9KTtcblx0XHQgKiAvLyBjYWxsIGFzIHVzdWFsLCBidXQgc3VwcGx5IGFuIGV4dHJhIHBhcmFtZXRlciB0byB0aGUgZGVmaW5lZCBjdXN0b20gZnVuY3Rpb25cblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKDEwMCwgXCJteSBtZXNzYWdlXCIpO1xuXHRcdCAqXG5cdFx0ICogLy8gZGVmaW5lIGEgbmV3IHNjcm9sbCBmdW5jdGlvbiB3aXRoIGFuIGFkZGl0aW9uYWwgcGFyYW1ldGVyIGNvbnRhaW5pbmcgbXVsdGlwbGUgdmFyaWFibGVzXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbyhmdW5jdGlvbiAobmV3U2Nyb2xsUG9zLCBvcHRpb25zKSB7XG5cdFx0ICogIHNvbWVHbG9iYWxWYXIgPSBvcHRpb25zLmEgKyBvcHRpb25zLmI7XG5cdFx0ICpcdCQodGhpcykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBuZXdTY3JvbGxQb3N9KTtcblx0XHQgKiB9KTtcblx0XHQgKiAvLyBjYWxsIGFzIHVzdWFsLCBidXQgc3VwcGx5IGFuIGV4dHJhIHBhcmFtZXRlciBjb250YWluaW5nIG11bHRpcGxlIG9wdGlvbnNcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKDEwMCwge2E6IDEsIGI6IDJ9KTtcblx0XHQgKlxuXHRcdCAqIC8vIGRlZmluZSBhIG5ldyBzY3JvbGwgZnVuY3Rpb24gd2l0aCBhIGNhbGxiYWNrIHN1cHBsaWVkIGFzIGFuIGFkZGl0aW9uYWwgcGFyYW1ldGVyXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbyhmdW5jdGlvbiAobmV3U2Nyb2xsUG9zLCBjYWxsYmFjaykge1xuXHRcdCAqXHQkKHRoaXMpLmFuaW1hdGUoe3Njcm9sbFRvcDogbmV3U2Nyb2xsUG9zfSwgNDAwLCBcInN3aW5nXCIsIGNhbGxiYWNrKTtcblx0XHQgKiB9KTtcblx0XHQgKiAvLyBjYWxsIGFzIHVzdWFsLCBidXQgc3VwcGx5IGFuIGV4dHJhIHBhcmFtZXRlciwgd2hpY2ggaXMgdXNlZCBhcyBhIGNhbGxiYWNrIGluIHRoZSBwcmV2aW91c2x5IGRlZmluZWQgY3VzdG9tIHNjcm9sbCBmdW5jdGlvblxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oMTAwLCBmdW5jdGlvbigpIHtcblx0XHQgKlx0Y29uc29sZS5sb2coXCJzY3JvbGwgaGFzIGZpbmlzaGVkLlwiKTtcblx0XHQgKiB9KTtcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bWl4ZWR9IHNjcm9sbFRhcmdldCAtIFRoZSBzdXBwbGllZCBhcmd1bWVudCBjYW4gYmUgb25lIG9mIHRoZXNlIHR5cGVzOlxuXHRcdCAqIDEuIGBudW1iZXJgIC0+IFRoZSBjb250YWluZXIgd2lsbCBzY3JvbGwgdG8gdGhpcyBuZXcgc2Nyb2xsIG9mZnNldC5cblx0XHQgKiAyLiBgc3RyaW5nYCBvciBgb2JqZWN0YCAtPiBDYW4gYmUgYSBzZWxlY3RvciBvciBhIERPTSBvYmplY3QuICBcblx0XHQgKiAgVGhlIGNvbnRhaW5lciB3aWxsIHNjcm9sbCB0byB0aGUgcG9zaXRpb24gb2YgdGhpcyBlbGVtZW50LlxuXHRcdCAqIDMuIGBTY3JvbGxNYWdpYyBTY2VuZWAgLT4gVGhlIGNvbnRhaW5lciB3aWxsIHNjcm9sbCB0byB0aGUgc3RhcnQgb2YgdGhpcyBzY2VuZS5cblx0XHQgKiA0LiBgZnVuY3Rpb25gIC0+IFRoaXMgZnVuY3Rpb24gd2lsbCBiZSB1c2VkIGZvciBmdXR1cmUgc2Nyb2xsIHBvc2l0aW9uIG1vZGlmaWNhdGlvbnMuICBcblx0XHQgKiAgVGhpcyBwcm92aWRlcyBhIHdheSBmb3IgeW91IHRvIGNoYW5nZSB0aGUgYmVoYXZpb3VyIG9mIHNjcm9sbGluZyBhbmQgYWRkaW5nIG5ldyBiZWhhdmlvdXIgbGlrZSBhbmltYXRpb24uIFRoZSBmdW5jdGlvbiByZWNlaXZlcyB0aGUgbmV3IHNjcm9sbCBwb3NpdGlvbiBhcyBhIHBhcmFtZXRlciBhbmQgYSByZWZlcmVuY2UgdG8gdGhlIGNvbnRhaW5lciBlbGVtZW50IHVzaW5nIGB0aGlzYC4gIFxuXHRcdCAqICBJdCBtYXkgYWxzbyBvcHRpb25hbGx5IHJlY2VpdmUgYW4gb3B0aW9uYWwgYWRkaXRpb25hbCBwYXJhbWV0ZXIgKHNlZSBiZWxvdykgIFxuXHRcdCAqICBfKipOT1RFOioqICBcblx0XHQgKiAgQWxsIG90aGVyIG9wdGlvbnMgd2lsbCBzdGlsbCB3b3JrIGFzIGV4cGVjdGVkLCB1c2luZyB0aGUgbmV3IGZ1bmN0aW9uIHRvIHNjcm9sbC5fXG5cdFx0ICogQHBhcmFtIHttaXhlZH0gW2FkZGl0aW9uYWxQYXJhbWV0ZXJdIC0gSWYgYSBjdXN0b20gc2Nyb2xsIGZ1bmN0aW9uIHdhcyBkZWZpbmVkIChzZWUgYWJvdmUgNC4pLCB5b3UgbWF5IHdhbnQgdG8gc3VwcGx5IGFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBpdCwgd2hlbiBjYWxsaW5nIGl0LiBZb3UgY2FuIGRvIHRoaXMgdXNpbmcgdGhpcyBwYXJhbWV0ZXIg4oCTIHNlZSBleGFtcGxlcyBmb3IgZGV0YWlscy4gUGxlYXNlIG5vdGUsIHRoYXQgdGhpcyBwYXJhbWV0ZXIgd2lsbCBoYXZlIG5vIGVmZmVjdCwgaWYgeW91IHVzZSB0aGUgZGVmYXVsdCBzY3JvbGxpbmcgZnVuY3Rpb24uXG5cdFx0ICogQHJldHVybnMge0NvbnRyb2xsZXJ9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2Nyb2xsVG8gPSBmdW5jdGlvbiAoc2Nyb2xsVGFyZ2V0LCBhZGRpdGlvbmFsUGFyYW1ldGVyKSB7XG5cdFx0XHRpZiAoX3V0aWwudHlwZS5OdW1iZXIoc2Nyb2xsVGFyZ2V0KSkgeyAvLyBleGNlY3V0ZVxuXHRcdFx0XHRzZXRTY3JvbGxQb3MuY2FsbChfb3B0aW9ucy5jb250YWluZXIsIHNjcm9sbFRhcmdldCwgYWRkaXRpb25hbFBhcmFtZXRlcik7XG5cdFx0XHR9IGVsc2UgaWYgKHNjcm9sbFRhcmdldCBpbnN0YW5jZW9mIFNjcm9sbE1hZ2ljLlNjZW5lKSB7IC8vIHNjcm9sbCB0byBzY2VuZVxuXHRcdFx0XHRpZiAoc2Nyb2xsVGFyZ2V0LmNvbnRyb2xsZXIoKSA9PT0gQ29udHJvbGxlcikgeyAvLyBjaGVjayBpZiB0aGUgY29udHJvbGxlciBpcyBhc3NvY2lhdGVkIHdpdGggdGhpcyBzY2VuZVxuXHRcdFx0XHRcdENvbnRyb2xsZXIuc2Nyb2xsVG8oc2Nyb2xsVGFyZ2V0LnNjcm9sbE9mZnNldCgpLCBhZGRpdGlvbmFsUGFyYW1ldGVyKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsb2coMiwgXCJzY3JvbGxUbygpOiBUaGUgc3VwcGxpZWQgc2NlbmUgZG9lcyBub3QgYmVsb25nIHRvIHRoaXMgY29udHJvbGxlci4gU2Nyb2xsIGNhbmNlbGxlZC5cIiwgc2Nyb2xsVGFyZ2V0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChfdXRpbC50eXBlLkZ1bmN0aW9uKHNjcm9sbFRhcmdldCkpIHsgLy8gYXNzaWduIG5ldyBzY3JvbGwgZnVuY3Rpb25cblx0XHRcdFx0c2V0U2Nyb2xsUG9zID0gc2Nyb2xsVGFyZ2V0O1xuXHRcdFx0fSBlbHNlIHsgLy8gc2Nyb2xsIHRvIGVsZW1lbnRcblx0XHRcdFx0dmFyIGVsZW0gPSBfdXRpbC5nZXQuZWxlbWVudHMoc2Nyb2xsVGFyZ2V0KVswXTtcblx0XHRcdFx0aWYgKGVsZW0pIHtcblx0XHRcdFx0XHQvLyBpZiBwYXJlbnQgaXMgcGluIHNwYWNlciwgdXNlIHNwYWNlciBwb3NpdGlvbiBpbnN0ZWFkIHNvIGNvcnJlY3Qgc3RhcnQgcG9zaXRpb24gaXMgcmV0dXJuZWQgZm9yIHBpbm5lZCBlbGVtZW50cy5cblx0XHRcdFx0XHR3aGlsZSAoZWxlbS5wYXJlbnROb2RlLmhhc0F0dHJpYnV0ZShQSU5fU1BBQ0VSX0FUVFJJQlVURSkpIHtcblx0XHRcdFx0XHRcdGVsZW0gPSBlbGVtLnBhcmVudE5vZGU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyXG5cdFx0XHRcdFx0cGFyYW0gPSBfb3B0aW9ucy52ZXJ0aWNhbCA/IFwidG9wXCIgOiBcImxlZnRcIixcblx0XHRcdFx0XHRcdC8vIHdoaWNoIHBhcmFtIGlzIG9mIGludGVyZXN0ID9cblx0XHRcdFx0XHRcdGNvbnRhaW5lck9mZnNldCA9IF91dGlsLmdldC5vZmZzZXQoX29wdGlvbnMuY29udGFpbmVyKSxcblx0XHRcdFx0XHRcdC8vIGNvbnRhaW5lciBwb3NpdGlvbiBpcyBuZWVkZWQgYmVjYXVzZSBlbGVtZW50IG9mZnNldCBpcyByZXR1cm5lZCBpbiByZWxhdGlvbiB0byBkb2N1bWVudCwgbm90IGluIHJlbGF0aW9uIHRvIGNvbnRhaW5lci5cblx0XHRcdFx0XHRcdGVsZW1lbnRPZmZzZXQgPSBfdXRpbC5nZXQub2Zmc2V0KGVsZW0pO1xuXG5cdFx0XHRcdFx0aWYgKCFfaXNEb2N1bWVudCkgeyAvLyBjb250YWluZXIgaXMgbm90IHRoZSBkb2N1bWVudCByb290LCBzbyBzdWJzdHJhY3Qgc2Nyb2xsIFBvc2l0aW9uIHRvIGdldCBjb3JyZWN0IHRyaWdnZXIgZWxlbWVudCBwb3NpdGlvbiByZWxhdGl2ZSB0byBzY3JvbGxjb250ZW50XG5cdFx0XHRcdFx0XHRjb250YWluZXJPZmZzZXRbcGFyYW1dIC09IENvbnRyb2xsZXIuc2Nyb2xsUG9zKCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Q29udHJvbGxlci5zY3JvbGxUbyhlbGVtZW50T2Zmc2V0W3BhcmFtXSAtIGNvbnRhaW5lck9mZnNldFtwYXJhbV0sIGFkZGl0aW9uYWxQYXJhbWV0ZXIpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxvZygyLCBcInNjcm9sbFRvKCk6IFRoZSBzdXBwbGllZCBhcmd1bWVudCBpcyBpbnZhbGlkLiBTY3JvbGwgY2FuY2VsbGVkLlwiLCBzY3JvbGxUYXJnZXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogKipHZXQqKiB0aGUgY3VycmVudCBzY3JvbGxQb3NpdGlvbiBvciAqKlNldCoqIGEgbmV3IG1ldGhvZCB0byBjYWxjdWxhdGUgaXQuICBcblx0XHQgKiAtPiAqKkdFVCoqOlxuXHRcdCAqIFdoZW4gdXNlZCBhcyBhIGdldHRlciB0aGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbi4gIFxuXHRcdCAqIFRvIGdldCBhIGNhY2hlZCB2YWx1ZSB1c2UgQ29udHJvbGxlci5pbmZvKFwic2Nyb2xsUG9zXCIpLCB3aGljaCB3aWxsIGJlIHVwZGF0ZWQgaW4gdGhlIHVwZGF0ZSBjeWNsZS4gIFxuXHRcdCAqIEZvciB2ZXJ0aWNhbCBjb250cm9sbGVycyBpdCB3aWxsIHJldHVybiB0aGUgdG9wIHNjcm9sbCBvZmZzZXQgYW5kIGZvciBob3Jpem9udGFsIGFwcGxpY2F0aW9ucyBpdCB3aWxsIHJldHVybiB0aGUgbGVmdCBvZmZzZXQuXG5cdFx0ICpcblx0XHQgKiAtPiAqKlNFVCoqOlxuXHRcdCAqIFdoZW4gdXNlZCBhcyBhIHNldHRlciB0aGlzIG1ldGhvZCBwcm9kZXMgYSB3YXkgdG8gcGVybWFuZW50bHkgb3ZlcndyaXRlIHRoZSBjb250cm9sbGVyJ3Mgc2Nyb2xsIHBvc2l0aW9uIGNhbGN1bGF0aW9uLiAgXG5cdFx0ICogQSB0eXBpY2FsIHVzZWNhc2UgaXMgd2hlbiB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlzIG5vdCByZWZsZWN0ZWQgYnkgdGhlIGNvbnRhaW5lcnMgc2Nyb2xsVG9wIG9yIHNjcm9sbExlZnQgdmFsdWVzLCBidXQgZm9yIGV4YW1wbGUgYnkgdGhlIGlubmVyIG9mZnNldCBvZiBhIGNoaWxkIGNvbnRhaW5lci4gIFxuXHRcdCAqIE1vdmluZyBhIGNoaWxkIGNvbnRhaW5lciBpbnNpZGUgYSBwYXJlbnQgaXMgYSBjb21tb25seSB1c2VkIG1ldGhvZCBmb3Igc2V2ZXJhbCBzY3JvbGxpbmcgZnJhbWV3b3JrcywgaW5jbHVkaW5nIGlTY3JvbGwuICBcblx0XHQgKiBCeSBwcm92aWRpbmcgYW4gYWx0ZXJuYXRlIGNhbGN1bGF0aW9uIGZ1bmN0aW9uIHlvdSBjYW4gbWFrZSBzdXJlIFNjcm9sbE1hZ2ljIHJlY2VpdmVzIHRoZSBjb3JyZWN0IHNjcm9sbCBwb3NpdGlvbi4gIFxuXHRcdCAqIFBsZWFzZSBhbHNvIGJlYXIgaW4gbWluZCB0aGF0IHlvdXIgZnVuY3Rpb24gc2hvdWxkIHJldHVybiB5IHZhbHVlcyBmb3IgdmVydGljYWwgc2Nyb2xscyBhbiB4IGZvciBob3Jpem9udGFscy5cblx0XHQgKlxuXHRcdCAqIFRvIGNoYW5nZSB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gcGxlYXNlIHVzZSBgQ29udHJvbGxlci5zY3JvbGxUbygpYC5cblx0XHQgKiBAcHVibGljXG5cdFx0ICpcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCBzY3JvbGwgUG9zaXRpb25cblx0XHQgKiB2YXIgc2Nyb2xsUG9zID0gY29udHJvbGxlci5zY3JvbGxQb3MoKTtcblx0XHQgKlxuXHRcdCAqIC8vIHNldCBhIG5ldyBzY3JvbGwgcG9zaXRpb24gY2FsY3VsYXRpb24gbWV0aG9kXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxQb3MoZnVuY3Rpb24gKCkge1xuXHRcdCAqXHRyZXR1cm4gdGhpcy5pbmZvKFwidmVydGljYWxcIikgPyAtbXljaGlsZGNvbnRhaW5lci55IDogLW15Y2hpbGRjb250YWluZXIueFxuXHRcdCAqIH0pO1xuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gW3Njcm9sbFBvc01ldGhvZF0gLSBUaGUgZnVuY3Rpb24gdG8gYmUgdXNlZCBmb3IgdGhlIHNjcm9sbCBwb3NpdGlvbiBjYWxjdWxhdGlvbiBvZiB0aGUgY29udGFpbmVyLlxuXHRcdCAqIEByZXR1cm5zIHsobnVtYmVyfENvbnRyb2xsZXIpfSBDdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBvciBwYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cblx0XHQgKi9cblx0XHR0aGlzLnNjcm9sbFBvcyA9IGZ1bmN0aW9uIChzY3JvbGxQb3NNZXRob2QpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyAvLyBnZXRcblx0XHRcdFx0cmV0dXJuIGdldFNjcm9sbFBvcy5jYWxsKENvbnRyb2xsZXIpO1xuXHRcdFx0fSBlbHNlIHsgLy8gc2V0XG5cdFx0XHRcdGlmIChfdXRpbC50eXBlLkZ1bmN0aW9uKHNjcm9sbFBvc01ldGhvZCkpIHtcblx0XHRcdFx0XHRnZXRTY3JvbGxQb3MgPSBzY3JvbGxQb3NNZXRob2Q7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bG9nKDIsIFwiUHJvdmlkZWQgdmFsdWUgZm9yIG1ldGhvZCAnc2Nyb2xsUG9zJyBpcyBub3QgYSBmdW5jdGlvbi4gVG8gY2hhbmdlIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiB1c2UgJ3Njcm9sbFRvKCknLlwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIENvbnRyb2xsZXI7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqICoqR2V0KiogYWxsIGluZm9zIG9yIG9uZSBpbiBwYXJ0aWN1bGFyIGFib3V0IHRoZSBjb250cm9sbGVyLlxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIC8vIHJldHVybnMgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIChudW1iZXIpXG5cdFx0ICogdmFyIHNjcm9sbFBvcyA9IGNvbnRyb2xsZXIuaW5mbyhcInNjcm9sbFBvc1wiKTtcblx0XHQgKlxuXHRcdCAqIC8vIHJldHVybnMgYWxsIGluZm9zIGFzIGFuIG9iamVjdFxuXHRcdCAqIHZhciBpbmZvcyA9IGNvbnRyb2xsZXIuaW5mbygpO1xuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFthYm91dF0gLSBJZiBwYXNzZWQgb25seSB0aGlzIGluZm8gd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkIG9mIGFuIG9iamVjdCBjb250YWluaW5nIGFsbC4gIFxuXHRcdCBWYWxpZCBvcHRpb25zIGFyZTpcblx0XHQgKiogYFwic2l6ZVwiYCA9PiB0aGUgY3VycmVudCB2aWV3cG9ydCBzaXplIG9mIHRoZSBjb250YWluZXJcblx0XHQgKiogYFwidmVydGljYWxcImAgPT4gdHJ1ZSBpZiB2ZXJ0aWNhbCBzY3JvbGxpbmcsIG90aGVyd2lzZSBmYWxzZVxuXHRcdCAqKiBgXCJzY3JvbGxQb3NcImAgPT4gdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXG5cdFx0ICoqIGBcInNjcm9sbERpcmVjdGlvblwiYCA9PiB0aGUgbGFzdCBrbm93biBkaXJlY3Rpb24gb2YgdGhlIHNjcm9sbFxuXHRcdCAqKiBgXCJjb250YWluZXJcImAgPT4gdGhlIGNvbnRhaW5lciBlbGVtZW50XG5cdFx0ICoqIGBcImlzRG9jdW1lbnRcImAgPT4gdHJ1ZSBpZiBjb250YWluZXIgZWxlbWVudCBpcyB0aGUgZG9jdW1lbnQuXG5cdFx0ICogQHJldHVybnMgeyhtaXhlZHxvYmplY3QpfSBUaGUgcmVxdWVzdGVkIGluZm8ocykuXG5cdFx0ICovXG5cdFx0dGhpcy5pbmZvID0gZnVuY3Rpb24gKGFib3V0KSB7XG5cdFx0XHR2YXIgdmFsdWVzID0ge1xuXHRcdFx0XHRzaXplOiBfdmlld1BvcnRTaXplLFxuXHRcdFx0XHQvLyBjb250YWlucyBoZWlnaHQgb3Igd2lkdGggKGluIHJlZ2FyZCB0byBvcmllbnRhdGlvbik7XG5cdFx0XHRcdHZlcnRpY2FsOiBfb3B0aW9ucy52ZXJ0aWNhbCxcblx0XHRcdFx0c2Nyb2xsUG9zOiBfc2Nyb2xsUG9zLFxuXHRcdFx0XHRzY3JvbGxEaXJlY3Rpb246IF9zY3JvbGxEaXJlY3Rpb24sXG5cdFx0XHRcdGNvbnRhaW5lcjogX29wdGlvbnMuY29udGFpbmVyLFxuXHRcdFx0XHRpc0RvY3VtZW50OiBfaXNEb2N1bWVudFxuXHRcdFx0fTtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyAvLyBnZXQgYWxsIGFzIGFuIG9iamVjdFxuXHRcdFx0XHRyZXR1cm4gdmFsdWVzO1xuXHRcdFx0fSBlbHNlIGlmICh2YWx1ZXNbYWJvdXRdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlc1thYm91dF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsb2coMSwgXCJFUlJPUjogb3B0aW9uIFxcXCJcIiArIGFib3V0ICsgXCJcXFwiIGlzIG5vdCBhdmFpbGFibGVcIik7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSBjdXJyZW50IGxvZ2xldmVsIG9wdGlvbiB2YWx1ZS5cblx0XHQgKiBAcHVibGljXG5cdFx0ICpcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCB2YWx1ZVxuXHRcdCAqIHZhciBsb2dsZXZlbCA9IGNvbnRyb2xsZXIubG9nbGV2ZWwoKTtcblx0XHQgKlxuXHRcdCAqIC8vIHNldCBhIG5ldyB2YWx1ZVxuXHRcdCAqIGNvbnRyb2xsZXIubG9nbGV2ZWwoMyk7XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gW25ld0xvZ2xldmVsXSAtIFRoZSBuZXcgbG9nbGV2ZWwgc2V0dGluZyBvZiB0aGUgQ29udHJvbGxlci4gYFswLTNdYFxuXHRcdCAqIEByZXR1cm5zIHsobnVtYmVyfENvbnRyb2xsZXIpfSBDdXJyZW50IGxvZ2xldmVsIG9yIHBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxuXHRcdCAqL1xuXHRcdHRoaXMubG9nbGV2ZWwgPSBmdW5jdGlvbiAobmV3TG9nbGV2ZWwpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyAvLyBnZXRcblx0XHRcdFx0cmV0dXJuIF9vcHRpb25zLmxvZ2xldmVsO1xuXHRcdFx0fSBlbHNlIGlmIChfb3B0aW9ucy5sb2dsZXZlbCAhPSBuZXdMb2dsZXZlbCkgeyAvLyBzZXRcblx0XHRcdFx0X29wdGlvbnMubG9nbGV2ZWwgPSBuZXdMb2dsZXZlbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIGN1cnJlbnQgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgY29udHJvbGxlci4gIFxuXHRcdCAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gZGlzYWJsZSBhbGwgU2NlbmVzIGNvbm5lY3RlZCB0byB0aGUgY29udHJvbGxlciB3aXRob3V0IGRlc3Ryb3lpbmcgb3IgcmVtb3ZpbmcgdGhlbS5cblx0XHQgKiBAcHVibGljXG5cdFx0ICpcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCB2YWx1ZVxuXHRcdCAqIHZhciBlbmFibGVkID0gY29udHJvbGxlci5lbmFibGVkKCk7XG5cdFx0ICpcblx0XHQgKiAvLyBkaXNhYmxlIHRoZSBjb250cm9sbGVyXG5cdFx0ICogY29udHJvbGxlci5lbmFibGVkKGZhbHNlKTtcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW25ld1N0YXRlXSAtIFRoZSBuZXcgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgY29udHJvbGxlciBgdHJ1ZWAgb3IgYGZhbHNlYC5cblx0XHQgKiBAcmV0dXJucyB7KGJvb2xlYW58Q29udHJvbGxlcil9IEN1cnJlbnQgZW5hYmxlZCBzdGF0ZSBvciBwYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cblx0XHQgKi9cblx0XHR0aGlzLmVuYWJsZWQgPSBmdW5jdGlvbiAobmV3U3RhdGUpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyAvLyBnZXRcblx0XHRcdFx0cmV0dXJuIF9lbmFibGVkO1xuXHRcdFx0fSBlbHNlIGlmIChfZW5hYmxlZCAhPSBuZXdTdGF0ZSkgeyAvLyBzZXRcblx0XHRcdFx0X2VuYWJsZWQgPSAhISBuZXdTdGF0ZTtcblx0XHRcdFx0Q29udHJvbGxlci51cGRhdGVTY2VuZShfc2NlbmVPYmplY3RzLCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBEZXN0cm95IHRoZSBDb250cm9sbGVyLCBhbGwgU2NlbmVzIGFuZCBldmVyeXRoaW5nLlxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKlxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogLy8gd2l0aG91dCByZXNldHRpbmcgdGhlIHNjZW5lc1xuXHRcdCAqIGNvbnRyb2xsZXIgPSBjb250cm9sbGVyLmRlc3Ryb3koKTtcblx0XHQgKlxuXHRcdCAqIC8vIHdpdGggc2NlbmUgcmVzZXRcblx0XHQgKiBjb250cm9sbGVyID0gY29udHJvbGxlci5kZXN0cm95KHRydWUpO1xuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbcmVzZXRTY2VuZXM9ZmFsc2VdIC0gSWYgYHRydWVgIHRoZSBwaW5zIGFuZCB0d2VlbnMgKGlmIGV4aXN0ZW50KSBvZiBhbGwgc2NlbmVzIHdpbGwgYmUgcmVzZXQuXG5cdFx0ICogQHJldHVybnMge251bGx9IE51bGwgdG8gdW5zZXQgaGFuZGxlciB2YXJpYWJsZXMuXG5cdFx0ICovXG5cdFx0dGhpcy5kZXN0cm95ID0gZnVuY3Rpb24gKHJlc2V0U2NlbmVzKSB7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KF9yZWZyZXNoVGltZW91dCk7XG5cdFx0XHR2YXIgaSA9IF9zY2VuZU9iamVjdHMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0XHRfc2NlbmVPYmplY3RzW2ldLmRlc3Ryb3kocmVzZXRTY2VuZXMpO1xuXHRcdFx0fVxuXHRcdFx0X29wdGlvbnMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25DaGFuZ2UpO1xuXHRcdFx0X29wdGlvbnMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25DaGFuZ2UpO1xuXHRcdFx0X3V0aWwuY0FGKF91cGRhdGVUaW1lb3V0KTtcblx0XHRcdGxvZygzLCBcImRlc3Ryb3llZCBcIiArIE5BTUVTUEFDRSArIFwiIChyZXNldDogXCIgKyAocmVzZXRTY2VuZXMgPyBcInRydWVcIiA6IFwiZmFsc2VcIikgKyBcIilcIik7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9O1xuXG5cdFx0Ly8gSU5JVFxuXHRcdGNvbnN0cnVjdCgpO1xuXHRcdHJldHVybiBDb250cm9sbGVyO1xuXHR9O1xuXG5cdC8vIHN0b3JlIHBhZ2V3aWRlIGNvbnRyb2xsZXIgb3B0aW9uc1xuXHR2YXIgQ09OVFJPTExFUl9PUFRJT05TID0ge1xuXHRcdGRlZmF1bHRzOiB7XG5cdFx0XHRjb250YWluZXI6IHdpbmRvdyxcblx0XHRcdHZlcnRpY2FsOiB0cnVlLFxuXHRcdFx0Z2xvYmFsU2NlbmVPcHRpb25zOiB7fSxcblx0XHRcdGxvZ2xldmVsOiAyLFxuXHRcdFx0cmVmcmVzaEludGVydmFsOiAxMDBcblx0XHR9XG5cdH07XG4vKlxuICogbWV0aG9kIHVzZWQgdG8gYWRkIGFuIG9wdGlvbiB0byBTY3JvbGxNYWdpYyBTY2VuZXMuXG4gKi9cblx0U2Nyb2xsTWFnaWMuQ29udHJvbGxlci5hZGRPcHRpb24gPSBmdW5jdGlvbiAobmFtZSwgZGVmYXVsdFZhbHVlKSB7XG5cdFx0Q09OVFJPTExFUl9PUFRJT05TLmRlZmF1bHRzW25hbWVdID0gZGVmYXVsdFZhbHVlO1xuXHR9O1xuXHQvLyBpbnN0YW5jZSBleHRlbnNpb24gZnVuY3Rpb24gZm9yIHBsdWdpbnNcblx0U2Nyb2xsTWFnaWMuQ29udHJvbGxlci5leHRlbmQgPSBmdW5jdGlvbiAoZXh0ZW5zaW9uKSB7XG5cdFx0dmFyIG9sZENsYXNzID0gdGhpcztcblx0XHRTY3JvbGxNYWdpYy5Db250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0b2xkQ2xhc3MuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdHRoaXMuJHN1cGVyID0gX3V0aWwuZXh0ZW5kKHt9LCB0aGlzKTsgLy8gY29weSBwYXJlbnQgc3RhdGVcblx0XHRcdHJldHVybiBleHRlbnNpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuXHRcdH07XG5cdFx0X3V0aWwuZXh0ZW5kKFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIsIG9sZENsYXNzKTsgLy8gY29weSBwcm9wZXJ0aWVzXG5cdFx0U2Nyb2xsTWFnaWMuQ29udHJvbGxlci5wcm90b3R5cGUgPSBvbGRDbGFzcy5wcm90b3R5cGU7IC8vIGNvcHkgcHJvdG90eXBlXG5cdFx0U2Nyb2xsTWFnaWMuQ29udHJvbGxlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTY3JvbGxNYWdpYy5Db250cm9sbGVyOyAvLyByZXN0b3JlIGNvbnN0cnVjdG9yXG5cdH07XG5cblxuXHQvKipcblx0ICogQSBTY2VuZSBkZWZpbmVzIHdoZXJlIHRoZSBjb250cm9sbGVyIHNob3VsZCByZWFjdCBhbmQgaG93LlxuXHQgKlxuXHQgKiBAY2xhc3Ncblx0ICpcblx0ICogQGV4YW1wbGVcblx0ICogLy8gY3JlYXRlIGEgc3RhbmRhcmQgc2NlbmUgYW5kIGFkZCBpdCB0byBhIGNvbnRyb2xsZXJcblx0ICogbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKClcblx0ICpcdFx0LmFkZFRvKGNvbnRyb2xsZXIpO1xuXHQgKlxuXHQgKiAvLyBjcmVhdGUgYSBzY2VuZSB3aXRoIGN1c3RvbSBvcHRpb25zIGFuZCBhc3NpZ24gYSBoYW5kbGVyIHRvIGl0LlxuXHQgKiB2YXIgc2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xuXHQgKiBcdFx0ZHVyYXRpb246IDEwMCxcblx0ICpcdFx0b2Zmc2V0OiAyMDAsXG5cdCAqXHRcdHRyaWdnZXJIb29rOiBcIm9uRW50ZXJcIixcblx0ICpcdFx0cmV2ZXJzZTogZmFsc2Vcblx0ICogfSk7XG5cdCAqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBPcHRpb25zIGZvciB0aGUgU2NlbmUuIFRoZSBvcHRpb25zIGNhbiBiZSB1cGRhdGVkIGF0IGFueSB0aW1lLiAgXG5cdCBJbnN0ZWFkIG9mIHNldHRpbmcgdGhlIG9wdGlvbnMgZm9yIGVhY2ggc2NlbmUgaW5kaXZpZHVhbGx5IHlvdSBjYW4gYWxzbyBzZXQgdGhlbSBnbG9iYWxseSBpbiB0aGUgY29udHJvbGxlciBhcyB0aGUgY29udHJvbGxlcnMgYGdsb2JhbFNjZW5lT3B0aW9uc2Agb3B0aW9uLiBUaGUgb2JqZWN0IGFjY2VwdHMgdGhlIHNhbWUgcHJvcGVydGllcyBhcyB0aGUgb25lcyBiZWxvdy4gIFxuXHQgV2hlbiBhIHNjZW5lIGlzIGFkZGVkIHRvIHRoZSBjb250cm9sbGVyIHRoZSBvcHRpb25zIGRlZmluZWQgdXNpbmcgdGhlIFNjZW5lIGNvbnN0cnVjdG9yIHdpbGwgYmUgb3ZlcndyaXR0ZW4gYnkgdGhvc2Ugc2V0IGluIGBnbG9iYWxTY2VuZU9wdGlvbnNgLlxuXHQgKiBAcGFyYW0geyhudW1iZXJ8ZnVuY3Rpb24pfSBbb3B0aW9ucy5kdXJhdGlvbj0wXSAtIFRoZSBkdXJhdGlvbiBvZiB0aGUgc2NlbmUuIFxuXHQgSWYgYDBgIHR3ZWVucyB3aWxsIGF1dG8tcGxheSB3aGVuIHJlYWNoaW5nIHRoZSBzY2VuZSBzdGFydCBwb2ludCwgcGlucyB3aWxsIGJlIHBpbm5lZCBpbmRlZmluZXRseSBzdGFydGluZyBhdCB0aGUgc3RhcnQgcG9zaXRpb24uICBcblx0IEEgZnVuY3Rpb24gcmV0dW5pbmcgdGhlIGR1cmF0aW9uIHZhbHVlIGlzIGFsc28gc3VwcG9ydGVkLiBQbGVhc2Ugc2VlIGBTY2VuZS5kdXJhdGlvbigpYCBmb3IgZGV0YWlscy5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm9mZnNldD0wXSAtIE9mZnNldCBWYWx1ZSBmb3IgdGhlIFRyaWdnZXIgUG9zaXRpb24uIElmIG5vIHRyaWdnZXJFbGVtZW50IGlzIGRlZmluZWQgdGhpcyB3aWxsIGJlIHRoZSBzY3JvbGwgZGlzdGFuY2UgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIHBhZ2UsIGFmdGVyIHdoaWNoIHRoZSBzY2VuZSB3aWxsIHN0YXJ0LlxuXHQgKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gW29wdGlvbnMudHJpZ2dlckVsZW1lbnQ9bnVsbF0gLSBTZWxlY3RvciBvciBET00gb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgc3RhcnQgb2YgdGhlIHNjZW5lLiBJZiB1bmRlZmluZWQgdGhlIHNjZW5lIHdpbGwgc3RhcnQgcmlnaHQgYXQgdGhlIHN0YXJ0IG9mIHRoZSBwYWdlICh1bmxlc3MgYW4gb2Zmc2V0IGlzIHNldCkuXG5cdCAqIEBwYXJhbSB7KG51bWJlcnxzdHJpbmcpfSBbb3B0aW9ucy50cmlnZ2VySG9vaz1cIm9uQ2VudGVyXCJdIC0gQ2FuIGJlIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMSBkZWZpbmluZyB0aGUgcG9zaXRpb24gb2YgdGhlIHRyaWdnZXIgSG9vayBpbiByZWxhdGlvbiB0byB0aGUgdmlld3BvcnQuICBcblx0IENhbiBhbHNvIGJlIGRlZmluZWQgdXNpbmcgYSBzdHJpbmc6XG5cdCAqKiBgXCJvbkVudGVyXCJgID0+IGAxYFxuXHQgKiogYFwib25DZW50ZXJcImAgPT4gYDAuNWBcblx0ICoqIGBcIm9uTGVhdmVcImAgPT4gYDBgXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucmV2ZXJzZT10cnVlXSAtIFNob3VsZCB0aGUgc2NlbmUgcmV2ZXJzZSwgd2hlbiBzY3JvbGxpbmcgdXA/XG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5sb2dsZXZlbD0yXSAtIExvZ2xldmVsIGZvciBkZWJ1Z2dpbmcuIE5vdGUgdGhhdCBsb2dnaW5nIGlzIGRpc2FibGVkIGluIHRoZSBtaW5pZmllZCB2ZXJzaW9uIG9mIFNjcm9sbE1hZ2ljLlxuXHQgKiogYDBgID0+IHNpbGVudFxuXHQgKiogYDFgID0+IGVycm9yc1xuXHQgKiogYDJgID0+IGVycm9ycywgd2FybmluZ3Ncblx0ICoqIGAzYCA9PiBlcnJvcnMsIHdhcm5pbmdzLCBkZWJ1Z2luZm9cblx0ICogXG5cdCAqL1xuXHRTY3JvbGxNYWdpYy5TY2VuZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbi8qXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogc2V0dGluZ3Ncblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKi9cblxuXHRcdHZhclxuXHRcdE5BTUVTUEFDRSA9ICdTY3JvbGxNYWdpYy5TY2VuZScsXG5cdFx0XHRTQ0VORV9TVEFURV9CRUZPUkUgPSAnQkVGT1JFJyxcblx0XHRcdFNDRU5FX1NUQVRFX0RVUklORyA9ICdEVVJJTkcnLFxuXHRcdFx0U0NFTkVfU1RBVEVfQUZURVIgPSAnQUZURVInLFxuXHRcdFx0REVGQVVMVF9PUFRJT05TID0gU0NFTkVfT1BUSU9OUy5kZWZhdWx0cztcblxuLypcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKiBwcml2YXRlIHZhcnNcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKi9cblxuXHRcdHZhclxuXHRcdFNjZW5lID0gdGhpcyxcblx0XHRcdF9vcHRpb25zID0gX3V0aWwuZXh0ZW5kKHt9LCBERUZBVUxUX09QVElPTlMsIG9wdGlvbnMpLFxuXHRcdFx0X3N0YXRlID0gU0NFTkVfU1RBVEVfQkVGT1JFLFxuXHRcdFx0X3Byb2dyZXNzID0gMCxcblx0XHRcdF9zY3JvbGxPZmZzZXQgPSB7XG5cdFx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0XHRlbmQ6IDBcblx0XHRcdH0sXG5cdFx0XHQvLyByZWZsZWN0cyB0aGUgY29udHJvbGxlcnMncyBzY3JvbGwgcG9zaXRpb24gZm9yIHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSBzY2VuZSByZXNwZWN0aXZlbHlcblx0XHRcdF90cmlnZ2VyUG9zID0gMCxcblx0XHRcdF9lbmFibGVkID0gdHJ1ZSxcblx0XHRcdF9kdXJhdGlvblVwZGF0ZU1ldGhvZCwgX2NvbnRyb2xsZXI7XG5cblx0XHQvKipcblx0XHQgKiBJbnRlcm5hbCBjb25zdHJ1Y3RvciBmdW5jdGlvbiBvZiB0aGUgU2Nyb2xsTWFnaWMgU2NlbmVcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gX29wdGlvbnMpIHsgLy8gY2hlY2sgc3VwcGxpZWQgb3B0aW9uc1xuXHRcdFx0XHRpZiAoIURFRkFVTFRfT1BUSU9OUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0bG9nKDIsIFwiV0FSTklORzogVW5rbm93biBvcHRpb24gXFxcIlwiICsga2V5ICsgXCJcXFwiXCIpO1xuXHRcdFx0XHRcdGRlbGV0ZSBfb3B0aW9uc1trZXldO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBhZGQgZ2V0dGVycy9zZXR0ZXJzIGZvciBhbGwgcG9zc2libGUgb3B0aW9uc1xuXHRcdFx0Zm9yICh2YXIgb3B0aW9uTmFtZSBpbiBERUZBVUxUX09QVElPTlMpIHtcblx0XHRcdFx0YWRkU2NlbmVPcHRpb24ob3B0aW9uTmFtZSk7XG5cdFx0XHR9XG5cdFx0XHQvLyB2YWxpZGF0ZSBhbGwgb3B0aW9uc1xuXHRcdFx0dmFsaWRhdGVPcHRpb24oKTtcblx0XHR9O1xuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRXZlbnQgTWFuYWdlbWVudFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblx0XHR2YXIgX2xpc3RlbmVycyA9IHt9O1xuXHRcdC8qKlxuXHRcdCAqIFNjZW5lIHN0YXJ0IGV2ZW50LiAgXG5cdFx0ICogRmlyZXMgd2hlbmV2ZXIgdGhlIHNjcm9sbCBwb3NpdGlvbiBpdHMgdGhlIHN0YXJ0aW5nIHBvaW50IG9mIHRoZSBzY2VuZS4gIFxuXHRcdCAqIEl0IHdpbGwgYWxzbyBmaXJlIHdoZW4gc2Nyb2xsaW5nIGJhY2sgdXAgZ29pbmcgb3ZlciB0aGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHNjZW5lLiBJZiB5b3Ugd2FudCBzb21ldGhpbmcgdG8gaGFwcGVuIG9ubHkgd2hlbiBzY3JvbGxpbmcgZG93bi9yaWdodCwgdXNlIHRoZSBzY3JvbGxEaXJlY3Rpb24gcGFyYW1ldGVyIHBhc3NlZCB0byB0aGUgY2FsbGJhY2suXG5cdFx0ICpcblx0XHQgKiBGb3IgZGV0YWlscyBvbiB0aGlzIGV2ZW50IGFuZCB0aGUgb3JkZXIgaW4gd2hpY2ggaXQgaXMgZmlyZWQsIHBsZWFzZSByZXZpZXcgdGhlIHtAbGluayBTY2VuZS5wcm9ncmVzc30gbWV0aG9kLlxuXHRcdCAqXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI3N0YXJ0XG5cdFx0ICpcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIHNjZW5lLm9uKFwic3RhcnRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ICogXHRjb25zb2xlLmxvZyhcIkhpdCBzdGFydCBwb2ludCBvZiBzY2VuZS5cIik7XG5cdFx0ICogfSk7XG5cdFx0ICpcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcblx0XHQgKiBAcHJvcGVydHkge251bWJlcn0gZXZlbnQucHJvZ3Jlc3MgLSBSZWZsZWN0cyB0aGUgY3VycmVudCBwcm9ncmVzcyBvZiB0aGUgc2NlbmVcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc3RhdGUgLSBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2NlbmUgYFwiQkVGT1JFXCJgIG9yIGBcIkRVUklOR1wiYFxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zY3JvbGxEaXJlY3Rpb24gLSBJbmRpY2F0ZXMgd2hpY2ggd2F5IHdlIGFyZSBzY3JvbGxpbmcgYFwiUEFVU0VEXCJgLCBgXCJGT1JXQVJEXCJgIG9yIGBcIlJFVkVSU0VcImBcblx0XHQgKi9cblx0XHQvKipcblx0XHQgKiBTY2VuZSBlbmQgZXZlbnQuICBcblx0XHQgKiBGaXJlcyB3aGVuZXZlciB0aGUgc2Nyb2xsIHBvc2l0aW9uIGl0cyB0aGUgZW5kaW5nIHBvaW50IG9mIHRoZSBzY2VuZS4gIFxuXHRcdCAqIEl0IHdpbGwgYWxzbyBmaXJlIHdoZW4gc2Nyb2xsaW5nIGJhY2sgdXAgZnJvbSBhZnRlciB0aGUgc2NlbmUgYW5kIGdvaW5nIG92ZXIgaXRzIGVuZCBwb3NpdGlvbi4gSWYgeW91IHdhbnQgc29tZXRoaW5nIHRvIGhhcHBlbiBvbmx5IHdoZW4gc2Nyb2xsaW5nIGRvd24vcmlnaHQsIHVzZSB0aGUgc2Nyb2xsRGlyZWN0aW9uIHBhcmFtZXRlciBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLlxuXHRcdCAqXG5cdFx0ICogRm9yIGRldGFpbHMgb24gdGhpcyBldmVudCBhbmQgdGhlIG9yZGVyIGluIHdoaWNoIGl0IGlzIGZpcmVkLCBwbGVhc2UgcmV2aWV3IHRoZSB7QGxpbmsgU2NlbmUucHJvZ3Jlc3N9IG1ldGhvZC5cblx0XHQgKlxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNlbmRcblx0XHQgKlxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogc2NlbmUub24oXCJlbmRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ICogXHRjb25zb2xlLmxvZyhcIkhpdCBlbmQgcG9pbnQgb2Ygc2NlbmUuXCIpO1xuXHRcdCAqIH0pO1xuXHRcdCAqXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XG5cdFx0ICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LnByb2dyZXNzIC0gUmVmbGVjdHMgdGhlIGN1cnJlbnQgcHJvZ3Jlc3Mgb2YgdGhlIHNjZW5lXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnN0YXRlIC0gVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNjZW5lIGBcIkRVUklOR1wiYCBvciBgXCJBRlRFUlwiYFxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zY3JvbGxEaXJlY3Rpb24gLSBJbmRpY2F0ZXMgd2hpY2ggd2F5IHdlIGFyZSBzY3JvbGxpbmcgYFwiUEFVU0VEXCJgLCBgXCJGT1JXQVJEXCJgIG9yIGBcIlJFVkVSU0VcImBcblx0XHQgKi9cblx0XHQvKipcblx0XHQgKiBTY2VuZSBlbnRlciBldmVudC4gIFxuXHRcdCAqIEZpcmVzIHdoZW5ldmVyIHRoZSBzY2VuZSBlbnRlcnMgdGhlIFwiRFVSSU5HXCIgc3RhdGUuICBcblx0XHQgKiBLZWVwIGluIG1pbmQgdGhhdCBpdCBkb2Vzbid0IG1hdHRlciBpZiB0aGUgc2NlbmUgcGxheXMgZm9yd2FyZCBvciBiYWNrd2FyZDogVGhpcyBldmVudCBhbHdheXMgZmlyZXMgd2hlbiB0aGUgc2NlbmUgZW50ZXJzIGl0cyBhY3RpdmUgc2Nyb2xsIHRpbWVmcmFtZSwgcmVnYXJkbGVzcyBvZiB0aGUgc2Nyb2xsLWRpcmVjdGlvbi5cblx0XHQgKlxuXHRcdCAqIEZvciBkZXRhaWxzIG9uIHRoaXMgZXZlbnQgYW5kIHRoZSBvcmRlciBpbiB3aGljaCBpdCBpcyBmaXJlZCwgcGxlYXNlIHJldmlldyB0aGUge0BsaW5rIFNjZW5lLnByb2dyZXNzfSBtZXRob2QuXG5cdFx0ICpcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjZW50ZXJcblx0XHQgKlxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogc2NlbmUub24oXCJlbnRlclwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHQgKiBcdGNvbnNvbGUubG9nKFwiU2NlbmUgZW50ZXJlZC5cIik7XG5cdFx0ICogfSk7XG5cdFx0ICpcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcblx0XHQgKiBAcHJvcGVydHkge251bWJlcn0gZXZlbnQucHJvZ3Jlc3MgLSBSZWZsZWN0cyB0aGUgY3VycmVudCBwcm9ncmVzcyBvZiB0aGUgc2NlbmVcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc3RhdGUgLSBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2NlbmUgLSBhbHdheXMgYFwiRFVSSU5HXCJgXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnNjcm9sbERpcmVjdGlvbiAtIEluZGljYXRlcyB3aGljaCB3YXkgd2UgYXJlIHNjcm9sbGluZyBgXCJQQVVTRURcImAsIGBcIkZPUldBUkRcImAgb3IgYFwiUkVWRVJTRVwiYFxuXHRcdCAqL1xuXHRcdC8qKlxuXHRcdCAqIFNjZW5lIGxlYXZlIGV2ZW50LiAgXG5cdFx0ICogRmlyZXMgd2hlbmV2ZXIgdGhlIHNjZW5lJ3Mgc3RhdGUgZ29lcyBmcm9tIFwiRFVSSU5HXCIgdG8gZWl0aGVyIFwiQkVGT1JFXCIgb3IgXCJBRlRFUlwiLiAgXG5cdFx0ICogS2VlcCBpbiBtaW5kIHRoYXQgaXQgZG9lc24ndCBtYXR0ZXIgaWYgdGhlIHNjZW5lIHBsYXlzIGZvcndhcmQgb3IgYmFja3dhcmQ6IFRoaXMgZXZlbnQgYWx3YXlzIGZpcmVzIHdoZW4gdGhlIHNjZW5lIGxlYXZlcyBpdHMgYWN0aXZlIHNjcm9sbCB0aW1lZnJhbWUsIHJlZ2FyZGxlc3Mgb2YgdGhlIHNjcm9sbC1kaXJlY3Rpb24uXG5cdFx0ICpcblx0XHQgKiBGb3IgZGV0YWlscyBvbiB0aGlzIGV2ZW50IGFuZCB0aGUgb3JkZXIgaW4gd2hpY2ggaXQgaXMgZmlyZWQsIHBsZWFzZSByZXZpZXcgdGhlIHtAbGluayBTY2VuZS5wcm9ncmVzc30gbWV0aG9kLlxuXHRcdCAqXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI2xlYXZlXG5cdFx0ICpcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIHNjZW5lLm9uKFwibGVhdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ICogXHRjb25zb2xlLmxvZyhcIlNjZW5lIGxlZnQuXCIpO1xuXHRcdCAqIH0pO1xuXHRcdCAqXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XG5cdFx0ICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LnByb2dyZXNzIC0gUmVmbGVjdHMgdGhlIGN1cnJlbnQgcHJvZ3Jlc3Mgb2YgdGhlIHNjZW5lXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnN0YXRlIC0gVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNjZW5lIGBcIkJFRk9SRVwiYCBvciBgXCJBRlRFUlwiYFxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zY3JvbGxEaXJlY3Rpb24gLSBJbmRpY2F0ZXMgd2hpY2ggd2F5IHdlIGFyZSBzY3JvbGxpbmcgYFwiUEFVU0VEXCJgLCBgXCJGT1JXQVJEXCJgIG9yIGBcIlJFVkVSU0VcImBcblx0XHQgKi9cblx0XHQvKipcblx0XHQgKiBTY2VuZSB1cGRhdGUgZXZlbnQuICBcblx0XHQgKiBGaXJlcyB3aGVuZXZlciB0aGUgc2NlbmUgaXMgdXBkYXRlZCAoYnV0IG5vdCBuZWNlc3NhcmlseSBjaGFuZ2VzIHRoZSBwcm9ncmVzcykuXG5cdFx0ICpcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjdXBkYXRlXG5cdFx0ICpcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIHNjZW5lLm9uKFwidXBkYXRlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJTY2VuZSB1cGRhdGVkLlwiKTtcblx0XHQgKiB9KTtcblx0XHQgKlxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxuXHRcdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5zdGFydFBvcyAtIFRoZSBzdGFydGluZyBwb3NpdGlvbiBvZiB0aGUgc2NlbmUgKGluIHJlbGF0aW9uIHRvIHRoZSBjb25haW5lcilcblx0XHQgKiBAcHJvcGVydHkge251bWJlcn0gZXZlbnQuZW5kUG9zIC0gVGhlIGVuZGluZyBwb3NpdGlvbiBvZiB0aGUgc2NlbmUgKGluIHJlbGF0aW9uIHRvIHRoZSBjb25haW5lcilcblx0XHQgKiBAcHJvcGVydHkge251bWJlcn0gZXZlbnQuc2Nyb2xsUG9zIC0gVGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBjb250YWluZXJcblx0XHQgKi9cblx0XHQvKipcblx0XHQgKiBTY2VuZSBwcm9ncmVzcyBldmVudC4gIFxuXHRcdCAqIEZpcmVzIHdoZW5ldmVyIHRoZSBwcm9ncmVzcyBvZiB0aGUgc2NlbmUgY2hhbmdlcy5cblx0XHQgKlxuXHRcdCAqIEZvciBkZXRhaWxzIG9uIHRoaXMgZXZlbnQgYW5kIHRoZSBvcmRlciBpbiB3aGljaCBpdCBpcyBmaXJlZCwgcGxlYXNlIHJldmlldyB0aGUge0BsaW5rIFNjZW5lLnByb2dyZXNzfSBtZXRob2QuXG5cdFx0ICpcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjcHJvZ3Jlc3Ncblx0XHQgKlxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogc2NlbmUub24oXCJwcm9ncmVzc1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHQgKiBcdGNvbnNvbGUubG9nKFwiU2NlbmUgcHJvZ3Jlc3MgY2hhbmdlZCB0byBcIiArIGV2ZW50LnByb2dyZXNzKTtcblx0XHQgKiB9KTtcblx0XHQgKlxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxuXHRcdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5wcm9ncmVzcyAtIFJlZmxlY3RzIHRoZSBjdXJyZW50IHByb2dyZXNzIG9mIHRoZSBzY2VuZVxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zdGF0ZSAtIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBzY2VuZSBgXCJCRUZPUkVcImAsIGBcIkRVUklOR1wiYCBvciBgXCJBRlRFUlwiYFxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zY3JvbGxEaXJlY3Rpb24gLSBJbmRpY2F0ZXMgd2hpY2ggd2F5IHdlIGFyZSBzY3JvbGxpbmcgYFwiUEFVU0VEXCJgLCBgXCJGT1JXQVJEXCJgIG9yIGBcIlJFVkVSU0VcImBcblx0XHQgKi9cblx0XHQvKipcblx0XHQgKiBTY2VuZSBjaGFuZ2UgZXZlbnQuICBcblx0XHQgKiBGaXJlcyB3aGVudmV2ZXIgYSBwcm9wZXJ0eSBvZiB0aGUgc2NlbmUgaXMgY2hhbmdlZC5cblx0XHQgKlxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNjaGFuZ2Vcblx0XHQgKlxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogc2NlbmUub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ICogXHRjb25zb2xlLmxvZyhcIlNjZW5lIFByb3BlcnR5IFxcXCJcIiArIGV2ZW50LndoYXQgKyBcIlxcXCIgY2hhbmdlZCB0byBcIiArIGV2ZW50Lm5ld3ZhbCk7XG5cdFx0ICogfSk7XG5cdFx0ICpcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQud2hhdCAtIEluZGljYXRlcyB3aGF0IHZhbHVlIGhhcyBiZWVuIGNoYW5nZWRcblx0XHQgKiBAcHJvcGVydHkge21peGVkfSBldmVudC5uZXd2YWwgLSBUaGUgbmV3IHZhbHVlIG9mIHRoZSBjaGFuZ2VkIHByb3BlcnR5XG5cdFx0ICovXG5cdFx0LyoqXG5cdFx0ICogU2NlbmUgc2hpZnQgZXZlbnQuICBcblx0XHQgKiBGaXJlcyB3aGVudmV2ZXIgdGhlIHN0YXJ0IG9yIGVuZCAqKnNjcm9sbCBvZmZzZXQqKiBvZiB0aGUgc2NlbmUgY2hhbmdlLlxuXHRcdCAqIFRoaXMgaGFwcGVucyBleHBsaWNpdGVseSwgd2hlbiBvbmUgb2YgdGhlc2UgdmFsdWVzIGNoYW5nZTogYG9mZnNldGAsIGBkdXJhdGlvbmAgb3IgYHRyaWdnZXJIb29rYC5cblx0XHQgKiBJdCB3aWxsIGZpcmUgaW1wbGljaXRseSB3aGVuIHRoZSBgdHJpZ2dlckVsZW1lbnRgIGNoYW5nZXMsIGlmIHRoZSBuZXcgZWxlbWVudCBoYXMgYSBkaWZmZXJlbnQgcG9zaXRpb24gKG1vc3QgY2FzZXMpLlxuXHRcdCAqIEl0IHdpbGwgYWxzbyBmaXJlIGltcGxpY2l0bHkgd2hlbiB0aGUgc2l6ZSBvZiB0aGUgY29udGFpbmVyIGNoYW5nZXMgYW5kIHRoZSB0cmlnZ2VySG9vayBpcyBhbnl0aGluZyBvdGhlciB0aGFuIGBvbkxlYXZlYC5cblx0XHQgKlxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNzaGlmdFxuXHRcdCAqIEBzaW5jZSAxLjEuMFxuXHRcdCAqXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiBzY2VuZS5vbihcInNoaWZ0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJTY2VuZSBtb3ZlZCwgYmVjYXVzZSB0aGUgXCIgKyBldmVudC5yZWFzb24gKyBcIiBoYXMgY2hhbmdlZC4pXCIpO1xuXHRcdCAqIH0pO1xuXHRcdCAqXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnJlYXNvbiAtIEluZGljYXRlcyB3aHkgdGhlIHNjZW5lIGhhcyBzaGlmdGVkXG5cdFx0ICovXG5cdFx0LyoqXG5cdFx0ICogU2NlbmUgZGVzdHJveSBldmVudC4gIFxuXHRcdCAqIEZpcmVzIHdoZW52ZXZlciB0aGUgc2NlbmUgaXMgZGVzdHJveWVkLlxuXHRcdCAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gdGlkeSB1cCBjdXN0b20gYmVoYXZpb3VyIHVzZWQgaW4gZXZlbnRzLlxuXHRcdCAqXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI2Rlc3Ryb3lcblx0XHQgKiBAc2luY2UgMS4xLjBcblx0XHQgKlxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogc2NlbmUub24oXCJlbnRlclwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHQgKiAgICAgICAgLy8gYWRkIGN1c3RvbSBhY3Rpb25cblx0XHQgKiAgICAgICAgJChcIiNteS1lbGVtXCIpLmxlZnQoXCIyMDBcIik7XG5cdFx0ICogICAgICB9KVxuXHRcdCAqICAgICAgLm9uKFwiZGVzdHJveVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHQgKiAgICAgICAgLy8gcmVzZXQgbXkgZWxlbWVudCB0byBzdGFydCBwb3NpdGlvblxuXHRcdCAqICAgICAgICBpZiAoZXZlbnQucmVzZXQpIHtcblx0XHQgKiAgICAgICAgICAkKFwiI215LWVsZW1cIikubGVmdChcIjBcIik7XG5cdFx0ICogICAgICAgIH1cblx0XHQgKiAgICAgIH0pO1xuXHRcdCAqXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XG5cdFx0ICogQHByb3BlcnR5IHtib29sZWFufSBldmVudC5yZXNldCAtIEluZGljYXRlcyBpZiB0aGUgZGVzdHJveSBtZXRob2Qgd2FzIGNhbGxlZCB3aXRoIHJlc2V0IGB0cnVlYCBvciBgZmFsc2VgLlxuXHRcdCAqL1xuXHRcdC8qKlxuXHRcdCAqIFNjZW5lIGFkZCBldmVudC4gIFxuXHRcdCAqIEZpcmVzIHdoZW4gdGhlIHNjZW5lIGlzIGFkZGVkIHRvIGEgY29udHJvbGxlci5cblx0XHQgKiBUaGlzIGlzIG1vc3RseSB1c2VkIGJ5IHBsdWdpbnMgdG8ga25vdyB0aGF0IGNoYW5nZSBtaWdodCBiZSBkdWUuXG5cdFx0ICpcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjYWRkXG5cdFx0ICogQHNpbmNlIDIuMC4wXG5cdFx0ICpcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIHNjZW5lLm9uKFwiYWRkXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdCAqIFx0Y29uc29sZS5sb2coJ1NjZW5lIHdhcyBhZGRlZCB0byBhIG5ldyBjb250cm9sbGVyLicpO1xuXHRcdCAqIH0pO1xuXHRcdCAqXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XG5cdFx0ICogQHByb3BlcnR5IHtib29sZWFufSBldmVudC5jb250cm9sbGVyIC0gVGhlIGNvbnRyb2xsZXIgb2JqZWN0IHRoZSBzY2VuZSB3YXMgYWRkZWQgdG8uXG5cdFx0ICovXG5cdFx0LyoqXG5cdFx0ICogU2NlbmUgcmVtb3ZlIGV2ZW50LiAgXG5cdFx0ICogRmlyZXMgd2hlbiB0aGUgc2NlbmUgaXMgcmVtb3ZlZCBmcm9tIGEgY29udHJvbGxlci5cblx0XHQgKiBUaGlzIGlzIG1vc3RseSB1c2VkIGJ5IHBsdWdpbnMgdG8ga25vdyB0aGF0IGNoYW5nZSBtaWdodCBiZSBkdWUuXG5cdFx0ICpcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjcmVtb3ZlXG5cdFx0ICogQHNpbmNlIDIuMC4wXG5cdFx0ICpcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIHNjZW5lLm9uKFwicmVtb3ZlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdCAqIFx0Y29uc29sZS5sb2coJ1NjZW5lIHdhcyByZW1vdmVkIGZyb20gaXRzIGNvbnRyb2xsZXIuJyk7XG5cdFx0ICogfSk7XG5cdFx0ICpcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcblx0XHQgKi9cblxuXHRcdC8qKlxuXHRcdCAqIEFkZCBvbmUgb3JlIG1vcmUgZXZlbnQgbGlzdGVuZXIuICBcblx0XHQgKiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gd2lsbCBiZSBmaXJlZCBhdCB0aGUgcmVzcGVjdGl2ZSBldmVudCwgYW5kIGFuIG9iamVjdCBjb250YWluaW5nIHJlbGV2YW50IGRhdGEgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLlxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjb25cblx0XHQgKlxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogZnVuY3Rpb24gY2FsbGJhY2sgKGV2ZW50KSB7XG5cdFx0ICogXHRcdGNvbnNvbGUubG9nKFwiRXZlbnQgZmlyZWQhIChcIiArIGV2ZW50LnR5cGUgKyBcIilcIik7XG5cdFx0ICogfVxuXHRcdCAqIC8vIGFkZCBsaXN0ZW5lcnNcblx0XHQgKiBzY2VuZS5vbihcImNoYW5nZSB1cGRhdGUgcHJvZ3Jlc3Mgc3RhcnQgZW5kIGVudGVyIGxlYXZlXCIsIGNhbGxiYWNrKTtcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lcyAtIFRoZSBuYW1lIG9yIG5hbWVzIG9mIHRoZSBldmVudCB0aGUgY2FsbGJhY2sgc2hvdWxkIGJlIGF0dGFjaGVkIHRvLlxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQSBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSBleGVjdXRlZCwgd2hlbiB0aGUgZXZlbnQgaXMgZGlzcGF0Y2hlZC4gQW4gZXZlbnQgb2JqZWN0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBjYWxsYmFjay5cblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxuXHRcdCAqL1xuXHRcdHRoaXMub24gPSBmdW5jdGlvbiAobmFtZXMsIGNhbGxiYWNrKSB7XG5cdFx0XHRpZiAoX3V0aWwudHlwZS5GdW5jdGlvbihjYWxsYmFjaykpIHtcblx0XHRcdFx0bmFtZXMgPSBuYW1lcy50cmltKCkuc3BsaXQoJyAnKTtcblx0XHRcdFx0bmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoZnVsbG5hbWUpIHtcblx0XHRcdFx0XHR2YXJcblx0XHRcdFx0XHRuYW1lcGFydHMgPSBmdWxsbmFtZS5zcGxpdCgnLicpLFxuXHRcdFx0XHRcdFx0ZXZlbnRuYW1lID0gbmFtZXBhcnRzWzBdLFxuXHRcdFx0XHRcdFx0bmFtZXNwYWNlID0gbmFtZXBhcnRzWzFdO1xuXHRcdFx0XHRcdGlmIChldmVudG5hbWUgIT0gXCIqXCIpIHsgLy8gZGlzYWxsb3cgd2lsZGNhcmRzXG5cdFx0XHRcdFx0XHRpZiAoIV9saXN0ZW5lcnNbZXZlbnRuYW1lXSkge1xuXHRcdFx0XHRcdFx0XHRfbGlzdGVuZXJzW2V2ZW50bmFtZV0gPSBbXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdF9saXN0ZW5lcnNbZXZlbnRuYW1lXS5wdXNoKHtcblx0XHRcdFx0XHRcdFx0bmFtZXNwYWNlOiBuYW1lc3BhY2UgfHwgJycsXG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrOiBjYWxsYmFja1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SIHdoZW4gY2FsbGluZyAnLm9uKCknOiBTdXBwbGllZCBjYWxsYmFjayBmb3IgJ1wiICsgbmFtZXMgKyBcIicgaXMgbm90IGEgdmFsaWQgZnVuY3Rpb24hXCIpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIFNjZW5lO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBSZW1vdmUgb25lIG9yIG1vcmUgZXZlbnQgbGlzdGVuZXIuXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNvZmZcblx0XHQgKlxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogZnVuY3Rpb24gY2FsbGJhY2sgKGV2ZW50KSB7XG5cdFx0ICogXHRcdGNvbnNvbGUubG9nKFwiRXZlbnQgZmlyZWQhIChcIiArIGV2ZW50LnR5cGUgKyBcIilcIik7XG5cdFx0ICogfVxuXHRcdCAqIC8vIGFkZCBsaXN0ZW5lcnNcblx0XHQgKiBzY2VuZS5vbihcImNoYW5nZSB1cGRhdGVcIiwgY2FsbGJhY2spO1xuXHRcdCAqIC8vIHJlbW92ZSBsaXN0ZW5lcnNcblx0XHQgKiBzY2VuZS5vZmYoXCJjaGFuZ2UgdXBkYXRlXCIsIGNhbGxiYWNrKTtcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lcyAtIFRoZSBuYW1lIG9yIG5hbWVzIG9mIHRoZSBldmVudCB0aGF0IHNob3VsZCBiZSByZW1vdmVkLlxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja10gLSBBIHNwZWNpZmljIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIHJlbW92ZWQuIElmIG5vbmUgaXMgcGFzc2VkIGFsbCBjYWxsYmFja3MgdG8gdGhlIGV2ZW50IGxpc3RlbmVyIHdpbGwgYmUgcmVtb3ZlZC5cblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxuXHRcdCAqL1xuXHRcdHRoaXMub2ZmID0gZnVuY3Rpb24gKG5hbWVzLCBjYWxsYmFjaykge1xuXHRcdFx0aWYgKCFuYW1lcykge1xuXHRcdFx0XHRsb2coMSwgXCJFUlJPUjogSW52YWxpZCBldmVudCBuYW1lIHN1cHBsaWVkLlwiKTtcblx0XHRcdFx0cmV0dXJuIFNjZW5lO1xuXHRcdFx0fVxuXHRcdFx0bmFtZXMgPSBuYW1lcy50cmltKCkuc3BsaXQoJyAnKTtcblx0XHRcdG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKGZ1bGxuYW1lLCBrZXkpIHtcblx0XHRcdFx0dmFyXG5cdFx0XHRcdG5hbWVwYXJ0cyA9IGZ1bGxuYW1lLnNwbGl0KCcuJyksXG5cdFx0XHRcdFx0ZXZlbnRuYW1lID0gbmFtZXBhcnRzWzBdLFxuXHRcdFx0XHRcdG5hbWVzcGFjZSA9IG5hbWVwYXJ0c1sxXSB8fCAnJyxcblx0XHRcdFx0XHRyZW1vdmVMaXN0ID0gZXZlbnRuYW1lID09PSAnKicgPyBPYmplY3Qua2V5cyhfbGlzdGVuZXJzKSA6IFtldmVudG5hbWVdO1xuXHRcdFx0XHRyZW1vdmVMaXN0LmZvckVhY2goZnVuY3Rpb24gKHJlbW92ZSkge1xuXHRcdFx0XHRcdHZhclxuXHRcdFx0XHRcdGxpc3QgPSBfbGlzdGVuZXJzW3JlbW92ZV0gfHwgW10sXG5cdFx0XHRcdFx0XHRpID0gbGlzdC5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0XHRcdFx0dmFyIGxpc3RlbmVyID0gbGlzdFtpXTtcblx0XHRcdFx0XHRcdGlmIChsaXN0ZW5lciAmJiAobmFtZXNwYWNlID09PSBsaXN0ZW5lci5uYW1lc3BhY2UgfHwgbmFtZXNwYWNlID09PSAnKicpICYmICghY2FsbGJhY2sgfHwgY2FsbGJhY2sgPT0gbGlzdGVuZXIuY2FsbGJhY2spKSB7XG5cdFx0XHRcdFx0XHRcdGxpc3Quc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIWxpc3QubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRkZWxldGUgX2xpc3RlbmVyc1tyZW1vdmVdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBTY2VuZTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogVHJpZ2dlciBhbiBldmVudC5cblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3RyaWdnZXJcblx0XHQgKlxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogdGhpcy50cmlnZ2VyKFwiY2hhbmdlXCIpO1xuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdGhhdCBzaG91bGQgYmUgdHJpZ2dlcmVkLlxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBbdmFyc10gLSBBbiBvYmplY3QgY29udGFpbmluZyBpbmZvIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgY2FsbGJhY2suXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cblx0XHQgKi9cblx0XHR0aGlzLnRyaWdnZXIgPSBmdW5jdGlvbiAobmFtZSwgdmFycykge1xuXHRcdFx0aWYgKG5hbWUpIHtcblx0XHRcdFx0dmFyXG5cdFx0XHRcdG5hbWVwYXJ0cyA9IG5hbWUudHJpbSgpLnNwbGl0KCcuJyksXG5cdFx0XHRcdFx0ZXZlbnRuYW1lID0gbmFtZXBhcnRzWzBdLFxuXHRcdFx0XHRcdG5hbWVzcGFjZSA9IG5hbWVwYXJ0c1sxXSxcblx0XHRcdFx0XHRsaXN0ZW5lcnMgPSBfbGlzdGVuZXJzW2V2ZW50bmFtZV07XG5cdFx0XHRcdGxvZygzLCAnZXZlbnQgZmlyZWQ6JywgZXZlbnRuYW1lLCB2YXJzID8gXCItPlwiIDogJycsIHZhcnMgfHwgJycpO1xuXHRcdFx0XHRpZiAobGlzdGVuZXJzKSB7XG5cdFx0XHRcdFx0bGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyLCBrZXkpIHtcblx0XHRcdFx0XHRcdGlmICghbmFtZXNwYWNlIHx8IG5hbWVzcGFjZSA9PT0gbGlzdGVuZXIubmFtZXNwYWNlKSB7XG5cdFx0XHRcdFx0XHRcdGxpc3RlbmVyLmNhbGxiYWNrLmNhbGwoU2NlbmUsIG5ldyBTY3JvbGxNYWdpYy5FdmVudChldmVudG5hbWUsIGxpc3RlbmVyLm5hbWVzcGFjZSwgU2NlbmUsIHZhcnMpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bG9nKDEsIFwiRVJST1I6IEludmFsaWQgZXZlbnQgbmFtZSBzdXBwbGllZC5cIik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gU2NlbmU7XG5cdFx0fTtcblxuXHRcdC8vIHNldCBldmVudCBsaXN0ZW5lcnNcblx0XHRTY2VuZS5vbihcImNoYW5nZS5pbnRlcm5hbFwiLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0aWYgKGUud2hhdCAhPT0gXCJsb2dsZXZlbFwiICYmIGUud2hhdCAhPT0gXCJ0d2VlbkNoYW5nZXNcIikgeyAvLyBubyBuZWVkIGZvciBhIHNjZW5lIHVwZGF0ZSBzY2VuZSB3aXRoIHRoZXNlIG9wdGlvbnMuLi5cblx0XHRcdFx0aWYgKGUud2hhdCA9PT0gXCJ0cmlnZ2VyRWxlbWVudFwiKSB7XG5cdFx0XHRcdFx0dXBkYXRlVHJpZ2dlckVsZW1lbnRQb3NpdGlvbigpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGUud2hhdCA9PT0gXCJyZXZlcnNlXCIpIHsgLy8gdGhlIG9ubHkgcHJvcGVydHkgbGVmdCB0aGF0IG1heSBoYXZlIGFuIGltcGFjdCBvbiB0aGUgY3VycmVudCBzY2VuZSBzdGF0ZS4gRXZlcnl0aGluZyBlbHNlIGlzIGhhbmRsZWQgYnkgdGhlIHNoaWZ0IGV2ZW50LlxuXHRcdFx0XHRcdFNjZW5lLnVwZGF0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSkub24oXCJzaGlmdC5pbnRlcm5hbFwiLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0dXBkYXRlU2Nyb2xsT2Zmc2V0KCk7XG5cdFx0XHRTY2VuZS51cGRhdGUoKTsgLy8gdXBkYXRlIHNjZW5lIHRvIHJlZmxlY3QgbmV3IHBvc2l0aW9uXG5cdFx0fSk7XG5cblx0XHQvKipcblx0XHQgKiBTZW5kIGEgZGVidWcgbWVzc2FnZSB0byB0aGUgY29uc29sZS5cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIGJ1dCBwcm92aWRlZCBwdWJsaWNseSB3aXRoIF9sb2cgZm9yIHBsdWdpbnNcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBsb2dsZXZlbCAtIFRoZSBsb2dsZXZlbCByZXF1aXJlZCB0byBpbml0aWF0ZSBvdXRwdXQgZm9yIHRoZSBtZXNzYWdlLlxuXHRcdCAqIEBwYXJhbSB7Li4ubWl4ZWR9IG91dHB1dCAtIE9uZSBvciBtb3JlIHZhcmlhYmxlcyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIGNvbnNvbGUuXG5cdFx0ICovXG5cdFx0dmFyIGxvZyA9IHRoaXMuX2xvZyA9IGZ1bmN0aW9uIChsb2dsZXZlbCwgb3V0cHV0KSB7XG5cdFx0XHRpZiAoX29wdGlvbnMubG9nbGV2ZWwgPj0gbG9nbGV2ZWwpIHtcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFyZ3VtZW50cywgMSwgMCwgXCIoXCIgKyBOQU1FU1BBQ0UgKyBcIikgLT5cIik7XG5cdFx0XHRcdF91dGlsLmxvZy5hcHBseSh3aW5kb3csIGFyZ3VtZW50cyk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIEFkZCB0aGUgc2NlbmUgdG8gYSBjb250cm9sbGVyLiAgXG5cdFx0ICogVGhpcyBpcyB0aGUgZXF1aXZhbGVudCB0byBgQ29udHJvbGxlci5hZGRTY2VuZShzY2VuZSlgLlxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjYWRkVG9cblx0XHQgKlxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogLy8gYWRkIGEgc2NlbmUgdG8gYSBTY3JvbGxNYWdpYyBDb250cm9sbGVyXG5cdFx0ICogc2NlbmUuYWRkVG8oY29udHJvbGxlcik7XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge1Njcm9sbE1hZ2ljLkNvbnRyb2xsZXJ9IGNvbnRyb2xsZXIgLSBUaGUgY29udHJvbGxlciB0byB3aGljaCB0aGUgc2NlbmUgc2hvdWxkIGJlIGFkZGVkLlxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXG5cdFx0ICovXG5cdFx0dGhpcy5hZGRUbyA9IGZ1bmN0aW9uIChjb250cm9sbGVyKSB7XG5cdFx0XHRpZiAoIShjb250cm9sbGVyIGluc3RhbmNlb2YgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcikpIHtcblx0XHRcdFx0bG9nKDEsIFwiRVJST1I6IHN1cHBsaWVkIGFyZ3VtZW50IG9mICdhZGRUbygpJyBpcyBub3QgYSB2YWxpZCBTY3JvbGxNYWdpYyBDb250cm9sbGVyXCIpO1xuXHRcdFx0fSBlbHNlIGlmIChfY29udHJvbGxlciAhPSBjb250cm9sbGVyKSB7XG5cdFx0XHRcdC8vIG5ldyBjb250cm9sbGVyXG5cdFx0XHRcdGlmIChfY29udHJvbGxlcikgeyAvLyB3YXMgYXNzb2NpYXRlZCB0byBhIGRpZmZlcmVudCBjb250cm9sbGVyIGJlZm9yZSwgc28gcmVtb3ZlIGl0Li4uXG5cdFx0XHRcdFx0X2NvbnRyb2xsZXIucmVtb3ZlU2NlbmUoU2NlbmUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdF9jb250cm9sbGVyID0gY29udHJvbGxlcjtcblx0XHRcdFx0dmFsaWRhdGVPcHRpb24oKTtcblx0XHRcdFx0dXBkYXRlRHVyYXRpb24odHJ1ZSk7XG5cdFx0XHRcdHVwZGF0ZVRyaWdnZXJFbGVtZW50UG9zaXRpb24odHJ1ZSk7XG5cdFx0XHRcdHVwZGF0ZVNjcm9sbE9mZnNldCgpO1xuXHRcdFx0XHRfY29udHJvbGxlci5pbmZvKFwiY29udGFpbmVyXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uQ29udGFpbmVyUmVzaXplKTtcblx0XHRcdFx0Y29udHJvbGxlci5hZGRTY2VuZShTY2VuZSk7XG5cdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJhZGRcIiwge1xuXHRcdFx0XHRcdGNvbnRyb2xsZXI6IF9jb250cm9sbGVyXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRsb2coMywgXCJhZGRlZCBcIiArIE5BTUVTUEFDRSArIFwiIHRvIGNvbnRyb2xsZXJcIik7XG5cdFx0XHRcdFNjZW5lLnVwZGF0ZSgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIFNjZW5lO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIGN1cnJlbnQgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgc2NlbmUuICBcblx0XHQgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGRpc2FibGUgdGhpcyBzY2VuZSB3aXRob3V0IHJlbW92aW5nIG9yIGRlc3Ryb3lpbmcgaXQuXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNlbmFibGVkXG5cdFx0ICpcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCB2YWx1ZVxuXHRcdCAqIHZhciBlbmFibGVkID0gc2NlbmUuZW5hYmxlZCgpO1xuXHRcdCAqXG5cdFx0ICogLy8gZGlzYWJsZSB0aGUgc2NlbmVcblx0XHQgKiBzY2VuZS5lbmFibGVkKGZhbHNlKTtcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW25ld1N0YXRlXSAtIFRoZSBuZXcgZW5hYmxlZCBzdGF0ZSBvZiB0aGUgc2NlbmUgYHRydWVgIG9yIGBmYWxzZWAuXG5cdFx0ICogQHJldHVybnMgeyhib29sZWFufFNjZW5lKX0gQ3VycmVudCBlbmFibGVkIHN0YXRlIG9yIHBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxuXHRcdCAqL1xuXHRcdHRoaXMuZW5hYmxlZCA9IGZ1bmN0aW9uIChuZXdTdGF0ZSkge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7IC8vIGdldFxuXHRcdFx0XHRyZXR1cm4gX2VuYWJsZWQ7XG5cdFx0XHR9IGVsc2UgaWYgKF9lbmFibGVkICE9IG5ld1N0YXRlKSB7IC8vIHNldFxuXHRcdFx0XHRfZW5hYmxlZCA9ICEhIG5ld1N0YXRlO1xuXHRcdFx0XHRTY2VuZS51cGRhdGUodHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gU2NlbmU7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSB0aGUgc2NlbmUgZnJvbSB0aGUgY29udHJvbGxlci4gIFxuXHRcdCAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgdG8gYENvbnRyb2xsZXIucmVtb3ZlU2NlbmUoc2NlbmUpYC5cblx0XHQgKiBUaGUgc2NlbmUgd2lsbCBub3QgYmUgdXBkYXRlZCBhbnltb3JlIHVudGlsIHlvdSByZWFkZCBpdCB0byBhIGNvbnRyb2xsZXIuXG5cdFx0ICogVG8gcmVtb3ZlIHRoZSBwaW4gb3IgdGhlIHR3ZWVuIHlvdSBuZWVkIHRvIGNhbGwgcmVtb3ZlVHdlZW4oKSBvciByZW1vdmVQaW4oKSByZXNwZWN0aXZlbHkuXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNyZW1vdmVcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIC8vIHJlbW92ZSB0aGUgc2NlbmUgZnJvbSBpdHMgY29udHJvbGxlclxuXHRcdCAqIHNjZW5lLnJlbW92ZSgpO1xuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cblx0XHQgKi9cblx0XHR0aGlzLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChfY29udHJvbGxlcikge1xuXHRcdFx0XHRfY29udHJvbGxlci5pbmZvKFwiY29udGFpbmVyXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uQ29udGFpbmVyUmVzaXplKTtcblx0XHRcdFx0dmFyIHRtcFBhcmVudCA9IF9jb250cm9sbGVyO1xuXHRcdFx0XHRfY29udHJvbGxlciA9IHVuZGVmaW5lZDtcblx0XHRcdFx0dG1wUGFyZW50LnJlbW92ZVNjZW5lKFNjZW5lKTtcblx0XHRcdFx0U2NlbmUudHJpZ2dlcihcInJlbW92ZVwiKTtcblx0XHRcdFx0bG9nKDMsIFwicmVtb3ZlZCBcIiArIE5BTUVTUEFDRSArIFwiIGZyb20gY29udHJvbGxlclwiKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBTY2VuZTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogRGVzdHJveSB0aGUgc2NlbmUgYW5kIGV2ZXJ5dGhpbmcuXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNkZXN0cm95XG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiAvLyBkZXN0cm95IHRoZSBzY2VuZSB3aXRob3V0IHJlc2V0dGluZyB0aGUgcGluIGFuZCB0d2VlbiB0byB0aGVpciBpbml0aWFsIHBvc2l0aW9uc1xuXHRcdCAqIHNjZW5lID0gc2NlbmUuZGVzdHJveSgpO1xuXHRcdCAqXG5cdFx0ICogLy8gZGVzdHJveSB0aGUgc2NlbmUgYW5kIHJlc2V0IHRoZSBwaW4gYW5kIHR3ZWVuXG5cdFx0ICogc2NlbmUgPSBzY2VuZS5kZXN0cm95KHRydWUpO1xuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbcmVzZXQ9ZmFsc2VdIC0gSWYgYHRydWVgIHRoZSBwaW4gYW5kIHR3ZWVuIChpZiBleGlzdGVudCkgd2lsbCBiZSByZXNldC5cblx0XHQgKiBAcmV0dXJucyB7bnVsbH0gTnVsbCB0byB1bnNldCBoYW5kbGVyIHZhcmlhYmxlcy5cblx0XHQgKi9cblx0XHR0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAocmVzZXQpIHtcblx0XHRcdFNjZW5lLnRyaWdnZXIoXCJkZXN0cm95XCIsIHtcblx0XHRcdFx0cmVzZXQ6IHJlc2V0XG5cdFx0XHR9KTtcblx0XHRcdFNjZW5lLnJlbW92ZSgpO1xuXHRcdFx0U2NlbmUub2ZmKFwiKi4qXCIpO1xuXHRcdFx0bG9nKDMsIFwiZGVzdHJveWVkIFwiICsgTkFNRVNQQUNFICsgXCIgKHJlc2V0OiBcIiArIChyZXNldCA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiKSArIFwiKVwiKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH07XG5cblxuXHRcdC8qKlxuXHRcdCAqIFVwZGF0ZXMgdGhlIFNjZW5lIHRvIHJlZmxlY3QgdGhlIGN1cnJlbnQgc3RhdGUuICBcblx0XHQgKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IHRvIGBDb250cm9sbGVyLnVwZGF0ZVNjZW5lKHNjZW5lLCBpbW1lZGlhdGVseSlgLiAgXG5cdFx0ICogVGhlIHVwZGF0ZSBtZXRob2QgY2FsY3VsYXRlcyB0aGUgc2NlbmUncyBzdGFydCBhbmQgZW5kIHBvc2l0aW9uIChiYXNlZCBvbiB0aGUgdHJpZ2dlciBlbGVtZW50LCB0cmlnZ2VyIGhvb2ssIGR1cmF0aW9uIGFuZCBvZmZzZXQpIGFuZCBjaGVja3MgaXQgYWdhaW5zdCB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIGNvbnRhaW5lci4gIFxuXHRcdCAqIEl0IHRoZW4gdXBkYXRlcyB0aGUgY3VycmVudCBzY2VuZSBzdGF0ZSBhY2NvcmRpbmdseSAob3IgZG9lcyBub3RoaW5nLCBpZiB0aGUgc3RhdGUgaXMgYWxyZWFkeSBjb3JyZWN0KSDigJMgUGlucyB3aWxsIGJlIHNldCB0byB0aGVpciBjb3JyZWN0IHBvc2l0aW9uIGFuZCB0d2VlbnMgd2lsbCBiZSB1cGRhdGVkIHRvIHRoZWlyIGNvcnJlY3QgcHJvZ3Jlc3MuXG5cdFx0ICogVGhpcyBtZWFucyBhbiB1cGRhdGUgZG9lc24ndCBuZWNlc3NhcmlseSByZXN1bHQgaW4gYSBwcm9ncmVzcyBjaGFuZ2UuIFRoZSBgcHJvZ3Jlc3NgIGV2ZW50IHdpbGwgYmUgZmlyZWQgaWYgdGhlIHByb2dyZXNzIGhhcyBpbmRlZWQgY2hhbmdlZCBiZXR3ZWVuIHRoaXMgdXBkYXRlIGFuZCB0aGUgbGFzdC4gIFxuXHRcdCAqIF8qKk5PVEU6KiogVGhpcyBtZXRob2QgZ2V0cyBjYWxsZWQgY29uc3RhbnRseSB3aGVuZXZlciBTY3JvbGxNYWdpYyBkZXRlY3RzIGEgY2hhbmdlLiBUaGUgb25seSBhcHBsaWNhdGlvbiBmb3IgeW91IGlzIGlmIHlvdSBjaGFuZ2Ugc29tZXRoaW5nIG91dHNpZGUgb2YgdGhlIHJlYWxtIG9mIFNjcm9sbE1hZ2ljLCBsaWtlIG1vdmluZyB0aGUgdHJpZ2dlciBvciBjaGFuZ2luZyB0d2VlbiBwYXJhbWV0ZXJzLl9cblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3VwZGF0ZVxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogLy8gdXBkYXRlIHRoZSBzY2VuZSBvbiBuZXh0IHRpY2tcblx0XHQgKiBzY2VuZS51cGRhdGUoKTtcblx0XHQgKlxuXHRcdCAqIC8vIHVwZGF0ZSB0aGUgc2NlbmUgaW1tZWRpYXRlbHlcblx0XHQgKiBzY2VuZS51cGRhdGUodHJ1ZSk7XG5cdFx0ICpcblx0XHQgKiBAZmlyZXMgU2NlbmUudXBkYXRlXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtpbW1lZGlhdGVseT1mYWxzZV0gLSBJZiBgdHJ1ZWAgdGhlIHVwZGF0ZSB3aWxsIGJlIGluc3RhbnQsIGlmIGBmYWxzZWAgaXQgd2lsbCB3YWl0IHVudGlsIG5leHQgdXBkYXRlIGN5Y2xlIChiZXR0ZXIgcGVyZm9ybWFuY2UpLlxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXG5cdFx0ICovXG5cdFx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoaW1tZWRpYXRlbHkpIHtcblx0XHRcdGlmIChfY29udHJvbGxlcikge1xuXHRcdFx0XHRpZiAoaW1tZWRpYXRlbHkpIHtcblx0XHRcdFx0XHRpZiAoX2NvbnRyb2xsZXIuZW5hYmxlZCgpICYmIF9lbmFibGVkKSB7XG5cdFx0XHRcdFx0XHR2YXJcblx0XHRcdFx0XHRcdHNjcm9sbFBvcyA9IF9jb250cm9sbGVyLmluZm8oXCJzY3JvbGxQb3NcIiksXG5cdFx0XHRcdFx0XHRcdG5ld1Byb2dyZXNzO1xuXG5cdFx0XHRcdFx0XHRpZiAoX29wdGlvbnMuZHVyYXRpb24gPiAwKSB7XG5cdFx0XHRcdFx0XHRcdG5ld1Byb2dyZXNzID0gKHNjcm9sbFBvcyAtIF9zY3JvbGxPZmZzZXQuc3RhcnQpIC8gKF9zY3JvbGxPZmZzZXQuZW5kIC0gX3Njcm9sbE9mZnNldC5zdGFydCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRuZXdQcm9ncmVzcyA9IHNjcm9sbFBvcyA+PSBfc2Nyb2xsT2Zmc2V0LnN0YXJ0ID8gMSA6IDA7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJ1cGRhdGVcIiwge1xuXHRcdFx0XHRcdFx0XHRzdGFydFBvczogX3Njcm9sbE9mZnNldC5zdGFydCxcblx0XHRcdFx0XHRcdFx0ZW5kUG9zOiBfc2Nyb2xsT2Zmc2V0LmVuZCxcblx0XHRcdFx0XHRcdFx0c2Nyb2xsUG9zOiBzY3JvbGxQb3Ncblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRTY2VuZS5wcm9ncmVzcyhuZXdQcm9ncmVzcyk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChfcGluICYmIF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HKSB7XG5cdFx0XHRcdFx0XHR1cGRhdGVQaW5TdGF0ZSh0cnVlKTsgLy8gdW5waW4gaW4gcG9zaXRpb25cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0X2NvbnRyb2xsZXIudXBkYXRlU2NlbmUoU2NlbmUsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIFNjZW5lO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBVcGRhdGVzIGR5bmFtaWMgc2NlbmUgdmFyaWFibGVzIGxpa2UgdGhlIHRyaWdnZXIgZWxlbWVudCBwb3NpdGlvbiBvciB0aGUgZHVyYXRpb24uXG5cdFx0ICogVGhpcyBtZXRob2QgaXMgYXV0b21hdGljYWxseSBjYWxsZWQgaW4gcmVndWxhciBpbnRlcnZhbHMgZnJvbSB0aGUgY29udHJvbGxlci4gU2VlIHtAbGluayBTY3JvbGxNYWdpYy5Db250cm9sbGVyfSBvcHRpb24gYHJlZnJlc2hJbnRlcnZhbGAuXG5cdFx0ICogXG5cdFx0ICogWW91IGNhbiBjYWxsIGl0IHRvIG1pbmltaXplIGxhZywgZm9yIGV4YW1wbGUgd2hlbiB5b3UgaW50ZW50aW9uYWxseSBjaGFuZ2UgdGhlIHBvc2l0aW9uIG9mIHRoZSB0cmlnZ2VyRWxlbWVudC5cblx0XHQgKiBJZiB5b3UgZG9uJ3QgaXQgd2lsbCBzaW1wbHkgYmUgdXBkYXRlZCBpbiB0aGUgbmV4dCByZWZyZXNoIGludGVydmFsIG9mIHRoZSBjb250YWluZXIsIHdoaWNoIGlzIHVzdWFsbHkgc3VmZmljaWVudC5cblx0XHQgKlxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjcmVmcmVzaFxuXHRcdCAqIEBzaW5jZSAxLjEuMFxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogc2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe3RyaWdnZXJFbGVtZW50OiBcIiN0cmlnZ2VyXCJ9KTtcblx0XHQgKiBcblx0XHQgKiAvLyBjaGFuZ2UgdGhlIHBvc2l0aW9uIG9mIHRoZSB0cmlnZ2VyXG5cdFx0ICogJChcIiN0cmlnZ2VyXCIpLmNzcyhcInRvcFwiLCA1MDApO1xuXHRcdCAqIC8vIGltbWVkaWF0ZWx5IGxldCB0aGUgc2NlbmUga25vdyBvZiB0aGlzIGNoYW5nZVxuXHRcdCAqIHNjZW5lLnJlZnJlc2goKTtcblx0XHQgKlxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuc2hpZnR9LCBpZiB0aGUgdHJpZ2dlciBlbGVtZW50IHBvc2l0aW9uIG9yIHRoZSBkdXJhdGlvbiBjaGFuZ2VkXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCBpZiB0aGUgZHVyYXRpb24gY2hhbmdlZFxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cblx0XHQgKi9cblx0XHR0aGlzLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR1cGRhdGVEdXJhdGlvbigpO1xuXHRcdFx0dXBkYXRlVHJpZ2dlckVsZW1lbnRQb3NpdGlvbigpO1xuXHRcdFx0Ly8gdXBkYXRlIHRyaWdnZXIgZWxlbWVudCBwb3NpdGlvblxuXHRcdFx0cmV0dXJuIFNjZW5lO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIHNjZW5lJ3MgcHJvZ3Jlc3MuICBcblx0XHQgKiBVc3VhbGx5IGl0IHNob3VsZG4ndCBiZSBuZWNlc3NhcnkgdG8gdXNlIHRoaXMgYXMgYSBzZXR0ZXIsIGFzIGl0IGlzIHNldCBhdXRvbWF0aWNhbGx5IGJ5IHNjZW5lLnVwZGF0ZSgpLiAgXG5cdFx0ICogVGhlIG9yZGVyIGluIHdoaWNoIHRoZSBldmVudHMgYXJlIGZpcmVkIGRlcGVuZHMgb24gdGhlIGR1cmF0aW9uIG9mIHRoZSBzY2VuZTpcblx0XHQgKiAgMS4gU2NlbmVzIHdpdGggYGR1cmF0aW9uID09IDBgOiAgXG5cdFx0ICogIFNjZW5lcyB0aGF0IGhhdmUgbm8gZHVyYXRpb24gYnkgZGVmaW5pdGlvbiBoYXZlIG5vIGVuZGluZy4gVGh1cyB0aGUgYGVuZGAgZXZlbnQgd2lsbCBuZXZlciBiZSBmaXJlZC4gIFxuXHRcdCAqICBXaGVuIHRoZSB0cmlnZ2VyIHBvc2l0aW9uIG9mIHRoZSBzY2VuZSBpcyBwYXNzZWQgdGhlIGV2ZW50cyBhcmUgYWx3YXlzIGZpcmVkIGluIHRoaXMgb3JkZXI6ICBcblx0XHQgKiAgYGVudGVyYCwgYHN0YXJ0YCwgYHByb2dyZXNzYCB3aGVuIHNjcm9sbGluZyBmb3J3YXJkICBcblx0XHQgKiAgYW5kICBcblx0XHQgKiAgYHByb2dyZXNzYCwgYHN0YXJ0YCwgYGxlYXZlYCB3aGVuIHNjcm9sbGluZyBpbiByZXZlcnNlXG5cdFx0ICogIDIuIFNjZW5lcyB3aXRoIGBkdXJhdGlvbiA+IDBgOiAgXG5cdFx0ICogIFNjZW5lcyB3aXRoIGEgc2V0IGR1cmF0aW9uIGhhdmUgYSBkZWZpbmVkIHN0YXJ0IGFuZCBlbmQgcG9pbnQuICBcblx0XHQgKiAgV2hlbiBzY3JvbGxpbmcgcGFzdCB0aGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHNjZW5lIGl0IHdpbGwgZmlyZSB0aGVzZSBldmVudHMgaW4gdGhpcyBvcmRlcjogIFxuXHRcdCAqICBgZW50ZXJgLCBgc3RhcnRgLCBgcHJvZ3Jlc3NgICBcblx0XHQgKiAgV2hlbiBjb250aW51aW5nIHRvIHNjcm9sbCBhbmQgcGFzc2luZyB0aGUgZW5kIHBvaW50IGl0IHdpbGwgZmlyZSB0aGVzZSBldmVudHM6ICBcblx0XHQgKiAgYHByb2dyZXNzYCwgYGVuZGAsIGBsZWF2ZWAgIFxuXHRcdCAqICBXaGVuIHJldmVyc2luZyB0aHJvdWdoIHRoZSBlbmQgcG9pbnQgdGhlc2UgZXZlbnRzIGFyZSBmaXJlZDogIFxuXHRcdCAqICBgZW50ZXJgLCBgZW5kYCwgYHByb2dyZXNzYCAgXG5cdFx0ICogIEFuZCB3aGVuIGNvbnRpbnVpbmcgdG8gc2Nyb2xsIHBhc3QgdGhlIHN0YXJ0IHBvc2l0aW9uIGluIHJldmVyc2UgaXQgd2lsbCBmaXJlOiAgXG5cdFx0ICogIGBwcm9ncmVzc2AsIGBzdGFydGAsIGBsZWF2ZWAgIFxuXHRcdCAqICBJbiBiZXR3ZWVuIHN0YXJ0IGFuZCBlbmQgdGhlIGBwcm9ncmVzc2AgZXZlbnQgd2lsbCBiZSBjYWxsZWQgY29uc3RhbnRseSwgd2hlbmV2ZXIgdGhlIHByb2dyZXNzIGNoYW5nZXMuXG5cdFx0ICogXG5cdFx0ICogSW4gc2hvcnQ6ICBcblx0XHQgKiBgZW50ZXJgIGV2ZW50cyB3aWxsIGFsd2F5cyB0cmlnZ2VyICoqYmVmb3JlKiogdGhlIHByb2dyZXNzIHVwZGF0ZSBhbmQgYGxlYXZlYCBlbnZlbnRzIHdpbGwgdHJpZ2dlciAqKmFmdGVyKiogdGhlIHByb2dyZXNzIHVwZGF0ZS4gIFxuXHRcdCAqIGBzdGFydGAgYW5kIGBlbmRgIHdpbGwgYWx3YXlzIHRyaWdnZXIgYXQgdGhlaXIgcmVzcGVjdGl2ZSBwb3NpdGlvbi5cblx0XHQgKiBcblx0XHQgKiBQbGVhc2UgcmV2aWV3IHRoZSBldmVudCBkZXNjcmlwdGlvbnMgZm9yIGRldGFpbHMgb24gdGhlIGV2ZW50cyBhbmQgdGhlIGV2ZW50IG9iamVjdCB0aGF0IGlzIHBhc3NlZCB0byB0aGUgY2FsbGJhY2suXG5cdFx0ICogXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNwcm9ncmVzc1xuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IHNjZW5lIHByb2dyZXNzXG5cdFx0ICogdmFyIHByb2dyZXNzID0gc2NlbmUucHJvZ3Jlc3MoKTtcblx0XHQgKlxuXHRcdCAqIC8vIHNldCBuZXcgc2NlbmUgcHJvZ3Jlc3Ncblx0XHQgKiBzY2VuZS5wcm9ncmVzcygwLjMpO1xuXHRcdCAqXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5lbnRlcn0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnN0YXJ0fSwgd2hlbiB1c2VkIGFzIHNldHRlclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUucHJvZ3Jlc3N9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5lbmR9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5sZWF2ZX0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBbcHJvZ3Jlc3NdIC0gVGhlIG5ldyBwcm9ncmVzcyB2YWx1ZSBvZiB0aGUgc2NlbmUgYFswLTFdYC5cblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBgZ2V0YCAtICBDdXJyZW50IHNjZW5lIHByb2dyZXNzLlxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gYHNldGAgLSAgUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXG5cdFx0ICovXG5cdFx0dGhpcy5wcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuXHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7IC8vIGdldFxuXHRcdFx0XHRyZXR1cm4gX3Byb2dyZXNzO1xuXHRcdFx0fSBlbHNlIHsgLy8gc2V0XG5cdFx0XHRcdHZhclxuXHRcdFx0XHRkb1VwZGF0ZSA9IGZhbHNlLFxuXHRcdFx0XHRcdG9sZFN0YXRlID0gX3N0YXRlLFxuXHRcdFx0XHRcdHNjcm9sbERpcmVjdGlvbiA9IF9jb250cm9sbGVyID8gX2NvbnRyb2xsZXIuaW5mbyhcInNjcm9sbERpcmVjdGlvblwiKSA6ICdQQVVTRUQnLFxuXHRcdFx0XHRcdHJldmVyc2VPckZvcndhcmQgPSBfb3B0aW9ucy5yZXZlcnNlIHx8IHByb2dyZXNzID49IF9wcm9ncmVzcztcblx0XHRcdFx0aWYgKF9vcHRpb25zLmR1cmF0aW9uID09PSAwKSB7XG5cdFx0XHRcdFx0Ly8gemVybyBkdXJhdGlvbiBzY2VuZXNcblx0XHRcdFx0XHRkb1VwZGF0ZSA9IF9wcm9ncmVzcyAhPSBwcm9ncmVzcztcblx0XHRcdFx0XHRfcHJvZ3Jlc3MgPSBwcm9ncmVzcyA8IDEgJiYgcmV2ZXJzZU9yRm9yd2FyZCA/IDAgOiAxO1xuXHRcdFx0XHRcdF9zdGF0ZSA9IF9wcm9ncmVzcyA9PT0gMCA/IFNDRU5FX1NUQVRFX0JFRk9SRSA6IFNDRU5FX1NUQVRFX0RVUklORztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBzY2VuZXMgd2l0aCBzdGFydCBhbmQgZW5kXG5cdFx0XHRcdFx0aWYgKHByb2dyZXNzIDwgMCAmJiBfc3RhdGUgIT09IFNDRU5FX1NUQVRFX0JFRk9SRSAmJiByZXZlcnNlT3JGb3J3YXJkKSB7XG5cdFx0XHRcdFx0XHQvLyBnbyBiYWNrIHRvIGluaXRpYWwgc3RhdGVcblx0XHRcdFx0XHRcdF9wcm9ncmVzcyA9IDA7XG5cdFx0XHRcdFx0XHRfc3RhdGUgPSBTQ0VORV9TVEFURV9CRUZPUkU7XG5cdFx0XHRcdFx0XHRkb1VwZGF0ZSA9IHRydWU7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwcm9ncmVzcyA+PSAwICYmIHByb2dyZXNzIDwgMSAmJiByZXZlcnNlT3JGb3J3YXJkKSB7XG5cdFx0XHRcdFx0XHRfcHJvZ3Jlc3MgPSBwcm9ncmVzcztcblx0XHRcdFx0XHRcdF9zdGF0ZSA9IFNDRU5FX1NUQVRFX0RVUklORztcblx0XHRcdFx0XHRcdGRvVXBkYXRlID0gdHJ1ZTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHByb2dyZXNzID49IDEgJiYgX3N0YXRlICE9PSBTQ0VORV9TVEFURV9BRlRFUikge1xuXHRcdFx0XHRcdFx0X3Byb2dyZXNzID0gMTtcblx0XHRcdFx0XHRcdF9zdGF0ZSA9IFNDRU5FX1NUQVRFX0FGVEVSO1xuXHRcdFx0XHRcdFx0ZG9VcGRhdGUgPSB0cnVlO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcgJiYgIXJldmVyc2VPckZvcndhcmQpIHtcblx0XHRcdFx0XHRcdHVwZGF0ZVBpblN0YXRlKCk7IC8vIGluIGNhc2Ugd2Ugc2Nyb2xsZWQgYmFja3dhcmRzIG1pZC1zY2VuZSBhbmQgcmV2ZXJzZSBpcyBkaXNhYmxlZCA9PiB1cGRhdGUgdGhlIHBpbiBwb3NpdGlvbiwgc28gaXQgZG9lc24ndCBtb3ZlIGJhY2sgYXMgd2VsbC5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRvVXBkYXRlKSB7XG5cdFx0XHRcdFx0Ly8gZmlyZSBldmVudHNcblx0XHRcdFx0XHR2YXJcblx0XHRcdFx0XHRldmVudFZhcnMgPSB7XG5cdFx0XHRcdFx0XHRwcm9ncmVzczogX3Byb2dyZXNzLFxuXHRcdFx0XHRcdFx0c3RhdGU6IF9zdGF0ZSxcblx0XHRcdFx0XHRcdHNjcm9sbERpcmVjdGlvbjogc2Nyb2xsRGlyZWN0aW9uXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHN0YXRlQ2hhbmdlZCA9IF9zdGF0ZSAhPSBvbGRTdGF0ZTtcblxuXHRcdFx0XHRcdHZhciB0cmlnZ2VyID0gZnVuY3Rpb24gKGV2ZW50TmFtZSkgeyAvLyB0bXAgaGVscGVyIHRvIHNpbXBsaWZ5IGNvZGVcblx0XHRcdFx0XHRcdFNjZW5lLnRyaWdnZXIoZXZlbnROYW1lLCBldmVudFZhcnMpO1xuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRpZiAoc3RhdGVDaGFuZ2VkKSB7IC8vIGVudGVyIGV2ZW50c1xuXHRcdFx0XHRcdFx0aWYgKG9sZFN0YXRlICE9PSBTQ0VORV9TVEFURV9EVVJJTkcpIHtcblx0XHRcdFx0XHRcdFx0dHJpZ2dlcihcImVudGVyXCIpO1xuXHRcdFx0XHRcdFx0XHR0cmlnZ2VyKG9sZFN0YXRlID09PSBTQ0VORV9TVEFURV9CRUZPUkUgPyBcInN0YXJ0XCIgOiBcImVuZFwiKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dHJpZ2dlcihcInByb2dyZXNzXCIpO1xuXHRcdFx0XHRcdGlmIChzdGF0ZUNoYW5nZWQpIHsgLy8gbGVhdmUgZXZlbnRzXG5cdFx0XHRcdFx0XHRpZiAoX3N0YXRlICE9PSBTQ0VORV9TVEFURV9EVVJJTkcpIHtcblx0XHRcdFx0XHRcdFx0dHJpZ2dlcihfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0JFRk9SRSA/IFwic3RhcnRcIiA6IFwiZW5kXCIpO1xuXHRcdFx0XHRcdFx0XHR0cmlnZ2VyKFwibGVhdmVcIik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIFNjZW5lO1xuXHRcdFx0fVxuXHRcdH07XG5cblxuXHRcdC8qKlxuXHRcdCAqIFVwZGF0ZSB0aGUgc3RhcnQgYW5kIGVuZCBzY3JvbGxPZmZzZXQgb2YgdGhlIGNvbnRhaW5lci5cblx0XHQgKiBUaGUgcG9zaXRpb25zIHJlZmxlY3Qgd2hhdCB0aGUgY29udHJvbGxlcidzIHNjcm9sbCBwb3NpdGlvbiB3aWxsIGJlIGF0IHRoZSBzdGFydCBhbmQgZW5kIHJlc3BlY3RpdmVseS5cblx0XHQgKiBJcyBjYWxsZWQsIHdoZW46XG5cdFx0ICogICAtIFNjZW5lIGV2ZW50IFwiY2hhbmdlXCIgaXMgY2FsbGVkIHdpdGg6IG9mZnNldCwgdHJpZ2dlckhvb2ssIGR1cmF0aW9uIFxuXHRcdCAqICAgLSBzY3JvbGwgY29udGFpbmVyIGV2ZW50IFwicmVzaXplXCIgaXMgY2FsbGVkXG5cdFx0ICogICAtIHRoZSBwb3NpdGlvbiBvZiB0aGUgdHJpZ2dlckVsZW1lbnQgY2hhbmdlc1xuXHRcdCAqICAgLSB0aGUgY29udHJvbGxlciBjaGFuZ2VzIC0+IGFkZFRvKClcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHZhciB1cGRhdGVTY3JvbGxPZmZzZXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRfc2Nyb2xsT2Zmc2V0ID0ge1xuXHRcdFx0XHRzdGFydDogX3RyaWdnZXJQb3MgKyBfb3B0aW9ucy5vZmZzZXRcblx0XHRcdH07XG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIgJiYgX29wdGlvbnMudHJpZ2dlckVsZW1lbnQpIHtcblx0XHRcdFx0Ly8gdGFrZSBhd2F5IHRyaWdnZXJIb29rIHBvcnRpb24gdG8gZ2V0IHJlbGF0aXZlIHRvIHRvcFxuXHRcdFx0XHRfc2Nyb2xsT2Zmc2V0LnN0YXJ0IC09IF9jb250cm9sbGVyLmluZm8oXCJzaXplXCIpICogX29wdGlvbnMudHJpZ2dlckhvb2s7XG5cdFx0XHR9XG5cdFx0XHRfc2Nyb2xsT2Zmc2V0LmVuZCA9IF9zY3JvbGxPZmZzZXQuc3RhcnQgKyBfb3B0aW9ucy5kdXJhdGlvbjtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogVXBkYXRlcyB0aGUgZHVyYXRpb24gaWYgc2V0IHRvIGEgZHluYW1pYyBmdW5jdGlvbi5cblx0XHQgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgc2NlbmUgaXMgYWRkZWQgdG8gYSBjb250cm9sbGVyIGFuZCBpbiByZWd1bGFyIGludGVydmFscyBmcm9tIHRoZSBjb250cm9sbGVyIHRocm91Z2ggc2NlbmUucmVmcmVzaCgpLlxuXHRcdCAqIFxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgaWYgdGhlIGR1cmF0aW9uIGNoYW5nZWRcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnNoaWZ0fSwgaWYgdGhlIGR1cmF0aW9uIGNoYW5nZWRcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N1cHByZXNzRXZlbnRzPWZhbHNlXSAtIElmIHRydWUgdGhlIHNoaWZ0IGV2ZW50IHdpbGwgYmUgc3VwcHJlc3NlZC5cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHZhciB1cGRhdGVEdXJhdGlvbiA9IGZ1bmN0aW9uIChzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0Ly8gdXBkYXRlIGR1cmF0aW9uXG5cdFx0XHRpZiAoX2R1cmF0aW9uVXBkYXRlTWV0aG9kKSB7XG5cdFx0XHRcdHZhciB2YXJuYW1lID0gXCJkdXJhdGlvblwiO1xuXHRcdFx0XHRpZiAoY2hhbmdlT3B0aW9uKHZhcm5hbWUsIF9kdXJhdGlvblVwZGF0ZU1ldGhvZC5jYWxsKFNjZW5lKSkgJiYgIXN1cHByZXNzRXZlbnRzKSB7IC8vIHNldFxuXHRcdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJjaGFuZ2VcIiwge1xuXHRcdFx0XHRcdFx0d2hhdDogdmFybmFtZSxcblx0XHRcdFx0XHRcdG5ld3ZhbDogX29wdGlvbnNbdmFybmFtZV1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwic2hpZnRcIiwge1xuXHRcdFx0XHRcdFx0cmVhc29uOiB2YXJuYW1lXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIHRyaWdnZXJFbGVtZW50LCBpZiBwcmVzZW50LlxuXHRcdCAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCAuLi5cblx0XHQgKiAgLSAuLi4gd2hlbiB0aGUgdHJpZ2dlckVsZW1lbnQgaXMgY2hhbmdlZFxuXHRcdCAqICAtIC4uLiB3aGVuIHRoZSBzY2VuZSBpcyBhZGRlZCB0byBhIChuZXcpIGNvbnRyb2xsZXJcblx0XHQgKiAgLSAuLi4gaW4gcmVndWxhciBpbnRlcnZhbHMgZnJvbSB0aGUgY29udHJvbGxlciB0aHJvdWdoIHNjZW5lLnJlZnJlc2goKS5cblx0XHQgKiBcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnNoaWZ0fSwgaWYgdGhlIHBvc2l0aW9uIGNoYW5nZWRcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N1cHByZXNzRXZlbnRzPWZhbHNlXSAtIElmIHRydWUgdGhlIHNoaWZ0IGV2ZW50IHdpbGwgYmUgc3VwcHJlc3NlZC5cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHZhciB1cGRhdGVUcmlnZ2VyRWxlbWVudFBvc2l0aW9uID0gZnVuY3Rpb24gKHN1cHByZXNzRXZlbnRzKSB7XG5cdFx0XHR2YXJcblx0XHRcdGVsZW1lbnRQb3MgPSAwLFxuXHRcdFx0XHR0ZWxlbSA9IF9vcHRpb25zLnRyaWdnZXJFbGVtZW50O1xuXHRcdFx0aWYgKF9jb250cm9sbGVyICYmIHRlbGVtKSB7XG5cdFx0XHRcdHZhclxuXHRcdFx0XHRjb250cm9sbGVySW5mbyA9IF9jb250cm9sbGVyLmluZm8oKSxcblx0XHRcdFx0XHRjb250YWluZXJPZmZzZXQgPSBfdXRpbC5nZXQub2Zmc2V0KGNvbnRyb2xsZXJJbmZvLmNvbnRhaW5lciksXG5cdFx0XHRcdFx0Ly8gY29udGFpbmVyIHBvc2l0aW9uIGlzIG5lZWRlZCBiZWNhdXNlIGVsZW1lbnQgb2Zmc2V0IGlzIHJldHVybmVkIGluIHJlbGF0aW9uIHRvIGRvY3VtZW50LCBub3QgaW4gcmVsYXRpb24gdG8gY29udGFpbmVyLlxuXHRcdFx0XHRcdHBhcmFtID0gY29udHJvbGxlckluZm8udmVydGljYWwgPyBcInRvcFwiIDogXCJsZWZ0XCI7IC8vIHdoaWNoIHBhcmFtIGlzIG9mIGludGVyZXN0ID9cblx0XHRcdFx0Ly8gaWYgcGFyZW50IGlzIHNwYWNlciwgdXNlIHNwYWNlciBwb3NpdGlvbiBpbnN0ZWFkIHNvIGNvcnJlY3Qgc3RhcnQgcG9zaXRpb24gaXMgcmV0dXJuZWQgZm9yIHBpbm5lZCBlbGVtZW50cy5cblx0XHRcdFx0d2hpbGUgKHRlbGVtLnBhcmVudE5vZGUuaGFzQXR0cmlidXRlKFBJTl9TUEFDRVJfQVRUUklCVVRFKSkge1xuXHRcdFx0XHRcdHRlbGVtID0gdGVsZW0ucGFyZW50Tm9kZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBlbGVtZW50T2Zmc2V0ID0gX3V0aWwuZ2V0Lm9mZnNldCh0ZWxlbSk7XG5cblx0XHRcdFx0aWYgKCFjb250cm9sbGVySW5mby5pc0RvY3VtZW50KSB7IC8vIGNvbnRhaW5lciBpcyBub3QgdGhlIGRvY3VtZW50IHJvb3QsIHNvIHN1YnN0cmFjdCBzY3JvbGwgUG9zaXRpb24gdG8gZ2V0IGNvcnJlY3QgdHJpZ2dlciBlbGVtZW50IHBvc2l0aW9uIHJlbGF0aXZlIHRvIHNjcm9sbGNvbnRlbnRcblx0XHRcdFx0XHRjb250YWluZXJPZmZzZXRbcGFyYW1dIC09IF9jb250cm9sbGVyLnNjcm9sbFBvcygpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZWxlbWVudFBvcyA9IGVsZW1lbnRPZmZzZXRbcGFyYW1dIC0gY29udGFpbmVyT2Zmc2V0W3BhcmFtXTtcblx0XHRcdH1cblx0XHRcdHZhciBjaGFuZ2VkID0gZWxlbWVudFBvcyAhPSBfdHJpZ2dlclBvcztcblx0XHRcdF90cmlnZ2VyUG9zID0gZWxlbWVudFBvcztcblx0XHRcdGlmIChjaGFuZ2VkICYmICFzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwic2hpZnRcIiwge1xuXHRcdFx0XHRcdHJlYXNvbjogXCJ0cmlnZ2VyRWxlbWVudFBvc2l0aW9uXCJcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFRyaWdnZXIgYSBzaGlmdCBldmVudCwgd2hlbiB0aGUgY29udGFpbmVyIGlzIHJlc2l6ZWQgYW5kIHRoZSB0cmlnZ2VySG9vayBpcyA+IDEuXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR2YXIgb25Db250YWluZXJSZXNpemUgPSBmdW5jdGlvbiAoZSkge1xuXHRcdFx0aWYgKF9vcHRpb25zLnRyaWdnZXJIb29rID4gMCkge1xuXHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwic2hpZnRcIiwge1xuXHRcdFx0XHRcdHJlYXNvbjogXCJjb250YWluZXJSZXNpemVcIlxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIF92YWxpZGF0ZSA9IF91dGlsLmV4dGVuZChTQ0VORV9PUFRJT05TLnZhbGlkYXRlLCB7XG5cdFx0XHQvLyB2YWxpZGF0aW9uIGZvciBkdXJhdGlvbiBoYW5kbGVkIGludGVybmFsbHkgZm9yIHJlZmVyZW5jZSB0byBwcml2YXRlIHZhciBfZHVyYXRpb25NZXRob2Rcblx0XHRcdGR1cmF0aW9uOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0XHRcdGlmIChfdXRpbC50eXBlLlN0cmluZyh2YWwpICYmIHZhbC5tYXRjaCgvXihcXC58XFxkKSpcXGQrJSQvKSkge1xuXHRcdFx0XHRcdC8vIHBlcmNlbnRhZ2UgdmFsdWVcblx0XHRcdFx0XHR2YXIgcGVyYyA9IHBhcnNlRmxvYXQodmFsKSAvIDEwMDtcblx0XHRcdFx0XHR2YWwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX2NvbnRyb2xsZXIgPyBfY29udHJvbGxlci5pbmZvKFwic2l6ZVwiKSAqIHBlcmMgOiAwO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKF91dGlsLnR5cGUuRnVuY3Rpb24odmFsKSkge1xuXHRcdFx0XHRcdC8vIGZ1bmN0aW9uXG5cdFx0XHRcdFx0X2R1cmF0aW9uVXBkYXRlTWV0aG9kID0gdmFsO1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHR2YWwgPSBwYXJzZUZsb2F0KF9kdXJhdGlvblVwZGF0ZU1ldGhvZCgpKTtcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0XHR2YWwgPSAtMTsgLy8gd2lsbCBjYXVzZSBlcnJvciBiZWxvd1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyB2YWwgaGFzIHRvIGJlIGZsb2F0XG5cdFx0XHRcdHZhbCA9IHBhcnNlRmxvYXQodmFsKTtcblx0XHRcdFx0aWYgKCFfdXRpbC50eXBlLk51bWJlcih2YWwpIHx8IHZhbCA8IDApIHtcblx0XHRcdFx0XHRpZiAoX2R1cmF0aW9uVXBkYXRlTWV0aG9kKSB7XG5cdFx0XHRcdFx0XHRfZHVyYXRpb25VcGRhdGVNZXRob2QgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHR0aHJvdyBbXCJJbnZhbGlkIHJldHVybiB2YWx1ZSBvZiBzdXBwbGllZCBmdW5jdGlvbiBmb3Igb3B0aW9uIFxcXCJkdXJhdGlvblxcXCI6XCIsIHZhbF07XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRocm93IFtcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwiZHVyYXRpb25cXFwiOlwiLCB2YWxdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdmFsO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0LyoqXG5cdFx0ICogQ2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBhIHNwZWNpZmljIG9yIGFsbCBvcHRpb25zIGFuZCByZXNldCB0byBkZWZhdWx0IGlmIG5lY2Nlc3NhcnkuXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR2YXIgdmFsaWRhdGVPcHRpb24gPSBmdW5jdGlvbiAoY2hlY2spIHtcblx0XHRcdGNoZWNrID0gYXJndW1lbnRzLmxlbmd0aCA/IFtjaGVja10gOiBPYmplY3Qua2V5cyhfdmFsaWRhdGUpO1xuXHRcdFx0Y2hlY2suZm9yRWFjaChmdW5jdGlvbiAob3B0aW9uTmFtZSwga2V5KSB7XG5cdFx0XHRcdHZhciB2YWx1ZTtcblx0XHRcdFx0aWYgKF92YWxpZGF0ZVtvcHRpb25OYW1lXSkgeyAvLyB0aGVyZSBpcyBhIHZhbGlkYXRpb24gbWV0aG9kIGZvciB0aGlzIG9wdGlvblxuXHRcdFx0XHRcdHRyeSB7IC8vIHZhbGlkYXRlIHZhbHVlXG5cdFx0XHRcdFx0XHR2YWx1ZSA9IF92YWxpZGF0ZVtvcHRpb25OYW1lXShfb3B0aW9uc1tvcHRpb25OYW1lXSk7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkgeyAvLyB2YWxpZGF0aW9uIGZhaWxlZCAtPiByZXNldCB0byBkZWZhdWx0XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IERFRkFVTFRfT1BUSU9OU1tvcHRpb25OYW1lXTtcblx0XHRcdFx0XHRcdHZhciBsb2dNU0cgPSBfdXRpbC50eXBlLlN0cmluZyhlKSA/IFtlXSA6IGU7XG5cdFx0XHRcdFx0XHRpZiAoX3V0aWwudHlwZS5BcnJheShsb2dNU0cpKSB7XG5cdFx0XHRcdFx0XHRcdGxvZ01TR1swXSA9IFwiRVJST1I6IFwiICsgbG9nTVNHWzBdO1xuXHRcdFx0XHRcdFx0XHRsb2dNU0cudW5zaGlmdCgxKTsgLy8gbG9nbGV2ZWwgMSBmb3IgZXJyb3IgbXNnXG5cdFx0XHRcdFx0XHRcdGxvZy5hcHBseSh0aGlzLCBsb2dNU0cpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0bG9nKDEsIFwiRVJST1I6IFByb2JsZW0gZXhlY3V0aW5nIHZhbGlkYXRpb24gY2FsbGJhY2sgZm9yIG9wdGlvbiAnXCIgKyBvcHRpb25OYW1lICsgXCInOlwiLCBlLm1lc3NhZ2UpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdFx0XHRfb3B0aW9uc1tvcHRpb25OYW1lXSA9IHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIEhlbHBlciB1c2VkIGJ5IHRoZSBzZXR0ZXIvZ2V0dGVycyBmb3Igc2NlbmUgb3B0aW9uc1xuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dmFyIGNoYW5nZU9wdGlvbiA9IGZ1bmN0aW9uICh2YXJuYW1lLCBuZXd2YWwpIHtcblx0XHRcdHZhclxuXHRcdFx0Y2hhbmdlZCA9IGZhbHNlLFxuXHRcdFx0XHRvbGR2YWwgPSBfb3B0aW9uc1t2YXJuYW1lXTtcblx0XHRcdGlmIChfb3B0aW9uc1t2YXJuYW1lXSAhPSBuZXd2YWwpIHtcblx0XHRcdFx0X29wdGlvbnNbdmFybmFtZV0gPSBuZXd2YWw7XG5cdFx0XHRcdHZhbGlkYXRlT3B0aW9uKHZhcm5hbWUpOyAvLyByZXNldHMgdG8gZGVmYXVsdCBpZiBuZWNlc3Nhcnlcblx0XHRcdFx0Y2hhbmdlZCA9IG9sZHZhbCAhPSBfb3B0aW9uc1t2YXJuYW1lXTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBjaGFuZ2VkO1xuXHRcdH07XG5cblx0XHQvLyBnZW5lcmF0ZSBnZXR0ZXJzL3NldHRlcnMgZm9yIGFsbCBvcHRpb25zXG5cdFx0dmFyIGFkZFNjZW5lT3B0aW9uID0gZnVuY3Rpb24gKG9wdGlvbk5hbWUpIHtcblx0XHRcdGlmICghU2NlbmVbb3B0aW9uTmFtZV0pIHtcblx0XHRcdFx0U2NlbmVbb3B0aW9uTmFtZV0gPSBmdW5jdGlvbiAobmV3VmFsKSB7XG5cdFx0XHRcdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7IC8vIGdldFxuXHRcdFx0XHRcdFx0cmV0dXJuIF9vcHRpb25zW29wdGlvbk5hbWVdO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAob3B0aW9uTmFtZSA9PT0gXCJkdXJhdGlvblwiKSB7IC8vIG5ldyBkdXJhdGlvbiBpcyBzZXQsIHNvIGFueSBwcmV2aW91c2x5IHNldCBmdW5jdGlvbiBtdXN0IGJlIHVuc2V0XG5cdFx0XHRcdFx0XHRcdF9kdXJhdGlvblVwZGF0ZU1ldGhvZCA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChjaGFuZ2VPcHRpb24ob3B0aW9uTmFtZSwgbmV3VmFsKSkgeyAvLyBzZXRcblx0XHRcdFx0XHRcdFx0U2NlbmUudHJpZ2dlcihcImNoYW5nZVwiLCB7XG5cdFx0XHRcdFx0XHRcdFx0d2hhdDogb3B0aW9uTmFtZSxcblx0XHRcdFx0XHRcdFx0XHRuZXd2YWw6IF9vcHRpb25zW29wdGlvbk5hbWVdXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRpZiAoU0NFTkVfT1BUSU9OUy5zaGlmdHMuaW5kZXhPZihvcHRpb25OYW1lKSA+IC0xKSB7XG5cdFx0XHRcdFx0XHRcdFx0U2NlbmUudHJpZ2dlcihcInNoaWZ0XCIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJlYXNvbjogb3B0aW9uTmFtZVxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBTY2VuZTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSBkdXJhdGlvbiBvcHRpb24gdmFsdWUuXG5cdFx0ICogQXMgYSBzZXR0ZXIgaXQgYWxzbyBhY2NlcHRzIGEgZnVuY3Rpb24gcmV0dXJuaW5nIGEgbnVtZXJpYyB2YWx1ZS4gIFxuXHRcdCAqIFRoaXMgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3IgcmVzcG9uc2l2ZSBzZXR1cHMuXG5cdFx0ICpcblx0XHQgKiBUaGUgZHVyYXRpb24gaXMgdXBkYXRlZCB1c2luZyB0aGUgc3VwcGxpZWQgZnVuY3Rpb24gZXZlcnkgdGltZSBgU2NlbmUucmVmcmVzaCgpYCBpcyBjYWxsZWQsIHdoaWNoIGhhcHBlbnMgcGVyaW9kaWNhbGx5IGZyb20gdGhlIGNvbnRyb2xsZXIgKHNlZSBTY3JvbGxNYWdpYy5Db250cm9sbGVyIG9wdGlvbiBgcmVmcmVzaEludGVydmFsYCkuICBcblx0XHQgKiBfKipOT1RFOioqIEJlIGF3YXJlIHRoYXQgaXQncyBhbiBlYXN5IHdheSB0byBraWxsIHBlcmZvcm1hbmNlLCBpZiB5b3Ugc3VwcGx5IGEgZnVuY3Rpb24gdGhhdCBoYXMgaGlnaCBDUFUgZGVtYW5kLiAgXG5cdFx0ICogRXZlbiBmb3Igc2l6ZSBhbmQgcG9zaXRpb24gY2FsY3VsYXRpb25zIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSBhIHZhcmlhYmxlIHRvIGNhY2hlIHRoZSB2YWx1ZS4gKHNlZSBleGFtcGxlKSAgXG5cdFx0ICogVGhpcyBjb3VudHMgZG91YmxlIGlmIHlvdSB1c2UgdGhlIHNhbWUgZnVuY3Rpb24gZm9yIG11bHRpcGxlIHNjZW5lcy5fXG5cdFx0ICpcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI2R1cmF0aW9uXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgZHVyYXRpb24gdmFsdWVcblx0XHQgKiB2YXIgZHVyYXRpb24gPSBzY2VuZS5kdXJhdGlvbigpO1xuXHRcdCAqXG5cdFx0ICogLy8gc2V0IGEgbmV3IGR1cmF0aW9uXG5cdFx0ICogc2NlbmUuZHVyYXRpb24oMzAwKTtcblx0XHQgKlxuXHRcdCAqIC8vIHVzZSBhIGZ1bmN0aW9uIHRvIGF1dG9tYXRpY2FsbHkgYWRqdXN0IHRoZSBkdXJhdGlvbiB0byB0aGUgd2luZG93IGhlaWdodC5cblx0XHQgKiB2YXIgZHVyYXRpb25WYWx1ZUNhY2hlO1xuXHRcdCAqIGZ1bmN0aW9uIGdldER1cmF0aW9uICgpIHtcblx0XHQgKiAgIHJldHVybiBkdXJhdGlvblZhbHVlQ2FjaGU7XG5cdFx0ICogfVxuXHRcdCAqIGZ1bmN0aW9uIHVwZGF0ZUR1cmF0aW9uIChlKSB7XG5cdFx0ICogICBkdXJhdGlvblZhbHVlQ2FjaGUgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0ICogfVxuXHRcdCAqICQod2luZG93KS5vbihcInJlc2l6ZVwiLCB1cGRhdGVEdXJhdGlvbik7IC8vIHVwZGF0ZSB0aGUgZHVyYXRpb24gd2hlbiB0aGUgd2luZG93IHNpemUgY2hhbmdlc1xuXHRcdCAqICQod2luZG93KS50cmlnZ2VySGFuZGxlcihcInJlc2l6ZVwiKTsgLy8gc2V0IHRvIGluaXRpYWwgdmFsdWVcblx0XHQgKiBzY2VuZS5kdXJhdGlvbihnZXREdXJhdGlvbik7IC8vIHN1cHBseSBkdXJhdGlvbiBtZXRob2Rcblx0XHQgKlxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgd2hlbiB1c2VkIGFzIHNldHRlclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuc2hpZnR9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXG5cdFx0ICogQHBhcmFtIHsobnVtYmVyfGZ1bmN0aW9uKX0gW25ld0R1cmF0aW9uXSAtIFRoZSBuZXcgZHVyYXRpb24gb2YgdGhlIHNjZW5lLlxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IGBnZXRgIC0gIEN1cnJlbnQgc2NlbmUgZHVyYXRpb24uXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cblx0XHQgKi9cblxuXHRcdC8qKlxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgb2Zmc2V0IG9wdGlvbiB2YWx1ZS5cblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI29mZnNldFxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IG9mZnNldFxuXHRcdCAqIHZhciBvZmZzZXQgPSBzY2VuZS5vZmZzZXQoKTtcblx0XHQgKlxuXHRcdCAqIC8vIHNldCBhIG5ldyBvZmZzZXRcblx0XHQgKiBzY2VuZS5vZmZzZXQoMTAwKTtcblx0XHQgKlxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgd2hlbiB1c2VkIGFzIHNldHRlclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuc2hpZnR9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IFtuZXdPZmZzZXRdIC0gVGhlIG5ldyBvZmZzZXQgb2YgdGhlIHNjZW5lLlxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IGBnZXRgIC0gIEN1cnJlbnQgc2NlbmUgb2Zmc2V0LlxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gYHNldGAgLSAgUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXG5cdFx0ICovXG5cblx0XHQvKipcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIHRyaWdnZXJFbGVtZW50IG9wdGlvbiB2YWx1ZS5cblx0XHQgKiBEb2VzICoqbm90KiogZmlyZSBgU2NlbmUuc2hpZnRgLCBiZWNhdXNlIGNoYW5naW5nIHRoZSB0cmlnZ2VyIEVsZW1lbnQgZG9lc24ndCBuZWNlc3NhcmlseSBtZWFuIHRoZSBzdGFydCBwb3NpdGlvbiBjaGFuZ2VzLiBUaGlzIHdpbGwgYmUgZGV0ZXJtaW5lZCBpbiBgU2NlbmUucmVmcmVzaCgpYCwgd2hpY2ggaXMgYXV0b21hdGljYWxseSB0cmlnZ2VyZWQuXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSN0cmlnZ2VyRWxlbWVudFxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IHRyaWdnZXJFbGVtZW50XG5cdFx0ICogdmFyIHRyaWdnZXJFbGVtZW50ID0gc2NlbmUudHJpZ2dlckVsZW1lbnQoKTtcblx0XHQgKlxuXHRcdCAqIC8vIHNldCBhIG5ldyB0cmlnZ2VyRWxlbWVudCB1c2luZyBhIHNlbGVjdG9yXG5cdFx0ICogc2NlbmUudHJpZ2dlckVsZW1lbnQoXCIjdHJpZ2dlclwiKTtcblx0XHQgKiAvLyBzZXQgYSBuZXcgdHJpZ2dlckVsZW1lbnQgdXNpbmcgYSBET00gb2JqZWN0XG5cdFx0ICogc2NlbmUudHJpZ2dlckVsZW1lbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmlnZ2VyXCIpKTtcblx0XHQgKlxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgd2hlbiB1c2VkIGFzIHNldHRlclxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ3xvYmplY3QpfSBbbmV3VHJpZ2dlckVsZW1lbnRdIC0gVGhlIG5ldyB0cmlnZ2VyIGVsZW1lbnQgZm9yIHRoZSBzY2VuZS5cblx0XHQgKiBAcmV0dXJucyB7KHN0cmluZ3xvYmplY3QpfSBgZ2V0YCAtICBDdXJyZW50IHRyaWdnZXJFbGVtZW50LlxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gYHNldGAgLSAgUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXG5cdFx0ICovXG5cblx0XHQvKipcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIHRyaWdnZXJIb29rIG9wdGlvbiB2YWx1ZS5cblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3RyaWdnZXJIb29rXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgdHJpZ2dlckhvb2sgdmFsdWVcblx0XHQgKiB2YXIgdHJpZ2dlckhvb2sgPSBzY2VuZS50cmlnZ2VySG9vaygpO1xuXHRcdCAqXG5cdFx0ICogLy8gc2V0IGEgbmV3IHRyaWdnZXJIb29rIHVzaW5nIGEgc3RyaW5nXG5cdFx0ICogc2NlbmUudHJpZ2dlckhvb2soXCJvbkxlYXZlXCIpO1xuXHRcdCAqIC8vIHNldCBhIG5ldyB0cmlnZ2VySG9vayB1c2luZyBhIG51bWJlclxuXHRcdCAqIHNjZW5lLnRyaWdnZXJIb29rKDAuNyk7XG5cdFx0ICpcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmNoYW5nZX0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnNoaWZ0fSwgd2hlbiB1c2VkIGFzIHNldHRlclxuXHRcdCAqIEBwYXJhbSB7KG51bWJlcnxzdHJpbmcpfSBbbmV3VHJpZ2dlckhvb2tdIC0gVGhlIG5ldyB0cmlnZ2VySG9vayBvZiB0aGUgc2NlbmUuIFNlZSB7QGxpbmsgU2NlbmV9IHBhcmFtZXRlciBkZXNjcmlwdGlvbiBmb3IgdmFsdWUgb3B0aW9ucy5cblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBgZ2V0YCAtICBDdXJyZW50IHRyaWdnZXJIb29rIChBTFdBWVMgbnVtZXJpY2FsKS5cblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IGBzZXRgIC0gIFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxuXHRcdCAqL1xuXG5cdFx0LyoqXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSByZXZlcnNlIG9wdGlvbiB2YWx1ZS5cblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3JldmVyc2Vcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCByZXZlcnNlIG9wdGlvblxuXHRcdCAqIHZhciByZXZlcnNlID0gc2NlbmUucmV2ZXJzZSgpO1xuXHRcdCAqXG5cdFx0ICogLy8gc2V0IG5ldyByZXZlcnNlIG9wdGlvblxuXHRcdCAqIHNjZW5lLnJldmVyc2UoZmFsc2UpO1xuXHRcdCAqXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbbmV3UmV2ZXJzZV0gLSBUaGUgbmV3IHJldmVyc2Ugc2V0dGluZyBvZiB0aGUgc2NlbmUuXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59IGBnZXRgIC0gIEN1cnJlbnQgcmV2ZXJzZSBvcHRpb24gdmFsdWUuXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cblx0XHQgKi9cblxuXHRcdC8qKlxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgbG9nbGV2ZWwgb3B0aW9uIHZhbHVlLlxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjbG9nbGV2ZWxcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCBsb2dsZXZlbFxuXHRcdCAqIHZhciBsb2dsZXZlbCA9IHNjZW5lLmxvZ2xldmVsKCk7XG5cdFx0ICpcblx0XHQgKiAvLyBzZXQgbmV3IGxvZ2xldmVsXG5cdFx0ICogc2NlbmUubG9nbGV2ZWwoMyk7XG5cdFx0ICpcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmNoYW5nZX0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gW25ld0xvZ2xldmVsXSAtIFRoZSBuZXcgbG9nbGV2ZWwgc2V0dGluZyBvZiB0aGUgc2NlbmUuIGBbMC0zXWBcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBgZ2V0YCAtICBDdXJyZW50IGxvZ2xldmVsLlxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gYHNldGAgLSAgUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXG5cdFx0ICovXG5cblx0XHQvKipcblx0XHQgKiAqKkdldCoqIHRoZSBhc3NvY2lhdGVkIGNvbnRyb2xsZXIuXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNjb250cm9sbGVyXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiAvLyBnZXQgdGhlIGNvbnRyb2xsZXIgb2YgYSBzY2VuZVxuXHRcdCAqIHZhciBjb250cm9sbGVyID0gc2NlbmUuY29udHJvbGxlcigpO1xuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge1Njcm9sbE1hZ2ljLkNvbnRyb2xsZXJ9IFBhcmVudCBjb250cm9sbGVyIG9yIGB1bmRlZmluZWRgXG5cdFx0ICovXG5cdFx0dGhpcy5jb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIF9jb250cm9sbGVyO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiAqKkdldCoqIHRoZSBjdXJyZW50IHN0YXRlLlxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjc3RhdGVcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCBzdGF0ZVxuXHRcdCAqIHZhciBzdGF0ZSA9IHNjZW5lLnN0YXRlKCk7XG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBgXCJCRUZPUkVcImAsIGBcIkRVUklOR1wiYCBvciBgXCJBRlRFUlwiYFxuXHRcdCAqL1xuXHRcdHRoaXMuc3RhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gX3N0YXRlO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiAqKkdldCoqIHRoZSBjdXJyZW50IHNjcm9sbCBvZmZzZXQgZm9yIHRoZSBzdGFydCBvZiB0aGUgc2NlbmUuICBcblx0XHQgKiBNaW5kLCB0aGF0IHRoZSBzY3JvbGxPZmZzZXQgaXMgcmVsYXRlZCB0byB0aGUgc2l6ZSBvZiB0aGUgY29udGFpbmVyLCBpZiBgdHJpZ2dlckhvb2tgIGlzIGJpZ2dlciB0aGFuIGAwYCAob3IgYFwib25MZWF2ZVwiYCkuICBcblx0XHQgKiBUaGlzIG1lYW5zLCB0aGF0IHJlc2l6aW5nIHRoZSBjb250YWluZXIgb3IgY2hhbmdpbmcgdGhlIGB0cmlnZ2VySG9va2Agd2lsbCBpbmZsdWVuY2UgdGhlIHNjZW5lJ3Mgc3RhcnQgb2Zmc2V0LlxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjc2Nyb2xsT2Zmc2V0XG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgc2Nyb2xsIG9mZnNldCBmb3IgdGhlIHN0YXJ0IGFuZCBlbmQgb2YgdGhlIHNjZW5lLlxuXHRcdCAqIHZhciBzdGFydCA9IHNjZW5lLnNjcm9sbE9mZnNldCgpO1xuXHRcdCAqIHZhciBlbmQgPSBzY2VuZS5zY3JvbGxPZmZzZXQoKSArIHNjZW5lLmR1cmF0aW9uKCk7XG5cdFx0ICogY29uc29sZS5sb2coXCJ0aGUgc2NlbmUgc3RhcnRzIGF0XCIsIHN0YXJ0LCBcImFuZCBlbmRzIGF0XCIsIGVuZCk7XG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgc2Nyb2xsIG9mZnNldCAob2YgdGhlIGNvbnRhaW5lcikgYXQgd2hpY2ggdGhlIHNjZW5lIHdpbGwgdHJpZ2dlci4gWSB2YWx1ZSBmb3IgdmVydGljYWwgYW5kIFggdmFsdWUgZm9yIGhvcml6b250YWwgc2Nyb2xscy5cblx0XHQgKi9cblx0XHR0aGlzLnNjcm9sbE9mZnNldCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBfc2Nyb2xsT2Zmc2V0LnN0YXJ0O1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiAqKkdldCoqIHRoZSB0cmlnZ2VyIHBvc2l0aW9uIG9mIHRoZSBzY2VuZSAoaW5jbHVkaW5nIHRoZSB2YWx1ZSBvZiB0aGUgYG9mZnNldGAgb3B0aW9uKS4gIFxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjdHJpZ2dlclBvc2l0aW9uXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiAvLyBnZXQgdGhlIHNjZW5lJ3MgdHJpZ2dlciBwb3NpdGlvblxuXHRcdCAqIHZhciB0cmlnZ2VyUG9zaXRpb24gPSBzY2VuZS50cmlnZ2VyUG9zaXRpb24oKTtcblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJ9IFN0YXJ0IHBvc2l0aW9uIG9mIHRoZSBzY2VuZS4gVG9wIHBvc2l0aW9uIHZhbHVlIGZvciB2ZXJ0aWNhbCBhbmQgbGVmdCBwb3NpdGlvbiB2YWx1ZSBmb3IgaG9yaXpvbnRhbCBzY3JvbGxzLlxuXHRcdCAqL1xuXHRcdHRoaXMudHJpZ2dlclBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIHBvcyA9IF9vcHRpb25zLm9mZnNldDsgLy8gdGhlIG9mZnNldCBpcyB0aGUgYmFzaXNcblx0XHRcdGlmIChfY29udHJvbGxlcikge1xuXHRcdFx0XHQvLyBnZXQgdGhlIHRyaWdnZXIgcG9zaXRpb25cblx0XHRcdFx0aWYgKF9vcHRpb25zLnRyaWdnZXJFbGVtZW50KSB7XG5cdFx0XHRcdFx0Ly8gRWxlbWVudCBhcyB0cmlnZ2VyXG5cdFx0XHRcdFx0cG9zICs9IF90cmlnZ2VyUG9zO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIHJldHVybiB0aGUgaGVpZ2h0IG9mIHRoZSB0cmlnZ2VySG9vayB0byBzdGFydCBhdCB0aGUgYmVnaW5uaW5nXG5cdFx0XHRcdFx0cG9zICs9IF9jb250cm9sbGVyLmluZm8oXCJzaXplXCIpICogU2NlbmUudHJpZ2dlckhvb2soKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHBvcztcblx0XHR9O1xuXG5cdFx0dmFyXG5cdFx0X3BpbiwgX3Bpbk9wdGlvbnM7XG5cblx0XHRTY2VuZS5vbihcInNoaWZ0LmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHR2YXIgZHVyYXRpb25DaGFuZ2VkID0gZS5yZWFzb24gPT09IFwiZHVyYXRpb25cIjtcblx0XHRcdGlmICgoX3N0YXRlID09PSBTQ0VORV9TVEFURV9BRlRFUiAmJiBkdXJhdGlvbkNoYW5nZWQpIHx8IChfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORyAmJiBfb3B0aW9ucy5kdXJhdGlvbiA9PT0gMCkpIHtcblx0XHRcdFx0Ly8gaWYgW2R1cmF0aW9uIGNoYW5nZWQgYWZ0ZXIgYSBzY2VuZSAoaW5zaWRlIHNjZW5lIHByb2dyZXNzIHVwZGF0ZXMgcGluIHBvc2l0aW9uKV0gb3IgW2R1cmF0aW9uIGlzIDAsIHdlIGFyZSBpbiBwaW4gcGhhc2UgYW5kIHNvbWUgb3RoZXIgdmFsdWUgY2hhbmdlZF0uXG5cdFx0XHRcdHVwZGF0ZVBpblN0YXRlKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZHVyYXRpb25DaGFuZ2VkKSB7XG5cdFx0XHRcdHVwZGF0ZVBpbkRpbWVuc2lvbnMoKTtcblx0XHRcdH1cblx0XHR9KS5vbihcInByb2dyZXNzLmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHR1cGRhdGVQaW5TdGF0ZSgpO1xuXHRcdH0pLm9uKFwiYWRkLmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHR1cGRhdGVQaW5EaW1lbnNpb25zKCk7XG5cdFx0fSkub24oXCJkZXN0cm95LmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRTY2VuZS5yZW1vdmVQaW4oZS5yZXNldCk7XG5cdFx0fSk7XG5cdFx0LyoqXG5cdFx0ICogVXBkYXRlIHRoZSBwaW4gc3RhdGUuXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR2YXIgdXBkYXRlUGluU3RhdGUgPSBmdW5jdGlvbiAoZm9yY2VVbnBpbikge1xuXHRcdFx0aWYgKF9waW4gJiYgX2NvbnRyb2xsZXIpIHtcblx0XHRcdFx0dmFyXG5cdFx0XHRcdGNvbnRhaW5lckluZm8gPSBfY29udHJvbGxlci5pbmZvKCksXG5cdFx0XHRcdFx0cGluVGFyZ2V0ID0gX3Bpbk9wdGlvbnMuc3BhY2VyLmZpcnN0Q2hpbGQ7IC8vIG1heSBiZSBwaW4gZWxlbWVudCBvciBhbm90aGVyIHNwYWNlciwgaWYgY2FzY2FkaW5nIHBpbnNcblx0XHRcdFx0aWYgKCFmb3JjZVVucGluICYmIF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HKSB7IC8vIGR1cmluZyBzY2VuZSBvciBpZiBkdXJhdGlvbiBpcyAwIGFuZCB3ZSBhcmUgcGFzdCB0aGUgdHJpZ2dlclxuXHRcdFx0XHRcdC8vIHBpbm5lZCBzdGF0ZVxuXHRcdFx0XHRcdGlmIChfdXRpbC5jc3MocGluVGFyZ2V0LCBcInBvc2l0aW9uXCIpICE9IFwiZml4ZWRcIikge1xuXHRcdFx0XHRcdFx0Ly8gY2hhbmdlIHN0YXRlIGJlZm9yZSB1cGRhdGluZyBwaW4gc3BhY2VyIChwb3NpdGlvbiBjaGFuZ2VzIGR1ZSB0byBmaXhlZCBjb2xsYXBzaW5nIG1pZ2h0IG9jY3VyLilcblx0XHRcdFx0XHRcdF91dGlsLmNzcyhwaW5UYXJnZXQsIHtcblx0XHRcdFx0XHRcdFx0XCJwb3NpdGlvblwiOiBcImZpeGVkXCJcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0Ly8gdXBkYXRlIHBpbiBzcGFjZXJcblx0XHRcdFx0XHRcdHVwZGF0ZVBpbkRpbWVuc2lvbnMoKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXJcblx0XHRcdFx0XHRmaXhlZFBvcyA9IF91dGlsLmdldC5vZmZzZXQoX3Bpbk9wdGlvbnMuc3BhY2VyLCB0cnVlKSxcblx0XHRcdFx0XHRcdC8vIGdldCB2aWV3cG9ydCBwb3NpdGlvbiBvZiBzcGFjZXJcblx0XHRcdFx0XHRcdHNjcm9sbERpc3RhbmNlID0gX29wdGlvbnMucmV2ZXJzZSB8fCBfb3B0aW9ucy5kdXJhdGlvbiA9PT0gMCA/IGNvbnRhaW5lckluZm8uc2Nyb2xsUG9zIC0gX3Njcm9sbE9mZnNldC5zdGFydCAvLyBxdWlja2VyXG5cdFx0XHRcdFx0XHQ6IE1hdGgucm91bmQoX3Byb2dyZXNzICogX29wdGlvbnMuZHVyYXRpb24gKiAxMCkgLyAxMDsgLy8gaWYgbm8gcmV2ZXJzZSBhbmQgZHVyaW5nIHBpbiB0aGUgcG9zaXRpb24gbmVlZHMgdG8gYmUgcmVjYWxjdWxhdGVkIHVzaW5nIHRoZSBwcm9ncmVzc1xuXHRcdFx0XHRcdC8vIGFkZCBzY3JvbGxEaXN0YW5jZVxuXHRcdFx0XHRcdGZpeGVkUG9zW2NvbnRhaW5lckluZm8udmVydGljYWwgPyBcInRvcFwiIDogXCJsZWZ0XCJdICs9IHNjcm9sbERpc3RhbmNlO1xuXG5cdFx0XHRcdFx0Ly8gc2V0IG5ldyB2YWx1ZXNcblx0XHRcdFx0XHRfdXRpbC5jc3MoX3Bpbk9wdGlvbnMuc3BhY2VyLmZpcnN0Q2hpbGQsIHtcblx0XHRcdFx0XHRcdHRvcDogZml4ZWRQb3MudG9wLFxuXHRcdFx0XHRcdFx0bGVmdDogZml4ZWRQb3MubGVmdFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIHVucGlubmVkIHN0YXRlXG5cdFx0XHRcdFx0dmFyXG5cdFx0XHRcdFx0bmV3Q1NTID0ge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IF9waW5PcHRpb25zLmluRmxvdyA/IFwicmVsYXRpdmVcIiA6IFwiYWJzb2x1dGVcIixcblx0XHRcdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0XHRcdGxlZnQ6IDBcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0Y2hhbmdlID0gX3V0aWwuY3NzKHBpblRhcmdldCwgXCJwb3NpdGlvblwiKSAhPSBuZXdDU1MucG9zaXRpb247XG5cblx0XHRcdFx0XHRpZiAoIV9waW5PcHRpb25zLnB1c2hGb2xsb3dlcnMpIHtcblx0XHRcdFx0XHRcdG5ld0NTU1tjb250YWluZXJJbmZvLnZlcnRpY2FsID8gXCJ0b3BcIiA6IFwibGVmdFwiXSA9IF9vcHRpb25zLmR1cmF0aW9uICogX3Byb2dyZXNzO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoX29wdGlvbnMuZHVyYXRpb24gPiAwKSB7IC8vIG9ubHkgY29uY2VybnMgc2NlbmVzIHdpdGggZHVyYXRpb25cblx0XHRcdFx0XHRcdGlmIChfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0FGVEVSICYmIHBhcnNlRmxvYXQoX3V0aWwuY3NzKF9waW5PcHRpb25zLnNwYWNlciwgXCJwYWRkaW5nLXRvcFwiKSkgPT09IDApIHtcblx0XHRcdFx0XHRcdFx0Y2hhbmdlID0gdHJ1ZTsgLy8gaWYgaW4gYWZ0ZXIgc3RhdGUgYnV0IGhhdmVudCB1cGRhdGVkIHNwYWNlciB5ZXQgKGp1bXBlZCBwYXN0IHBpbilcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9CRUZPUkUgJiYgcGFyc2VGbG9hdChfdXRpbC5jc3MoX3Bpbk9wdGlvbnMuc3BhY2VyLCBcInBhZGRpbmctYm90dG9tXCIpKSA9PT0gMCkgeyAvLyBiZWZvcmVcblx0XHRcdFx0XHRcdFx0Y2hhbmdlID0gdHJ1ZTsgLy8ganVtcGVkIHBhc3QgZml4ZWQgc3RhdGUgdXB3YXJkIGRpcmVjdGlvblxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBzZXQgbmV3IHZhbHVlc1xuXHRcdFx0XHRcdF91dGlsLmNzcyhwaW5UYXJnZXQsIG5ld0NTUyk7XG5cdFx0XHRcdFx0aWYgKGNoYW5nZSkge1xuXHRcdFx0XHRcdFx0Ly8gdXBkYXRlIHBpbiBzcGFjZXIgaWYgc3RhdGUgY2hhbmdlZFxuXHRcdFx0XHRcdFx0dXBkYXRlUGluRGltZW5zaW9ucygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBVcGRhdGUgdGhlIHBpbiBzcGFjZXIgYW5kL29yIGVsZW1lbnQgc2l6ZS5cblx0XHQgKiBUaGUgc2l6ZSBvZiB0aGUgc3BhY2VyIG5lZWRzIHRvIGJlIHVwZGF0ZWQgd2hlbmV2ZXIgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY2VuZSBjaGFuZ2VzLCBpZiBpdCBpcyB0byBwdXNoIGRvd24gZm9sbG93aW5nIGVsZW1lbnRzLlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dmFyIHVwZGF0ZVBpbkRpbWVuc2lvbnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoX3BpbiAmJiBfY29udHJvbGxlciAmJiBfcGluT3B0aW9ucy5pbkZsb3cpIHsgLy8gbm8gc3BhY2VycmVzaXplLCBpZiBvcmlnaW5hbCBwb3NpdGlvbiBpcyBhYnNvbHV0ZVxuXHRcdFx0XHR2YXJcblx0XHRcdFx0YWZ0ZXIgPSAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9BRlRFUiksXG5cdFx0XHRcdFx0YmVmb3JlID0gKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfQkVGT1JFKSxcblx0XHRcdFx0XHRkdXJpbmcgPSAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcpLFxuXHRcdFx0XHRcdHZlcnRpY2FsID0gX2NvbnRyb2xsZXIuaW5mbyhcInZlcnRpY2FsXCIpLFxuXHRcdFx0XHRcdHBpblRhcmdldCA9IF9waW5PcHRpb25zLnNwYWNlci5maXJzdENoaWxkLFxuXHRcdFx0XHRcdC8vIHVzdWFsbHkgdGhlIHBpbmVkIGVsZW1lbnQgYnV0IGNhbiBhbHNvIGJlIGFub3RoZXIgc3BhY2VyIChjYXNjYWRlZCBwaW5zKVxuXHRcdFx0XHRcdG1hcmdpbkNvbGxhcHNlID0gX3V0aWwuaXNNYXJnaW5Db2xsYXBzZVR5cGUoX3V0aWwuY3NzKF9waW5PcHRpb25zLnNwYWNlciwgXCJkaXNwbGF5XCIpKSxcblx0XHRcdFx0XHRjc3MgPSB7fTtcblxuXHRcdFx0XHQvLyBzZXQgbmV3IHNpemVcblx0XHRcdFx0Ly8gaWYgcmVsc2l6ZTogc3BhY2VyIC0+IHBpbiB8IGVsc2U6IHBpbiAtPiBzcGFjZXJcblx0XHRcdFx0aWYgKF9waW5PcHRpb25zLnJlbFNpemUud2lkdGggfHwgX3Bpbk9wdGlvbnMucmVsU2l6ZS5hdXRvRnVsbFdpZHRoKSB7XG5cdFx0XHRcdFx0aWYgKGR1cmluZykge1xuXHRcdFx0XHRcdFx0X3V0aWwuY3NzKF9waW4sIHtcblx0XHRcdFx0XHRcdFx0XCJ3aWR0aFwiOiBfdXRpbC5nZXQud2lkdGgoX3Bpbk9wdGlvbnMuc3BhY2VyKVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdF91dGlsLmNzcyhfcGluLCB7XG5cdFx0XHRcdFx0XHRcdFwid2lkdGhcIjogXCIxMDAlXCJcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBtaW53aWR0aCBpcyBuZWVkZWQgZm9yIGNhc2NhZGVkIHBpbnMuXG5cdFx0XHRcdFx0Y3NzW1wibWluLXdpZHRoXCJdID0gX3V0aWwuZ2V0LndpZHRoKHZlcnRpY2FsID8gX3BpbiA6IHBpblRhcmdldCwgdHJ1ZSwgdHJ1ZSk7XG5cdFx0XHRcdFx0Y3NzLndpZHRoID0gZHVyaW5nID8gY3NzW1wibWluLXdpZHRoXCJdIDogXCJhdXRvXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKF9waW5PcHRpb25zLnJlbFNpemUuaGVpZ2h0KSB7XG5cdFx0XHRcdFx0aWYgKGR1cmluZykge1xuXHRcdFx0XHRcdFx0Ly8gdGhlIG9ubHkgcGFkZGluZyB0aGUgc3BhY2VyIHNob3VsZCBldmVyIGluY2x1ZGUgaXMgdGhlIGR1cmF0aW9uIChpZiBwdXNoRm9sbG93ZXJzID0gdHJ1ZSksIHNvIHdlIG5lZWQgdG8gc3Vic3RyYWN0IHRoYXQuXG5cdFx0XHRcdFx0XHRfdXRpbC5jc3MoX3Bpbiwge1xuXHRcdFx0XHRcdFx0XHRcImhlaWdodFwiOiBfdXRpbC5nZXQuaGVpZ2h0KF9waW5PcHRpb25zLnNwYWNlcikgLSAoX3Bpbk9wdGlvbnMucHVzaEZvbGxvd2VycyA/IF9vcHRpb25zLmR1cmF0aW9uIDogMClcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRfdXRpbC5jc3MoX3Bpbiwge1xuXHRcdFx0XHRcdFx0XHRcImhlaWdodFwiOiBcIjEwMCVcIlxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIG1hcmdpbiBpcyBvbmx5IGluY2x1ZGVkIGlmIGl0J3MgYSBjYXNjYWRlZCBwaW4gdG8gcmVzb2x2ZSBhbiBJRTkgYnVnXG5cdFx0XHRcdFx0Y3NzW1wibWluLWhlaWdodFwiXSA9IF91dGlsLmdldC5oZWlnaHQodmVydGljYWwgPyBwaW5UYXJnZXQgOiBfcGluLCB0cnVlLCAhbWFyZ2luQ29sbGFwc2UpOyAvLyBuZWVkZWQgZm9yIGNhc2NhZGluZyBwaW5zXG5cdFx0XHRcdFx0Y3NzLmhlaWdodCA9IGR1cmluZyA/IGNzc1tcIm1pbi1oZWlnaHRcIl0gOiBcImF1dG9cIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIGFkZCBzcGFjZSBmb3IgZHVyYXRpb24gaWYgcHVzaEZvbGxvd2VycyBpcyB0cnVlXG5cdFx0XHRcdGlmIChfcGluT3B0aW9ucy5wdXNoRm9sbG93ZXJzKSB7XG5cdFx0XHRcdFx0Y3NzW1wicGFkZGluZ1wiICsgKHZlcnRpY2FsID8gXCJUb3BcIiA6IFwiTGVmdFwiKV0gPSBfb3B0aW9ucy5kdXJhdGlvbiAqIF9wcm9ncmVzcztcblx0XHRcdFx0XHRjc3NbXCJwYWRkaW5nXCIgKyAodmVydGljYWwgPyBcIkJvdHRvbVwiIDogXCJSaWdodFwiKV0gPSBfb3B0aW9ucy5kdXJhdGlvbiAqICgxIC0gX3Byb2dyZXNzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfdXRpbC5jc3MoX3Bpbk9wdGlvbnMuc3BhY2VyLCBjc3MpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBVcGRhdGVzIHRoZSBQaW4gc3RhdGUgKGluIGNlcnRhaW4gc2NlbmFyaW9zKVxuXHRcdCAqIElmIHRoZSBjb250cm9sbGVyIGNvbnRhaW5lciBpcyBub3QgdGhlIGRvY3VtZW50IGFuZCB3ZSBhcmUgbWlkLXBpbi1waGFzZSBzY3JvbGxpbmcgb3IgcmVzaXppbmcgdGhlIG1haW4gZG9jdW1lbnQgY2FuIHJlc3VsdCB0byB3cm9uZyBwaW4gcG9zaXRpb25zLlxuXHRcdCAqIFNvIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIHJlc2l6ZSBhbmQgc2Nyb2xsIG9mIHRoZSBkb2N1bWVudC5cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHZhciB1cGRhdGVQaW5JbkNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChfY29udHJvbGxlciAmJiBfcGluICYmIF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HICYmICFfY29udHJvbGxlci5pbmZvKFwiaXNEb2N1bWVudFwiKSkge1xuXHRcdFx0XHR1cGRhdGVQaW5TdGF0ZSgpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBVcGRhdGVzIHRoZSBQaW4gc3BhY2VyIHNpemUgc3RhdGUgKGluIGNlcnRhaW4gc2NlbmFyaW9zKVxuXHRcdCAqIElmIGNvbnRhaW5lciBpcyByZXNpemVkIGR1cmluZyBwaW4gYW5kIHJlbGF0aXZlbHkgc2l6ZWQgdGhlIHNpemUgb2YgdGhlIHBpbiBtaWdodCBuZWVkIHRvIGJlIHVwZGF0ZWQuLi5cblx0XHQgKiBTbyB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiByZXNpemUgb2YgdGhlIGNvbnRhaW5lci5cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHZhciB1cGRhdGVSZWxhdGl2ZVBpblNwYWNlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChfY29udHJvbGxlciAmJiBfcGluICYmIC8vIHdlbGwsIGR1aFxuXHRcdFx0X3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcgJiYgLy8gZWxlbWVudCBpbiBwaW5uZWQgc3RhdGU/XG5cdFx0XHQoIC8vIGlzIHdpZHRoIG9yIGhlaWdodCByZWxhdGl2ZWx5IHNpemVkLCBidXQgbm90IGluIHJlbGF0aW9uIHRvIGJvZHk/IHRoZW4gd2UgbmVlZCB0byByZWNhbGMuXG5cdFx0XHQoKF9waW5PcHRpb25zLnJlbFNpemUud2lkdGggfHwgX3Bpbk9wdGlvbnMucmVsU2l6ZS5hdXRvRnVsbFdpZHRoKSAmJiBfdXRpbC5nZXQud2lkdGgod2luZG93KSAhPSBfdXRpbC5nZXQud2lkdGgoX3Bpbk9wdGlvbnMuc3BhY2VyLnBhcmVudE5vZGUpKSB8fCAoX3Bpbk9wdGlvbnMucmVsU2l6ZS5oZWlnaHQgJiYgX3V0aWwuZ2V0LmhlaWdodCh3aW5kb3cpICE9IF91dGlsLmdldC5oZWlnaHQoX3Bpbk9wdGlvbnMuc3BhY2VyLnBhcmVudE5vZGUpKSkpIHtcblx0XHRcdFx0dXBkYXRlUGluRGltZW5zaW9ucygpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBJcyBjYWxsZWQsIHdoZW4gdGhlIG1vdXNld2hlbCBpcyB1c2VkIHdoaWxlIG92ZXIgYSBwaW5uZWQgZWxlbWVudCBpbnNpZGUgYSBkaXYgY29udGFpbmVyLlxuXHRcdCAqIElmIHRoZSBzY2VuZSBpcyBpbiBmaXhlZCBzdGF0ZSBzY3JvbGwgZXZlbnRzIHdvdWxkIGJlIGNvdW50ZWQgdG93YXJkcyB0aGUgYm9keS4gVGhpcyBmb3J3YXJkcyB0aGUgZXZlbnQgdG8gdGhlIHNjcm9sbCBjb250YWluZXIuXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR2YXIgb25Nb3VzZXdoZWVsT3ZlclBpbiA9IGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIgJiYgX3BpbiAmJiBfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORyAmJiAhX2NvbnRyb2xsZXIuaW5mbyhcImlzRG9jdW1lbnRcIikpIHsgLy8gaW4gcGluIHN0YXRlXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0X2NvbnRyb2xsZXIuX3NldFNjcm9sbFBvcyhfY29udHJvbGxlci5pbmZvKFwic2Nyb2xsUG9zXCIpIC0gKChlLndoZWVsRGVsdGEgfHwgZVtfY29udHJvbGxlci5pbmZvKFwidmVydGljYWxcIikgPyBcIndoZWVsRGVsdGFZXCIgOiBcIndoZWVsRGVsdGFYXCJdKSAvIDMgfHwgLWUuZGV0YWlsICogMzApKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogUGluIGFuIGVsZW1lbnQgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgdHdlZW4uICBcblx0XHQgKiBJZiB0aGUgc2NlbmUgZHVyYXRpb24gaXMgMCB0aGUgZWxlbWVudCB3aWxsIG9ubHkgYmUgdW5waW5uZWQsIGlmIHRoZSB1c2VyIHNjcm9sbHMgYmFjayBwYXN0IHRoZSBzdGFydCBwb3NpdGlvbi4gIFxuXHRcdCAqIE1ha2Ugc3VyZSBvbmx5IG9uZSBwaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IGF0IHRoZSBzYW1lIHRpbWUuXG5cdFx0ICogQW4gZWxlbWVudCBjYW4gYmUgcGlubmVkIG11bHRpcGxlIHRpbWVzLCBidXQgb25seSBzdWNjZXNzaXZlbHkuXG5cdFx0ICogXyoqTk9URToqKiBUaGUgb3B0aW9uIGBwdXNoRm9sbG93ZXJzYCBoYXMgbm8gZWZmZWN0LCB3aGVuIHRoZSBzY2VuZSBkdXJhdGlvbiBpcyAwLl9cblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3NldFBpblxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogLy8gcGluIGVsZW1lbnQgYW5kIHB1c2ggYWxsIGZvbGxvd2luZyBlbGVtZW50cyBkb3duIGJ5IHRoZSBhbW91bnQgb2YgdGhlIHBpbiBkdXJhdGlvbi5cblx0XHQgKiBzY2VuZS5zZXRQaW4oXCIjcGluXCIpO1xuXHRcdCAqXG5cdFx0ICogLy8gcGluIGVsZW1lbnQgYW5kIGtlZXBpbmcgYWxsIGZvbGxvd2luZyBlbGVtZW50cyBpbiB0aGVpciBwbGFjZS4gVGhlIHBpbm5lZCBlbGVtZW50IHdpbGwgbW92ZSBwYXN0IHRoZW0uXG5cdFx0ICogc2NlbmUuc2V0UGluKFwiI3BpblwiLCB7cHVzaEZvbGxvd2VyczogZmFsc2V9KTtcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ3xvYmplY3QpfSBlbGVtZW50IC0gQSBTZWxlY3RvciB0YXJnZXRpbmcgYW4gZWxlbWVudCBvciBhIERPTSBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSBwaW5uZWQuXG5cdFx0ICogQHBhcmFtIHtvYmplY3R9IFtzZXR0aW5nc10gLSBzZXR0aW5ncyBmb3IgdGhlIHBpblxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NldHRpbmdzLnB1c2hGb2xsb3dlcnM9dHJ1ZV0gLSBJZiBgdHJ1ZWAgZm9sbG93aW5nIGVsZW1lbnRzIHdpbGwgYmUgXCJwdXNoZWRcIiBkb3duIGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIHBpbiwgaWYgYGZhbHNlYCB0aGUgcGlubmVkIGVsZW1lbnQgd2lsbCBqdXN0IHNjcm9sbCBwYXN0IHRoZW0uICBcblx0XHQgSWdub3JlZCwgd2hlbiBkdXJhdGlvbiBpcyBgMGAuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtzZXR0aW5ncy5zcGFjZXJDbGFzcz1cInNjcm9sbG1hZ2ljLXBpbi1zcGFjZXJcIl0gLSBDbGFzc25hbWUgb2YgdGhlIHBpbiBzcGFjZXIgZWxlbWVudCwgd2hpY2ggaXMgdXNlZCB0byByZXBsYWNlIHRoZSBlbGVtZW50LlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cblx0XHQgKi9cblx0XHR0aGlzLnNldFBpbiA9IGZ1bmN0aW9uIChlbGVtZW50LCBzZXR0aW5ncykge1xuXHRcdFx0dmFyXG5cdFx0XHRkZWZhdWx0U2V0dGluZ3MgPSB7XG5cdFx0XHRcdHB1c2hGb2xsb3dlcnM6IHRydWUsXG5cdFx0XHRcdHNwYWNlckNsYXNzOiBcInNjcm9sbG1hZ2ljLXBpbi1zcGFjZXJcIlxuXHRcdFx0fTtcblx0XHRcdHNldHRpbmdzID0gX3V0aWwuZXh0ZW5kKHt9LCBkZWZhdWx0U2V0dGluZ3MsIHNldHRpbmdzKTtcblxuXHRcdFx0Ly8gdmFsaWRhdGUgRWxlbWVudFxuXHRcdFx0ZWxlbWVudCA9IF91dGlsLmdldC5lbGVtZW50cyhlbGVtZW50KVswXTtcblx0XHRcdGlmICghZWxlbWVudCkge1xuXHRcdFx0XHRsb2coMSwgXCJFUlJPUiBjYWxsaW5nIG1ldGhvZCAnc2V0UGluKCknOiBJbnZhbGlkIHBpbiBlbGVtZW50IHN1cHBsaWVkLlwiKTtcblx0XHRcdFx0cmV0dXJuIFNjZW5lOyAvLyBjYW5jZWxcblx0XHRcdH0gZWxzZSBpZiAoX3V0aWwuY3NzKGVsZW1lbnQsIFwicG9zaXRpb25cIikgPT09IFwiZml4ZWRcIikge1xuXHRcdFx0XHRsb2coMSwgXCJFUlJPUiBjYWxsaW5nIG1ldGhvZCAnc2V0UGluKCknOiBQaW4gZG9lcyBub3Qgd29yayB3aXRoIGVsZW1lbnRzIHRoYXQgYXJlIHBvc2l0aW9uZWQgJ2ZpeGVkJy5cIik7XG5cdFx0XHRcdHJldHVybiBTY2VuZTsgLy8gY2FuY2VsXG5cdFx0XHR9XG5cblx0XHRcdGlmIChfcGluKSB7IC8vIHByZWV4aXN0aW5nIHBpbj9cblx0XHRcdFx0aWYgKF9waW4gPT09IGVsZW1lbnQpIHtcblx0XHRcdFx0XHQvLyBzYW1lIHBpbiB3ZSBhbHJlYWR5IGhhdmUgLT4gZG8gbm90aGluZ1xuXHRcdFx0XHRcdHJldHVybiBTY2VuZTsgLy8gY2FuY2VsXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8ga2lsbCBvbGQgcGluXG5cdFx0XHRcdFx0U2NlbmUucmVtb3ZlUGluKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdFx0X3BpbiA9IGVsZW1lbnQ7XG5cblx0XHRcdHZhclxuXHRcdFx0cGFyZW50RGlzcGxheSA9IF9waW4ucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5LFxuXHRcdFx0XHRib3VuZHNQYXJhbXMgPSBbXCJ0b3BcIiwgXCJsZWZ0XCIsIFwiYm90dG9tXCIsIFwicmlnaHRcIiwgXCJtYXJnaW5cIiwgXCJtYXJnaW5MZWZ0XCIsIFwibWFyZ2luUmlnaHRcIiwgXCJtYXJnaW5Ub3BcIiwgXCJtYXJnaW5Cb3R0b21cIl07XG5cblx0XHRcdF9waW4ucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvLyBoYWNrIHN0YXJ0IHRvIGZvcmNlIGNzcyB0byByZXR1cm4gc3R5bGVzaGVldCB2YWx1ZXMgaW5zdGVhZCBvZiBjYWxjdWxhdGVkIHB4IHZhbHVlcy5cblx0XHRcdHZhclxuXHRcdFx0aW5GbG93ID0gX3V0aWwuY3NzKF9waW4sIFwicG9zaXRpb25cIikgIT0gXCJhYnNvbHV0ZVwiLFxuXHRcdFx0XHRwaW5DU1MgPSBfdXRpbC5jc3MoX3BpbiwgYm91bmRzUGFyYW1zLmNvbmNhdChbXCJkaXNwbGF5XCJdKSksXG5cdFx0XHRcdHNpemVDU1MgPSBfdXRpbC5jc3MoX3BpbiwgW1wid2lkdGhcIiwgXCJoZWlnaHRcIl0pO1xuXHRcdFx0X3Bpbi5wYXJlbnROb2RlLnN0eWxlLmRpc3BsYXkgPSBwYXJlbnREaXNwbGF5OyAvLyBoYWNrIGVuZC5cblx0XHRcdGlmICghaW5GbG93ICYmIHNldHRpbmdzLnB1c2hGb2xsb3dlcnMpIHtcblx0XHRcdFx0bG9nKDIsIFwiV0FSTklORzogSWYgdGhlIHBpbm5lZCBlbGVtZW50IGlzIHBvc2l0aW9uZWQgYWJzb2x1dGVseSBwdXNoRm9sbG93ZXJzIHdpbGwgYmUgZGlzYWJsZWQuXCIpO1xuXHRcdFx0XHRzZXR0aW5ncy5wdXNoRm9sbG93ZXJzID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IC8vIHdhaXQgdW50aWwgYWxsIGZpbmlzaGVkLCBiZWNhdXNlIHdpdGggcmVzcG9uc2l2ZSBkdXJhdGlvbiBpdCB3aWxsIG9ubHkgYmUgc2V0IGFmdGVyIHNjZW5lIGlzIGFkZGVkIHRvIGNvbnRyb2xsZXJcblx0XHRcdFx0aWYgKF9waW4gJiYgX29wdGlvbnMuZHVyYXRpb24gPT09IDAgJiYgc2V0dGluZ3MucHVzaEZvbGxvd2Vycykge1xuXHRcdFx0XHRcdGxvZygyLCBcIldBUk5JTkc6IHB1c2hGb2xsb3dlcnMgPVwiLCB0cnVlLCBcImhhcyBubyBlZmZlY3QsIHdoZW4gc2NlbmUgZHVyYXRpb24gaXMgMC5cIik7XG5cdFx0XHRcdH1cblx0XHRcdH0sIDApO1xuXG5cdFx0XHQvLyBjcmVhdGUgc3BhY2VyIGFuZCBpbnNlcnRcblx0XHRcdHZhclxuXHRcdFx0c3BhY2VyID0gX3Bpbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgX3BpbiksXG5cdFx0XHRcdHNwYWNlckNTUyA9IF91dGlsLmV4dGVuZChwaW5DU1MsIHtcblx0XHRcdFx0XHRwb3NpdGlvbjogaW5GbG93ID8gXCJyZWxhdGl2ZVwiIDogXCJhYnNvbHV0ZVwiLFxuXHRcdFx0XHRcdGJveFNpemluZzogXCJjb250ZW50LWJveFwiLFxuXHRcdFx0XHRcdG1vekJveFNpemluZzogXCJjb250ZW50LWJveFwiLFxuXHRcdFx0XHRcdHdlYmtpdEJveFNpemluZzogXCJjb250ZW50LWJveFwiXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoIWluRmxvdykgeyAvLyBjb3B5IHNpemUgaWYgcG9zaXRpb25lZCBhYnNvbHV0ZWx5LCB0byB3b3JrIGZvciBib3R0b20vcmlnaHQgcG9zaXRpb25lZCBlbGVtZW50cy5cblx0XHRcdFx0X3V0aWwuZXh0ZW5kKHNwYWNlckNTUywgX3V0aWwuY3NzKF9waW4sIFtcIndpZHRoXCIsIFwiaGVpZ2h0XCJdKSk7XG5cdFx0XHR9XG5cblx0XHRcdF91dGlsLmNzcyhzcGFjZXIsIHNwYWNlckNTUyk7XG5cdFx0XHRzcGFjZXIuc2V0QXR0cmlidXRlKFBJTl9TUEFDRVJfQVRUUklCVVRFLCBcIlwiKTtcblx0XHRcdF91dGlsLmFkZENsYXNzKHNwYWNlciwgc2V0dGluZ3Muc3BhY2VyQ2xhc3MpO1xuXG5cdFx0XHQvLyBzZXQgdGhlIHBpbiBPcHRpb25zXG5cdFx0XHRfcGluT3B0aW9ucyA9IHtcblx0XHRcdFx0c3BhY2VyOiBzcGFjZXIsXG5cdFx0XHRcdHJlbFNpemU6IHsgLy8gc2F2ZSBpZiBzaXplIGlzIGRlZmluZWQgdXNpbmcgJSB2YWx1ZXMuIGlmIHNvLCBoYW5kbGUgc3BhY2VyIHJlc2l6ZSBkaWZmZXJlbnRseS4uLlxuXHRcdFx0XHRcdHdpZHRoOiBzaXplQ1NTLndpZHRoLnNsaWNlKC0xKSA9PT0gXCIlXCIsXG5cdFx0XHRcdFx0aGVpZ2h0OiBzaXplQ1NTLmhlaWdodC5zbGljZSgtMSkgPT09IFwiJVwiLFxuXHRcdFx0XHRcdGF1dG9GdWxsV2lkdGg6IHNpemVDU1Mud2lkdGggPT09IFwiYXV0b1wiICYmIGluRmxvdyAmJiBfdXRpbC5pc01hcmdpbkNvbGxhcHNlVHlwZShwaW5DU1MuZGlzcGxheSlcblx0XHRcdFx0fSxcblx0XHRcdFx0cHVzaEZvbGxvd2Vyczogc2V0dGluZ3MucHVzaEZvbGxvd2Vycyxcblx0XHRcdFx0aW5GbG93OiBpbkZsb3csXG5cdFx0XHRcdC8vIHN0b3JlcyBpZiB0aGUgZWxlbWVudCB0YWtlcyB1cCBzcGFjZSBpbiB0aGUgZG9jdW1lbnQgZmxvd1xuXHRcdFx0fTtcblxuXHRcdFx0aWYgKCFfcGluLl9fX29yaWdTdHlsZSkge1xuXHRcdFx0XHRfcGluLl9fX29yaWdTdHlsZSA9IHt9O1xuXHRcdFx0XHR2YXJcblx0XHRcdFx0cGluSW5saW5lQ1NTID0gX3Bpbi5zdHlsZSxcblx0XHRcdFx0XHRjb3B5U3R5bGVzID0gYm91bmRzUGFyYW1zLmNvbmNhdChbXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcInBvc2l0aW9uXCIsIFwiYm94U2l6aW5nXCIsIFwibW96Qm94U2l6aW5nXCIsIFwid2Via2l0Qm94U2l6aW5nXCJdKTtcblx0XHRcdFx0Y29weVN0eWxlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcblx0XHRcdFx0XHRfcGluLl9fX29yaWdTdHlsZVt2YWxdID0gcGluSW5saW5lQ1NTW3ZhbF0gfHwgXCJcIjtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGlmIHJlbGF0aXZlIHNpemUsIHRyYW5zZmVyIGl0IHRvIHNwYWNlciBhbmQgbWFrZSBwaW4gY2FsY3VsYXRlIGl0Li4uXG5cdFx0XHRpZiAoX3Bpbk9wdGlvbnMucmVsU2l6ZS53aWR0aCkge1xuXHRcdFx0XHRfdXRpbC5jc3Moc3BhY2VyLCB7XG5cdFx0XHRcdFx0d2lkdGg6IHNpemVDU1Mud2lkdGhcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoX3Bpbk9wdGlvbnMucmVsU2l6ZS5oZWlnaHQpIHtcblx0XHRcdFx0X3V0aWwuY3NzKHNwYWNlciwge1xuXHRcdFx0XHRcdGhlaWdodDogc2l6ZUNTUy5oZWlnaHRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIG5vdyBwbGFjZSB0aGUgcGluIGVsZW1lbnQgaW5zaWRlIHRoZSBzcGFjZXJcdFxuXHRcdFx0c3BhY2VyLmFwcGVuZENoaWxkKF9waW4pO1xuXHRcdFx0Ly8gYW5kIHNldCBuZXcgY3NzXG5cdFx0XHRfdXRpbC5jc3MoX3Bpbiwge1xuXHRcdFx0XHRwb3NpdGlvbjogaW5GbG93ID8gXCJyZWxhdGl2ZVwiIDogXCJhYnNvbHV0ZVwiLFxuXHRcdFx0XHRtYXJnaW46IFwiYXV0b1wiLFxuXHRcdFx0XHR0b3A6IFwiYXV0b1wiLFxuXHRcdFx0XHRsZWZ0OiBcImF1dG9cIixcblx0XHRcdFx0Ym90dG9tOiBcImF1dG9cIixcblx0XHRcdFx0cmlnaHQ6IFwiYXV0b1wiXG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKF9waW5PcHRpb25zLnJlbFNpemUud2lkdGggfHwgX3Bpbk9wdGlvbnMucmVsU2l6ZS5hdXRvRnVsbFdpZHRoKSB7XG5cdFx0XHRcdF91dGlsLmNzcyhfcGluLCB7XG5cdFx0XHRcdFx0Ym94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcblx0XHRcdFx0XHRtb3pCb3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuXHRcdFx0XHRcdHdlYmtpdEJveFNpemluZzogXCJib3JkZXItYm94XCJcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGFkZCBsaXN0ZW5lciB0byBkb2N1bWVudCB0byB1cGRhdGUgcGluIHBvc2l0aW9uIGluIGNhc2UgY29udHJvbGxlciBpcyBub3QgdGhlIGRvY3VtZW50LlxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZVBpbkluQ29udGFpbmVyKTtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVQaW5JbkNvbnRhaW5lcik7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlUmVsYXRpdmVQaW5TcGFjZXIpO1xuXHRcdFx0Ly8gYWRkIG1vdXNld2hlZWwgbGlzdGVuZXIgdG8gY2F0Y2ggc2Nyb2xscyBvdmVyIGZpeGVkIGVsZW1lbnRzXG5cdFx0XHRfcGluLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIG9uTW91c2V3aGVlbE92ZXJQaW4pO1xuXHRcdFx0X3Bpbi5hZGRFdmVudExpc3RlbmVyKFwiRE9NTW91c2VTY3JvbGxcIiwgb25Nb3VzZXdoZWVsT3ZlclBpbik7XG5cblx0XHRcdGxvZygzLCBcImFkZGVkIHBpblwiKTtcblxuXHRcdFx0Ly8gZmluYWxseSB1cGRhdGUgdGhlIHBpbiB0byBpbml0XG5cdFx0XHR1cGRhdGVQaW5TdGF0ZSgpO1xuXG5cdFx0XHRyZXR1cm4gU2NlbmU7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSB0aGUgcGluIGZyb20gdGhlIHNjZW5lLlxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjcmVtb3ZlUGluXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiAvLyByZW1vdmUgdGhlIHBpbiBmcm9tIHRoZSBzY2VuZSB3aXRob3V0IHJlc2V0dGluZyBpdCAodGhlIHNwYWNlciBpcyBub3QgcmVtb3ZlZClcblx0XHQgKiBzY2VuZS5yZW1vdmVQaW4oKTtcblx0XHQgKlxuXHRcdCAqIC8vIHJlbW92ZSB0aGUgcGluIGZyb20gdGhlIHNjZW5lIGFuZCByZXNldCB0aGUgcGluIGVsZW1lbnQgdG8gaXRzIGluaXRpYWwgcG9zaXRpb24gKHNwYWNlciBpcyByZW1vdmVkKVxuXHRcdCAqIHNjZW5lLnJlbW92ZVBpbih0cnVlKTtcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc2V0PWZhbHNlXSAtIElmIGBmYWxzZWAgdGhlIHNwYWNlciB3aWxsIG5vdCBiZSByZW1vdmVkIGFuZCB0aGUgZWxlbWVudCdzIHBvc2l0aW9uIHdpbGwgbm90IGJlIHJlc2V0LlxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXG5cdFx0ICovXG5cdFx0dGhpcy5yZW1vdmVQaW4gPSBmdW5jdGlvbiAocmVzZXQpIHtcblx0XHRcdGlmIChfcGluKSB7XG5cdFx0XHRcdGlmIChfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORykge1xuXHRcdFx0XHRcdHVwZGF0ZVBpblN0YXRlKHRydWUpOyAvLyBmb3JjZSB1bnBpbiBhdCBwb3NpdGlvblxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChyZXNldCB8fCAhX2NvbnRyb2xsZXIpIHsgLy8gaWYgdGhlcmUncyBubyBjb250cm9sbGVyIG5vIHByb2dyZXNzIHdhcyBtYWRlIGFueXdheS4uLlxuXHRcdFx0XHRcdHZhciBwaW5UYXJnZXQgPSBfcGluT3B0aW9ucy5zcGFjZXIuZmlyc3RDaGlsZDsgLy8gdXN1YWxseSB0aGUgcGluIGVsZW1lbnQsIGJ1dCBtYXkgYmUgYW5vdGhlciBzcGFjZXIgKGNhc2NhZGVkIHBpbnMpLi4uXG5cdFx0XHRcdFx0aWYgKHBpblRhcmdldC5oYXNBdHRyaWJ1dGUoUElOX1NQQUNFUl9BVFRSSUJVVEUpKSB7IC8vIGNvcHkgbWFyZ2lucyB0byBjaGlsZCBzcGFjZXJcblx0XHRcdFx0XHRcdHZhclxuXHRcdFx0XHRcdFx0c3R5bGUgPSBfcGluT3B0aW9ucy5zcGFjZXIuc3R5bGUsXG5cdFx0XHRcdFx0XHRcdHZhbHVlcyA9IFtcIm1hcmdpblwiLCBcIm1hcmdpbkxlZnRcIiwgXCJtYXJnaW5SaWdodFwiLCBcIm1hcmdpblRvcFwiLCBcIm1hcmdpbkJvdHRvbVwiXTtcblx0XHRcdFx0XHRcdG1hcmdpbnMgPSB7fTtcblx0XHRcdFx0XHRcdHZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luc1t2YWxdID0gc3R5bGVbdmFsXSB8fCBcIlwiO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRfdXRpbC5jc3MocGluVGFyZ2V0LCBtYXJnaW5zKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0X3Bpbk9wdGlvbnMuc3BhY2VyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHBpblRhcmdldCwgX3Bpbk9wdGlvbnMuc3BhY2VyKTtcblx0XHRcdFx0XHRfcGluT3B0aW9ucy5zcGFjZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfcGluT3B0aW9ucy5zcGFjZXIpO1xuXHRcdFx0XHRcdGlmICghX3Bpbi5wYXJlbnROb2RlLmhhc0F0dHJpYnV0ZShQSU5fU1BBQ0VSX0FUVFJJQlVURSkpIHsgLy8gaWYgaXQncyB0aGUgbGFzdCBwaW4gZm9yIHRoaXMgZWxlbWVudCAtPiByZXN0b3JlIGlubGluZSBzdHlsZXNcblx0XHRcdFx0XHRcdC8vIFRPRE86IG9ubHkgY29ycmVjdGx5IHNldCBmb3IgZmlyc3QgcGluICh3aGVuIGNhc2NhZGluZykgLSBob3cgdG8gZml4P1xuXHRcdFx0XHRcdFx0X3V0aWwuY3NzKF9waW4sIF9waW4uX19fb3JpZ1N0eWxlKTtcblx0XHRcdFx0XHRcdGRlbGV0ZSBfcGluLl9fX29yaWdTdHlsZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZVBpbkluQ29udGFpbmVyKTtcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVBpbkluQ29udGFpbmVyKTtcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVJlbGF0aXZlUGluU3BhY2VyKTtcblx0XHRcdFx0X3Bpbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCBvbk1vdXNld2hlZWxPdmVyUGluKTtcblx0XHRcdFx0X3Bpbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NTW91c2VTY3JvbGxcIiwgb25Nb3VzZXdoZWVsT3ZlclBpbik7XG5cdFx0XHRcdF9waW4gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdGxvZygzLCBcInJlbW92ZWQgcGluIChyZXNldDogXCIgKyAocmVzZXQgPyBcInRydWVcIiA6IFwiZmFsc2VcIikgKyBcIilcIik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gU2NlbmU7XG5cdFx0fTtcblxuXG5cdFx0dmFyXG5cdFx0X2Nzc0NsYXNzZXMsIF9jc3NDbGFzc0VsZW1zID0gW107XG5cblx0XHRTY2VuZS5vbihcImRlc3Ryb3kuaW50ZXJuYWxcIiwgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFNjZW5lLnJlbW92ZUNsYXNzVG9nZ2xlKGUucmVzZXQpO1xuXHRcdH0pO1xuXHRcdC8qKlxuXHRcdCAqIERlZmluZSBhIGNzcyBjbGFzcyBtb2RpZmljYXRpb24gd2hpbGUgdGhlIHNjZW5lIGlzIGFjdGl2ZS4gIFxuXHRcdCAqIFdoZW4gdGhlIHNjZW5lIHRyaWdnZXJzIHRoZSBjbGFzc2VzIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHN1cHBsaWVkIGVsZW1lbnQgYW5kIHJlbW92ZWQsIHdoZW4gdGhlIHNjZW5lIGlzIG92ZXIuXG5cdFx0ICogSWYgdGhlIHNjZW5lIGR1cmF0aW9uIGlzIDAgdGhlIGNsYXNzZXMgd2lsbCBvbmx5IGJlIHJlbW92ZWQgaWYgdGhlIHVzZXIgc2Nyb2xscyBiYWNrIHBhc3QgdGhlIHN0YXJ0IHBvc2l0aW9uLlxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjc2V0Q2xhc3NUb2dnbGVcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIC8vIGFkZCB0aGUgY2xhc3MgJ215Y2xhc3MnIHRvIHRoZSBlbGVtZW50IHdpdGggdGhlIGlkICdteS1lbGVtJyBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY2VuZVxuXHRcdCAqIHNjZW5lLnNldENsYXNzVG9nZ2xlKFwiI215LWVsZW1cIiwgXCJteWNsYXNzXCIpO1xuXHRcdCAqXG5cdFx0ICogLy8gYWRkIG11bHRpcGxlIGNsYXNzZXMgdG8gbXVsdGlwbGUgZWxlbWVudHMgZGVmaW5lZCBieSB0aGUgc2VsZWN0b3IgJy5jbGFzc0NoYW5nZSdcblx0XHQgKiBzY2VuZS5zZXRDbGFzc1RvZ2dsZShcIi5jbGFzc0NoYW5nZVwiLCBcImNsYXNzMSBjbGFzczIgY2xhc3MzXCIpO1xuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdCl9IGVsZW1lbnQgLSBBIFNlbGVjdG9yIHRhcmdldGluZyBvbmUgb3IgbW9yZSBlbGVtZW50cyBvciBhIERPTSBvYmplY3QgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSBtb2RpZmllZC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NlcyAtIE9uZSBvciBtb3JlIENsYXNzbmFtZXMgKHNlcGFyYXRlZCBieSBzcGFjZSkgdGhhdCBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIGVsZW1lbnQgZHVyaW5nIHRoZSBzY2VuZS5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRDbGFzc1RvZ2dsZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc2VzKSB7XG5cdFx0XHR2YXIgZWxlbXMgPSBfdXRpbC5nZXQuZWxlbWVudHMoZWxlbWVudCk7XG5cdFx0XHRpZiAoZWxlbXMubGVuZ3RoID09PSAwIHx8ICFfdXRpbC50eXBlLlN0cmluZyhjbGFzc2VzKSkge1xuXHRcdFx0XHRsb2coMSwgXCJFUlJPUiBjYWxsaW5nIG1ldGhvZCAnc2V0Q2xhc3NUb2dnbGUoKSc6IEludmFsaWQgXCIgKyAoZWxlbXMubGVuZ3RoID09PSAwID8gXCJlbGVtZW50XCIgOiBcImNsYXNzZXNcIikgKyBcIiBzdXBwbGllZC5cIik7XG5cdFx0XHRcdHJldHVybiBTY2VuZTtcblx0XHRcdH1cblx0XHRcdGlmIChfY3NzQ2xhc3NFbGVtcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdC8vIHJlbW92ZSBvbGQgb25lc1xuXHRcdFx0XHRTY2VuZS5yZW1vdmVDbGFzc1RvZ2dsZSgpO1xuXHRcdFx0fVxuXHRcdFx0X2Nzc0NsYXNzZXMgPSBjbGFzc2VzO1xuXHRcdFx0X2Nzc0NsYXNzRWxlbXMgPSBlbGVtcztcblx0XHRcdFNjZW5lLm9uKFwiZW50ZXIuaW50ZXJuYWxfY2xhc3MgbGVhdmUuaW50ZXJuYWxfY2xhc3NcIiwgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0dmFyIHRvZ2dsZSA9IGUudHlwZSA9PT0gXCJlbnRlclwiID8gX3V0aWwuYWRkQ2xhc3MgOiBfdXRpbC5yZW1vdmVDbGFzcztcblx0XHRcdFx0X2Nzc0NsYXNzRWxlbXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSwga2V5KSB7XG5cdFx0XHRcdFx0dG9nZ2xlKGVsZW0sIF9jc3NDbGFzc2VzKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBTY2VuZTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIHRoZSBjbGFzcyBiaW5kaW5nIGZyb20gdGhlIHNjZW5lLlxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjcmVtb3ZlQ2xhc3NUb2dnbGVcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIC8vIHJlbW92ZSBjbGFzcyBiaW5kaW5nIGZyb20gdGhlIHNjZW5lIHdpdGhvdXQgcmVzZXRcblx0XHQgKiBzY2VuZS5yZW1vdmVDbGFzc1RvZ2dsZSgpO1xuXHRcdCAqXG5cdFx0ICogLy8gcmVtb3ZlIGNsYXNzIGJpbmRpbmcgYW5kIHJlbW92ZSB0aGUgY2hhbmdlcyBpdCBjYXVzZWRcblx0XHQgKiBzY2VuZS5yZW1vdmVDbGFzc1RvZ2dsZSh0cnVlKTtcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc2V0PWZhbHNlXSAtIElmIGBmYWxzZWAgYW5kIHRoZSBjbGFzc2VzIGFyZSBjdXJyZW50bHkgYWN0aXZlLCB0aGV5IHdpbGwgcmVtYWluIG9uIHRoZSBlbGVtZW50LiBJZiBgdHJ1ZWAgdGhleSB3aWxsIGJlIHJlbW92ZWQuXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cblx0XHQgKi9cblx0XHR0aGlzLnJlbW92ZUNsYXNzVG9nZ2xlID0gZnVuY3Rpb24gKHJlc2V0KSB7XG5cdFx0XHRpZiAocmVzZXQpIHtcblx0XHRcdFx0X2Nzc0NsYXNzRWxlbXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSwga2V5KSB7XG5cdFx0XHRcdFx0X3V0aWwucmVtb3ZlQ2xhc3MoZWxlbSwgX2Nzc0NsYXNzZXMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdFNjZW5lLm9mZihcInN0YXJ0LmludGVybmFsX2NsYXNzIGVuZC5pbnRlcm5hbF9jbGFzc1wiKTtcblx0XHRcdF9jc3NDbGFzc2VzID0gdW5kZWZpbmVkO1xuXHRcdFx0X2Nzc0NsYXNzRWxlbXMgPSBbXTtcblx0XHRcdHJldHVybiBTY2VuZTtcblx0XHR9O1xuXG5cdFx0Ly8gSU5JVFxuXHRcdGNvbnN0cnVjdCgpO1xuXHRcdHJldHVybiBTY2VuZTtcblx0fTtcblxuXHQvLyBzdG9yZSBwYWdld2lkZSBzY2VuZSBvcHRpb25zXG5cdHZhciBTQ0VORV9PUFRJT05TID0ge1xuXHRcdGRlZmF1bHRzOiB7XG5cdFx0XHRkdXJhdGlvbjogMCxcblx0XHRcdG9mZnNldDogMCxcblx0XHRcdHRyaWdnZXJFbGVtZW50OiB1bmRlZmluZWQsXG5cdFx0XHR0cmlnZ2VySG9vazogMC41LFxuXHRcdFx0cmV2ZXJzZTogdHJ1ZSxcblx0XHRcdGxvZ2xldmVsOiAyXG5cdFx0fSxcblx0XHR2YWxpZGF0ZToge1xuXHRcdFx0b2Zmc2V0OiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0XHRcdHZhbCA9IHBhcnNlRmxvYXQodmFsKTtcblx0XHRcdFx0aWYgKCFfdXRpbC50eXBlLk51bWJlcih2YWwpKSB7XG5cdFx0XHRcdFx0dGhyb3cgW1wiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJvZmZzZXRcXFwiOlwiLCB2YWxdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWw7XG5cdFx0XHR9LFxuXHRcdFx0dHJpZ2dlckVsZW1lbnQ6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRcdFx0dmFsID0gdmFsIHx8IHVuZGVmaW5lZDtcblx0XHRcdFx0aWYgKHZhbCkge1xuXHRcdFx0XHRcdHZhciBlbGVtID0gX3V0aWwuZ2V0LmVsZW1lbnRzKHZhbClbMF07XG5cdFx0XHRcdFx0aWYgKGVsZW0pIHtcblx0XHRcdFx0XHRcdHZhbCA9IGVsZW07XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRocm93IFtcIkVsZW1lbnQgZGVmaW5lZCBpbiBvcHRpb24gXFxcInRyaWdnZXJFbGVtZW50XFxcIiB3YXMgbm90IGZvdW5kOlwiLCB2YWxdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdmFsO1xuXHRcdFx0fSxcblx0XHRcdHRyaWdnZXJIb29rOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0XHRcdHZhciB0cmFuc2xhdGUgPSB7XG5cdFx0XHRcdFx0XCJvbkNlbnRlclwiOiAwLjUsXG5cdFx0XHRcdFx0XCJvbkVudGVyXCI6IDEsXG5cdFx0XHRcdFx0XCJvbkxlYXZlXCI6IDBcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKF91dGlsLnR5cGUuTnVtYmVyKHZhbCkpIHtcblx0XHRcdFx0XHR2YWwgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihwYXJzZUZsb2F0KHZhbCksIDEpKTsgLy8gIG1ha2Ugc3VyZSBpdHMgYmV0d2VlZW4gMCBhbmQgMVxuXHRcdFx0XHR9IGVsc2UgaWYgKHZhbCBpbiB0cmFuc2xhdGUpIHtcblx0XHRcdFx0XHR2YWwgPSB0cmFuc2xhdGVbdmFsXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aHJvdyBbXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcInRyaWdnZXJIb29rXFxcIjogXCIsIHZhbF07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZhbDtcblx0XHRcdH0sXG5cdFx0XHRyZXZlcnNlOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0XHRcdHJldHVybiAhIXZhbDsgLy8gZm9yY2UgYm9vbGVhblxuXHRcdFx0fSxcblx0XHRcdGxvZ2xldmVsOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0XHRcdHZhbCA9IHBhcnNlSW50KHZhbCk7XG5cdFx0XHRcdGlmICghX3V0aWwudHlwZS5OdW1iZXIodmFsKSB8fCB2YWwgPCAwIHx8IHZhbCA+IDMpIHtcblx0XHRcdFx0XHR0aHJvdyBbXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcImxvZ2xldmVsXFxcIjpcIiwgdmFsXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdmFsO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly8gaG9sZGVyIGZvciAgdmFsaWRhdGlvbiBtZXRob2RzLiBkdXJhdGlvbiB2YWxpZGF0aW9uIGlzIGhhbmRsZWQgaW4gJ2dldHRlcnMtc2V0dGVycy5qcydcblx0XHRzaGlmdHM6IFtcImR1cmF0aW9uXCIsIFwib2Zmc2V0XCIsIFwidHJpZ2dlckhvb2tcIl0sXG5cdFx0Ly8gbGlzdCBvZiBvcHRpb25zIHRoYXQgdHJpZ2dlciBhIGBzaGlmdGAgZXZlbnRcblx0fTtcbi8qXG4gKiBtZXRob2QgdXNlZCB0byBhZGQgYW4gb3B0aW9uIHRvIFNjcm9sbE1hZ2ljIFNjZW5lcy5cbiAqIFRPRE86IERPQyAocHJpdmF0ZSBmb3IgZGV2KVxuICovXG5cdFNjcm9sbE1hZ2ljLlNjZW5lLmFkZE9wdGlvbiA9IGZ1bmN0aW9uIChuYW1lLCBkZWZhdWx0VmFsdWUsIHZhbGlkYXRpb25DYWxsYmFjaywgc2hpZnRzKSB7XG5cdFx0aWYgKCEobmFtZSBpbiBTQ0VORV9PUFRJT05TLmRlZmF1bHRzKSkge1xuXHRcdFx0U0NFTkVfT1BUSU9OUy5kZWZhdWx0c1tuYW1lXSA9IGRlZmF1bHRWYWx1ZTtcblx0XHRcdFNDRU5FX09QVElPTlMudmFsaWRhdGVbbmFtZV0gPSB2YWxpZGF0aW9uQ2FsbGJhY2s7XG5cdFx0XHRpZiAoc2hpZnRzKSB7XG5cdFx0XHRcdFNDRU5FX09QVElPTlMuc2hpZnRzLnB1c2gobmFtZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdFNjcm9sbE1hZ2ljLl91dGlsLmxvZygxLCBcIltzdGF0aWNdIFNjcm9sbE1hZ2ljLlNjZW5lIC0+IENhbm5vdCBhZGQgU2NlbmUgb3B0aW9uICdcIiArIG5hbWUgKyBcIicsIGJlY2F1c2UgaXQgYWxyZWFkeSBleGlzdHMuXCIpO1xuXHRcdH1cblx0fTtcblx0Ly8gaW5zdGFuY2UgZXh0ZW5zaW9uIGZ1bmN0aW9uIGZvciBwbHVnaW5zXG5cdC8vIFRPRE86IERPQyAocHJpdmF0ZSBmb3IgZGV2KVxuXHRTY3JvbGxNYWdpYy5TY2VuZS5leHRlbmQgPSBmdW5jdGlvbiAoZXh0ZW5zaW9uKSB7XG5cdFx0dmFyIG9sZENsYXNzID0gdGhpcztcblx0XHRTY3JvbGxNYWdpYy5TY2VuZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdG9sZENsYXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHR0aGlzLiRzdXBlciA9IF91dGlsLmV4dGVuZCh7fSwgdGhpcyk7IC8vIGNvcHkgcGFyZW50IHN0YXRlXG5cdFx0XHRyZXR1cm4gZXh0ZW5zaW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcblx0XHR9O1xuXHRcdF91dGlsLmV4dGVuZChTY3JvbGxNYWdpYy5TY2VuZSwgb2xkQ2xhc3MpOyAvLyBjb3B5IHByb3BlcnRpZXNcblx0XHRTY3JvbGxNYWdpYy5TY2VuZS5wcm90b3R5cGUgPSBvbGRDbGFzcy5wcm90b3R5cGU7IC8vIGNvcHkgcHJvdG90eXBlXG5cdFx0U2Nyb2xsTWFnaWMuU2NlbmUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2Nyb2xsTWFnaWMuU2NlbmU7IC8vIHJlc3RvcmUgY29uc3RydWN0b3Jcblx0fTtcblxuXG5cdC8qKlxuXHQgKiBUT0RPOiBET0NTIChwcml2YXRlIGZvciBkZXYpXG5cdCAqIEBjbGFzc1xuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblxuXHRTY3JvbGxNYWdpYy5FdmVudCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lc3BhY2UsIHRhcmdldCwgdmFycykge1xuXHRcdHZhcnMgPSB2YXJzIHx8IHt9O1xuXHRcdGZvciAodmFyIGtleSBpbiB2YXJzKSB7XG5cdFx0XHR0aGlzW2tleV0gPSB2YXJzW2tleV07XG5cdFx0fVxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy50YXJnZXQgPSB0aGlzLmN1cnJlbnRUYXJnZXQgPSB0YXJnZXQ7XG5cdFx0dGhpcy5uYW1lc3BhY2UgPSBuYW1lc3BhY2UgfHwgJyc7XG5cdFx0dGhpcy50aW1lU3RhbXAgPSB0aGlzLnRpbWVzdGFtcCA9IERhdGUubm93KCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cbi8qXG4gKiBUT0RPOiBET0NTIChwcml2YXRlIGZvciBkZXYpXG4gKi9cblxuXHR2YXIgX3V0aWwgPSBTY3JvbGxNYWdpYy5fdXRpbCA9IChmdW5jdGlvbiAod2luZG93KSB7XG5cdFx0dmFyIFUgPSB7fSxcblx0XHRcdGk7XG5cblx0XHQvKipcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQgKiBpbnRlcm5hbCBoZWxwZXJzXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0ICovXG5cblx0XHQvLyBwYXJzZSBmbG9hdCBhbmQgZmFsbCBiYWNrIHRvIDAuXG5cdFx0dmFyIGZsb2F0dmFsID0gZnVuY3Rpb24gKG51bWJlcikge1xuXHRcdFx0cmV0dXJuIHBhcnNlRmxvYXQobnVtYmVyKSB8fCAwO1xuXHRcdH07XG5cdFx0Ly8gZ2V0IGN1cnJlbnQgc3R5bGUgSUUgc2FmZSAob3RoZXJ3aXNlIElFIHdvdWxkIHJldHVybiBjYWxjdWxhdGVkIHZhbHVlcyBmb3IgJ2F1dG8nKVxuXHRcdHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5jdXJyZW50U3R5bGUgPyBlbGVtLmN1cnJlbnRTdHlsZSA6IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuXHRcdH07XG5cblx0XHQvLyBnZXQgZWxlbWVudCBkaW1lbnNpb24gKHdpZHRoIG9yIGhlaWdodClcblx0XHR2YXIgX2RpbWVuc2lvbiA9IGZ1bmN0aW9uICh3aGljaCwgZWxlbSwgb3V0ZXIsIGluY2x1ZGVNYXJnaW4pIHtcblx0XHRcdGVsZW0gPSAoZWxlbSA9PT0gZG9jdW1lbnQpID8gd2luZG93IDogZWxlbTtcblx0XHRcdGlmIChlbGVtID09PSB3aW5kb3cpIHtcblx0XHRcdFx0aW5jbHVkZU1hcmdpbiA9IGZhbHNlO1xuXHRcdFx0fSBlbHNlIGlmICghX3R5cGUuRG9tRWxlbWVudChlbGVtKSkge1xuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH1cblx0XHRcdHdoaWNoID0gd2hpY2guY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3aGljaC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcblx0XHRcdHZhciBkaW1lbnNpb24gPSAob3V0ZXIgPyBlbGVtWydvZmZzZXQnICsgd2hpY2hdIHx8IGVsZW1bJ291dGVyJyArIHdoaWNoXSA6IGVsZW1bJ2NsaWVudCcgKyB3aGljaF0gfHwgZWxlbVsnaW5uZXInICsgd2hpY2hdKSB8fCAwO1xuXHRcdFx0aWYgKG91dGVyICYmIGluY2x1ZGVNYXJnaW4pIHtcblx0XHRcdFx0dmFyIHN0eWxlID0gX2dldENvbXB1dGVkU3R5bGUoZWxlbSk7XG5cdFx0XHRcdGRpbWVuc2lvbiArPSB3aGljaCA9PT0gJ0hlaWdodCcgPyBmbG9hdHZhbChzdHlsZS5tYXJnaW5Ub3ApICsgZmxvYXR2YWwoc3R5bGUubWFyZ2luQm90dG9tKSA6IGZsb2F0dmFsKHN0eWxlLm1hcmdpbkxlZnQpICsgZmxvYXR2YWwoc3R5bGUubWFyZ2luUmlnaHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRpbWVuc2lvbjtcblx0XHR9O1xuXHRcdC8vIGNvbnZlcnRzICdtYXJnaW4tdG9wJyBpbnRvICdtYXJnaW5Ub3AnXG5cdFx0dmFyIF9jYW1lbENhc2UgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdFx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoL15bXmEtel0rKFthLXpdKS9nLCAnJDEnKS5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbiAoZykge1xuXHRcdFx0XHRyZXR1cm4gZ1sxXS50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdCAqIGV4dGVybmFsIGhlbHBlcnNcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQgKi9cblxuXHRcdC8vIGV4dGVuZCBvYmog4oCTIHNhbWUgYXMgalF1ZXJ5LmV4dGVuZCh7fSwgb2JqQSwgb2JqQilcblx0XHRVLmV4dGVuZCA9IGZ1bmN0aW9uIChvYmopIHtcblx0XHRcdG9iaiA9IG9iaiB8fCB7fTtcblx0XHRcdGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKCFhcmd1bWVudHNbaV0pIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XG5cdFx0XHRcdFx0aWYgKGFyZ3VtZW50c1tpXS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0XHRvYmpba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9O1xuXG5cdFx0Ly8gY2hlY2sgaWYgYSBjc3MgZGlzcGxheSB0eXBlIHJlc3VsdHMgaW4gbWFyZ2luLWNvbGxhcHNlIG9yIG5vdFxuXHRcdFUuaXNNYXJnaW5Db2xsYXBzZVR5cGUgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdFx0XHRyZXR1cm4gW1wiYmxvY2tcIiwgXCJmbGV4XCIsIFwibGlzdC1pdGVtXCIsIFwidGFibGVcIiwgXCItd2Via2l0LWJveFwiXS5pbmRleE9mKHN0cikgPiAtMTtcblx0XHR9O1xuXG5cdFx0Ly8gaW1wbGVtZW50YXRpb24gb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG5cdFx0Ly8gYmFzZWQgb24gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcGF1bGlyaXNoLzE1Nzk2NzFcblx0XHR2YXJcblx0XHRsYXN0VGltZSA9IDAsXG5cdFx0XHR2ZW5kb3JzID0gWydtcycsICdtb3onLCAnd2Via2l0JywgJ28nXTtcblx0XHR2YXIgX3JlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cdFx0dmFyIF9jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZTtcblx0XHQvLyB0cnkgdmVuZG9yIHByZWZpeGVzIGlmIHRoZSBhYm92ZSBkb2Vzbid0IHdvcmtcblx0XHRmb3IgKGkgPSAwOyAhX3JlcXVlc3RBbmltYXRpb25GcmFtZSAmJiBpIDwgdmVuZG9ycy5sZW5ndGg7ICsraSkge1xuXHRcdFx0X3JlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW2ldICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuXHRcdFx0X2NhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fCB3aW5kb3dbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcblx0XHR9XG5cblx0XHQvLyBmYWxsYmFja3Ncblx0XHRpZiAoIV9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcblx0XHRcdF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdFx0dmFyXG5cdFx0XHRcdGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG5cdFx0XHRcdFx0dGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKSxcblx0XHRcdFx0XHRpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XG5cdFx0XHRcdFx0fSwgdGltZVRvQ2FsbCk7XG5cdFx0XHRcdGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuXHRcdFx0XHRyZXR1cm4gaWQ7XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZiAoIV9jYW5jZWxBbmltYXRpb25GcmFtZSkge1xuXHRcdFx0X2NhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoaWQpO1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0VS5yQUYgPSBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KTtcblx0XHRVLmNBRiA9IF9jYW5jZWxBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdyk7XG5cblx0XHR2YXJcblx0XHRsb2dsZXZlbHMgPSBbXCJlcnJvclwiLCBcIndhcm5cIiwgXCJsb2dcIl0sXG5cdFx0XHRjb25zb2xlID0gd2luZG93LmNvbnNvbGUgfHwge307XG5cblx0XHRjb25zb2xlLmxvZyA9IGNvbnNvbGUubG9nIHx8XG5cdFx0ZnVuY3Rpb24gKCkge307IC8vIG5vIGNvbnNvbGUgbG9nLCB3ZWxsIC0gZG8gbm90aGluZyB0aGVuLi4uXG5cdFx0Ly8gbWFrZSBzdXJlIG1ldGhvZHMgZm9yIGFsbCBsZXZlbHMgZXhpc3QuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGxvZ2xldmVscy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIG1ldGhvZCA9IGxvZ2xldmVsc1tpXTtcblx0XHRcdGlmICghY29uc29sZVttZXRob2RdKSB7XG5cdFx0XHRcdGNvbnNvbGVbbWV0aG9kXSA9IGNvbnNvbGUubG9nOyAvLyBwcmVmZXIgLmxvZyBvdmVyIG5vdGhpbmdcblx0XHRcdH1cblx0XHR9XG5cdFx0VS5sb2cgPSBmdW5jdGlvbiAobG9nbGV2ZWwpIHtcblx0XHRcdGlmIChsb2dsZXZlbCA+IGxvZ2xldmVscy5sZW5ndGggfHwgbG9nbGV2ZWwgPD0gMCkgbG9nbGV2ZWwgPSBsb2dsZXZlbHMubGVuZ3RoO1xuXHRcdFx0dmFyIG5vdyA9IG5ldyBEYXRlKCksXG5cdFx0XHRcdHRpbWUgPSAoXCIwXCIgKyBub3cuZ2V0SG91cnMoKSkuc2xpY2UoLTIpICsgXCI6XCIgKyAoXCIwXCIgKyBub3cuZ2V0TWludXRlcygpKS5zbGljZSgtMikgKyBcIjpcIiArIChcIjBcIiArIG5vdy5nZXRTZWNvbmRzKCkpLnNsaWNlKC0yKSArIFwiOlwiICsgKFwiMDBcIiArIG5vdy5nZXRNaWxsaXNlY29uZHMoKSkuc2xpY2UoLTMpLFxuXHRcdFx0XHRtZXRob2QgPSBsb2dsZXZlbHNbbG9nbGV2ZWwgLSAxXSxcblx0XHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuXHRcdFx0XHRmdW5jID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChjb25zb2xlW21ldGhvZF0sIGNvbnNvbGUpO1xuXHRcdFx0YXJncy51bnNoaWZ0KHRpbWUpO1xuXHRcdFx0ZnVuYy5hcHBseShjb25zb2xlLCBhcmdzKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0ICogdHlwZSB0ZXN0aW5nXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0ICovXG5cblx0XHR2YXIgX3R5cGUgPSBVLnR5cGUgPSBmdW5jdGlvbiAodikge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KS5yZXBsYWNlKC9eXFxbb2JqZWN0ICguKylcXF0kLywgXCIkMVwiKS50b0xvd2VyQ2FzZSgpO1xuXHRcdH07XG5cdFx0X3R5cGUuU3RyaW5nID0gZnVuY3Rpb24gKHYpIHtcblx0XHRcdHJldHVybiBfdHlwZSh2KSA9PT0gJ3N0cmluZyc7XG5cdFx0fTtcblx0XHRfdHlwZS5GdW5jdGlvbiA9IGZ1bmN0aW9uICh2KSB7XG5cdFx0XHRyZXR1cm4gX3R5cGUodikgPT09ICdmdW5jdGlvbic7XG5cdFx0fTtcblx0XHRfdHlwZS5BcnJheSA9IGZ1bmN0aW9uICh2KSB7XG5cdFx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheSh2KTtcblx0XHR9O1xuXHRcdF90eXBlLk51bWJlciA9IGZ1bmN0aW9uICh2KSB7XG5cdFx0XHRyZXR1cm4gIV90eXBlLkFycmF5KHYpICYmICh2IC0gcGFyc2VGbG9hdCh2KSArIDEpID49IDA7XG5cdFx0fTtcblx0XHRfdHlwZS5Eb21FbGVtZW50ID0gZnVuY3Rpb24gKG8pIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHR0eXBlb2YgSFRNTEVsZW1lbnQgPT09IFwib2JqZWN0XCIgPyBvIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgOiAvL0RPTTJcblx0XHRcdG8gJiYgdHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiYgbyAhPT0gbnVsbCAmJiBvLm5vZGVUeXBlID09PSAxICYmIHR5cGVvZiBvLm5vZGVOYW1lID09PSBcInN0cmluZ1wiKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0ICogRE9NIEVsZW1lbnQgaW5mb1xuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdCAqL1xuXHRcdC8vIGFsd2F5cyByZXR1cm5zIGEgbGlzdCBvZiBtYXRjaGluZyBET00gZWxlbWVudHMsIGZyb20gYSBzZWxlY3RvciwgYSBET00gZWxlbWVudCBvciBhbiBsaXN0IG9mIGVsZW1lbnRzIG9yIGV2ZW4gYW4gYXJyYXkgb2Ygc2VsZWN0b3JzXG5cdFx0dmFyIF9nZXQgPSBVLmdldCA9IHt9O1xuXHRcdF9nZXQuZWxlbWVudHMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcblx0XHRcdHZhciBhcnIgPSBbXTtcblx0XHRcdGlmIChfdHlwZS5TdHJpbmcoc2VsZWN0b3IpKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0c2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblx0XHRcdFx0fSBjYXRjaCAoZSkgeyAvLyBpbnZhbGlkIHNlbGVjdG9yXG5cdFx0XHRcdFx0cmV0dXJuIGFycjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKF90eXBlKHNlbGVjdG9yKSA9PT0gJ25vZGVsaXN0JyB8fCBfdHlwZS5BcnJheShzZWxlY3RvcikpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIHJlZiA9IGFyci5sZW5ndGggPSBzZWxlY3Rvci5sZW5ndGg7IGkgPCByZWY7IGkrKykgeyAvLyBsaXN0IG9mIGVsZW1lbnRzXG5cdFx0XHRcdFx0dmFyIGVsZW0gPSBzZWxlY3RvcltpXTtcblx0XHRcdFx0XHRhcnJbaV0gPSBfdHlwZS5Eb21FbGVtZW50KGVsZW0pID8gZWxlbSA6IF9nZXQuZWxlbWVudHMoZWxlbSk7IC8vIGlmIG5vdCBhbiBlbGVtZW50LCB0cnkgdG8gcmVzb2x2ZSByZWN1cnNpdmVseVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKF90eXBlLkRvbUVsZW1lbnQoc2VsZWN0b3IpIHx8IHNlbGVjdG9yID09PSBkb2N1bWVudCB8fCBzZWxlY3RvciA9PT0gd2luZG93KSB7XG5cdFx0XHRcdGFyciA9IFtzZWxlY3Rvcl07IC8vIG9ubHkgdGhlIGVsZW1lbnRcblx0XHRcdH1cblx0XHRcdHJldHVybiBhcnI7XG5cdFx0fTtcblx0XHQvLyBnZXQgc2Nyb2xsIHRvcCB2YWx1ZVxuXHRcdF9nZXQuc2Nyb2xsVG9wID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRcdHJldHVybiAoZWxlbSAmJiB0eXBlb2YgZWxlbS5zY3JvbGxUb3AgPT09ICdudW1iZXInKSA/IGVsZW0uc2Nyb2xsVG9wIDogd2luZG93LnBhZ2VZT2Zmc2V0IHx8IDA7XG5cdFx0fTtcblx0XHQvLyBnZXQgc2Nyb2xsIGxlZnQgdmFsdWVcblx0XHRfZ2V0LnNjcm9sbExlZnQgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0cmV0dXJuIChlbGVtICYmIHR5cGVvZiBlbGVtLnNjcm9sbExlZnQgPT09ICdudW1iZXInKSA/IGVsZW0uc2Nyb2xsTGVmdCA6IHdpbmRvdy5wYWdlWE9mZnNldCB8fCAwO1xuXHRcdH07XG5cdFx0Ly8gZ2V0IGVsZW1lbnQgaGVpZ2h0XG5cdFx0X2dldC53aWR0aCA9IGZ1bmN0aW9uIChlbGVtLCBvdXRlciwgaW5jbHVkZU1hcmdpbikge1xuXHRcdFx0cmV0dXJuIF9kaW1lbnNpb24oJ3dpZHRoJywgZWxlbSwgb3V0ZXIsIGluY2x1ZGVNYXJnaW4pO1xuXHRcdH07XG5cdFx0Ly8gZ2V0IGVsZW1lbnQgd2lkdGhcblx0XHRfZ2V0LmhlaWdodCA9IGZ1bmN0aW9uIChlbGVtLCBvdXRlciwgaW5jbHVkZU1hcmdpbikge1xuXHRcdFx0cmV0dXJuIF9kaW1lbnNpb24oJ2hlaWdodCcsIGVsZW0sIG91dGVyLCBpbmNsdWRlTWFyZ2luKTtcblx0XHR9O1xuXG5cdFx0Ly8gZ2V0IGVsZW1lbnQgcG9zaXRpb24gKG9wdGlvbmFsbHkgcmVsYXRpdmUgdG8gdmlld3BvcnQpXG5cdFx0X2dldC5vZmZzZXQgPSBmdW5jdGlvbiAoZWxlbSwgcmVsYXRpdmVUb1ZpZXdwb3J0KSB7XG5cdFx0XHR2YXIgb2Zmc2V0ID0ge1xuXHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdGxlZnQ6IDBcblx0XHRcdH07XG5cdFx0XHRpZiAoZWxlbSAmJiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkgeyAvLyBjaGVjayBpZiBhdmFpbGFibGVcblx0XHRcdFx0dmFyIHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRvZmZzZXQudG9wID0gcmVjdC50b3A7XG5cdFx0XHRcdG9mZnNldC5sZWZ0ID0gcmVjdC5sZWZ0O1xuXHRcdFx0XHRpZiAoIXJlbGF0aXZlVG9WaWV3cG9ydCkgeyAvLyBjbGllbnRSZWN0IGlzIGJ5IGRlZmF1bHQgcmVsYXRpdmUgdG8gdmlld3BvcnQuLi5cblx0XHRcdFx0XHRvZmZzZXQudG9wICs9IF9nZXQuc2Nyb2xsVG9wKCk7XG5cdFx0XHRcdFx0b2Zmc2V0LmxlZnQgKz0gX2dldC5zY3JvbGxMZWZ0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBvZmZzZXQ7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdCAqIERPTSBFbGVtZW50IG1hbmlwdWxhdGlvblxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdCAqL1xuXG5cdFx0VS5hZGRDbGFzcyA9IGZ1bmN0aW9uIChlbGVtLCBjbGFzc25hbWUpIHtcblx0XHRcdGlmIChjbGFzc25hbWUpIHtcblx0XHRcdFx0aWYgKGVsZW0uY2xhc3NMaXN0KSBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NuYW1lKTtcblx0XHRcdFx0ZWxzZSBlbGVtLmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc25hbWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRVLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGVsZW0sIGNsYXNzbmFtZSkge1xuXHRcdFx0aWYgKGNsYXNzbmFtZSkge1xuXHRcdFx0XHRpZiAoZWxlbS5jbGFzc0xpc3QpIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc25hbWUpO1xuXHRcdFx0XHRlbHNlIGVsZW0uY2xhc3NOYW1lID0gZWxlbS5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKCcoXnxcXFxcYiknICsgY2xhc3NuYW1lLnNwbGl0KCcgJykuam9pbignfCcpICsgJyhcXFxcYnwkKScsICdnaScpLCAnICcpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Ly8gaWYgb3B0aW9ucyBpcyBzdHJpbmcgLT4gcmV0dXJucyBjc3MgdmFsdWVcblx0XHQvLyBpZiBvcHRpb25zIGlzIGFycmF5IC0+IHJldHVybnMgb2JqZWN0IHdpdGggY3NzIHZhbHVlIHBhaXJzXG5cdFx0Ly8gaWYgb3B0aW9ucyBpcyBvYmplY3QgLT4gc2V0IG5ldyBjc3MgdmFsdWVzXG5cdFx0VS5jc3MgPSBmdW5jdGlvbiAoZWxlbSwgb3B0aW9ucykge1xuXHRcdFx0aWYgKF90eXBlLlN0cmluZyhvcHRpb25zKSkge1xuXHRcdFx0XHRyZXR1cm4gX2dldENvbXB1dGVkU3R5bGUoZWxlbSlbX2NhbWVsQ2FzZShvcHRpb25zKV07XG5cdFx0XHR9IGVsc2UgaWYgKF90eXBlLkFycmF5KG9wdGlvbnMpKSB7XG5cdFx0XHRcdHZhclxuXHRcdFx0XHRvYmogPSB7fSxcblx0XHRcdFx0XHRzdHlsZSA9IF9nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuXHRcdFx0XHRvcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbiwga2V5KSB7XG5cdFx0XHRcdFx0b2JqW29wdGlvbl0gPSBzdHlsZVtfY2FtZWxDYXNlKG9wdGlvbildO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIG9iajtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAodmFyIG9wdGlvbiBpbiBvcHRpb25zKSB7XG5cdFx0XHRcdFx0dmFyIHZhbCA9IG9wdGlvbnNbb3B0aW9uXTtcblx0XHRcdFx0XHRpZiAodmFsID09IHBhcnNlRmxvYXQodmFsKSkgeyAvLyBhc3N1bWUgcGl4ZWwgZm9yIHNlZW1pbmdseSBudW1lcmljYWwgdmFsdWVzXG5cdFx0XHRcdFx0XHR2YWwgKz0gJ3B4Jztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxlbS5zdHlsZVtfY2FtZWxDYXNlKG9wdGlvbildID0gdmFsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHJldHVybiBVO1xuXHR9KHdpbmRvdyB8fCB7fSkpO1xuXG5cdFNjcm9sbE1hZ2ljLlNjZW5lLnByb3RvdHlwZS5hZGRJbmRpY2F0b3JzID0gZnVuY3Rpb24gKCkge1xuXHRcdFNjcm9sbE1hZ2ljLl91dGlsLmxvZygxLCAnKFNjcm9sbE1hZ2ljLlNjZW5lKSAtPiBFUlJPUiBjYWxsaW5nIGFkZEluZGljYXRvcnMoKSBkdWUgdG8gbWlzc2luZyBQbHVnaW4gXFwnZGVidWcuYWRkSW5kaWNhdG9yc1xcJy4gUGxlYXNlIG1ha2Ugc3VyZSB0byBpbmNsdWRlIHBsdWdpbnMvZGVidWcuYWRkSW5kaWNhdG9ycy5qcycpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFNjcm9sbE1hZ2ljLlNjZW5lLnByb3RvdHlwZS5yZW1vdmVJbmRpY2F0b3JzID0gZnVuY3Rpb24gKCkge1xuXHRcdFNjcm9sbE1hZ2ljLl91dGlsLmxvZygxLCAnKFNjcm9sbE1hZ2ljLlNjZW5lKSAtPiBFUlJPUiBjYWxsaW5nIHJlbW92ZUluZGljYXRvcnMoKSBkdWUgdG8gbWlzc2luZyBQbHVnaW4gXFwnZGVidWcuYWRkSW5kaWNhdG9yc1xcJy4gUGxlYXNlIG1ha2Ugc3VyZSB0byBpbmNsdWRlIHBsdWdpbnMvZGVidWcuYWRkSW5kaWNhdG9ycy5qcycpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFNjcm9sbE1hZ2ljLlNjZW5lLnByb3RvdHlwZS5zZXRUd2VlbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRTY3JvbGxNYWdpYy5fdXRpbC5sb2coMSwgJyhTY3JvbGxNYWdpYy5TY2VuZSkgLT4gRVJST1IgY2FsbGluZyBzZXRUd2VlbigpIGR1ZSB0byBtaXNzaW5nIFBsdWdpbiBcXCdhbmltYXRpb24uZ3NhcFxcJy4gUGxlYXNlIG1ha2Ugc3VyZSB0byBpbmNsdWRlIHBsdWdpbnMvYW5pbWF0aW9uLmdzYXAuanMnKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRTY3JvbGxNYWdpYy5TY2VuZS5wcm90b3R5cGUucmVtb3ZlVHdlZW4gPSBmdW5jdGlvbiAoKSB7XG5cdFx0U2Nyb2xsTWFnaWMuX3V0aWwubG9nKDEsICcoU2Nyb2xsTWFnaWMuU2NlbmUpIC0+IEVSUk9SIGNhbGxpbmcgcmVtb3ZlVHdlZW4oKSBkdWUgdG8gbWlzc2luZyBQbHVnaW4gXFwnYW5pbWF0aW9uLmdzYXBcXCcuIFBsZWFzZSBtYWtlIHN1cmUgdG8gaW5jbHVkZSBwbHVnaW5zL2FuaW1hdGlvbi5nc2FwLmpzJyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0U2Nyb2xsTWFnaWMuU2NlbmUucHJvdG90eXBlLnNldFZlbG9jaXR5ID0gZnVuY3Rpb24gKCkge1xuXHRcdFNjcm9sbE1hZ2ljLl91dGlsLmxvZygxLCAnKFNjcm9sbE1hZ2ljLlNjZW5lKSAtPiBFUlJPUiBjYWxsaW5nIHNldFZlbG9jaXR5KCkgZHVlIHRvIG1pc3NpbmcgUGx1Z2luIFxcJ2FuaW1hdGlvbi52ZWxvY2l0eVxcJy4gUGxlYXNlIG1ha2Ugc3VyZSB0byBpbmNsdWRlIHBsdWdpbnMvYW5pbWF0aW9uLnZlbG9jaXR5LmpzJyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0U2Nyb2xsTWFnaWMuU2NlbmUucHJvdG90eXBlLnJlbW92ZVZlbG9jaXR5ID0gZnVuY3Rpb24gKCkge1xuXHRcdFNjcm9sbE1hZ2ljLl91dGlsLmxvZygxLCAnKFNjcm9sbE1hZ2ljLlNjZW5lKSAtPiBFUlJPUiBjYWxsaW5nIHJlbW92ZVZlbG9jaXR5KCkgZHVlIHRvIG1pc3NpbmcgUGx1Z2luIFxcJ2FuaW1hdGlvbi52ZWxvY2l0eVxcJy4gUGxlYXNlIG1ha2Ugc3VyZSB0byBpbmNsdWRlIHBsdWdpbnMvYW5pbWF0aW9uLnZlbG9jaXR5LmpzJyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRyZXR1cm4gU2Nyb2xsTWFnaWM7XG59KSk7IiwiLyohXG4gKiBcbiAqICAgdHlwZWQuanMgLSBBIEphdmFTY3JpcHQgVHlwaW5nIEFuaW1hdGlvbiBMaWJyYXJ5XG4gKiAgIEF1dGhvcjogTWF0dCBCb2xkdCA8bWVAbWF0dGJvbGR0LmNvbT5cbiAqICAgVmVyc2lvbjogdjIuMC42XG4gKiAgIFVybDogaHR0cHM6Ly9naXRodWIuY29tL21hdHRib2xkdC90eXBlZC5qc1xuICogICBMaWNlbnNlKHMpOiBNSVRcbiAqIFxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJUeXBlZFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUeXBlZFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblx0XG5cdHZhciBfaW5pdGlhbGl6ZXJKcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdFxuXHR2YXIgX2h0bWxQYXJzZXJKcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdFxuXHQvKipcblx0ICogV2VsY29tZSB0byBUeXBlZC5qcyFcblx0ICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnRJZCBIVE1MIGVsZW1lbnQgSUQgX09SXyBIVE1MIGVsZW1lbnRcblx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgb3B0aW9ucyBvYmplY3Rcblx0ICogQHJldHVybnMge29iamVjdH0gYSBuZXcgVHlwZWQgb2JqZWN0XG5cdCAqL1xuXHRcblx0dmFyIFR5cGVkID0gKGZ1bmN0aW9uICgpIHtcblx0ICBmdW5jdGlvbiBUeXBlZChlbGVtZW50SWQsIG9wdGlvbnMpIHtcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUeXBlZCk7XG5cdFxuXHQgICAgLy8gSW5pdGlhbGl6ZSBpdCB1cFxuXHQgICAgX2luaXRpYWxpemVySnMuaW5pdGlhbGl6ZXIubG9hZCh0aGlzLCBvcHRpb25zLCBlbGVtZW50SWQpO1xuXHQgICAgLy8gQWxsIHN5c3RlbXMgZ28hXG5cdCAgICB0aGlzLmJlZ2luKCk7XG5cdCAgfVxuXHRcblx0ICAvKipcblx0ICAgKiBUb2dnbGUgc3RhcnQoKSBhbmQgc3RvcCgpIG9mIHRoZSBUeXBlZCBpbnN0YW5jZVxuXHQgICAqIEBwdWJsaWNcblx0ICAgKi9cblx0XG5cdCAgX2NyZWF0ZUNsYXNzKFR5cGVkLCBbe1xuXHQgICAga2V5OiAndG9nZ2xlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGUoKSB7XG5cdCAgICAgIHRoaXMucGF1c2Uuc3RhdHVzID8gdGhpcy5zdGFydCgpIDogdGhpcy5zdG9wKCk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBTdG9wIHR5cGluZyAvIGJhY2tzcGFjaW5nIGFuZCBlbmFibGUgY3Vyc29yIGJsaW5raW5nXG5cdCAgICAgKiBAcHVibGljXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdzdG9wJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuXHQgICAgICBpZiAodGhpcy50eXBpbmdDb21wbGV0ZSkgcmV0dXJuO1xuXHQgICAgICBpZiAodGhpcy5wYXVzZS5zdGF0dXMpIHJldHVybjtcblx0ICAgICAgdGhpcy50b2dnbGVCbGlua2luZyh0cnVlKTtcblx0ICAgICAgdGhpcy5wYXVzZS5zdGF0dXMgPSB0cnVlO1xuXHQgICAgICB0aGlzLm9wdGlvbnMub25TdG9wKHRoaXMuYXJyYXlQb3MsIHRoaXMpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogU3RhcnQgdHlwaW5nIC8gYmFja3NwYWNpbmcgYWZ0ZXIgYmVpbmcgc3RvcHBlZFxuXHQgICAgICogQHB1YmxpY1xuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnc3RhcnQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuXHQgICAgICBpZiAodGhpcy50eXBpbmdDb21wbGV0ZSkgcmV0dXJuO1xuXHQgICAgICBpZiAoIXRoaXMucGF1c2Uuc3RhdHVzKSByZXR1cm47XG5cdCAgICAgIHRoaXMucGF1c2Uuc3RhdHVzID0gZmFsc2U7XG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnR5cGV3cml0ZSkge1xuXHQgICAgICAgIHRoaXMudHlwZXdyaXRlKHRoaXMucGF1c2UuY3VyU3RyaW5nLCB0aGlzLnBhdXNlLmN1clN0clBvcyk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy5iYWNrc3BhY2UodGhpcy5wYXVzZS5jdXJTdHJpbmcsIHRoaXMucGF1c2UuY3VyU3RyUG9zKTtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLm9wdGlvbnMub25TdGFydCh0aGlzLmFycmF5UG9zLCB0aGlzKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIERlc3Ryb3kgdGhpcyBpbnN0YW5jZSBvZiBUeXBlZFxuXHQgICAgICogQHB1YmxpY1xuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnZGVzdHJveScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0ICAgICAgdGhpcy5yZXNldChmYWxzZSk7XG5cdCAgICAgIHRoaXMub3B0aW9ucy5vbkRlc3Ryb3kodGhpcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBSZXNldCBUeXBlZCBhbmQgb3B0aW9uYWxseSByZXN0YXJ0c1xuXHQgICAgICogQHBhcmFtIHtib29sZWFufSByZXN0YXJ0XG5cdCAgICAgKiBAcHVibGljXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdyZXNldCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG5cdCAgICAgIHZhciByZXN0YXJ0ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFyZ3VtZW50c1swXTtcblx0XG5cdCAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lb3V0KTtcblx0ICAgICAgdGhpcy5yZXBsYWNlVGV4dCgnJyk7XG5cdCAgICAgIGlmICh0aGlzLmN1cnNvciAmJiB0aGlzLmN1cnNvci5wYXJlbnROb2RlKSB7XG5cdCAgICAgICAgdGhpcy5jdXJzb3IucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmN1cnNvcik7XG5cdCAgICAgICAgdGhpcy5jdXJzb3IgPSBudWxsO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMuc3RyUG9zID0gMDtcblx0ICAgICAgdGhpcy5hcnJheVBvcyA9IDA7XG5cdCAgICAgIHRoaXMuY3VyTG9vcCA9IDA7XG5cdCAgICAgIGlmIChyZXN0YXJ0KSB7XG5cdCAgICAgICAgdGhpcy5pbnNlcnRDdXJzb3IoKTtcblx0ICAgICAgICB0aGlzLm9wdGlvbnMub25SZXNldCh0aGlzKTtcblx0ICAgICAgICB0aGlzLmJlZ2luKCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEJlZ2lucyB0aGUgdHlwaW5nIGFuaW1hdGlvblxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2JlZ2luJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBiZWdpbigpIHtcblx0ICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0XG5cdCAgICAgIHRoaXMudHlwaW5nQ29tcGxldGUgPSBmYWxzZTtcblx0ICAgICAgdGhpcy5zaHVmZmxlU3RyaW5nc0lmTmVlZGVkKHRoaXMpO1xuXHQgICAgICB0aGlzLmluc2VydEN1cnNvcigpO1xuXHQgICAgICBpZiAodGhpcy5iaW5kSW5wdXRGb2N1c0V2ZW50cykgdGhpcy5iaW5kRm9jdXNFdmVudHMoKTtcblx0ICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgc29tZSB0ZXh0IGluIHRoZSBlbGVtZW50LCBpZiB5ZXMgc3RhcnQgYnkgYmFja3NwYWNpbmcgdGhlIGRlZmF1bHQgbWVzc2FnZVxuXHQgICAgICAgIGlmICghX3RoaXMuY3VycmVudEVsQ29udGVudCB8fCBfdGhpcy5jdXJyZW50RWxDb250ZW50Lmxlbmd0aCA9PT0gMCkge1xuXHQgICAgICAgICAgX3RoaXMudHlwZXdyaXRlKF90aGlzLnN0cmluZ3NbX3RoaXMuc2VxdWVuY2VbX3RoaXMuYXJyYXlQb3NdXSwgX3RoaXMuc3RyUG9zKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgLy8gU3RhcnQgdHlwaW5nXG5cdCAgICAgICAgICBfdGhpcy5iYWNrc3BhY2UoX3RoaXMuY3VycmVudEVsQ29udGVudCwgX3RoaXMuY3VycmVudEVsQ29udGVudC5sZW5ndGgpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSwgdGhpcy5zdGFydERlbGF5KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIENhbGxlZCBmb3IgZWFjaCBjaGFyYWN0ZXIgdHlwZWRcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgdGhlIGN1cnJlbnQgc3RyaW5nIGluIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjdXJTdHJpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICd0eXBld3JpdGUnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHR5cGV3cml0ZShjdXJTdHJpbmcsIGN1clN0clBvcykge1xuXHQgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblx0XG5cdCAgICAgIGlmICh0aGlzLmZhZGVPdXQgJiYgdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5mYWRlT3V0Q2xhc3MpKSB7XG5cdCAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZmFkZU91dENsYXNzKTtcblx0ICAgICAgICBpZiAodGhpcy5jdXJzb3IpIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5mYWRlT3V0Q2xhc3MpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICB2YXIgaHVtYW5pemUgPSB0aGlzLmh1bWFuaXplcih0aGlzLnR5cGVTcGVlZCk7XG5cdCAgICAgIHZhciBudW1DaGFycyA9IDE7XG5cdFxuXHQgICAgICBpZiAodGhpcy5wYXVzZS5zdGF0dXMgPT09IHRydWUpIHtcblx0ICAgICAgICB0aGlzLnNldFBhdXNlU3RhdHVzKGN1clN0cmluZywgY3VyU3RyUG9zLCB0cnVlKTtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIC8vIGNvbnRhaW4gdHlwaW5nIGZ1bmN0aW9uIGluIGEgdGltZW91dCBodW1hbml6ZSdkIGRlbGF5XG5cdCAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIC8vIHNraXAgb3ZlciBhbnkgSFRNTCBjaGFyc1xuXHQgICAgICAgIGN1clN0clBvcyA9IF9odG1sUGFyc2VySnMuaHRtbFBhcnNlci50eXBlSHRtbENoYXJzKGN1clN0cmluZywgY3VyU3RyUG9zLCBfdGhpczIpO1xuXHRcblx0ICAgICAgICB2YXIgcGF1c2VUaW1lID0gMDtcblx0ICAgICAgICB2YXIgc3Vic3RyID0gY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MpO1xuXHQgICAgICAgIC8vIGNoZWNrIGZvciBhbiBlc2NhcGUgY2hhcmFjdGVyIGJlZm9yZSBhIHBhdXNlIHZhbHVlXG5cdCAgICAgICAgLy8gZm9ybWF0OiBcXF5cXGQrIC4uIGVnOiBeMTAwMCAuLiBzaG91bGQgYmUgYWJsZSB0byBwcmludCB0aGUgXiB0b28gdXNpbmcgXl5cblx0ICAgICAgICAvLyBzaW5nbGUgXiBhcmUgcmVtb3ZlZCBmcm9tIHN0cmluZ1xuXHQgICAgICAgIGlmIChzdWJzdHIuY2hhckF0KDApID09PSAnXicpIHtcblx0ICAgICAgICAgIGlmICgvXlxcXlxcZCsvLnRlc3Qoc3Vic3RyKSkge1xuXHQgICAgICAgICAgICB2YXIgc2tpcCA9IDE7IC8vIHNraXAgYXQgbGVhc3QgMVxuXHQgICAgICAgICAgICBzdWJzdHIgPSAvXFxkKy8uZXhlYyhzdWJzdHIpWzBdO1xuXHQgICAgICAgICAgICBza2lwICs9IHN1YnN0ci5sZW5ndGg7XG5cdCAgICAgICAgICAgIHBhdXNlVGltZSA9IHBhcnNlSW50KHN1YnN0cik7XG5cdCAgICAgICAgICAgIF90aGlzMi50ZW1wb3JhcnlQYXVzZSA9IHRydWU7XG5cdCAgICAgICAgICAgIF90aGlzMi5vcHRpb25zLm9uVHlwaW5nUGF1c2VkKF90aGlzMi5hcnJheVBvcywgX3RoaXMyKTtcblx0ICAgICAgICAgICAgLy8gc3RyaXAgb3V0IHRoZSBlc2NhcGUgY2hhcmFjdGVyIGFuZCBwYXVzZSB2YWx1ZSBzbyB0aGV5J3JlIG5vdCBwcmludGVkXG5cdCAgICAgICAgICAgIGN1clN0cmluZyA9IGN1clN0cmluZy5zdWJzdHJpbmcoMCwgY3VyU3RyUG9zKSArIGN1clN0cmluZy5zdWJzdHJpbmcoY3VyU3RyUG9zICsgc2tpcCk7XG5cdCAgICAgICAgICAgIF90aGlzMi50b2dnbGVCbGlua2luZyh0cnVlKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIC8vIGNoZWNrIGZvciBza2lwIGNoYXJhY3RlcnMgZm9ybWF0dGVkIGFzXG5cdCAgICAgICAgLy8gXCJ0aGlzIGlzIGEgYHN0cmluZyB0byBwcmludCBOT1dgIC4uLlwiXG5cdCAgICAgICAgaWYgKHN1YnN0ci5jaGFyQXQoMCkgPT09ICdgJykge1xuXHQgICAgICAgICAgd2hpbGUgKGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zICsgbnVtQ2hhcnMpLmNoYXJBdCgwKSAhPT0gJ2AnKSB7XG5cdCAgICAgICAgICAgIG51bUNoYXJzKys7XG5cdCAgICAgICAgICAgIGlmIChjdXJTdHJQb3MgKyBudW1DaGFycyA+IGN1clN0cmluZy5sZW5ndGgpIGJyZWFrO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgICAgLy8gc3RyaXAgb3V0IHRoZSBlc2NhcGUgY2hhcmFjdGVycyBhbmQgYXBwZW5kIGFsbCB0aGUgc3RyaW5nIGluIGJldHdlZW5cblx0ICAgICAgICAgIHZhciBzdHJpbmdCZWZvcmVTa2lwID0gY3VyU3RyaW5nLnN1YnN0cmluZygwLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgICAgdmFyIHN0cmluZ1NraXBwZWQgPSBjdXJTdHJpbmcuc3Vic3RyaW5nKHN0cmluZ0JlZm9yZVNraXAubGVuZ3RoICsgMSwgY3VyU3RyUG9zICsgbnVtQ2hhcnMpO1xuXHQgICAgICAgICAgdmFyIHN0cmluZ0FmdGVyU2tpcCA9IGN1clN0cmluZy5zdWJzdHJpbmcoY3VyU3RyUG9zICsgbnVtQ2hhcnMgKyAxKTtcblx0ICAgICAgICAgIGN1clN0cmluZyA9IHN0cmluZ0JlZm9yZVNraXAgKyBzdHJpbmdTa2lwcGVkICsgc3RyaW5nQWZ0ZXJTa2lwO1xuXHQgICAgICAgICAgbnVtQ2hhcnMtLTtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIC8vIHRpbWVvdXQgZm9yIGFueSBwYXVzZSBhZnRlciBhIGNoYXJhY3RlclxuXHQgICAgICAgIF90aGlzMi50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAvLyBBY2NvdW50cyBmb3IgYmxpbmtpbmcgd2hpbGUgcGF1c2VkXG5cdCAgICAgICAgICBfdGhpczIudG9nZ2xlQmxpbmtpbmcoZmFsc2UpO1xuXHRcblx0ICAgICAgICAgIC8vIFdlJ3JlIGRvbmUgd2l0aCB0aGlzIHNlbnRlbmNlIVxuXHQgICAgICAgICAgaWYgKGN1clN0clBvcyA9PT0gY3VyU3RyaW5nLmxlbmd0aCkge1xuXHQgICAgICAgICAgICBfdGhpczIuZG9uZVR5cGluZyhjdXJTdHJpbmcsIGN1clN0clBvcyk7XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBfdGhpczIua2VlcFR5cGluZyhjdXJTdHJpbmcsIGN1clN0clBvcywgbnVtQ2hhcnMpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgICAgLy8gZW5kIG9mIGNoYXJhY3RlciBwYXVzZVxuXHQgICAgICAgICAgaWYgKF90aGlzMi50ZW1wb3JhcnlQYXVzZSkge1xuXHQgICAgICAgICAgICBfdGhpczIudGVtcG9yYXJ5UGF1c2UgPSBmYWxzZTtcblx0ICAgICAgICAgICAgX3RoaXMyLm9wdGlvbnMub25UeXBpbmdSZXN1bWVkKF90aGlzMi5hcnJheVBvcywgX3RoaXMyKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9LCBwYXVzZVRpbWUpO1xuXHRcblx0ICAgICAgICAvLyBodW1hbml6ZWQgdmFsdWUgZm9yIHR5cGluZ1xuXHQgICAgICB9LCBodW1hbml6ZSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBDb250aW51ZSB0byB0aGUgbmV4dCBzdHJpbmcgJiBiZWdpbiB0eXBpbmdcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgdGhlIGN1cnJlbnQgc3RyaW5nIGluIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjdXJTdHJpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdrZWVwVHlwaW5nJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBrZWVwVHlwaW5nKGN1clN0cmluZywgY3VyU3RyUG9zLCBudW1DaGFycykge1xuXHQgICAgICAvLyBjYWxsIGJlZm9yZSBmdW5jdGlvbnMgaWYgYXBwbGljYWJsZVxuXHQgICAgICBpZiAoY3VyU3RyUG9zID09PSAwKSB7XG5cdCAgICAgICAgdGhpcy50b2dnbGVCbGlua2luZyhmYWxzZSk7XG5cdCAgICAgICAgdGhpcy5vcHRpb25zLnByZVN0cmluZ1R5cGVkKHRoaXMuYXJyYXlQb3MsIHRoaXMpO1xuXHQgICAgICB9XG5cdCAgICAgIC8vIHN0YXJ0IHR5cGluZyBlYWNoIG5ldyBjaGFyIGludG8gZXhpc3Rpbmcgc3RyaW5nXG5cdCAgICAgIC8vIGN1clN0cmluZzogYXJnLCB0aGlzLmVsLmh0bWw6IG9yaWdpbmFsIHRleHQgaW5zaWRlIGVsZW1lbnRcblx0ICAgICAgY3VyU3RyUG9zICs9IG51bUNoYXJzO1xuXHQgICAgICB2YXIgbmV4dFN0cmluZyA9IGN1clN0cmluZy5zdWJzdHIoMCwgY3VyU3RyUG9zKTtcblx0ICAgICAgdGhpcy5yZXBsYWNlVGV4dChuZXh0U3RyaW5nKTtcblx0ICAgICAgLy8gbG9vcCB0aGUgZnVuY3Rpb25cblx0ICAgICAgdGhpcy50eXBld3JpdGUoY3VyU3RyaW5nLCBjdXJTdHJQb3MpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogV2UncmUgZG9uZSB0eXBpbmcgYWxsIHN0cmluZ3Ncblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgdGhlIGN1cnJlbnQgc3RyaW5nIGluIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjdXJTdHJpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdkb25lVHlwaW5nJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBkb25lVHlwaW5nKGN1clN0cmluZywgY3VyU3RyUG9zKSB7XG5cdCAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXHRcblx0ICAgICAgLy8gZmlyZXMgY2FsbGJhY2sgZnVuY3Rpb25cblx0ICAgICAgdGhpcy5vcHRpb25zLm9uU3RyaW5nVHlwZWQodGhpcy5hcnJheVBvcywgdGhpcyk7XG5cdCAgICAgIHRoaXMudG9nZ2xlQmxpbmtpbmcodHJ1ZSk7XG5cdCAgICAgIC8vIGlzIHRoaXMgdGhlIGZpbmFsIHN0cmluZ1xuXHQgICAgICBpZiAodGhpcy5hcnJheVBvcyA9PT0gdGhpcy5zdHJpbmdzLmxlbmd0aCAtIDEpIHtcblx0ICAgICAgICAvLyBjYWxsYmFjayB0aGF0IG9jY3VycyBvbiB0aGUgbGFzdCB0eXBlZCBzdHJpbmdcblx0ICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG5cdCAgICAgICAgLy8gcXVpdCBpZiB3ZSB3b250IGxvb3AgYmFja1xuXHQgICAgICAgIGlmICh0aGlzLmxvb3AgPT09IGZhbHNlIHx8IHRoaXMuY3VyTG9vcCA9PT0gdGhpcy5sb29wQ291bnQpIHtcblx0ICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgX3RoaXMzLmJhY2tzcGFjZShjdXJTdHJpbmcsIGN1clN0clBvcyk7XG5cdCAgICAgIH0sIHRoaXMuYmFja0RlbGF5KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEJhY2tzcGFjZXMgMSBjaGFyYWN0ZXIgYXQgYSB0aW1lXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnYmFja3NwYWNlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBiYWNrc3BhY2UoY3VyU3RyaW5nLCBjdXJTdHJQb3MpIHtcblx0ICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cdFxuXHQgICAgICBpZiAodGhpcy5wYXVzZS5zdGF0dXMgPT09IHRydWUpIHtcblx0ICAgICAgICB0aGlzLnNldFBhdXNlU3RhdHVzKGN1clN0cmluZywgY3VyU3RyUG9zLCB0cnVlKTtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHRoaXMuZmFkZU91dCkgcmV0dXJuIHRoaXMuaW5pdEZhZGVPdXQoKTtcblx0XG5cdCAgICAgIHRoaXMudG9nZ2xlQmxpbmtpbmcoZmFsc2UpO1xuXHQgICAgICB2YXIgaHVtYW5pemUgPSB0aGlzLmh1bWFuaXplcih0aGlzLmJhY2tTcGVlZCk7XG5cdFxuXHQgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBjdXJTdHJQb3MgPSBfaHRtbFBhcnNlckpzLmh0bWxQYXJzZXIuYmFja1NwYWNlSHRtbENoYXJzKGN1clN0cmluZywgY3VyU3RyUG9zLCBfdGhpczQpO1xuXHQgICAgICAgIC8vIHJlcGxhY2UgdGV4dCB3aXRoIGJhc2UgdGV4dCArIHR5cGVkIGNoYXJhY3RlcnNcblx0ICAgICAgICB2YXIgY3VyU3RyaW5nQXRQb3NpdGlvbiA9IGN1clN0cmluZy5zdWJzdHIoMCwgY3VyU3RyUG9zKTtcblx0ICAgICAgICBfdGhpczQucmVwbGFjZVRleHQoY3VyU3RyaW5nQXRQb3NpdGlvbik7XG5cdFxuXHQgICAgICAgIC8vIGlmIHNtYXJ0QmFjayBpcyBlbmFibGVkXG5cdCAgICAgICAgaWYgKF90aGlzNC5zbWFydEJhY2tzcGFjZSkge1xuXHQgICAgICAgICAgLy8gdGhlIHJlbWFpbmluZyBwYXJ0IG9mIHRoZSBjdXJyZW50IHN0cmluZyBpcyBlcXVhbCBvZiB0aGUgc2FtZSBwYXJ0IG9mIHRoZSBuZXcgc3RyaW5nXG5cdCAgICAgICAgICB2YXIgbmV4dFN0cmluZyA9IF90aGlzNC5zdHJpbmdzW190aGlzNC5hcnJheVBvcyArIDFdO1xuXHQgICAgICAgICAgaWYgKG5leHRTdHJpbmcgJiYgY3VyU3RyaW5nQXRQb3NpdGlvbiA9PT0gbmV4dFN0cmluZy5zdWJzdHIoMCwgY3VyU3RyUG9zKSkge1xuXHQgICAgICAgICAgICBfdGhpczQuc3RvcE51bSA9IGN1clN0clBvcztcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIF90aGlzNC5zdG9wTnVtID0gMDtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIC8vIGlmIHRoZSBudW1iZXIgKGlkIG9mIGNoYXJhY3RlciBpbiBjdXJyZW50IHN0cmluZykgaXNcblx0ICAgICAgICAvLyBsZXNzIHRoYW4gdGhlIHN0b3AgbnVtYmVyLCBrZWVwIGdvaW5nXG5cdCAgICAgICAgaWYgKGN1clN0clBvcyA+IF90aGlzNC5zdG9wTnVtKSB7XG5cdCAgICAgICAgICAvLyBzdWJ0cmFjdCBjaGFyYWN0ZXJzIG9uZSBieSBvbmVcblx0ICAgICAgICAgIGN1clN0clBvcy0tO1xuXHQgICAgICAgICAgLy8gbG9vcCB0aGUgZnVuY3Rpb25cblx0ICAgICAgICAgIF90aGlzNC5iYWNrc3BhY2UoY3VyU3RyaW5nLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgIH0gZWxzZSBpZiAoY3VyU3RyUG9zIDw9IF90aGlzNC5zdG9wTnVtKSB7XG5cdCAgICAgICAgICAvLyBpZiB0aGUgc3RvcCBudW1iZXIgaGFzIGJlZW4gcmVhY2hlZCwgaW5jcmVhc2Vcblx0ICAgICAgICAgIC8vIGFycmF5IHBvc2l0aW9uIHRvIG5leHQgc3RyaW5nXG5cdCAgICAgICAgICBfdGhpczQuYXJyYXlQb3MrKztcblx0ICAgICAgICAgIC8vIFdoZW4gbG9vcGluZywgYmVnaW4gYXQgdGhlIGJlZ2lubmluZyBhZnRlciBiYWNrc3BhY2UgY29tcGxldGVcblx0ICAgICAgICAgIGlmIChfdGhpczQuYXJyYXlQb3MgPT09IF90aGlzNC5zdHJpbmdzLmxlbmd0aCkge1xuXHQgICAgICAgICAgICBfdGhpczQuYXJyYXlQb3MgPSAwO1xuXHQgICAgICAgICAgICBfdGhpczQub3B0aW9ucy5vbkxhc3RTdHJpbmdCYWNrc3BhY2VkKCk7XG5cdCAgICAgICAgICAgIF90aGlzNC5zaHVmZmxlU3RyaW5nc0lmTmVlZGVkKCk7XG5cdCAgICAgICAgICAgIF90aGlzNC5iZWdpbigpO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgX3RoaXM0LnR5cGV3cml0ZShfdGhpczQuc3RyaW5nc1tfdGhpczQuc2VxdWVuY2VbX3RoaXM0LmFycmF5UG9zXV0sIGN1clN0clBvcyk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIC8vIGh1bWFuaXplZCB2YWx1ZSBmb3IgdHlwaW5nXG5cdCAgICAgIH0sIGh1bWFuaXplKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEZ1bGwgYW5pbWF0aW9uIGlzIGNvbXBsZXRlXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnY29tcGxldGUnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuXHQgICAgICB0aGlzLm9wdGlvbnMub25Db21wbGV0ZSh0aGlzKTtcblx0ICAgICAgaWYgKHRoaXMubG9vcCkge1xuXHQgICAgICAgIHRoaXMuY3VyTG9vcCsrO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMudHlwaW5nQ29tcGxldGUgPSB0cnVlO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBIYXMgdGhlIHR5cGluZyBiZWVuIHN0b3BwZWRcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgdGhlIGN1cnJlbnQgc3RyaW5nIGluIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjdXJTdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNUeXBpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdzZXRQYXVzZVN0YXR1cycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UGF1c2VTdGF0dXMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIGlzVHlwaW5nKSB7XG5cdCAgICAgIHRoaXMucGF1c2UudHlwZXdyaXRlID0gaXNUeXBpbmc7XG5cdCAgICAgIHRoaXMucGF1c2UuY3VyU3RyaW5nID0gY3VyU3RyaW5nO1xuXHQgICAgICB0aGlzLnBhdXNlLmN1clN0clBvcyA9IGN1clN0clBvcztcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFRvZ2dsZSB0aGUgYmxpbmtpbmcgY3Vyc29yXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQmxpbmtpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICd0b2dnbGVCbGlua2luZycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdG9nZ2xlQmxpbmtpbmcoaXNCbGlua2luZykge1xuXHQgICAgICBpZiAoIXRoaXMuY3Vyc29yKSByZXR1cm47XG5cdCAgICAgIC8vIGlmIGluIHBhdXNlZCBzdGF0ZSwgZG9uJ3QgdG9nZ2xlIGJsaW5raW5nIGEgMm5kIHRpbWVcblx0ICAgICAgaWYgKHRoaXMucGF1c2Uuc3RhdHVzKSByZXR1cm47XG5cdCAgICAgIGlmICh0aGlzLmN1cnNvckJsaW5raW5nID09PSBpc0JsaW5raW5nKSByZXR1cm47XG5cdCAgICAgIHRoaXMuY3Vyc29yQmxpbmtpbmcgPSBpc0JsaW5raW5nO1xuXHQgICAgICB2YXIgc3RhdHVzID0gaXNCbGlua2luZyA/ICdpbmZpbml0ZScgOiAwO1xuXHQgICAgICB0aGlzLmN1cnNvci5zdHlsZS5hbmltYXRpb25JdGVyYXRpb25Db3VudCA9IHN0YXR1cztcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFNwZWVkIGluIE1TIHRvIHR5cGVcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzcGVlZFxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2h1bWFuaXplcicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gaHVtYW5pemVyKHNwZWVkKSB7XG5cdCAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBzcGVlZCAvIDIpICsgc3BlZWQ7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBTaHVmZmxlIHRoZSBzZXF1ZW5jZSBvZiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3NodWZmbGVTdHJpbmdzSWZOZWVkZWQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHNodWZmbGVTdHJpbmdzSWZOZWVkZWQoKSB7XG5cdCAgICAgIGlmICghdGhpcy5zaHVmZmxlKSByZXR1cm47XG5cdCAgICAgIHRoaXMuc2VxdWVuY2UgPSB0aGlzLnNlcXVlbmNlLnNvcnQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIC0gMC41O1xuXHQgICAgICB9KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEFkZHMgYSBDU1MgY2xhc3MgdG8gZmFkZSBvdXQgY3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdpbml0RmFkZU91dCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdEZhZGVPdXQoKSB7XG5cdCAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXHRcblx0ICAgICAgdGhpcy5lbC5jbGFzc05hbWUgKz0gJyAnICsgdGhpcy5mYWRlT3V0Q2xhc3M7XG5cdCAgICAgIGlmICh0aGlzLmN1cnNvcikgdGhpcy5jdXJzb3IuY2xhc3NOYW1lICs9ICcgJyArIHRoaXMuZmFkZU91dENsYXNzO1xuXHQgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgX3RoaXM1LmFycmF5UG9zKys7XG5cdCAgICAgICAgX3RoaXM1LnJlcGxhY2VUZXh0KCcnKTtcblx0XG5cdCAgICAgICAgLy8gUmVzZXRzIGN1cnJlbnQgc3RyaW5nIGlmIGVuZCBvZiBsb29wIHJlYWNoZWRcblx0ICAgICAgICBpZiAoX3RoaXM1LnN0cmluZ3MubGVuZ3RoID4gX3RoaXM1LmFycmF5UG9zKSB7XG5cdCAgICAgICAgICBfdGhpczUudHlwZXdyaXRlKF90aGlzNS5zdHJpbmdzW190aGlzNS5zZXF1ZW5jZVtfdGhpczUuYXJyYXlQb3NdXSwgMCk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIF90aGlzNS50eXBld3JpdGUoX3RoaXM1LnN0cmluZ3NbMF0sIDApO1xuXHQgICAgICAgICAgX3RoaXM1LmFycmF5UG9zID0gMDtcblx0ICAgICAgICB9XG5cdCAgICAgIH0sIHRoaXMuZmFkZU91dERlbGF5KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFJlcGxhY2VzIGN1cnJlbnQgdGV4dCBpbiB0aGUgSFRNTCBlbGVtZW50XG5cdCAgICAgKiBkZXBlbmRpbmcgb24gZWxlbWVudCB0eXBlXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAncmVwbGFjZVRleHQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KHN0cikge1xuXHQgICAgICBpZiAodGhpcy5hdHRyKSB7XG5cdCAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUodGhpcy5hdHRyLCBzdHIpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGlmICh0aGlzLmlzSW5wdXQpIHtcblx0ICAgICAgICAgIHRoaXMuZWwudmFsdWUgPSBzdHI7XG5cdCAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbnRlbnRUeXBlID09PSAnaHRtbCcpIHtcblx0ICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gc3RyO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICB0aGlzLmVsLnRleHRDb250ZW50ID0gc3RyO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogSWYgdXNpbmcgaW5wdXQgZWxlbWVudHMsIGJpbmQgZm9jdXMgaW4gb3JkZXIgdG9cblx0ICAgICAqIHN0YXJ0IGFuZCBzdG9wIHRoZSBhbmltYXRpb25cblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdiaW5kRm9jdXNFdmVudHMnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRGb2N1c0V2ZW50cygpIHtcblx0ICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cdFxuXHQgICAgICBpZiAoIXRoaXMuaXNJbnB1dCkgcmV0dXJuO1xuXHQgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24gKGUpIHtcblx0ICAgICAgICBfdGhpczYuc3RvcCgpO1xuXHQgICAgICB9KTtcblx0ICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gKGUpIHtcblx0ICAgICAgICBpZiAoX3RoaXM2LmVsLnZhbHVlICYmIF90aGlzNi5lbC52YWx1ZS5sZW5ndGggIT09IDApIHtcblx0ICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cdCAgICAgICAgX3RoaXM2LnN0YXJ0KCk7XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogT24gaW5pdCwgaW5zZXJ0IHRoZSBjdXJzb3IgZWxlbWVudFxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2luc2VydEN1cnNvcicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gaW5zZXJ0Q3Vyc29yKCkge1xuXHQgICAgICBpZiAoIXRoaXMuc2hvd0N1cnNvcikgcmV0dXJuO1xuXHQgICAgICBpZiAodGhpcy5jdXJzb3IpIHJldHVybjtcblx0ICAgICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdCAgICAgIHRoaXMuY3Vyc29yLmNsYXNzTmFtZSA9ICd0eXBlZC1jdXJzb3InO1xuXHQgICAgICB0aGlzLmN1cnNvci5pbm5lckhUTUwgPSB0aGlzLmN1cnNvckNoYXI7XG5cdCAgICAgIHRoaXMuZWwucGFyZW50Tm9kZSAmJiB0aGlzLmVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuY3Vyc29yLCB0aGlzLmVsLm5leHRTaWJsaW5nKTtcblx0ICAgIH1cblx0ICB9XSk7XG5cdFxuXHQgIHJldHVybiBUeXBlZDtcblx0fSkoKTtcblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFR5cGVkO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0dmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblx0XG5cdHZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblx0XG5cdHZhciBfZGVmYXVsdHNKcyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdFxuXHR2YXIgX2RlZmF1bHRzSnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdHNKcyk7XG5cdFxuXHQvKipcblx0ICogSW5pdGlhbGl6ZSB0aGUgVHlwZWQgb2JqZWN0XG5cdCAqL1xuXHRcblx0dmFyIEluaXRpYWxpemVyID0gKGZ1bmN0aW9uICgpIHtcblx0ICBmdW5jdGlvbiBJbml0aWFsaXplcigpIHtcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbml0aWFsaXplcik7XG5cdCAgfVxuXHRcblx0ICBfY3JlYXRlQ2xhc3MoSW5pdGlhbGl6ZXIsIFt7XG5cdCAgICBrZXk6ICdsb2FkJyxcblx0XG5cdCAgICAvKipcblx0ICAgICAqIExvYWQgdXAgZGVmYXVsdHMgJiBvcHRpb25zIG9uIHRoZSBUeXBlZCBpbnN0YW5jZVxuXHQgICAgICogQHBhcmFtIHtUeXBlZH0gc2VsZiBpbnN0YW5jZSBvZiBUeXBlZFxuXHQgICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgb3B0aW9ucyBvYmplY3Rcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtZW50SWQgSFRNTCBlbGVtZW50IElEIF9PUl8gaW5zdGFuY2Ugb2YgSFRNTCBlbGVtZW50XG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWQoc2VsZiwgb3B0aW9ucywgZWxlbWVudElkKSB7XG5cdCAgICAgIC8vIGNob3NlbiBlbGVtZW50IHRvIG1hbmlwdWxhdGUgdGV4dFxuXHQgICAgICBpZiAodHlwZW9mIGVsZW1lbnRJZCA9PT0gJ3N0cmluZycpIHtcblx0ICAgICAgICBzZWxmLmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50SWQpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHNlbGYuZWwgPSBlbGVtZW50SWQ7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHNlbGYub3B0aW9ucyA9IF9leHRlbmRzKHt9LCBfZGVmYXVsdHNKczJbJ2RlZmF1bHQnXSwgb3B0aW9ucyk7XG5cdFxuXHQgICAgICAvLyBhdHRyaWJ1dGUgdG8gdHlwZSBpbnRvXG5cdCAgICAgIHNlbGYuaXNJbnB1dCA9IHNlbGYuZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnO1xuXHQgICAgICBzZWxmLmF0dHIgPSBzZWxmLm9wdGlvbnMuYXR0cjtcblx0ICAgICAgc2VsZi5iaW5kSW5wdXRGb2N1c0V2ZW50cyA9IHNlbGYub3B0aW9ucy5iaW5kSW5wdXRGb2N1c0V2ZW50cztcblx0XG5cdCAgICAgIC8vIHNob3cgY3Vyc29yXG5cdCAgICAgIHNlbGYuc2hvd0N1cnNvciA9IHNlbGYuaXNJbnB1dCA/IGZhbHNlIDogc2VsZi5vcHRpb25zLnNob3dDdXJzb3I7XG5cdFxuXHQgICAgICAvLyBjdXN0b20gY3Vyc29yXG5cdCAgICAgIHNlbGYuY3Vyc29yQ2hhciA9IHNlbGYub3B0aW9ucy5jdXJzb3JDaGFyO1xuXHRcblx0ICAgICAgLy8gSXMgdGhlIGN1cnNvciBibGlua2luZ1xuXHQgICAgICBzZWxmLmN1cnNvckJsaW5raW5nID0gdHJ1ZTtcblx0XG5cdCAgICAgIC8vIHRleHQgY29udGVudCBvZiBlbGVtZW50XG5cdCAgICAgIHNlbGYuZWxDb250ZW50ID0gc2VsZi5hdHRyID8gc2VsZi5lbC5nZXRBdHRyaWJ1dGUoc2VsZi5hdHRyKSA6IHNlbGYuZWwudGV4dENvbnRlbnQ7XG5cdFxuXHQgICAgICAvLyBodG1sIG9yIHBsYWluIHRleHRcblx0ICAgICAgc2VsZi5jb250ZW50VHlwZSA9IHNlbGYub3B0aW9ucy5jb250ZW50VHlwZTtcblx0XG5cdCAgICAgIC8vIHR5cGluZyBzcGVlZFxuXHQgICAgICBzZWxmLnR5cGVTcGVlZCA9IHNlbGYub3B0aW9ucy50eXBlU3BlZWQ7XG5cdFxuXHQgICAgICAvLyBhZGQgYSBkZWxheSBiZWZvcmUgdHlwaW5nIHN0YXJ0c1xuXHQgICAgICBzZWxmLnN0YXJ0RGVsYXkgPSBzZWxmLm9wdGlvbnMuc3RhcnREZWxheTtcblx0XG5cdCAgICAgIC8vIGJhY2tzcGFjaW5nIHNwZWVkXG5cdCAgICAgIHNlbGYuYmFja1NwZWVkID0gc2VsZi5vcHRpb25zLmJhY2tTcGVlZDtcblx0XG5cdCAgICAgIC8vIG9ubHkgYmFja3NwYWNlIHdoYXQgZG9lc24ndCBtYXRjaCB0aGUgcHJldmlvdXMgc3RyaW5nXG5cdCAgICAgIHNlbGYuc21hcnRCYWNrc3BhY2UgPSBzZWxmLm9wdGlvbnMuc21hcnRCYWNrc3BhY2U7XG5cdFxuXHQgICAgICAvLyBhbW91bnQgb2YgdGltZSB0byB3YWl0IGJlZm9yZSBiYWNrc3BhY2luZ1xuXHQgICAgICBzZWxmLmJhY2tEZWxheSA9IHNlbGYub3B0aW9ucy5iYWNrRGVsYXk7XG5cdFxuXHQgICAgICAvLyBGYWRlIG91dCBpbnN0ZWFkIG9mIGJhY2tzcGFjZVxuXHQgICAgICBzZWxmLmZhZGVPdXQgPSBzZWxmLm9wdGlvbnMuZmFkZU91dDtcblx0ICAgICAgc2VsZi5mYWRlT3V0Q2xhc3MgPSBzZWxmLm9wdGlvbnMuZmFkZU91dENsYXNzO1xuXHQgICAgICBzZWxmLmZhZGVPdXREZWxheSA9IHNlbGYub3B0aW9ucy5mYWRlT3V0RGVsYXk7XG5cdFxuXHQgICAgICAvLyB2YXJpYWJsZSB0byBjaGVjayB3aGV0aGVyIHR5cGluZyBpcyBjdXJyZW50bHkgcGF1c2VkXG5cdCAgICAgIHNlbGYuaXNQYXVzZWQgPSBmYWxzZTtcblx0XG5cdCAgICAgIC8vIGlucHV0IHN0cmluZ3Mgb2YgdGV4dFxuXHQgICAgICBzZWxmLnN0cmluZ3MgPSBzZWxmLm9wdGlvbnMuc3RyaW5ncy5tYXAoZnVuY3Rpb24gKHMpIHtcblx0ICAgICAgICByZXR1cm4gcy50cmltKCk7XG5cdCAgICAgIH0pO1xuXHRcblx0ICAgICAgLy8gZGl2IGNvbnRhaW5pbmcgc3RyaW5nc1xuXHQgICAgICBpZiAodHlwZW9mIHNlbGYub3B0aW9ucy5zdHJpbmdzRWxlbWVudCA9PT0gJ3N0cmluZycpIHtcblx0ICAgICAgICBzZWxmLnN0cmluZ3NFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxmLm9wdGlvbnMuc3RyaW5nc0VsZW1lbnQpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHNlbGYuc3RyaW5nc0VsZW1lbnQgPSBzZWxmLm9wdGlvbnMuc3RyaW5nc0VsZW1lbnQ7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIGlmIChzZWxmLnN0cmluZ3NFbGVtZW50KSB7XG5cdCAgICAgICAgc2VsZi5zdHJpbmdzID0gW107XG5cdCAgICAgICAgc2VsZi5zdHJpbmdzRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHQgICAgICAgIHZhciBzdHJpbmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KHNlbGYuc3RyaW5nc0VsZW1lbnQuY2hpbGRyZW4pO1xuXHQgICAgICAgIHZhciBzdHJpbmdzTGVuZ3RoID0gc3RyaW5ncy5sZW5ndGg7XG5cdFxuXHQgICAgICAgIGlmIChzdHJpbmdzTGVuZ3RoKSB7XG5cdCAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cmluZ3NMZW5ndGg7IGkgKz0gMSkge1xuXHQgICAgICAgICAgICB2YXIgc3RyaW5nRWwgPSBzdHJpbmdzW2ldO1xuXHQgICAgICAgICAgICBzZWxmLnN0cmluZ3MucHVzaChzdHJpbmdFbC5pbm5lckhUTUwudHJpbSgpKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIC8vIGNoYXJhY3RlciBudW1iZXIgcG9zaXRpb24gb2YgY3VycmVudCBzdHJpbmdcblx0ICAgICAgc2VsZi5zdHJQb3MgPSAwO1xuXHRcblx0ICAgICAgLy8gY3VycmVudCBhcnJheSBwb3NpdGlvblxuXHQgICAgICBzZWxmLmFycmF5UG9zID0gMDtcblx0XG5cdCAgICAgIC8vIGluZGV4IG9mIHN0cmluZyB0byBzdG9wIGJhY2tzcGFjaW5nIG9uXG5cdCAgICAgIHNlbGYuc3RvcE51bSA9IDA7XG5cdFxuXHQgICAgICAvLyBMb29waW5nIGxvZ2ljXG5cdCAgICAgIHNlbGYubG9vcCA9IHNlbGYub3B0aW9ucy5sb29wO1xuXHQgICAgICBzZWxmLmxvb3BDb3VudCA9IHNlbGYub3B0aW9ucy5sb29wQ291bnQ7XG5cdCAgICAgIHNlbGYuY3VyTG9vcCA9IDA7XG5cdFxuXHQgICAgICAvLyBzaHVmZmxlIHRoZSBzdHJpbmdzXG5cdCAgICAgIHNlbGYuc2h1ZmZsZSA9IHNlbGYub3B0aW9ucy5zaHVmZmxlO1xuXHQgICAgICAvLyB0aGUgb3JkZXIgb2Ygc3RyaW5nc1xuXHQgICAgICBzZWxmLnNlcXVlbmNlID0gW107XG5cdFxuXHQgICAgICBzZWxmLnBhdXNlID0ge1xuXHQgICAgICAgIHN0YXR1czogZmFsc2UsXG5cdCAgICAgICAgdHlwZXdyaXRlOiB0cnVlLFxuXHQgICAgICAgIGN1clN0cmluZzogJycsXG5cdCAgICAgICAgY3VyU3RyUG9zOiAwXG5cdCAgICAgIH07XG5cdFxuXHQgICAgICAvLyBXaGVuIHRoZSB0eXBpbmcgaXMgY29tcGxldGUgKHdoZW4gbm90IGxvb3BlZClcblx0ICAgICAgc2VsZi50eXBpbmdDb21wbGV0ZSA9IGZhbHNlO1xuXHRcblx0ICAgICAgLy8gU2V0IHRoZSBvcmRlciBpbiB3aGljaCB0aGUgc3RyaW5ncyBhcmUgdHlwZWRcblx0ICAgICAgZm9yICh2YXIgaSBpbiBzZWxmLnN0cmluZ3MpIHtcblx0ICAgICAgICBzZWxmLnNlcXVlbmNlW2ldID0gaTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgLy8gSWYgdGhlcmUgaXMgc29tZSB0ZXh0IGluIHRoZSBlbGVtZW50XG5cdCAgICAgIHNlbGYuY3VycmVudEVsQ29udGVudCA9IHRoaXMuZ2V0Q3VycmVudEVsQ29udGVudChzZWxmKTtcblx0XG5cdCAgICAgIHNlbGYuYXV0b0luc2VydENzcyA9IHNlbGYub3B0aW9ucy5hdXRvSW5zZXJ0Q3NzO1xuXHRcblx0ICAgICAgdGhpcy5hcHBlbmRBbmltYXRpb25Dc3Moc2VsZik7XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnZ2V0Q3VycmVudEVsQ29udGVudCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q3VycmVudEVsQ29udGVudChzZWxmKSB7XG5cdCAgICAgIHZhciBlbENvbnRlbnQgPSAnJztcblx0ICAgICAgaWYgKHNlbGYuYXR0cikge1xuXHQgICAgICAgIGVsQ29udGVudCA9IHNlbGYuZWwuZ2V0QXR0cmlidXRlKHNlbGYuYXR0cik7XG5cdCAgICAgIH0gZWxzZSBpZiAoc2VsZi5pc0lucHV0KSB7XG5cdCAgICAgICAgZWxDb250ZW50ID0gc2VsZi5lbC52YWx1ZTtcblx0ICAgICAgfSBlbHNlIGlmIChzZWxmLmNvbnRlbnRUeXBlID09PSAnaHRtbCcpIHtcblx0ICAgICAgICBlbENvbnRlbnQgPSBzZWxmLmVsLmlubmVySFRNTDtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBlbENvbnRlbnQgPSBzZWxmLmVsLnRleHRDb250ZW50O1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBlbENvbnRlbnQ7XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnYXBwZW5kQW5pbWF0aW9uQ3NzJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRBbmltYXRpb25Dc3Moc2VsZikge1xuXHQgICAgICBpZiAoIXNlbGYuYXV0b0luc2VydENzcykge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBpZiAoIXNlbGYuc2hvd0N1cnNvciB8fCAhc2VsZi5mYWRlT3V0KSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICB2YXIgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblx0ICAgICAgY3NzLnR5cGUgPSAndGV4dC9jc3MnO1xuXHQgICAgICB2YXIgaW5uZXJDc3MgPSAnJztcblx0ICAgICAgaWYgKHNlbGYuc2hvd0N1cnNvcikge1xuXHQgICAgICAgIGlubmVyQ3NzICs9ICdcXG4gICAgICAgIC50eXBlZC1jdXJzb3J7XFxuICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgIGFuaW1hdGlvbjogdHlwZWRqc0JsaW5rIDAuN3MgaW5maW5pdGU7XFxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb246IHR5cGVkanNCbGluayAwLjdzIGluZmluaXRlO1xcbiAgICAgICAgfVxcbiAgICAgICAgQGtleWZyYW1lcyB0eXBlZGpzQmxpbmt7XFxuICAgICAgICAgIDUwJSB7IG9wYWNpdHk6IDAuMDsgfVxcbiAgICAgICAgfVxcbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHR5cGVkanNCbGlua3tcXG4gICAgICAgICAgMCUgeyBvcGFjaXR5OiAxOyB9XFxuICAgICAgICAgIDUwJSB7IG9wYWNpdHk6IDAuMDsgfVxcbiAgICAgICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICAgICAgfVxcbiAgICAgICc7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHNlbGYuZmFkZU91dCkge1xuXHQgICAgICAgIGlubmVyQ3NzICs9ICdcXG4gICAgICAgIC50eXBlZC1mYWRlLW91dHtcXG4gICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMjVzO1xcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogMDtcXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb246IDA7XFxuICAgICAgICB9XFxuICAgICAgJztcblx0ICAgICAgfVxuXHQgICAgICBpZiAoY3NzLmxlbmd0aCA9PT0gMCkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBjc3MuaW5uZXJIVE1MID0gaW5uZXJDc3M7XG5cdCAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoY3NzKTtcblx0ICAgIH1cblx0ICB9XSk7XG5cdFxuXHQgIHJldHVybiBJbml0aWFsaXplcjtcblx0fSkoKTtcblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEluaXRpYWxpemVyO1xuXHR2YXIgaW5pdGlhbGl6ZXIgPSBuZXcgSW5pdGlhbGl6ZXIoKTtcblx0ZXhwb3J0cy5pbml0aWFsaXplciA9IGluaXRpYWxpemVyO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKipcblx0ICogRGVmYXVsdHMgJiBvcHRpb25zXG5cdCAqIEByZXR1cm5zIHtvYmplY3R9IFR5cGVkIGRlZmF1bHRzICYgb3B0aW9uc1xuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHR2YXIgZGVmYXVsdHMgPSB7XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHthcnJheX0gc3RyaW5ncyBzdHJpbmdzIHRvIGJlIHR5cGVkXG5cdCAgICogQHByb3BlcnR5IHtzdHJpbmd9IHN0cmluZ3NFbGVtZW50IElEIG9mIGVsZW1lbnQgY29udGFpbmluZyBzdHJpbmcgY2hpbGRyZW5cblx0ICAgKi9cblx0ICBzdHJpbmdzOiBbJ1RoZXNlIGFyZSB0aGUgZGVmYXVsdCB2YWx1ZXMuLi4nLCAnWW91IGtub3cgd2hhdCB5b3Ugc2hvdWxkIGRvPycsICdVc2UgeW91ciBvd24hJywgJ0hhdmUgYSBncmVhdCBkYXkhJ10sXG5cdCAgc3RyaW5nc0VsZW1lbnQ6IG51bGwsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0eXBlU3BlZWQgdHlwZSBzcGVlZCBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICB0eXBlU3BlZWQ6IDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGFydERlbGF5IHRpbWUgYmVmb3JlIHR5cGluZyBzdGFydHMgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICovXG5cdCAgc3RhcnREZWxheTogMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IGJhY2tTcGVlZCBiYWNrc3BhY2luZyBzcGVlZCBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICBiYWNrU3BlZWQ6IDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc21hcnRCYWNrc3BhY2Ugb25seSBiYWNrc3BhY2Ugd2hhdCBkb2Vzbid0IG1hdGNoIHRoZSBwcmV2aW91cyBzdHJpbmdcblx0ICAgKi9cblx0ICBzbWFydEJhY2tzcGFjZTogdHJ1ZSxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBzaHVmZmxlIHNodWZmbGUgdGhlIHN0cmluZ3Ncblx0ICAgKi9cblx0ICBzaHVmZmxlOiBmYWxzZSxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IGJhY2tEZWxheSB0aW1lIGJlZm9yZSBiYWNrc3BhY2luZyBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICBiYWNrRGVsYXk6IDcwMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBmYWRlT3V0IEZhZGUgb3V0IGluc3RlYWQgb2YgYmFja3NwYWNlXG5cdCAgICogQHByb3BlcnR5IHtzdHJpbmd9IGZhZGVPdXRDbGFzcyBjc3MgY2xhc3MgZm9yIGZhZGUgYW5pbWF0aW9uXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBmYWRlT3V0RGVsYXkgRmFkZSBvdXQgZGVsYXkgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICovXG5cdCAgZmFkZU91dDogZmFsc2UsXG5cdCAgZmFkZU91dENsYXNzOiAndHlwZWQtZmFkZS1vdXQnLFxuXHQgIGZhZGVPdXREZWxheTogNTAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGxvb3AgbG9vcCBzdHJpbmdzXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IGxvb3BDb3VudCBhbW91bnQgb2YgbG9vcHNcblx0ICAgKi9cblx0ICBsb29wOiBmYWxzZSxcblx0ICBsb29wQ291bnQ6IEluZmluaXR5LFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHNob3dDdXJzb3Igc2hvdyBjdXJzb3Jcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gY3Vyc29yQ2hhciBjaGFyYWN0ZXIgZm9yIGN1cnNvclxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYXV0b0luc2VydENzcyBpbnNlcnQgQ1NTIGZvciBjdXJzb3IgYW5kIGZhZGVPdXQgaW50byBIVE1MIDxoZWFkPlxuXHQgICAqL1xuXHQgIHNob3dDdXJzb3I6IHRydWUsXG5cdCAgY3Vyc29yQ2hhcjogJ3wnLFxuXHQgIGF1dG9JbnNlcnRDc3M6IHRydWUsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBhdHRyIGF0dHJpYnV0ZSBmb3IgdHlwaW5nXG5cdCAgICogRXg6IGlucHV0IHBsYWNlaG9sZGVyLCB2YWx1ZSwgb3IganVzdCBIVE1MIHRleHRcblx0ICAgKi9cblx0ICBhdHRyOiBudWxsLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGJpbmRJbnB1dEZvY3VzRXZlbnRzIGJpbmQgdG8gZm9jdXMgYW5kIGJsdXIgaWYgZWwgaXMgdGV4dCBpbnB1dFxuXHQgICAqL1xuXHQgIGJpbmRJbnB1dEZvY3VzRXZlbnRzOiBmYWxzZSxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtzdHJpbmd9IGNvbnRlbnRUeXBlICdodG1sJyBvciAnbnVsbCcgZm9yIHBsYWludGV4dFxuXHQgICAqL1xuXHQgIGNvbnRlbnRUeXBlOiAnaHRtbCcsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFsbCB0eXBpbmcgaXMgY29tcGxldGVcblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25Db21wbGV0ZTogZnVuY3Rpb24gb25Db21wbGV0ZShzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQmVmb3JlIGVhY2ggc3RyaW5nIGlzIHR5cGVkXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIHByZVN0cmluZ1R5cGVkOiBmdW5jdGlvbiBwcmVTdHJpbmdUeXBlZChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFmdGVyIGVhY2ggc3RyaW5nIGlzIHR5cGVkXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uU3RyaW5nVHlwZWQ6IGZ1bmN0aW9uIG9uU3RyaW5nVHlwZWQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBEdXJpbmcgbG9vcGluZywgYWZ0ZXIgbGFzdCBzdHJpbmcgaXMgdHlwZWRcblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25MYXN0U3RyaW5nQmFja3NwYWNlZDogZnVuY3Rpb24gb25MYXN0U3RyaW5nQmFja3NwYWNlZChzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogVHlwaW5nIGhhcyBiZWVuIHN0b3BwZWRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25UeXBpbmdQYXVzZWQ6IGZ1bmN0aW9uIG9uVHlwaW5nUGF1c2VkKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogVHlwaW5nIGhhcyBiZWVuIHN0YXJ0ZWQgYWZ0ZXIgYmVpbmcgc3RvcHBlZFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblR5cGluZ1Jlc3VtZWQ6IGZ1bmN0aW9uIG9uVHlwaW5nUmVzdW1lZChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFmdGVyIHJlc2V0XG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uUmVzZXQ6IGZ1bmN0aW9uIG9uUmVzZXQoc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFmdGVyIHN0b3Bcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25TdG9wOiBmdW5jdGlvbiBvblN0b3AoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciBzdGFydFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblN0YXJ0OiBmdW5jdGlvbiBvblN0YXJ0KGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgZGVzdHJveVxuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvbkRlc3Ryb3k6IGZ1bmN0aW9uIG9uRGVzdHJveShzZWxmKSB7fVxuXHR9O1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZGVmYXVsdHM7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcblx0LyoqXG5cdCAqIFRPRE86IFRoZXNlIG1ldGhvZHMgY2FuIHByb2JhYmx5IGJlIGNvbWJpbmVkIHNvbWVob3dcblx0ICogUGFyc2UgSFRNTCB0YWdzICYgSFRNTCBDaGFyYWN0ZXJzXG5cdCAqL1xuXHRcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0dmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXHRcblx0dmFyIEhUTUxQYXJzZXIgPSAoZnVuY3Rpb24gKCkge1xuXHQgIGZ1bmN0aW9uIEhUTUxQYXJzZXIoKSB7XG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTFBhcnNlcik7XG5cdCAgfVxuXHRcblx0ICBfY3JlYXRlQ2xhc3MoSFRNTFBhcnNlciwgW3tcblx0ICAgIGtleTogJ3R5cGVIdG1sQ2hhcnMnLFxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogVHlwZSBIVE1MIHRhZ3MgJiBIVE1MIENoYXJhY3RlcnNcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgQ3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgUG9zaXRpb24gaW4gY3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGYgaW5zdGFuY2Ugb2YgVHlwZWRcblx0ICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IGEgbmV3IHN0cmluZyBwb3NpdGlvblxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHRcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiB0eXBlSHRtbENoYXJzKGN1clN0cmluZywgY3VyU3RyUG9zLCBzZWxmKSB7XG5cdCAgICAgIGlmIChzZWxmLmNvbnRlbnRUeXBlICE9PSAnaHRtbCcpIHJldHVybiBjdXJTdHJQb3M7XG5cdCAgICAgIHZhciBjdXJDaGFyID0gY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MpLmNoYXJBdCgwKTtcblx0ICAgICAgaWYgKGN1ckNoYXIgPT09ICc8JyB8fCBjdXJDaGFyID09PSAnJicpIHtcblx0ICAgICAgICB2YXIgZW5kVGFnID0gJyc7XG5cdCAgICAgICAgaWYgKGN1ckNoYXIgPT09ICc8Jykge1xuXHQgICAgICAgICAgZW5kVGFnID0gJz4nO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBlbmRUYWcgPSAnOyc7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHdoaWxlIChjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcyArIDEpLmNoYXJBdCgwKSAhPT0gZW5kVGFnKSB7XG5cdCAgICAgICAgICBjdXJTdHJQb3MrKztcblx0ICAgICAgICAgIGlmIChjdXJTdHJQb3MgKyAxID4gY3VyU3RyaW5nLmxlbmd0aCkge1xuXHQgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgY3VyU3RyUG9zKys7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIGN1clN0clBvcztcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEJhY2tzcGFjZSBIVE1MIHRhZ3MgYW5kIEhUTUwgQ2hhcmFjdGVyc1xuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyBDdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyBQb3NpdGlvbiBpbiBjdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtUeXBlZH0gc2VsZiBpbnN0YW5jZSBvZiBUeXBlZFxuXHQgICAgICogQHJldHVybnMge251bWJlcn0gYSBuZXcgc3RyaW5nIHBvc2l0aW9uXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnYmFja1NwYWNlSHRtbENoYXJzJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBiYWNrU3BhY2VIdG1sQ2hhcnMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIHNlbGYpIHtcblx0ICAgICAgaWYgKHNlbGYuY29udGVudFR5cGUgIT09ICdodG1sJykgcmV0dXJuIGN1clN0clBvcztcblx0ICAgICAgdmFyIGN1ckNoYXIgPSBjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcykuY2hhckF0KDApO1xuXHQgICAgICBpZiAoY3VyQ2hhciA9PT0gJz4nIHx8IGN1ckNoYXIgPT09ICc7Jykge1xuXHQgICAgICAgIHZhciBlbmRUYWcgPSAnJztcblx0ICAgICAgICBpZiAoY3VyQ2hhciA9PT0gJz4nKSB7XG5cdCAgICAgICAgICBlbmRUYWcgPSAnPCc7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIGVuZFRhZyA9ICcmJztcblx0ICAgICAgICB9XG5cdCAgICAgICAgd2hpbGUgKGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zIC0gMSkuY2hhckF0KDApICE9PSBlbmRUYWcpIHtcblx0ICAgICAgICAgIGN1clN0clBvcy0tO1xuXHQgICAgICAgICAgaWYgKGN1clN0clBvcyA8IDApIHtcblx0ICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGN1clN0clBvcy0tO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBjdXJTdHJQb3M7XG5cdCAgICB9XG5cdCAgfV0pO1xuXHRcblx0ICByZXR1cm4gSFRNTFBhcnNlcjtcblx0fSkoKTtcblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEhUTUxQYXJzZXI7XG5cdHZhciBodG1sUGFyc2VyID0gbmV3IEhUTUxQYXJzZXIoKTtcblx0ZXhwb3J0cy5odG1sUGFyc2VyID0gaHRtbFBhcnNlcjtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pXG59KTtcbjsiXX0=
