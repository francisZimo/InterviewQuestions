const { join, resolve, basename, relative } = require('path');
const path = require('path');
const archiver = require('archiver');
const fs = require('fs');
const axios = require('axios');
const md5 = require('js-md5');
const { Base64 } = require('js-base64');
const ora = require('ora');
const crypto = require('crypto');


class UploadFile {
  constructor(options = {}) {
    this.path = options.path;
    this.filename = options.filename;
    this.env = process.env.ENV;
    this.include = options.include || '';
    this.exclude = options.exclude || '';
    this.url = options.url || '';
  }

  apply(compiler) {
    this.zipFile(compiler);
    this.upLoad(compiler);
  }

  // 拷贝打包输出如文件entry:output 默认拷贝dist
  _copyDist(compilation,callback){
    // const zipDir=basename(this.path)
    const zipDirName=basename(this.path)
    const zippath = path.join(this.path );
    const isExist = fs.existsSync(zippath);
    if (isExist) {
      // 删除已有文件
      fs.rmSync(zippath, { recursive: true, force: true }, function (error) {
        if (error) {
          console.log(error);
          return false;
        }
        console.error('文件删除成功');
      });
    }
    // 创建文件夹
    fs.mkdirSync(zippath);

    console.log('xxx===',zipDirName,'===xxzipDirName')
    //dist压缩包 输出路径
    const outPath = path.join(this.path, `${this.filename}.zip`);
    // 创建可写流
    const output = fs.createWriteStream(outPath);
    //dist 源文件路径
    const distPath = compilation.options.output.path;
    const archive = archiver('zip', {
      zlib: { level: 9 } // Sets the compression level.
    });
    // good practice to catch this error explicitly
    archive.on('error', function (err) {
      throw err;
    });
    output.on('close', function () {
      console.log('拷贝完毕.',archive.pointer() + ' total bytes');
      // 结束回调！！！
      callback();
    });
    // pipe archive data to the file
    archive.pipe(output);
    // append files from a sub-directory, putting its contents at the root of archive
    archive.directory(distPath, false);
    // 执行完毕;
    archive.finalize();
  }

  zipFile(compiler) {
    compiler.hooks.afterEmit.tapAsync(UploadFile.name, (compilation, callback) => {
      // 拷贝完成 回调
      this._copyDist(compilation,callback)
    });
  }

  upLoad(compiler) {
    compiler.hooks.done.tapAsync('UpdataFile', async (compilation, callback) => {
      const $key = this.env === 'dev' ? 'ba56e3286d7baa137dd27ae89afb2382' : 'b99edd6f5d59d874ea2d29033c7f1392';
      const appid = this.env === 'dev' ? 1002724 : 1002886;
      const time = new Date().getTime();
      const cipher = md5($key + '&' + time);
      const sign = Base64.encode(cipher + '&' + time);
      const fileName = this.filename + '.zip';
      const filePath = join(this.path, fileName);
      const file = fs.createReadStream(filePath);
      const buffer = fs.readFileSync(filePath);
      this.fileMd5 = this.getFileMd5(buffer);
      const updateFile = ora('项目压缩包上传中').start();
      this.filePath = `xueyanfe/${new Date().getTime()}/${fileName}`;
      try {
        const { data: paramData } = await axios.get('http://upload.xueersi.com/v2/upload_param', {
          params: { dst_path: this.filePath }, // 附带参数
          headers: { appid, sign } // 设置 header 信息
        });
        const res = paramData.data[0];
        const url = res.host;
        const requestHeader = res.request_header;
        const { data } = await axios.put(url, file, {
          headers: requestHeader,
          maxContentLength: 10000000000,
          maxBodyLength: 100000000000
        });
        if (data.stat === 1) {
          updateFile.succeed('项目压缩包上传成功');
          const file = resolve(this.path, 'file.json');
          // const fileData = {
          //   nodeEnv: this.env,
          //   fileMd5: this.fileMd5,
          //   filePath: "/" + this.filePath,
          // };
          const fileData = {
            Env: this.env,
            ZipName: this.filename,
            ZipPath: '/' + this.filePath,
            ZipMD5: this.fileMd5,
            ZipURL: this.url,
            sort: 110
          };

          fs.writeFileSync(file, JSON.stringify(fileData, null, 2), {
            encoding: 'utf-8'
          });
          console.log(fileData);
          callback();
        } else {
          updateFile.fail('项目压缩上传失败');
          process.exit(0);
        }
      } catch (err) {
        updateFile.fail('项目压缩上传失败');
        console.error('catch', err);
        process.exit(0);
      }
    });
  }

  getFileMd5(file) {
    const hash = crypto.createHash('md5');
    hash.update(file, 'utf-8');
    return hash.digest('hex');
  }
}

module.exports = UploadFile;
