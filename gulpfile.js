var gulp = require("gulp");
var bower = require("gulp-bower");
var $ = require('gulp-load-plugins')();

try {
    var config = require('./gulp.config');

    gulp.task('custom-fields-template', function () {
        return gulp.src(config.contentFolder + '/**/*.html')
            .pipe($.plumber())
            .pipe($.angularTemplatecache({
                module: 'custom-fields',
                root: ''
            }))
            .pipe(gulp.dest(config.contentFolder));
    });
    
    gulp.task('custom-fields-javascript', ['custom-fields-template'], function () {
        var jsPipe = gulp.src(config.js)
            .pipe($.plumber())
            .pipe($.if(config.debug, $.sourcemaps.init()))
            .pipe($.concat('custom-fields.js'))
            .pipe($.if(!config.debug, $.uglify()))
            .pipe($.if(config.debug, $.sourcemaps.write()))
            .pipe(gulp.dest('./'));
        return jsPipe;
    });

    gulp.task("custom-fields-css", function () {
        return gulp.src(config.contentFolder + "/**/*.scss")
            .pipe($.plumber())
            .pipe($.if(config.debug, $.sourcemaps.init()))
            .pipe($.sass({ outputStyle: 'compressed' }).on("error", $.sass.logError))
            .pipe($.concat('custom-fields.css'))
            .pipe($.if(config.debug, $.sourcemaps.write()))
            .pipe(gulp.dest('./'));
    });

    //demo:

    gulp.task('bowerJs', function () {
        var jsPipe = gulp.src(config.bowerJs())
            .pipe($.plumber())
            .pipe($.if(config.debug, $.sourcemaps.init()))
            .pipe($.concat('vendor.js'))
            .pipe($.if(!config.debug, $.uglify()))
            .pipe($.if(config.debug, $.sourcemaps.write()))
            .pipe(gulp.dest('./'));
        return jsPipe;
    });



    gulp.task('_build', ['custom-fields-javascript', 'custom-fields-css', 'bowerJs']);

    //*******************************************************************************************************************************
    

    gulp.task("watch-app", function () {
        gulp.watch(config.contentFolder + "/**/*.scss", ["custom-fields-editor-css"]);
        gulp.watch([config.contentFolder + '/**/*.html'], ['custom-fields-editor-javascript']);
        gulp.watch(config.js, ['custom-fields-editor-javascript']);
    });

    gulp.task("_watch", ["watch-app"]);

} catch (e) {
    console.log("Looks like some bower components are not installed. Run 'bower-force' task. ", e);
    gulp.task("bower", function () {
        return bower({ directory: "./bower_components", cwd: "./Content", force: true })
            .pipe(gulp.dest(config.contentFolder + "/bower_components"));
    });
    
    gulp.task('build-force', ['bower']);
}