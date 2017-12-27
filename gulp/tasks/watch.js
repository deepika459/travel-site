var gulp = require('gulp');
var watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch',function(){
  browserSync.init({
    notify:false,
server:{
  baseDir:"app"
}

 });
watch('./app/index.html',function(){
   browserSync.reload(); //gulp.start('html');-- used when we save our html file to see the saved changes.
});
watch('./app/assets/styles/**/*.css',function(){
  gulp.start('cssInject');
  browserSync.reload();
  });
});
gulp.task('cssInject',['styles'],function(){
  return gulp.src('.app/temp/styles/styles.css')
  .pipe(browserSync.stream());
});
