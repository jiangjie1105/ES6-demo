import yargs from 'yargs';

const args = yargs
//option 选项部分，提取，区分线上还是开发环境
  .option('production',{
    boolean: true,
    default: false,
    describe: 'min all scripts'
  })
//用watch参数控制
  .option('watch',{
    boolean:true,
    default:false,
    describe:'watch all files'
  })
//命令行日志verbose
  .option('verbose',{
    boolean: true,
    default: false,
    describe:'log'
  })
//映射 生成sourcemaps
  .option('sourcemaps',{
    describe: 'force the creation of sroucemaps'
  })
//生成服务器端口
  .option('port',{
    string:true,
    default:8080,
    describe:'server port'
  })
//输入命令行，以字符串形式进行解析
  .argv