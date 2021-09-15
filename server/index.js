const koa=require('koa')
const Router=require('koa-router')
const cors = require('koa2-cors');
const app=new koa()
const router=new Router();
const allowOrigins = [
    "http://192.168.0.1:8082",
    "http://192.168.0.1:8083"
];
router.get('/app',async ctx=>{
    ctx.body={
        msg:'koa interface'
    }
})
app.use(cors({
    // origin: function(ctx) {
    //   if (allowOrigins.includes(ctx.header.origin)) {
    //     return ctx.header.origin;
    //   }
    //   return false;
    // },
    origin: function (ctx) { // 设置允许来自指定域名请求
        if (ctx.url === '/app') {
          return "*"; // 允许来自所有域名请求, 这个不管用
        }
        return 'http://localhost:8000'; // 这样就能只允许 http://localhost:8000 这个域名的请求了
      },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    withCredentials:true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));


app.use(router.routes()).use(router.allowedMethods())
const port = process.env.PORT || 8099

app.listen(port,()=>{
    console.log(`server started on ${port}`)
})