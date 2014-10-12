// GULP: pipe-based build system
// better than 'npm start' when actively developing,
// because it can handle css preprocessing, server
// reloading, and other useful things automatically
//
// make sure the gulp binary is installed
// ('npm install -g gulp'), and run 'gulp' in the
// project root to run and watch

var gulp = require('gulp');
var supervisor = require('gulp-supervisor');
var stylus = require('gulp-stylus'); // gulp stylus compiler
var jeet = require('jeet'); // grid system for stylus

// DIRECTORIES
// configure directory locations here so that file structure
// can be easily changed without creating bugs in the gulpfile

var stylus_dir = 'public/stylesheets/stylus/';
var css_dir = 'public/stylesheets/css/';

// this task compiles our stylus into css
gulp.task('stylus', function() {
  gulp.src(stylus_dir + 'stylus.styl')
    .pipe(stylus({
      use: [ jeet() ]
    }))
    .pipe(gulp.dest(css_dir));
});

// this serves our node app, and restarts the server
// whenever a file in bin/ or app/ is modified
gulp.task('serve', function() {
  supervisor('bin/www', {
    watch: ['bin', 'app'],
    exec: 'node',
    extensions: ['js'],
    noRestartOn: 'exit'
  });
});

// this task executes certain tasks when certain files are modified
// specifically, we are using it to recompile stylus files into
// css whenever it is modified.
gulp.task('watch', function() {
  gulp.watch('public/stylesheets/stylus/*.styl', ['stylus']);
});

// the default task (the one that gets run if you
// just run 'gulp' in the root dir of the project)
gulp.task('default', ['serve', 'stylus', 'watch']);

