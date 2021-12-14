const { join, resolve, basename, relative } = require("path");
const RawSource = require("webpack-sources").RawSource;
const yazl = require("yazl");
const ModuleFilenameHelpers = require("webpack/lib/ModuleFilenameHelpers");
const fs = require("fs");
const axios = require("axios");
const md5 = require("js-md5");
const { Base64 } = require("js-base64");
const ora = require("ora");
const crypto = require("crypto");

// 匹配计算
const _toString = Object.prototype.toString;
function isRegExp(v) {
  return _toString.call(v) === "[object RegExp]";
}
// function matches (pattern: string | RegExp | Array<string>, name: string): boolean {
function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    for (var i = 0; i < pattern.length; i++) {
      if (matches(pattern[i], name)) return true;
    }
    return false;
  } else if (typeof pattern === "string") {
    return pattern.split(",").indexOf(name) > -1;
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  /* istanbul ignore next */
  return false;
}

class UploadFile {
  constructor(options = {}) {
    this.path = options.path;
    this.filename = options.filename;
    this.env = process.env.ENV;
    this.include = options.include || "";
    this.exclude = options.exclude || "";
    this.url = options.url || "";
  }

  apply(compiler) {
    this.zipFile(compiler);
    this.upLoad(compiler);
  }

  zipFile(compiler) {
    compiler.hooks.emit.tapAsync(UploadFile.name, (compilation, callback) => {
      if (compilation.compiler.isChild()) {
        callback();
        return;
      }
      const zipFile = new yazl.ZipFile();
      for (var nameAndPath in compilation.assets) {
        if (!compilation.assets.hasOwnProperty(nameAndPath)) continue;
        const source = compilation.assets[nameAndPath].source();
        if (!ModuleFilenameHelpers.matchObject({}, nameAndPath)) continue;

        //  include, exclude 处理
        const name = nameAndPath;
        const { include, exclude } = this;
        if (
          // not included
          (include && (!name || !matches(include, name))) ||
          // excluded
          (exclude && name && matches(exclude, name))
        ) {
          console.log("排除项：", nameAndPath);
        } else {
          zipFile.addBuffer(
            Buffer.isBuffer(source) ? source : Buffer.from(source),
            nameAndPath
          );
        }
      }

      zipFile.end();
      const bufs = [];
      zipFile.outputStream.on("data", function (buf) {
        bufs.push(buf);
      });

      zipFile.outputStream.on("end", () => {
        const outputPathAndFilename = resolve(
          compilation.options.output.path,
          this.path,
          basename(this.filename, ".zip") + ".zip"
        );
        const relativeOutputPath = relative(
          compilation.options.output.path,
          outputPathAndFilename
        );
        compilation.assets[relativeOutputPath] = new RawSource(
          Buffer.concat(bufs)
        );
        callback();
      });
    });
  }

  upLoad(compiler) {
    compiler.hooks.done.tapAsync(
      "UpdataFile",
      async (compilation, callback) => {
        const $key =
          this.env === "dev"
            ? "ba56e3286d7baa137dd27ae89afb2382"
            : "b99edd6f5d59d874ea2d29033c7f1392";
        const appid = this.env === "dev" ? 1002724 : 1002886;
        const time = new Date().getTime();
        const cipher = md5($key + "&" + time);
        const sign = Base64.encode(cipher + "&" + time);
        const fileName = this.filename + ".zip";
        const filePath = join(this.path, fileName);
        const file = fs.createReadStream(filePath);
        const buffer = fs.readFileSync(filePath);
        this.fileMd5 = this.getFileMd5(buffer);
        const updateFile = ora("项目压缩包上传中").start();
        this.filePath = `xueyanfe/${new Date().getTime()}/${fileName}`;
        try {
          const { data: paramData } = await axios.get(
            "http://upload.xueersi.com/v2/upload_param",
            {
              params: { dst_path: this.filePath }, // 附带参数
              headers: { appid, sign }, // 设置 header 信息
            }
          );
          const res = paramData.data[0];
          const url = res.host;
          const requestHeader = res.request_header;
          const { data } = await axios.put(url, file, {
            headers: requestHeader,
            maxContentLength: 10000000000,
            maxBodyLength: 100000000000,
          });
          if (data.stat === 1) {
            updateFile.succeed("项目压缩包上传成功");
            const file = resolve(this.path, "file.json");
            // const fileData = {
            //   nodeEnv: this.env,
            //   fileMd5: this.fileMd5,
            //   filePath: "/" + this.filePath,
            // };
            const fileData = {
              Env: this.env,
              ZipName: this.filename,
              ZipPath: "/" + this.filePath,
              ZipMD5: this.fileMd5,
              ZipURL: this.url,
              sort: 110,
            };

            fs.writeFileSync(file, JSON.stringify(fileData, null, 2), {
              encoding: "utf-8",
            });
            console.log(".json info");
            console.log(fileData);
            callback();
          } else {
            updateFile.fail("项目压缩上传失败");
            process.exit(0);
          }
        } catch (err) {
          updateFile.fail("项目压缩上传失败");
          console.error("catch", err);
          process.exit(0);
        }
      }
    );
  }

  getFileMd5(file) {
    const hash = crypto.createHash("md5");
    hash.update(file, "utf-8");
    return hash.digest("hex");
  }
}

module.exports = UploadFile;
