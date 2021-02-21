const tsc = require('gulp-typescript');
const {src, dest, series} = require('gulp');
const replace = require('gulp-replace');
const sourcemaps = require('gulp-sourcemaps');

function html() {
    return src('./src/*.html')
    .pipe(dest('./public/'));
}

function css() {
    return src('./src/css/*.css')
    .pipe(dest('./public/css'));
}

function ts() {
    return src('./src/ts/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(tsc({
        target: 'esnext',
    }))
    .pipe(sourcemaps.write('../maps/'))
    .pipe(replace(/(import.*)(['"`];?)/g, "$1.js$2"))
    .pipe(dest('./public/js/'))
}

function sw() {
    return src('./src/sw.ts')
    .pipe(sourcemaps.init())
    .pipe(tsc({
        target: 'esnext',
    }))
    .pipe(sourcemaps.write('./maps/'))
    .pipe(replace(/(import.*)(['"`];?)/g, "$1.js$2"))
    .pipe(dest('./public/'))
}

function images() {
    return src('./src/img/**/*')
    .pipe(dest('./public/img/'))
}

function json() {
    return src('./src/**/*.json')
    .pipe(dest('./public/'))
}


exports.build = series(ts, html, images, json, sw, css);