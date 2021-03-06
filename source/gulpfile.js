var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

gulp.task('sass', function(){
  gulp.src('styles/main.scss')
      .pipe(sass())
      .pipe(prefix())
      .pipe(gulp.dest('../styles'));
});

gulp.task('cp',function(){
  gulp.src('index.html')
      .pipe(gulp.dest('..'));
});

gulp.task('watch',function(){
  gulp.watch(['*.html'],['cp']);   //当监控到前者有变化（默认接受数组类型），执行后者任务。
  gulp.watch(['styles/*.scss'],['sass']);
});

gulp.task('default',['sass','cp','watch']);