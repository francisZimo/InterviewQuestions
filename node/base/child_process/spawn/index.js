// spawn 用于执行一些实时获取的信息，没有字节上线，返回的是个流
// spawnSync 用的较少

const { stdout } = spawn('netstat', ['-a'], {
    // options配置信息
});
stdout.on('data', (msg) => {
    console.log(msg.toString());
})
// spawn在执行完成后会抛出close事件监听，并返回状态码
stdout.on('close', (msg) => {
    console.log('结束了');
})
