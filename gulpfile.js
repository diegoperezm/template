var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var prettier = require("gulp-prettier");

gulp.task("server", function() {
  browserSync.init({ watch: true, server: "./src" });
});

gulp.task("prettier", function() {
  return gulp
    .src("./src/index.js")
    .pipe(prettier())
    .pipe(gulp.dest("./src/"));
});

