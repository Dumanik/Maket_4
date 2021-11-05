var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task("styles",()=>{
    return gulp.src('./source/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', gulp.series(['styles']));
gulp.task('watch', ()=>{
    gulp.watch('./source/scss/**/*.scss', (done) => {
        gulp.series(['styles'])(done);
    });

});