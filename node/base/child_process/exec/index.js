const { exec, execSync } = require('child_process');
// exec 异步方法，回掉函数返回buffer，可以执行shell命令，或者跟软件交互
// execSync 同步方法
// 只执行较小的shell命令，想要立即拿到结果的shell，字节上线200kb，超过报错

exec('node -v', (err, stdout, stderr) => {
  if (err) {
    return err;
  }
  console.log(stdout);
});

const nodeVersion = execSync('node -v');
console.log('sync', nodeVersion.toString());

// sync v18.16.0
// v18.16.0
