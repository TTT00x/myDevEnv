const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', callback => runSequence('pug', 'sass', 'javascript', 'watch', 'server', callback));

gulp.task('build', callback => runSequence('pug', 'sass', 'javascript', callback));
