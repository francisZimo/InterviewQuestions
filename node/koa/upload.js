const Koa = require('koa'); // 引入 koa
const router = require('koa-router')(); // 引入 koa-router
const bodyParser = require('koa-body-parser'); // 引入 koa-body-parser
const app = new Koa(); // 起一个 koa 服务器
const path = require('path');
const cors = require('koa2-cors');


// 查看请求头
app.use(async (ctx, next) => {
    console.log('===请求头===')
    console.log(ctx.request.header)
    await next();
});

// 这两个请求处理，是用来测试的
router.get('/', async (ctx, next) => {
    // ctx 是对请求的 request 和 response 对象的封装
    // ctx.response.body = '<h1>Home</h1>';
    console.log(ctx, '==header get')
    ctx.body = '<h1>Home</h1>';;
})
router.post('/api/login', async (ctx, next) => {
    // ctx.response.body = '<h1>Login</h1>';
    ctx.body = 'Hello World,My first koa router';
})

// post demo
router.post('/api/post', async (ctx, next) => {
    // ctx.response.body = '<h1>Login</h1>';
    console.log(ctx.request.body, '==xxx')
    ctx.body = 'Hello World,My first koa router';
})

// 定义上传接口
router.post('/upload', async (ctx) => {
    console.log(ctx, '===ctx')
    // 接收formdata
    // const data = ctx.request.body;
    // console.log(data, '===data')
    // // 获取上传文件
    // const blob = data.file;
    // console.log(blob, '===blob')

    // 生成一个唯一的文件名，以确保不会出现重复文件名
    // const fileName = Date.now().toString() + '.png';

    // // 将 Blob 对象保存为图片文件
    // try {
    //     await writeFile(path.join(__dirname, 'images', fileName), blob, 'binary');
    //     ctx.status = 200;
    //     ctx.body = 'File uploaded successfully!';
    // } catch (err) {
    //     console.error(err);
    //     ctx.status = 500;
    //     ctx.body = 'An error occurred while uploading file.';
    // }
    ctx.body = 'Hello World,My first koa router';
});
app.use(bodyParser());
app.use(cors());
app.use(router.routes());


app.listen(3001); // 设置服务器的端口


console.log('App started at port ...'); // 封装写入文件的方法
function writeFile(filePath, data, encoding) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, encoding, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

// res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
// res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
// res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
// res.setHeader('Access-Control-Allow-Credentials', true);