const gulp = require('gulp');
const pug = require('gulp-pug');

module.export = gulp.task('pug', () => {
	gulp.src('./dev/pug/**/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('./build/pug'));
})