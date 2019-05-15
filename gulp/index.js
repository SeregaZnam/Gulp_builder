const gulp = require('gulp');
// Для срабатывания less task необходимо набрать в консоли gulp less
const less = require('./tasks/less');
// Для срабатывания less task необходимо набрать в консоли gulp pug
const pug = require('./tasks/pug');

gulp.task('default', () => {
  console.log('default');
})