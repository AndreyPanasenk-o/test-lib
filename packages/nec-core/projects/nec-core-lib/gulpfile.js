var gulp = require('gulp');
var nbgv = require('nerdbank-gitversioning')
const outDir = '../../dist/nec-core-lib';

gulp.task('copyPackageContents', function() {
    return gulp
        .src([
            '../../README.md',
            '*.js'
        ])
        .pipe(gulp.dest(outDir));
});

gulp.task('setPackageVersion', ['copyPackageContents'], function() {
    return nbgv.setPackageVersion(outDir, '.');
});

gulp.task('default', ['setPackageVersion'], function() {
});