const sass        = require('gulp-sass');
const gutil       = require('gulp-util');
const prefix      = require('gulp-autoprefixer');
const cleanCSS    = require('gulp-clean-css');

const scssPath    = '_scss/*.scss';
const destPath    = '_site/css';

module.exports = gulp => {

  gulp.task( 'sass', () => {
    return gulp.src( scssPath )
    .pipe( sass( {
      includePaths: ['scss'],
      outputStyle: 'expanded'
    } ) )
    .on('error', gutil.log)
    .pipe( prefix( {
      browsers: [ 'last 2 versions' ],
      cascade: false
    } ) )
    .pipe( cleanCSS( {compatibility: 'ie8'} ) )
    .pipe( gulp.dest( destPath ) )
  });

}
