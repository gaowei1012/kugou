const gulp = require('gulp')
const sass = require('gulp-ruby-sass')

gulp.task('sass', function () {
    return sass('./src/header.scss')//编译文件
    .on('error', sass.logError)//错误信息
    .pipe(gulp.dest('./css'))////输出路径
})

gulp.task('dist',function(){
   gulp.watch('./src/*.scss',['sass']);// 监听的文件
});
