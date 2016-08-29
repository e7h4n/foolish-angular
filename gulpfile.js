/*jshint node:true*/

'use strict';

var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var path = require('path');
var projectDirectory = path.basename(process.cwd());
var projectName = projectDirectory.replace(/[\-_]/g, '.');

gulp.task('default', function () {
    gulp.src([
        '**/*.html',
        '!bower_components/**/*.*',
        '!index.html'
    ]).pipe(templateCache('templates.js', {
        module: projectName
    })).pipe(gulp.dest('./gen/'));
});

module.exports = gulp;
