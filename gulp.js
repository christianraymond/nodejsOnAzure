const gulp = require("gulp");
const jshint = require("gulp-jshint");

gulp.task("default", function(){console.log("Hello world!")});
gulp.task("lint", function(){
    return gulp.src(["./**/*.js", "!node_modules/**"])
    .pipe(jshint({esversion: 6}))
    .pipe(jshint.reporter("default"))
    .pipe(jshint.reporter("fail"));
})