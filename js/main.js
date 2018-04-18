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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
  new _nav2.default();
  new _homepage2.default();
  new _about2.default();
  new _imgHover2.default();
  setTimeout(function () {
    $('.before-load').removeClass('before-load');
    $('.before-load-left').removeClass('before-load-left');
    $('.before-load-right').removeClass('before-load-right');
  }, 200);

  var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
  if (isSafari) $('body').addClass('safari');
});

},{"./modules/about":2,"./modules/homepage":3,"./modules/img-hover":4,"./modules/nav":5,"./modules/scroll-magic":6}],2:[function(require,module,exports){
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

},{"typed.js":8}],3:[function(require,module,exports){
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

},{"scrollmagic":7}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfc2NyaXB0cy9tYWluLmpzIiwiX3NjcmlwdHMvbW9kdWxlcy9hYm91dC5qcyIsIl9zY3JpcHRzL21vZHVsZXMvaG9tZXBhZ2UuanMiLCJfc2NyaXB0cy9tb2R1bGVzL2ltZy1ob3Zlci5qcyIsIl9zY3JpcHRzL21vZHVsZXMvbmF2LmpzIiwiX3NjcmlwdHMvbW9kdWxlcy9zY3JvbGwtbWFnaWMuanMiLCJub2RlX21vZHVsZXMvc2Nyb2xsbWFnaWMvc2Nyb2xsbWFnaWMvdW5jb21wcmVzc2VkL1Njcm9sbE1hZ2ljLmpzIiwibm9kZV9tb2R1bGVzL3R5cGVkLmpzL2xpYi90eXBlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsRUFBRSxRQUFGLEVBQVksS0FBWixDQUFrQixZQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBVyxZQUFVO0FBQ25CLE1BQUUsY0FBRixFQUFrQixXQUFsQixDQUE4QixhQUE5QjtBQUNBLE1BQUUsbUJBQUYsRUFBdUIsV0FBdkIsQ0FBbUMsa0JBQW5DO0FBQ0EsTUFBRSxvQkFBRixFQUF3QixXQUF4QixDQUFvQyxtQkFBcEM7QUFDRCxHQUpELEVBSUcsR0FKSDs7QUFNQSxNQUFJLFdBQVcsU0FBUyxJQUFULENBQWMsVUFBVSxTQUF4QixLQUFzQyxpQkFBaUIsSUFBakIsQ0FBc0IsVUFBVSxNQUFoQyxDQUFyRDtBQUNBLE1BQUksUUFBSixFQUFjLEVBQUUsTUFBRixFQUFVLFFBQVYsQ0FBbUIsUUFBbkI7QUFDZixDQWJEOzs7Ozs7Ozs7OztBQ1BBOzs7Ozs7OztJQUVNLEs7QUFDSixtQkFBYztBQUFBOztBQUNaLFNBQUssS0FBTCxHQUFhLEVBQUUsTUFBRixDQUFiO0FBQ0EsUUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLE9BQXBCLENBQUosRUFBa0M7QUFDaEMsV0FBSyxVQUFMO0FBQ0Q7QUFDRjs7OztpQ0FFWTtBQUNYLFVBQUksUUFBUSxJQUFaO0FBQ0EsVUFBSSxhQUFhLEVBQUUsY0FBRixDQUFqQjtBQUNBLFVBQUksYUFBYSxFQUFFLG9CQUFGLENBQWpCO0FBQ0EsVUFBSSxhQUFhLENBQ2YsbUZBRGUsRUFFZixpREFGZSxFQUdmLHdDQUhlLEVBSWYsc0VBSmUsRUFLZixtREFMZSxFQU1mLHdDQU5lLEVBT2YsNkZBUGUsRUFRZixrRUFSZSxFQVNmLGdFQVRlLEVBVWYsK0RBVmUsQ0FBakI7QUFZQSxVQUFJLFVBQVUsQ0FBZDs7QUFFQSxVQUFJLFFBQVEsb0JBQVUsb0JBQVYsRUFBZ0M7QUFDMUMsaUJBQVMsQ0FBQyxXQUFXLENBQVgsQ0FBRCxDQURpQztBQUUxQyxtQkFBVztBQUYrQixPQUFoQyxDQUFaOztBQUtBLGlCQUFXLEVBQVgsQ0FBYyxPQUFkLEVBQXVCLFlBQVc7QUFDaEMsY0FBTSxPQUFOO0FBQ0EsWUFBSSxVQUFVLFdBQVcsTUFBWCxHQUFvQixDQUFsQyxFQUFxQztBQUNuQyxxQkFBVyxDQUFYO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsb0JBQVUsQ0FBVjtBQUNEO0FBQ0QsZ0JBQVEsb0JBQVUsb0JBQVYsRUFBZ0M7QUFDdEMsbUJBQVMsQ0FBQyxXQUFXLE9BQVgsQ0FBRCxDQUQ2QjtBQUV0QyxxQkFBVztBQUYyQixTQUFoQyxDQUFSO0FBSUQsT0FYRDtBQVlEOzs7aUNBRVksRyxFQUFLO0FBQ2hCLGFBQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWdCLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBM0IsQ0FBUDtBQUNEOzs7Ozs7a0JBS1ksSzs7Ozs7Ozs7Ozs7OztJQ3REVCxRO0FBQ0osc0JBQWM7QUFBQTs7QUFDWixTQUFLLEtBQUwsR0FBYSxFQUFFLE1BQUYsQ0FBYjtBQUNBLFFBQUksS0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixNQUFwQixDQUFKLEVBQWlDO0FBQy9CLFdBQUssY0FBTDtBQUNBLFdBQUssYUFBTDtBQUNEO0FBQ0Q7Ozs7b0NBRWM7QUFDZCxVQUFJLGlCQUFpQixFQUFFLGtCQUFGLENBQXJCO0FBQ0EsVUFBSSxZQUFZLEVBQUUsaUJBQUYsQ0FBaEI7QUFDQSxVQUFJLFVBQVUsRUFBRSxlQUFGLENBQWQ7QUFDQSxVQUFJLGFBQWEsRUFBRSxrQkFBRixDQUFqQjtBQUNBLFVBQUksV0FBVyxFQUFFLGdCQUFGLENBQWY7QUFDQSxVQUFJLGlCQUFpQixFQUFFLHNCQUFGLENBQXJCO0FBQ0EsVUFBSSxjQUFjLEVBQUUsbUJBQUYsQ0FBbEI7QUFDQSxVQUFJLFlBQVksRUFBRSxhQUFGLENBQWhCOztBQUVBLHFCQUFlLEtBQWYsQ0FDRSxZQUFZO0FBQ1Ysa0JBQVUsR0FBVixDQUFjLFNBQWQsRUFBeUIsR0FBekI7QUFDRCxPQUhILEVBSUUsWUFBWTtBQUNWLGtCQUFVLEdBQVYsQ0FBYyxrQkFBZCxFQUFrQyxNQUFsQztBQUNBLGtCQUFVLEdBQVYsQ0FBYyxTQUFkLEVBQXlCLEdBQXpCO0FBQ0QsT0FQSDs7QUFVQSxlQUFTLEtBQVQsQ0FBZSxZQUFZO0FBQ3pCLGtCQUFVLEdBQVYsQ0FBYyxrQkFBZCxFQUFrQyx3Q0FBbEM7QUFDQSxrQkFBVSxHQUFWLENBQWMsaUJBQWQsRUFBaUMsT0FBakM7QUFDRCxPQUhEOztBQUtBLGNBQVEsS0FBUixDQUFjLFlBQVk7QUFDeEIsa0JBQVUsR0FBVixDQUFjLGtCQUFkLEVBQWtDLHNDQUFsQztBQUNBLGtCQUFVLEdBQVYsQ0FBYyxpQkFBZCxFQUFpQyxPQUFqQztBQUNELE9BSEQ7O0FBS0EsaUJBQVcsS0FBWCxDQUFpQixZQUFZO0FBQzNCLGtCQUFVLEdBQVYsQ0FBYyxrQkFBZCxFQUFrQyx5Q0FBbEM7QUFDQSxrQkFBVSxHQUFWLENBQWMsaUJBQWQsRUFBaUMsT0FBakM7QUFDRCxPQUhEOztBQUtBLGdCQUFVLEtBQVYsQ0FBZ0IsWUFBWTtBQUMxQixrQkFBVSxHQUFWLENBQWMsa0JBQWQsRUFBa0Msd0NBQWxDO0FBQ0Esa0JBQVUsR0FBVixDQUFjLGlCQUFkLEVBQWlDLE9BQWpDO0FBQ0QsT0FIRDs7QUFLQSxxQkFBZSxLQUFmLENBQXFCLFlBQVk7QUFDL0Isa0JBQVUsR0FBVixDQUFjLGtCQUFkLEVBQWtDLDZDQUFsQztBQUNBLGtCQUFVLEdBQVYsQ0FBYyxpQkFBZCxFQUFpQyxPQUFqQztBQUNELE9BSEQ7O0FBS0Esa0JBQVksS0FBWixDQUFrQixZQUFZO0FBQzVCLGtCQUFVLEdBQVYsQ0FBYyxrQkFBZCxFQUFrQywyQ0FBbEM7QUFDQSxrQkFBVSxHQUFWLENBQWMsaUJBQWQsRUFBaUMsT0FBakM7QUFDRCxPQUhEO0FBS0Q7OztxQ0FFZ0I7QUFDZixVQUFJLGlCQUFpQixFQUFFLGtCQUFGLENBQXJCO0FBQ0EsVUFBSSxZQUFZLEVBQUUsYUFBRixDQUFoQjtBQUNBLFVBQUksYUFBYSxFQUFFLHVCQUFGLENBQWpCO0FBQ0EsVUFBSSxhQUFhLEVBQUUscUJBQUYsQ0FBakI7QUFDQSxVQUFJLHFCQUFxQixFQUFFLG9CQUFGLENBQXpCO0FBQ0EsVUFBSSxhQUFhLEVBQUUsY0FBRixDQUFqQjs7QUFFQSxxQkFBZSxLQUFmLENBQ0UsWUFBWTtBQUNWLGtCQUFVLFFBQVYsQ0FBbUIsZUFBbkI7QUFDQSxVQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLFNBQWpCLEVBQTRCLFFBQTVCLENBQXFDLGlCQUFyQztBQUNBLFVBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsVUFBakIsRUFBNkIsUUFBN0IsQ0FBc0MsU0FBdEM7QUFDQSxtQkFBVyxRQUFYLENBQW9CLGVBQXBCO0FBQ0EsMkJBQW1CLFFBQW5CLENBQTRCLFNBQTVCO0FBQ0EsbUJBQVcsR0FBWCxDQUFlLFNBQWYsRUFBMEIsR0FBMUI7QUFDRCxPQVJILEVBU0UsWUFBWTtBQUNWLGtCQUFVLFdBQVYsQ0FBc0IsZUFBdEI7QUFDQSxVQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLFNBQWpCLEVBQTRCLFdBQTVCLENBQXdDLGlCQUF4QztBQUNBLG1CQUFXLFdBQVgsQ0FBdUIsU0FBdkI7QUFDQSxtQkFBVyxXQUFYLENBQXVCLGVBQXZCO0FBQ0EsMkJBQW1CLFdBQW5CLENBQStCLFNBQS9CO0FBQ0EsbUJBQVcsR0FBWCxDQUFlLFNBQWYsRUFBMEIsR0FBMUI7QUFDRCxPQWhCSDtBQWtCRDs7Ozs7O2tCQUdZLFE7Ozs7Ozs7Ozs7Ozs7SUMxRlQsVTtBQUNKLHdCQUFjO0FBQUE7O0FBQ1osU0FBSyxZQUFMO0FBQ0Q7Ozs7bUNBRWM7QUFDYixVQUFJLFNBQVMsRUFBRSxnQkFBRixDQUFiO0FBQ0EsVUFBSSxlQUFlLEVBQUUsZUFBRixDQUFuQjs7QUFFQSxhQUFPLFNBQVAsQ0FBa0IsVUFBUyxHQUFULEVBQWM7QUFDOUIsWUFBSSxPQUFPLElBQUksS0FBZixDQUQ4QixDQUNUO0FBQ3JCLFlBQUksUUFBUSxFQUFFLFNBQVMsSUFBWCxFQUFpQixLQUFqQixFQUFaO0FBQ0EsWUFBSSxRQUFRLE9BQU8sS0FBbkI7O0FBR0EsVUFBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixZQUFqQixFQUErQixHQUEvQixDQUFtQyx1QkFBbkMsRUFBNkQsWUFBVztBQUN0RSxpQkFBTyxFQUFHLFFBQVEsS0FBWCxDQUFQO0FBQ0QsU0FGRDtBQUdELE9BVEQ7QUFVRDs7Ozs7O2tCQUlZLFU7Ozs7Ozs7Ozs7Ozs7SUN2QlQsRztBQUNKLGlCQUFjO0FBQUE7O0FBQ1osU0FBSyxLQUFMLEdBQWEsRUFBRSxNQUFGLENBQWI7QUFDQSxTQUFLLFVBQUwsR0FBa0IsRUFBRSx5QkFBRixDQUFsQjtBQUNBLFNBQUssYUFBTCxHQUFxQixFQUFFLHNCQUFGLENBQXJCOztBQUVBLFNBQUssSUFBTDtBQUNEOzs7OzJCQUVNO0FBQ0wsV0FBSyxhQUFMLENBQW1CLEtBQW5CLENBQXlCLEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsSUFBcEIsQ0FBekI7QUFDQSxXQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsQ0FBc0IsS0FBSyxTQUFMLENBQWUsSUFBZixDQUFvQixJQUFwQixDQUF0Qjs7QUFFQSxXQUFLLGNBQUw7QUFDRDs7O2dDQUVXO0FBQ1YsV0FBSyxLQUFMLENBQVcsV0FBWCxDQUF1QixnQkFBdkI7QUFDRDs7O3FDQUVnQjtBQUNmLFVBQUksaUJBQWlCLEVBQUUsdUJBQUYsQ0FBckI7QUFDQSxVQUFJLFFBQVEsRUFBRSxPQUFGLENBQVo7QUFDQSxVQUFJLGFBQWEsRUFBRSxPQUFGLEVBQVcsV0FBWCxFQUFqQjtBQUNBLFVBQUksaUJBQWlCLEVBQUUsZUFBRixFQUFtQixXQUFuQixFQUFyQjtBQUNBLFVBQUksWUFBWSxPQUFPLE9BQXZCOztBQUVBLFVBQU0scUJBQXFCLEVBQUUsZUFBRixDQUEzQjs7QUFFQSxVQUFJLE1BQU0sUUFBTixDQUFlLE1BQWYsQ0FBSixFQUE0QjtBQUMxQix1QkFBZSxRQUFmLENBQXdCLGVBQXhCO0FBQ0Q7O0FBRUQsUUFBRSxRQUFGLEVBQVksTUFBWixDQUFtQixZQUFXO0FBQzVCLFlBQUksWUFBWSxPQUFPLE9BQXZCOztBQUVBLGFBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxtQkFBbUIsTUFBdkMsRUFBK0MsR0FBL0MsRUFBb0Q7QUFDbEQsY0FBSSxrQkFBa0IsbUJBQW1CLEVBQW5CLENBQXNCLENBQXRCLENBQXRCO0FBQ0EsY0FBSSxTQUFTLGdCQUFnQixNQUFoQixHQUF5QixHQUF0QztBQUNBLGNBQUksZ0JBQWdCLGdCQUFnQixXQUFoQixFQUFwQjtBQUNBLGNBQUksWUFBYSxTQUFTLEVBQXRCLElBQTZCLFlBQVksU0FBUyxhQUF0RCxFQUFxRTtBQUNuRSxnQkFBSSxnQkFBZ0IsUUFBaEIsQ0FBeUIsTUFBekIsQ0FBSixFQUFzQztBQUNwQyw2QkFBZSxRQUFmLENBQXdCLGVBQXhCO0FBQ0QsYUFGRCxNQUVPO0FBQ0wsNkJBQWUsV0FBZixDQUEyQixlQUEzQjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLE9BZkQ7QUFnQkQ7Ozs7OztrQkFHWSxHOzs7Ozs7Ozs7OztBQ3BEZjs7Ozs7Ozs7SUFFTSxlO0FBQ0osNkJBQWM7QUFBQTs7QUFDWixTQUFLLEtBQUwsR0FBYSxFQUFFLE1BQUYsQ0FBYjtBQUNBLFNBQUssVUFBTCxHQUFrQixJQUFJLHNCQUFZLFVBQWhCLEVBQWxCLENBRlksQ0FFb0M7O0FBRWhELFFBQUksS0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixNQUFwQixDQUFKLEVBQWlDO0FBQy9CLFdBQUssVUFBTDtBQUNEO0FBQ0Y7Ozs7aUNBRVk7QUFDWCxVQUFJLGlCQUFpQixFQUFFLHlCQUFGLENBQXJCO0FBQ0EsVUFBSSxzQkFBWSxLQUFoQixDQUFzQjtBQUNwQix3QkFBZ0IsY0FESTtBQUVwQixrQkFBVSxlQUFlLE1BQWY7QUFGVSxPQUF0QixFQUlDLE1BSkQsQ0FJUSxhQUpSLEVBSXVCO0FBSnZCLE9BS0EsS0FMQSxDQUtNLFVBTE4sRUFGVyxDQU9RO0FBQ3BCOzs7Ozs7a0JBS1ksZTs7O0FDekJmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiaW1wb3J0IE5hdiBmcm9tICcuL21vZHVsZXMvbmF2JztcbmltcG9ydCBIb21lcGFnZSBmcm9tICcuL21vZHVsZXMvaG9tZXBhZ2UnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4vbW9kdWxlcy9hYm91dCc7XG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gJy4vbW9kdWxlcy9zY3JvbGwtbWFnaWMnXG5pbXBvcnQgSW1hZ2VIb3ZlciBmcm9tICcuL21vZHVsZXMvaW1nLWhvdmVyJ1xuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICBuZXcgTmF2KCk7XG4gIG5ldyBIb21lcGFnZSgpO1xuICBuZXcgQWJvdXQoKTtcbiAgbmV3IEltYWdlSG92ZXIoKTtcbiAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICQoJy5iZWZvcmUtbG9hZCcpLnJlbW92ZUNsYXNzKCdiZWZvcmUtbG9hZCcpO1xuICAgICQoJy5iZWZvcmUtbG9hZC1sZWZ0JykucmVtb3ZlQ2xhc3MoJ2JlZm9yZS1sb2FkLWxlZnQnKTtcbiAgICAkKCcuYmVmb3JlLWxvYWQtcmlnaHQnKS5yZW1vdmVDbGFzcygnYmVmb3JlLWxvYWQtcmlnaHQnKTtcbiAgfSwgMjAwKTtcblxuICB2YXIgaXNTYWZhcmkgPSAvU2FmYXJpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIC9BcHBsZSBDb21wdXRlci8udGVzdChuYXZpZ2F0b3IudmVuZG9yKTtcbiAgaWYgKGlzU2FmYXJpKSAkKCdib2R5JykuYWRkQ2xhc3MoJ3NhZmFyaScpO1xufSk7XG4iLCJpbXBvcnQgVHlwZWQgZnJvbSAndHlwZWQuanMnO1xuXG5jbGFzcyBBYm91dCB7XG7CoMKgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcbiAgICBpZiAodGhpcy4kYm9keS5oYXNDbGFzcygnYWJvdXQnKSkge1xuICAgICAgdGhpcy5jaGFuZ2VGYWN0KCk7XG4gICAgfVxuwqDCoH1cblxuICBjaGFuZ2VGYWN0KCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0ICRhYm91dFRleHQgPSAkKCcuYWJvdXRfX3RleHQnKTtcbiAgICBsZXQgJGFib3V0RmFjdCA9ICQoJy5hYm91dF9fdGV4dC0tZmFjdCcpO1xuICAgIGxldCBhYm91dEZhY3RzID0gW1xuICAgICAgJ2FuIGludGVyYWN0aW9uIGRlc2lnbmVyIHdobyBsb3ZlcyB0aGUgcHJvYmxlbSBzb2x2aW5nIHRoYXQgZ29lcyBvbiBiZWhpbmQgc2NyZWVucycsXG4gICAgICAnYSBsb3ZlciBvZiBhbGwgdGhpbmdzIHJlbGF0ZWQgdG8gZGVzaWduIHByb2Nlc3MnLFxuICAgICAgJ2EgZGVzaWduZXIgd2l0aCBzb21lIGRldmVsb3BtZW50IGNob3BzJyxcbiAgICAgICdhbmQgaSBsb3ZlIHRvIGl0ZXJhdGUsIHJldHJvc3BlY3QsIGFuZCBpbXByb3ZlIGV2ZXJ5IHN0ZXAgb2YgdGhlIHdheScsXG4gICAgICAnYSBzZW5pb3IgZGVzaWduIHN0dWRlbnQgQCBub3J0aGVhc3Rlcm4gdW5pdmVyc2l0eScsXG4gICAgICAnc29tZW9uZSB3aG8gdGFncyBwcGwgaW4gYSBsb3Qgb2YgbWVtZXMnLFxuICAgICAgJ2FuZCBpJmFwb3M7dmUgcmVjZW50bHkgYmVlbiBvYnNlc3NlZCB3aXRoIG1pY3JvLWludGVyYWN0aW9ucywgYW5pbWF0aW9ucywgYW5kIGhvdmVyIGVmZmVjdHMnLFxuICAgICAgJ2EgZGVzaWduZXIgd2hvIHNvbHZlcyBwcm9ibGVtcyB3aXRoLCBsaWtlLCBhIGxvdCBvZiBzdGlja3kgbm90ZXMnLFxuICAgICAgJ2FuZCBpIHVzZSBhIGxvdCBvZiAgZXhjbGFtYXRpb24gcG9pbnRzIGFuZCBjdXN0b20gc2xhY2sgZW1vamlzJyxcbiAgICAgICdhbmQgaSBwcmVmZXIgaWxsdXN0cmF0aW5nIGluIHNrZXRjaCBvdmVyIGFpICN1bnBvcHVsYXJvcGluaW9uJ1xuICAgIF07XG4gICAgbGV0IGZhY3ROdW0gPSAwO1xuXG4gICAgbGV0IHR5cGVkID0gbmV3IFR5cGVkKCcuYWJvdXRfX3RleHQtLWZhY3QnLCB7XG4gICAgICBzdHJpbmdzOiBbYWJvdXRGYWN0c1swXV0sXG4gICAgICB0eXBlU3BlZWQ6IDIwLFxuICAgIH0pO1xuXG4gICAgJGFib3V0VGV4dC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIHR5cGVkLmRlc3Ryb3koKTtcbiAgICAgIGlmIChmYWN0TnVtIDwgYWJvdXRGYWN0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGZhY3ROdW0gKz0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY3ROdW0gPSAwO1xuICAgICAgfVxuICAgICAgdHlwZWQgPSBuZXcgVHlwZWQoJy5hYm91dF9fdGV4dC0tZmFjdCcsIHtcbiAgICAgICAgc3RyaW5nczogW2Fib3V0RmFjdHNbZmFjdE51bV1dLFxuICAgICAgICB0eXBlU3BlZWQ6IDIwLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRSYW5kb21JbnQobWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IobWF4KSk7XG4gIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xuIiwiY2xhc3MgSG9tZXBhZ2Uge1xuwqDCoGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgaWYgKHRoaXMuJGJvZHkuaGFzQ2xhc3MoJ2hvbWUnKSkge1xuICAgICAgdGhpcy53b3JrTGlua3NDb2xvcigpO1xuICAgICAgdGhpcy5iYWNrZ3JvdW5kSW1nKCk7XG4gICAgfVxuICDCoH1cblxuICBiYWNrZ3JvdW5kSW1nKCkge1xuICAgIGxldCAkbGlua0NvbnRhaW5lciA9ICQoJy5saW5rLS1jb250YWluZXInKTtcbiAgICBsZXQgJHRyYWlsVGFnID0gJCgnLmxpbmstLXRyYWlsdGFnJyk7XG4gICAgbGV0ICR1bnNlbnQgPSAkKCcubGluay0tdW5zZW50Jyk7XG4gICAgbGV0ICR2aWRlb2dhbWUgPSAkKCcubGluay0tdmlkZW9nYW1lJyk7XG4gICAgbGV0ICR6ZWFsZXJ5ID0gJCgnLmxpbmstLXplYWxlcnknKTtcbiAgICBsZXQgJGlsbHVzdHJhdGlvbnMgPSAkKCcubGluay0taWxsdXN0cmF0aW9ucycpO1xuICAgIGxldCAkbGFjZW50cmFsZSA9ICQoJy5saW5rLS1sYWNlbnRyYWxlJyk7XG4gICAgbGV0ICRob3ZlckltZyA9ICQoJy5ob3Zlcl9faW1nJyk7XG5cbiAgICAkbGlua0NvbnRhaW5lci5ob3ZlcihcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGhvdmVySW1nLmNzcyhcIm9wYWNpdHlcIiwgXCIxXCIpO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGhvdmVySW1nLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIiwgXCJub25lXCIpO1xuICAgICAgICAkaG92ZXJJbWcuY3NzKFwib3BhY2l0eVwiLCBcIjBcIik7XG4gICAgICB9XG4gICAgKVxuXG4gICAgJHplYWxlcnkuaG92ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgJGhvdmVySW1nLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIiwgXCJ1cmwoL2ltZy9ob21lL3dvcmtfX2xpbmstLXplYWxlcnkucG5nKVwiKTtcbiAgICAgICRob3ZlckltZy5jc3MoXCJiYWNrZ3JvdW5kLXNpemVcIiwgXCJjb3ZlclwiKTtcbiAgICB9KTtcblxuICAgICR1bnNlbnQuaG92ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgJGhvdmVySW1nLmNzcyhcImJhY2tncm91bmQtaW1hZ2VcIiwgXCJ1cmwoL2ltZy91bnNlbnQvaGVyby1iYWNrZ3JvdW5kLnBuZylcIik7XG4gICAgICAkaG92ZXJJbWcuY3NzKFwiYmFja2dyb3VuZC1zaXplXCIsIFwiY292ZXJcIik7XG4gICAgfSk7XG5cbiAgICAkdmlkZW9nYW1lLmhvdmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICRob3ZlckltZy5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsIFwidXJsKC9pbWcvdmlkZW9nYW1lL2hlcm8tYmFja2dyb3VuZC5wbmcpXCIpO1xuICAgICAgJGhvdmVySW1nLmNzcyhcImJhY2tncm91bmQtc2l6ZVwiLCBcImNvdmVyXCIpO1xuICAgIH0pO1xuXG4gICAgJHRyYWlsVGFnLmhvdmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICRob3ZlckltZy5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsIFwidXJsKC9pbWcvdHJhaWx0YWcvaGVyby1iYWNrZ3JvdW5kLnBuZylcIik7XG4gICAgICAkaG92ZXJJbWcuY3NzKFwiYmFja2dyb3VuZC1zaXplXCIsIFwiY292ZXJcIik7XG4gICAgfSk7XG5cbiAgICAkaWxsdXN0cmF0aW9ucy5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAkaG92ZXJJbWcuY3NzKFwiYmFja2dyb3VuZC1pbWFnZVwiLCBcInVybCgvaW1nL2lsbHVzdHJhdGlvbnMvaGVyby1iYWNrZ3JvdW5kLnBuZylcIik7XG4gICAgICAkaG92ZXJJbWcuY3NzKFwiYmFja2dyb3VuZC1zaXplXCIsIFwiY292ZXJcIik7XG4gICAgfSk7XG5cbiAgICAkbGFjZW50cmFsZS5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAkaG92ZXJJbWcuY3NzKFwiYmFja2dyb3VuZC1pbWFnZVwiLCBcInVybCgvaW1nL2hvbWUvd29ya19fbGluay0tbGFjZW50cmFsZS5wbmcpXCIpO1xuICAgICAgJGhvdmVySW1nLmNzcyhcImJhY2tncm91bmQtc2l6ZVwiLCBcImNvdmVyXCIpO1xuICAgIH0pO1xuXG4gIH1cblxuwqDCoHdvcmtMaW5rc0NvbG9yKCkge1xuwqDCoMKgwqB2YXIgJGxpbmtDb250YWluZXIgPSAkKFwiLmxpbmstLWNvbnRhaW5lclwiKTtcbsKgwqDCoMKgdmFyICR3b3JrTGluayA9ICQoXCIud29ya19fbGlua1wiKTtcbsKgwqDCoMKgdmFyICRoYW1idXJnZXIgPSAkKFwiLm5hdl9faGFtYnVyZ2VyLS1pY29uXCIpO1xuwqDCoMKgwqB2YXIgJGhvdmVyRGVzYyA9ICQoXCIuaG92ZXJfX2Rlc2NyaXB0aW9uXCIpO1xuICAgIHZhciAkZm9vdGVyX19jb250YWluZXIgPSAkKFwiLmZvb3Rlcl9fY29udGFpbmVyXCIpO1xuICAgIGxldCAkaGVyb0ludHJvID0gJChcIi5oZXJvX19pbnRyb1wiKVxuXG4gICAgJGxpbmtDb250YWluZXIuaG92ZXIoXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICR3b3JrTGluay5hZGRDbGFzcygnanMtdGV4dC13aGl0ZScpO1xuICDCoMKgwqDCoMKgwqAkKHRoaXMpLmNoaWxkcmVuKCR3b3JrTGluaykuYWRkQ2xhc3MoJ2pzLXRleHQtb3V0bGluZScpO1xuICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCRob3ZlckRlc2MpLmFkZENsYXNzKCdqcy1zaG93Jyk7XG4gICAgICAgICRoYW1idXJnZXIuYWRkQ2xhc3MoJ2pzLWljb24td2hpdGUnKTtcbiAgICAgICAgJGZvb3Rlcl9fY29udGFpbmVyLmFkZENsYXNzKCdqcy1oaWRlJyk7XG4gICAgICAgICRoZXJvSW50cm8uY3NzKCdvcGFjaXR5JywgJzAnKTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICR3b3JrTGluay5yZW1vdmVDbGFzcygnanMtdGV4dC13aGl0ZScpO1xuICDCoMKgwqDCoMKgwqAkKHRoaXMpLmNoaWxkcmVuKCR3b3JrTGluaykucmVtb3ZlQ2xhc3MoJ2pzLXRleHQtb3V0bGluZScpO1xuICAgICAgICAkaG92ZXJEZXNjLnJlbW92ZUNsYXNzKCdqcy1zaG93Jyk7XG4gICAgICAgICRoYW1idXJnZXIucmVtb3ZlQ2xhc3MoJ2pzLWljb24td2hpdGUnKTtcbiAgICAgICAgJGZvb3Rlcl9fY29udGFpbmVyLnJlbW92ZUNsYXNzKCdqcy1oaWRlJyk7XG4gICAgICAgICRoZXJvSW50cm8uY3NzKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgIH1cbiAgICApXG7CoMKgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTtcbiIsImNsYXNzIEltYWdlSG92ZXIge1xuwqDCoGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2Nyb2xsSW1hZ2VYKCk7XG7CoMKgfVxuXG4gIHNjcm9sbEltYWdlWCgpIHtcbiAgICBsZXQgJGltYWdlID0gJCgnLmhvdmVyLWltYWdlLXgnKTtcbiAgICBsZXQgJHBhZ2VTZWN0aW9uID0gJCgnLnBhZ2Utc2VjdGlvbicpO1xuXG4gICAgJGltYWdlLm1vdXNlbW92ZSggZnVuY3Rpb24oZXZ0KSB7XG4gICAgICBsZXQgeFBvcyA9IGV2dC5wYWdlWDsvL3dvcmtzIHRoYW5rIGdvZFxuICAgICAgbGV0IHBhZ2VXID0gJChkb2N1bWVudC5ib2R5KS53aWR0aCgpO1xuICAgICAgbGV0IHhQZXJjID0geFBvcyAvIHBhZ2VXO1xuXG5cbiAgICAgICQodGhpcykuY2hpbGRyZW4oJHBhZ2VTZWN0aW9uKS5jc3MoJ2JhY2tncm91bmQtcG9zaXRpb24teCcsICBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIC0gKHhQZXJjICogcGFnZVcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUhvdmVyO1xuIiwiY2xhc3MgTmF2IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcbiAgICB0aGlzLiRuYXZCdXR0b24gPSAkKCcubmF2X19oYW1idXJnZXItLWJ1dHRvbicpO1xuICAgIHRoaXMuJHNsaWRlckJ1dHRvbiA9ICQoJy5uYXZfX3NsaWRlci0tYnV0dG9uJyk7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy4kc2xpZGVyQnV0dG9uLmNsaWNrKHRoaXMudG9nZ2xlTmF2LmJpbmQodGhpcykpO1xuICAgIHRoaXMuJG5hdkJ1dHRvbi5jbGljayh0aGlzLnRvZ2dsZU5hdi5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuaGFtYnVyZ2VyQ29sb3IoKTtcbiAgfVxuXG4gIHRvZ2dsZU5hdigpIHtcbiAgICB0aGlzLiRib2R5LnRvZ2dsZUNsYXNzKCdqcy1zbGlkZXItb3BlbicpO1xuICB9XG5cbiAgaGFtYnVyZ2VyQ29sb3IoKSB7XG4gICAgbGV0ICRoYW1idXJnZXJJY29uID0gJCgnLm5hdl9faGFtYnVyZ2VyLS1pY29uJyk7XG4gICAgbGV0ICRoZXJvID0gJCgnLmhlcm8nKTtcbiAgICBsZXQgaGVyb0hlaWdodCA9ICQoJy5oZXJvJykuaW5uZXJIZWlnaHQoKTtcbiAgICBsZXQgcHJvamVjdFNlY3Rpb24gPSAkKCcucGFnZS1zZWN0aW9uJykuaW5uZXJIZWlnaHQoKTtcbiAgICBsZXQgc2Nyb2xsUG9zID0gd2luZG93LnNjcm9sbFk7XG5cbiAgICBjb25zdCAkcHJvamVjdFNlY3Rpb25BcnIgPSAkKCcucGFnZS1zZWN0aW9uJyk7XG5cbiAgICBpZiAoJGhlcm8uaGFzQ2xhc3MoJ2RhcmsnKSkge1xuICAgICAgJGhhbWJ1cmdlckljb24uYWRkQ2xhc3MoJ2pzLWljb24td2hpdGUnKTtcbiAgICB9XG5cbiAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2Nyb2xsUG9zID0gd2luZG93LnNjcm9sbFk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgJHByb2plY3RTZWN0aW9uQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCAkcHJvamVjdFNlY3Rpb24gPSAkcHJvamVjdFNlY3Rpb25BcnIuZXEoaSk7XG4gICAgICAgIGxldCBvZmZzZXQgPSAkcHJvamVjdFNlY3Rpb24ub2Zmc2V0KCkudG9wO1xuICAgICAgICBsZXQgc2VjdGlvbkhlaWdodCA9ICRwcm9qZWN0U2VjdGlvbi5pbm5lckhlaWdodCgpO1xuICAgICAgICBpZiAoc2Nyb2xsUG9zID4gKG9mZnNldCAtIDM3KSAmJiBzY3JvbGxQb3MgPCBvZmZzZXQgKyBzZWN0aW9uSGVpZ2h0KSB7XG4gICAgICAgICAgaWYgKCRwcm9qZWN0U2VjdGlvbi5oYXNDbGFzcygnZGFyaycpKSB7XG4gICAgICAgICAgICAkaGFtYnVyZ2VySWNvbi5hZGRDbGFzcygnanMtaWNvbi13aGl0ZScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkaGFtYnVyZ2VySWNvbi5yZW1vdmVDbGFzcygnanMtaWNvbi13aGl0ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiIsImltcG9ydCBTY3JvbGxNYWdpYyBmcm9tICdzY3JvbGxtYWdpYyc7XG5cbmNsYXNzIFNjcm9sbEFuaW1hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgdGhpcy5jb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTsgLy9wcm9wZXJ0eSBvZiB0aGlzIGNsYXNzLCByYXRoZXIgdGhhbiBnbG9iYWwgdmFyXG5cbiAgICBpZiAodGhpcy4kYm9keS5oYXNDbGFzcygnaG9tZScpKSB7XG4gICAgICB0aGlzLmhvbWVTY3JvbGwoKTtcbiAgICB9XG4gIH1cblxuICBob21lU2Nyb2xsKCkge1xuICAgIGxldCAkd29ya0NvbnRhaW5lciA9ICQoJy53b3JrX19saW5rcy0tY29udGFpbmVyJyk7XG4gICAgbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcbiAgICAgIHRyaWdnZXJFbGVtZW50OiAkd29ya0NvbnRhaW5lcixcbiAgICAgIGR1cmF0aW9uOiAkd29ya0NvbnRhaW5lci5oZWlnaHQoKVxuICAgIH0pXG4gICAgLnNldFBpbihcIi5ob3Zlcl9faW1nXCIpIC8vIHBpbnMgdGhlIGVsZW1lbnQgZm9yIHRoZSB0aGUgc2NlbmUncyBkdXJhdGlvblxuXHQgIC5hZGRUbyhjb250cm9sbGVyKTsgLy8gYXNzaWduIHRoZSBzY2VuZSB0byB0aGUgY29udHJvbGxlclxuICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxBbmltYXRpb247XG4iLCIvKiFcbiAqIFNjcm9sbE1hZ2ljIHYyLjAuNSAoMjAxNS0wNC0yOSlcbiAqIFRoZSBqYXZhc2NyaXB0IGxpYnJhcnkgZm9yIG1hZ2ljYWwgc2Nyb2xsIGludGVyYWN0aW9ucy5cbiAqIChjKSAyMDE1IEphbiBQYWVwa2UgKEBqYW5wYWVwa2UpXG4gKiBQcm9qZWN0IFdlYnNpdGU6IGh0dHA6Ly9zY3JvbGxtYWdpYy5pb1xuICogXG4gKiBAdmVyc2lvbiAyLjAuNVxuICogQGxpY2Vuc2UgRHVhbCBsaWNlbnNlZCB1bmRlciBNSVQgbGljZW5zZSBhbmQgR1BMLlxuICogQGF1dGhvciBKYW4gUGFlcGtlIC0gZS1tYWlsQGphbnBhZXBrZS5kZVxuICpcbiAqIEBmaWxlIFNjcm9sbE1hZ2ljIG1haW4gbGlicmFyeS5cbiAqL1xuLyoqXG4gKiBAbmFtZXNwYWNlIFNjcm9sbE1hZ2ljXG4gKi9cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZShmYWN0b3J5KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsXG5cdFx0cm9vdC5TY3JvbGxNYWdpYyA9IGZhY3RvcnkoKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdHZhciBTY3JvbGxNYWdpYyA9IGZ1bmN0aW9uICgpIHtcblx0XHRfdXRpbC5sb2coMiwgJyhDT01QQVRJQklMSVRZIE5PVElDRSkgLT4gQXMgb2YgU2Nyb2xsTWFnaWMgMi4wLjAgeW91IG5lZWQgdG8gdXNlIFxcJ25ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKClcXCcgdG8gY3JlYXRlIGEgbmV3IGNvbnRyb2xsZXIgaW5zdGFuY2UuIFVzZSBcXCduZXcgU2Nyb2xsTWFnaWMuU2NlbmUoKVxcJyB0byBpbnN0YW5jZSBhIHNjZW5lLicpO1xuXHR9O1xuXG5cdFNjcm9sbE1hZ2ljLnZlcnNpb24gPSBcIjIuMC41XCI7XG5cblx0Ly8gVE9ETzogdGVtcG9yYXJ5IHdvcmthcm91bmQgZm9yIGNocm9tZSdzIHNjcm9sbCBqaXR0ZXIgYnVnXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCBmdW5jdGlvbiAoKSB7fSk7XG5cblx0Ly8gZ2xvYmFsIGNvbnN0XG5cdHZhciBQSU5fU1BBQ0VSX0FUVFJJQlVURSA9IFwiZGF0YS1zY3JvbGxtYWdpYy1waW4tc3BhY2VyXCI7XG5cblx0LyoqXG5cdCAqIFRoZSBtYWluIGNsYXNzIHRoYXQgaXMgbmVlZGVkIG9uY2UgcGVyIHNjcm9sbCBjb250YWluZXIuXG5cdCAqXG5cdCAqIEBjbGFzc1xuXHQgKlxuXHQgKiBAZXhhbXBsZVxuXHQgKiAvLyBiYXNpYyBpbml0aWFsaXphdGlvblxuXHQgKiB2YXIgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XG5cdCAqXG5cdCAqIC8vIHBhc3Npbmcgb3B0aW9uc1xuXHQgKiB2YXIgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKHtjb250YWluZXI6IFwiI215Q29udGFpbmVyXCIsIGxvZ2xldmVsOiAzfSk7XG5cdCAqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBBbiBvYmplY3QgY29udGFpbmluZyBvbmUgb3IgbW9yZSBvcHRpb25zIGZvciB0aGUgY29udHJvbGxlci5cblx0ICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdCl9IFtvcHRpb25zLmNvbnRhaW5lcj13aW5kb3ddIC0gQSBzZWxlY3RvciwgRE9NIG9iamVjdCB0aGF0IHJlZmVyZW5jZXMgdGhlIG1haW4gY29udGFpbmVyIGZvciBzY3JvbGxpbmcuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudmVydGljYWw9dHJ1ZV0gLSBTZXRzIHRoZSBzY3JvbGwgbW9kZSB0byB2ZXJ0aWNhbCAoYHRydWVgKSBvciBob3Jpem9udGFsIChgZmFsc2VgKSBzY3JvbGxpbmcuXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucy5nbG9iYWxTY2VuZU9wdGlvbnM9e31dIC0gVGhlc2Ugb3B0aW9ucyB3aWxsIGJlIHBhc3NlZCB0byBldmVyeSBTY2VuZSB0aGF0IGlzIGFkZGVkIHRvIHRoZSBjb250cm9sbGVyIHVzaW5nIHRoZSBhZGRTY2VuZSBtZXRob2QuIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIFNjZW5lIG9wdGlvbnMgc2VlIHtAbGluayBTY3JvbGxNYWdpYy5TY2VuZX0uXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5sb2dsZXZlbD0yXSBMb2dsZXZlbCBmb3IgZGVidWdnaW5nLiBOb3RlIHRoYXQgbG9nZ2luZyBpcyBkaXNhYmxlZCBpbiB0aGUgbWluaWZpZWQgdmVyc2lvbiBvZiBTY3JvbGxNYWdpYy5cblx0ICoqIGAwYCA9PiBzaWxlbnRcblx0ICoqIGAxYCA9PiBlcnJvcnNcblx0ICoqIGAyYCA9PiBlcnJvcnMsIHdhcm5pbmdzXG5cdCAqKiBgM2AgPT4gZXJyb3JzLCB3YXJuaW5ncywgZGVidWdpbmZvXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucmVmcmVzaEludGVydmFsPTEwMF0gLSBTb21lIGNoYW5nZXMgZG9uJ3QgY2FsbCBldmVudHMgYnkgZGVmYXVsdCwgbGlrZSBjaGFuZ2luZyB0aGUgY29udGFpbmVyIHNpemUgb3IgbW92aW5nIGEgc2NlbmUgdHJpZ2dlciBlbGVtZW50LiAgXG5cdCBUaGlzIGludGVydmFsIHBvbGxzIHRoZXNlIHBhcmFtZXRlcnMgdG8gZmlyZSB0aGUgbmVjZXNzYXJ5IGV2ZW50cy4gIFxuXHQgSWYgeW91IGRvbid0IHVzZSBjdXN0b20gY29udGFpbmVycywgdHJpZ2dlciBlbGVtZW50cyBvciBoYXZlIHN0YXRpYyBsYXlvdXRzLCB3aGVyZSB0aGUgcG9zaXRpb25zIG9mIHRoZSB0cmlnZ2VyIGVsZW1lbnRzIGRvbid0IGNoYW5nZSwgeW91IGNhbiBzZXQgdGhpcyB0byAwIGRpc2FibGUgaW50ZXJ2YWwgY2hlY2tpbmcgYW5kIGltcHJvdmUgcGVyZm9ybWFuY2UuXG5cdCAqXG5cdCAqL1xuXHRTY3JvbGxNYWdpYy5Db250cm9sbGVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbi8qXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogc2V0dGluZ3Ncblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKi9cblx0XHR2YXJcblx0XHROQU1FU1BBQ0UgPSAnU2Nyb2xsTWFnaWMuQ29udHJvbGxlcicsXG5cdFx0XHRTQ1JPTExfRElSRUNUSU9OX0ZPUldBUkQgPSAnRk9SV0FSRCcsXG5cdFx0XHRTQ1JPTExfRElSRUNUSU9OX1JFVkVSU0UgPSAnUkVWRVJTRScsXG5cdFx0XHRTQ1JPTExfRElSRUNUSU9OX1BBVVNFRCA9ICdQQVVTRUQnLFxuXHRcdFx0REVGQVVMVF9PUFRJT05TID0gQ09OVFJPTExFUl9PUFRJT05TLmRlZmF1bHRzO1xuXG4vKlxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqIHByaXZhdGUgdmFyc1xuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqL1xuXHRcdHZhclxuXHRcdENvbnRyb2xsZXIgPSB0aGlzLFxuXHRcdFx0X29wdGlvbnMgPSBfdXRpbC5leHRlbmQoe30sIERFRkFVTFRfT1BUSU9OUywgb3B0aW9ucyksXG5cdFx0XHRfc2NlbmVPYmplY3RzID0gW10sXG5cdFx0XHRfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgPSBmYWxzZSxcblx0XHRcdC8vIGNhbiBiZSBib29sZWFuICh0cnVlID0+IGFsbCBzY2VuZXMpIG9yIGFuIGFycmF5IG9mIHNjZW5lcyB0byBiZSB1cGRhdGVkXG5cdFx0XHRfc2Nyb2xsUG9zID0gMCxcblx0XHRcdF9zY3JvbGxEaXJlY3Rpb24gPSBTQ1JPTExfRElSRUNUSU9OX1BBVVNFRCxcblx0XHRcdF9pc0RvY3VtZW50ID0gdHJ1ZSxcblx0XHRcdF92aWV3UG9ydFNpemUgPSAwLFxuXHRcdFx0X2VuYWJsZWQgPSB0cnVlLFxuXHRcdFx0X3VwZGF0ZVRpbWVvdXQsIF9yZWZyZXNoVGltZW91dDtcblxuLypcblx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQgKiBwcml2YXRlIGZ1bmN0aW9uc1xuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqL1xuXG5cdFx0LyoqXG5cdFx0ICogSW50ZXJuYWwgY29uc3RydWN0b3IgZnVuY3Rpb24gb2YgdGhlIFNjcm9sbE1hZ2ljIENvbnRyb2xsZXJcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gX29wdGlvbnMpIHtcblx0XHRcdFx0aWYgKCFERUZBVUxUX09QVElPTlMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRcdGxvZygyLCBcIldBUk5JTkc6IFVua25vd24gb3B0aW9uIFxcXCJcIiArIGtleSArIFwiXFxcIlwiKTtcblx0XHRcdFx0XHRkZWxldGUgX29wdGlvbnNba2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0X29wdGlvbnMuY29udGFpbmVyID0gX3V0aWwuZ2V0LmVsZW1lbnRzKF9vcHRpb25zLmNvbnRhaW5lcilbMF07XG5cdFx0XHQvLyBjaGVjayBTY3JvbGxDb250YWluZXJcblx0XHRcdGlmICghX29wdGlvbnMuY29udGFpbmVyKSB7XG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SIGNyZWF0aW5nIG9iamVjdCBcIiArIE5BTUVTUEFDRSArIFwiOiBObyB2YWxpZCBzY3JvbGwgY29udGFpbmVyIHN1cHBsaWVkXCIpO1xuXHRcdFx0XHR0aHJvdyBOQU1FU1BBQ0UgKyBcIiBpbml0IGZhaWxlZC5cIjsgLy8gY2FuY2VsXG5cdFx0XHR9XG5cdFx0XHRfaXNEb2N1bWVudCA9IF9vcHRpb25zLmNvbnRhaW5lciA9PT0gd2luZG93IHx8IF9vcHRpb25zLmNvbnRhaW5lciA9PT0gZG9jdW1lbnQuYm9keSB8fCAhZG9jdW1lbnQuYm9keS5jb250YWlucyhfb3B0aW9ucy5jb250YWluZXIpO1xuXHRcdFx0Ly8gbm9ybWFsaXplIHRvIHdpbmRvd1xuXHRcdFx0aWYgKF9pc0RvY3VtZW50KSB7XG5cdFx0XHRcdF9vcHRpb25zLmNvbnRhaW5lciA9IHdpbmRvdztcblx0XHRcdH1cblx0XHRcdC8vIHVwZGF0ZSBjb250YWluZXIgc2l6ZSBpbW1lZGlhdGVseVxuXHRcdFx0X3ZpZXdQb3J0U2l6ZSA9IGdldFZpZXdwb3J0U2l6ZSgpO1xuXHRcdFx0Ly8gc2V0IGV2ZW50IGhhbmRsZXJzXG5cdFx0XHRfb3B0aW9ucy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvbkNoYW5nZSk7XG5cdFx0XHRfb3B0aW9ucy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvbkNoYW5nZSk7XG5cblx0XHRcdF9vcHRpb25zLnJlZnJlc2hJbnRlcnZhbCA9IHBhcnNlSW50KF9vcHRpb25zLnJlZnJlc2hJbnRlcnZhbCkgfHwgREVGQVVMVF9PUFRJT05TLnJlZnJlc2hJbnRlcnZhbDtcblx0XHRcdHNjaGVkdWxlUmVmcmVzaCgpO1xuXG5cdFx0XHRsb2coMywgXCJhZGRlZCBuZXcgXCIgKyBOQU1FU1BBQ0UgKyBcIiBjb250cm9sbGVyICh2XCIgKyBTY3JvbGxNYWdpYy52ZXJzaW9uICsgXCIpXCIpO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBTY2hlZHVsZSB0aGUgbmV4dCBleGVjdXRpb24gb2YgdGhlIHJlZnJlc2ggZnVuY3Rpb25cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHZhciBzY2hlZHVsZVJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoX29wdGlvbnMucmVmcmVzaEludGVydmFsID4gMCkge1xuXHRcdFx0XHRfcmVmcmVzaFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChyZWZyZXNoLCBfb3B0aW9ucy5yZWZyZXNoSW50ZXJ2YWwpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBEZWZhdWx0IGZ1bmN0aW9uIHRvIGdldCBzY3JvbGwgcG9zIC0gb3ZlcndyaXRlYWJsZSB1c2luZyBgQ29udHJvbGxlci5zY3JvbGxQb3MobmV3RnVuY3Rpb24pYFxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dmFyIGdldFNjcm9sbFBvcyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBfb3B0aW9ucy52ZXJ0aWNhbCA/IF91dGlsLmdldC5zY3JvbGxUb3AoX29wdGlvbnMuY29udGFpbmVyKSA6IF91dGlsLmdldC5zY3JvbGxMZWZ0KF9vcHRpb25zLmNvbnRhaW5lcik7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgdGhlIGN1cnJlbnQgdmlld3BvcnQgU2l6ZSAod2lkdGggdm9yIGhvcml6b250YWwsIGhlaWdodCBmb3IgdmVydGljYWwpXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR2YXIgZ2V0Vmlld3BvcnRTaXplID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIF9vcHRpb25zLnZlcnRpY2FsID8gX3V0aWwuZ2V0LmhlaWdodChfb3B0aW9ucy5jb250YWluZXIpIDogX3V0aWwuZ2V0LndpZHRoKF9vcHRpb25zLmNvbnRhaW5lcik7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIERlZmF1bHQgZnVuY3Rpb24gdG8gc2V0IHNjcm9sbCBwb3MgLSBvdmVyd3JpdGVhYmxlIHVzaW5nIGBDb250cm9sbGVyLnNjcm9sbFRvKG5ld0Z1bmN0aW9uKWBcblx0XHQgKiBNYWtlIGF2YWlsYWJsZSBwdWJsaWNseSBmb3IgcGlubmVkIG1vdXNld2hlZWwgd29ya2Fyb3VuZC5cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHZhciBzZXRTY3JvbGxQb3MgPSB0aGlzLl9zZXRTY3JvbGxQb3MgPSBmdW5jdGlvbiAocG9zKSB7XG5cdFx0XHRpZiAoX29wdGlvbnMudmVydGljYWwpIHtcblx0XHRcdFx0aWYgKF9pc0RvY3VtZW50KSB7XG5cdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKF91dGlsLmdldC5zY3JvbGxMZWZ0KCksIHBvcyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0X29wdGlvbnMuY29udGFpbmVyLnNjcm9sbFRvcCA9IHBvcztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKF9pc0RvY3VtZW50KSB7XG5cdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKHBvcywgX3V0aWwuZ2V0LnNjcm9sbFRvcCgpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfb3B0aW9ucy5jb250YWluZXIuc2Nyb2xsTGVmdCA9IHBvcztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGUgdXBkYXRlcyBpbiBjeWNsZXMgaW5zdGVhZCBvZiBvbiBzY3JvbGwgKHBlcmZvcm1hbmNlKVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dmFyIHVwZGF0ZVNjZW5lcyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChfZW5hYmxlZCAmJiBfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUpIHtcblx0XHRcdFx0Ly8gZGV0ZXJtaW5lIHNjZW5lcyB0byB1cGRhdGVcblx0XHRcdFx0dmFyIHNjZW5lc1RvVXBkYXRlID0gX3V0aWwudHlwZS5BcnJheShfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUpID8gX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlIDogX3NjZW5lT2JqZWN0cy5zbGljZSgwKTtcblx0XHRcdFx0Ly8gcmVzZXQgc2NlbmVzXG5cdFx0XHRcdF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSA9IGZhbHNlO1xuXHRcdFx0XHR2YXIgb2xkU2Nyb2xsUG9zID0gX3Njcm9sbFBvcztcblx0XHRcdFx0Ly8gdXBkYXRlIHNjcm9sbCBwb3Mgbm93IGluc3RlYWQgb2Ygb25DaGFuZ2UsIGFzIGl0IG1pZ2h0IGhhdmUgY2hhbmdlZCBzaW5jZSBzY2hlZHVsaW5nIChpLmUuIGluLWJyb3dzZXIgc21vb3RoIHNjcm9sbClcblx0XHRcdFx0X3Njcm9sbFBvcyA9IENvbnRyb2xsZXIuc2Nyb2xsUG9zKCk7XG5cdFx0XHRcdHZhciBkZWx0YVNjcm9sbCA9IF9zY3JvbGxQb3MgLSBvbGRTY3JvbGxQb3M7XG5cdFx0XHRcdGlmIChkZWx0YVNjcm9sbCAhPT0gMCkgeyAvLyBzY3JvbGwgcG9zaXRpb24gY2hhbmdlZD9cblx0XHRcdFx0XHRfc2Nyb2xsRGlyZWN0aW9uID0gKGRlbHRhU2Nyb2xsID4gMCkgPyBTQ1JPTExfRElSRUNUSU9OX0ZPUldBUkQgOiBTQ1JPTExfRElSRUNUSU9OX1JFVkVSU0U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gcmV2ZXJzZSBvcmRlciBvZiBzY2VuZXMgaWYgc2Nyb2xsaW5nIHJldmVyc2Vcblx0XHRcdFx0aWYgKF9zY3JvbGxEaXJlY3Rpb24gPT09IFNDUk9MTF9ESVJFQ1RJT05fUkVWRVJTRSkge1xuXHRcdFx0XHRcdHNjZW5lc1RvVXBkYXRlLnJldmVyc2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyB1cGRhdGUgc2NlbmVzXG5cdFx0XHRcdHNjZW5lc1RvVXBkYXRlLmZvckVhY2goZnVuY3Rpb24gKHNjZW5lLCBpbmRleCkge1xuXHRcdFx0XHRcdGxvZygzLCBcInVwZGF0aW5nIFNjZW5lIFwiICsgKGluZGV4ICsgMSkgKyBcIi9cIiArIHNjZW5lc1RvVXBkYXRlLmxlbmd0aCArIFwiIChcIiArIF9zY2VuZU9iamVjdHMubGVuZ3RoICsgXCIgdG90YWwpXCIpO1xuXHRcdFx0XHRcdHNjZW5lLnVwZGF0ZSh0cnVlKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmIChzY2VuZXNUb1VwZGF0ZS5sZW5ndGggPT09IDAgJiYgX29wdGlvbnMubG9nbGV2ZWwgPj0gMykge1xuXHRcdFx0XHRcdGxvZygzLCBcInVwZGF0aW5nIDAgU2NlbmVzIChub3RoaW5nIGFkZGVkIHRvIGNvbnRyb2xsZXIpXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIEluaXRpYWxpemVzIHJBRiBjYWxsYmFja1xuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dmFyIGRlYm91bmNlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0X3VwZGF0ZVRpbWVvdXQgPSBfdXRpbC5yQUYodXBkYXRlU2NlbmVzKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogSGFuZGxlcyBDb250YWluZXIgY2hhbmdlc1xuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dmFyIG9uQ2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcblx0XHRcdGxvZygzLCBcImV2ZW50IGZpcmVkIGNhdXNpbmcgYW4gdXBkYXRlOlwiLCBlLnR5cGUpO1xuXHRcdFx0aWYgKGUudHlwZSA9PSBcInJlc2l6ZVwiKSB7XG5cdFx0XHRcdC8vIHJlc2l6ZVxuXHRcdFx0XHRfdmlld1BvcnRTaXplID0gZ2V0Vmlld3BvcnRTaXplKCk7XG5cdFx0XHRcdF9zY3JvbGxEaXJlY3Rpb24gPSBTQ1JPTExfRElSRUNUSU9OX1BBVVNFRDtcblx0XHRcdH1cblx0XHRcdC8vIHNjaGVkdWxlIHVwZGF0ZVxuXHRcdFx0aWYgKF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSAhPT0gdHJ1ZSkge1xuXHRcdFx0XHRfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgPSB0cnVlO1xuXHRcdFx0XHRkZWJvdW5jZVVwZGF0ZSgpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgcmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICghX2lzRG9jdW1lbnQpIHtcblx0XHRcdFx0Ly8gc2ltdWxhdGUgcmVzaXplIGV2ZW50LiBPbmx5IHdvcmtzIGZvciB2aWV3cG9ydCByZWxldmFudCBwYXJhbSAocGVyZm9ybWFuY2UpXG5cdFx0XHRcdGlmIChfdmlld1BvcnRTaXplICE9IGdldFZpZXdwb3J0U2l6ZSgpKSB7XG5cdFx0XHRcdFx0dmFyIHJlc2l6ZUV2ZW50O1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRyZXNpemVFdmVudCA9IG5ldyBFdmVudCgncmVzaXplJywge1xuXHRcdFx0XHRcdFx0XHRidWJibGVzOiBmYWxzZSxcblx0XHRcdFx0XHRcdFx0Y2FuY2VsYWJsZTogZmFsc2Vcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHsgLy8gc3R1cGlkIElFXG5cdFx0XHRcdFx0XHRyZXNpemVFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7XG5cdFx0XHRcdFx0XHRyZXNpemVFdmVudC5pbml0RXZlbnQoXCJyZXNpemVcIiwgZmFsc2UsIGZhbHNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0X29wdGlvbnMuY29udGFpbmVyLmRpc3BhdGNoRXZlbnQocmVzaXplRXZlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRfc2NlbmVPYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKHNjZW5lLCBpbmRleCkgeyAvLyByZWZyZXNoIGFsbCBzY2VuZXNcblx0XHRcdFx0c2NlbmUucmVmcmVzaCgpO1xuXHRcdFx0fSk7XG5cdFx0XHRzY2hlZHVsZVJlZnJlc2goKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogU2VuZCBhIGRlYnVnIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG5cdFx0ICogcHJvdmlkZWQgcHVibGljbHkgd2l0aCBfbG9nIGZvciBwbHVnaW5zXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBsb2dsZXZlbCAtIFRoZSBsb2dsZXZlbCByZXF1aXJlZCB0byBpbml0aWF0ZSBvdXRwdXQgZm9yIHRoZSBtZXNzYWdlLlxuXHRcdCAqIEBwYXJhbSB7Li4ubWl4ZWR9IG91dHB1dCAtIE9uZSBvciBtb3JlIHZhcmlhYmxlcyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIGNvbnNvbGUuXG5cdFx0ICovXG5cdFx0dmFyIGxvZyA9IHRoaXMuX2xvZyA9IGZ1bmN0aW9uIChsb2dsZXZlbCwgb3V0cHV0KSB7XG5cdFx0XHRpZiAoX29wdGlvbnMubG9nbGV2ZWwgPj0gbG9nbGV2ZWwpIHtcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFyZ3VtZW50cywgMSwgMCwgXCIoXCIgKyBOQU1FU1BBQ0UgKyBcIikgLT5cIik7XG5cdFx0XHRcdF91dGlsLmxvZy5hcHBseSh3aW5kb3csIGFyZ3VtZW50cyk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvLyBmb3Igc2NlbmVzIHdlIGhhdmUgZ2V0dGVycyBmb3IgZWFjaCBvcHRpb24sIGJ1dCBmb3IgdGhlIGNvbnRyb2xsZXIgd2UgZG9uJ3QsIHNvIHdlIG5lZWQgdG8gbWFrZSBpdCBhdmFpbGFibGUgZXh0ZXJuYWxseSBmb3IgcGx1Z2luc1xuXHRcdHRoaXMuX29wdGlvbnMgPSBfb3B0aW9ucztcblxuXHRcdC8qKlxuXHRcdCAqIFNvcnQgc2NlbmVzIGluIGFzY2VuZGluZyBvcmRlciBvZiB0aGVpciBzdGFydCBvZmZzZXQuXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7YXJyYXl9IFNjZW5lc0FycmF5IC0gYW4gYXJyYXkgb2YgU2Nyb2xsTWFnaWMgU2NlbmVzIHRoYXQgc2hvdWxkIGJlIHNvcnRlZFxuXHRcdCAqIEByZXR1cm4ge2FycmF5fSBUaGUgc29ydGVkIGFycmF5IG9mIFNjZW5lcy5cblx0XHQgKi9cblx0XHR2YXIgc29ydFNjZW5lcyA9IGZ1bmN0aW9uIChTY2VuZXNBcnJheSkge1xuXHRcdFx0aWYgKFNjZW5lc0FycmF5Lmxlbmd0aCA8PSAxKSB7XG5cdFx0XHRcdHJldHVybiBTY2VuZXNBcnJheTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBzY2VuZXMgPSBTY2VuZXNBcnJheS5zbGljZSgwKTtcblx0XHRcdFx0c2NlbmVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRcdFx0XHRyZXR1cm4gYS5zY3JvbGxPZmZzZXQoKSA+IGIuc2Nyb2xsT2Zmc2V0KCkgPyAxIDogLTE7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gc2NlbmVzO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0ICogcHVibGljIGZ1bmN0aW9uc1xuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQgKi9cblxuXHRcdC8qKlxuXHRcdCAqIEFkZCBvbmUgb3JlIG1vcmUgc2NlbmUocykgdG8gdGhlIGNvbnRyb2xsZXIuICBcblx0XHQgKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IHRvIGBTY2VuZS5hZGRUbyhjb250cm9sbGVyKWAuXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogLy8gd2l0aCBhIHByZXZpb3VzbHkgZGVmaW5lZCBzY2VuZVxuXHRcdCAqIGNvbnRyb2xsZXIuYWRkU2NlbmUoc2NlbmUpO1xuXHRcdCAqXG5cdFx0ICogLy8gd2l0aCBhIG5ld2x5IGNyZWF0ZWQgc2NlbmUuXG5cdFx0ICogY29udHJvbGxlci5hZGRTY2VuZShuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe2R1cmF0aW9uIDogMH0pKTtcblx0XHQgKlxuXHRcdCAqIC8vIGFkZGluZyBtdWx0aXBsZSBzY2VuZXNcblx0XHQgKiBjb250cm9sbGVyLmFkZFNjZW5lKFtzY2VuZSwgc2NlbmUyLCBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe2R1cmF0aW9uIDogMH0pXSk7XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyhTY3JvbGxNYWdpYy5TY2VuZXxhcnJheSl9IG5ld1NjZW5lIC0gU2Nyb2xsTWFnaWMgU2NlbmUgb3IgQXJyYXkgb2YgU2NlbmVzIHRvIGJlIGFkZGVkIHRvIHRoZSBjb250cm9sbGVyLlxuXHRcdCAqIEByZXR1cm4ge0NvbnRyb2xsZXJ9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxuXHRcdCAqL1xuXHRcdHRoaXMuYWRkU2NlbmUgPSBmdW5jdGlvbiAobmV3U2NlbmUpIHtcblx0XHRcdGlmIChfdXRpbC50eXBlLkFycmF5KG5ld1NjZW5lKSkge1xuXHRcdFx0XHRuZXdTY2VuZS5mb3JFYWNoKGZ1bmN0aW9uIChzY2VuZSwgaW5kZXgpIHtcblx0XHRcdFx0XHRDb250cm9sbGVyLmFkZFNjZW5lKHNjZW5lKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2UgaWYgKG5ld1NjZW5lIGluc3RhbmNlb2YgU2Nyb2xsTWFnaWMuU2NlbmUpIHtcblx0XHRcdFx0aWYgKG5ld1NjZW5lLmNvbnRyb2xsZXIoKSAhPT0gQ29udHJvbGxlcikge1xuXHRcdFx0XHRcdG5ld1NjZW5lLmFkZFRvKENvbnRyb2xsZXIpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKF9zY2VuZU9iamVjdHMuaW5kZXhPZihuZXdTY2VuZSkgPCAwKSB7XG5cdFx0XHRcdFx0Ly8gbmV3IHNjZW5lXG5cdFx0XHRcdFx0X3NjZW5lT2JqZWN0cy5wdXNoKG5ld1NjZW5lKTsgLy8gYWRkIHRvIGFycmF5XG5cdFx0XHRcdFx0X3NjZW5lT2JqZWN0cyA9IHNvcnRTY2VuZXMoX3NjZW5lT2JqZWN0cyk7IC8vIHNvcnRcblx0XHRcdFx0XHRuZXdTY2VuZS5vbihcInNoaWZ0LmNvbnRyb2xsZXJfc29ydFwiLCBmdW5jdGlvbiAoKSB7IC8vIHJlc29ydCB3aGVuZXZlciBzY2VuZSBtb3Zlc1xuXHRcdFx0XHRcdFx0X3NjZW5lT2JqZWN0cyA9IHNvcnRTY2VuZXMoX3NjZW5lT2JqZWN0cyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Ly8gaW5zZXJ0IEdsb2JhbCBkZWZhdWx0cy5cblx0XHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gX29wdGlvbnMuZ2xvYmFsU2NlbmVPcHRpb25zKSB7XG5cdFx0XHRcdFx0XHRpZiAobmV3U2NlbmVba2V5XSkge1xuXHRcdFx0XHRcdFx0XHRuZXdTY2VuZVtrZXldLmNhbGwobmV3U2NlbmUsIF9vcHRpb25zLmdsb2JhbFNjZW5lT3B0aW9uc1trZXldKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bG9nKDMsIFwiYWRkaW5nIFNjZW5lIChub3cgXCIgKyBfc2NlbmVPYmplY3RzLmxlbmd0aCArIFwiIHRvdGFsKVwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bG9nKDEsIFwiRVJST1I6IGludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgZm9yICcuYWRkU2NlbmUoKSdcIik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIG9uZSBvcmUgbW9yZSBzY2VuZShzKSBmcm9tIHRoZSBjb250cm9sbGVyLiAgXG5cdFx0ICogVGhpcyBpcyB0aGUgZXF1aXZhbGVudCB0byBgU2NlbmUucmVtb3ZlKClgLlxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIC8vIHJlbW92ZSBhIHNjZW5lIGZyb20gdGhlIGNvbnRyb2xsZXJcblx0XHQgKiBjb250cm9sbGVyLnJlbW92ZVNjZW5lKHNjZW5lKTtcblx0XHQgKlxuXHRcdCAqIC8vIHJlbW92ZSBtdWx0aXBsZSBzY2VuZXMgZnJvbSB0aGUgY29udHJvbGxlclxuXHRcdCAqIGNvbnRyb2xsZXIucmVtb3ZlU2NlbmUoW3NjZW5lLCBzY2VuZTIsIHNjZW5lM10pO1xuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsoU2Nyb2xsTWFnaWMuU2NlbmV8YXJyYXkpfSBTY2VuZSAtIFNjcm9sbE1hZ2ljIFNjZW5lIG9yIEFycmF5IG9mIFNjZW5lcyB0byBiZSByZW1vdmVkIGZyb20gdGhlIGNvbnRyb2xsZXIuXG5cdFx0ICogQHJldHVybnMge0NvbnRyb2xsZXJ9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxuXHRcdCAqL1xuXHRcdHRoaXMucmVtb3ZlU2NlbmUgPSBmdW5jdGlvbiAoU2NlbmUpIHtcblx0XHRcdGlmIChfdXRpbC50eXBlLkFycmF5KFNjZW5lKSkge1xuXHRcdFx0XHRTY2VuZS5mb3JFYWNoKGZ1bmN0aW9uIChzY2VuZSwgaW5kZXgpIHtcblx0XHRcdFx0XHRDb250cm9sbGVyLnJlbW92ZVNjZW5lKHNjZW5lKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgaW5kZXggPSBfc2NlbmVPYmplY3RzLmluZGV4T2YoU2NlbmUpO1xuXHRcdFx0XHRpZiAoaW5kZXggPiAtMSkge1xuXHRcdFx0XHRcdFNjZW5lLm9mZihcInNoaWZ0LmNvbnRyb2xsZXJfc29ydFwiKTtcblx0XHRcdFx0XHRfc2NlbmVPYmplY3RzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdFx0bG9nKDMsIFwicmVtb3ZpbmcgU2NlbmUgKG5vdyBcIiArIF9zY2VuZU9iamVjdHMubGVuZ3RoICsgXCIgbGVmdClcIik7XG5cdFx0XHRcdFx0U2NlbmUucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBVcGRhdGUgb25lIG9yZSBtb3JlIHNjZW5lKHMpIGFjY29yZGluZyB0byB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBjb250YWluZXIuICBcblx0XHQgKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IHRvIGBTY2VuZS51cGRhdGUoKWAuICBcblx0XHQgKiBUaGUgdXBkYXRlIG1ldGhvZCBjYWxjdWxhdGVzIHRoZSBzY2VuZSdzIHN0YXJ0IGFuZCBlbmQgcG9zaXRpb24gKGJhc2VkIG9uIHRoZSB0cmlnZ2VyIGVsZW1lbnQsIHRyaWdnZXIgaG9vaywgZHVyYXRpb24gYW5kIG9mZnNldCkgYW5kIGNoZWNrcyBpdCBhZ2FpbnN0IHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgY29udGFpbmVyLiAgXG5cdFx0ICogSXQgdGhlbiB1cGRhdGVzIHRoZSBjdXJyZW50IHNjZW5lIHN0YXRlIGFjY29yZGluZ2x5IChvciBkb2VzIG5vdGhpbmcsIGlmIHRoZSBzdGF0ZSBpcyBhbHJlYWR5IGNvcnJlY3QpIOKAkyBQaW5zIHdpbGwgYmUgc2V0IHRvIHRoZWlyIGNvcnJlY3QgcG9zaXRpb24gYW5kIHR3ZWVucyB3aWxsIGJlIHVwZGF0ZWQgdG8gdGhlaXIgY29ycmVjdCBwcm9ncmVzcy4gIFxuXHRcdCAqIF8qKk5vdGU6KiogVGhpcyBtZXRob2QgZ2V0cyBjYWxsZWQgY29uc3RhbnRseSB3aGVuZXZlciBDb250cm9sbGVyIGRldGVjdHMgYSBjaGFuZ2UuIFRoZSBvbmx5IGFwcGxpY2F0aW9uIGZvciB5b3UgaXMgaWYgeW91IGNoYW5nZSBzb21ldGhpbmcgb3V0c2lkZSBvZiB0aGUgcmVhbG0gb2YgU2Nyb2xsTWFnaWMsIGxpa2UgbW92aW5nIHRoZSB0cmlnZ2VyIG9yIGNoYW5naW5nIHR3ZWVuIHBhcmFtZXRlcnMuX1xuXHRcdCAqIEBwdWJsaWNcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIC8vIHVwZGF0ZSBhIHNwZWNpZmljIHNjZW5lIG9uIG5leHQgY3ljbGVcblx0XHQgKiBjb250cm9sbGVyLnVwZGF0ZVNjZW5lKHNjZW5lKTtcblx0XHQgKlxuXHRcdCAqIC8vIHVwZGF0ZSBhIHNwZWNpZmljIHNjZW5lIGltbWVkaWF0ZWx5XG5cdFx0ICogY29udHJvbGxlci51cGRhdGVTY2VuZShzY2VuZSwgdHJ1ZSk7XG5cdFx0ICpcblx0XHQgKiAvLyB1cGRhdGUgbXVsdGlwbGUgc2NlbmVzIHNjZW5lIG9uIG5leHQgY3ljbGVcblx0XHQgKiBjb250cm9sbGVyLnVwZGF0ZVNjZW5lKFtzY2VuZTEsIHNjZW5lMiwgc2NlbmUzXSk7XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge1Njcm9sbE1hZ2ljLlNjZW5lfSBTY2VuZSAtIFNjcm9sbE1hZ2ljIFNjZW5lIG9yIEFycmF5IG9mIFNjZW5lcyB0aGF0IGlzL2FyZSBzdXBwb3NlZCB0byBiZSB1cGRhdGVkLlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ltbWVkaWF0ZWx5PWZhbHNlXSAtIElmIGB0cnVlYCB0aGUgdXBkYXRlIHdpbGwgYmUgaW5zdGFudCwgaWYgYGZhbHNlYCBpdCB3aWxsIHdhaXQgdW50aWwgbmV4dCB1cGRhdGUgY3ljbGUuICBcblx0XHQgVGhpcyBpcyB1c2VmdWwgd2hlbiBjaGFuZ2luZyBtdWx0aXBsZSBwcm9wZXJ0aWVzIG9mIHRoZSBzY2VuZSAtIHRoaXMgd2F5IGl0IHdpbGwgb25seSBiZSB1cGRhdGVkIG9uY2UgYWxsIG5ldyBwcm9wZXJ0aWVzIGFyZSBzZXQgKHVwZGF0ZVNjZW5lcykuXG5cdFx0ICogQHJldHVybiB7Q29udHJvbGxlcn0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXG5cdFx0ICovXG5cdFx0dGhpcy51cGRhdGVTY2VuZSA9IGZ1bmN0aW9uIChTY2VuZSwgaW1tZWRpYXRlbHkpIHtcblx0XHRcdGlmIChfdXRpbC50eXBlLkFycmF5KFNjZW5lKSkge1xuXHRcdFx0XHRTY2VuZS5mb3JFYWNoKGZ1bmN0aW9uIChzY2VuZSwgaW5kZXgpIHtcblx0XHRcdFx0XHRDb250cm9sbGVyLnVwZGF0ZVNjZW5lKHNjZW5lLCBpbW1lZGlhdGVseSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGltbWVkaWF0ZWx5KSB7XG5cdFx0XHRcdFx0U2NlbmUudXBkYXRlKHRydWUpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSAhPT0gdHJ1ZSAmJiBTY2VuZSBpbnN0YW5jZW9mIFNjcm9sbE1hZ2ljLlNjZW5lKSB7IC8vIGlmIF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZSBpcyB0cnVlLCBhbGwgY29ubmVjdGVkIHNjZW5lcyBhcmUgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIHVwZGF0ZVxuXHRcdFx0XHRcdC8vIHByZXAgYXJyYXkgZm9yIG5leHQgdXBkYXRlIGN5Y2xlXG5cdFx0XHRcdFx0X3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlID0gX3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlIHx8IFtdO1xuXHRcdFx0XHRcdGlmIChfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUuaW5kZXhPZihTY2VuZSkgPT0gLTEpIHtcblx0XHRcdFx0XHRcdF91cGRhdGVTY2VuZXNPbk5leHRDeWNsZS5wdXNoKFNjZW5lKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0X3VwZGF0ZVNjZW5lc09uTmV4dEN5Y2xlID0gc29ydFNjZW5lcyhfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUpOyAvLyBzb3J0XG5cdFx0XHRcdFx0ZGVib3VuY2VVcGRhdGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIENvbnRyb2xsZXI7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFVwZGF0ZXMgdGhlIGNvbnRyb2xsZXIgcGFyYW1zIGFuZCBjYWxscyB1cGRhdGVTY2VuZSBvbiBldmVyeSBzY2VuZSwgdGhhdCBpcyBhdHRhY2hlZCB0byB0aGUgY29udHJvbGxlci4gIFxuXHRcdCAqIFNlZSBgQ29udHJvbGxlci51cGRhdGVTY2VuZSgpYCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IHRoaXMgbWVhbnMuICBcblx0XHQgKiBJbiBtb3N0IGNhc2VzIHlvdSB3aWxsIG5vdCBuZWVkIHRoaXMgZnVuY3Rpb24sIGFzIGl0IGlzIGNhbGxlZCBjb25zdGFudGx5LCB3aGVuZXZlciBTY3JvbGxNYWdpYyBkZXRlY3RzIGEgc3RhdGUgY2hhbmdlIGV2ZW50LCBsaWtlIHJlc2l6ZSBvciBzY3JvbGwuICBcblx0XHQgKiBUaGUgb25seSBhcHBsaWNhdGlvbiBmb3IgdGhpcyBtZXRob2QgaXMgd2hlbiBTY3JvbGxNYWdpYyBmYWlscyB0byBkZXRlY3QgdGhlc2UgZXZlbnRzLiAgXG5cdFx0ICogT25lIGFwcGxpY2F0aW9uIGlzIHdpdGggc29tZSBleHRlcm5hbCBzY3JvbGwgbGlicmFyaWVzIChsaWtlIGlTY3JvbGwpIHRoYXQgbW92ZSBhbiBpbnRlcm5hbCBjb250YWluZXIgdG8gYSBuZWdhdGl2ZSBvZmZzZXQgaW5zdGVhZCBvZiBhY3R1YWxseSBzY3JvbGxpbmcuIEluIHRoaXMgY2FzZSB0aGUgdXBkYXRlIG9uIHRoZSBjb250cm9sbGVyIG5lZWRzIHRvIGJlIGNhbGxlZCB3aGVuZXZlciB0aGUgY2hpbGQgY29udGFpbmVyJ3MgcG9zaXRpb24gY2hhbmdlcy5cblx0XHQgKiBGb3IgdGhpcyBjYXNlIHRoZXJlIHdpbGwgYWxzbyBiZSB0aGUgbmVlZCB0byBwcm92aWRlIGEgY3VzdG9tIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0aGUgY29ycmVjdCBzY3JvbGwgcG9zaXRpb24uIFNlZSBgQ29udHJvbGxlci5zY3JvbGxQb3MoKWAgZm9yIGRldGFpbHMuXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogLy8gdXBkYXRlIHRoZSBjb250cm9sbGVyIG9uIG5leHQgY3ljbGUgKHNhdmVzIHBlcmZvcm1hbmNlIGR1ZSB0byBlbGltaW5hdGlvbiBvZiByZWR1bmRhbnQgdXBkYXRlcylcblx0XHQgKiBjb250cm9sbGVyLnVwZGF0ZSgpO1xuXHRcdCAqXG5cdFx0ICogLy8gdXBkYXRlIHRoZSBjb250cm9sbGVyIGltbWVkaWF0ZWx5XG5cdFx0ICogY29udHJvbGxlci51cGRhdGUodHJ1ZSk7XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtpbW1lZGlhdGVseT1mYWxzZV0gLSBJZiBgdHJ1ZWAgdGhlIHVwZGF0ZSB3aWxsIGJlIGluc3RhbnQsIGlmIGBmYWxzZWAgaXQgd2lsbCB3YWl0IHVudGlsIG5leHQgdXBkYXRlIGN5Y2xlIChiZXR0ZXIgcGVyZm9ybWFuY2UpXG5cdFx0ICogQHJldHVybiB7Q29udHJvbGxlcn0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXG5cdFx0ICovXG5cdFx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoaW1tZWRpYXRlbHkpIHtcblx0XHRcdG9uQ2hhbmdlKHtcblx0XHRcdFx0dHlwZTogXCJyZXNpemVcIlxuXHRcdFx0fSk7IC8vIHdpbGwgdXBkYXRlIHNpemUgYW5kIHNldCBfdXBkYXRlU2NlbmVzT25OZXh0Q3ljbGUgdG8gdHJ1ZVxuXHRcdFx0aWYgKGltbWVkaWF0ZWx5KSB7XG5cdFx0XHRcdHVwZGF0ZVNjZW5lcygpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIENvbnRyb2xsZXI7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFNjcm9sbCB0byBhIG51bWVyaWMgc2Nyb2xsIG9mZnNldCwgYSBET00gZWxlbWVudCwgdGhlIHN0YXJ0IG9mIGEgc2NlbmUgb3IgcHJvdmlkZSBhbiBhbHRlcm5hdGUgbWV0aG9kIGZvciBzY3JvbGxpbmcuICBcblx0XHQgKiBGb3IgdmVydGljYWwgY29udHJvbGxlcnMgaXQgd2lsbCBjaGFuZ2UgdGhlIHRvcCBzY3JvbGwgb2Zmc2V0IGFuZCBmb3IgaG9yaXpvbnRhbCBhcHBsaWNhdGlvbnMgaXQgd2lsbCBjaGFuZ2UgdGhlIGxlZnQgb2Zmc2V0LlxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKlxuXHRcdCAqIEBzaW5jZSAxLjEuMFxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogLy8gc2Nyb2xsIHRvIGFuIG9mZnNldCBvZiAxMDBcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKDEwMCk7XG5cdFx0ICpcblx0XHQgKiAvLyBzY3JvbGwgdG8gYSBET00gZWxlbWVudFxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oXCIjYW5jaG9yXCIpO1xuXHRcdCAqXG5cdFx0ICogLy8gc2Nyb2xsIHRvIHRoZSBiZWdpbm5pbmcgb2YgYSBzY2VuZVxuXHRcdCAqIHZhciBzY2VuZSA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7b2Zmc2V0OiAyMDB9KTtcblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKHNjZW5lKTtcblx0XHQgKlxuXHRcdCAqIC8vIGRlZmluZSBhIG5ldyBzY3JvbGwgcG9zaXRpb24gbW9kaWZpY2F0aW9uIGZ1bmN0aW9uIChqUXVlcnkgYW5pbWF0ZSBpbnN0ZWFkIG9mIGp1bXApXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbyhmdW5jdGlvbiAobmV3U2Nyb2xsUG9zKSB7XG5cdFx0ICpcdCQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogbmV3U2Nyb2xsUG9zfSk7XG5cdFx0ICogfSk7XG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbygxMDApOyAvLyBjYWxsIGFzIHVzdWFsLCBidXQgdGhlIG5ldyBmdW5jdGlvbiB3aWxsIGJlIHVzZWQgaW5zdGVhZFxuXHRcdCAqXG5cdFx0ICogLy8gZGVmaW5lIGEgbmV3IHNjcm9sbCBmdW5jdGlvbiB3aXRoIGFuIGFkZGl0aW9uYWwgcGFyYW1ldGVyXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbyhmdW5jdGlvbiAobmV3U2Nyb2xsUG9zLCBtZXNzYWdlKSB7XG5cdFx0ICogIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuXHRcdCAqXHQkKHRoaXMpLmFuaW1hdGUoe3Njcm9sbFRvcDogbmV3U2Nyb2xsUG9zfSk7XG5cdFx0ICogfSk7XG5cdFx0ICogLy8gY2FsbCBhcyB1c3VhbCwgYnV0IHN1cHBseSBhbiBleHRyYSBwYXJhbWV0ZXIgdG8gdGhlIGRlZmluZWQgY3VzdG9tIGZ1bmN0aW9uXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbygxMDAsIFwibXkgbWVzc2FnZVwiKTtcblx0XHQgKlxuXHRcdCAqIC8vIGRlZmluZSBhIG5ldyBzY3JvbGwgZnVuY3Rpb24gd2l0aCBhbiBhZGRpdGlvbmFsIHBhcmFtZXRlciBjb250YWluaW5nIG11bHRpcGxlIHZhcmlhYmxlc1xuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oZnVuY3Rpb24gKG5ld1Njcm9sbFBvcywgb3B0aW9ucykge1xuXHRcdCAqICBzb21lR2xvYmFsVmFyID0gb3B0aW9ucy5hICsgb3B0aW9ucy5iO1xuXHRcdCAqXHQkKHRoaXMpLmFuaW1hdGUoe3Njcm9sbFRvcDogbmV3U2Nyb2xsUG9zfSk7XG5cdFx0ICogfSk7XG5cdFx0ICogLy8gY2FsbCBhcyB1c3VhbCwgYnV0IHN1cHBseSBhbiBleHRyYSBwYXJhbWV0ZXIgY29udGFpbmluZyBtdWx0aXBsZSBvcHRpb25zXG5cdFx0ICogY29udHJvbGxlci5zY3JvbGxUbygxMDAsIHthOiAxLCBiOiAyfSk7XG5cdFx0ICpcblx0XHQgKiAvLyBkZWZpbmUgYSBuZXcgc2Nyb2xsIGZ1bmN0aW9uIHdpdGggYSBjYWxsYmFjayBzdXBwbGllZCBhcyBhbiBhZGRpdGlvbmFsIHBhcmFtZXRlclxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsVG8oZnVuY3Rpb24gKG5ld1Njcm9sbFBvcywgY2FsbGJhY2spIHtcblx0XHQgKlx0JCh0aGlzKS5hbmltYXRlKHtzY3JvbGxUb3A6IG5ld1Njcm9sbFBvc30sIDQwMCwgXCJzd2luZ1wiLCBjYWxsYmFjayk7XG5cdFx0ICogfSk7XG5cdFx0ICogLy8gY2FsbCBhcyB1c3VhbCwgYnV0IHN1cHBseSBhbiBleHRyYSBwYXJhbWV0ZXIsIHdoaWNoIGlzIHVzZWQgYXMgYSBjYWxsYmFjayBpbiB0aGUgcHJldmlvdXNseSBkZWZpbmVkIGN1c3RvbSBzY3JvbGwgZnVuY3Rpb25cblx0XHQgKiBjb250cm9sbGVyLnNjcm9sbFRvKDEwMCwgZnVuY3Rpb24oKSB7XG5cdFx0ICpcdGNvbnNvbGUubG9nKFwic2Nyb2xsIGhhcyBmaW5pc2hlZC5cIik7XG5cdFx0ICogfSk7XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge21peGVkfSBzY3JvbGxUYXJnZXQgLSBUaGUgc3VwcGxpZWQgYXJndW1lbnQgY2FuIGJlIG9uZSBvZiB0aGVzZSB0eXBlczpcblx0XHQgKiAxLiBgbnVtYmVyYCAtPiBUaGUgY29udGFpbmVyIHdpbGwgc2Nyb2xsIHRvIHRoaXMgbmV3IHNjcm9sbCBvZmZzZXQuXG5cdFx0ICogMi4gYHN0cmluZ2Agb3IgYG9iamVjdGAgLT4gQ2FuIGJlIGEgc2VsZWN0b3Igb3IgYSBET00gb2JqZWN0LiAgXG5cdFx0ICogIFRoZSBjb250YWluZXIgd2lsbCBzY3JvbGwgdG8gdGhlIHBvc2l0aW9uIG9mIHRoaXMgZWxlbWVudC5cblx0XHQgKiAzLiBgU2Nyb2xsTWFnaWMgU2NlbmVgIC0+IFRoZSBjb250YWluZXIgd2lsbCBzY3JvbGwgdG8gdGhlIHN0YXJ0IG9mIHRoaXMgc2NlbmUuXG5cdFx0ICogNC4gYGZ1bmN0aW9uYCAtPiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgdXNlZCBmb3IgZnV0dXJlIHNjcm9sbCBwb3NpdGlvbiBtb2RpZmljYXRpb25zLiAgXG5cdFx0ICogIFRoaXMgcHJvdmlkZXMgYSB3YXkgZm9yIHlvdSB0byBjaGFuZ2UgdGhlIGJlaGF2aW91ciBvZiBzY3JvbGxpbmcgYW5kIGFkZGluZyBuZXcgYmVoYXZpb3VyIGxpa2UgYW5pbWF0aW9uLiBUaGUgZnVuY3Rpb24gcmVjZWl2ZXMgdGhlIG5ldyBzY3JvbGwgcG9zaXRpb24gYXMgYSBwYXJhbWV0ZXIgYW5kIGEgcmVmZXJlbmNlIHRvIHRoZSBjb250YWluZXIgZWxlbWVudCB1c2luZyBgdGhpc2AuICBcblx0XHQgKiAgSXQgbWF5IGFsc28gb3B0aW9uYWxseSByZWNlaXZlIGFuIG9wdGlvbmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVyIChzZWUgYmVsb3cpICBcblx0XHQgKiAgXyoqTk9URToqKiAgXG5cdFx0ICogIEFsbCBvdGhlciBvcHRpb25zIHdpbGwgc3RpbGwgd29yayBhcyBleHBlY3RlZCwgdXNpbmcgdGhlIG5ldyBmdW5jdGlvbiB0byBzY3JvbGwuX1xuXHRcdCAqIEBwYXJhbSB7bWl4ZWR9IFthZGRpdGlvbmFsUGFyYW1ldGVyXSAtIElmIGEgY3VzdG9tIHNjcm9sbCBmdW5jdGlvbiB3YXMgZGVmaW5lZCAoc2VlIGFib3ZlIDQuKSwgeW91IG1heSB3YW50IHRvIHN1cHBseSBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gaXQsIHdoZW4gY2FsbGluZyBpdC4gWW91IGNhbiBkbyB0aGlzIHVzaW5nIHRoaXMgcGFyYW1ldGVyIOKAkyBzZWUgZXhhbXBsZXMgZm9yIGRldGFpbHMuIFBsZWFzZSBub3RlLCB0aGF0IHRoaXMgcGFyYW1ldGVyIHdpbGwgaGF2ZSBubyBlZmZlY3QsIGlmIHlvdSB1c2UgdGhlIGRlZmF1bHQgc2Nyb2xsaW5nIGZ1bmN0aW9uLlxuXHRcdCAqIEByZXR1cm5zIHtDb250cm9sbGVyfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cblx0XHQgKi9cblx0XHR0aGlzLnNjcm9sbFRvID0gZnVuY3Rpb24gKHNjcm9sbFRhcmdldCwgYWRkaXRpb25hbFBhcmFtZXRlcikge1xuXHRcdFx0aWYgKF91dGlsLnR5cGUuTnVtYmVyKHNjcm9sbFRhcmdldCkpIHsgLy8gZXhjZWN1dGVcblx0XHRcdFx0c2V0U2Nyb2xsUG9zLmNhbGwoX29wdGlvbnMuY29udGFpbmVyLCBzY3JvbGxUYXJnZXQsIGFkZGl0aW9uYWxQYXJhbWV0ZXIpO1xuXHRcdFx0fSBlbHNlIGlmIChzY3JvbGxUYXJnZXQgaW5zdGFuY2VvZiBTY3JvbGxNYWdpYy5TY2VuZSkgeyAvLyBzY3JvbGwgdG8gc2NlbmVcblx0XHRcdFx0aWYgKHNjcm9sbFRhcmdldC5jb250cm9sbGVyKCkgPT09IENvbnRyb2xsZXIpIHsgLy8gY2hlY2sgaWYgdGhlIGNvbnRyb2xsZXIgaXMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgc2NlbmVcblx0XHRcdFx0XHRDb250cm9sbGVyLnNjcm9sbFRvKHNjcm9sbFRhcmdldC5zY3JvbGxPZmZzZXQoKSwgYWRkaXRpb25hbFBhcmFtZXRlcik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bG9nKDIsIFwic2Nyb2xsVG8oKTogVGhlIHN1cHBsaWVkIHNjZW5lIGRvZXMgbm90IGJlbG9uZyB0byB0aGlzIGNvbnRyb2xsZXIuIFNjcm9sbCBjYW5jZWxsZWQuXCIsIHNjcm9sbFRhcmdldCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoX3V0aWwudHlwZS5GdW5jdGlvbihzY3JvbGxUYXJnZXQpKSB7IC8vIGFzc2lnbiBuZXcgc2Nyb2xsIGZ1bmN0aW9uXG5cdFx0XHRcdHNldFNjcm9sbFBvcyA9IHNjcm9sbFRhcmdldDtcblx0XHRcdH0gZWxzZSB7IC8vIHNjcm9sbCB0byBlbGVtZW50XG5cdFx0XHRcdHZhciBlbGVtID0gX3V0aWwuZ2V0LmVsZW1lbnRzKHNjcm9sbFRhcmdldClbMF07XG5cdFx0XHRcdGlmIChlbGVtKSB7XG5cdFx0XHRcdFx0Ly8gaWYgcGFyZW50IGlzIHBpbiBzcGFjZXIsIHVzZSBzcGFjZXIgcG9zaXRpb24gaW5zdGVhZCBzbyBjb3JyZWN0IHN0YXJ0IHBvc2l0aW9uIGlzIHJldHVybmVkIGZvciBwaW5uZWQgZWxlbWVudHMuXG5cdFx0XHRcdFx0d2hpbGUgKGVsZW0ucGFyZW50Tm9kZS5oYXNBdHRyaWJ1dGUoUElOX1NQQUNFUl9BVFRSSUJVVEUpKSB7XG5cdFx0XHRcdFx0XHRlbGVtID0gZWxlbS5wYXJlbnROb2RlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhclxuXHRcdFx0XHRcdHBhcmFtID0gX29wdGlvbnMudmVydGljYWwgPyBcInRvcFwiIDogXCJsZWZ0XCIsXG5cdFx0XHRcdFx0XHQvLyB3aGljaCBwYXJhbSBpcyBvZiBpbnRlcmVzdCA/XG5cdFx0XHRcdFx0XHRjb250YWluZXJPZmZzZXQgPSBfdXRpbC5nZXQub2Zmc2V0KF9vcHRpb25zLmNvbnRhaW5lciksXG5cdFx0XHRcdFx0XHQvLyBjb250YWluZXIgcG9zaXRpb24gaXMgbmVlZGVkIGJlY2F1c2UgZWxlbWVudCBvZmZzZXQgaXMgcmV0dXJuZWQgaW4gcmVsYXRpb24gdG8gZG9jdW1lbnQsIG5vdCBpbiByZWxhdGlvbiB0byBjb250YWluZXIuXG5cdFx0XHRcdFx0XHRlbGVtZW50T2Zmc2V0ID0gX3V0aWwuZ2V0Lm9mZnNldChlbGVtKTtcblxuXHRcdFx0XHRcdGlmICghX2lzRG9jdW1lbnQpIHsgLy8gY29udGFpbmVyIGlzIG5vdCB0aGUgZG9jdW1lbnQgcm9vdCwgc28gc3Vic3RyYWN0IHNjcm9sbCBQb3NpdGlvbiB0byBnZXQgY29ycmVjdCB0cmlnZ2VyIGVsZW1lbnQgcG9zaXRpb24gcmVsYXRpdmUgdG8gc2Nyb2xsY29udGVudFxuXHRcdFx0XHRcdFx0Y29udGFpbmVyT2Zmc2V0W3BhcmFtXSAtPSBDb250cm9sbGVyLnNjcm9sbFBvcygpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdENvbnRyb2xsZXIuc2Nyb2xsVG8oZWxlbWVudE9mZnNldFtwYXJhbV0gLSBjb250YWluZXJPZmZzZXRbcGFyYW1dLCBhZGRpdGlvbmFsUGFyYW1ldGVyKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsb2coMiwgXCJzY3JvbGxUbygpOiBUaGUgc3VwcGxpZWQgYXJndW1lbnQgaXMgaW52YWxpZC4gU2Nyb2xsIGNhbmNlbGxlZC5cIiwgc2Nyb2xsVGFyZ2V0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIENvbnRyb2xsZXI7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqICoqR2V0KiogdGhlIGN1cnJlbnQgc2Nyb2xsUG9zaXRpb24gb3IgKipTZXQqKiBhIG5ldyBtZXRob2QgdG8gY2FsY3VsYXRlIGl0LiAgXG5cdFx0ICogLT4gKipHRVQqKjpcblx0XHQgKiBXaGVuIHVzZWQgYXMgYSBnZXR0ZXIgdGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24uICBcblx0XHQgKiBUbyBnZXQgYSBjYWNoZWQgdmFsdWUgdXNlIENvbnRyb2xsZXIuaW5mbyhcInNjcm9sbFBvc1wiKSwgd2hpY2ggd2lsbCBiZSB1cGRhdGVkIGluIHRoZSB1cGRhdGUgY3ljbGUuICBcblx0XHQgKiBGb3IgdmVydGljYWwgY29udHJvbGxlcnMgaXQgd2lsbCByZXR1cm4gdGhlIHRvcCBzY3JvbGwgb2Zmc2V0IGFuZCBmb3IgaG9yaXpvbnRhbCBhcHBsaWNhdGlvbnMgaXQgd2lsbCByZXR1cm4gdGhlIGxlZnQgb2Zmc2V0LlxuXHRcdCAqXG5cdFx0ICogLT4gKipTRVQqKjpcblx0XHQgKiBXaGVuIHVzZWQgYXMgYSBzZXR0ZXIgdGhpcyBtZXRob2QgcHJvZGVzIGEgd2F5IHRvIHBlcm1hbmVudGx5IG92ZXJ3cml0ZSB0aGUgY29udHJvbGxlcidzIHNjcm9sbCBwb3NpdGlvbiBjYWxjdWxhdGlvbi4gIFxuXHRcdCAqIEEgdHlwaWNhbCB1c2VjYXNlIGlzIHdoZW4gdGhlIHNjcm9sbCBwb3NpdGlvbiBpcyBub3QgcmVmbGVjdGVkIGJ5IHRoZSBjb250YWluZXJzIHNjcm9sbFRvcCBvciBzY3JvbGxMZWZ0IHZhbHVlcywgYnV0IGZvciBleGFtcGxlIGJ5IHRoZSBpbm5lciBvZmZzZXQgb2YgYSBjaGlsZCBjb250YWluZXIuICBcblx0XHQgKiBNb3ZpbmcgYSBjaGlsZCBjb250YWluZXIgaW5zaWRlIGEgcGFyZW50IGlzIGEgY29tbW9ubHkgdXNlZCBtZXRob2QgZm9yIHNldmVyYWwgc2Nyb2xsaW5nIGZyYW1ld29ya3MsIGluY2x1ZGluZyBpU2Nyb2xsLiAgXG5cdFx0ICogQnkgcHJvdmlkaW5nIGFuIGFsdGVybmF0ZSBjYWxjdWxhdGlvbiBmdW5jdGlvbiB5b3UgY2FuIG1ha2Ugc3VyZSBTY3JvbGxNYWdpYyByZWNlaXZlcyB0aGUgY29ycmVjdCBzY3JvbGwgcG9zaXRpb24uICBcblx0XHQgKiBQbGVhc2UgYWxzbyBiZWFyIGluIG1pbmQgdGhhdCB5b3VyIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4geSB2YWx1ZXMgZm9yIHZlcnRpY2FsIHNjcm9sbHMgYW4geCBmb3IgaG9yaXpvbnRhbHMuXG5cdFx0ICpcblx0XHQgKiBUbyBjaGFuZ2UgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIHBsZWFzZSB1c2UgYENvbnRyb2xsZXIuc2Nyb2xsVG8oKWAuXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgc2Nyb2xsIFBvc2l0aW9uXG5cdFx0ICogdmFyIHNjcm9sbFBvcyA9IGNvbnRyb2xsZXIuc2Nyb2xsUG9zKCk7XG5cdFx0ICpcblx0XHQgKiAvLyBzZXQgYSBuZXcgc2Nyb2xsIHBvc2l0aW9uIGNhbGN1bGF0aW9uIG1ldGhvZFxuXHRcdCAqIGNvbnRyb2xsZXIuc2Nyb2xsUG9zKGZ1bmN0aW9uICgpIHtcblx0XHQgKlx0cmV0dXJuIHRoaXMuaW5mbyhcInZlcnRpY2FsXCIpID8gLW15Y2hpbGRjb250YWluZXIueSA6IC1teWNoaWxkY29udGFpbmVyLnhcblx0XHQgKiB9KTtcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IFtzY3JvbGxQb3NNZXRob2RdIC0gVGhlIGZ1bmN0aW9uIHRvIGJlIHVzZWQgZm9yIHRoZSBzY3JvbGwgcG9zaXRpb24gY2FsY3VsYXRpb24gb2YgdGhlIGNvbnRhaW5lci5cblx0XHQgKiBAcmV0dXJucyB7KG51bWJlcnxDb250cm9sbGVyKX0gQ3VycmVudCBzY3JvbGwgcG9zaXRpb24gb3IgcGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXG5cdFx0ICovXG5cdFx0dGhpcy5zY3JvbGxQb3MgPSBmdW5jdGlvbiAoc2Nyb2xsUG9zTWV0aG9kKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHsgLy8gZ2V0XG5cdFx0XHRcdHJldHVybiBnZXRTY3JvbGxQb3MuY2FsbChDb250cm9sbGVyKTtcblx0XHRcdH0gZWxzZSB7IC8vIHNldFxuXHRcdFx0XHRpZiAoX3V0aWwudHlwZS5GdW5jdGlvbihzY3JvbGxQb3NNZXRob2QpKSB7XG5cdFx0XHRcdFx0Z2V0U2Nyb2xsUG9zID0gc2Nyb2xsUG9zTWV0aG9kO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxvZygyLCBcIlByb3ZpZGVkIHZhbHVlIGZvciBtZXRob2QgJ3Njcm9sbFBvcycgaXMgbm90IGEgZnVuY3Rpb24uIFRvIGNoYW5nZSB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gdXNlICdzY3JvbGxUbygpJy5cIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBDb250cm9sbGVyO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiAqKkdldCoqIGFsbCBpbmZvcyBvciBvbmUgaW4gcGFydGljdWxhciBhYm91dCB0aGUgY29udHJvbGxlci5cblx0XHQgKiBAcHVibGljXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiAvLyByZXR1cm5zIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiAobnVtYmVyKVxuXHRcdCAqIHZhciBzY3JvbGxQb3MgPSBjb250cm9sbGVyLmluZm8oXCJzY3JvbGxQb3NcIik7XG5cdFx0ICpcblx0XHQgKiAvLyByZXR1cm5zIGFsbCBpbmZvcyBhcyBhbiBvYmplY3Rcblx0XHQgKiB2YXIgaW5mb3MgPSBjb250cm9sbGVyLmluZm8oKTtcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbYWJvdXRdIC0gSWYgcGFzc2VkIG9ubHkgdGhpcyBpbmZvIHdpbGwgYmUgcmV0dXJuZWQgaW5zdGVhZCBvZiBhbiBvYmplY3QgY29udGFpbmluZyBhbGwuICBcblx0XHQgVmFsaWQgb3B0aW9ucyBhcmU6XG5cdFx0ICoqIGBcInNpemVcImAgPT4gdGhlIGN1cnJlbnQgdmlld3BvcnQgc2l6ZSBvZiB0aGUgY29udGFpbmVyXG5cdFx0ICoqIGBcInZlcnRpY2FsXCJgID0+IHRydWUgaWYgdmVydGljYWwgc2Nyb2xsaW5nLCBvdGhlcndpc2UgZmFsc2Vcblx0XHQgKiogYFwic2Nyb2xsUG9zXCJgID0+IHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuXHRcdCAqKiBgXCJzY3JvbGxEaXJlY3Rpb25cImAgPT4gdGhlIGxhc3Qga25vd24gZGlyZWN0aW9uIG9mIHRoZSBzY3JvbGxcblx0XHQgKiogYFwiY29udGFpbmVyXCJgID0+IHRoZSBjb250YWluZXIgZWxlbWVudFxuXHRcdCAqKiBgXCJpc0RvY3VtZW50XCJgID0+IHRydWUgaWYgY29udGFpbmVyIGVsZW1lbnQgaXMgdGhlIGRvY3VtZW50LlxuXHRcdCAqIEByZXR1cm5zIHsobWl4ZWR8b2JqZWN0KX0gVGhlIHJlcXVlc3RlZCBpbmZvKHMpLlxuXHRcdCAqL1xuXHRcdHRoaXMuaW5mbyA9IGZ1bmN0aW9uIChhYm91dCkge1xuXHRcdFx0dmFyIHZhbHVlcyA9IHtcblx0XHRcdFx0c2l6ZTogX3ZpZXdQb3J0U2l6ZSxcblx0XHRcdFx0Ly8gY29udGFpbnMgaGVpZ2h0IG9yIHdpZHRoIChpbiByZWdhcmQgdG8gb3JpZW50YXRpb24pO1xuXHRcdFx0XHR2ZXJ0aWNhbDogX29wdGlvbnMudmVydGljYWwsXG5cdFx0XHRcdHNjcm9sbFBvczogX3Njcm9sbFBvcyxcblx0XHRcdFx0c2Nyb2xsRGlyZWN0aW9uOiBfc2Nyb2xsRGlyZWN0aW9uLFxuXHRcdFx0XHRjb250YWluZXI6IF9vcHRpb25zLmNvbnRhaW5lcixcblx0XHRcdFx0aXNEb2N1bWVudDogX2lzRG9jdW1lbnRcblx0XHRcdH07XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHsgLy8gZ2V0IGFsbCBhcyBhbiBvYmplY3Rcblx0XHRcdFx0cmV0dXJuIHZhbHVlcztcblx0XHRcdH0gZWxzZSBpZiAodmFsdWVzW2Fib3V0XSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZXNbYWJvdXRdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bG9nKDEsIFwiRVJST1I6IG9wdGlvbiBcXFwiXCIgKyBhYm91dCArIFwiXFxcIiBpcyBub3QgYXZhaWxhYmxlXCIpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgY3VycmVudCBsb2dsZXZlbCBvcHRpb24gdmFsdWUuXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgdmFsdWVcblx0XHQgKiB2YXIgbG9nbGV2ZWwgPSBjb250cm9sbGVyLmxvZ2xldmVsKCk7XG5cdFx0ICpcblx0XHQgKiAvLyBzZXQgYSBuZXcgdmFsdWVcblx0XHQgKiBjb250cm9sbGVyLmxvZ2xldmVsKDMpO1xuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IFtuZXdMb2dsZXZlbF0gLSBUaGUgbmV3IGxvZ2xldmVsIHNldHRpbmcgb2YgdGhlIENvbnRyb2xsZXIuIGBbMC0zXWBcblx0XHQgKiBAcmV0dXJucyB7KG51bWJlcnxDb250cm9sbGVyKX0gQ3VycmVudCBsb2dsZXZlbCBvciBwYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cblx0XHQgKi9cblx0XHR0aGlzLmxvZ2xldmVsID0gZnVuY3Rpb24gKG5ld0xvZ2xldmVsKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHsgLy8gZ2V0XG5cdFx0XHRcdHJldHVybiBfb3B0aW9ucy5sb2dsZXZlbDtcblx0XHRcdH0gZWxzZSBpZiAoX29wdGlvbnMubG9nbGV2ZWwgIT0gbmV3TG9nbGV2ZWwpIHsgLy8gc2V0XG5cdFx0XHRcdF9vcHRpb25zLmxvZ2xldmVsID0gbmV3TG9nbGV2ZWw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSBjdXJyZW50IGVuYWJsZWQgc3RhdGUgb2YgdGhlIGNvbnRyb2xsZXIuICBcblx0XHQgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGRpc2FibGUgYWxsIFNjZW5lcyBjb25uZWN0ZWQgdG8gdGhlIGNvbnRyb2xsZXIgd2l0aG91dCBkZXN0cm95aW5nIG9yIHJlbW92aW5nIHRoZW0uXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgdmFsdWVcblx0XHQgKiB2YXIgZW5hYmxlZCA9IGNvbnRyb2xsZXIuZW5hYmxlZCgpO1xuXHRcdCAqXG5cdFx0ICogLy8gZGlzYWJsZSB0aGUgY29udHJvbGxlclxuXHRcdCAqIGNvbnRyb2xsZXIuZW5hYmxlZChmYWxzZSk7XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtuZXdTdGF0ZV0gLSBUaGUgbmV3IGVuYWJsZWQgc3RhdGUgb2YgdGhlIGNvbnRyb2xsZXIgYHRydWVgIG9yIGBmYWxzZWAuXG5cdFx0ICogQHJldHVybnMgeyhib29sZWFufENvbnRyb2xsZXIpfSBDdXJyZW50IGVuYWJsZWQgc3RhdGUgb3IgcGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXG5cdFx0ICovXG5cdFx0dGhpcy5lbmFibGVkID0gZnVuY3Rpb24gKG5ld1N0YXRlKSB7XG5cdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHsgLy8gZ2V0XG5cdFx0XHRcdHJldHVybiBfZW5hYmxlZDtcblx0XHRcdH0gZWxzZSBpZiAoX2VuYWJsZWQgIT0gbmV3U3RhdGUpIHsgLy8gc2V0XG5cdFx0XHRcdF9lbmFibGVkID0gISEgbmV3U3RhdGU7XG5cdFx0XHRcdENvbnRyb2xsZXIudXBkYXRlU2NlbmUoX3NjZW5lT2JqZWN0cywgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gQ29udHJvbGxlcjtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogRGVzdHJveSB0aGUgQ29udHJvbGxlciwgYWxsIFNjZW5lcyBhbmQgZXZlcnl0aGluZy5cblx0XHQgKiBAcHVibGljXG5cdFx0ICpcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIC8vIHdpdGhvdXQgcmVzZXR0aW5nIHRoZSBzY2VuZXNcblx0XHQgKiBjb250cm9sbGVyID0gY29udHJvbGxlci5kZXN0cm95KCk7XG5cdFx0ICpcblx0XHQgKiAvLyB3aXRoIHNjZW5lIHJlc2V0XG5cdFx0ICogY29udHJvbGxlciA9IGNvbnRyb2xsZXIuZGVzdHJveSh0cnVlKTtcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc2V0U2NlbmVzPWZhbHNlXSAtIElmIGB0cnVlYCB0aGUgcGlucyBhbmQgdHdlZW5zIChpZiBleGlzdGVudCkgb2YgYWxsIHNjZW5lcyB3aWxsIGJlIHJlc2V0LlxuXHRcdCAqIEByZXR1cm5zIHtudWxsfSBOdWxsIHRvIHVuc2V0IGhhbmRsZXIgdmFyaWFibGVzLlxuXHRcdCAqL1xuXHRcdHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uIChyZXNldFNjZW5lcykge1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dChfcmVmcmVzaFRpbWVvdXQpO1xuXHRcdFx0dmFyIGkgPSBfc2NlbmVPYmplY3RzLmxlbmd0aDtcblx0XHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdFx0X3NjZW5lT2JqZWN0c1tpXS5kZXN0cm95KHJlc2V0U2NlbmVzKTtcblx0XHRcdH1cblx0XHRcdF9vcHRpb25zLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uQ2hhbmdlKTtcblx0XHRcdF9vcHRpb25zLmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uQ2hhbmdlKTtcblx0XHRcdF91dGlsLmNBRihfdXBkYXRlVGltZW91dCk7XG5cdFx0XHRsb2coMywgXCJkZXN0cm95ZWQgXCIgKyBOQU1FU1BBQ0UgKyBcIiAocmVzZXQ6IFwiICsgKHJlc2V0U2NlbmVzID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIpICsgXCIpXCIpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fTtcblxuXHRcdC8vIElOSVRcblx0XHRjb25zdHJ1Y3QoKTtcblx0XHRyZXR1cm4gQ29udHJvbGxlcjtcblx0fTtcblxuXHQvLyBzdG9yZSBwYWdld2lkZSBjb250cm9sbGVyIG9wdGlvbnNcblx0dmFyIENPTlRST0xMRVJfT1BUSU9OUyA9IHtcblx0XHRkZWZhdWx0czoge1xuXHRcdFx0Y29udGFpbmVyOiB3aW5kb3csXG5cdFx0XHR2ZXJ0aWNhbDogdHJ1ZSxcblx0XHRcdGdsb2JhbFNjZW5lT3B0aW9uczoge30sXG5cdFx0XHRsb2dsZXZlbDogMixcblx0XHRcdHJlZnJlc2hJbnRlcnZhbDogMTAwXG5cdFx0fVxuXHR9O1xuLypcbiAqIG1ldGhvZCB1c2VkIHRvIGFkZCBhbiBvcHRpb24gdG8gU2Nyb2xsTWFnaWMgU2NlbmVzLlxuICovXG5cdFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIuYWRkT3B0aW9uID0gZnVuY3Rpb24gKG5hbWUsIGRlZmF1bHRWYWx1ZSkge1xuXHRcdENPTlRST0xMRVJfT1BUSU9OUy5kZWZhdWx0c1tuYW1lXSA9IGRlZmF1bHRWYWx1ZTtcblx0fTtcblx0Ly8gaW5zdGFuY2UgZXh0ZW5zaW9uIGZ1bmN0aW9uIGZvciBwbHVnaW5zXG5cdFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIuZXh0ZW5kID0gZnVuY3Rpb24gKGV4dGVuc2lvbikge1xuXHRcdHZhciBvbGRDbGFzcyA9IHRoaXM7XG5cdFx0U2Nyb2xsTWFnaWMuQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdG9sZENsYXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHR0aGlzLiRzdXBlciA9IF91dGlsLmV4dGVuZCh7fSwgdGhpcyk7IC8vIGNvcHkgcGFyZW50IHN0YXRlXG5cdFx0XHRyZXR1cm4gZXh0ZW5zaW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcblx0XHR9O1xuXHRcdF91dGlsLmV4dGVuZChTY3JvbGxNYWdpYy5Db250cm9sbGVyLCBvbGRDbGFzcyk7IC8vIGNvcHkgcHJvcGVydGllc1xuXHRcdFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIucHJvdG90eXBlID0gb2xkQ2xhc3MucHJvdG90eXBlOyAvLyBjb3B5IHByb3RvdHlwZVxuXHRcdFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2Nyb2xsTWFnaWMuQ29udHJvbGxlcjsgLy8gcmVzdG9yZSBjb25zdHJ1Y3RvclxuXHR9O1xuXG5cblx0LyoqXG5cdCAqIEEgU2NlbmUgZGVmaW5lcyB3aGVyZSB0aGUgY29udHJvbGxlciBzaG91bGQgcmVhY3QgYW5kIGhvdy5cblx0ICpcblx0ICogQGNsYXNzXG5cdCAqXG5cdCAqIEBleGFtcGxlXG5cdCAqIC8vIGNyZWF0ZSBhIHN0YW5kYXJkIHNjZW5lIGFuZCBhZGQgaXQgdG8gYSBjb250cm9sbGVyXG5cdCAqIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSgpXG5cdCAqXHRcdC5hZGRUbyhjb250cm9sbGVyKTtcblx0ICpcblx0ICogLy8gY3JlYXRlIGEgc2NlbmUgd2l0aCBjdXN0b20gb3B0aW9ucyBhbmQgYXNzaWduIGEgaGFuZGxlciB0byBpdC5cblx0ICogdmFyIHNjZW5lID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcblx0ICogXHRcdGR1cmF0aW9uOiAxMDAsXG5cdCAqXHRcdG9mZnNldDogMjAwLFxuXHQgKlx0XHR0cmlnZ2VySG9vazogXCJvbkVudGVyXCIsXG5cdCAqXHRcdHJldmVyc2U6IGZhbHNlXG5cdCAqIH0pO1xuXHQgKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gT3B0aW9ucyBmb3IgdGhlIFNjZW5lLiBUaGUgb3B0aW9ucyBjYW4gYmUgdXBkYXRlZCBhdCBhbnkgdGltZS4gIFxuXHQgSW5zdGVhZCBvZiBzZXR0aW5nIHRoZSBvcHRpb25zIGZvciBlYWNoIHNjZW5lIGluZGl2aWR1YWxseSB5b3UgY2FuIGFsc28gc2V0IHRoZW0gZ2xvYmFsbHkgaW4gdGhlIGNvbnRyb2xsZXIgYXMgdGhlIGNvbnRyb2xsZXJzIGBnbG9iYWxTY2VuZU9wdGlvbnNgIG9wdGlvbi4gVGhlIG9iamVjdCBhY2NlcHRzIHRoZSBzYW1lIHByb3BlcnRpZXMgYXMgdGhlIG9uZXMgYmVsb3cuICBcblx0IFdoZW4gYSBzY2VuZSBpcyBhZGRlZCB0byB0aGUgY29udHJvbGxlciB0aGUgb3B0aW9ucyBkZWZpbmVkIHVzaW5nIHRoZSBTY2VuZSBjb25zdHJ1Y3RvciB3aWxsIGJlIG92ZXJ3cml0dGVuIGJ5IHRob3NlIHNldCBpbiBgZ2xvYmFsU2NlbmVPcHRpb25zYC5cblx0ICogQHBhcmFtIHsobnVtYmVyfGZ1bmN0aW9uKX0gW29wdGlvbnMuZHVyYXRpb249MF0gLSBUaGUgZHVyYXRpb24gb2YgdGhlIHNjZW5lLiBcblx0IElmIGAwYCB0d2VlbnMgd2lsbCBhdXRvLXBsYXkgd2hlbiByZWFjaGluZyB0aGUgc2NlbmUgc3RhcnQgcG9pbnQsIHBpbnMgd2lsbCBiZSBwaW5uZWQgaW5kZWZpbmV0bHkgc3RhcnRpbmcgYXQgdGhlIHN0YXJ0IHBvc2l0aW9uLiAgXG5cdCBBIGZ1bmN0aW9uIHJldHVuaW5nIHRoZSBkdXJhdGlvbiB2YWx1ZSBpcyBhbHNvIHN1cHBvcnRlZC4gUGxlYXNlIHNlZSBgU2NlbmUuZHVyYXRpb24oKWAgZm9yIGRldGFpbHMuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5vZmZzZXQ9MF0gLSBPZmZzZXQgVmFsdWUgZm9yIHRoZSBUcmlnZ2VyIFBvc2l0aW9uLiBJZiBubyB0cmlnZ2VyRWxlbWVudCBpcyBkZWZpbmVkIHRoaXMgd2lsbCBiZSB0aGUgc2Nyb2xsIGRpc3RhbmNlIGZyb20gdGhlIHN0YXJ0IG9mIHRoZSBwYWdlLCBhZnRlciB3aGljaCB0aGUgc2NlbmUgd2lsbCBzdGFydC5cblx0ICogQHBhcmFtIHsoc3RyaW5nfG9iamVjdCl9IFtvcHRpb25zLnRyaWdnZXJFbGVtZW50PW51bGxdIC0gU2VsZWN0b3Igb3IgRE9NIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHN0YXJ0IG9mIHRoZSBzY2VuZS4gSWYgdW5kZWZpbmVkIHRoZSBzY2VuZSB3aWxsIHN0YXJ0IHJpZ2h0IGF0IHRoZSBzdGFydCBvZiB0aGUgcGFnZSAodW5sZXNzIGFuIG9mZnNldCBpcyBzZXQpLlxuXHQgKiBAcGFyYW0geyhudW1iZXJ8c3RyaW5nKX0gW29wdGlvbnMudHJpZ2dlckhvb2s9XCJvbkNlbnRlclwiXSAtIENhbiBiZSBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEgZGVmaW5pbmcgdGhlIHBvc2l0aW9uIG9mIHRoZSB0cmlnZ2VyIEhvb2sgaW4gcmVsYXRpb24gdG8gdGhlIHZpZXdwb3J0LiAgXG5cdCBDYW4gYWxzbyBiZSBkZWZpbmVkIHVzaW5nIGEgc3RyaW5nOlxuXHQgKiogYFwib25FbnRlclwiYCA9PiBgMWBcblx0ICoqIGBcIm9uQ2VudGVyXCJgID0+IGAwLjVgXG5cdCAqKiBgXCJvbkxlYXZlXCJgID0+IGAwYFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnJldmVyc2U9dHJ1ZV0gLSBTaG91bGQgdGhlIHNjZW5lIHJldmVyc2UsIHdoZW4gc2Nyb2xsaW5nIHVwP1xuXHQgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubG9nbGV2ZWw9Ml0gLSBMb2dsZXZlbCBmb3IgZGVidWdnaW5nLiBOb3RlIHRoYXQgbG9nZ2luZyBpcyBkaXNhYmxlZCBpbiB0aGUgbWluaWZpZWQgdmVyc2lvbiBvZiBTY3JvbGxNYWdpYy5cblx0ICoqIGAwYCA9PiBzaWxlbnRcblx0ICoqIGAxYCA9PiBlcnJvcnNcblx0ICoqIGAyYCA9PiBlcnJvcnMsIHdhcm5pbmdzXG5cdCAqKiBgM2AgPT4gZXJyb3JzLCB3YXJuaW5ncywgZGVidWdpbmZvXG5cdCAqIFxuXHQgKi9cblx0U2Nyb2xsTWFnaWMuU2NlbmUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4vKlxuXHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdCAqIHNldHRpbmdzXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICovXG5cblx0XHR2YXJcblx0XHROQU1FU1BBQ0UgPSAnU2Nyb2xsTWFnaWMuU2NlbmUnLFxuXHRcdFx0U0NFTkVfU1RBVEVfQkVGT1JFID0gJ0JFRk9SRScsXG5cdFx0XHRTQ0VORV9TVEFURV9EVVJJTkcgPSAnRFVSSU5HJyxcblx0XHRcdFNDRU5FX1NUQVRFX0FGVEVSID0gJ0FGVEVSJyxcblx0XHRcdERFRkFVTFRfT1BUSU9OUyA9IFNDRU5FX09QVElPTlMuZGVmYXVsdHM7XG5cbi8qXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICogcHJpdmF0ZSB2YXJzXG5cdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0ICovXG5cblx0XHR2YXJcblx0XHRTY2VuZSA9IHRoaXMsXG5cdFx0XHRfb3B0aW9ucyA9IF91dGlsLmV4dGVuZCh7fSwgREVGQVVMVF9PUFRJT05TLCBvcHRpb25zKSxcblx0XHRcdF9zdGF0ZSA9IFNDRU5FX1NUQVRFX0JFRk9SRSxcblx0XHRcdF9wcm9ncmVzcyA9IDAsXG5cdFx0XHRfc2Nyb2xsT2Zmc2V0ID0ge1xuXHRcdFx0XHRzdGFydDogMCxcblx0XHRcdFx0ZW5kOiAwXG5cdFx0XHR9LFxuXHRcdFx0Ly8gcmVmbGVjdHMgdGhlIGNvbnRyb2xsZXJzJ3Mgc2Nyb2xsIHBvc2l0aW9uIGZvciB0aGUgc3RhcnQgYW5kIGVuZCBvZiB0aGUgc2NlbmUgcmVzcGVjdGl2ZWx5XG5cdFx0XHRfdHJpZ2dlclBvcyA9IDAsXG5cdFx0XHRfZW5hYmxlZCA9IHRydWUsXG5cdFx0XHRfZHVyYXRpb25VcGRhdGVNZXRob2QsIF9jb250cm9sbGVyO1xuXG5cdFx0LyoqXG5cdFx0ICogSW50ZXJuYWwgY29uc3RydWN0b3IgZnVuY3Rpb24gb2YgdGhlIFNjcm9sbE1hZ2ljIFNjZW5lXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR2YXIgY29uc3RydWN0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIF9vcHRpb25zKSB7IC8vIGNoZWNrIHN1cHBsaWVkIG9wdGlvbnNcblx0XHRcdFx0aWYgKCFERUZBVUxUX09QVElPTlMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRcdGxvZygyLCBcIldBUk5JTkc6IFVua25vd24gb3B0aW9uIFxcXCJcIiArIGtleSArIFwiXFxcIlwiKTtcblx0XHRcdFx0XHRkZWxldGUgX29wdGlvbnNba2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gYWRkIGdldHRlcnMvc2V0dGVycyBmb3IgYWxsIHBvc3NpYmxlIG9wdGlvbnNcblx0XHRcdGZvciAodmFyIG9wdGlvbk5hbWUgaW4gREVGQVVMVF9PUFRJT05TKSB7XG5cdFx0XHRcdGFkZFNjZW5lT3B0aW9uKG9wdGlvbk5hbWUpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gdmFsaWRhdGUgYWxsIG9wdGlvbnNcblx0XHRcdHZhbGlkYXRlT3B0aW9uKCk7XG5cdFx0fTtcblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV2ZW50IE1hbmFnZW1lbnRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5cdFx0dmFyIF9saXN0ZW5lcnMgPSB7fTtcblx0XHQvKipcblx0XHQgKiBTY2VuZSBzdGFydCBldmVudC4gIFxuXHRcdCAqIEZpcmVzIHdoZW5ldmVyIHRoZSBzY3JvbGwgcG9zaXRpb24gaXRzIHRoZSBzdGFydGluZyBwb2ludCBvZiB0aGUgc2NlbmUuICBcblx0XHQgKiBJdCB3aWxsIGFsc28gZmlyZSB3aGVuIHNjcm9sbGluZyBiYWNrIHVwIGdvaW5nIG92ZXIgdGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSBzY2VuZS4gSWYgeW91IHdhbnQgc29tZXRoaW5nIHRvIGhhcHBlbiBvbmx5IHdoZW4gc2Nyb2xsaW5nIGRvd24vcmlnaHQsIHVzZSB0aGUgc2Nyb2xsRGlyZWN0aW9uIHBhcmFtZXRlciBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLlxuXHRcdCAqXG5cdFx0ICogRm9yIGRldGFpbHMgb24gdGhpcyBldmVudCBhbmQgdGhlIG9yZGVyIGluIHdoaWNoIGl0IGlzIGZpcmVkLCBwbGVhc2UgcmV2aWV3IHRoZSB7QGxpbmsgU2NlbmUucHJvZ3Jlc3N9IG1ldGhvZC5cblx0XHQgKlxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNzdGFydFxuXHRcdCAqXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiBzY2VuZS5vbihcInN0YXJ0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJIaXQgc3RhcnQgcG9pbnQgb2Ygc2NlbmUuXCIpO1xuXHRcdCAqIH0pO1xuXHRcdCAqXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XG5cdFx0ICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LnByb2dyZXNzIC0gUmVmbGVjdHMgdGhlIGN1cnJlbnQgcHJvZ3Jlc3Mgb2YgdGhlIHNjZW5lXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnN0YXRlIC0gVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNjZW5lIGBcIkJFRk9SRVwiYCBvciBgXCJEVVJJTkdcImBcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc2Nyb2xsRGlyZWN0aW9uIC0gSW5kaWNhdGVzIHdoaWNoIHdheSB3ZSBhcmUgc2Nyb2xsaW5nIGBcIlBBVVNFRFwiYCwgYFwiRk9SV0FSRFwiYCBvciBgXCJSRVZFUlNFXCJgXG5cdFx0ICovXG5cdFx0LyoqXG5cdFx0ICogU2NlbmUgZW5kIGV2ZW50LiAgXG5cdFx0ICogRmlyZXMgd2hlbmV2ZXIgdGhlIHNjcm9sbCBwb3NpdGlvbiBpdHMgdGhlIGVuZGluZyBwb2ludCBvZiB0aGUgc2NlbmUuICBcblx0XHQgKiBJdCB3aWxsIGFsc28gZmlyZSB3aGVuIHNjcm9sbGluZyBiYWNrIHVwIGZyb20gYWZ0ZXIgdGhlIHNjZW5lIGFuZCBnb2luZyBvdmVyIGl0cyBlbmQgcG9zaXRpb24uIElmIHlvdSB3YW50IHNvbWV0aGluZyB0byBoYXBwZW4gb25seSB3aGVuIHNjcm9sbGluZyBkb3duL3JpZ2h0LCB1c2UgdGhlIHNjcm9sbERpcmVjdGlvbiBwYXJhbWV0ZXIgcGFzc2VkIHRvIHRoZSBjYWxsYmFjay5cblx0XHQgKlxuXHRcdCAqIEZvciBkZXRhaWxzIG9uIHRoaXMgZXZlbnQgYW5kIHRoZSBvcmRlciBpbiB3aGljaCBpdCBpcyBmaXJlZCwgcGxlYXNlIHJldmlldyB0aGUge0BsaW5rIFNjZW5lLnByb2dyZXNzfSBtZXRob2QuXG5cdFx0ICpcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjZW5kXG5cdFx0ICpcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIHNjZW5lLm9uKFwiZW5kXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJIaXQgZW5kIHBvaW50IG9mIHNjZW5lLlwiKTtcblx0XHQgKiB9KTtcblx0XHQgKlxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxuXHRcdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5wcm9ncmVzcyAtIFJlZmxlY3RzIHRoZSBjdXJyZW50IHByb2dyZXNzIG9mIHRoZSBzY2VuZVxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zdGF0ZSAtIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBzY2VuZSBgXCJEVVJJTkdcImAgb3IgYFwiQUZURVJcImBcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc2Nyb2xsRGlyZWN0aW9uIC0gSW5kaWNhdGVzIHdoaWNoIHdheSB3ZSBhcmUgc2Nyb2xsaW5nIGBcIlBBVVNFRFwiYCwgYFwiRk9SV0FSRFwiYCBvciBgXCJSRVZFUlNFXCJgXG5cdFx0ICovXG5cdFx0LyoqXG5cdFx0ICogU2NlbmUgZW50ZXIgZXZlbnQuICBcblx0XHQgKiBGaXJlcyB3aGVuZXZlciB0aGUgc2NlbmUgZW50ZXJzIHRoZSBcIkRVUklOR1wiIHN0YXRlLiAgXG5cdFx0ICogS2VlcCBpbiBtaW5kIHRoYXQgaXQgZG9lc24ndCBtYXR0ZXIgaWYgdGhlIHNjZW5lIHBsYXlzIGZvcndhcmQgb3IgYmFja3dhcmQ6IFRoaXMgZXZlbnQgYWx3YXlzIGZpcmVzIHdoZW4gdGhlIHNjZW5lIGVudGVycyBpdHMgYWN0aXZlIHNjcm9sbCB0aW1lZnJhbWUsIHJlZ2FyZGxlc3Mgb2YgdGhlIHNjcm9sbC1kaXJlY3Rpb24uXG5cdFx0ICpcblx0XHQgKiBGb3IgZGV0YWlscyBvbiB0aGlzIGV2ZW50IGFuZCB0aGUgb3JkZXIgaW4gd2hpY2ggaXQgaXMgZmlyZWQsIHBsZWFzZSByZXZpZXcgdGhlIHtAbGluayBTY2VuZS5wcm9ncmVzc30gbWV0aG9kLlxuXHRcdCAqXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI2VudGVyXG5cdFx0ICpcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIHNjZW5lLm9uKFwiZW50ZXJcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ICogXHRjb25zb2xlLmxvZyhcIlNjZW5lIGVudGVyZWQuXCIpO1xuXHRcdCAqIH0pO1xuXHRcdCAqXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XG5cdFx0ICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LnByb2dyZXNzIC0gUmVmbGVjdHMgdGhlIGN1cnJlbnQgcHJvZ3Jlc3Mgb2YgdGhlIHNjZW5lXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnN0YXRlIC0gVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNjZW5lIC0gYWx3YXlzIGBcIkRVUklOR1wiYFxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zY3JvbGxEaXJlY3Rpb24gLSBJbmRpY2F0ZXMgd2hpY2ggd2F5IHdlIGFyZSBzY3JvbGxpbmcgYFwiUEFVU0VEXCJgLCBgXCJGT1JXQVJEXCJgIG9yIGBcIlJFVkVSU0VcImBcblx0XHQgKi9cblx0XHQvKipcblx0XHQgKiBTY2VuZSBsZWF2ZSBldmVudC4gIFxuXHRcdCAqIEZpcmVzIHdoZW5ldmVyIHRoZSBzY2VuZSdzIHN0YXRlIGdvZXMgZnJvbSBcIkRVUklOR1wiIHRvIGVpdGhlciBcIkJFRk9SRVwiIG9yIFwiQUZURVJcIi4gIFxuXHRcdCAqIEtlZXAgaW4gbWluZCB0aGF0IGl0IGRvZXNuJ3QgbWF0dGVyIGlmIHRoZSBzY2VuZSBwbGF5cyBmb3J3YXJkIG9yIGJhY2t3YXJkOiBUaGlzIGV2ZW50IGFsd2F5cyBmaXJlcyB3aGVuIHRoZSBzY2VuZSBsZWF2ZXMgaXRzIGFjdGl2ZSBzY3JvbGwgdGltZWZyYW1lLCByZWdhcmRsZXNzIG9mIHRoZSBzY3JvbGwtZGlyZWN0aW9uLlxuXHRcdCAqXG5cdFx0ICogRm9yIGRldGFpbHMgb24gdGhpcyBldmVudCBhbmQgdGhlIG9yZGVyIGluIHdoaWNoIGl0IGlzIGZpcmVkLCBwbGVhc2UgcmV2aWV3IHRoZSB7QGxpbmsgU2NlbmUucHJvZ3Jlc3N9IG1ldGhvZC5cblx0XHQgKlxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNsZWF2ZVxuXHRcdCAqXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiBzY2VuZS5vbihcImxlYXZlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJTY2VuZSBsZWZ0LlwiKTtcblx0XHQgKiB9KTtcblx0XHQgKlxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxuXHRcdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBldmVudC5wcm9ncmVzcyAtIFJlZmxlY3RzIHRoZSBjdXJyZW50IHByb2dyZXNzIG9mIHRoZSBzY2VuZVxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5zdGF0ZSAtIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBzY2VuZSBgXCJCRUZPUkVcImAgb3IgYFwiQUZURVJcImBcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc2Nyb2xsRGlyZWN0aW9uIC0gSW5kaWNhdGVzIHdoaWNoIHdheSB3ZSBhcmUgc2Nyb2xsaW5nIGBcIlBBVVNFRFwiYCwgYFwiRk9SV0FSRFwiYCBvciBgXCJSRVZFUlNFXCJgXG5cdFx0ICovXG5cdFx0LyoqXG5cdFx0ICogU2NlbmUgdXBkYXRlIGV2ZW50LiAgXG5cdFx0ICogRmlyZXMgd2hlbmV2ZXIgdGhlIHNjZW5lIGlzIHVwZGF0ZWQgKGJ1dCBub3QgbmVjZXNzYXJpbHkgY2hhbmdlcyB0aGUgcHJvZ3Jlc3MpLlxuXHRcdCAqXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI3VwZGF0ZVxuXHRcdCAqXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiBzY2VuZS5vbihcInVwZGF0ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHQgKiBcdGNvbnNvbGUubG9nKFwiU2NlbmUgdXBkYXRlZC5cIik7XG5cdFx0ICogfSk7XG5cdFx0ICpcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcblx0XHQgKiBAcHJvcGVydHkge251bWJlcn0gZXZlbnQuc3RhcnRQb3MgLSBUaGUgc3RhcnRpbmcgcG9zaXRpb24gb2YgdGhlIHNjZW5lIChpbiByZWxhdGlvbiB0byB0aGUgY29uYWluZXIpXG5cdFx0ICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LmVuZFBvcyAtIFRoZSBlbmRpbmcgcG9zaXRpb24gb2YgdGhlIHNjZW5lIChpbiByZWxhdGlvbiB0byB0aGUgY29uYWluZXIpXG5cdFx0ICogQHByb3BlcnR5IHtudW1iZXJ9IGV2ZW50LnNjcm9sbFBvcyAtIFRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgY29udGFpbmVyXG5cdFx0ICovXG5cdFx0LyoqXG5cdFx0ICogU2NlbmUgcHJvZ3Jlc3MgZXZlbnQuICBcblx0XHQgKiBGaXJlcyB3aGVuZXZlciB0aGUgcHJvZ3Jlc3Mgb2YgdGhlIHNjZW5lIGNoYW5nZXMuXG5cdFx0ICpcblx0XHQgKiBGb3IgZGV0YWlscyBvbiB0aGlzIGV2ZW50IGFuZCB0aGUgb3JkZXIgaW4gd2hpY2ggaXQgaXMgZmlyZWQsIHBsZWFzZSByZXZpZXcgdGhlIHtAbGluayBTY2VuZS5wcm9ncmVzc30gbWV0aG9kLlxuXHRcdCAqXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI3Byb2dyZXNzXG5cdFx0ICpcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIHNjZW5lLm9uKFwicHJvZ3Jlc3NcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ICogXHRjb25zb2xlLmxvZyhcIlNjZW5lIHByb2dyZXNzIGNoYW5nZWQgdG8gXCIgKyBldmVudC5wcm9ncmVzcyk7XG5cdFx0ICogfSk7XG5cdFx0ICpcblx0XHQgKiBAcHJvcGVydHkge29iamVjdH0gZXZlbnQgLSBUaGUgZXZlbnQgT2JqZWN0IHBhc3NlZCB0byBlYWNoIGNhbGxiYWNrXG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LnR5cGUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcblx0XHQgKiBAcHJvcGVydHkge1NjZW5lfSBldmVudC50YXJnZXQgLSBUaGUgU2NlbmUgb2JqZWN0IHRoYXQgdHJpZ2dlcmVkIHRoaXMgZXZlbnRcblx0XHQgKiBAcHJvcGVydHkge251bWJlcn0gZXZlbnQucHJvZ3Jlc3MgLSBSZWZsZWN0cyB0aGUgY3VycmVudCBwcm9ncmVzcyBvZiB0aGUgc2NlbmVcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc3RhdGUgLSBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2NlbmUgYFwiQkVGT1JFXCJgLCBgXCJEVVJJTkdcImAgb3IgYFwiQUZURVJcImBcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQuc2Nyb2xsRGlyZWN0aW9uIC0gSW5kaWNhdGVzIHdoaWNoIHdheSB3ZSBhcmUgc2Nyb2xsaW5nIGBcIlBBVVNFRFwiYCwgYFwiRk9SV0FSRFwiYCBvciBgXCJSRVZFUlNFXCJgXG5cdFx0ICovXG5cdFx0LyoqXG5cdFx0ICogU2NlbmUgY2hhbmdlIGV2ZW50LiAgXG5cdFx0ICogRmlyZXMgd2hlbnZldmVyIGEgcHJvcGVydHkgb2YgdGhlIHNjZW5lIGlzIGNoYW5nZWQuXG5cdFx0ICpcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjY2hhbmdlXG5cdFx0ICpcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIHNjZW5lLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdCAqIFx0Y29uc29sZS5sb2coXCJTY2VuZSBQcm9wZXJ0eSBcXFwiXCIgKyBldmVudC53aGF0ICsgXCJcXFwiIGNoYW5nZWQgdG8gXCIgKyBldmVudC5uZXd2YWwpO1xuXHRcdCAqIH0pO1xuXHRcdCAqXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XG5cdFx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50LndoYXQgLSBJbmRpY2F0ZXMgd2hhdCB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkXG5cdFx0ICogQHByb3BlcnR5IHttaXhlZH0gZXZlbnQubmV3dmFsIC0gVGhlIG5ldyB2YWx1ZSBvZiB0aGUgY2hhbmdlZCBwcm9wZXJ0eVxuXHRcdCAqL1xuXHRcdC8qKlxuXHRcdCAqIFNjZW5lIHNoaWZ0IGV2ZW50LiAgXG5cdFx0ICogRmlyZXMgd2hlbnZldmVyIHRoZSBzdGFydCBvciBlbmQgKipzY3JvbGwgb2Zmc2V0Kiogb2YgdGhlIHNjZW5lIGNoYW5nZS5cblx0XHQgKiBUaGlzIGhhcHBlbnMgZXhwbGljaXRlbHksIHdoZW4gb25lIG9mIHRoZXNlIHZhbHVlcyBjaGFuZ2U6IGBvZmZzZXRgLCBgZHVyYXRpb25gIG9yIGB0cmlnZ2VySG9va2AuXG5cdFx0ICogSXQgd2lsbCBmaXJlIGltcGxpY2l0bHkgd2hlbiB0aGUgYHRyaWdnZXJFbGVtZW50YCBjaGFuZ2VzLCBpZiB0aGUgbmV3IGVsZW1lbnQgaGFzIGEgZGlmZmVyZW50IHBvc2l0aW9uIChtb3N0IGNhc2VzKS5cblx0XHQgKiBJdCB3aWxsIGFsc28gZmlyZSBpbXBsaWNpdGx5IHdoZW4gdGhlIHNpemUgb2YgdGhlIGNvbnRhaW5lciBjaGFuZ2VzIGFuZCB0aGUgdHJpZ2dlckhvb2sgaXMgYW55dGhpbmcgb3RoZXIgdGhhbiBgb25MZWF2ZWAuXG5cdFx0ICpcblx0XHQgKiBAZXZlbnQgU2Nyb2xsTWFnaWMuU2NlbmUjc2hpZnRcblx0XHQgKiBAc2luY2UgMS4xLjBcblx0XHQgKlxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogc2NlbmUub24oXCJzaGlmdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHQgKiBcdGNvbnNvbGUubG9nKFwiU2NlbmUgbW92ZWQsIGJlY2F1c2UgdGhlIFwiICsgZXZlbnQucmVhc29uICsgXCIgaGFzIGNoYW5nZWQuKVwiKTtcblx0XHQgKiB9KTtcblx0XHQgKlxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC5yZWFzb24gLSBJbmRpY2F0ZXMgd2h5IHRoZSBzY2VuZSBoYXMgc2hpZnRlZFxuXHRcdCAqL1xuXHRcdC8qKlxuXHRcdCAqIFNjZW5lIGRlc3Ryb3kgZXZlbnQuICBcblx0XHQgKiBGaXJlcyB3aGVudmV2ZXIgdGhlIHNjZW5lIGlzIGRlc3Ryb3llZC5cblx0XHQgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIHRpZHkgdXAgY3VzdG9tIGJlaGF2aW91ciB1c2VkIGluIGV2ZW50cy5cblx0XHQgKlxuXHRcdCAqIEBldmVudCBTY3JvbGxNYWdpYy5TY2VuZSNkZXN0cm95XG5cdFx0ICogQHNpbmNlIDEuMS4wXG5cdFx0ICpcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIHNjZW5lLm9uKFwiZW50ZXJcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ICogICAgICAgIC8vIGFkZCBjdXN0b20gYWN0aW9uXG5cdFx0ICogICAgICAgICQoXCIjbXktZWxlbVwiKS5sZWZ0KFwiMjAwXCIpO1xuXHRcdCAqICAgICAgfSlcblx0XHQgKiAgICAgIC5vbihcImRlc3Ryb3lcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ICogICAgICAgIC8vIHJlc2V0IG15IGVsZW1lbnQgdG8gc3RhcnQgcG9zaXRpb25cblx0XHQgKiAgICAgICAgaWYgKGV2ZW50LnJlc2V0KSB7XG5cdFx0ICogICAgICAgICAgJChcIiNteS1lbGVtXCIpLmxlZnQoXCIwXCIpO1xuXHRcdCAqICAgICAgICB9XG5cdFx0ICogICAgICB9KTtcblx0XHQgKlxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxuXHRcdCAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZXZlbnQucmVzZXQgLSBJbmRpY2F0ZXMgaWYgdGhlIGRlc3Ryb3kgbWV0aG9kIHdhcyBjYWxsZWQgd2l0aCByZXNldCBgdHJ1ZWAgb3IgYGZhbHNlYC5cblx0XHQgKi9cblx0XHQvKipcblx0XHQgKiBTY2VuZSBhZGQgZXZlbnQuICBcblx0XHQgKiBGaXJlcyB3aGVuIHRoZSBzY2VuZSBpcyBhZGRlZCB0byBhIGNvbnRyb2xsZXIuXG5cdFx0ICogVGhpcyBpcyBtb3N0bHkgdXNlZCBieSBwbHVnaW5zIHRvIGtub3cgdGhhdCBjaGFuZ2UgbWlnaHQgYmUgZHVlLlxuXHRcdCAqXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI2FkZFxuXHRcdCAqIEBzaW5jZSAyLjAuMFxuXHRcdCAqXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiBzY2VuZS5vbihcImFkZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHQgKiBcdGNvbnNvbGUubG9nKCdTY2VuZSB3YXMgYWRkZWQgdG8gYSBuZXcgY29udHJvbGxlci4nKTtcblx0XHQgKiB9KTtcblx0XHQgKlxuXHRcdCAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBldmVudCAtIFRoZSBldmVudCBPYmplY3QgcGFzc2VkIHRvIGVhY2ggY2FsbGJhY2tcblx0XHQgKiBAcHJvcGVydHkge3N0cmluZ30gZXZlbnQudHlwZSAtIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuXHRcdCAqIEBwcm9wZXJ0eSB7U2NlbmV9IGV2ZW50LnRhcmdldCAtIFRoZSBTY2VuZSBvYmplY3QgdGhhdCB0cmlnZ2VyZWQgdGhpcyBldmVudFxuXHRcdCAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZXZlbnQuY29udHJvbGxlciAtIFRoZSBjb250cm9sbGVyIG9iamVjdCB0aGUgc2NlbmUgd2FzIGFkZGVkIHRvLlxuXHRcdCAqL1xuXHRcdC8qKlxuXHRcdCAqIFNjZW5lIHJlbW92ZSBldmVudC4gIFxuXHRcdCAqIEZpcmVzIHdoZW4gdGhlIHNjZW5lIGlzIHJlbW92ZWQgZnJvbSBhIGNvbnRyb2xsZXIuXG5cdFx0ICogVGhpcyBpcyBtb3N0bHkgdXNlZCBieSBwbHVnaW5zIHRvIGtub3cgdGhhdCBjaGFuZ2UgbWlnaHQgYmUgZHVlLlxuXHRcdCAqXG5cdFx0ICogQGV2ZW50IFNjcm9sbE1hZ2ljLlNjZW5lI3JlbW92ZVxuXHRcdCAqIEBzaW5jZSAyLjAuMFxuXHRcdCAqXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiBzY2VuZS5vbihcInJlbW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHQgKiBcdGNvbnNvbGUubG9nKCdTY2VuZSB3YXMgcmVtb3ZlZCBmcm9tIGl0cyBjb250cm9sbGVyLicpO1xuXHRcdCAqIH0pO1xuXHRcdCAqXG5cdFx0ICogQHByb3BlcnR5IHtvYmplY3R9IGV2ZW50IC0gVGhlIGV2ZW50IE9iamVjdCBwYXNzZWQgdG8gZWFjaCBjYWxsYmFja1xuXHRcdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBldmVudC50eXBlIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG5cdFx0ICogQHByb3BlcnR5IHtTY2VuZX0gZXZlbnQudGFyZ2V0IC0gVGhlIFNjZW5lIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50XG5cdFx0ICovXG5cblx0XHQvKipcblx0XHQgKiBBZGQgb25lIG9yZSBtb3JlIGV2ZW50IGxpc3RlbmVyLiAgXG5cdFx0ICogVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHdpbGwgYmUgZmlyZWQgYXQgdGhlIHJlc3BlY3RpdmUgZXZlbnQsIGFuZCBhbiBvYmplY3QgY29udGFpbmluZyByZWxldmFudCBkYXRhIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBjYWxsYmFjay5cblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI29uXG5cdFx0ICpcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIGZ1bmN0aW9uIGNhbGxiYWNrIChldmVudCkge1xuXHRcdCAqIFx0XHRjb25zb2xlLmxvZyhcIkV2ZW50IGZpcmVkISAoXCIgKyBldmVudC50eXBlICsgXCIpXCIpO1xuXHRcdCAqIH1cblx0XHQgKiAvLyBhZGQgbGlzdGVuZXJzXG5cdFx0ICogc2NlbmUub24oXCJjaGFuZ2UgdXBkYXRlIHByb2dyZXNzIHN0YXJ0IGVuZCBlbnRlciBsZWF2ZVwiLCBjYWxsYmFjayk7XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXMgLSBUaGUgbmFtZSBvciBuYW1lcyBvZiB0aGUgZXZlbnQgdGhlIGNhbGxiYWNrIHNob3VsZCBiZSBhdHRhY2hlZCB0by5cblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgZXhlY3V0ZWQsIHdoZW4gdGhlIGV2ZW50IGlzIGRpc3BhdGNoZWQuIEFuIGV2ZW50IG9iamVjdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgY2FsbGJhY2suXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cblx0XHQgKi9cblx0XHR0aGlzLm9uID0gZnVuY3Rpb24gKG5hbWVzLCBjYWxsYmFjaykge1xuXHRcdFx0aWYgKF91dGlsLnR5cGUuRnVuY3Rpb24oY2FsbGJhY2spKSB7XG5cdFx0XHRcdG5hbWVzID0gbmFtZXMudHJpbSgpLnNwbGl0KCcgJyk7XG5cdFx0XHRcdG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKGZ1bGxuYW1lKSB7XG5cdFx0XHRcdFx0dmFyXG5cdFx0XHRcdFx0bmFtZXBhcnRzID0gZnVsbG5hbWUuc3BsaXQoJy4nKSxcblx0XHRcdFx0XHRcdGV2ZW50bmFtZSA9IG5hbWVwYXJ0c1swXSxcblx0XHRcdFx0XHRcdG5hbWVzcGFjZSA9IG5hbWVwYXJ0c1sxXTtcblx0XHRcdFx0XHRpZiAoZXZlbnRuYW1lICE9IFwiKlwiKSB7IC8vIGRpc2FsbG93IHdpbGRjYXJkc1xuXHRcdFx0XHRcdFx0aWYgKCFfbGlzdGVuZXJzW2V2ZW50bmFtZV0pIHtcblx0XHRcdFx0XHRcdFx0X2xpc3RlbmVyc1tldmVudG5hbWVdID0gW107XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRfbGlzdGVuZXJzW2V2ZW50bmFtZV0ucHVzaCh7XG5cdFx0XHRcdFx0XHRcdG5hbWVzcGFjZTogbmFtZXNwYWNlIHx8ICcnLFxuXHRcdFx0XHRcdFx0XHRjYWxsYmFjazogY2FsbGJhY2tcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsb2coMSwgXCJFUlJPUiB3aGVuIGNhbGxpbmcgJy5vbigpJzogU3VwcGxpZWQgY2FsbGJhY2sgZm9yICdcIiArIG5hbWVzICsgXCInIGlzIG5vdCBhIHZhbGlkIGZ1bmN0aW9uIVwiKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBTY2VuZTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIG9uZSBvciBtb3JlIGV2ZW50IGxpc3RlbmVyLlxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjb2ZmXG5cdFx0ICpcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIGZ1bmN0aW9uIGNhbGxiYWNrIChldmVudCkge1xuXHRcdCAqIFx0XHRjb25zb2xlLmxvZyhcIkV2ZW50IGZpcmVkISAoXCIgKyBldmVudC50eXBlICsgXCIpXCIpO1xuXHRcdCAqIH1cblx0XHQgKiAvLyBhZGQgbGlzdGVuZXJzXG5cdFx0ICogc2NlbmUub24oXCJjaGFuZ2UgdXBkYXRlXCIsIGNhbGxiYWNrKTtcblx0XHQgKiAvLyByZW1vdmUgbGlzdGVuZXJzXG5cdFx0ICogc2NlbmUub2ZmKFwiY2hhbmdlIHVwZGF0ZVwiLCBjYWxsYmFjayk7XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXMgLSBUaGUgbmFtZSBvciBuYW1lcyBvZiB0aGUgZXZlbnQgdGhhdCBzaG91bGQgYmUgcmVtb3ZlZC5cblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBzcGVjaWZpYyBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSByZW1vdmVkLiBJZiBub25lIGlzIHBhc3NlZCBhbGwgY2FsbGJhY2tzIHRvIHRoZSBldmVudCBsaXN0ZW5lciB3aWxsIGJlIHJlbW92ZWQuXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cblx0XHQgKi9cblx0XHR0aGlzLm9mZiA9IGZ1bmN0aW9uIChuYW1lcywgY2FsbGJhY2spIHtcblx0XHRcdGlmICghbmFtZXMpIHtcblx0XHRcdFx0bG9nKDEsIFwiRVJST1I6IEludmFsaWQgZXZlbnQgbmFtZSBzdXBwbGllZC5cIik7XG5cdFx0XHRcdHJldHVybiBTY2VuZTtcblx0XHRcdH1cblx0XHRcdG5hbWVzID0gbmFtZXMudHJpbSgpLnNwbGl0KCcgJyk7XG5cdFx0XHRuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChmdWxsbmFtZSwga2V5KSB7XG5cdFx0XHRcdHZhclxuXHRcdFx0XHRuYW1lcGFydHMgPSBmdWxsbmFtZS5zcGxpdCgnLicpLFxuXHRcdFx0XHRcdGV2ZW50bmFtZSA9IG5hbWVwYXJ0c1swXSxcblx0XHRcdFx0XHRuYW1lc3BhY2UgPSBuYW1lcGFydHNbMV0gfHwgJycsXG5cdFx0XHRcdFx0cmVtb3ZlTGlzdCA9IGV2ZW50bmFtZSA9PT0gJyonID8gT2JqZWN0LmtleXMoX2xpc3RlbmVycykgOiBbZXZlbnRuYW1lXTtcblx0XHRcdFx0cmVtb3ZlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChyZW1vdmUpIHtcblx0XHRcdFx0XHR2YXJcblx0XHRcdFx0XHRsaXN0ID0gX2xpc3RlbmVyc1tyZW1vdmVdIHx8IFtdLFxuXHRcdFx0XHRcdFx0aSA9IGxpc3QubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdFx0XHRcdHZhciBsaXN0ZW5lciA9IGxpc3RbaV07XG5cdFx0XHRcdFx0XHRpZiAobGlzdGVuZXIgJiYgKG5hbWVzcGFjZSA9PT0gbGlzdGVuZXIubmFtZXNwYWNlIHx8IG5hbWVzcGFjZSA9PT0gJyonKSAmJiAoIWNhbGxiYWNrIHx8IGNhbGxiYWNrID09IGxpc3RlbmVyLmNhbGxiYWNrKSkge1xuXHRcdFx0XHRcdFx0XHRsaXN0LnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCFsaXN0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0ZGVsZXRlIF9saXN0ZW5lcnNbcmVtb3ZlXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gU2NlbmU7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFRyaWdnZXIgYW4gZXZlbnQuXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSN0cmlnZ2VyXG5cdFx0ICpcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIHRoaXMudHJpZ2dlcihcImNoYW5nZVwiKTtcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRoYXQgc2hvdWxkIGJlIHRyaWdnZXJlZC5cblx0XHQgKiBAcGFyYW0ge29iamVjdH0gW3ZhcnNdIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgaW5mbyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLlxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXG5cdFx0ICovXG5cdFx0dGhpcy50cmlnZ2VyID0gZnVuY3Rpb24gKG5hbWUsIHZhcnMpIHtcblx0XHRcdGlmIChuYW1lKSB7XG5cdFx0XHRcdHZhclxuXHRcdFx0XHRuYW1lcGFydHMgPSBuYW1lLnRyaW0oKS5zcGxpdCgnLicpLFxuXHRcdFx0XHRcdGV2ZW50bmFtZSA9IG5hbWVwYXJ0c1swXSxcblx0XHRcdFx0XHRuYW1lc3BhY2UgPSBuYW1lcGFydHNbMV0sXG5cdFx0XHRcdFx0bGlzdGVuZXJzID0gX2xpc3RlbmVyc1tldmVudG5hbWVdO1xuXHRcdFx0XHRsb2coMywgJ2V2ZW50IGZpcmVkOicsIGV2ZW50bmFtZSwgdmFycyA/IFwiLT5cIiA6ICcnLCB2YXJzIHx8ICcnKTtcblx0XHRcdFx0aWYgKGxpc3RlbmVycykge1xuXHRcdFx0XHRcdGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lciwga2V5KSB7XG5cdFx0XHRcdFx0XHRpZiAoIW5hbWVzcGFjZSB8fCBuYW1lc3BhY2UgPT09IGxpc3RlbmVyLm5hbWVzcGFjZSkge1xuXHRcdFx0XHRcdFx0XHRsaXN0ZW5lci5jYWxsYmFjay5jYWxsKFNjZW5lLCBuZXcgU2Nyb2xsTWFnaWMuRXZlbnQoZXZlbnRuYW1lLCBsaXN0ZW5lci5uYW1lc3BhY2UsIFNjZW5lLCB2YXJzKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SOiBJbnZhbGlkIGV2ZW50IG5hbWUgc3VwcGxpZWQuXCIpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIFNjZW5lO1xuXHRcdH07XG5cblx0XHQvLyBzZXQgZXZlbnQgbGlzdGVuZXJzXG5cdFx0U2NlbmUub24oXCJjaGFuZ2UuaW50ZXJuYWxcIiwgZnVuY3Rpb24gKGUpIHtcblx0XHRcdGlmIChlLndoYXQgIT09IFwibG9nbGV2ZWxcIiAmJiBlLndoYXQgIT09IFwidHdlZW5DaGFuZ2VzXCIpIHsgLy8gbm8gbmVlZCBmb3IgYSBzY2VuZSB1cGRhdGUgc2NlbmUgd2l0aCB0aGVzZSBvcHRpb25zLi4uXG5cdFx0XHRcdGlmIChlLndoYXQgPT09IFwidHJpZ2dlckVsZW1lbnRcIikge1xuXHRcdFx0XHRcdHVwZGF0ZVRyaWdnZXJFbGVtZW50UG9zaXRpb24oKTtcblx0XHRcdFx0fSBlbHNlIGlmIChlLndoYXQgPT09IFwicmV2ZXJzZVwiKSB7IC8vIHRoZSBvbmx5IHByb3BlcnR5IGxlZnQgdGhhdCBtYXkgaGF2ZSBhbiBpbXBhY3Qgb24gdGhlIGN1cnJlbnQgc2NlbmUgc3RhdGUuIEV2ZXJ5dGhpbmcgZWxzZSBpcyBoYW5kbGVkIGJ5IHRoZSBzaGlmdCBldmVudC5cblx0XHRcdFx0XHRTY2VuZS51cGRhdGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pLm9uKFwic2hpZnQuaW50ZXJuYWxcIiwgZnVuY3Rpb24gKGUpIHtcblx0XHRcdHVwZGF0ZVNjcm9sbE9mZnNldCgpO1xuXHRcdFx0U2NlbmUudXBkYXRlKCk7IC8vIHVwZGF0ZSBzY2VuZSB0byByZWZsZWN0IG5ldyBwb3NpdGlvblxuXHRcdH0pO1xuXG5cdFx0LyoqXG5cdFx0ICogU2VuZCBhIGRlYnVnIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGUuXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKiBidXQgcHJvdmlkZWQgcHVibGljbHkgd2l0aCBfbG9nIGZvciBwbHVnaW5zXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbG9nbGV2ZWwgLSBUaGUgbG9nbGV2ZWwgcmVxdWlyZWQgdG8gaW5pdGlhdGUgb3V0cHV0IGZvciB0aGUgbWVzc2FnZS5cblx0XHQgKiBAcGFyYW0gey4uLm1peGVkfSBvdXRwdXQgLSBPbmUgb3IgbW9yZSB2YXJpYWJsZXMgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBjb25zb2xlLlxuXHRcdCAqL1xuXHRcdHZhciBsb2cgPSB0aGlzLl9sb2cgPSBmdW5jdGlvbiAobG9nbGV2ZWwsIG91dHB1dCkge1xuXHRcdFx0aWYgKF9vcHRpb25zLmxvZ2xldmVsID49IGxvZ2xldmVsKSB7XG5cdFx0XHRcdEFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChhcmd1bWVudHMsIDEsIDAsIFwiKFwiICsgTkFNRVNQQUNFICsgXCIpIC0+XCIpO1xuXHRcdFx0XHRfdXRpbC5sb2cuYXBwbHkod2luZG93LCBhcmd1bWVudHMpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBBZGQgdGhlIHNjZW5lIHRvIGEgY29udHJvbGxlci4gIFxuXHRcdCAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgdG8gYENvbnRyb2xsZXIuYWRkU2NlbmUoc2NlbmUpYC5cblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI2FkZFRvXG5cdFx0ICpcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIC8vIGFkZCBhIHNjZW5lIHRvIGEgU2Nyb2xsTWFnaWMgQ29udHJvbGxlclxuXHRcdCAqIHNjZW5lLmFkZFRvKGNvbnRyb2xsZXIpO1xuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtTY3JvbGxNYWdpYy5Db250cm9sbGVyfSBjb250cm9sbGVyIC0gVGhlIGNvbnRyb2xsZXIgdG8gd2hpY2ggdGhlIHNjZW5lIHNob3VsZCBiZSBhZGRlZC5cblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxuXHRcdCAqL1xuXHRcdHRoaXMuYWRkVG8gPSBmdW5jdGlvbiAoY29udHJvbGxlcikge1xuXHRcdFx0aWYgKCEoY29udHJvbGxlciBpbnN0YW5jZW9mIFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIpKSB7XG5cdFx0XHRcdGxvZygxLCBcIkVSUk9SOiBzdXBwbGllZCBhcmd1bWVudCBvZiAnYWRkVG8oKScgaXMgbm90IGEgdmFsaWQgU2Nyb2xsTWFnaWMgQ29udHJvbGxlclwiKTtcblx0XHRcdH0gZWxzZSBpZiAoX2NvbnRyb2xsZXIgIT0gY29udHJvbGxlcikge1xuXHRcdFx0XHQvLyBuZXcgY29udHJvbGxlclxuXHRcdFx0XHRpZiAoX2NvbnRyb2xsZXIpIHsgLy8gd2FzIGFzc29jaWF0ZWQgdG8gYSBkaWZmZXJlbnQgY29udHJvbGxlciBiZWZvcmUsIHNvIHJlbW92ZSBpdC4uLlxuXHRcdFx0XHRcdF9jb250cm9sbGVyLnJlbW92ZVNjZW5lKFNjZW5lKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG5cdFx0XHRcdHZhbGlkYXRlT3B0aW9uKCk7XG5cdFx0XHRcdHVwZGF0ZUR1cmF0aW9uKHRydWUpO1xuXHRcdFx0XHR1cGRhdGVUcmlnZ2VyRWxlbWVudFBvc2l0aW9uKHRydWUpO1xuXHRcdFx0XHR1cGRhdGVTY3JvbGxPZmZzZXQoKTtcblx0XHRcdFx0X2NvbnRyb2xsZXIuaW5mbyhcImNvbnRhaW5lclwiKS5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbkNvbnRhaW5lclJlc2l6ZSk7XG5cdFx0XHRcdGNvbnRyb2xsZXIuYWRkU2NlbmUoU2NlbmUpO1xuXHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwiYWRkXCIsIHtcblx0XHRcdFx0XHRjb250cm9sbGVyOiBfY29udHJvbGxlclxuXHRcdFx0XHR9KTtcblx0XHRcdFx0bG9nKDMsIFwiYWRkZWQgXCIgKyBOQU1FU1BBQ0UgKyBcIiB0byBjb250cm9sbGVyXCIpO1xuXHRcdFx0XHRTY2VuZS51cGRhdGUoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBTY2VuZTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSBjdXJyZW50IGVuYWJsZWQgc3RhdGUgb2YgdGhlIHNjZW5lLiAgXG5cdFx0ICogVGhpcyBjYW4gYmUgdXNlZCB0byBkaXNhYmxlIHRoaXMgc2NlbmUgd2l0aG91dCByZW1vdmluZyBvciBkZXN0cm95aW5nIGl0LlxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjZW5hYmxlZFxuXHRcdCAqXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgdmFsdWVcblx0XHQgKiB2YXIgZW5hYmxlZCA9IHNjZW5lLmVuYWJsZWQoKTtcblx0XHQgKlxuXHRcdCAqIC8vIGRpc2FibGUgdGhlIHNjZW5lXG5cdFx0ICogc2NlbmUuZW5hYmxlZChmYWxzZSk7XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtuZXdTdGF0ZV0gLSBUaGUgbmV3IGVuYWJsZWQgc3RhdGUgb2YgdGhlIHNjZW5lIGB0cnVlYCBvciBgZmFsc2VgLlxuXHRcdCAqIEByZXR1cm5zIHsoYm9vbGVhbnxTY2VuZSl9IEN1cnJlbnQgZW5hYmxlZCBzdGF0ZSBvciBwYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cblx0XHQgKi9cblx0XHR0aGlzLmVuYWJsZWQgPSBmdW5jdGlvbiAobmV3U3RhdGUpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyAvLyBnZXRcblx0XHRcdFx0cmV0dXJuIF9lbmFibGVkO1xuXHRcdFx0fSBlbHNlIGlmIChfZW5hYmxlZCAhPSBuZXdTdGF0ZSkgeyAvLyBzZXRcblx0XHRcdFx0X2VuYWJsZWQgPSAhISBuZXdTdGF0ZTtcblx0XHRcdFx0U2NlbmUudXBkYXRlKHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIFNjZW5lO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBSZW1vdmUgdGhlIHNjZW5lIGZyb20gdGhlIGNvbnRyb2xsZXIuICBcblx0XHQgKiBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IHRvIGBDb250cm9sbGVyLnJlbW92ZVNjZW5lKHNjZW5lKWAuXG5cdFx0ICogVGhlIHNjZW5lIHdpbGwgbm90IGJlIHVwZGF0ZWQgYW55bW9yZSB1bnRpbCB5b3UgcmVhZGQgaXQgdG8gYSBjb250cm9sbGVyLlxuXHRcdCAqIFRvIHJlbW92ZSB0aGUgcGluIG9yIHRoZSB0d2VlbiB5b3UgbmVlZCB0byBjYWxsIHJlbW92ZVR3ZWVuKCkgb3IgcmVtb3ZlUGluKCkgcmVzcGVjdGl2ZWx5LlxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjcmVtb3ZlXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiAvLyByZW1vdmUgdGhlIHNjZW5lIGZyb20gaXRzIGNvbnRyb2xsZXJcblx0XHQgKiBzY2VuZS5yZW1vdmUoKTtcblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXG5cdFx0ICovXG5cdFx0dGhpcy5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIpIHtcblx0XHRcdFx0X2NvbnRyb2xsZXIuaW5mbyhcImNvbnRhaW5lclwiKS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbkNvbnRhaW5lclJlc2l6ZSk7XG5cdFx0XHRcdHZhciB0bXBQYXJlbnQgPSBfY29udHJvbGxlcjtcblx0XHRcdFx0X2NvbnRyb2xsZXIgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdHRtcFBhcmVudC5yZW1vdmVTY2VuZShTY2VuZSk7XG5cdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJyZW1vdmVcIik7XG5cdFx0XHRcdGxvZygzLCBcInJlbW92ZWQgXCIgKyBOQU1FU1BBQ0UgKyBcIiBmcm9tIGNvbnRyb2xsZXJcIik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gU2NlbmU7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIERlc3Ryb3kgdGhlIHNjZW5lIGFuZCBldmVyeXRoaW5nLlxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjZGVzdHJveVxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogLy8gZGVzdHJveSB0aGUgc2NlbmUgd2l0aG91dCByZXNldHRpbmcgdGhlIHBpbiBhbmQgdHdlZW4gdG8gdGhlaXIgaW5pdGlhbCBwb3NpdGlvbnNcblx0XHQgKiBzY2VuZSA9IHNjZW5lLmRlc3Ryb3koKTtcblx0XHQgKlxuXHRcdCAqIC8vIGRlc3Ryb3kgdGhlIHNjZW5lIGFuZCByZXNldCB0aGUgcGluIGFuZCB0d2VlblxuXHRcdCAqIHNjZW5lID0gc2NlbmUuZGVzdHJveSh0cnVlKTtcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc2V0PWZhbHNlXSAtIElmIGB0cnVlYCB0aGUgcGluIGFuZCB0d2VlbiAoaWYgZXhpc3RlbnQpIHdpbGwgYmUgcmVzZXQuXG5cdFx0ICogQHJldHVybnMge251bGx9IE51bGwgdG8gdW5zZXQgaGFuZGxlciB2YXJpYWJsZXMuXG5cdFx0ICovXG5cdFx0dGhpcy5kZXN0cm95ID0gZnVuY3Rpb24gKHJlc2V0KSB7XG5cdFx0XHRTY2VuZS50cmlnZ2VyKFwiZGVzdHJveVwiLCB7XG5cdFx0XHRcdHJlc2V0OiByZXNldFxuXHRcdFx0fSk7XG5cdFx0XHRTY2VuZS5yZW1vdmUoKTtcblx0XHRcdFNjZW5lLm9mZihcIiouKlwiKTtcblx0XHRcdGxvZygzLCBcImRlc3Ryb3llZCBcIiArIE5BTUVTUEFDRSArIFwiIChyZXNldDogXCIgKyAocmVzZXQgPyBcInRydWVcIiA6IFwiZmFsc2VcIikgKyBcIilcIik7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9O1xuXG5cblx0XHQvKipcblx0XHQgKiBVcGRhdGVzIHRoZSBTY2VuZSB0byByZWZsZWN0IHRoZSBjdXJyZW50IHN0YXRlLiAgXG5cdFx0ICogVGhpcyBpcyB0aGUgZXF1aXZhbGVudCB0byBgQ29udHJvbGxlci51cGRhdGVTY2VuZShzY2VuZSwgaW1tZWRpYXRlbHkpYC4gIFxuXHRcdCAqIFRoZSB1cGRhdGUgbWV0aG9kIGNhbGN1bGF0ZXMgdGhlIHNjZW5lJ3Mgc3RhcnQgYW5kIGVuZCBwb3NpdGlvbiAoYmFzZWQgb24gdGhlIHRyaWdnZXIgZWxlbWVudCwgdHJpZ2dlciBob29rLCBkdXJhdGlvbiBhbmQgb2Zmc2V0KSBhbmQgY2hlY2tzIGl0IGFnYWluc3QgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBjb250YWluZXIuICBcblx0XHQgKiBJdCB0aGVuIHVwZGF0ZXMgdGhlIGN1cnJlbnQgc2NlbmUgc3RhdGUgYWNjb3JkaW5nbHkgKG9yIGRvZXMgbm90aGluZywgaWYgdGhlIHN0YXRlIGlzIGFscmVhZHkgY29ycmVjdCkg4oCTIFBpbnMgd2lsbCBiZSBzZXQgdG8gdGhlaXIgY29ycmVjdCBwb3NpdGlvbiBhbmQgdHdlZW5zIHdpbGwgYmUgdXBkYXRlZCB0byB0aGVpciBjb3JyZWN0IHByb2dyZXNzLlxuXHRcdCAqIFRoaXMgbWVhbnMgYW4gdXBkYXRlIGRvZXNuJ3QgbmVjZXNzYXJpbHkgcmVzdWx0IGluIGEgcHJvZ3Jlc3MgY2hhbmdlLiBUaGUgYHByb2dyZXNzYCBldmVudCB3aWxsIGJlIGZpcmVkIGlmIHRoZSBwcm9ncmVzcyBoYXMgaW5kZWVkIGNoYW5nZWQgYmV0d2VlbiB0aGlzIHVwZGF0ZSBhbmQgdGhlIGxhc3QuICBcblx0XHQgKiBfKipOT1RFOioqIFRoaXMgbWV0aG9kIGdldHMgY2FsbGVkIGNvbnN0YW50bHkgd2hlbmV2ZXIgU2Nyb2xsTWFnaWMgZGV0ZWN0cyBhIGNoYW5nZS4gVGhlIG9ubHkgYXBwbGljYXRpb24gZm9yIHlvdSBpcyBpZiB5b3UgY2hhbmdlIHNvbWV0aGluZyBvdXRzaWRlIG9mIHRoZSByZWFsbSBvZiBTY3JvbGxNYWdpYywgbGlrZSBtb3ZpbmcgdGhlIHRyaWdnZXIgb3IgY2hhbmdpbmcgdHdlZW4gcGFyYW1ldGVycy5fXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSN1cGRhdGVcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIC8vIHVwZGF0ZSB0aGUgc2NlbmUgb24gbmV4dCB0aWNrXG5cdFx0ICogc2NlbmUudXBkYXRlKCk7XG5cdFx0ICpcblx0XHQgKiAvLyB1cGRhdGUgdGhlIHNjZW5lIGltbWVkaWF0ZWx5XG5cdFx0ICogc2NlbmUudXBkYXRlKHRydWUpO1xuXHRcdCAqXG5cdFx0ICogQGZpcmVzIFNjZW5lLnVwZGF0ZVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbaW1tZWRpYXRlbHk9ZmFsc2VdIC0gSWYgYHRydWVgIHRoZSB1cGRhdGUgd2lsbCBiZSBpbnN0YW50LCBpZiBgZmFsc2VgIGl0IHdpbGwgd2FpdCB1bnRpbCBuZXh0IHVwZGF0ZSBjeWNsZSAoYmV0dGVyIHBlcmZvcm1hbmNlKS5cblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxuXHRcdCAqL1xuXHRcdHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKGltbWVkaWF0ZWx5KSB7XG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIpIHtcblx0XHRcdFx0aWYgKGltbWVkaWF0ZWx5KSB7XG5cdFx0XHRcdFx0aWYgKF9jb250cm9sbGVyLmVuYWJsZWQoKSAmJiBfZW5hYmxlZCkge1xuXHRcdFx0XHRcdFx0dmFyXG5cdFx0XHRcdFx0XHRzY3JvbGxQb3MgPSBfY29udHJvbGxlci5pbmZvKFwic2Nyb2xsUG9zXCIpLFxuXHRcdFx0XHRcdFx0XHRuZXdQcm9ncmVzcztcblxuXHRcdFx0XHRcdFx0aWYgKF9vcHRpb25zLmR1cmF0aW9uID4gMCkge1xuXHRcdFx0XHRcdFx0XHRuZXdQcm9ncmVzcyA9IChzY3JvbGxQb3MgLSBfc2Nyb2xsT2Zmc2V0LnN0YXJ0KSAvIChfc2Nyb2xsT2Zmc2V0LmVuZCAtIF9zY3JvbGxPZmZzZXQuc3RhcnQpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0bmV3UHJvZ3Jlc3MgPSBzY3JvbGxQb3MgPj0gX3Njcm9sbE9mZnNldC5zdGFydCA/IDEgOiAwO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwidXBkYXRlXCIsIHtcblx0XHRcdFx0XHRcdFx0c3RhcnRQb3M6IF9zY3JvbGxPZmZzZXQuc3RhcnQsXG5cdFx0XHRcdFx0XHRcdGVuZFBvczogX3Njcm9sbE9mZnNldC5lbmQsXG5cdFx0XHRcdFx0XHRcdHNjcm9sbFBvczogc2Nyb2xsUG9zXG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0U2NlbmUucHJvZ3Jlc3MobmV3UHJvZ3Jlc3MpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoX3BpbiAmJiBfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORykge1xuXHRcdFx0XHRcdFx0dXBkYXRlUGluU3RhdGUodHJ1ZSk7IC8vIHVucGluIGluIHBvc2l0aW9uXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdF9jb250cm9sbGVyLnVwZGF0ZVNjZW5lKFNjZW5lLCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBTY2VuZTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogVXBkYXRlcyBkeW5hbWljIHNjZW5lIHZhcmlhYmxlcyBsaWtlIHRoZSB0cmlnZ2VyIGVsZW1lbnQgcG9zaXRpb24gb3IgdGhlIGR1cmF0aW9uLlxuXHRcdCAqIFRoaXMgbWV0aG9kIGlzIGF1dG9tYXRpY2FsbHkgY2FsbGVkIGluIHJlZ3VsYXIgaW50ZXJ2YWxzIGZyb20gdGhlIGNvbnRyb2xsZXIuIFNlZSB7QGxpbmsgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcn0gb3B0aW9uIGByZWZyZXNoSW50ZXJ2YWxgLlxuXHRcdCAqIFxuXHRcdCAqIFlvdSBjYW4gY2FsbCBpdCB0byBtaW5pbWl6ZSBsYWcsIGZvciBleGFtcGxlIHdoZW4geW91IGludGVudGlvbmFsbHkgY2hhbmdlIHRoZSBwb3NpdGlvbiBvZiB0aGUgdHJpZ2dlckVsZW1lbnQuXG5cdFx0ICogSWYgeW91IGRvbid0IGl0IHdpbGwgc2ltcGx5IGJlIHVwZGF0ZWQgaW4gdGhlIG5leHQgcmVmcmVzaCBpbnRlcnZhbCBvZiB0aGUgY29udGFpbmVyLCB3aGljaCBpcyB1c3VhbGx5IHN1ZmZpY2llbnQuXG5cdFx0ICpcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3JlZnJlc2hcblx0XHQgKiBAc2luY2UgMS4xLjBcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIHNjZW5lID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHt0cmlnZ2VyRWxlbWVudDogXCIjdHJpZ2dlclwifSk7XG5cdFx0ICogXG5cdFx0ICogLy8gY2hhbmdlIHRoZSBwb3NpdGlvbiBvZiB0aGUgdHJpZ2dlclxuXHRcdCAqICQoXCIjdHJpZ2dlclwiKS5jc3MoXCJ0b3BcIiwgNTAwKTtcblx0XHQgKiAvLyBpbW1lZGlhdGVseSBsZXQgdGhlIHNjZW5lIGtub3cgb2YgdGhpcyBjaGFuZ2Vcblx0XHQgKiBzY2VuZS5yZWZyZXNoKCk7XG5cdFx0ICpcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnNoaWZ0fSwgaWYgdGhlIHRyaWdnZXIgZWxlbWVudCBwb3NpdGlvbiBvciB0aGUgZHVyYXRpb24gY2hhbmdlZFxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgaWYgdGhlIGR1cmF0aW9uIGNoYW5nZWRcblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXG5cdFx0ICovXG5cdFx0dGhpcy5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dXBkYXRlRHVyYXRpb24oKTtcblx0XHRcdHVwZGF0ZVRyaWdnZXJFbGVtZW50UG9zaXRpb24oKTtcblx0XHRcdC8vIHVwZGF0ZSB0cmlnZ2VyIGVsZW1lbnQgcG9zaXRpb25cblx0XHRcdHJldHVybiBTY2VuZTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSBzY2VuZSdzIHByb2dyZXNzLiAgXG5cdFx0ICogVXN1YWxseSBpdCBzaG91bGRuJ3QgYmUgbmVjZXNzYXJ5IHRvIHVzZSB0aGlzIGFzIGEgc2V0dGVyLCBhcyBpdCBpcyBzZXQgYXV0b21hdGljYWxseSBieSBzY2VuZS51cGRhdGUoKS4gIFxuXHRcdCAqIFRoZSBvcmRlciBpbiB3aGljaCB0aGUgZXZlbnRzIGFyZSBmaXJlZCBkZXBlbmRzIG9uIHRoZSBkdXJhdGlvbiBvZiB0aGUgc2NlbmU6XG5cdFx0ICogIDEuIFNjZW5lcyB3aXRoIGBkdXJhdGlvbiA9PSAwYDogIFxuXHRcdCAqICBTY2VuZXMgdGhhdCBoYXZlIG5vIGR1cmF0aW9uIGJ5IGRlZmluaXRpb24gaGF2ZSBubyBlbmRpbmcuIFRodXMgdGhlIGBlbmRgIGV2ZW50IHdpbGwgbmV2ZXIgYmUgZmlyZWQuICBcblx0XHQgKiAgV2hlbiB0aGUgdHJpZ2dlciBwb3NpdGlvbiBvZiB0aGUgc2NlbmUgaXMgcGFzc2VkIHRoZSBldmVudHMgYXJlIGFsd2F5cyBmaXJlZCBpbiB0aGlzIG9yZGVyOiAgXG5cdFx0ICogIGBlbnRlcmAsIGBzdGFydGAsIGBwcm9ncmVzc2Agd2hlbiBzY3JvbGxpbmcgZm9yd2FyZCAgXG5cdFx0ICogIGFuZCAgXG5cdFx0ICogIGBwcm9ncmVzc2AsIGBzdGFydGAsIGBsZWF2ZWAgd2hlbiBzY3JvbGxpbmcgaW4gcmV2ZXJzZVxuXHRcdCAqICAyLiBTY2VuZXMgd2l0aCBgZHVyYXRpb24gPiAwYDogIFxuXHRcdCAqICBTY2VuZXMgd2l0aCBhIHNldCBkdXJhdGlvbiBoYXZlIGEgZGVmaW5lZCBzdGFydCBhbmQgZW5kIHBvaW50LiAgXG5cdFx0ICogIFdoZW4gc2Nyb2xsaW5nIHBhc3QgdGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSBzY2VuZSBpdCB3aWxsIGZpcmUgdGhlc2UgZXZlbnRzIGluIHRoaXMgb3JkZXI6ICBcblx0XHQgKiAgYGVudGVyYCwgYHN0YXJ0YCwgYHByb2dyZXNzYCAgXG5cdFx0ICogIFdoZW4gY29udGludWluZyB0byBzY3JvbGwgYW5kIHBhc3NpbmcgdGhlIGVuZCBwb2ludCBpdCB3aWxsIGZpcmUgdGhlc2UgZXZlbnRzOiAgXG5cdFx0ICogIGBwcm9ncmVzc2AsIGBlbmRgLCBgbGVhdmVgICBcblx0XHQgKiAgV2hlbiByZXZlcnNpbmcgdGhyb3VnaCB0aGUgZW5kIHBvaW50IHRoZXNlIGV2ZW50cyBhcmUgZmlyZWQ6ICBcblx0XHQgKiAgYGVudGVyYCwgYGVuZGAsIGBwcm9ncmVzc2AgIFxuXHRcdCAqICBBbmQgd2hlbiBjb250aW51aW5nIHRvIHNjcm9sbCBwYXN0IHRoZSBzdGFydCBwb3NpdGlvbiBpbiByZXZlcnNlIGl0IHdpbGwgZmlyZTogIFxuXHRcdCAqICBgcHJvZ3Jlc3NgLCBgc3RhcnRgLCBgbGVhdmVgICBcblx0XHQgKiAgSW4gYmV0d2VlbiBzdGFydCBhbmQgZW5kIHRoZSBgcHJvZ3Jlc3NgIGV2ZW50IHdpbGwgYmUgY2FsbGVkIGNvbnN0YW50bHksIHdoZW5ldmVyIHRoZSBwcm9ncmVzcyBjaGFuZ2VzLlxuXHRcdCAqIFxuXHRcdCAqIEluIHNob3J0OiAgXG5cdFx0ICogYGVudGVyYCBldmVudHMgd2lsbCBhbHdheXMgdHJpZ2dlciAqKmJlZm9yZSoqIHRoZSBwcm9ncmVzcyB1cGRhdGUgYW5kIGBsZWF2ZWAgZW52ZW50cyB3aWxsIHRyaWdnZXIgKiphZnRlcioqIHRoZSBwcm9ncmVzcyB1cGRhdGUuICBcblx0XHQgKiBgc3RhcnRgIGFuZCBgZW5kYCB3aWxsIGFsd2F5cyB0cmlnZ2VyIGF0IHRoZWlyIHJlc3BlY3RpdmUgcG9zaXRpb24uXG5cdFx0ICogXG5cdFx0ICogUGxlYXNlIHJldmlldyB0aGUgZXZlbnQgZGVzY3JpcHRpb25zIGZvciBkZXRhaWxzIG9uIHRoZSBldmVudHMgYW5kIHRoZSBldmVudCBvYmplY3QgdGhhdCBpcyBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrLlxuXHRcdCAqIFxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjcHJvZ3Jlc3Ncblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCBzY2VuZSBwcm9ncmVzc1xuXHRcdCAqIHZhciBwcm9ncmVzcyA9IHNjZW5lLnByb2dyZXNzKCk7XG5cdFx0ICpcblx0XHQgKiAvLyBzZXQgbmV3IHNjZW5lIHByb2dyZXNzXG5cdFx0ICogc2NlbmUucHJvZ3Jlc3MoMC4zKTtcblx0XHQgKlxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuZW50ZXJ9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5zdGFydH0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnByb2dyZXNzfSwgd2hlbiB1c2VkIGFzIHNldHRlclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuZW5kfSwgd2hlbiB1c2VkIGFzIHNldHRlclxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUubGVhdmV9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gW3Byb2dyZXNzXSAtIFRoZSBuZXcgcHJvZ3Jlc3MgdmFsdWUgb2YgdGhlIHNjZW5lIGBbMC0xXWAuXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gYGdldGAgLSAgQ3VycmVudCBzY2VuZSBwcm9ncmVzcy5cblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IGBzZXRgIC0gIFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxuXHRcdCAqL1xuXHRcdHRoaXMucHJvZ3Jlc3MgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcblx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyAvLyBnZXRcblx0XHRcdFx0cmV0dXJuIF9wcm9ncmVzcztcblx0XHRcdH0gZWxzZSB7IC8vIHNldFxuXHRcdFx0XHR2YXJcblx0XHRcdFx0ZG9VcGRhdGUgPSBmYWxzZSxcblx0XHRcdFx0XHRvbGRTdGF0ZSA9IF9zdGF0ZSxcblx0XHRcdFx0XHRzY3JvbGxEaXJlY3Rpb24gPSBfY29udHJvbGxlciA/IF9jb250cm9sbGVyLmluZm8oXCJzY3JvbGxEaXJlY3Rpb25cIikgOiAnUEFVU0VEJyxcblx0XHRcdFx0XHRyZXZlcnNlT3JGb3J3YXJkID0gX29wdGlvbnMucmV2ZXJzZSB8fCBwcm9ncmVzcyA+PSBfcHJvZ3Jlc3M7XG5cdFx0XHRcdGlmIChfb3B0aW9ucy5kdXJhdGlvbiA9PT0gMCkge1xuXHRcdFx0XHRcdC8vIHplcm8gZHVyYXRpb24gc2NlbmVzXG5cdFx0XHRcdFx0ZG9VcGRhdGUgPSBfcHJvZ3Jlc3MgIT0gcHJvZ3Jlc3M7XG5cdFx0XHRcdFx0X3Byb2dyZXNzID0gcHJvZ3Jlc3MgPCAxICYmIHJldmVyc2VPckZvcndhcmQgPyAwIDogMTtcblx0XHRcdFx0XHRfc3RhdGUgPSBfcHJvZ3Jlc3MgPT09IDAgPyBTQ0VORV9TVEFURV9CRUZPUkUgOiBTQ0VORV9TVEFURV9EVVJJTkc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gc2NlbmVzIHdpdGggc3RhcnQgYW5kIGVuZFxuXHRcdFx0XHRcdGlmIChwcm9ncmVzcyA8IDAgJiYgX3N0YXRlICE9PSBTQ0VORV9TVEFURV9CRUZPUkUgJiYgcmV2ZXJzZU9yRm9yd2FyZCkge1xuXHRcdFx0XHRcdFx0Ly8gZ28gYmFjayB0byBpbml0aWFsIHN0YXRlXG5cdFx0XHRcdFx0XHRfcHJvZ3Jlc3MgPSAwO1xuXHRcdFx0XHRcdFx0X3N0YXRlID0gU0NFTkVfU1RBVEVfQkVGT1JFO1xuXHRcdFx0XHRcdFx0ZG9VcGRhdGUgPSB0cnVlO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocHJvZ3Jlc3MgPj0gMCAmJiBwcm9ncmVzcyA8IDEgJiYgcmV2ZXJzZU9yRm9yd2FyZCkge1xuXHRcdFx0XHRcdFx0X3Byb2dyZXNzID0gcHJvZ3Jlc3M7XG5cdFx0XHRcdFx0XHRfc3RhdGUgPSBTQ0VORV9TVEFURV9EVVJJTkc7XG5cdFx0XHRcdFx0XHRkb1VwZGF0ZSA9IHRydWU7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwcm9ncmVzcyA+PSAxICYmIF9zdGF0ZSAhPT0gU0NFTkVfU1RBVEVfQUZURVIpIHtcblx0XHRcdFx0XHRcdF9wcm9ncmVzcyA9IDE7XG5cdFx0XHRcdFx0XHRfc3RhdGUgPSBTQ0VORV9TVEFURV9BRlRFUjtcblx0XHRcdFx0XHRcdGRvVXBkYXRlID0gdHJ1ZTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HICYmICFyZXZlcnNlT3JGb3J3YXJkKSB7XG5cdFx0XHRcdFx0XHR1cGRhdGVQaW5TdGF0ZSgpOyAvLyBpbiBjYXNlIHdlIHNjcm9sbGVkIGJhY2t3YXJkcyBtaWQtc2NlbmUgYW5kIHJldmVyc2UgaXMgZGlzYWJsZWQgPT4gdXBkYXRlIHRoZSBwaW4gcG9zaXRpb24sIHNvIGl0IGRvZXNuJ3QgbW92ZSBiYWNrIGFzIHdlbGwuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkb1VwZGF0ZSkge1xuXHRcdFx0XHRcdC8vIGZpcmUgZXZlbnRzXG5cdFx0XHRcdFx0dmFyXG5cdFx0XHRcdFx0ZXZlbnRWYXJzID0ge1xuXHRcdFx0XHRcdFx0cHJvZ3Jlc3M6IF9wcm9ncmVzcyxcblx0XHRcdFx0XHRcdHN0YXRlOiBfc3RhdGUsXG5cdFx0XHRcdFx0XHRzY3JvbGxEaXJlY3Rpb246IHNjcm9sbERpcmVjdGlvblxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRzdGF0ZUNoYW5nZWQgPSBfc3RhdGUgIT0gb2xkU3RhdGU7XG5cblx0XHRcdFx0XHR2YXIgdHJpZ2dlciA9IGZ1bmN0aW9uIChldmVudE5hbWUpIHsgLy8gdG1wIGhlbHBlciB0byBzaW1wbGlmeSBjb2RlXG5cdFx0XHRcdFx0XHRTY2VuZS50cmlnZ2VyKGV2ZW50TmFtZSwgZXZlbnRWYXJzKTtcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0aWYgKHN0YXRlQ2hhbmdlZCkgeyAvLyBlbnRlciBldmVudHNcblx0XHRcdFx0XHRcdGlmIChvbGRTdGF0ZSAhPT0gU0NFTkVfU1RBVEVfRFVSSU5HKSB7XG5cdFx0XHRcdFx0XHRcdHRyaWdnZXIoXCJlbnRlclwiKTtcblx0XHRcdFx0XHRcdFx0dHJpZ2dlcihvbGRTdGF0ZSA9PT0gU0NFTkVfU1RBVEVfQkVGT1JFID8gXCJzdGFydFwiIDogXCJlbmRcIik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRyaWdnZXIoXCJwcm9ncmVzc1wiKTtcblx0XHRcdFx0XHRpZiAoc3RhdGVDaGFuZ2VkKSB7IC8vIGxlYXZlIGV2ZW50c1xuXHRcdFx0XHRcdFx0aWYgKF9zdGF0ZSAhPT0gU0NFTkVfU1RBVEVfRFVSSU5HKSB7XG5cdFx0XHRcdFx0XHRcdHRyaWdnZXIoX3N0YXRlID09PSBTQ0VORV9TVEFURV9CRUZPUkUgPyBcInN0YXJ0XCIgOiBcImVuZFwiKTtcblx0XHRcdFx0XHRcdFx0dHJpZ2dlcihcImxlYXZlXCIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBTY2VuZTtcblx0XHRcdH1cblx0XHR9O1xuXG5cblx0XHQvKipcblx0XHQgKiBVcGRhdGUgdGhlIHN0YXJ0IGFuZCBlbmQgc2Nyb2xsT2Zmc2V0IG9mIHRoZSBjb250YWluZXIuXG5cdFx0ICogVGhlIHBvc2l0aW9ucyByZWZsZWN0IHdoYXQgdGhlIGNvbnRyb2xsZXIncyBzY3JvbGwgcG9zaXRpb24gd2lsbCBiZSBhdCB0aGUgc3RhcnQgYW5kIGVuZCByZXNwZWN0aXZlbHkuXG5cdFx0ICogSXMgY2FsbGVkLCB3aGVuOlxuXHRcdCAqICAgLSBTY2VuZSBldmVudCBcImNoYW5nZVwiIGlzIGNhbGxlZCB3aXRoOiBvZmZzZXQsIHRyaWdnZXJIb29rLCBkdXJhdGlvbiBcblx0XHQgKiAgIC0gc2Nyb2xsIGNvbnRhaW5lciBldmVudCBcInJlc2l6ZVwiIGlzIGNhbGxlZFxuXHRcdCAqICAgLSB0aGUgcG9zaXRpb24gb2YgdGhlIHRyaWdnZXJFbGVtZW50IGNoYW5nZXNcblx0XHQgKiAgIC0gdGhlIGNvbnRyb2xsZXIgY2hhbmdlcyAtPiBhZGRUbygpXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR2YXIgdXBkYXRlU2Nyb2xsT2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0X3Njcm9sbE9mZnNldCA9IHtcblx0XHRcdFx0c3RhcnQ6IF90cmlnZ2VyUG9zICsgX29wdGlvbnMub2Zmc2V0XG5cdFx0XHR9O1xuXHRcdFx0aWYgKF9jb250cm9sbGVyICYmIF9vcHRpb25zLnRyaWdnZXJFbGVtZW50KSB7XG5cdFx0XHRcdC8vIHRha2UgYXdheSB0cmlnZ2VySG9vayBwb3J0aW9uIHRvIGdldCByZWxhdGl2ZSB0byB0b3Bcblx0XHRcdFx0X3Njcm9sbE9mZnNldC5zdGFydCAtPSBfY29udHJvbGxlci5pbmZvKFwic2l6ZVwiKSAqIF9vcHRpb25zLnRyaWdnZXJIb29rO1xuXHRcdFx0fVxuXHRcdFx0X3Njcm9sbE9mZnNldC5lbmQgPSBfc2Nyb2xsT2Zmc2V0LnN0YXJ0ICsgX29wdGlvbnMuZHVyYXRpb247XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFVwZGF0ZXMgdGhlIGR1cmF0aW9uIGlmIHNldCB0byBhIGR5bmFtaWMgZnVuY3Rpb24uXG5cdFx0ICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIHNjZW5lIGlzIGFkZGVkIHRvIGEgY29udHJvbGxlciBhbmQgaW4gcmVndWxhciBpbnRlcnZhbHMgZnJvbSB0aGUgY29udHJvbGxlciB0aHJvdWdoIHNjZW5lLnJlZnJlc2goKS5cblx0XHQgKiBcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmNoYW5nZX0sIGlmIHRoZSBkdXJhdGlvbiBjaGFuZ2VkXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5zaGlmdH0sIGlmIHRoZSBkdXJhdGlvbiBjaGFuZ2VkXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdXBwcmVzc0V2ZW50cz1mYWxzZV0gLSBJZiB0cnVlIHRoZSBzaGlmdCBldmVudCB3aWxsIGJlIHN1cHByZXNzZWQuXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR2YXIgdXBkYXRlRHVyYXRpb24gPSBmdW5jdGlvbiAoc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdC8vIHVwZGF0ZSBkdXJhdGlvblxuXHRcdFx0aWYgKF9kdXJhdGlvblVwZGF0ZU1ldGhvZCkge1xuXHRcdFx0XHR2YXIgdmFybmFtZSA9IFwiZHVyYXRpb25cIjtcblx0XHRcdFx0aWYgKGNoYW5nZU9wdGlvbih2YXJuYW1lLCBfZHVyYXRpb25VcGRhdGVNZXRob2QuY2FsbChTY2VuZSkpICYmICFzdXBwcmVzc0V2ZW50cykgeyAvLyBzZXRcblx0XHRcdFx0XHRTY2VuZS50cmlnZ2VyKFwiY2hhbmdlXCIsIHtcblx0XHRcdFx0XHRcdHdoYXQ6IHZhcm5hbWUsXG5cdFx0XHRcdFx0XHRuZXd2YWw6IF9vcHRpb25zW3Zhcm5hbWVdXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0U2NlbmUudHJpZ2dlcihcInNoaWZ0XCIsIHtcblx0XHRcdFx0XHRcdHJlYXNvbjogdmFybmFtZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSB0cmlnZ2VyRWxlbWVudCwgaWYgcHJlc2VudC5cblx0XHQgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgLi4uXG5cdFx0ICogIC0gLi4uIHdoZW4gdGhlIHRyaWdnZXJFbGVtZW50IGlzIGNoYW5nZWRcblx0XHQgKiAgLSAuLi4gd2hlbiB0aGUgc2NlbmUgaXMgYWRkZWQgdG8gYSAobmV3KSBjb250cm9sbGVyXG5cdFx0ICogIC0gLi4uIGluIHJlZ3VsYXIgaW50ZXJ2YWxzIGZyb20gdGhlIGNvbnRyb2xsZXIgdGhyb3VnaCBzY2VuZS5yZWZyZXNoKCkuXG5cdFx0ICogXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5zaGlmdH0sIGlmIHRoZSBwb3NpdGlvbiBjaGFuZ2VkXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtzdXBwcmVzc0V2ZW50cz1mYWxzZV0gLSBJZiB0cnVlIHRoZSBzaGlmdCBldmVudCB3aWxsIGJlIHN1cHByZXNzZWQuXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR2YXIgdXBkYXRlVHJpZ2dlckVsZW1lbnRQb3NpdGlvbiA9IGZ1bmN0aW9uIChzdXBwcmVzc0V2ZW50cykge1xuXHRcdFx0dmFyXG5cdFx0XHRlbGVtZW50UG9zID0gMCxcblx0XHRcdFx0dGVsZW0gPSBfb3B0aW9ucy50cmlnZ2VyRWxlbWVudDtcblx0XHRcdGlmIChfY29udHJvbGxlciAmJiB0ZWxlbSkge1xuXHRcdFx0XHR2YXJcblx0XHRcdFx0Y29udHJvbGxlckluZm8gPSBfY29udHJvbGxlci5pbmZvKCksXG5cdFx0XHRcdFx0Y29udGFpbmVyT2Zmc2V0ID0gX3V0aWwuZ2V0Lm9mZnNldChjb250cm9sbGVySW5mby5jb250YWluZXIpLFxuXHRcdFx0XHRcdC8vIGNvbnRhaW5lciBwb3NpdGlvbiBpcyBuZWVkZWQgYmVjYXVzZSBlbGVtZW50IG9mZnNldCBpcyByZXR1cm5lZCBpbiByZWxhdGlvbiB0byBkb2N1bWVudCwgbm90IGluIHJlbGF0aW9uIHRvIGNvbnRhaW5lci5cblx0XHRcdFx0XHRwYXJhbSA9IGNvbnRyb2xsZXJJbmZvLnZlcnRpY2FsID8gXCJ0b3BcIiA6IFwibGVmdFwiOyAvLyB3aGljaCBwYXJhbSBpcyBvZiBpbnRlcmVzdCA/XG5cdFx0XHRcdC8vIGlmIHBhcmVudCBpcyBzcGFjZXIsIHVzZSBzcGFjZXIgcG9zaXRpb24gaW5zdGVhZCBzbyBjb3JyZWN0IHN0YXJ0IHBvc2l0aW9uIGlzIHJldHVybmVkIGZvciBwaW5uZWQgZWxlbWVudHMuXG5cdFx0XHRcdHdoaWxlICh0ZWxlbS5wYXJlbnROb2RlLmhhc0F0dHJpYnV0ZShQSU5fU1BBQ0VSX0FUVFJJQlVURSkpIHtcblx0XHRcdFx0XHR0ZWxlbSA9IHRlbGVtLnBhcmVudE5vZGU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgZWxlbWVudE9mZnNldCA9IF91dGlsLmdldC5vZmZzZXQodGVsZW0pO1xuXG5cdFx0XHRcdGlmICghY29udHJvbGxlckluZm8uaXNEb2N1bWVudCkgeyAvLyBjb250YWluZXIgaXMgbm90IHRoZSBkb2N1bWVudCByb290LCBzbyBzdWJzdHJhY3Qgc2Nyb2xsIFBvc2l0aW9uIHRvIGdldCBjb3JyZWN0IHRyaWdnZXIgZWxlbWVudCBwb3NpdGlvbiByZWxhdGl2ZSB0byBzY3JvbGxjb250ZW50XG5cdFx0XHRcdFx0Y29udGFpbmVyT2Zmc2V0W3BhcmFtXSAtPSBfY29udHJvbGxlci5zY3JvbGxQb3MoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGVsZW1lbnRQb3MgPSBlbGVtZW50T2Zmc2V0W3BhcmFtXSAtIGNvbnRhaW5lck9mZnNldFtwYXJhbV07XG5cdFx0XHR9XG5cdFx0XHR2YXIgY2hhbmdlZCA9IGVsZW1lbnRQb3MgIT0gX3RyaWdnZXJQb3M7XG5cdFx0XHRfdHJpZ2dlclBvcyA9IGVsZW1lbnRQb3M7XG5cdFx0XHRpZiAoY2hhbmdlZCAmJiAhc3VwcHJlc3NFdmVudHMpIHtcblx0XHRcdFx0U2NlbmUudHJpZ2dlcihcInNoaWZ0XCIsIHtcblx0XHRcdFx0XHRyZWFzb246IFwidHJpZ2dlckVsZW1lbnRQb3NpdGlvblwiXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBUcmlnZ2VyIGEgc2hpZnQgZXZlbnQsIHdoZW4gdGhlIGNvbnRhaW5lciBpcyByZXNpemVkIGFuZCB0aGUgdHJpZ2dlckhvb2sgaXMgPiAxLlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dmFyIG9uQ29udGFpbmVyUmVzaXplID0gZnVuY3Rpb24gKGUpIHtcblx0XHRcdGlmIChfb3B0aW9ucy50cmlnZ2VySG9vayA+IDApIHtcblx0XHRcdFx0U2NlbmUudHJpZ2dlcihcInNoaWZ0XCIsIHtcblx0XHRcdFx0XHRyZWFzb246IFwiY29udGFpbmVyUmVzaXplXCJcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciBfdmFsaWRhdGUgPSBfdXRpbC5leHRlbmQoU0NFTkVfT1BUSU9OUy52YWxpZGF0ZSwge1xuXHRcdFx0Ly8gdmFsaWRhdGlvbiBmb3IgZHVyYXRpb24gaGFuZGxlZCBpbnRlcm5hbGx5IGZvciByZWZlcmVuY2UgdG8gcHJpdmF0ZSB2YXIgX2R1cmF0aW9uTWV0aG9kXG5cdFx0XHRkdXJhdGlvbjogZnVuY3Rpb24gKHZhbCkge1xuXHRcdFx0XHRpZiAoX3V0aWwudHlwZS5TdHJpbmcodmFsKSAmJiB2YWwubWF0Y2goL14oXFwufFxcZCkqXFxkKyUkLykpIHtcblx0XHRcdFx0XHQvLyBwZXJjZW50YWdlIHZhbHVlXG5cdFx0XHRcdFx0dmFyIHBlcmMgPSBwYXJzZUZsb2F0KHZhbCkgLyAxMDA7XG5cdFx0XHRcdFx0dmFsID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9jb250cm9sbGVyID8gX2NvbnRyb2xsZXIuaW5mbyhcInNpemVcIikgKiBwZXJjIDogMDtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChfdXRpbC50eXBlLkZ1bmN0aW9uKHZhbCkpIHtcblx0XHRcdFx0XHQvLyBmdW5jdGlvblxuXHRcdFx0XHRcdF9kdXJhdGlvblVwZGF0ZU1ldGhvZCA9IHZhbDtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0dmFsID0gcGFyc2VGbG9hdChfZHVyYXRpb25VcGRhdGVNZXRob2QoKSk7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdFx0dmFsID0gLTE7IC8vIHdpbGwgY2F1c2UgZXJyb3IgYmVsb3dcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gdmFsIGhhcyB0byBiZSBmbG9hdFxuXHRcdFx0XHR2YWwgPSBwYXJzZUZsb2F0KHZhbCk7XG5cdFx0XHRcdGlmICghX3V0aWwudHlwZS5OdW1iZXIodmFsKSB8fCB2YWwgPCAwKSB7XG5cdFx0XHRcdFx0aWYgKF9kdXJhdGlvblVwZGF0ZU1ldGhvZCkge1xuXHRcdFx0XHRcdFx0X2R1cmF0aW9uVXBkYXRlTWV0aG9kID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0dGhyb3cgW1wiSW52YWxpZCByZXR1cm4gdmFsdWUgb2Ygc3VwcGxpZWQgZnVuY3Rpb24gZm9yIG9wdGlvbiBcXFwiZHVyYXRpb25cXFwiOlwiLCB2YWxdO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBbXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcImR1cmF0aW9uXFxcIjpcIiwgdmFsXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZhbDtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8qKlxuXHRcdCAqIENoZWNrcyB0aGUgdmFsaWRpdHkgb2YgYSBzcGVjaWZpYyBvciBhbGwgb3B0aW9ucyBhbmQgcmVzZXQgdG8gZGVmYXVsdCBpZiBuZWNjZXNzYXJ5LlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dmFyIHZhbGlkYXRlT3B0aW9uID0gZnVuY3Rpb24gKGNoZWNrKSB7XG5cdFx0XHRjaGVjayA9IGFyZ3VtZW50cy5sZW5ndGggPyBbY2hlY2tdIDogT2JqZWN0LmtleXMoX3ZhbGlkYXRlKTtcblx0XHRcdGNoZWNrLmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbk5hbWUsIGtleSkge1xuXHRcdFx0XHR2YXIgdmFsdWU7XG5cdFx0XHRcdGlmIChfdmFsaWRhdGVbb3B0aW9uTmFtZV0pIHsgLy8gdGhlcmUgaXMgYSB2YWxpZGF0aW9uIG1ldGhvZCBmb3IgdGhpcyBvcHRpb25cblx0XHRcdFx0XHR0cnkgeyAvLyB2YWxpZGF0ZSB2YWx1ZVxuXHRcdFx0XHRcdFx0dmFsdWUgPSBfdmFsaWRhdGVbb3B0aW9uTmFtZV0oX29wdGlvbnNbb3B0aW9uTmFtZV0pO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHsgLy8gdmFsaWRhdGlvbiBmYWlsZWQgLT4gcmVzZXQgdG8gZGVmYXVsdFxuXHRcdFx0XHRcdFx0dmFsdWUgPSBERUZBVUxUX09QVElPTlNbb3B0aW9uTmFtZV07XG5cdFx0XHRcdFx0XHR2YXIgbG9nTVNHID0gX3V0aWwudHlwZS5TdHJpbmcoZSkgPyBbZV0gOiBlO1xuXHRcdFx0XHRcdFx0aWYgKF91dGlsLnR5cGUuQXJyYXkobG9nTVNHKSkge1xuXHRcdFx0XHRcdFx0XHRsb2dNU0dbMF0gPSBcIkVSUk9SOiBcIiArIGxvZ01TR1swXTtcblx0XHRcdFx0XHRcdFx0bG9nTVNHLnVuc2hpZnQoMSk7IC8vIGxvZ2xldmVsIDEgZm9yIGVycm9yIG1zZ1xuXHRcdFx0XHRcdFx0XHRsb2cuYXBwbHkodGhpcywgbG9nTVNHKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGxvZygxLCBcIkVSUk9SOiBQcm9ibGVtIGV4ZWN1dGluZyB2YWxpZGF0aW9uIGNhbGxiYWNrIGZvciBvcHRpb24gJ1wiICsgb3B0aW9uTmFtZSArIFwiJzpcIiwgZS5tZXNzYWdlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRcdFx0X29wdGlvbnNbb3B0aW9uTmFtZV0gPSB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBIZWxwZXIgdXNlZCBieSB0aGUgc2V0dGVyL2dldHRlcnMgZm9yIHNjZW5lIG9wdGlvbnNcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHZhciBjaGFuZ2VPcHRpb24gPSBmdW5jdGlvbiAodmFybmFtZSwgbmV3dmFsKSB7XG5cdFx0XHR2YXJcblx0XHRcdGNoYW5nZWQgPSBmYWxzZSxcblx0XHRcdFx0b2xkdmFsID0gX29wdGlvbnNbdmFybmFtZV07XG5cdFx0XHRpZiAoX29wdGlvbnNbdmFybmFtZV0gIT0gbmV3dmFsKSB7XG5cdFx0XHRcdF9vcHRpb25zW3Zhcm5hbWVdID0gbmV3dmFsO1xuXHRcdFx0XHR2YWxpZGF0ZU9wdGlvbih2YXJuYW1lKTsgLy8gcmVzZXRzIHRvIGRlZmF1bHQgaWYgbmVjZXNzYXJ5XG5cdFx0XHRcdGNoYW5nZWQgPSBvbGR2YWwgIT0gX29wdGlvbnNbdmFybmFtZV07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY2hhbmdlZDtcblx0XHR9O1xuXG5cdFx0Ly8gZ2VuZXJhdGUgZ2V0dGVycy9zZXR0ZXJzIGZvciBhbGwgb3B0aW9uc1xuXHRcdHZhciBhZGRTY2VuZU9wdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25OYW1lKSB7XG5cdFx0XHRpZiAoIVNjZW5lW29wdGlvbk5hbWVdKSB7XG5cdFx0XHRcdFNjZW5lW29wdGlvbk5hbWVdID0gZnVuY3Rpb24gKG5ld1ZhbCkge1xuXHRcdFx0XHRcdGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyAvLyBnZXRcblx0XHRcdFx0XHRcdHJldHVybiBfb3B0aW9uc1tvcHRpb25OYW1lXTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbk5hbWUgPT09IFwiZHVyYXRpb25cIikgeyAvLyBuZXcgZHVyYXRpb24gaXMgc2V0LCBzbyBhbnkgcHJldmlvdXNseSBzZXQgZnVuY3Rpb24gbXVzdCBiZSB1bnNldFxuXHRcdFx0XHRcdFx0XHRfZHVyYXRpb25VcGRhdGVNZXRob2QgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoY2hhbmdlT3B0aW9uKG9wdGlvbk5hbWUsIG5ld1ZhbCkpIHsgLy8gc2V0XG5cdFx0XHRcdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJjaGFuZ2VcIiwge1xuXHRcdFx0XHRcdFx0XHRcdHdoYXQ6IG9wdGlvbk5hbWUsXG5cdFx0XHRcdFx0XHRcdFx0bmV3dmFsOiBfb3B0aW9uc1tvcHRpb25OYW1lXVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0aWYgKFNDRU5FX09QVElPTlMuc2hpZnRzLmluZGV4T2Yob3B0aW9uTmFtZSkgPiAtMSkge1xuXHRcdFx0XHRcdFx0XHRcdFNjZW5lLnRyaWdnZXIoXCJzaGlmdFwiLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZWFzb246IG9wdGlvbk5hbWVcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gU2NlbmU7XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgZHVyYXRpb24gb3B0aW9uIHZhbHVlLlxuXHRcdCAqIEFzIGEgc2V0dGVyIGl0IGFsc28gYWNjZXB0cyBhIGZ1bmN0aW9uIHJldHVybmluZyBhIG51bWVyaWMgdmFsdWUuICBcblx0XHQgKiBUaGlzIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHJlc3BvbnNpdmUgc2V0dXBzLlxuXHRcdCAqXG5cdFx0ICogVGhlIGR1cmF0aW9uIGlzIHVwZGF0ZWQgdXNpbmcgdGhlIHN1cHBsaWVkIGZ1bmN0aW9uIGV2ZXJ5IHRpbWUgYFNjZW5lLnJlZnJlc2goKWAgaXMgY2FsbGVkLCB3aGljaCBoYXBwZW5zIHBlcmlvZGljYWxseSBmcm9tIHRoZSBjb250cm9sbGVyIChzZWUgU2Nyb2xsTWFnaWMuQ29udHJvbGxlciBvcHRpb24gYHJlZnJlc2hJbnRlcnZhbGApLiAgXG5cdFx0ICogXyoqTk9URToqKiBCZSBhd2FyZSB0aGF0IGl0J3MgYW4gZWFzeSB3YXkgdG8ga2lsbCBwZXJmb3JtYW5jZSwgaWYgeW91IHN1cHBseSBhIGZ1bmN0aW9uIHRoYXQgaGFzIGhpZ2ggQ1BVIGRlbWFuZC4gIFxuXHRcdCAqIEV2ZW4gZm9yIHNpemUgYW5kIHBvc2l0aW9uIGNhbGN1bGF0aW9ucyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgYSB2YXJpYWJsZSB0byBjYWNoZSB0aGUgdmFsdWUuIChzZWUgZXhhbXBsZSkgIFxuXHRcdCAqIFRoaXMgY291bnRzIGRvdWJsZSBpZiB5b3UgdXNlIHRoZSBzYW1lIGZ1bmN0aW9uIGZvciBtdWx0aXBsZSBzY2VuZXMuX1xuXHRcdCAqXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNkdXJhdGlvblxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IGR1cmF0aW9uIHZhbHVlXG5cdFx0ICogdmFyIGR1cmF0aW9uID0gc2NlbmUuZHVyYXRpb24oKTtcblx0XHQgKlxuXHRcdCAqIC8vIHNldCBhIG5ldyBkdXJhdGlvblxuXHRcdCAqIHNjZW5lLmR1cmF0aW9uKDMwMCk7XG5cdFx0ICpcblx0XHQgKiAvLyB1c2UgYSBmdW5jdGlvbiB0byBhdXRvbWF0aWNhbGx5IGFkanVzdCB0aGUgZHVyYXRpb24gdG8gdGhlIHdpbmRvdyBoZWlnaHQuXG5cdFx0ICogdmFyIGR1cmF0aW9uVmFsdWVDYWNoZTtcblx0XHQgKiBmdW5jdGlvbiBnZXREdXJhdGlvbiAoKSB7XG5cdFx0ICogICByZXR1cm4gZHVyYXRpb25WYWx1ZUNhY2hlO1xuXHRcdCAqIH1cblx0XHQgKiBmdW5jdGlvbiB1cGRhdGVEdXJhdGlvbiAoZSkge1xuXHRcdCAqICAgZHVyYXRpb25WYWx1ZUNhY2hlID0gd2luZG93LmlubmVySGVpZ2h0O1xuXHRcdCAqIH1cblx0XHQgKiAkKHdpbmRvdykub24oXCJyZXNpemVcIiwgdXBkYXRlRHVyYXRpb24pOyAvLyB1cGRhdGUgdGhlIGR1cmF0aW9uIHdoZW4gdGhlIHdpbmRvdyBzaXplIGNoYW5nZXNcblx0XHQgKiAkKHdpbmRvdykudHJpZ2dlckhhbmRsZXIoXCJyZXNpemVcIik7IC8vIHNldCB0byBpbml0aWFsIHZhbHVlXG5cdFx0ICogc2NlbmUuZHVyYXRpb24oZ2V0RHVyYXRpb24pOyAvLyBzdXBwbHkgZHVyYXRpb24gbWV0aG9kXG5cdFx0ICpcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmNoYW5nZX0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnNoaWZ0fSwgd2hlbiB1c2VkIGFzIHNldHRlclxuXHRcdCAqIEBwYXJhbSB7KG51bWJlcnxmdW5jdGlvbil9IFtuZXdEdXJhdGlvbl0gLSBUaGUgbmV3IGR1cmF0aW9uIG9mIHRoZSBzY2VuZS5cblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBgZ2V0YCAtICBDdXJyZW50IHNjZW5lIGR1cmF0aW9uLlxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gYHNldGAgLSAgUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXG5cdFx0ICovXG5cblx0XHQvKipcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIG9mZnNldCBvcHRpb24gdmFsdWUuXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNvZmZzZXRcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCBvZmZzZXRcblx0XHQgKiB2YXIgb2Zmc2V0ID0gc2NlbmUub2Zmc2V0KCk7XG5cdFx0ICpcblx0XHQgKiAvLyBzZXQgYSBuZXcgb2Zmc2V0XG5cdFx0ICogc2NlbmUub2Zmc2V0KDEwMCk7XG5cdFx0ICpcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmNoYW5nZX0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLnNoaWZ0fSwgd2hlbiB1c2VkIGFzIHNldHRlclxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBbbmV3T2Zmc2V0XSAtIFRoZSBuZXcgb2Zmc2V0IG9mIHRoZSBzY2VuZS5cblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBgZ2V0YCAtICBDdXJyZW50IHNjZW5lIG9mZnNldC5cblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IGBzZXRgIC0gIFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxuXHRcdCAqL1xuXG5cdFx0LyoqXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSB0cmlnZ2VyRWxlbWVudCBvcHRpb24gdmFsdWUuXG5cdFx0ICogRG9lcyAqKm5vdCoqIGZpcmUgYFNjZW5lLnNoaWZ0YCwgYmVjYXVzZSBjaGFuZ2luZyB0aGUgdHJpZ2dlciBFbGVtZW50IGRvZXNuJ3QgbmVjZXNzYXJpbHkgbWVhbiB0aGUgc3RhcnQgcG9zaXRpb24gY2hhbmdlcy4gVGhpcyB3aWxsIGJlIGRldGVybWluZWQgaW4gYFNjZW5lLnJlZnJlc2goKWAsIHdoaWNoIGlzIGF1dG9tYXRpY2FsbHkgdHJpZ2dlcmVkLlxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjdHJpZ2dlckVsZW1lbnRcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIC8vIGdldCB0aGUgY3VycmVudCB0cmlnZ2VyRWxlbWVudFxuXHRcdCAqIHZhciB0cmlnZ2VyRWxlbWVudCA9IHNjZW5lLnRyaWdnZXJFbGVtZW50KCk7XG5cdFx0ICpcblx0XHQgKiAvLyBzZXQgYSBuZXcgdHJpZ2dlckVsZW1lbnQgdXNpbmcgYSBzZWxlY3RvclxuXHRcdCAqIHNjZW5lLnRyaWdnZXJFbGVtZW50KFwiI3RyaWdnZXJcIik7XG5cdFx0ICogLy8gc2V0IGEgbmV3IHRyaWdnZXJFbGVtZW50IHVzaW5nIGEgRE9NIG9iamVjdFxuXHRcdCAqIHNjZW5lLnRyaWdnZXJFbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJpZ2dlclwiKSk7XG5cdFx0ICpcblx0XHQgKiBAZmlyZXMge0BsaW5rIFNjZW5lLmNoYW5nZX0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gW25ld1RyaWdnZXJFbGVtZW50XSAtIFRoZSBuZXcgdHJpZ2dlciBlbGVtZW50IGZvciB0aGUgc2NlbmUuXG5cdFx0ICogQHJldHVybnMgeyhzdHJpbmd8b2JqZWN0KX0gYGdldGAgLSAgQ3VycmVudCB0cmlnZ2VyRWxlbWVudC5cblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IGBzZXRgIC0gIFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxuXHRcdCAqL1xuXG5cdFx0LyoqXG5cdFx0ICogKipHZXQqKiBvciAqKlNldCoqIHRoZSB0cmlnZ2VySG9vayBvcHRpb24gdmFsdWUuXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSN0cmlnZ2VySG9va1xuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IHRyaWdnZXJIb29rIHZhbHVlXG5cdFx0ICogdmFyIHRyaWdnZXJIb29rID0gc2NlbmUudHJpZ2dlckhvb2soKTtcblx0XHQgKlxuXHRcdCAqIC8vIHNldCBhIG5ldyB0cmlnZ2VySG9vayB1c2luZyBhIHN0cmluZ1xuXHRcdCAqIHNjZW5lLnRyaWdnZXJIb29rKFwib25MZWF2ZVwiKTtcblx0XHQgKiAvLyBzZXQgYSBuZXcgdHJpZ2dlckhvb2sgdXNpbmcgYSBudW1iZXJcblx0XHQgKiBzY2VuZS50cmlnZ2VySG9vaygwLjcpO1xuXHRcdCAqXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5zaGlmdH0sIHdoZW4gdXNlZCBhcyBzZXR0ZXJcblx0XHQgKiBAcGFyYW0geyhudW1iZXJ8c3RyaW5nKX0gW25ld1RyaWdnZXJIb29rXSAtIFRoZSBuZXcgdHJpZ2dlckhvb2sgb2YgdGhlIHNjZW5lLiBTZWUge0BsaW5rIFNjZW5lfSBwYXJhbWV0ZXIgZGVzY3JpcHRpb24gZm9yIHZhbHVlIG9wdGlvbnMuXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gYGdldGAgLSAgQ3VycmVudCB0cmlnZ2VySG9vayAoQUxXQVlTIG51bWVyaWNhbCkuXG5cdFx0ICogQHJldHVybnMge1NjZW5lfSBgc2V0YCAtICBQYXJlbnQgb2JqZWN0IGZvciBjaGFpbmluZy5cblx0XHQgKi9cblxuXHRcdC8qKlxuXHRcdCAqICoqR2V0Kiogb3IgKipTZXQqKiB0aGUgcmV2ZXJzZSBvcHRpb24gdmFsdWUuXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNyZXZlcnNlXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgcmV2ZXJzZSBvcHRpb25cblx0XHQgKiB2YXIgcmV2ZXJzZSA9IHNjZW5lLnJldmVyc2UoKTtcblx0XHQgKlxuXHRcdCAqIC8vIHNldCBuZXcgcmV2ZXJzZSBvcHRpb25cblx0XHQgKiBzY2VuZS5yZXZlcnNlKGZhbHNlKTtcblx0XHQgKlxuXHRcdCAqIEBmaXJlcyB7QGxpbmsgU2NlbmUuY2hhbmdlfSwgd2hlbiB1c2VkIGFzIHNldHRlclxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW25ld1JldmVyc2VdIC0gVGhlIG5ldyByZXZlcnNlIHNldHRpbmcgb2YgdGhlIHNjZW5lLlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufSBgZ2V0YCAtICBDdXJyZW50IHJldmVyc2Ugb3B0aW9uIHZhbHVlLlxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gYHNldGAgLSAgUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXG5cdFx0ICovXG5cblx0XHQvKipcblx0XHQgKiAqKkdldCoqIG9yICoqU2V0KiogdGhlIGxvZ2xldmVsIG9wdGlvbiB2YWx1ZS5cblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI2xvZ2xldmVsXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgbG9nbGV2ZWxcblx0XHQgKiB2YXIgbG9nbGV2ZWwgPSBzY2VuZS5sb2dsZXZlbCgpO1xuXHRcdCAqXG5cdFx0ICogLy8gc2V0IG5ldyBsb2dsZXZlbFxuXHRcdCAqIHNjZW5lLmxvZ2xldmVsKDMpO1xuXHRcdCAqXG5cdFx0ICogQGZpcmVzIHtAbGluayBTY2VuZS5jaGFuZ2V9LCB3aGVuIHVzZWQgYXMgc2V0dGVyXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IFtuZXdMb2dsZXZlbF0gLSBUaGUgbmV3IGxvZ2xldmVsIHNldHRpbmcgb2YgdGhlIHNjZW5lLiBgWzAtM11gXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gYGdldGAgLSAgQ3VycmVudCBsb2dsZXZlbC5cblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IGBzZXRgIC0gIFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxuXHRcdCAqL1xuXG5cdFx0LyoqXG5cdFx0ICogKipHZXQqKiB0aGUgYXNzb2NpYXRlZCBjb250cm9sbGVyLlxuXHRcdCAqIEBtZXRob2QgU2Nyb2xsTWFnaWMuU2NlbmUjY29udHJvbGxlclxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogLy8gZ2V0IHRoZSBjb250cm9sbGVyIG9mIGEgc2NlbmVcblx0XHQgKiB2YXIgY29udHJvbGxlciA9IHNjZW5lLmNvbnRyb2xsZXIoKTtcblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtTY3JvbGxNYWdpYy5Db250cm9sbGVyfSBQYXJlbnQgY29udHJvbGxlciBvciBgdW5kZWZpbmVkYFxuXHRcdCAqL1xuXHRcdHRoaXMuY29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBfY29udHJvbGxlcjtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogKipHZXQqKiB0aGUgY3VycmVudCBzdGF0ZS5cblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3N0YXRlXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiAvLyBnZXQgdGhlIGN1cnJlbnQgc3RhdGVcblx0XHQgKiB2YXIgc3RhdGUgPSBzY2VuZS5zdGF0ZSgpO1xuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gYFwiQkVGT1JFXCJgLCBgXCJEVVJJTkdcImAgb3IgYFwiQUZURVJcImBcblx0XHQgKi9cblx0XHR0aGlzLnN0YXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIF9zdGF0ZTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogKipHZXQqKiB0aGUgY3VycmVudCBzY3JvbGwgb2Zmc2V0IGZvciB0aGUgc3RhcnQgb2YgdGhlIHNjZW5lLiAgXG5cdFx0ICogTWluZCwgdGhhdCB0aGUgc2Nyb2xsT2Zmc2V0IGlzIHJlbGF0ZWQgdG8gdGhlIHNpemUgb2YgdGhlIGNvbnRhaW5lciwgaWYgYHRyaWdnZXJIb29rYCBpcyBiaWdnZXIgdGhhbiBgMGAgKG9yIGBcIm9uTGVhdmVcImApLiAgXG5cdFx0ICogVGhpcyBtZWFucywgdGhhdCByZXNpemluZyB0aGUgY29udGFpbmVyIG9yIGNoYW5naW5nIHRoZSBgdHJpZ2dlckhvb2tgIHdpbGwgaW5mbHVlbmNlIHRoZSBzY2VuZSdzIHN0YXJ0IG9mZnNldC5cblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3Njcm9sbE9mZnNldFxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogLy8gZ2V0IHRoZSBjdXJyZW50IHNjcm9sbCBvZmZzZXQgZm9yIHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSBzY2VuZS5cblx0XHQgKiB2YXIgc3RhcnQgPSBzY2VuZS5zY3JvbGxPZmZzZXQoKTtcblx0XHQgKiB2YXIgZW5kID0gc2NlbmUuc2Nyb2xsT2Zmc2V0KCkgKyBzY2VuZS5kdXJhdGlvbigpO1xuXHRcdCAqIGNvbnNvbGUubG9nKFwidGhlIHNjZW5lIHN0YXJ0cyBhdFwiLCBzdGFydCwgXCJhbmQgZW5kcyBhdFwiLCBlbmQpO1xuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge251bWJlcn0gVGhlIHNjcm9sbCBvZmZzZXQgKG9mIHRoZSBjb250YWluZXIpIGF0IHdoaWNoIHRoZSBzY2VuZSB3aWxsIHRyaWdnZXIuIFkgdmFsdWUgZm9yIHZlcnRpY2FsIGFuZCBYIHZhbHVlIGZvciBob3Jpem9udGFsIHNjcm9sbHMuXG5cdFx0ICovXG5cdFx0dGhpcy5zY3JvbGxPZmZzZXQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gX3Njcm9sbE9mZnNldC5zdGFydDtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogKipHZXQqKiB0aGUgdHJpZ2dlciBwb3NpdGlvbiBvZiB0aGUgc2NlbmUgKGluY2x1ZGluZyB0aGUgdmFsdWUgb2YgdGhlIGBvZmZzZXRgIG9wdGlvbikuICBcblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3RyaWdnZXJQb3NpdGlvblxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogLy8gZ2V0IHRoZSBzY2VuZSdzIHRyaWdnZXIgcG9zaXRpb25cblx0XHQgKiB2YXIgdHJpZ2dlclBvc2l0aW9uID0gc2NlbmUudHJpZ2dlclBvc2l0aW9uKCk7XG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfSBTdGFydCBwb3NpdGlvbiBvZiB0aGUgc2NlbmUuIFRvcCBwb3NpdGlvbiB2YWx1ZSBmb3IgdmVydGljYWwgYW5kIGxlZnQgcG9zaXRpb24gdmFsdWUgZm9yIGhvcml6b250YWwgc2Nyb2xscy5cblx0XHQgKi9cblx0XHR0aGlzLnRyaWdnZXJQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBwb3MgPSBfb3B0aW9ucy5vZmZzZXQ7IC8vIHRoZSBvZmZzZXQgaXMgdGhlIGJhc2lzXG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIpIHtcblx0XHRcdFx0Ly8gZ2V0IHRoZSB0cmlnZ2VyIHBvc2l0aW9uXG5cdFx0XHRcdGlmIChfb3B0aW9ucy50cmlnZ2VyRWxlbWVudCkge1xuXHRcdFx0XHRcdC8vIEVsZW1lbnQgYXMgdHJpZ2dlclxuXHRcdFx0XHRcdHBvcyArPSBfdHJpZ2dlclBvcztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyByZXR1cm4gdGhlIGhlaWdodCBvZiB0aGUgdHJpZ2dlckhvb2sgdG8gc3RhcnQgYXQgdGhlIGJlZ2lubmluZ1xuXHRcdFx0XHRcdHBvcyArPSBfY29udHJvbGxlci5pbmZvKFwic2l6ZVwiKSAqIFNjZW5lLnRyaWdnZXJIb29rKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBwb3M7XG5cdFx0fTtcblxuXHRcdHZhclxuXHRcdF9waW4sIF9waW5PcHRpb25zO1xuXG5cdFx0U2NlbmUub24oXCJzaGlmdC5pbnRlcm5hbFwiLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0dmFyIGR1cmF0aW9uQ2hhbmdlZCA9IGUucmVhc29uID09PSBcImR1cmF0aW9uXCI7XG5cdFx0XHRpZiAoKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfQUZURVIgJiYgZHVyYXRpb25DaGFuZ2VkKSB8fCAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcgJiYgX29wdGlvbnMuZHVyYXRpb24gPT09IDApKSB7XG5cdFx0XHRcdC8vIGlmIFtkdXJhdGlvbiBjaGFuZ2VkIGFmdGVyIGEgc2NlbmUgKGluc2lkZSBzY2VuZSBwcm9ncmVzcyB1cGRhdGVzIHBpbiBwb3NpdGlvbildIG9yIFtkdXJhdGlvbiBpcyAwLCB3ZSBhcmUgaW4gcGluIHBoYXNlIGFuZCBzb21lIG90aGVyIHZhbHVlIGNoYW5nZWRdLlxuXHRcdFx0XHR1cGRhdGVQaW5TdGF0ZSgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGR1cmF0aW9uQ2hhbmdlZCkge1xuXHRcdFx0XHR1cGRhdGVQaW5EaW1lbnNpb25zKCk7XG5cdFx0XHR9XG5cdFx0fSkub24oXCJwcm9ncmVzcy5pbnRlcm5hbFwiLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0dXBkYXRlUGluU3RhdGUoKTtcblx0XHR9KS5vbihcImFkZC5pbnRlcm5hbFwiLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0dXBkYXRlUGluRGltZW5zaW9ucygpO1xuXHRcdH0pLm9uKFwiZGVzdHJveS5pbnRlcm5hbFwiLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0U2NlbmUucmVtb3ZlUGluKGUucmVzZXQpO1xuXHRcdH0pO1xuXHRcdC8qKlxuXHRcdCAqIFVwZGF0ZSB0aGUgcGluIHN0YXRlLlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dmFyIHVwZGF0ZVBpblN0YXRlID0gZnVuY3Rpb24gKGZvcmNlVW5waW4pIHtcblx0XHRcdGlmIChfcGluICYmIF9jb250cm9sbGVyKSB7XG5cdFx0XHRcdHZhclxuXHRcdFx0XHRjb250YWluZXJJbmZvID0gX2NvbnRyb2xsZXIuaW5mbygpLFxuXHRcdFx0XHRcdHBpblRhcmdldCA9IF9waW5PcHRpb25zLnNwYWNlci5maXJzdENoaWxkOyAvLyBtYXkgYmUgcGluIGVsZW1lbnQgb3IgYW5vdGhlciBzcGFjZXIsIGlmIGNhc2NhZGluZyBwaW5zXG5cdFx0XHRcdGlmICghZm9yY2VVbnBpbiAmJiBfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORykgeyAvLyBkdXJpbmcgc2NlbmUgb3IgaWYgZHVyYXRpb24gaXMgMCBhbmQgd2UgYXJlIHBhc3QgdGhlIHRyaWdnZXJcblx0XHRcdFx0XHQvLyBwaW5uZWQgc3RhdGVcblx0XHRcdFx0XHRpZiAoX3V0aWwuY3NzKHBpblRhcmdldCwgXCJwb3NpdGlvblwiKSAhPSBcImZpeGVkXCIpIHtcblx0XHRcdFx0XHRcdC8vIGNoYW5nZSBzdGF0ZSBiZWZvcmUgdXBkYXRpbmcgcGluIHNwYWNlciAocG9zaXRpb24gY2hhbmdlcyBkdWUgdG8gZml4ZWQgY29sbGFwc2luZyBtaWdodCBvY2N1ci4pXG5cdFx0XHRcdFx0XHRfdXRpbC5jc3MocGluVGFyZ2V0LCB7XG5cdFx0XHRcdFx0XHRcdFwicG9zaXRpb25cIjogXCJmaXhlZFwiXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdC8vIHVwZGF0ZSBwaW4gc3BhY2VyXG5cdFx0XHRcdFx0XHR1cGRhdGVQaW5EaW1lbnNpb25zKCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyXG5cdFx0XHRcdFx0Zml4ZWRQb3MgPSBfdXRpbC5nZXQub2Zmc2V0KF9waW5PcHRpb25zLnNwYWNlciwgdHJ1ZSksXG5cdFx0XHRcdFx0XHQvLyBnZXQgdmlld3BvcnQgcG9zaXRpb24gb2Ygc3BhY2VyXG5cdFx0XHRcdFx0XHRzY3JvbGxEaXN0YW5jZSA9IF9vcHRpb25zLnJldmVyc2UgfHwgX29wdGlvbnMuZHVyYXRpb24gPT09IDAgPyBjb250YWluZXJJbmZvLnNjcm9sbFBvcyAtIF9zY3JvbGxPZmZzZXQuc3RhcnQgLy8gcXVpY2tlclxuXHRcdFx0XHRcdFx0OiBNYXRoLnJvdW5kKF9wcm9ncmVzcyAqIF9vcHRpb25zLmR1cmF0aW9uICogMTApIC8gMTA7IC8vIGlmIG5vIHJldmVyc2UgYW5kIGR1cmluZyBwaW4gdGhlIHBvc2l0aW9uIG5lZWRzIHRvIGJlIHJlY2FsY3VsYXRlZCB1c2luZyB0aGUgcHJvZ3Jlc3Ncblx0XHRcdFx0XHQvLyBhZGQgc2Nyb2xsRGlzdGFuY2Vcblx0XHRcdFx0XHRmaXhlZFBvc1tjb250YWluZXJJbmZvLnZlcnRpY2FsID8gXCJ0b3BcIiA6IFwibGVmdFwiXSArPSBzY3JvbGxEaXN0YW5jZTtcblxuXHRcdFx0XHRcdC8vIHNldCBuZXcgdmFsdWVzXG5cdFx0XHRcdFx0X3V0aWwuY3NzKF9waW5PcHRpb25zLnNwYWNlci5maXJzdENoaWxkLCB7XG5cdFx0XHRcdFx0XHR0b3A6IGZpeGVkUG9zLnRvcCxcblx0XHRcdFx0XHRcdGxlZnQ6IGZpeGVkUG9zLmxlZnRcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyB1bnBpbm5lZCBzdGF0ZVxuXHRcdFx0XHRcdHZhclxuXHRcdFx0XHRcdG5ld0NTUyA9IHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBfcGluT3B0aW9ucy5pbkZsb3cgPyBcInJlbGF0aXZlXCIgOiBcImFic29sdXRlXCIsXG5cdFx0XHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdFx0XHRsZWZ0OiAwXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGNoYW5nZSA9IF91dGlsLmNzcyhwaW5UYXJnZXQsIFwicG9zaXRpb25cIikgIT0gbmV3Q1NTLnBvc2l0aW9uO1xuXG5cdFx0XHRcdFx0aWYgKCFfcGluT3B0aW9ucy5wdXNoRm9sbG93ZXJzKSB7XG5cdFx0XHRcdFx0XHRuZXdDU1NbY29udGFpbmVySW5mby52ZXJ0aWNhbCA/IFwidG9wXCIgOiBcImxlZnRcIl0gPSBfb3B0aW9ucy5kdXJhdGlvbiAqIF9wcm9ncmVzcztcblx0XHRcdFx0XHR9IGVsc2UgaWYgKF9vcHRpb25zLmR1cmF0aW9uID4gMCkgeyAvLyBvbmx5IGNvbmNlcm5zIHNjZW5lcyB3aXRoIGR1cmF0aW9uXG5cdFx0XHRcdFx0XHRpZiAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9BRlRFUiAmJiBwYXJzZUZsb2F0KF91dGlsLmNzcyhfcGluT3B0aW9ucy5zcGFjZXIsIFwicGFkZGluZy10b3BcIikpID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdGNoYW5nZSA9IHRydWU7IC8vIGlmIGluIGFmdGVyIHN0YXRlIGJ1dCBoYXZlbnQgdXBkYXRlZCBzcGFjZXIgeWV0IChqdW1wZWQgcGFzdCBwaW4pXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfQkVGT1JFICYmIHBhcnNlRmxvYXQoX3V0aWwuY3NzKF9waW5PcHRpb25zLnNwYWNlciwgXCJwYWRkaW5nLWJvdHRvbVwiKSkgPT09IDApIHsgLy8gYmVmb3JlXG5cdFx0XHRcdFx0XHRcdGNoYW5nZSA9IHRydWU7IC8vIGp1bXBlZCBwYXN0IGZpeGVkIHN0YXRlIHVwd2FyZCBkaXJlY3Rpb25cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gc2V0IG5ldyB2YWx1ZXNcblx0XHRcdFx0XHRfdXRpbC5jc3MocGluVGFyZ2V0LCBuZXdDU1MpO1xuXHRcdFx0XHRcdGlmIChjaGFuZ2UpIHtcblx0XHRcdFx0XHRcdC8vIHVwZGF0ZSBwaW4gc3BhY2VyIGlmIHN0YXRlIGNoYW5nZWRcblx0XHRcdFx0XHRcdHVwZGF0ZVBpbkRpbWVuc2lvbnMoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogVXBkYXRlIHRoZSBwaW4gc3BhY2VyIGFuZC9vciBlbGVtZW50IHNpemUuXG5cdFx0ICogVGhlIHNpemUgb2YgdGhlIHNwYWNlciBuZWVkcyB0byBiZSB1cGRhdGVkIHdoZW5ldmVyIHRoZSBkdXJhdGlvbiBvZiB0aGUgc2NlbmUgY2hhbmdlcywgaWYgaXQgaXMgdG8gcHVzaCBkb3duIGZvbGxvd2luZyBlbGVtZW50cy5cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHZhciB1cGRhdGVQaW5EaW1lbnNpb25zID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKF9waW4gJiYgX2NvbnRyb2xsZXIgJiYgX3Bpbk9wdGlvbnMuaW5GbG93KSB7IC8vIG5vIHNwYWNlcnJlc2l6ZSwgaWYgb3JpZ2luYWwgcG9zaXRpb24gaXMgYWJzb2x1dGVcblx0XHRcdFx0dmFyXG5cdFx0XHRcdGFmdGVyID0gKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfQUZURVIpLFxuXHRcdFx0XHRcdGJlZm9yZSA9IChfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0JFRk9SRSksXG5cdFx0XHRcdFx0ZHVyaW5nID0gKF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HKSxcblx0XHRcdFx0XHR2ZXJ0aWNhbCA9IF9jb250cm9sbGVyLmluZm8oXCJ2ZXJ0aWNhbFwiKSxcblx0XHRcdFx0XHRwaW5UYXJnZXQgPSBfcGluT3B0aW9ucy5zcGFjZXIuZmlyc3RDaGlsZCxcblx0XHRcdFx0XHQvLyB1c3VhbGx5IHRoZSBwaW5lZCBlbGVtZW50IGJ1dCBjYW4gYWxzbyBiZSBhbm90aGVyIHNwYWNlciAoY2FzY2FkZWQgcGlucylcblx0XHRcdFx0XHRtYXJnaW5Db2xsYXBzZSA9IF91dGlsLmlzTWFyZ2luQ29sbGFwc2VUeXBlKF91dGlsLmNzcyhfcGluT3B0aW9ucy5zcGFjZXIsIFwiZGlzcGxheVwiKSksXG5cdFx0XHRcdFx0Y3NzID0ge307XG5cblx0XHRcdFx0Ly8gc2V0IG5ldyBzaXplXG5cdFx0XHRcdC8vIGlmIHJlbHNpemU6IHNwYWNlciAtPiBwaW4gfCBlbHNlOiBwaW4gLT4gc3BhY2VyXG5cdFx0XHRcdGlmIChfcGluT3B0aW9ucy5yZWxTaXplLndpZHRoIHx8IF9waW5PcHRpb25zLnJlbFNpemUuYXV0b0Z1bGxXaWR0aCkge1xuXHRcdFx0XHRcdGlmIChkdXJpbmcpIHtcblx0XHRcdFx0XHRcdF91dGlsLmNzcyhfcGluLCB7XG5cdFx0XHRcdFx0XHRcdFwid2lkdGhcIjogX3V0aWwuZ2V0LndpZHRoKF9waW5PcHRpb25zLnNwYWNlcilcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRfdXRpbC5jc3MoX3Bpbiwge1xuXHRcdFx0XHRcdFx0XHRcIndpZHRoXCI6IFwiMTAwJVwiXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gbWlud2lkdGggaXMgbmVlZGVkIGZvciBjYXNjYWRlZCBwaW5zLlxuXHRcdFx0XHRcdGNzc1tcIm1pbi13aWR0aFwiXSA9IF91dGlsLmdldC53aWR0aCh2ZXJ0aWNhbCA/IF9waW4gOiBwaW5UYXJnZXQsIHRydWUsIHRydWUpO1xuXHRcdFx0XHRcdGNzcy53aWR0aCA9IGR1cmluZyA/IGNzc1tcIm1pbi13aWR0aFwiXSA6IFwiYXV0b1wiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChfcGluT3B0aW9ucy5yZWxTaXplLmhlaWdodCkge1xuXHRcdFx0XHRcdGlmIChkdXJpbmcpIHtcblx0XHRcdFx0XHRcdC8vIHRoZSBvbmx5IHBhZGRpbmcgdGhlIHNwYWNlciBzaG91bGQgZXZlciBpbmNsdWRlIGlzIHRoZSBkdXJhdGlvbiAoaWYgcHVzaEZvbGxvd2VycyA9IHRydWUpLCBzbyB3ZSBuZWVkIHRvIHN1YnN0cmFjdCB0aGF0LlxuXHRcdFx0XHRcdFx0X3V0aWwuY3NzKF9waW4sIHtcblx0XHRcdFx0XHRcdFx0XCJoZWlnaHRcIjogX3V0aWwuZ2V0LmhlaWdodChfcGluT3B0aW9ucy5zcGFjZXIpIC0gKF9waW5PcHRpb25zLnB1c2hGb2xsb3dlcnMgPyBfb3B0aW9ucy5kdXJhdGlvbiA6IDApXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0X3V0aWwuY3NzKF9waW4sIHtcblx0XHRcdFx0XHRcdFx0XCJoZWlnaHRcIjogXCIxMDAlXCJcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBtYXJnaW4gaXMgb25seSBpbmNsdWRlZCBpZiBpdCdzIGEgY2FzY2FkZWQgcGluIHRvIHJlc29sdmUgYW4gSUU5IGJ1Z1xuXHRcdFx0XHRcdGNzc1tcIm1pbi1oZWlnaHRcIl0gPSBfdXRpbC5nZXQuaGVpZ2h0KHZlcnRpY2FsID8gcGluVGFyZ2V0IDogX3BpbiwgdHJ1ZSwgIW1hcmdpbkNvbGxhcHNlKTsgLy8gbmVlZGVkIGZvciBjYXNjYWRpbmcgcGluc1xuXHRcdFx0XHRcdGNzcy5oZWlnaHQgPSBkdXJpbmcgPyBjc3NbXCJtaW4taGVpZ2h0XCJdIDogXCJhdXRvXCI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBhZGQgc3BhY2UgZm9yIGR1cmF0aW9uIGlmIHB1c2hGb2xsb3dlcnMgaXMgdHJ1ZVxuXHRcdFx0XHRpZiAoX3Bpbk9wdGlvbnMucHVzaEZvbGxvd2Vycykge1xuXHRcdFx0XHRcdGNzc1tcInBhZGRpbmdcIiArICh2ZXJ0aWNhbCA/IFwiVG9wXCIgOiBcIkxlZnRcIildID0gX29wdGlvbnMuZHVyYXRpb24gKiBfcHJvZ3Jlc3M7XG5cdFx0XHRcdFx0Y3NzW1wicGFkZGluZ1wiICsgKHZlcnRpY2FsID8gXCJCb3R0b21cIiA6IFwiUmlnaHRcIildID0gX29wdGlvbnMuZHVyYXRpb24gKiAoMSAtIF9wcm9ncmVzcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X3V0aWwuY3NzKF9waW5PcHRpb25zLnNwYWNlciwgY3NzKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogVXBkYXRlcyB0aGUgUGluIHN0YXRlIChpbiBjZXJ0YWluIHNjZW5hcmlvcylcblx0XHQgKiBJZiB0aGUgY29udHJvbGxlciBjb250YWluZXIgaXMgbm90IHRoZSBkb2N1bWVudCBhbmQgd2UgYXJlIG1pZC1waW4tcGhhc2Ugc2Nyb2xsaW5nIG9yIHJlc2l6aW5nIHRoZSBtYWluIGRvY3VtZW50IGNhbiByZXN1bHQgdG8gd3JvbmcgcGluIHBvc2l0aW9ucy5cblx0XHQgKiBTbyB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiByZXNpemUgYW5kIHNjcm9sbCBvZiB0aGUgZG9jdW1lbnQuXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR2YXIgdXBkYXRlUGluSW5Db250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIgJiYgX3BpbiAmJiBfc3RhdGUgPT09IFNDRU5FX1NUQVRFX0RVUklORyAmJiAhX2NvbnRyb2xsZXIuaW5mbyhcImlzRG9jdW1lbnRcIikpIHtcblx0XHRcdFx0dXBkYXRlUGluU3RhdGUoKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogVXBkYXRlcyB0aGUgUGluIHNwYWNlciBzaXplIHN0YXRlIChpbiBjZXJ0YWluIHNjZW5hcmlvcylcblx0XHQgKiBJZiBjb250YWluZXIgaXMgcmVzaXplZCBkdXJpbmcgcGluIGFuZCByZWxhdGl2ZWx5IHNpemVkIHRoZSBzaXplIG9mIHRoZSBwaW4gbWlnaHQgbmVlZCB0byBiZSB1cGRhdGVkLi4uXG5cdFx0ICogU28gdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgb24gcmVzaXplIG9mIHRoZSBjb250YWluZXIuXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR2YXIgdXBkYXRlUmVsYXRpdmVQaW5TcGFjZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoX2NvbnRyb2xsZXIgJiYgX3BpbiAmJiAvLyB3ZWxsLCBkdWhcblx0XHRcdF9zdGF0ZSA9PT0gU0NFTkVfU1RBVEVfRFVSSU5HICYmIC8vIGVsZW1lbnQgaW4gcGlubmVkIHN0YXRlP1xuXHRcdFx0KCAvLyBpcyB3aWR0aCBvciBoZWlnaHQgcmVsYXRpdmVseSBzaXplZCwgYnV0IG5vdCBpbiByZWxhdGlvbiB0byBib2R5PyB0aGVuIHdlIG5lZWQgdG8gcmVjYWxjLlxuXHRcdFx0KChfcGluT3B0aW9ucy5yZWxTaXplLndpZHRoIHx8IF9waW5PcHRpb25zLnJlbFNpemUuYXV0b0Z1bGxXaWR0aCkgJiYgX3V0aWwuZ2V0LndpZHRoKHdpbmRvdykgIT0gX3V0aWwuZ2V0LndpZHRoKF9waW5PcHRpb25zLnNwYWNlci5wYXJlbnROb2RlKSkgfHwgKF9waW5PcHRpb25zLnJlbFNpemUuaGVpZ2h0ICYmIF91dGlsLmdldC5oZWlnaHQod2luZG93KSAhPSBfdXRpbC5nZXQuaGVpZ2h0KF9waW5PcHRpb25zLnNwYWNlci5wYXJlbnROb2RlKSkpKSB7XG5cdFx0XHRcdHVwZGF0ZVBpbkRpbWVuc2lvbnMoKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogSXMgY2FsbGVkLCB3aGVuIHRoZSBtb3VzZXdoZWwgaXMgdXNlZCB3aGlsZSBvdmVyIGEgcGlubmVkIGVsZW1lbnQgaW5zaWRlIGEgZGl2IGNvbnRhaW5lci5cblx0XHQgKiBJZiB0aGUgc2NlbmUgaXMgaW4gZml4ZWQgc3RhdGUgc2Nyb2xsIGV2ZW50cyB3b3VsZCBiZSBjb3VudGVkIHRvd2FyZHMgdGhlIGJvZHkuIFRoaXMgZm9yd2FyZHMgdGhlIGV2ZW50IHRvIHRoZSBzY3JvbGwgY29udGFpbmVyLlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dmFyIG9uTW91c2V3aGVlbE92ZXJQaW4gPSBmdW5jdGlvbiAoZSkge1xuXHRcdFx0aWYgKF9jb250cm9sbGVyICYmIF9waW4gJiYgX3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcgJiYgIV9jb250cm9sbGVyLmluZm8oXCJpc0RvY3VtZW50XCIpKSB7IC8vIGluIHBpbiBzdGF0ZVxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdF9jb250cm9sbGVyLl9zZXRTY3JvbGxQb3MoX2NvbnRyb2xsZXIuaW5mbyhcInNjcm9sbFBvc1wiKSAtICgoZS53aGVlbERlbHRhIHx8IGVbX2NvbnRyb2xsZXIuaW5mbyhcInZlcnRpY2FsXCIpID8gXCJ3aGVlbERlbHRhWVwiIDogXCJ3aGVlbERlbHRhWFwiXSkgLyAzIHx8IC1lLmRldGFpbCAqIDMwKSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFBpbiBhbiBlbGVtZW50IGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIHR3ZWVuLiAgXG5cdFx0ICogSWYgdGhlIHNjZW5lIGR1cmF0aW9uIGlzIDAgdGhlIGVsZW1lbnQgd2lsbCBvbmx5IGJlIHVucGlubmVkLCBpZiB0aGUgdXNlciBzY3JvbGxzIGJhY2sgcGFzdCB0aGUgc3RhcnQgcG9zaXRpb24uICBcblx0XHQgKiBNYWtlIHN1cmUgb25seSBvbmUgcGluIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCBhdCB0aGUgc2FtZSB0aW1lLlxuXHRcdCAqIEFuIGVsZW1lbnQgY2FuIGJlIHBpbm5lZCBtdWx0aXBsZSB0aW1lcywgYnV0IG9ubHkgc3VjY2Vzc2l2ZWx5LlxuXHRcdCAqIF8qKk5PVEU6KiogVGhlIG9wdGlvbiBgcHVzaEZvbGxvd2Vyc2AgaGFzIG5vIGVmZmVjdCwgd2hlbiB0aGUgc2NlbmUgZHVyYXRpb24gaXMgMC5fXG5cdFx0ICogQG1ldGhvZCBTY3JvbGxNYWdpYy5TY2VuZSNzZXRQaW5cblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIC8vIHBpbiBlbGVtZW50IGFuZCBwdXNoIGFsbCBmb2xsb3dpbmcgZWxlbWVudHMgZG93biBieSB0aGUgYW1vdW50IG9mIHRoZSBwaW4gZHVyYXRpb24uXG5cdFx0ICogc2NlbmUuc2V0UGluKFwiI3BpblwiKTtcblx0XHQgKlxuXHRcdCAqIC8vIHBpbiBlbGVtZW50IGFuZCBrZWVwaW5nIGFsbCBmb2xsb3dpbmcgZWxlbWVudHMgaW4gdGhlaXIgcGxhY2UuIFRoZSBwaW5uZWQgZWxlbWVudCB3aWxsIG1vdmUgcGFzdCB0aGVtLlxuXHRcdCAqIHNjZW5lLnNldFBpbihcIiNwaW5cIiwge3B1c2hGb2xsb3dlcnM6IGZhbHNlfSk7XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gZWxlbWVudCAtIEEgU2VsZWN0b3IgdGFyZ2V0aW5nIGFuIGVsZW1lbnQgb3IgYSBET00gb2JqZWN0IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgcGlubmVkLlxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBbc2V0dGluZ3NdIC0gc2V0dGluZ3MgZm9yIHRoZSBwaW5cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtzZXR0aW5ncy5wdXNoRm9sbG93ZXJzPXRydWVdIC0gSWYgYHRydWVgIGZvbGxvd2luZyBlbGVtZW50cyB3aWxsIGJlIFwicHVzaGVkXCIgZG93biBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBwaW4sIGlmIGBmYWxzZWAgdGhlIHBpbm5lZCBlbGVtZW50IHdpbGwganVzdCBzY3JvbGwgcGFzdCB0aGVtLiAgXG5cdFx0IElnbm9yZWQsIHdoZW4gZHVyYXRpb24gaXMgYDBgLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbc2V0dGluZ3Muc3BhY2VyQ2xhc3M9XCJzY3JvbGxtYWdpYy1waW4tc3BhY2VyXCJdIC0gQ2xhc3NuYW1lIG9mIHRoZSBwaW4gc3BhY2VyIGVsZW1lbnQsIHdoaWNoIGlzIHVzZWQgdG8gcmVwbGFjZSB0aGUgZWxlbWVudC5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRQaW4gPSBmdW5jdGlvbiAoZWxlbWVudCwgc2V0dGluZ3MpIHtcblx0XHRcdHZhclxuXHRcdFx0ZGVmYXVsdFNldHRpbmdzID0ge1xuXHRcdFx0XHRwdXNoRm9sbG93ZXJzOiB0cnVlLFxuXHRcdFx0XHRzcGFjZXJDbGFzczogXCJzY3JvbGxtYWdpYy1waW4tc3BhY2VyXCJcblx0XHRcdH07XG5cdFx0XHRzZXR0aW5ncyA9IF91dGlsLmV4dGVuZCh7fSwgZGVmYXVsdFNldHRpbmdzLCBzZXR0aW5ncyk7XG5cblx0XHRcdC8vIHZhbGlkYXRlIEVsZW1lbnRcblx0XHRcdGVsZW1lbnQgPSBfdXRpbC5nZXQuZWxlbWVudHMoZWxlbWVudClbMF07XG5cdFx0XHRpZiAoIWVsZW1lbnQpIHtcblx0XHRcdFx0bG9nKDEsIFwiRVJST1IgY2FsbGluZyBtZXRob2QgJ3NldFBpbigpJzogSW52YWxpZCBwaW4gZWxlbWVudCBzdXBwbGllZC5cIik7XG5cdFx0XHRcdHJldHVybiBTY2VuZTsgLy8gY2FuY2VsXG5cdFx0XHR9IGVsc2UgaWYgKF91dGlsLmNzcyhlbGVtZW50LCBcInBvc2l0aW9uXCIpID09PSBcImZpeGVkXCIpIHtcblx0XHRcdFx0bG9nKDEsIFwiRVJST1IgY2FsbGluZyBtZXRob2QgJ3NldFBpbigpJzogUGluIGRvZXMgbm90IHdvcmsgd2l0aCBlbGVtZW50cyB0aGF0IGFyZSBwb3NpdGlvbmVkICdmaXhlZCcuXCIpO1xuXHRcdFx0XHRyZXR1cm4gU2NlbmU7IC8vIGNhbmNlbFxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoX3BpbikgeyAvLyBwcmVleGlzdGluZyBwaW4/XG5cdFx0XHRcdGlmIChfcGluID09PSBlbGVtZW50KSB7XG5cdFx0XHRcdFx0Ly8gc2FtZSBwaW4gd2UgYWxyZWFkeSBoYXZlIC0+IGRvIG5vdGhpbmdcblx0XHRcdFx0XHRyZXR1cm4gU2NlbmU7IC8vIGNhbmNlbFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIGtpbGwgb2xkIHBpblxuXHRcdFx0XHRcdFNjZW5lLnJlbW92ZVBpbigpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHRcdF9waW4gPSBlbGVtZW50O1xuXG5cdFx0XHR2YXJcblx0XHRcdHBhcmVudERpc3BsYXkgPSBfcGluLnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSxcblx0XHRcdFx0Ym91bmRzUGFyYW1zID0gW1widG9wXCIsIFwibGVmdFwiLCBcImJvdHRvbVwiLCBcInJpZ2h0XCIsIFwibWFyZ2luXCIsIFwibWFyZ2luTGVmdFwiLCBcIm1hcmdpblJpZ2h0XCIsIFwibWFyZ2luVG9wXCIsIFwibWFyZ2luQm90dG9tXCJdO1xuXG5cdFx0XHRfcGluLnBhcmVudE5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgLy8gaGFjayBzdGFydCB0byBmb3JjZSBjc3MgdG8gcmV0dXJuIHN0eWxlc2hlZXQgdmFsdWVzIGluc3RlYWQgb2YgY2FsY3VsYXRlZCBweCB2YWx1ZXMuXG5cdFx0XHR2YXJcblx0XHRcdGluRmxvdyA9IF91dGlsLmNzcyhfcGluLCBcInBvc2l0aW9uXCIpICE9IFwiYWJzb2x1dGVcIixcblx0XHRcdFx0cGluQ1NTID0gX3V0aWwuY3NzKF9waW4sIGJvdW5kc1BhcmFtcy5jb25jYXQoW1wiZGlzcGxheVwiXSkpLFxuXHRcdFx0XHRzaXplQ1NTID0gX3V0aWwuY3NzKF9waW4sIFtcIndpZHRoXCIsIFwiaGVpZ2h0XCJdKTtcblx0XHRcdF9waW4ucGFyZW50Tm9kZS5zdHlsZS5kaXNwbGF5ID0gcGFyZW50RGlzcGxheTsgLy8gaGFjayBlbmQuXG5cdFx0XHRpZiAoIWluRmxvdyAmJiBzZXR0aW5ncy5wdXNoRm9sbG93ZXJzKSB7XG5cdFx0XHRcdGxvZygyLCBcIldBUk5JTkc6IElmIHRoZSBwaW5uZWQgZWxlbWVudCBpcyBwb3NpdGlvbmVkIGFic29sdXRlbHkgcHVzaEZvbGxvd2VycyB3aWxsIGJlIGRpc2FibGVkLlwiKTtcblx0XHRcdFx0c2V0dGluZ3MucHVzaEZvbGxvd2VycyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyAvLyB3YWl0IHVudGlsIGFsbCBmaW5pc2hlZCwgYmVjYXVzZSB3aXRoIHJlc3BvbnNpdmUgZHVyYXRpb24gaXQgd2lsbCBvbmx5IGJlIHNldCBhZnRlciBzY2VuZSBpcyBhZGRlZCB0byBjb250cm9sbGVyXG5cdFx0XHRcdGlmIChfcGluICYmIF9vcHRpb25zLmR1cmF0aW9uID09PSAwICYmIHNldHRpbmdzLnB1c2hGb2xsb3dlcnMpIHtcblx0XHRcdFx0XHRsb2coMiwgXCJXQVJOSU5HOiBwdXNoRm9sbG93ZXJzID1cIiwgdHJ1ZSwgXCJoYXMgbm8gZWZmZWN0LCB3aGVuIHNjZW5lIGR1cmF0aW9uIGlzIDAuXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCAwKTtcblxuXHRcdFx0Ly8gY3JlYXRlIHNwYWNlciBhbmQgaW5zZXJ0XG5cdFx0XHR2YXJcblx0XHRcdHNwYWNlciA9IF9waW4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIF9waW4pLFxuXHRcdFx0XHRzcGFjZXJDU1MgPSBfdXRpbC5leHRlbmQocGluQ1NTLCB7XG5cdFx0XHRcdFx0cG9zaXRpb246IGluRmxvdyA/IFwicmVsYXRpdmVcIiA6IFwiYWJzb2x1dGVcIixcblx0XHRcdFx0XHRib3hTaXppbmc6IFwiY29udGVudC1ib3hcIixcblx0XHRcdFx0XHRtb3pCb3hTaXppbmc6IFwiY29udGVudC1ib3hcIixcblx0XHRcdFx0XHR3ZWJraXRCb3hTaXppbmc6IFwiY29udGVudC1ib3hcIlxuXHRcdFx0XHR9KTtcblxuXHRcdFx0aWYgKCFpbkZsb3cpIHsgLy8gY29weSBzaXplIGlmIHBvc2l0aW9uZWQgYWJzb2x1dGVseSwgdG8gd29yayBmb3IgYm90dG9tL3JpZ2h0IHBvc2l0aW9uZWQgZWxlbWVudHMuXG5cdFx0XHRcdF91dGlsLmV4dGVuZChzcGFjZXJDU1MsIF91dGlsLmNzcyhfcGluLCBbXCJ3aWR0aFwiLCBcImhlaWdodFwiXSkpO1xuXHRcdFx0fVxuXG5cdFx0XHRfdXRpbC5jc3Moc3BhY2VyLCBzcGFjZXJDU1MpO1xuXHRcdFx0c3BhY2VyLnNldEF0dHJpYnV0ZShQSU5fU1BBQ0VSX0FUVFJJQlVURSwgXCJcIik7XG5cdFx0XHRfdXRpbC5hZGRDbGFzcyhzcGFjZXIsIHNldHRpbmdzLnNwYWNlckNsYXNzKTtcblxuXHRcdFx0Ly8gc2V0IHRoZSBwaW4gT3B0aW9uc1xuXHRcdFx0X3Bpbk9wdGlvbnMgPSB7XG5cdFx0XHRcdHNwYWNlcjogc3BhY2VyLFxuXHRcdFx0XHRyZWxTaXplOiB7IC8vIHNhdmUgaWYgc2l6ZSBpcyBkZWZpbmVkIHVzaW5nICUgdmFsdWVzLiBpZiBzbywgaGFuZGxlIHNwYWNlciByZXNpemUgZGlmZmVyZW50bHkuLi5cblx0XHRcdFx0XHR3aWR0aDogc2l6ZUNTUy53aWR0aC5zbGljZSgtMSkgPT09IFwiJVwiLFxuXHRcdFx0XHRcdGhlaWdodDogc2l6ZUNTUy5oZWlnaHQuc2xpY2UoLTEpID09PSBcIiVcIixcblx0XHRcdFx0XHRhdXRvRnVsbFdpZHRoOiBzaXplQ1NTLndpZHRoID09PSBcImF1dG9cIiAmJiBpbkZsb3cgJiYgX3V0aWwuaXNNYXJnaW5Db2xsYXBzZVR5cGUocGluQ1NTLmRpc3BsYXkpXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHB1c2hGb2xsb3dlcnM6IHNldHRpbmdzLnB1c2hGb2xsb3dlcnMsXG5cdFx0XHRcdGluRmxvdzogaW5GbG93LFxuXHRcdFx0XHQvLyBzdG9yZXMgaWYgdGhlIGVsZW1lbnQgdGFrZXMgdXAgc3BhY2UgaW4gdGhlIGRvY3VtZW50IGZsb3dcblx0XHRcdH07XG5cblx0XHRcdGlmICghX3Bpbi5fX19vcmlnU3R5bGUpIHtcblx0XHRcdFx0X3Bpbi5fX19vcmlnU3R5bGUgPSB7fTtcblx0XHRcdFx0dmFyXG5cdFx0XHRcdHBpbklubGluZUNTUyA9IF9waW4uc3R5bGUsXG5cdFx0XHRcdFx0Y29weVN0eWxlcyA9IGJvdW5kc1BhcmFtcy5jb25jYXQoW1wid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJwb3NpdGlvblwiLCBcImJveFNpemluZ1wiLCBcIm1vekJveFNpemluZ1wiLCBcIndlYmtpdEJveFNpemluZ1wiXSk7XG5cdFx0XHRcdGNvcHlTdHlsZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG5cdFx0XHRcdFx0X3Bpbi5fX19vcmlnU3R5bGVbdmFsXSA9IHBpbklubGluZUNTU1t2YWxdIHx8IFwiXCI7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBpZiByZWxhdGl2ZSBzaXplLCB0cmFuc2ZlciBpdCB0byBzcGFjZXIgYW5kIG1ha2UgcGluIGNhbGN1bGF0ZSBpdC4uLlxuXHRcdFx0aWYgKF9waW5PcHRpb25zLnJlbFNpemUud2lkdGgpIHtcblx0XHRcdFx0X3V0aWwuY3NzKHNwYWNlciwge1xuXHRcdFx0XHRcdHdpZHRoOiBzaXplQ1NTLndpZHRoXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0aWYgKF9waW5PcHRpb25zLnJlbFNpemUuaGVpZ2h0KSB7XG5cdFx0XHRcdF91dGlsLmNzcyhzcGFjZXIsIHtcblx0XHRcdFx0XHRoZWlnaHQ6IHNpemVDU1MuaGVpZ2h0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBub3cgcGxhY2UgdGhlIHBpbiBlbGVtZW50IGluc2lkZSB0aGUgc3BhY2VyXHRcblx0XHRcdHNwYWNlci5hcHBlbmRDaGlsZChfcGluKTtcblx0XHRcdC8vIGFuZCBzZXQgbmV3IGNzc1xuXHRcdFx0X3V0aWwuY3NzKF9waW4sIHtcblx0XHRcdFx0cG9zaXRpb246IGluRmxvdyA/IFwicmVsYXRpdmVcIiA6IFwiYWJzb2x1dGVcIixcblx0XHRcdFx0bWFyZ2luOiBcImF1dG9cIixcblx0XHRcdFx0dG9wOiBcImF1dG9cIixcblx0XHRcdFx0bGVmdDogXCJhdXRvXCIsXG5cdFx0XHRcdGJvdHRvbTogXCJhdXRvXCIsXG5cdFx0XHRcdHJpZ2h0OiBcImF1dG9cIlxuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChfcGluT3B0aW9ucy5yZWxTaXplLndpZHRoIHx8IF9waW5PcHRpb25zLnJlbFNpemUuYXV0b0Z1bGxXaWR0aCkge1xuXHRcdFx0XHRfdXRpbC5jc3MoX3Bpbiwge1xuXHRcdFx0XHRcdGJveFNpemluZzogXCJib3JkZXItYm94XCIsXG5cdFx0XHRcdFx0bW96Qm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcblx0XHRcdFx0XHR3ZWJraXRCb3hTaXppbmc6IFwiYm9yZGVyLWJveFwiXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBhZGQgbGlzdGVuZXIgdG8gZG9jdW1lbnQgdG8gdXBkYXRlIHBpbiBwb3NpdGlvbiBpbiBjYXNlIGNvbnRyb2xsZXIgaXMgbm90IHRoZSBkb2N1bWVudC5cblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVQaW5JbkNvbnRhaW5lcik7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlUGluSW5Db250YWluZXIpO1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVJlbGF0aXZlUGluU3BhY2VyKTtcblx0XHRcdC8vIGFkZCBtb3VzZXdoZWVsIGxpc3RlbmVyIHRvIGNhdGNoIHNjcm9sbHMgb3ZlciBmaXhlZCBlbGVtZW50c1xuXHRcdFx0X3Bpbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCBvbk1vdXNld2hlZWxPdmVyUGluKTtcblx0XHRcdF9waW4uYWRkRXZlbnRMaXN0ZW5lcihcIkRPTU1vdXNlU2Nyb2xsXCIsIG9uTW91c2V3aGVlbE92ZXJQaW4pO1xuXG5cdFx0XHRsb2coMywgXCJhZGRlZCBwaW5cIik7XG5cblx0XHRcdC8vIGZpbmFsbHkgdXBkYXRlIHRoZSBwaW4gdG8gaW5pdFxuXHRcdFx0dXBkYXRlUGluU3RhdGUoKTtcblxuXHRcdFx0cmV0dXJuIFNjZW5lO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBSZW1vdmUgdGhlIHBpbiBmcm9tIHRoZSBzY2VuZS5cblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3JlbW92ZVBpblxuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogLy8gcmVtb3ZlIHRoZSBwaW4gZnJvbSB0aGUgc2NlbmUgd2l0aG91dCByZXNldHRpbmcgaXQgKHRoZSBzcGFjZXIgaXMgbm90IHJlbW92ZWQpXG5cdFx0ICogc2NlbmUucmVtb3ZlUGluKCk7XG5cdFx0ICpcblx0XHQgKiAvLyByZW1vdmUgdGhlIHBpbiBmcm9tIHRoZSBzY2VuZSBhbmQgcmVzZXQgdGhlIHBpbiBlbGVtZW50IHRvIGl0cyBpbml0aWFsIHBvc2l0aW9uIChzcGFjZXIgaXMgcmVtb3ZlZClcblx0XHQgKiBzY2VuZS5yZW1vdmVQaW4odHJ1ZSk7XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXNldD1mYWxzZV0gLSBJZiBgZmFsc2VgIHRoZSBzcGFjZXIgd2lsbCBub3QgYmUgcmVtb3ZlZCBhbmQgdGhlIGVsZW1lbnQncyBwb3NpdGlvbiB3aWxsIG5vdCBiZSByZXNldC5cblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxuXHRcdCAqL1xuXHRcdHRoaXMucmVtb3ZlUGluID0gZnVuY3Rpb24gKHJlc2V0KSB7XG5cdFx0XHRpZiAoX3Bpbikge1xuXHRcdFx0XHRpZiAoX3N0YXRlID09PSBTQ0VORV9TVEFURV9EVVJJTkcpIHtcblx0XHRcdFx0XHR1cGRhdGVQaW5TdGF0ZSh0cnVlKTsgLy8gZm9yY2UgdW5waW4gYXQgcG9zaXRpb25cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocmVzZXQgfHwgIV9jb250cm9sbGVyKSB7IC8vIGlmIHRoZXJlJ3Mgbm8gY29udHJvbGxlciBubyBwcm9ncmVzcyB3YXMgbWFkZSBhbnl3YXkuLi5cblx0XHRcdFx0XHR2YXIgcGluVGFyZ2V0ID0gX3Bpbk9wdGlvbnMuc3BhY2VyLmZpcnN0Q2hpbGQ7IC8vIHVzdWFsbHkgdGhlIHBpbiBlbGVtZW50LCBidXQgbWF5IGJlIGFub3RoZXIgc3BhY2VyIChjYXNjYWRlZCBwaW5zKS4uLlxuXHRcdFx0XHRcdGlmIChwaW5UYXJnZXQuaGFzQXR0cmlidXRlKFBJTl9TUEFDRVJfQVRUUklCVVRFKSkgeyAvLyBjb3B5IG1hcmdpbnMgdG8gY2hpbGQgc3BhY2VyXG5cdFx0XHRcdFx0XHR2YXJcblx0XHRcdFx0XHRcdHN0eWxlID0gX3Bpbk9wdGlvbnMuc3BhY2VyLnN0eWxlLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZXMgPSBbXCJtYXJnaW5cIiwgXCJtYXJnaW5MZWZ0XCIsIFwibWFyZ2luUmlnaHRcIiwgXCJtYXJnaW5Ub3BcIiwgXCJtYXJnaW5Cb3R0b21cIl07XG5cdFx0XHRcdFx0XHRtYXJnaW5zID0ge307XG5cdFx0XHRcdFx0XHR2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbnNbdmFsXSA9IHN0eWxlW3ZhbF0gfHwgXCJcIjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0X3V0aWwuY3NzKHBpblRhcmdldCwgbWFyZ2lucyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF9waW5PcHRpb25zLnNwYWNlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShwaW5UYXJnZXQsIF9waW5PcHRpb25zLnNwYWNlcik7XG5cdFx0XHRcdFx0X3Bpbk9wdGlvbnMuc3BhY2VyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX3Bpbk9wdGlvbnMuc3BhY2VyKTtcblx0XHRcdFx0XHRpZiAoIV9waW4ucGFyZW50Tm9kZS5oYXNBdHRyaWJ1dGUoUElOX1NQQUNFUl9BVFRSSUJVVEUpKSB7IC8vIGlmIGl0J3MgdGhlIGxhc3QgcGluIGZvciB0aGlzIGVsZW1lbnQgLT4gcmVzdG9yZSBpbmxpbmUgc3R5bGVzXG5cdFx0XHRcdFx0XHQvLyBUT0RPOiBvbmx5IGNvcnJlY3RseSBzZXQgZm9yIGZpcnN0IHBpbiAod2hlbiBjYXNjYWRpbmcpIC0gaG93IHRvIGZpeD9cblx0XHRcdFx0XHRcdF91dGlsLmNzcyhfcGluLCBfcGluLl9fX29yaWdTdHlsZSk7XG5cdFx0XHRcdFx0XHRkZWxldGUgX3Bpbi5fX19vcmlnU3R5bGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVQaW5JbkNvbnRhaW5lcik7XG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVQaW5JbkNvbnRhaW5lcik7XG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVSZWxhdGl2ZVBpblNwYWNlcik7XG5cdFx0XHRcdF9waW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgb25Nb3VzZXdoZWVsT3ZlclBpbik7XG5cdFx0XHRcdF9waW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTU1vdXNlU2Nyb2xsXCIsIG9uTW91c2V3aGVlbE92ZXJQaW4pO1xuXHRcdFx0XHRfcGluID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRsb2coMywgXCJyZW1vdmVkIHBpbiAocmVzZXQ6IFwiICsgKHJlc2V0ID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIpICsgXCIpXCIpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIFNjZW5lO1xuXHRcdH07XG5cblxuXHRcdHZhclxuXHRcdF9jc3NDbGFzc2VzLCBfY3NzQ2xhc3NFbGVtcyA9IFtdO1xuXG5cdFx0U2NlbmUub24oXCJkZXN0cm95LmludGVybmFsXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRTY2VuZS5yZW1vdmVDbGFzc1RvZ2dsZShlLnJlc2V0KTtcblx0XHR9KTtcblx0XHQvKipcblx0XHQgKiBEZWZpbmUgYSBjc3MgY2xhc3MgbW9kaWZpY2F0aW9uIHdoaWxlIHRoZSBzY2VuZSBpcyBhY3RpdmUuICBcblx0XHQgKiBXaGVuIHRoZSBzY2VuZSB0cmlnZ2VycyB0aGUgY2xhc3NlcyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBzdXBwbGllZCBlbGVtZW50IGFuZCByZW1vdmVkLCB3aGVuIHRoZSBzY2VuZSBpcyBvdmVyLlxuXHRcdCAqIElmIHRoZSBzY2VuZSBkdXJhdGlvbiBpcyAwIHRoZSBjbGFzc2VzIHdpbGwgb25seSBiZSByZW1vdmVkIGlmIHRoZSB1c2VyIHNjcm9sbHMgYmFjayBwYXN0IHRoZSBzdGFydCBwb3NpdGlvbi5cblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3NldENsYXNzVG9nZ2xlXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiAvLyBhZGQgdGhlIGNsYXNzICdteWNsYXNzJyB0byB0aGUgZWxlbWVudCB3aXRoIHRoZSBpZCAnbXktZWxlbScgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgc2NlbmVcblx0XHQgKiBzY2VuZS5zZXRDbGFzc1RvZ2dsZShcIiNteS1lbGVtXCIsIFwibXljbGFzc1wiKTtcblx0XHQgKlxuXHRcdCAqIC8vIGFkZCBtdWx0aXBsZSBjbGFzc2VzIHRvIG11bHRpcGxlIGVsZW1lbnRzIGRlZmluZWQgYnkgdGhlIHNlbGVjdG9yICcuY2xhc3NDaGFuZ2UnXG5cdFx0ICogc2NlbmUuc2V0Q2xhc3NUb2dnbGUoXCIuY2xhc3NDaGFuZ2VcIiwgXCJjbGFzczEgY2xhc3MyIGNsYXNzM1wiKTtcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ3xvYmplY3QpfSBlbGVtZW50IC0gQSBTZWxlY3RvciB0YXJnZXRpbmcgb25lIG9yIG1vcmUgZWxlbWVudHMgb3IgYSBET00gb2JqZWN0IHRoYXQgaXMgc3VwcG9zZWQgdG8gYmUgbW9kaWZpZWQuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzZXMgLSBPbmUgb3IgbW9yZSBDbGFzc25hbWVzIChzZXBhcmF0ZWQgYnkgc3BhY2UpIHRoYXQgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBlbGVtZW50IGR1cmluZyB0aGUgc2NlbmUuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7U2NlbmV9IFBhcmVudCBvYmplY3QgZm9yIGNoYWluaW5nLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0Q2xhc3NUb2dnbGUgPSBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3Nlcykge1xuXHRcdFx0dmFyIGVsZW1zID0gX3V0aWwuZ2V0LmVsZW1lbnRzKGVsZW1lbnQpO1xuXHRcdFx0aWYgKGVsZW1zLmxlbmd0aCA9PT0gMCB8fCAhX3V0aWwudHlwZS5TdHJpbmcoY2xhc3NlcykpIHtcblx0XHRcdFx0bG9nKDEsIFwiRVJST1IgY2FsbGluZyBtZXRob2QgJ3NldENsYXNzVG9nZ2xlKCknOiBJbnZhbGlkIFwiICsgKGVsZW1zLmxlbmd0aCA9PT0gMCA/IFwiZWxlbWVudFwiIDogXCJjbGFzc2VzXCIpICsgXCIgc3VwcGxpZWQuXCIpO1xuXHRcdFx0XHRyZXR1cm4gU2NlbmU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoX2Nzc0NsYXNzRWxlbXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHQvLyByZW1vdmUgb2xkIG9uZXNcblx0XHRcdFx0U2NlbmUucmVtb3ZlQ2xhc3NUb2dnbGUoKTtcblx0XHRcdH1cblx0XHRcdF9jc3NDbGFzc2VzID0gY2xhc3Nlcztcblx0XHRcdF9jc3NDbGFzc0VsZW1zID0gZWxlbXM7XG5cdFx0XHRTY2VuZS5vbihcImVudGVyLmludGVybmFsX2NsYXNzIGxlYXZlLmludGVybmFsX2NsYXNzXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdHZhciB0b2dnbGUgPSBlLnR5cGUgPT09IFwiZW50ZXJcIiA/IF91dGlsLmFkZENsYXNzIDogX3V0aWwucmVtb3ZlQ2xhc3M7XG5cdFx0XHRcdF9jc3NDbGFzc0VsZW1zLmZvckVhY2goZnVuY3Rpb24gKGVsZW0sIGtleSkge1xuXHRcdFx0XHRcdHRvZ2dsZShlbGVtLCBfY3NzQ2xhc3Nlcyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gU2NlbmU7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSB0aGUgY2xhc3MgYmluZGluZyBmcm9tIHRoZSBzY2VuZS5cblx0XHQgKiBAbWV0aG9kIFNjcm9sbE1hZ2ljLlNjZW5lI3JlbW92ZUNsYXNzVG9nZ2xlXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiAvLyByZW1vdmUgY2xhc3MgYmluZGluZyBmcm9tIHRoZSBzY2VuZSB3aXRob3V0IHJlc2V0XG5cdFx0ICogc2NlbmUucmVtb3ZlQ2xhc3NUb2dnbGUoKTtcblx0XHQgKlxuXHRcdCAqIC8vIHJlbW92ZSBjbGFzcyBiaW5kaW5nIGFuZCByZW1vdmUgdGhlIGNoYW5nZXMgaXQgY2F1c2VkXG5cdFx0ICogc2NlbmUucmVtb3ZlQ2xhc3NUb2dnbGUodHJ1ZSk7XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXNldD1mYWxzZV0gLSBJZiBgZmFsc2VgIGFuZCB0aGUgY2xhc3NlcyBhcmUgY3VycmVudGx5IGFjdGl2ZSwgdGhleSB3aWxsIHJlbWFpbiBvbiB0aGUgZWxlbWVudC4gSWYgYHRydWVgIHRoZXkgd2lsbCBiZSByZW1vdmVkLlxuXHRcdCAqIEByZXR1cm5zIHtTY2VuZX0gUGFyZW50IG9iamVjdCBmb3IgY2hhaW5pbmcuXG5cdFx0ICovXG5cdFx0dGhpcy5yZW1vdmVDbGFzc1RvZ2dsZSA9IGZ1bmN0aW9uIChyZXNldCkge1xuXHRcdFx0aWYgKHJlc2V0KSB7XG5cdFx0XHRcdF9jc3NDbGFzc0VsZW1zLmZvckVhY2goZnVuY3Rpb24gKGVsZW0sIGtleSkge1xuXHRcdFx0XHRcdF91dGlsLnJlbW92ZUNsYXNzKGVsZW0sIF9jc3NDbGFzc2VzKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRTY2VuZS5vZmYoXCJzdGFydC5pbnRlcm5hbF9jbGFzcyBlbmQuaW50ZXJuYWxfY2xhc3NcIik7XG5cdFx0XHRfY3NzQ2xhc3NlcyA9IHVuZGVmaW5lZDtcblx0XHRcdF9jc3NDbGFzc0VsZW1zID0gW107XG5cdFx0XHRyZXR1cm4gU2NlbmU7XG5cdFx0fTtcblxuXHRcdC8vIElOSVRcblx0XHRjb25zdHJ1Y3QoKTtcblx0XHRyZXR1cm4gU2NlbmU7XG5cdH07XG5cblx0Ly8gc3RvcmUgcGFnZXdpZGUgc2NlbmUgb3B0aW9uc1xuXHR2YXIgU0NFTkVfT1BUSU9OUyA9IHtcblx0XHRkZWZhdWx0czoge1xuXHRcdFx0ZHVyYXRpb246IDAsXG5cdFx0XHRvZmZzZXQ6IDAsXG5cdFx0XHR0cmlnZ2VyRWxlbWVudDogdW5kZWZpbmVkLFxuXHRcdFx0dHJpZ2dlckhvb2s6IDAuNSxcblx0XHRcdHJldmVyc2U6IHRydWUsXG5cdFx0XHRsb2dsZXZlbDogMlxuXHRcdH0sXG5cdFx0dmFsaWRhdGU6IHtcblx0XHRcdG9mZnNldDogZnVuY3Rpb24gKHZhbCkge1xuXHRcdFx0XHR2YWwgPSBwYXJzZUZsb2F0KHZhbCk7XG5cdFx0XHRcdGlmICghX3V0aWwudHlwZS5OdW1iZXIodmFsKSkge1xuXHRcdFx0XHRcdHRocm93IFtcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwib2Zmc2V0XFxcIjpcIiwgdmFsXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdmFsO1xuXHRcdFx0fSxcblx0XHRcdHRyaWdnZXJFbGVtZW50OiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0XHRcdHZhbCA9IHZhbCB8fCB1bmRlZmluZWQ7XG5cdFx0XHRcdGlmICh2YWwpIHtcblx0XHRcdFx0XHR2YXIgZWxlbSA9IF91dGlsLmdldC5lbGVtZW50cyh2YWwpWzBdO1xuXHRcdFx0XHRcdGlmIChlbGVtKSB7XG5cdFx0XHRcdFx0XHR2YWwgPSBlbGVtO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBbXCJFbGVtZW50IGRlZmluZWQgaW4gb3B0aW9uIFxcXCJ0cmlnZ2VyRWxlbWVudFxcXCIgd2FzIG5vdCBmb3VuZDpcIiwgdmFsXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZhbDtcblx0XHRcdH0sXG5cdFx0XHR0cmlnZ2VySG9vazogZnVuY3Rpb24gKHZhbCkge1xuXHRcdFx0XHR2YXIgdHJhbnNsYXRlID0ge1xuXHRcdFx0XHRcdFwib25DZW50ZXJcIjogMC41LFxuXHRcdFx0XHRcdFwib25FbnRlclwiOiAxLFxuXHRcdFx0XHRcdFwib25MZWF2ZVwiOiAwXG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmIChfdXRpbC50eXBlLk51bWJlcih2YWwpKSB7XG5cdFx0XHRcdFx0dmFsID0gTWF0aC5tYXgoMCwgTWF0aC5taW4ocGFyc2VGbG9hdCh2YWwpLCAxKSk7IC8vICBtYWtlIHN1cmUgaXRzIGJldHdlZWVuIDAgYW5kIDFcblx0XHRcdFx0fSBlbHNlIGlmICh2YWwgaW4gdHJhbnNsYXRlKSB7XG5cdFx0XHRcdFx0dmFsID0gdHJhbnNsYXRlW3ZhbF07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhyb3cgW1wiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJ0cmlnZ2VySG9va1xcXCI6IFwiLCB2YWxdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWw7XG5cdFx0XHR9LFxuXHRcdFx0cmV2ZXJzZTogZnVuY3Rpb24gKHZhbCkge1xuXHRcdFx0XHRyZXR1cm4gISF2YWw7IC8vIGZvcmNlIGJvb2xlYW5cblx0XHRcdH0sXG5cdFx0XHRsb2dsZXZlbDogZnVuY3Rpb24gKHZhbCkge1xuXHRcdFx0XHR2YWwgPSBwYXJzZUludCh2YWwpO1xuXHRcdFx0XHRpZiAoIV91dGlsLnR5cGUuTnVtYmVyKHZhbCkgfHwgdmFsIDwgMCB8fCB2YWwgPiAzKSB7XG5cdFx0XHRcdFx0dGhyb3cgW1wiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJsb2dsZXZlbFxcXCI6XCIsIHZhbF07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZhbDtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vIGhvbGRlciBmb3IgIHZhbGlkYXRpb24gbWV0aG9kcy4gZHVyYXRpb24gdmFsaWRhdGlvbiBpcyBoYW5kbGVkIGluICdnZXR0ZXJzLXNldHRlcnMuanMnXG5cdFx0c2hpZnRzOiBbXCJkdXJhdGlvblwiLCBcIm9mZnNldFwiLCBcInRyaWdnZXJIb29rXCJdLFxuXHRcdC8vIGxpc3Qgb2Ygb3B0aW9ucyB0aGF0IHRyaWdnZXIgYSBgc2hpZnRgIGV2ZW50XG5cdH07XG4vKlxuICogbWV0aG9kIHVzZWQgdG8gYWRkIGFuIG9wdGlvbiB0byBTY3JvbGxNYWdpYyBTY2VuZXMuXG4gKiBUT0RPOiBET0MgKHByaXZhdGUgZm9yIGRldilcbiAqL1xuXHRTY3JvbGxNYWdpYy5TY2VuZS5hZGRPcHRpb24gPSBmdW5jdGlvbiAobmFtZSwgZGVmYXVsdFZhbHVlLCB2YWxpZGF0aW9uQ2FsbGJhY2ssIHNoaWZ0cykge1xuXHRcdGlmICghKG5hbWUgaW4gU0NFTkVfT1BUSU9OUy5kZWZhdWx0cykpIHtcblx0XHRcdFNDRU5FX09QVElPTlMuZGVmYXVsdHNbbmFtZV0gPSBkZWZhdWx0VmFsdWU7XG5cdFx0XHRTQ0VORV9PUFRJT05TLnZhbGlkYXRlW25hbWVdID0gdmFsaWRhdGlvbkNhbGxiYWNrO1xuXHRcdFx0aWYgKHNoaWZ0cykge1xuXHRcdFx0XHRTQ0VORV9PUFRJT05TLnNoaWZ0cy5wdXNoKG5hbWUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRTY3JvbGxNYWdpYy5fdXRpbC5sb2coMSwgXCJbc3RhdGljXSBTY3JvbGxNYWdpYy5TY2VuZSAtPiBDYW5ub3QgYWRkIFNjZW5lIG9wdGlvbiAnXCIgKyBuYW1lICsgXCInLCBiZWNhdXNlIGl0IGFscmVhZHkgZXhpc3RzLlwiKTtcblx0XHR9XG5cdH07XG5cdC8vIGluc3RhbmNlIGV4dGVuc2lvbiBmdW5jdGlvbiBmb3IgcGx1Z2luc1xuXHQvLyBUT0RPOiBET0MgKHByaXZhdGUgZm9yIGRldilcblx0U2Nyb2xsTWFnaWMuU2NlbmUuZXh0ZW5kID0gZnVuY3Rpb24gKGV4dGVuc2lvbikge1xuXHRcdHZhciBvbGRDbGFzcyA9IHRoaXM7XG5cdFx0U2Nyb2xsTWFnaWMuU2NlbmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRvbGRDbGFzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0dGhpcy4kc3VwZXIgPSBfdXRpbC5leHRlbmQoe30sIHRoaXMpOyAvLyBjb3B5IHBhcmVudCBzdGF0ZVxuXHRcdFx0cmV0dXJuIGV4dGVuc2lvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG5cdFx0fTtcblx0XHRfdXRpbC5leHRlbmQoU2Nyb2xsTWFnaWMuU2NlbmUsIG9sZENsYXNzKTsgLy8gY29weSBwcm9wZXJ0aWVzXG5cdFx0U2Nyb2xsTWFnaWMuU2NlbmUucHJvdG90eXBlID0gb2xkQ2xhc3MucHJvdG90eXBlOyAvLyBjb3B5IHByb3RvdHlwZVxuXHRcdFNjcm9sbE1hZ2ljLlNjZW5lLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNjcm9sbE1hZ2ljLlNjZW5lOyAvLyByZXN0b3JlIGNvbnN0cnVjdG9yXG5cdH07XG5cblxuXHQvKipcblx0ICogVE9ETzogRE9DUyAocHJpdmF0ZSBmb3IgZGV2KVxuXHQgKiBAY2xhc3Ncblx0ICogQHByaXZhdGVcblx0ICovXG5cblx0U2Nyb2xsTWFnaWMuRXZlbnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZXNwYWNlLCB0YXJnZXQsIHZhcnMpIHtcblx0XHR2YXJzID0gdmFycyB8fCB7fTtcblx0XHRmb3IgKHZhciBrZXkgaW4gdmFycykge1xuXHRcdFx0dGhpc1trZXldID0gdmFyc1trZXldO1xuXHRcdH1cblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMudGFyZ2V0ID0gdGhpcy5jdXJyZW50VGFyZ2V0ID0gdGFyZ2V0O1xuXHRcdHRoaXMubmFtZXNwYWNlID0gbmFtZXNwYWNlIHx8ICcnO1xuXHRcdHRoaXMudGltZVN0YW1wID0gdGhpcy50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG4vKlxuICogVE9ETzogRE9DUyAocHJpdmF0ZSBmb3IgZGV2KVxuICovXG5cblx0dmFyIF91dGlsID0gU2Nyb2xsTWFnaWMuX3V0aWwgPSAoZnVuY3Rpb24gKHdpbmRvdykge1xuXHRcdHZhciBVID0ge30sXG5cdFx0XHRpO1xuXG5cdFx0LyoqXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0ICogaW50ZXJuYWwgaGVscGVyc1xuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdCAqL1xuXG5cdFx0Ly8gcGFyc2UgZmxvYXQgYW5kIGZhbGwgYmFjayB0byAwLlxuXHRcdHZhciBmbG9hdHZhbCA9IGZ1bmN0aW9uIChudW1iZXIpIHtcblx0XHRcdHJldHVybiBwYXJzZUZsb2F0KG51bWJlcikgfHwgMDtcblx0XHR9O1xuXHRcdC8vIGdldCBjdXJyZW50IHN0eWxlIElFIHNhZmUgKG90aGVyd2lzZSBJRSB3b3VsZCByZXR1cm4gY2FsY3VsYXRlZCB2YWx1ZXMgZm9yICdhdXRvJylcblx0XHR2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdFx0cmV0dXJuIGVsZW0uY3VycmVudFN0eWxlID8gZWxlbS5jdXJyZW50U3R5bGUgOiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcblx0XHR9O1xuXG5cdFx0Ly8gZ2V0IGVsZW1lbnQgZGltZW5zaW9uICh3aWR0aCBvciBoZWlnaHQpXG5cdFx0dmFyIF9kaW1lbnNpb24gPSBmdW5jdGlvbiAod2hpY2gsIGVsZW0sIG91dGVyLCBpbmNsdWRlTWFyZ2luKSB7XG5cdFx0XHRlbGVtID0gKGVsZW0gPT09IGRvY3VtZW50KSA/IHdpbmRvdyA6IGVsZW07XG5cdFx0XHRpZiAoZWxlbSA9PT0gd2luZG93KSB7XG5cdFx0XHRcdGluY2x1ZGVNYXJnaW4gPSBmYWxzZTtcblx0XHRcdH0gZWxzZSBpZiAoIV90eXBlLkRvbUVsZW1lbnQoZWxlbSkpIHtcblx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHR9XG5cdFx0XHR3aGljaCA9IHdoaWNoLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd2hpY2guc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHR2YXIgZGltZW5zaW9uID0gKG91dGVyID8gZWxlbVsnb2Zmc2V0JyArIHdoaWNoXSB8fCBlbGVtWydvdXRlcicgKyB3aGljaF0gOiBlbGVtWydjbGllbnQnICsgd2hpY2hdIHx8IGVsZW1bJ2lubmVyJyArIHdoaWNoXSkgfHwgMDtcblx0XHRcdGlmIChvdXRlciAmJiBpbmNsdWRlTWFyZ2luKSB7XG5cdFx0XHRcdHZhciBzdHlsZSA9IF9nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuXHRcdFx0XHRkaW1lbnNpb24gKz0gd2hpY2ggPT09ICdIZWlnaHQnID8gZmxvYXR2YWwoc3R5bGUubWFyZ2luVG9wKSArIGZsb2F0dmFsKHN0eWxlLm1hcmdpbkJvdHRvbSkgOiBmbG9hdHZhbChzdHlsZS5tYXJnaW5MZWZ0KSArIGZsb2F0dmFsKHN0eWxlLm1hcmdpblJpZ2h0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkaW1lbnNpb247XG5cdFx0fTtcblx0XHQvLyBjb252ZXJ0cyAnbWFyZ2luLXRvcCcgaW50byAnbWFyZ2luVG9wJ1xuXHRcdHZhciBfY2FtZWxDYXNlID0gZnVuY3Rpb24gKHN0cikge1xuXHRcdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC9eW15hLXpdKyhbYS16XSkvZywgJyQxJykucmVwbGFjZSgvLShbYS16XSkvZywgZnVuY3Rpb24gKGcpIHtcblx0XHRcdFx0cmV0dXJuIGdbMV0udG9VcHBlckNhc2UoKTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQgKiBleHRlcm5hbCBoZWxwZXJzXG5cdFx0ICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0ICovXG5cblx0XHQvLyBleHRlbmQgb2JqIOKAkyBzYW1lIGFzIGpRdWVyeS5leHRlbmQoe30sIG9iakEsIG9iakIpXG5cdFx0VS5leHRlbmQgPSBmdW5jdGlvbiAob2JqKSB7XG5cdFx0XHRvYmogPSBvYmogfHwge307XG5cdFx0XHRmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICghYXJndW1lbnRzW2ldKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuXHRcdFx0XHRcdGlmIChhcmd1bWVudHNbaV0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRcdFx0b2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fTtcblxuXHRcdC8vIGNoZWNrIGlmIGEgY3NzIGRpc3BsYXkgdHlwZSByZXN1bHRzIGluIG1hcmdpbi1jb2xsYXBzZSBvciBub3Rcblx0XHRVLmlzTWFyZ2luQ29sbGFwc2VUeXBlID0gZnVuY3Rpb24gKHN0cikge1xuXHRcdFx0cmV0dXJuIFtcImJsb2NrXCIsIFwiZmxleFwiLCBcImxpc3QtaXRlbVwiLCBcInRhYmxlXCIsIFwiLXdlYmtpdC1ib3hcIl0uaW5kZXhPZihzdHIpID4gLTE7XG5cdFx0fTtcblxuXHRcdC8vIGltcGxlbWVudGF0aW9uIG9mIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuXHRcdC8vIGJhc2VkIG9uIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxpcmlzaC8xNTc5NjcxXG5cdFx0dmFyXG5cdFx0bGFzdFRpbWUgPSAwLFxuXHRcdFx0dmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ107XG5cdFx0dmFyIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRcdHZhciBfY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU7XG5cdFx0Ly8gdHJ5IHZlbmRvciBwcmVmaXhlcyBpZiB0aGUgYWJvdmUgZG9lc24ndCB3b3JrXG5cdFx0Zm9yIChpID0gMDsgIV9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgJiYgaSA8IHZlbmRvcnMubGVuZ3RoOyArK2kpIHtcblx0XHRcdF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1tpXSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcblx0XHRcdF9jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW2ldICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHwgd2luZG93W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG5cdFx0fVxuXG5cdFx0Ly8gZmFsbGJhY2tzXG5cdFx0aWYgKCFfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0XHRfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRcdHZhclxuXHRcdFx0XHRjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuXHRcdFx0XHRcdHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSksXG5cdFx0XHRcdFx0aWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xuXHRcdFx0XHRcdH0sIHRpbWVUb0NhbGwpO1xuXHRcdFx0XHRsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcblx0XHRcdFx0cmV0dXJuIGlkO1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0aWYgKCFfY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcblx0XHRcdF9jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KGlkKTtcblx0XHRcdH07XG5cdFx0fVxuXHRcdFUuckFGID0gX3JlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdyk7XG5cdFx0VS5jQUYgPSBfY2FuY2VsQW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpO1xuXG5cdFx0dmFyXG5cdFx0bG9nbGV2ZWxzID0gW1wiZXJyb3JcIiwgXCJ3YXJuXCIsIFwibG9nXCJdLFxuXHRcdFx0Y29uc29sZSA9IHdpbmRvdy5jb25zb2xlIHx8IHt9O1xuXG5cdFx0Y29uc29sZS5sb2cgPSBjb25zb2xlLmxvZyB8fFxuXHRcdGZ1bmN0aW9uICgpIHt9OyAvLyBubyBjb25zb2xlIGxvZywgd2VsbCAtIGRvIG5vdGhpbmcgdGhlbi4uLlxuXHRcdC8vIG1ha2Ugc3VyZSBtZXRob2RzIGZvciBhbGwgbGV2ZWxzIGV4aXN0LlxuXHRcdGZvciAoaSA9IDA7IGkgPCBsb2dsZXZlbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBtZXRob2QgPSBsb2dsZXZlbHNbaV07XG5cdFx0XHRpZiAoIWNvbnNvbGVbbWV0aG9kXSkge1xuXHRcdFx0XHRjb25zb2xlW21ldGhvZF0gPSBjb25zb2xlLmxvZzsgLy8gcHJlZmVyIC5sb2cgb3ZlciBub3RoaW5nXG5cdFx0XHR9XG5cdFx0fVxuXHRcdFUubG9nID0gZnVuY3Rpb24gKGxvZ2xldmVsKSB7XG5cdFx0XHRpZiAobG9nbGV2ZWwgPiBsb2dsZXZlbHMubGVuZ3RoIHx8IGxvZ2xldmVsIDw9IDApIGxvZ2xldmVsID0gbG9nbGV2ZWxzLmxlbmd0aDtcblx0XHRcdHZhciBub3cgPSBuZXcgRGF0ZSgpLFxuXHRcdFx0XHR0aW1lID0gKFwiMFwiICsgbm93LmdldEhvdXJzKCkpLnNsaWNlKC0yKSArIFwiOlwiICsgKFwiMFwiICsgbm93LmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpICsgXCI6XCIgKyAoXCIwXCIgKyBub3cuZ2V0U2Vjb25kcygpKS5zbGljZSgtMikgKyBcIjpcIiArIChcIjAwXCIgKyBub3cuZ2V0TWlsbGlzZWNvbmRzKCkpLnNsaWNlKC0zKSxcblx0XHRcdFx0bWV0aG9kID0gbG9nbGV2ZWxzW2xvZ2xldmVsIC0gMV0sXG5cdFx0XHRcdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcblx0XHRcdFx0ZnVuYyA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwoY29uc29sZVttZXRob2RdLCBjb25zb2xlKTtcblx0XHRcdGFyZ3MudW5zaGlmdCh0aW1lKTtcblx0XHRcdGZ1bmMuYXBwbHkoY29uc29sZSwgYXJncyk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdCAqIHR5cGUgdGVzdGluZ1xuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdCAqL1xuXG5cdFx0dmFyIF90eXBlID0gVS50eXBlID0gZnVuY3Rpb24gKHYpIHtcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodikucmVwbGFjZSgvXlxcW29iamVjdCAoLispXFxdJC8sIFwiJDFcIikudG9Mb3dlckNhc2UoKTtcblx0XHR9O1xuXHRcdF90eXBlLlN0cmluZyA9IGZ1bmN0aW9uICh2KSB7XG5cdFx0XHRyZXR1cm4gX3R5cGUodikgPT09ICdzdHJpbmcnO1xuXHRcdH07XG5cdFx0X3R5cGUuRnVuY3Rpb24gPSBmdW5jdGlvbiAodikge1xuXHRcdFx0cmV0dXJuIF90eXBlKHYpID09PSAnZnVuY3Rpb24nO1xuXHRcdH07XG5cdFx0X3R5cGUuQXJyYXkgPSBmdW5jdGlvbiAodikge1xuXHRcdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkodik7XG5cdFx0fTtcblx0XHRfdHlwZS5OdW1iZXIgPSBmdW5jdGlvbiAodikge1xuXHRcdFx0cmV0dXJuICFfdHlwZS5BcnJheSh2KSAmJiAodiAtIHBhcnNlRmxvYXQodikgKyAxKSA+PSAwO1xuXHRcdH07XG5cdFx0X3R5cGUuRG9tRWxlbWVudCA9IGZ1bmN0aW9uIChvKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0dHlwZW9mIEhUTUxFbGVtZW50ID09PSBcIm9iamVjdFwiID8gbyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IDogLy9ET00yXG5cdFx0XHRvICYmIHR5cGVvZiBvID09PSBcIm9iamVjdFwiICYmIG8gIT09IG51bGwgJiYgby5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygby5ub2RlTmFtZSA9PT0gXCJzdHJpbmdcIik7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdCAqIERPTSBFbGVtZW50IGluZm9cblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQgKi9cblx0XHQvLyBhbHdheXMgcmV0dXJucyBhIGxpc3Qgb2YgbWF0Y2hpbmcgRE9NIGVsZW1lbnRzLCBmcm9tIGEgc2VsZWN0b3IsIGEgRE9NIGVsZW1lbnQgb3IgYW4gbGlzdCBvZiBlbGVtZW50cyBvciBldmVuIGFuIGFycmF5IG9mIHNlbGVjdG9yc1xuXHRcdHZhciBfZ2V0ID0gVS5nZXQgPSB7fTtcblx0XHRfZ2V0LmVsZW1lbnRzID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG5cdFx0XHR2YXIgYXJyID0gW107XG5cdFx0XHRpZiAoX3R5cGUuU3RyaW5nKHNlbGVjdG9yKSkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHsgLy8gaW52YWxpZCBzZWxlY3RvclxuXHRcdFx0XHRcdHJldHVybiBhcnI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChfdHlwZShzZWxlY3RvcikgPT09ICdub2RlbGlzdCcgfHwgX3R5cGUuQXJyYXkoc2VsZWN0b3IpKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwLCByZWYgPSBhcnIubGVuZ3RoID0gc2VsZWN0b3IubGVuZ3RoOyBpIDwgcmVmOyBpKyspIHsgLy8gbGlzdCBvZiBlbGVtZW50c1xuXHRcdFx0XHRcdHZhciBlbGVtID0gc2VsZWN0b3JbaV07XG5cdFx0XHRcdFx0YXJyW2ldID0gX3R5cGUuRG9tRWxlbWVudChlbGVtKSA/IGVsZW0gOiBfZ2V0LmVsZW1lbnRzKGVsZW0pOyAvLyBpZiBub3QgYW4gZWxlbWVudCwgdHJ5IHRvIHJlc29sdmUgcmVjdXJzaXZlbHlcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChfdHlwZS5Eb21FbGVtZW50KHNlbGVjdG9yKSB8fCBzZWxlY3RvciA9PT0gZG9jdW1lbnQgfHwgc2VsZWN0b3IgPT09IHdpbmRvdykge1xuXHRcdFx0XHRhcnIgPSBbc2VsZWN0b3JdOyAvLyBvbmx5IHRoZSBlbGVtZW50XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYXJyO1xuXHRcdH07XG5cdFx0Ly8gZ2V0IHNjcm9sbCB0b3AgdmFsdWVcblx0XHRfZ2V0LnNjcm9sbFRvcCA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRyZXR1cm4gKGVsZW0gJiYgdHlwZW9mIGVsZW0uc2Nyb2xsVG9wID09PSAnbnVtYmVyJykgPyBlbGVtLnNjcm9sbFRvcCA6IHdpbmRvdy5wYWdlWU9mZnNldCB8fCAwO1xuXHRcdH07XG5cdFx0Ly8gZ2V0IHNjcm9sbCBsZWZ0IHZhbHVlXG5cdFx0X2dldC5zY3JvbGxMZWZ0ID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRcdHJldHVybiAoZWxlbSAmJiB0eXBlb2YgZWxlbS5zY3JvbGxMZWZ0ID09PSAnbnVtYmVyJykgPyBlbGVtLnNjcm9sbExlZnQgOiB3aW5kb3cucGFnZVhPZmZzZXQgfHwgMDtcblx0XHR9O1xuXHRcdC8vIGdldCBlbGVtZW50IGhlaWdodFxuXHRcdF9nZXQud2lkdGggPSBmdW5jdGlvbiAoZWxlbSwgb3V0ZXIsIGluY2x1ZGVNYXJnaW4pIHtcblx0XHRcdHJldHVybiBfZGltZW5zaW9uKCd3aWR0aCcsIGVsZW0sIG91dGVyLCBpbmNsdWRlTWFyZ2luKTtcblx0XHR9O1xuXHRcdC8vIGdldCBlbGVtZW50IHdpZHRoXG5cdFx0X2dldC5oZWlnaHQgPSBmdW5jdGlvbiAoZWxlbSwgb3V0ZXIsIGluY2x1ZGVNYXJnaW4pIHtcblx0XHRcdHJldHVybiBfZGltZW5zaW9uKCdoZWlnaHQnLCBlbGVtLCBvdXRlciwgaW5jbHVkZU1hcmdpbik7XG5cdFx0fTtcblxuXHRcdC8vIGdldCBlbGVtZW50IHBvc2l0aW9uIChvcHRpb25hbGx5IHJlbGF0aXZlIHRvIHZpZXdwb3J0KVxuXHRcdF9nZXQub2Zmc2V0ID0gZnVuY3Rpb24gKGVsZW0sIHJlbGF0aXZlVG9WaWV3cG9ydCkge1xuXHRcdFx0dmFyIG9mZnNldCA9IHtcblx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRsZWZ0OiAwXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGVsZW0gJiYgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHsgLy8gY2hlY2sgaWYgYXZhaWxhYmxlXG5cdFx0XHRcdHZhciByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0b2Zmc2V0LnRvcCA9IHJlY3QudG9wO1xuXHRcdFx0XHRvZmZzZXQubGVmdCA9IHJlY3QubGVmdDtcblx0XHRcdFx0aWYgKCFyZWxhdGl2ZVRvVmlld3BvcnQpIHsgLy8gY2xpZW50UmVjdCBpcyBieSBkZWZhdWx0IHJlbGF0aXZlIHRvIHZpZXdwb3J0Li4uXG5cdFx0XHRcdFx0b2Zmc2V0LnRvcCArPSBfZ2V0LnNjcm9sbFRvcCgpO1xuXHRcdFx0XHRcdG9mZnNldC5sZWZ0ICs9IF9nZXQuc2Nyb2xsTGVmdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2Zmc2V0O1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQgKiBET00gRWxlbWVudCBtYW5pcHVsYXRpb25cblx0XHQgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQgKi9cblxuXHRcdFUuYWRkQ2xhc3MgPSBmdW5jdGlvbiAoZWxlbSwgY2xhc3NuYW1lKSB7XG5cdFx0XHRpZiAoY2xhc3NuYW1lKSB7XG5cdFx0XHRcdGlmIChlbGVtLmNsYXNzTGlzdCkgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzbmFtZSk7XG5cdFx0XHRcdGVsc2UgZWxlbS5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NuYW1lO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0VS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChlbGVtLCBjbGFzc25hbWUpIHtcblx0XHRcdGlmIChjbGFzc25hbWUpIHtcblx0XHRcdFx0aWYgKGVsZW0uY2xhc3NMaXN0KSBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NuYW1lKTtcblx0XHRcdFx0ZWxzZSBlbGVtLmNsYXNzTmFtZSA9IGVsZW0uY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzbmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKSwgJyAnKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8vIGlmIG9wdGlvbnMgaXMgc3RyaW5nIC0+IHJldHVybnMgY3NzIHZhbHVlXG5cdFx0Ly8gaWYgb3B0aW9ucyBpcyBhcnJheSAtPiByZXR1cm5zIG9iamVjdCB3aXRoIGNzcyB2YWx1ZSBwYWlyc1xuXHRcdC8vIGlmIG9wdGlvbnMgaXMgb2JqZWN0IC0+IHNldCBuZXcgY3NzIHZhbHVlc1xuXHRcdFUuY3NzID0gZnVuY3Rpb24gKGVsZW0sIG9wdGlvbnMpIHtcblx0XHRcdGlmIChfdHlwZS5TdHJpbmcob3B0aW9ucykpIHtcblx0XHRcdFx0cmV0dXJuIF9nZXRDb21wdXRlZFN0eWxlKGVsZW0pW19jYW1lbENhc2Uob3B0aW9ucyldO1xuXHRcdFx0fSBlbHNlIGlmIChfdHlwZS5BcnJheShvcHRpb25zKSkge1xuXHRcdFx0XHR2YXJcblx0XHRcdFx0b2JqID0ge30sXG5cdFx0XHRcdFx0c3R5bGUgPSBfZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcblx0XHRcdFx0b3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb24sIGtleSkge1xuXHRcdFx0XHRcdG9ialtvcHRpb25dID0gc3R5bGVbX2NhbWVsQ2FzZShvcHRpb24pXTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiBvYmo7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmb3IgKHZhciBvcHRpb24gaW4gb3B0aW9ucykge1xuXHRcdFx0XHRcdHZhciB2YWwgPSBvcHRpb25zW29wdGlvbl07XG5cdFx0XHRcdFx0aWYgKHZhbCA9PSBwYXJzZUZsb2F0KHZhbCkpIHsgLy8gYXNzdW1lIHBpeGVsIGZvciBzZWVtaW5nbHkgbnVtZXJpY2FsIHZhbHVlc1xuXHRcdFx0XHRcdFx0dmFsICs9ICdweCc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsZW0uc3R5bGVbX2NhbWVsQ2FzZShvcHRpb24pXSA9IHZhbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRyZXR1cm4gVTtcblx0fSh3aW5kb3cgfHwge30pKTtcblxuXHRTY3JvbGxNYWdpYy5TY2VuZS5wcm90b3R5cGUuYWRkSW5kaWNhdG9ycyA9IGZ1bmN0aW9uICgpIHtcblx0XHRTY3JvbGxNYWdpYy5fdXRpbC5sb2coMSwgJyhTY3JvbGxNYWdpYy5TY2VuZSkgLT4gRVJST1IgY2FsbGluZyBhZGRJbmRpY2F0b3JzKCkgZHVlIHRvIG1pc3NpbmcgUGx1Z2luIFxcJ2RlYnVnLmFkZEluZGljYXRvcnNcXCcuIFBsZWFzZSBtYWtlIHN1cmUgdG8gaW5jbHVkZSBwbHVnaW5zL2RlYnVnLmFkZEluZGljYXRvcnMuanMnKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRTY3JvbGxNYWdpYy5TY2VuZS5wcm90b3R5cGUucmVtb3ZlSW5kaWNhdG9ycyA9IGZ1bmN0aW9uICgpIHtcblx0XHRTY3JvbGxNYWdpYy5fdXRpbC5sb2coMSwgJyhTY3JvbGxNYWdpYy5TY2VuZSkgLT4gRVJST1IgY2FsbGluZyByZW1vdmVJbmRpY2F0b3JzKCkgZHVlIHRvIG1pc3NpbmcgUGx1Z2luIFxcJ2RlYnVnLmFkZEluZGljYXRvcnNcXCcuIFBsZWFzZSBtYWtlIHN1cmUgdG8gaW5jbHVkZSBwbHVnaW5zL2RlYnVnLmFkZEluZGljYXRvcnMuanMnKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRTY3JvbGxNYWdpYy5TY2VuZS5wcm90b3R5cGUuc2V0VHdlZW4gPSBmdW5jdGlvbiAoKSB7XG5cdFx0U2Nyb2xsTWFnaWMuX3V0aWwubG9nKDEsICcoU2Nyb2xsTWFnaWMuU2NlbmUpIC0+IEVSUk9SIGNhbGxpbmcgc2V0VHdlZW4oKSBkdWUgdG8gbWlzc2luZyBQbHVnaW4gXFwnYW5pbWF0aW9uLmdzYXBcXCcuIFBsZWFzZSBtYWtlIHN1cmUgdG8gaW5jbHVkZSBwbHVnaW5zL2FuaW1hdGlvbi5nc2FwLmpzJyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0U2Nyb2xsTWFnaWMuU2NlbmUucHJvdG90eXBlLnJlbW92ZVR3ZWVuID0gZnVuY3Rpb24gKCkge1xuXHRcdFNjcm9sbE1hZ2ljLl91dGlsLmxvZygxLCAnKFNjcm9sbE1hZ2ljLlNjZW5lKSAtPiBFUlJPUiBjYWxsaW5nIHJlbW92ZVR3ZWVuKCkgZHVlIHRvIG1pc3NpbmcgUGx1Z2luIFxcJ2FuaW1hdGlvbi5nc2FwXFwnLiBQbGVhc2UgbWFrZSBzdXJlIHRvIGluY2x1ZGUgcGx1Z2lucy9hbmltYXRpb24uZ3NhcC5qcycpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFNjcm9sbE1hZ2ljLlNjZW5lLnByb3RvdHlwZS5zZXRWZWxvY2l0eSA9IGZ1bmN0aW9uICgpIHtcblx0XHRTY3JvbGxNYWdpYy5fdXRpbC5sb2coMSwgJyhTY3JvbGxNYWdpYy5TY2VuZSkgLT4gRVJST1IgY2FsbGluZyBzZXRWZWxvY2l0eSgpIGR1ZSB0byBtaXNzaW5nIFBsdWdpbiBcXCdhbmltYXRpb24udmVsb2NpdHlcXCcuIFBsZWFzZSBtYWtlIHN1cmUgdG8gaW5jbHVkZSBwbHVnaW5zL2FuaW1hdGlvbi52ZWxvY2l0eS5qcycpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdFNjcm9sbE1hZ2ljLlNjZW5lLnByb3RvdHlwZS5yZW1vdmVWZWxvY2l0eSA9IGZ1bmN0aW9uICgpIHtcblx0XHRTY3JvbGxNYWdpYy5fdXRpbC5sb2coMSwgJyhTY3JvbGxNYWdpYy5TY2VuZSkgLT4gRVJST1IgY2FsbGluZyByZW1vdmVWZWxvY2l0eSgpIGR1ZSB0byBtaXNzaW5nIFBsdWdpbiBcXCdhbmltYXRpb24udmVsb2NpdHlcXCcuIFBsZWFzZSBtYWtlIHN1cmUgdG8gaW5jbHVkZSBwbHVnaW5zL2FuaW1hdGlvbi52ZWxvY2l0eS5qcycpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cmV0dXJuIFNjcm9sbE1hZ2ljO1xufSkpOyIsIi8qIVxuICogXG4gKiAgIHR5cGVkLmpzIC0gQSBKYXZhU2NyaXB0IFR5cGluZyBBbmltYXRpb24gTGlicmFyeVxuICogICBBdXRob3I6IE1hdHQgQm9sZHQgPG1lQG1hdHRib2xkdC5jb20+XG4gKiAgIFZlcnNpb246IHYyLjAuNlxuICogICBVcmw6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0Ym9sZHQvdHlwZWQuanNcbiAqICAgTGljZW5zZShzKTogTUlUXG4gKiBcbiAqL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVHlwZWRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVHlwZWRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cdFxuXHR2YXIgX2luaXRpYWxpemVySnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHRcblx0dmFyIF9odG1sUGFyc2VySnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXHRcblx0LyoqXG5cdCAqIFdlbGNvbWUgdG8gVHlwZWQuanMhXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtZW50SWQgSFRNTCBlbGVtZW50IElEIF9PUl8gSFRNTCBlbGVtZW50XG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIG9wdGlvbnMgb2JqZWN0XG5cdCAqIEByZXR1cm5zIHtvYmplY3R9IGEgbmV3IFR5cGVkIG9iamVjdFxuXHQgKi9cblx0XG5cdHZhciBUeXBlZCA9IChmdW5jdGlvbiAoKSB7XG5cdCAgZnVuY3Rpb24gVHlwZWQoZWxlbWVudElkLCBvcHRpb25zKSB7XG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHlwZWQpO1xuXHRcblx0ICAgIC8vIEluaXRpYWxpemUgaXQgdXBcblx0ICAgIF9pbml0aWFsaXplckpzLmluaXRpYWxpemVyLmxvYWQodGhpcywgb3B0aW9ucywgZWxlbWVudElkKTtcblx0ICAgIC8vIEFsbCBzeXN0ZW1zIGdvIVxuXHQgICAgdGhpcy5iZWdpbigpO1xuXHQgIH1cblx0XG5cdCAgLyoqXG5cdCAgICogVG9nZ2xlIHN0YXJ0KCkgYW5kIHN0b3AoKSBvZiB0aGUgVHlwZWQgaW5zdGFuY2Vcblx0ICAgKiBAcHVibGljXG5cdCAgICovXG5cdFxuXHQgIF9jcmVhdGVDbGFzcyhUeXBlZCwgW3tcblx0ICAgIGtleTogJ3RvZ2dsZScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdG9nZ2xlKCkge1xuXHQgICAgICB0aGlzLnBhdXNlLnN0YXR1cyA/IHRoaXMuc3RhcnQoKSA6IHRoaXMuc3RvcCgpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogU3RvcCB0eXBpbmcgLyBiYWNrc3BhY2luZyBhbmQgZW5hYmxlIGN1cnNvciBibGlua2luZ1xuXHQgICAgICogQHB1YmxpY1xuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnc3RvcCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcblx0ICAgICAgaWYgKHRoaXMudHlwaW5nQ29tcGxldGUpIHJldHVybjtcblx0ICAgICAgaWYgKHRoaXMucGF1c2Uuc3RhdHVzKSByZXR1cm47XG5cdCAgICAgIHRoaXMudG9nZ2xlQmxpbmtpbmcodHJ1ZSk7XG5cdCAgICAgIHRoaXMucGF1c2Uuc3RhdHVzID0gdHJ1ZTtcblx0ICAgICAgdGhpcy5vcHRpb25zLm9uU3RvcCh0aGlzLmFycmF5UG9zLCB0aGlzKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFN0YXJ0IHR5cGluZyAvIGJhY2tzcGFjaW5nIGFmdGVyIGJlaW5nIHN0b3BwZWRcblx0ICAgICAqIEBwdWJsaWNcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3N0YXJ0Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHtcblx0ICAgICAgaWYgKHRoaXMudHlwaW5nQ29tcGxldGUpIHJldHVybjtcblx0ICAgICAgaWYgKCF0aGlzLnBhdXNlLnN0YXR1cykgcmV0dXJuO1xuXHQgICAgICB0aGlzLnBhdXNlLnN0YXR1cyA9IGZhbHNlO1xuXHQgICAgICBpZiAodGhpcy5wYXVzZS50eXBld3JpdGUpIHtcblx0ICAgICAgICB0aGlzLnR5cGV3cml0ZSh0aGlzLnBhdXNlLmN1clN0cmluZywgdGhpcy5wYXVzZS5jdXJTdHJQb3MpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMuYmFja3NwYWNlKHRoaXMucGF1c2UuY3VyU3RyaW5nLCB0aGlzLnBhdXNlLmN1clN0clBvcyk7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5vcHRpb25zLm9uU3RhcnQodGhpcy5hcnJheVBvcywgdGhpcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBEZXN0cm95IHRoaXMgaW5zdGFuY2Ugb2YgVHlwZWRcblx0ICAgICAqIEBwdWJsaWNcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2Rlc3Ryb3knLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdCAgICAgIHRoaXMucmVzZXQoZmFsc2UpO1xuXHQgICAgICB0aGlzLm9wdGlvbnMub25EZXN0cm95KHRoaXMpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogUmVzZXQgVHlwZWQgYW5kIG9wdGlvbmFsbHkgcmVzdGFydHNcblx0ICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVzdGFydFxuXHQgICAgICogQHB1YmxpY1xuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAncmVzZXQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuXHQgICAgICB2YXIgcmVzdGFydCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMF07XG5cdFxuXHQgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZW91dCk7XG5cdCAgICAgIHRoaXMucmVwbGFjZVRleHQoJycpO1xuXHQgICAgICBpZiAodGhpcy5jdXJzb3IgJiYgdGhpcy5jdXJzb3IucGFyZW50Tm9kZSkge1xuXHQgICAgICAgIHRoaXMuY3Vyc29yLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jdXJzb3IpO1xuXHQgICAgICAgIHRoaXMuY3Vyc29yID0gbnVsbDtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLnN0clBvcyA9IDA7XG5cdCAgICAgIHRoaXMuYXJyYXlQb3MgPSAwO1xuXHQgICAgICB0aGlzLmN1ckxvb3AgPSAwO1xuXHQgICAgICBpZiAocmVzdGFydCkge1xuXHQgICAgICAgIHRoaXMuaW5zZXJ0Q3Vyc29yKCk7XG5cdCAgICAgICAgdGhpcy5vcHRpb25zLm9uUmVzZXQodGhpcyk7XG5cdCAgICAgICAgdGhpcy5iZWdpbigpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBCZWdpbnMgdGhlIHR5cGluZyBhbmltYXRpb25cblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdiZWdpbicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYmVnaW4oKSB7XG5cdCAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdFxuXHQgICAgICB0aGlzLnR5cGluZ0NvbXBsZXRlID0gZmFsc2U7XG5cdCAgICAgIHRoaXMuc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCh0aGlzKTtcblx0ICAgICAgdGhpcy5pbnNlcnRDdXJzb3IoKTtcblx0ICAgICAgaWYgKHRoaXMuYmluZElucHV0Rm9jdXNFdmVudHMpIHRoaXMuYmluZEZvY3VzRXZlbnRzKCk7XG5cdCAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIHNvbWUgdGV4dCBpbiB0aGUgZWxlbWVudCwgaWYgeWVzIHN0YXJ0IGJ5IGJhY2tzcGFjaW5nIHRoZSBkZWZhdWx0IG1lc3NhZ2Vcblx0ICAgICAgICBpZiAoIV90aGlzLmN1cnJlbnRFbENvbnRlbnQgfHwgX3RoaXMuY3VycmVudEVsQ29udGVudC5sZW5ndGggPT09IDApIHtcblx0ICAgICAgICAgIF90aGlzLnR5cGV3cml0ZShfdGhpcy5zdHJpbmdzW190aGlzLnNlcXVlbmNlW190aGlzLmFycmF5UG9zXV0sIF90aGlzLnN0clBvcyk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIC8vIFN0YXJ0IHR5cGluZ1xuXHQgICAgICAgICAgX3RoaXMuYmFja3NwYWNlKF90aGlzLmN1cnJlbnRFbENvbnRlbnQsIF90aGlzLmN1cnJlbnRFbENvbnRlbnQubGVuZ3RoKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0sIHRoaXMuc3RhcnREZWxheSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBDYWxsZWQgZm9yIGVhY2ggY2hhcmFjdGVyIHR5cGVkXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAndHlwZXdyaXRlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiB0eXBld3JpdGUoY3VyU3RyaW5nLCBjdXJTdHJQb3MpIHtcblx0ICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cdFxuXHQgICAgICBpZiAodGhpcy5mYWRlT3V0ICYmIHRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuZmFkZU91dENsYXNzKSkge1xuXHQgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmZhZGVPdXRDbGFzcyk7XG5cdCAgICAgICAgaWYgKHRoaXMuY3Vyc29yKSB0aGlzLmN1cnNvci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZmFkZU91dENsYXNzKTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgdmFyIGh1bWFuaXplID0gdGhpcy5odW1hbml6ZXIodGhpcy50eXBlU3BlZWQpO1xuXHQgICAgICB2YXIgbnVtQ2hhcnMgPSAxO1xuXHRcblx0ICAgICAgaWYgKHRoaXMucGF1c2Uuc3RhdHVzID09PSB0cnVlKSB7XG5cdCAgICAgICAgdGhpcy5zZXRQYXVzZVN0YXR1cyhjdXJTdHJpbmcsIGN1clN0clBvcywgdHJ1ZSk7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICAvLyBjb250YWluIHR5cGluZyBmdW5jdGlvbiBpbiBhIHRpbWVvdXQgaHVtYW5pemUnZCBkZWxheVxuXHQgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAvLyBza2lwIG92ZXIgYW55IEhUTUwgY2hhcnNcblx0ICAgICAgICBjdXJTdHJQb3MgPSBfaHRtbFBhcnNlckpzLmh0bWxQYXJzZXIudHlwZUh0bWxDaGFycyhjdXJTdHJpbmcsIGN1clN0clBvcywgX3RoaXMyKTtcblx0XG5cdCAgICAgICAgdmFyIHBhdXNlVGltZSA9IDA7XG5cdCAgICAgICAgdmFyIHN1YnN0ciA9IGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zKTtcblx0ICAgICAgICAvLyBjaGVjayBmb3IgYW4gZXNjYXBlIGNoYXJhY3RlciBiZWZvcmUgYSBwYXVzZSB2YWx1ZVxuXHQgICAgICAgIC8vIGZvcm1hdDogXFxeXFxkKyAuLiBlZzogXjEwMDAgLi4gc2hvdWxkIGJlIGFibGUgdG8gcHJpbnQgdGhlIF4gdG9vIHVzaW5nIF5eXG5cdCAgICAgICAgLy8gc2luZ2xlIF4gYXJlIHJlbW92ZWQgZnJvbSBzdHJpbmdcblx0ICAgICAgICBpZiAoc3Vic3RyLmNoYXJBdCgwKSA9PT0gJ14nKSB7XG5cdCAgICAgICAgICBpZiAoL15cXF5cXGQrLy50ZXN0KHN1YnN0cikpIHtcblx0ICAgICAgICAgICAgdmFyIHNraXAgPSAxOyAvLyBza2lwIGF0IGxlYXN0IDFcblx0ICAgICAgICAgICAgc3Vic3RyID0gL1xcZCsvLmV4ZWMoc3Vic3RyKVswXTtcblx0ICAgICAgICAgICAgc2tpcCArPSBzdWJzdHIubGVuZ3RoO1xuXHQgICAgICAgICAgICBwYXVzZVRpbWUgPSBwYXJzZUludChzdWJzdHIpO1xuXHQgICAgICAgICAgICBfdGhpczIudGVtcG9yYXJ5UGF1c2UgPSB0cnVlO1xuXHQgICAgICAgICAgICBfdGhpczIub3B0aW9ucy5vblR5cGluZ1BhdXNlZChfdGhpczIuYXJyYXlQb3MsIF90aGlzMik7XG5cdCAgICAgICAgICAgIC8vIHN0cmlwIG91dCB0aGUgZXNjYXBlIGNoYXJhY3RlciBhbmQgcGF1c2UgdmFsdWUgc28gdGhleSdyZSBub3QgcHJpbnRlZFxuXHQgICAgICAgICAgICBjdXJTdHJpbmcgPSBjdXJTdHJpbmcuc3Vic3RyaW5nKDAsIGN1clN0clBvcykgKyBjdXJTdHJpbmcuc3Vic3RyaW5nKGN1clN0clBvcyArIHNraXApO1xuXHQgICAgICAgICAgICBfdGhpczIudG9nZ2xlQmxpbmtpbmcodHJ1ZSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICAvLyBjaGVjayBmb3Igc2tpcCBjaGFyYWN0ZXJzIGZvcm1hdHRlZCBhc1xuXHQgICAgICAgIC8vIFwidGhpcyBpcyBhIGBzdHJpbmcgdG8gcHJpbnQgTk9XYCAuLi5cIlxuXHQgICAgICAgIGlmIChzdWJzdHIuY2hhckF0KDApID09PSAnYCcpIHtcblx0ICAgICAgICAgIHdoaWxlIChjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcyArIG51bUNoYXJzKS5jaGFyQXQoMCkgIT09ICdgJykge1xuXHQgICAgICAgICAgICBudW1DaGFycysrO1xuXHQgICAgICAgICAgICBpZiAoY3VyU3RyUG9zICsgbnVtQ2hhcnMgPiBjdXJTdHJpbmcubGVuZ3RoKSBicmVhaztcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIC8vIHN0cmlwIG91dCB0aGUgZXNjYXBlIGNoYXJhY3RlcnMgYW5kIGFwcGVuZCBhbGwgdGhlIHN0cmluZyBpbiBiZXR3ZWVuXG5cdCAgICAgICAgICB2YXIgc3RyaW5nQmVmb3JlU2tpcCA9IGN1clN0cmluZy5zdWJzdHJpbmcoMCwgY3VyU3RyUG9zKTtcblx0ICAgICAgICAgIHZhciBzdHJpbmdTa2lwcGVkID0gY3VyU3RyaW5nLnN1YnN0cmluZyhzdHJpbmdCZWZvcmVTa2lwLmxlbmd0aCArIDEsIGN1clN0clBvcyArIG51bUNoYXJzKTtcblx0ICAgICAgICAgIHZhciBzdHJpbmdBZnRlclNraXAgPSBjdXJTdHJpbmcuc3Vic3RyaW5nKGN1clN0clBvcyArIG51bUNoYXJzICsgMSk7XG5cdCAgICAgICAgICBjdXJTdHJpbmcgPSBzdHJpbmdCZWZvcmVTa2lwICsgc3RyaW5nU2tpcHBlZCArIHN0cmluZ0FmdGVyU2tpcDtcblx0ICAgICAgICAgIG51bUNoYXJzLS07XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICAvLyB0aW1lb3V0IGZvciBhbnkgcGF1c2UgYWZ0ZXIgYSBjaGFyYWN0ZXJcblx0ICAgICAgICBfdGhpczIudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgLy8gQWNjb3VudHMgZm9yIGJsaW5raW5nIHdoaWxlIHBhdXNlZFxuXHQgICAgICAgICAgX3RoaXMyLnRvZ2dsZUJsaW5raW5nKGZhbHNlKTtcblx0XG5cdCAgICAgICAgICAvLyBXZSdyZSBkb25lIHdpdGggdGhpcyBzZW50ZW5jZSFcblx0ICAgICAgICAgIGlmIChjdXJTdHJQb3MgPT09IGN1clN0cmluZy5sZW5ndGgpIHtcblx0ICAgICAgICAgICAgX3RoaXMyLmRvbmVUeXBpbmcoY3VyU3RyaW5nLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgX3RoaXMyLmtlZXBUeXBpbmcoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIG51bUNoYXJzKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIC8vIGVuZCBvZiBjaGFyYWN0ZXIgcGF1c2Vcblx0ICAgICAgICAgIGlmIChfdGhpczIudGVtcG9yYXJ5UGF1c2UpIHtcblx0ICAgICAgICAgICAgX3RoaXMyLnRlbXBvcmFyeVBhdXNlID0gZmFsc2U7XG5cdCAgICAgICAgICAgIF90aGlzMi5vcHRpb25zLm9uVHlwaW5nUmVzdW1lZChfdGhpczIuYXJyYXlQb3MsIF90aGlzMik7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfSwgcGF1c2VUaW1lKTtcblx0XG5cdCAgICAgICAgLy8gaHVtYW5pemVkIHZhbHVlIGZvciB0eXBpbmdcblx0ICAgICAgfSwgaHVtYW5pemUpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQ29udGludWUgdG8gdGhlIG5leHQgc3RyaW5nICYgYmVnaW4gdHlwaW5nXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAna2VlcFR5cGluZycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24ga2VlcFR5cGluZyhjdXJTdHJpbmcsIGN1clN0clBvcywgbnVtQ2hhcnMpIHtcblx0ICAgICAgLy8gY2FsbCBiZWZvcmUgZnVuY3Rpb25zIGlmIGFwcGxpY2FibGVcblx0ICAgICAgaWYgKGN1clN0clBvcyA9PT0gMCkge1xuXHQgICAgICAgIHRoaXMudG9nZ2xlQmxpbmtpbmcoZmFsc2UpO1xuXHQgICAgICAgIHRoaXMub3B0aW9ucy5wcmVTdHJpbmdUeXBlZCh0aGlzLmFycmF5UG9zLCB0aGlzKTtcblx0ICAgICAgfVxuXHQgICAgICAvLyBzdGFydCB0eXBpbmcgZWFjaCBuZXcgY2hhciBpbnRvIGV4aXN0aW5nIHN0cmluZ1xuXHQgICAgICAvLyBjdXJTdHJpbmc6IGFyZywgdGhpcy5lbC5odG1sOiBvcmlnaW5hbCB0ZXh0IGluc2lkZSBlbGVtZW50XG5cdCAgICAgIGN1clN0clBvcyArPSBudW1DaGFycztcblx0ICAgICAgdmFyIG5leHRTdHJpbmcgPSBjdXJTdHJpbmcuc3Vic3RyKDAsIGN1clN0clBvcyk7XG5cdCAgICAgIHRoaXMucmVwbGFjZVRleHQobmV4dFN0cmluZyk7XG5cdCAgICAgIC8vIGxvb3AgdGhlIGZ1bmN0aW9uXG5cdCAgICAgIHRoaXMudHlwZXdyaXRlKGN1clN0cmluZywgY3VyU3RyUG9zKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFdlJ3JlIGRvbmUgdHlwaW5nIGFsbCBzdHJpbmdzXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnZG9uZVR5cGluZycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZG9uZVR5cGluZyhjdXJTdHJpbmcsIGN1clN0clBvcykge1xuXHQgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblx0XG5cdCAgICAgIC8vIGZpcmVzIGNhbGxiYWNrIGZ1bmN0aW9uXG5cdCAgICAgIHRoaXMub3B0aW9ucy5vblN0cmluZ1R5cGVkKHRoaXMuYXJyYXlQb3MsIHRoaXMpO1xuXHQgICAgICB0aGlzLnRvZ2dsZUJsaW5raW5nKHRydWUpO1xuXHQgICAgICAvLyBpcyB0aGlzIHRoZSBmaW5hbCBzdHJpbmdcblx0ICAgICAgaWYgKHRoaXMuYXJyYXlQb3MgPT09IHRoaXMuc3RyaW5ncy5sZW5ndGggLSAxKSB7XG5cdCAgICAgICAgLy8gY2FsbGJhY2sgdGhhdCBvY2N1cnMgb24gdGhlIGxhc3QgdHlwZWQgc3RyaW5nXG5cdCAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuXHQgICAgICAgIC8vIHF1aXQgaWYgd2Ugd29udCBsb29wIGJhY2tcblx0ICAgICAgICBpZiAodGhpcy5sb29wID09PSBmYWxzZSB8fCB0aGlzLmN1ckxvb3AgPT09IHRoaXMubG9vcENvdW50KSB7XG5cdCAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIF90aGlzMy5iYWNrc3BhY2UoY3VyU3RyaW5nLCBjdXJTdHJQb3MpO1xuXHQgICAgICB9LCB0aGlzLmJhY2tEZWxheSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBCYWNrc3BhY2VzIDEgY2hhcmFjdGVyIGF0IGEgdGltZVxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2JhY2tzcGFjZScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYmFja3NwYWNlKGN1clN0cmluZywgY3VyU3RyUG9zKSB7XG5cdCAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXHRcblx0ICAgICAgaWYgKHRoaXMucGF1c2Uuc3RhdHVzID09PSB0cnVlKSB7XG5cdCAgICAgICAgdGhpcy5zZXRQYXVzZVN0YXR1cyhjdXJTdHJpbmcsIGN1clN0clBvcywgdHJ1ZSk7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0aGlzLmZhZGVPdXQpIHJldHVybiB0aGlzLmluaXRGYWRlT3V0KCk7XG5cdFxuXHQgICAgICB0aGlzLnRvZ2dsZUJsaW5raW5nKGZhbHNlKTtcblx0ICAgICAgdmFyIGh1bWFuaXplID0gdGhpcy5odW1hbml6ZXIodGhpcy5iYWNrU3BlZWQpO1xuXHRcblx0ICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgY3VyU3RyUG9zID0gX2h0bWxQYXJzZXJKcy5odG1sUGFyc2VyLmJhY2tTcGFjZUh0bWxDaGFycyhjdXJTdHJpbmcsIGN1clN0clBvcywgX3RoaXM0KTtcblx0ICAgICAgICAvLyByZXBsYWNlIHRleHQgd2l0aCBiYXNlIHRleHQgKyB0eXBlZCBjaGFyYWN0ZXJzXG5cdCAgICAgICAgdmFyIGN1clN0cmluZ0F0UG9zaXRpb24gPSBjdXJTdHJpbmcuc3Vic3RyKDAsIGN1clN0clBvcyk7XG5cdCAgICAgICAgX3RoaXM0LnJlcGxhY2VUZXh0KGN1clN0cmluZ0F0UG9zaXRpb24pO1xuXHRcblx0ICAgICAgICAvLyBpZiBzbWFydEJhY2sgaXMgZW5hYmxlZFxuXHQgICAgICAgIGlmIChfdGhpczQuc21hcnRCYWNrc3BhY2UpIHtcblx0ICAgICAgICAgIC8vIHRoZSByZW1haW5pbmcgcGFydCBvZiB0aGUgY3VycmVudCBzdHJpbmcgaXMgZXF1YWwgb2YgdGhlIHNhbWUgcGFydCBvZiB0aGUgbmV3IHN0cmluZ1xuXHQgICAgICAgICAgdmFyIG5leHRTdHJpbmcgPSBfdGhpczQuc3RyaW5nc1tfdGhpczQuYXJyYXlQb3MgKyAxXTtcblx0ICAgICAgICAgIGlmIChuZXh0U3RyaW5nICYmIGN1clN0cmluZ0F0UG9zaXRpb24gPT09IG5leHRTdHJpbmcuc3Vic3RyKDAsIGN1clN0clBvcykpIHtcblx0ICAgICAgICAgICAgX3RoaXM0LnN0b3BOdW0gPSBjdXJTdHJQb3M7XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBfdGhpczQuc3RvcE51bSA9IDA7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICAvLyBpZiB0aGUgbnVtYmVyIChpZCBvZiBjaGFyYWN0ZXIgaW4gY3VycmVudCBzdHJpbmcpIGlzXG5cdCAgICAgICAgLy8gbGVzcyB0aGFuIHRoZSBzdG9wIG51bWJlciwga2VlcCBnb2luZ1xuXHQgICAgICAgIGlmIChjdXJTdHJQb3MgPiBfdGhpczQuc3RvcE51bSkge1xuXHQgICAgICAgICAgLy8gc3VidHJhY3QgY2hhcmFjdGVycyBvbmUgYnkgb25lXG5cdCAgICAgICAgICBjdXJTdHJQb3MtLTtcblx0ICAgICAgICAgIC8vIGxvb3AgdGhlIGZ1bmN0aW9uXG5cdCAgICAgICAgICBfdGhpczQuYmFja3NwYWNlKGN1clN0cmluZywgY3VyU3RyUG9zKTtcblx0ICAgICAgICB9IGVsc2UgaWYgKGN1clN0clBvcyA8PSBfdGhpczQuc3RvcE51bSkge1xuXHQgICAgICAgICAgLy8gaWYgdGhlIHN0b3AgbnVtYmVyIGhhcyBiZWVuIHJlYWNoZWQsIGluY3JlYXNlXG5cdCAgICAgICAgICAvLyBhcnJheSBwb3NpdGlvbiB0byBuZXh0IHN0cmluZ1xuXHQgICAgICAgICAgX3RoaXM0LmFycmF5UG9zKys7XG5cdCAgICAgICAgICAvLyBXaGVuIGxvb3BpbmcsIGJlZ2luIGF0IHRoZSBiZWdpbm5pbmcgYWZ0ZXIgYmFja3NwYWNlIGNvbXBsZXRlXG5cdCAgICAgICAgICBpZiAoX3RoaXM0LmFycmF5UG9zID09PSBfdGhpczQuc3RyaW5ncy5sZW5ndGgpIHtcblx0ICAgICAgICAgICAgX3RoaXM0LmFycmF5UG9zID0gMDtcblx0ICAgICAgICAgICAgX3RoaXM0Lm9wdGlvbnMub25MYXN0U3RyaW5nQmFja3NwYWNlZCgpO1xuXHQgICAgICAgICAgICBfdGhpczQuc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCgpO1xuXHQgICAgICAgICAgICBfdGhpczQuYmVnaW4oKTtcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIF90aGlzNC50eXBld3JpdGUoX3RoaXM0LnN0cmluZ3NbX3RoaXM0LnNlcXVlbmNlW190aGlzNC5hcnJheVBvc11dLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICAvLyBodW1hbml6ZWQgdmFsdWUgZm9yIHR5cGluZ1xuXHQgICAgICB9LCBodW1hbml6ZSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBGdWxsIGFuaW1hdGlvbiBpcyBjb21wbGV0ZVxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2NvbXBsZXRlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcblx0ICAgICAgdGhpcy5vcHRpb25zLm9uQ29tcGxldGUodGhpcyk7XG5cdCAgICAgIGlmICh0aGlzLmxvb3ApIHtcblx0ICAgICAgICB0aGlzLmN1ckxvb3ArKztcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLnR5cGluZ0NvbXBsZXRlID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogSGFzIHRoZSB0eXBpbmcgYmVlbiBzdG9wcGVkXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVHlwaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnc2V0UGF1c2VTdGF0dXMnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBhdXNlU3RhdHVzKGN1clN0cmluZywgY3VyU3RyUG9zLCBpc1R5cGluZykge1xuXHQgICAgICB0aGlzLnBhdXNlLnR5cGV3cml0ZSA9IGlzVHlwaW5nO1xuXHQgICAgICB0aGlzLnBhdXNlLmN1clN0cmluZyA9IGN1clN0cmluZztcblx0ICAgICAgdGhpcy5wYXVzZS5jdXJTdHJQb3MgPSBjdXJTdHJQb3M7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBUb2dnbGUgdGhlIGJsaW5raW5nIGN1cnNvclxuXHQgICAgICogQHBhcmFtIHtib29sZWFufSBpc0JsaW5raW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAndG9nZ2xlQmxpbmtpbmcnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZUJsaW5raW5nKGlzQmxpbmtpbmcpIHtcblx0ICAgICAgaWYgKCF0aGlzLmN1cnNvcikgcmV0dXJuO1xuXHQgICAgICAvLyBpZiBpbiBwYXVzZWQgc3RhdGUsIGRvbid0IHRvZ2dsZSBibGlua2luZyBhIDJuZCB0aW1lXG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnN0YXR1cykgcmV0dXJuO1xuXHQgICAgICBpZiAodGhpcy5jdXJzb3JCbGlua2luZyA9PT0gaXNCbGlua2luZykgcmV0dXJuO1xuXHQgICAgICB0aGlzLmN1cnNvckJsaW5raW5nID0gaXNCbGlua2luZztcblx0ICAgICAgdmFyIHN0YXR1cyA9IGlzQmxpbmtpbmcgPyAnaW5maW5pdGUnIDogMDtcblx0ICAgICAgdGhpcy5jdXJzb3Iuc3R5bGUuYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQgPSBzdGF0dXM7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBTcGVlZCBpbiBNUyB0byB0eXBlXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gc3BlZWRcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdodW1hbml6ZXInLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGh1bWFuaXplcihzcGVlZCkge1xuXHQgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogc3BlZWQgLyAyKSArIHNwZWVkO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogU2h1ZmZsZSB0aGUgc2VxdWVuY2Ugb2YgdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdzaHVmZmxlU3RyaW5nc0lmTmVlZGVkJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzaHVmZmxlU3RyaW5nc0lmTmVlZGVkKCkge1xuXHQgICAgICBpZiAoIXRoaXMuc2h1ZmZsZSkgcmV0dXJuO1xuXHQgICAgICB0aGlzLnNlcXVlbmNlID0gdGhpcy5zZXF1ZW5jZS5zb3J0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAtIDAuNTtcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBBZGRzIGEgQ1NTIGNsYXNzIHRvIGZhZGUgb3V0IGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnaW5pdEZhZGVPdXQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRGYWRlT3V0KCkge1xuXHQgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblx0XG5cdCAgICAgIHRoaXMuZWwuY2xhc3NOYW1lICs9ICcgJyArIHRoaXMuZmFkZU91dENsYXNzO1xuXHQgICAgICBpZiAodGhpcy5jdXJzb3IpIHRoaXMuY3Vyc29yLmNsYXNzTmFtZSArPSAnICcgKyB0aGlzLmZhZGVPdXRDbGFzcztcblx0ICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIF90aGlzNS5hcnJheVBvcysrO1xuXHQgICAgICAgIF90aGlzNS5yZXBsYWNlVGV4dCgnJyk7XG5cdFxuXHQgICAgICAgIC8vIFJlc2V0cyBjdXJyZW50IHN0cmluZyBpZiBlbmQgb2YgbG9vcCByZWFjaGVkXG5cdCAgICAgICAgaWYgKF90aGlzNS5zdHJpbmdzLmxlbmd0aCA+IF90aGlzNS5hcnJheVBvcykge1xuXHQgICAgICAgICAgX3RoaXM1LnR5cGV3cml0ZShfdGhpczUuc3RyaW5nc1tfdGhpczUuc2VxdWVuY2VbX3RoaXM1LmFycmF5UG9zXV0sIDApO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBfdGhpczUudHlwZXdyaXRlKF90aGlzNS5zdHJpbmdzWzBdLCAwKTtcblx0ICAgICAgICAgIF90aGlzNS5hcnJheVBvcyA9IDA7XG5cdCAgICAgICAgfVxuXHQgICAgICB9LCB0aGlzLmZhZGVPdXREZWxheSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBSZXBsYWNlcyBjdXJyZW50IHRleHQgaW4gdGhlIEhUTUwgZWxlbWVudFxuXHQgICAgICogZGVwZW5kaW5nIG9uIGVsZW1lbnQgdHlwZVxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3JlcGxhY2VUZXh0Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiByZXBsYWNlVGV4dChzdHIpIHtcblx0ICAgICAgaWYgKHRoaXMuYXR0cikge1xuXHQgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKHRoaXMuYXR0ciwgc3RyKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBpZiAodGhpcy5pc0lucHV0KSB7XG5cdCAgICAgICAgICB0aGlzLmVsLnZhbHVlID0gc3RyO1xuXHQgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb250ZW50VHlwZSA9PT0gJ2h0bWwnKSB7XG5cdCAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHN0cjtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgdGhpcy5lbC50ZXh0Q29udGVudCA9IHN0cjtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIElmIHVzaW5nIGlucHV0IGVsZW1lbnRzLCBiaW5kIGZvY3VzIGluIG9yZGVyIHRvXG5cdCAgICAgKiBzdGFydCBhbmQgc3RvcCB0aGUgYW5pbWF0aW9uXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnYmluZEZvY3VzRXZlbnRzJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kRm9jdXNFdmVudHMoKSB7XG5cdCAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXHRcblx0ICAgICAgaWYgKCF0aGlzLmlzSW5wdXQpIHJldHVybjtcblx0ICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgICAgX3RoaXM2LnN0b3AoKTtcblx0ICAgICAgfSk7XG5cdCAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgICAgaWYgKF90aGlzNi5lbC52YWx1ZSAmJiBfdGhpczYuZWwudmFsdWUubGVuZ3RoICE9PSAwKSB7XG5cdCAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHQgICAgICAgIF90aGlzNi5zdGFydCgpO1xuXHQgICAgICB9KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIE9uIGluaXQsIGluc2VydCB0aGUgY3Vyc29yIGVsZW1lbnRcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdpbnNlcnRDdXJzb3InLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydEN1cnNvcigpIHtcblx0ICAgICAgaWYgKCF0aGlzLnNob3dDdXJzb3IpIHJldHVybjtcblx0ICAgICAgaWYgKHRoaXMuY3Vyc29yKSByZXR1cm47XG5cdCAgICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHQgICAgICB0aGlzLmN1cnNvci5jbGFzc05hbWUgPSAndHlwZWQtY3Vyc29yJztcblx0ICAgICAgdGhpcy5jdXJzb3IuaW5uZXJIVE1MID0gdGhpcy5jdXJzb3JDaGFyO1xuXHQgICAgICB0aGlzLmVsLnBhcmVudE5vZGUgJiYgdGhpcy5lbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmN1cnNvciwgdGhpcy5lbC5uZXh0U2libGluZyk7XG5cdCAgICB9XG5cdCAgfV0pO1xuXHRcblx0ICByZXR1cm4gVHlwZWQ7XG5cdH0pKCk7XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBUeXBlZDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cdFxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cdFxuXHR2YXIgX2RlZmF1bHRzSnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHRcblx0dmFyIF9kZWZhdWx0c0pzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmF1bHRzSnMpO1xuXHRcblx0LyoqXG5cdCAqIEluaXRpYWxpemUgdGhlIFR5cGVkIG9iamVjdFxuXHQgKi9cblx0XG5cdHZhciBJbml0aWFsaXplciA9IChmdW5jdGlvbiAoKSB7XG5cdCAgZnVuY3Rpb24gSW5pdGlhbGl6ZXIoKSB7XG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5pdGlhbGl6ZXIpO1xuXHQgIH1cblx0XG5cdCAgX2NyZWF0ZUNsYXNzKEluaXRpYWxpemVyLCBbe1xuXHQgICAga2V5OiAnbG9hZCcsXG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBMb2FkIHVwIGRlZmF1bHRzICYgb3B0aW9ucyBvbiB0aGUgVHlwZWQgaW5zdGFuY2Vcblx0ICAgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGYgaW5zdGFuY2Ugb2YgVHlwZWRcblx0ICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIG9wdGlvbnMgb2JqZWN0XG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudElkIEhUTUwgZWxlbWVudCBJRCBfT1JfIGluc3RhbmNlIG9mIEhUTUwgZWxlbWVudFxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHRcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKHNlbGYsIG9wdGlvbnMsIGVsZW1lbnRJZCkge1xuXHQgICAgICAvLyBjaG9zZW4gZWxlbWVudCB0byBtYW5pcHVsYXRlIHRleHRcblx0ICAgICAgaWYgKHR5cGVvZiBlbGVtZW50SWQgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgc2VsZi5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudElkKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBzZWxmLmVsID0gZWxlbWVudElkO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBzZWxmLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgX2RlZmF1bHRzSnMyWydkZWZhdWx0J10sIG9wdGlvbnMpO1xuXHRcblx0ICAgICAgLy8gYXR0cmlidXRlIHRvIHR5cGUgaW50b1xuXHQgICAgICBzZWxmLmlzSW5wdXQgPSBzZWxmLmVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jztcblx0ICAgICAgc2VsZi5hdHRyID0gc2VsZi5vcHRpb25zLmF0dHI7XG5cdCAgICAgIHNlbGYuYmluZElucHV0Rm9jdXNFdmVudHMgPSBzZWxmLm9wdGlvbnMuYmluZElucHV0Rm9jdXNFdmVudHM7XG5cdFxuXHQgICAgICAvLyBzaG93IGN1cnNvclxuXHQgICAgICBzZWxmLnNob3dDdXJzb3IgPSBzZWxmLmlzSW5wdXQgPyBmYWxzZSA6IHNlbGYub3B0aW9ucy5zaG93Q3Vyc29yO1xuXHRcblx0ICAgICAgLy8gY3VzdG9tIGN1cnNvclxuXHQgICAgICBzZWxmLmN1cnNvckNoYXIgPSBzZWxmLm9wdGlvbnMuY3Vyc29yQ2hhcjtcblx0XG5cdCAgICAgIC8vIElzIHRoZSBjdXJzb3IgYmxpbmtpbmdcblx0ICAgICAgc2VsZi5jdXJzb3JCbGlua2luZyA9IHRydWU7XG5cdFxuXHQgICAgICAvLyB0ZXh0IGNvbnRlbnQgb2YgZWxlbWVudFxuXHQgICAgICBzZWxmLmVsQ29udGVudCA9IHNlbGYuYXR0ciA/IHNlbGYuZWwuZ2V0QXR0cmlidXRlKHNlbGYuYXR0cikgOiBzZWxmLmVsLnRleHRDb250ZW50O1xuXHRcblx0ICAgICAgLy8gaHRtbCBvciBwbGFpbiB0ZXh0XG5cdCAgICAgIHNlbGYuY29udGVudFR5cGUgPSBzZWxmLm9wdGlvbnMuY29udGVudFR5cGU7XG5cdFxuXHQgICAgICAvLyB0eXBpbmcgc3BlZWRcblx0ICAgICAgc2VsZi50eXBlU3BlZWQgPSBzZWxmLm9wdGlvbnMudHlwZVNwZWVkO1xuXHRcblx0ICAgICAgLy8gYWRkIGEgZGVsYXkgYmVmb3JlIHR5cGluZyBzdGFydHNcblx0ICAgICAgc2VsZi5zdGFydERlbGF5ID0gc2VsZi5vcHRpb25zLnN0YXJ0RGVsYXk7XG5cdFxuXHQgICAgICAvLyBiYWNrc3BhY2luZyBzcGVlZFxuXHQgICAgICBzZWxmLmJhY2tTcGVlZCA9IHNlbGYub3B0aW9ucy5iYWNrU3BlZWQ7XG5cdFxuXHQgICAgICAvLyBvbmx5IGJhY2tzcGFjZSB3aGF0IGRvZXNuJ3QgbWF0Y2ggdGhlIHByZXZpb3VzIHN0cmluZ1xuXHQgICAgICBzZWxmLnNtYXJ0QmFja3NwYWNlID0gc2VsZi5vcHRpb25zLnNtYXJ0QmFja3NwYWNlO1xuXHRcblx0ICAgICAgLy8gYW1vdW50IG9mIHRpbWUgdG8gd2FpdCBiZWZvcmUgYmFja3NwYWNpbmdcblx0ICAgICAgc2VsZi5iYWNrRGVsYXkgPSBzZWxmLm9wdGlvbnMuYmFja0RlbGF5O1xuXHRcblx0ICAgICAgLy8gRmFkZSBvdXQgaW5zdGVhZCBvZiBiYWNrc3BhY2Vcblx0ICAgICAgc2VsZi5mYWRlT3V0ID0gc2VsZi5vcHRpb25zLmZhZGVPdXQ7XG5cdCAgICAgIHNlbGYuZmFkZU91dENsYXNzID0gc2VsZi5vcHRpb25zLmZhZGVPdXRDbGFzcztcblx0ICAgICAgc2VsZi5mYWRlT3V0RGVsYXkgPSBzZWxmLm9wdGlvbnMuZmFkZU91dERlbGF5O1xuXHRcblx0ICAgICAgLy8gdmFyaWFibGUgdG8gY2hlY2sgd2hldGhlciB0eXBpbmcgaXMgY3VycmVudGx5IHBhdXNlZFxuXHQgICAgICBzZWxmLmlzUGF1c2VkID0gZmFsc2U7XG5cdFxuXHQgICAgICAvLyBpbnB1dCBzdHJpbmdzIG9mIHRleHRcblx0ICAgICAgc2VsZi5zdHJpbmdzID0gc2VsZi5vcHRpb25zLnN0cmluZ3MubWFwKGZ1bmN0aW9uIChzKSB7XG5cdCAgICAgICAgcmV0dXJuIHMudHJpbSgpO1xuXHQgICAgICB9KTtcblx0XG5cdCAgICAgIC8vIGRpdiBjb250YWluaW5nIHN0cmluZ3Ncblx0ICAgICAgaWYgKHR5cGVvZiBzZWxmLm9wdGlvbnMuc3RyaW5nc0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgc2VsZi5zdHJpbmdzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZi5vcHRpb25zLnN0cmluZ3NFbGVtZW50KTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBzZWxmLnN0cmluZ3NFbGVtZW50ID0gc2VsZi5vcHRpb25zLnN0cmluZ3NFbGVtZW50O1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBpZiAoc2VsZi5zdHJpbmdzRWxlbWVudCkge1xuXHQgICAgICAgIHNlbGYuc3RyaW5ncyA9IFtdO1xuXHQgICAgICAgIHNlbGYuc3RyaW5nc0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0ICAgICAgICB2YXIgc3RyaW5ncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShzZWxmLnN0cmluZ3NFbGVtZW50LmNoaWxkcmVuKTtcblx0ICAgICAgICB2YXIgc3RyaW5nc0xlbmd0aCA9IHN0cmluZ3MubGVuZ3RoO1xuXHRcblx0ICAgICAgICBpZiAoc3RyaW5nc0xlbmd0aCkge1xuXHQgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmdzTGVuZ3RoOyBpICs9IDEpIHtcblx0ICAgICAgICAgICAgdmFyIHN0cmluZ0VsID0gc3RyaW5nc1tpXTtcblx0ICAgICAgICAgICAgc2VsZi5zdHJpbmdzLnB1c2goc3RyaW5nRWwuaW5uZXJIVE1MLnRyaW0oKSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdFxuXHQgICAgICAvLyBjaGFyYWN0ZXIgbnVtYmVyIHBvc2l0aW9uIG9mIGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgIHNlbGYuc3RyUG9zID0gMDtcblx0XG5cdCAgICAgIC8vIGN1cnJlbnQgYXJyYXkgcG9zaXRpb25cblx0ICAgICAgc2VsZi5hcnJheVBvcyA9IDA7XG5cdFxuXHQgICAgICAvLyBpbmRleCBvZiBzdHJpbmcgdG8gc3RvcCBiYWNrc3BhY2luZyBvblxuXHQgICAgICBzZWxmLnN0b3BOdW0gPSAwO1xuXHRcblx0ICAgICAgLy8gTG9vcGluZyBsb2dpY1xuXHQgICAgICBzZWxmLmxvb3AgPSBzZWxmLm9wdGlvbnMubG9vcDtcblx0ICAgICAgc2VsZi5sb29wQ291bnQgPSBzZWxmLm9wdGlvbnMubG9vcENvdW50O1xuXHQgICAgICBzZWxmLmN1ckxvb3AgPSAwO1xuXHRcblx0ICAgICAgLy8gc2h1ZmZsZSB0aGUgc3RyaW5nc1xuXHQgICAgICBzZWxmLnNodWZmbGUgPSBzZWxmLm9wdGlvbnMuc2h1ZmZsZTtcblx0ICAgICAgLy8gdGhlIG9yZGVyIG9mIHN0cmluZ3Ncblx0ICAgICAgc2VsZi5zZXF1ZW5jZSA9IFtdO1xuXHRcblx0ICAgICAgc2VsZi5wYXVzZSA9IHtcblx0ICAgICAgICBzdGF0dXM6IGZhbHNlLFxuXHQgICAgICAgIHR5cGV3cml0ZTogdHJ1ZSxcblx0ICAgICAgICBjdXJTdHJpbmc6ICcnLFxuXHQgICAgICAgIGN1clN0clBvczogMFxuXHQgICAgICB9O1xuXHRcblx0ICAgICAgLy8gV2hlbiB0aGUgdHlwaW5nIGlzIGNvbXBsZXRlICh3aGVuIG5vdCBsb29wZWQpXG5cdCAgICAgIHNlbGYudHlwaW5nQ29tcGxldGUgPSBmYWxzZTtcblx0XG5cdCAgICAgIC8vIFNldCB0aGUgb3JkZXIgaW4gd2hpY2ggdGhlIHN0cmluZ3MgYXJlIHR5cGVkXG5cdCAgICAgIGZvciAodmFyIGkgaW4gc2VsZi5zdHJpbmdzKSB7XG5cdCAgICAgICAgc2VsZi5zZXF1ZW5jZVtpXSA9IGk7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIC8vIElmIHRoZXJlIGlzIHNvbWUgdGV4dCBpbiB0aGUgZWxlbWVudFxuXHQgICAgICBzZWxmLmN1cnJlbnRFbENvbnRlbnQgPSB0aGlzLmdldEN1cnJlbnRFbENvbnRlbnQoc2VsZik7XG5cdFxuXHQgICAgICBzZWxmLmF1dG9JbnNlcnRDc3MgPSBzZWxmLm9wdGlvbnMuYXV0b0luc2VydENzcztcblx0XG5cdCAgICAgIHRoaXMuYXBwZW5kQW5pbWF0aW9uQ3NzKHNlbGYpO1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ2dldEN1cnJlbnRFbENvbnRlbnQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRFbENvbnRlbnQoc2VsZikge1xuXHQgICAgICB2YXIgZWxDb250ZW50ID0gJyc7XG5cdCAgICAgIGlmIChzZWxmLmF0dHIpIHtcblx0ICAgICAgICBlbENvbnRlbnQgPSBzZWxmLmVsLmdldEF0dHJpYnV0ZShzZWxmLmF0dHIpO1xuXHQgICAgICB9IGVsc2UgaWYgKHNlbGYuaXNJbnB1dCkge1xuXHQgICAgICAgIGVsQ29udGVudCA9IHNlbGYuZWwudmFsdWU7XG5cdCAgICAgIH0gZWxzZSBpZiAoc2VsZi5jb250ZW50VHlwZSA9PT0gJ2h0bWwnKSB7XG5cdCAgICAgICAgZWxDb250ZW50ID0gc2VsZi5lbC5pbm5lckhUTUw7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgZWxDb250ZW50ID0gc2VsZi5lbC50ZXh0Q29udGVudDtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gZWxDb250ZW50O1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ2FwcGVuZEFuaW1hdGlvbkNzcycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kQW5pbWF0aW9uQ3NzKHNlbGYpIHtcblx0ICAgICAgaWYgKCFzZWxmLmF1dG9JbnNlcnRDc3MpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKCFzZWxmLnNob3dDdXJzb3IgfHwgIXNlbGYuZmFkZU91dCkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgdmFyIGNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdCAgICAgIGNzcy50eXBlID0gJ3RleHQvY3NzJztcblx0ICAgICAgdmFyIGlubmVyQ3NzID0gJyc7XG5cdCAgICAgIGlmIChzZWxmLnNob3dDdXJzb3IpIHtcblx0ICAgICAgICBpbm5lckNzcyArPSAnXFxuICAgICAgICAudHlwZWQtY3Vyc29ye1xcbiAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgICBhbmltYXRpb246IHR5cGVkanNCbGluayAwLjdzIGluZmluaXRlO1xcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogdHlwZWRqc0JsaW5rIDAuN3MgaW5maW5pdGU7XFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcXG4gICAgICAgIH1cXG4gICAgICAgIEBrZXlmcmFtZXMgdHlwZWRqc0JsaW5re1xcbiAgICAgICAgICA1MCUgeyBvcGFjaXR5OiAwLjA7IH1cXG4gICAgICAgIH1cXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyB0eXBlZGpzQmxpbmt7XFxuICAgICAgICAgIDAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICAgICAgICA1MCUgeyBvcGFjaXR5OiAwLjA7IH1cXG4gICAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gICAgICAgIH1cXG4gICAgICAnO1xuXHQgICAgICB9XG5cdCAgICAgIGlmIChzZWxmLmZhZGVPdXQpIHtcblx0ICAgICAgICBpbm5lckNzcyArPSAnXFxuICAgICAgICAudHlwZWQtZmFkZS1vdXR7XFxuICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cztcXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IDA7XFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiAwO1xcbiAgICAgICAgfVxcbiAgICAgICc7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKGNzcy5sZW5ndGggPT09IDApIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgY3NzLmlubmVySFRNTCA9IGlubmVyQ3NzO1xuXHQgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGNzcyk7XG5cdCAgICB9XG5cdCAgfV0pO1xuXHRcblx0ICByZXR1cm4gSW5pdGlhbGl6ZXI7XG5cdH0pKCk7XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBJbml0aWFsaXplcjtcblx0dmFyIGluaXRpYWxpemVyID0gbmV3IEluaXRpYWxpemVyKCk7XG5cdGV4cG9ydHMuaW5pdGlhbGl6ZXIgPSBpbml0aWFsaXplcjtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyoqXG5cdCAqIERlZmF1bHRzICYgb3B0aW9uc1xuXHQgKiBAcmV0dXJucyB7b2JqZWN0fSBUeXBlZCBkZWZhdWx0cyAmIG9wdGlvbnNcblx0ICogQHB1YmxpY1xuXHQgKi9cblx0XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0dmFyIGRlZmF1bHRzID0ge1xuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7YXJyYXl9IHN0cmluZ3Mgc3RyaW5ncyB0byBiZSB0eXBlZFxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzdHJpbmdzRWxlbWVudCBJRCBvZiBlbGVtZW50IGNvbnRhaW5pbmcgc3RyaW5nIGNoaWxkcmVuXG5cdCAgICovXG5cdCAgc3RyaW5nczogWydUaGVzZSBhcmUgdGhlIGRlZmF1bHQgdmFsdWVzLi4uJywgJ1lvdSBrbm93IHdoYXQgeW91IHNob3VsZCBkbz8nLCAnVXNlIHlvdXIgb3duIScsICdIYXZlIGEgZ3JlYXQgZGF5ISddLFxuXHQgIHN0cmluZ3NFbGVtZW50OiBudWxsLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gdHlwZVNwZWVkIHR5cGUgc3BlZWQgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICovXG5cdCAgdHlwZVNwZWVkOiAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnREZWxheSB0aW1lIGJlZm9yZSB0eXBpbmcgc3RhcnRzIGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIHN0YXJ0RGVsYXk6IDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBiYWNrU3BlZWQgYmFja3NwYWNpbmcgc3BlZWQgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICovXG5cdCAgYmFja1NwZWVkOiAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHNtYXJ0QmFja3NwYWNlIG9ubHkgYmFja3NwYWNlIHdoYXQgZG9lc24ndCBtYXRjaCB0aGUgcHJldmlvdXMgc3RyaW5nXG5cdCAgICovXG5cdCAgc21hcnRCYWNrc3BhY2U6IHRydWUsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc2h1ZmZsZSBzaHVmZmxlIHRoZSBzdHJpbmdzXG5cdCAgICovXG5cdCAgc2h1ZmZsZTogZmFsc2UsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBiYWNrRGVsYXkgdGltZSBiZWZvcmUgYmFja3NwYWNpbmcgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICovXG5cdCAgYmFja0RlbGF5OiA3MDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZmFkZU91dCBGYWRlIG91dCBpbnN0ZWFkIG9mIGJhY2tzcGFjZVxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBmYWRlT3V0Q2xhc3MgY3NzIGNsYXNzIGZvciBmYWRlIGFuaW1hdGlvblxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZmFkZU91dERlbGF5IEZhZGUgb3V0IGRlbGF5IGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIGZhZGVPdXQ6IGZhbHNlLFxuXHQgIGZhZGVPdXRDbGFzczogJ3R5cGVkLWZhZGUtb3V0Jyxcblx0ICBmYWRlT3V0RGVsYXk6IDUwMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBsb29wIGxvb3Agc3RyaW5nc1xuXHQgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsb29wQ291bnQgYW1vdW50IG9mIGxvb3BzXG5cdCAgICovXG5cdCAgbG9vcDogZmFsc2UsXG5cdCAgbG9vcENvdW50OiBJbmZpbml0eSxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBzaG93Q3Vyc29yIHNob3cgY3Vyc29yXG5cdCAgICogQHByb3BlcnR5IHtzdHJpbmd9IGN1cnNvckNoYXIgY2hhcmFjdGVyIGZvciBjdXJzb3Jcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGF1dG9JbnNlcnRDc3MgaW5zZXJ0IENTUyBmb3IgY3Vyc29yIGFuZCBmYWRlT3V0IGludG8gSFRNTCA8aGVhZD5cblx0ICAgKi9cblx0ICBzaG93Q3Vyc29yOiB0cnVlLFxuXHQgIGN1cnNvckNoYXI6ICd8Jyxcblx0ICBhdXRvSW5zZXJ0Q3NzOiB0cnVlLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gYXR0ciBhdHRyaWJ1dGUgZm9yIHR5cGluZ1xuXHQgICAqIEV4OiBpbnB1dCBwbGFjZWhvbGRlciwgdmFsdWUsIG9yIGp1c3QgSFRNTCB0ZXh0XG5cdCAgICovXG5cdCAgYXR0cjogbnVsbCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBiaW5kSW5wdXRGb2N1c0V2ZW50cyBiaW5kIHRvIGZvY3VzIGFuZCBibHVyIGlmIGVsIGlzIHRleHQgaW5wdXRcblx0ICAgKi9cblx0ICBiaW5kSW5wdXRGb2N1c0V2ZW50czogZmFsc2UsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjb250ZW50VHlwZSAnaHRtbCcgb3IgJ251bGwnIGZvciBwbGFpbnRleHRcblx0ICAgKi9cblx0ICBjb250ZW50VHlwZTogJ2h0bWwnLFxuXHRcblx0ICAvKipcblx0ICAgKiBBbGwgdHlwaW5nIGlzIGNvbXBsZXRlXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uQ29tcGxldGU6IGZ1bmN0aW9uIG9uQ29tcGxldGUoc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEJlZm9yZSBlYWNoIHN0cmluZyBpcyB0eXBlZFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBwcmVTdHJpbmdUeXBlZDogZnVuY3Rpb24gcHJlU3RyaW5nVHlwZWQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciBlYWNoIHN0cmluZyBpcyB0eXBlZFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblN0cmluZ1R5cGVkOiBmdW5jdGlvbiBvblN0cmluZ1R5cGVkKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogRHVyaW5nIGxvb3BpbmcsIGFmdGVyIGxhc3Qgc3RyaW5nIGlzIHR5cGVkXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uTGFzdFN0cmluZ0JhY2tzcGFjZWQ6IGZ1bmN0aW9uIG9uTGFzdFN0cmluZ0JhY2tzcGFjZWQoc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFR5cGluZyBoYXMgYmVlbiBzdG9wcGVkXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uVHlwaW5nUGF1c2VkOiBmdW5jdGlvbiBvblR5cGluZ1BhdXNlZChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFR5cGluZyBoYXMgYmVlbiBzdGFydGVkIGFmdGVyIGJlaW5nIHN0b3BwZWRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25UeXBpbmdSZXN1bWVkOiBmdW5jdGlvbiBvblR5cGluZ1Jlc3VtZWQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciByZXNldFxuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblJlc2V0OiBmdW5jdGlvbiBvblJlc2V0KHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciBzdG9wXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uU3RvcDogZnVuY3Rpb24gb25TdG9wKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgc3RhcnRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25TdGFydDogZnVuY3Rpb24gb25TdGFydChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFmdGVyIGRlc3Ryb3lcblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25EZXN0cm95OiBmdW5jdGlvbiBvbkRlc3Ryb3koc2VsZikge31cblx0fTtcblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGRlZmF1bHRzO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XG5cdC8qKlxuXHQgKiBUT0RPOiBUaGVzZSBtZXRob2RzIGNhbiBwcm9iYWJseSBiZSBjb21iaW5lZCBzb21laG93XG5cdCAqIFBhcnNlIEhUTUwgdGFncyAmIEhUTUwgQ2hhcmFjdGVyc1xuXHQgKi9cblx0XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblx0XG5cdHZhciBIVE1MUGFyc2VyID0gKGZ1bmN0aW9uICgpIHtcblx0ICBmdW5jdGlvbiBIVE1MUGFyc2VyKCkge1xuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxQYXJzZXIpO1xuXHQgIH1cblx0XG5cdCAgX2NyZWF0ZUNsYXNzKEhUTUxQYXJzZXIsIFt7XG5cdCAgICBrZXk6ICd0eXBlSHRtbENoYXJzJyxcblx0XG5cdCAgICAvKipcblx0ICAgICAqIFR5cGUgSFRNTCB0YWdzICYgSFRNTCBDaGFyYWN0ZXJzXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIEN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIFBvc2l0aW9uIGluIGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmIGluc3RhbmNlIG9mIFR5cGVkXG5cdCAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBhIG5ldyBzdHJpbmcgcG9zaXRpb25cblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0XG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdHlwZUh0bWxDaGFycyhjdXJTdHJpbmcsIGN1clN0clBvcywgc2VsZikge1xuXHQgICAgICBpZiAoc2VsZi5jb250ZW50VHlwZSAhPT0gJ2h0bWwnKSByZXR1cm4gY3VyU3RyUG9zO1xuXHQgICAgICB2YXIgY3VyQ2hhciA9IGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zKS5jaGFyQXQoMCk7XG5cdCAgICAgIGlmIChjdXJDaGFyID09PSAnPCcgfHwgY3VyQ2hhciA9PT0gJyYnKSB7XG5cdCAgICAgICAgdmFyIGVuZFRhZyA9ICcnO1xuXHQgICAgICAgIGlmIChjdXJDaGFyID09PSAnPCcpIHtcblx0ICAgICAgICAgIGVuZFRhZyA9ICc+Jztcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgZW5kVGFnID0gJzsnO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB3aGlsZSAoY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MgKyAxKS5jaGFyQXQoMCkgIT09IGVuZFRhZykge1xuXHQgICAgICAgICAgY3VyU3RyUG9zKys7XG5cdCAgICAgICAgICBpZiAoY3VyU3RyUG9zICsgMSA+IGN1clN0cmluZy5sZW5ndGgpIHtcblx0ICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGN1clN0clBvcysrO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBjdXJTdHJQb3M7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBCYWNrc3BhY2UgSFRNTCB0YWdzIGFuZCBIVE1MIENoYXJhY3RlcnNcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgQ3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgUG9zaXRpb24gaW4gY3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGYgaW5zdGFuY2Ugb2YgVHlwZWRcblx0ICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IGEgbmV3IHN0cmluZyBwb3NpdGlvblxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2JhY2tTcGFjZUh0bWxDaGFycycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYmFja1NwYWNlSHRtbENoYXJzKGN1clN0cmluZywgY3VyU3RyUG9zLCBzZWxmKSB7XG5cdCAgICAgIGlmIChzZWxmLmNvbnRlbnRUeXBlICE9PSAnaHRtbCcpIHJldHVybiBjdXJTdHJQb3M7XG5cdCAgICAgIHZhciBjdXJDaGFyID0gY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MpLmNoYXJBdCgwKTtcblx0ICAgICAgaWYgKGN1ckNoYXIgPT09ICc+JyB8fCBjdXJDaGFyID09PSAnOycpIHtcblx0ICAgICAgICB2YXIgZW5kVGFnID0gJyc7XG5cdCAgICAgICAgaWYgKGN1ckNoYXIgPT09ICc+Jykge1xuXHQgICAgICAgICAgZW5kVGFnID0gJzwnO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBlbmRUYWcgPSAnJic7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHdoaWxlIChjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcyAtIDEpLmNoYXJBdCgwKSAhPT0gZW5kVGFnKSB7XG5cdCAgICAgICAgICBjdXJTdHJQb3MtLTtcblx0ICAgICAgICAgIGlmIChjdXJTdHJQb3MgPCAwKSB7XG5cdCAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBjdXJTdHJQb3MtLTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gY3VyU3RyUG9zO1xuXHQgICAgfVxuXHQgIH1dKTtcblx0XG5cdCAgcmV0dXJuIEhUTUxQYXJzZXI7XG5cdH0pKCk7XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBIVE1MUGFyc2VyO1xuXHR2YXIgaHRtbFBhcnNlciA9IG5ldyBIVE1MUGFyc2VyKCk7XG5cdGV4cG9ydHMuaHRtbFBhcnNlciA9IGh0bWxQYXJzZXI7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKVxufSk7XG47Il19
