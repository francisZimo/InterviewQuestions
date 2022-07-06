// compose(ctx){
//     // ... 只显示核心代码
//     const dispatch=(i)=>{
//         if(this.middlewares.length===i) return Promise.resolve()
//         return Promise.resolve(this.middlewares[i](ctx,()=>dispatch(i+1)))
//     }
//     return dispatch(0)
// }
const koa =require('koa')
const app =new koa()
app.use(async (ctx, next) => {
    console.log(1)
    await next();
    console.log(1)
});
app.use(async (ctx, next) => {
    console.log(2)
    next();
    console.log(2)
})

app.use(async (ctx, next) => {
    console.log(3)

})

app.use((ctx) => {
    console.log('koa')
    ctx.body = "原生koad"
})
app.use(async (ctx, next) => {
    console.log(4)
    next();
    console.log(4)
})

app.listen(port=8899,()=>{
    console.log(`server started on ${port}}`)
})



