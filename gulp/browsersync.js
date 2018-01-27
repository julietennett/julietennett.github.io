const browserSync  = require('browser-sync').create();
const cp           = require('child_process');
const runSequence  = require('run-sequence');

const jekyll       = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';

const scssPath     = '_scss/**/*.scss';
const jsPath       = '_scripts/**/*.js';
const templatePath = [ '*.html', '+(_includes|_pages|_layouts)/**/*.html', '*.yml', '_data/*.yml', '_posts/*' ];

module.exports = gulp => {

  gulp.task( 'jekyll-build', done => {
    return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
    .on('close', () => {
      runSequence('sass', 'scripts', done);
    });
  });

  gulp.task( 'jekyll-rebuild', ['jekyll-build'], () => {
    browserSync.reload();
  });

  gulp.task( 'serve', ['jekyll-build'], () => {
    browserSync.init({
      notify: false,
      server: {
        baseDir: '_site',
      }
    });

    gulp.watch( scssPath, [ 'sass', browserSync.reload ] );
    gulp.watch( jsPath, [ 'scripts', browserSync.reload ] );
    gulp.watch( templatePath, ['jekyll-rebuild'] );
  });

}
