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

gulp.task('icons', function () {
  return gulp.src('./img/icons/*')
    .pipe(svgmin())
    .pipe(svgstore({ fileName: 'icons.svg', inlineSvg: true}))
    .pipe(cheerio({
      run: function ($, file) {
        $('svg').addClass('hide');
        $('[fill]').removeAttr('fill');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(gulp.dest('./_includes/'));
});


gulp.task( 'build', [ 'sass', 'scripts', 'images', 'jekyll-build' ]);
gulp.task( 'default', ['jekyll-build', 'serve']);
