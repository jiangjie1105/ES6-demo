//构建脚本都放在tasks目录下
import gulp from 'gulp';  //引入gulp
import gulpif from 'gulp-if'; //gulp语句中使用gulp if判断的包
import concat from 'gulp-concat'; //gulp文件中使用拼接
import webpack from 'webpack';  //引入webpack打包工具
import gulpWebpack from 'webpack-stream'; //gulp支持的webpack工作流
import named from 'vinyl-named'; //文件重命名包
import livereload from 'gulp-livereload'; //热更新包，自动刷新修改后的文件
import plumber from 'gulp-plumber'; //处理文件信息流
import rename from 'gulp-rename'; //处理文件重命名
import uglify from 'gulp=uglify'; //处理js和css压缩的包
import {log,colors} from 'gulp';  //命令行工具输出的包
import args from './util/args';   //对命令行参数解析的包

gulp.task('scripts',() => {
  return gulp.src(['app/js/index.js'])
    .pipe(plumber({
      errorHandler:function(){

      }
    }))
    .pipe(named())
    .pipe(gulpWebpack({
      module:{
        loders:[{
          test:/\.js$/,
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunk:false
      }))
    }
})