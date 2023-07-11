// compose(ctx){
//     // ... 只显示核心代码
//     const dispatch=(i)=>{
//         if(this.middlewares.length===i) return Promise.resolve()
//         return Promise.resolve(this.middlewares[i](ctx,()=>dispatch(i+1)))
//     }
//     return dispatch(0)
// }
// 掘金： https://juejin.cn/post/7012031464237694983

const middlewares = []

function use(mv) {
    middlewares.push(mv)
}

let mw1 = async function (ctx, next) {
    console.log("next前，第一个中间件")
    await next()
    console.log("next后，第一个中间件")
}
let mw2 = async function (ctx, next) {
    console.log("next前，第二个中间件")
    await next()
    console.log("next后，第二个中间件")
}
let mw3 = async function (ctx, next) {
    console.log("第三个中间件，没有next了")
}

function compose(middleware) {
    return (ctx, next) => {
        function dispatch(i) {
            const fn = middleware[i]
            if (!fn) return
            return fn(ctx, dispatch.bind(null, i + 1))
        }
        return dispatch(0)
    }
}
use(mw1)
use(mw2)
use(mw3)

const fn = compose(middlewares)
fn()



// const koa = require('koa')
// const app = new koa()
// app.use(async (ctx, next) => {
//     console.log(1)
//     await next();
//     console.log(11)
// });
// app.use(async (ctx, next) => {
//     console.log(2)
//     next();
//     console.log(22)
// })

// app.use(async (ctx, next) => {
//     console.log(33)

// })

// app.use((ctx) => {
//     console.log('koa')
//     ctx.body = "原生koad"
// })

// app.listen(port = 8899, () => {
//     console.log(`server started on ${port}}`)
// })