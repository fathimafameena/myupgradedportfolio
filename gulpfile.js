const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

gulp.task("default", ["styles"], function() {
  gulp.watch("sass/**/*.scss", ["styles"]);

  browserSync.init({
    server: "./"
  });
});

gulp.task("styles", function() {
  gulp
    .src("sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});
gulp.task('images', function() {
    return gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});