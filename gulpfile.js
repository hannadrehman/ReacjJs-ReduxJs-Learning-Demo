var gulp=require('gulp');
var browserify=require('browserify');
var babelify=require('babelify');
var source=require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var	file = require('fs');
var	makeDir = require('mkdirp');
var glob=require('glob');
var sass=require('gulp-sass');
var sourceMaps=require('gulp-sourcemaps');
var minifyCSS=require('gulp-minify-css');
var concat=require('gulp-concat');
var historyApiFallback = require('connect-history-api-fallback')



var directories={
  source:'./dev/**/',
}
gulp.task('default',['watch','copy-static','browser-sync','build-css']);

gulp.task('watch',function(){
  gulp.watch(directories.source+'*jsx',['build']);
  gulp.watch(directories.source+'*css',['build-css']);

  gulp.watch("./dev/index.html",['copy-static']);
});

gulp.task("build", function(){
  glob(directories.source+'*.jsx',function(err,files){
    if(err)
      console.log(err);
    else{
      return browserify({
          entries: files,
          debug:true
      })
      .transform(babelify,{
				presets: ["es2015", "react"],
				plugins: ['transform-decorators-legacy']
		})
      .bundle()
      .pipe(source("bundle.js"))
      .pipe(gulp.dest("./prod/js"))
      .pipe(browserSync.reload({
        stream:true
      }));
    }
  });


});

gulp.task('copy-static',function(){
  gulp.src('./dev/index.html')
  .pipe(gulp.dest('./prod'))
  .pipe(browserSync.reload({
    stream:true
  }));
  });
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./prod",
						port:3000,
						middleware:[historyApiFallback()]
        }
    });
  });
gulp.task('common-component',function(){
	try{
		var args=process.argv;
		var componentName=args[args.length-1];

			if(componentName!=undefined || componentName!=''){
				var directoryToComponent='dev/Components/'+componentName;
				makeDir(directoryToComponent,function(err){
				if(err){
					console.log(err);
				}
				else{

		//get component name and convert its first character to lowecase.. make the string cammel case.
						var cName=componentName; // we have made folder as 'F'older and files as 'f'iles. this is for folder name
						cName=componentName.split('');
						cName[0]=cName[0].toLowerCase();
						cName=cName.join('');
						componentName=cName;

					//this includes imports in the saas file . imports are from application component. as the root
					var componentSass='@import "../App/variables.scss";@import "../App/mixins.scss";'
					file.writeFileSync(directoryToComponent+'/'+componentName+'.jsx','//Author : Hannad Rehman ' + new Date());
					file.writeFileSync(directoryToComponent+'/'+componentName+'.scss','/* Author : Hannad Rehman ' + new Date() +'*/' +'\n'+componentSass );

					console.log('successfully created component ',componentName);
				}
			});
			}
	}
	catch(e){
		console.log('exception found in craeting a new common component \n');
		console.log(e)
	}



	});
gulp.task('view-component',function(){
  	try{
  		var args=process.argv;
  		var componentName=args[args.length-1];

  			if(componentName!=undefined || componentName!=''){
  				var directoryToComponent='dev/Views/'+componentName;
  				makeDir(directoryToComponent,function(err){
  				if(err){
  					console.log(err);
  				}
  				else{

  		//get component name and convert its first character to lowecase.. make the string cammel case.
  						var cName=componentName; // we have made folder as 'F'older and files as 'f'iles. this is for folder name
  						cName=componentName.split('');
  						cName[0]=cName[0].toLowerCase();
  						cName=cName.join('');
  						componentName=cName;

  					//this includes imports in the saas file . imports are from application component. as the root
  					var componentSass='@import "../../Components/App/variables.scss";\n@import "../../Components/App/mixins.scss";'
  					file.writeFileSync(directoryToComponent+'/'+componentName+'.jsx','//Author : Hannad Rehman ' + new Date());
  					file.writeFileSync(directoryToComponent+'/'+componentName+'.scss','/* Author : Hannad Rehman ' + new Date() +'*/' +'\n'+componentSass );

  					console.log('successfully created component ',componentName);
  				}
  			});
  			}
  	}
  	catch(e){
  		console.log('exception found in craeting a new common component \n');
  		console.log(e)
  	}



  	});
gulp.task('build-css', function() {
  //build sass, minify it
  return gulp.src(directories.source+'*.scss')
    .pipe(sass())
    .pipe(sourceMaps.init())
    .pipe(minifyCSS())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./prod/css'))
    .pipe(browserSync.reload({
      stream:true
    }));
     //compiles sass
  });