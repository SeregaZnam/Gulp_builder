const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
 
module.export = gulp.task('less', () => {
	gulp.src('./dev/less/**/*.less')
		.pipe(less({
			paths: [ path.join(__dirname, 'less', 'includes') ],
			plugins: [autoprefix],
		}))
		.pipe(gulp.dest('./build/less'));
});