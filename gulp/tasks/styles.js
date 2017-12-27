var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
cssImport = require('postcss-import'),
nested = require('postcss-nested'),
mixins = require('postcss-mixins');
gulp.task( 'styles', function() {
  console.log("styles task is running or not see .");
 return gulp.src('./app/assets/styles/styles.css')
 .pipe(postcss([cssImport,mixins,cssvars,nested, autoprefixer]))
  .on('error',function(errorInfo){
    console.log(errorInfo.toString());
    this.emit('end');
  })
 .pipe(gulp.dest('./app/tempooo/styles'));

});
