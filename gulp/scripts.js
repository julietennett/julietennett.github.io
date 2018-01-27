const source     = require('vinyl-source-stream');
const buffer     = require('vinyl-buffer');
const browserify = require('browserify');
const babelify   = require('babelify');
const uglify     = require('gulp-uglify');
const util       = require('gulp-util');

const jsEntry   = '_scripts/main.js';
const destPath = '_site/js';

module.exports = gulp => {

  gulp.task( 'scripts', () => {

  let babel = babelify.configure({
    presets: ['env']
  });

  let browse = browserify({
    entries: jsEntry,
    debug: true,
    transform: [ babel ]
  });

  return browse.bundle()
    .on('error', err => {
      util.log( err.message );
      this.emit('end');
    })
    .pipe( source('main.js') )
    .pipe( buffer() )
    // .pipe( uglify() )
    .pipe( gulp.dest( destPath ) )
  });

}
