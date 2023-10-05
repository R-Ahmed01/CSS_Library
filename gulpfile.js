const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src('CSS_Library/**/*.scss').pipe(sass()).pipe(dest('css'))
}

function watchTask() {
    watch(['CSS_Library/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)