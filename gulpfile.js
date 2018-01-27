'use strict';

const gulp    = require('gulp');
const sass    = require('./gulp/sass');
const scripts = require('./gulp/scripts');
const images  = require('./gulp/images');
const fonts   = require('./gulp/fonts');
const sync    = require('./gulp/browsersync');

[ sass, scripts, images, fonts, sync ].forEach( task => {
  task( gulp );
});

gulp.task( 'build', [ 'sass', 'scripts', 'images', 'jekyll-build' ]);
gulp.task( 'default', ['jekyll-build', 'serve']);
