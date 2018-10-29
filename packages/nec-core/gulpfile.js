const outDir = 'dist';

const cp = require('child_process');
function execAsync(command, options) {
    return new Promise((resolve, reject) => cp.exec(command, options, (error, stdout, stderr) => {
        if (error) {
            reject(error);
        }
        else {
            resolve({ stdout: stdout, stderr: stderr });
        }
    }));
}

gulp.task('copyPackageContents', function() {
    return gulp
        .src([
            'package.json',
            'README.md',
            '*.js'
        ])
        .pipe(gulp.dest(outDir));
});

gulp.task('setPackageVersion', ['copyPackageContents'], function() {
    var nbgv = require(`./${outDir}`);
    // Stamp the copy of the NPM package in outDir, but use this
    // source directory as a reference for calculating the git version.
    return nbgv.setPackageVersion(outDir, '.');
});

gulp.task('package', ['setPackageVersion'], function() {
    return execAsync(`npm pack "${path.join(__dirname, outDir)}"`, { cwd: outDir });
});

gulp.task('default', ['package'], function() {
});