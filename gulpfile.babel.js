import gulp from 'gulp'
import yargs from 'yargs'
import sass from 'gulp-sass'
import cleanCSS from 'gulp-clean-css'
import gulpif from 'gulp-if'
import sourcemaps from 'gulp-sourcemaps'
import del from 'del'
import postcss from 'gulp-postcss'
import cssDeclarationSorter from 'css-declaration-sorter'
import postcssPresetEnv from 'postcss-preset-env'


// Set production variable
const PRODUCTION = yargs.argv.prod

// Common Paths
const paths = {
	styles: {
		src: ['src/assets/scss/bundle.scss'],
		dest: 'src/assets/css'
	},
}

// Delete the dist folder
export const clean = () => del([paths.styles.dest]);

// Preprocess Sass, Minify and move CSS to the dist folder
export const styles = () => {
	return gulp.src(paths.styles.src)
		.pipe(gulpif(PRODUCTION, sourcemaps.init()))
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(postcss([
			postcssPresetEnv({
				stage: 0,
				browsers: 'last 2 versions'
			}), 
			cssDeclarationSorter({ order: 'smacss' })
		]))
		.pipe(gulpif(PRODUCTION, cleanCSS({compatibility: 'ie8'})))
		.pipe(gulpif(PRODUCTION, sourcemaps.write()))
		.pipe(gulp.dest(paths.styles.dest))
}

// Watch for local edits
export const watch = () => {
	gulp.watch('src/assets/scss/**/*.scss', gulp.series(styles))
}

// Clean the dist folder, ten build all tasks
export const dev = gulp.series(clean, gulp.series(styles), watch)
export const build = gulp.series(clean, gulp.series(styles))

export default dev