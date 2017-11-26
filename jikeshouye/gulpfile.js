var gulp = require('gulp');
var imagemin=require('gulp-imagemin');
var gulpIf=require('gulp-if');
var minifyCSS=require('gulp-minify-css');
var uglify=require('gulp-uglify');
var useref=require('gulp-useref');
var notify=require('gulp-notify');
var less=require('gulp-less');
var autoprefixer=require('gulp-autoprefixer');
var babel=require('gulp-babel');

// var react=require('gulp-react');
// var babel=require('gulp-babel');
// var less=require('gulp-less');
// var sass=require('gulp-sass');

gulp.task('useref',function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'))
        .pipe(notify({message:'拼接文件处理完成！'}))
})

gulp.task('scripts',function(){
    return gulp.src('app/scripts/*.js')
        .pipe(babel())
        // .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'))
        .pipe(notify({message:'脚本处理完成！'}))
})

gulp.task('less',function () {
    return gulp.src('app/styles/*.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers:['last 2 versions'],
            cascade:false
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/styles'))
        .pipe(notify({message:'样式处理完成！'}))
})
gulp.task('styles',function () {
    return gulp.src('app/styles/bootstrap.min.css')
        .pipe(gulp.dest('dist/styles'))
        .pipe(notify({message:'样式处理完成！'}))
})

gulp.task('images',function () {
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg')
    // return gulp.src('app/images/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
        .pipe(notify({message:'图片处理完成！'}))
})

gulp.task('hello', function() {
    console.log('Hello World!');
});
gulp.task('default',['scripts','styles','less','useref'],function(){
    console.log("gulp starting!");
})