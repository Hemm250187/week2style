const gulp = require("gulp");
const sass = require("gulp-sass");
const webserver = require("gulp-webserver");

gulp.task("devcss", () => {
    return gulp.src("./src/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./src/css"))
})
gulp.task("server", () => {
    return gulp.src("./src")
        .pipe(webserver({
            port: 1425,
            livereload: true,
            proxies: [
                { "source": "/cender", "target": "http://localhost:3000/cender" }
            ]
        }))
})
gulp.task("watch", () => {
    return gulp.watch("./src/scss/**/*.scss", gulp.series("devcss"))
})
gulp.task("default", gulp.series("devcss", "server", "watch"))