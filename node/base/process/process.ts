const arc = process.arch;
const cwd = process.cwd();
const argv = process.argv;
const memoryUsage = process.memoryUsage();
const pid = process.pid;
process.env.NODE_ENV = 'development';
const env = process.env;
console.log(arc, '===arc');
console.log(cwd, '===cwd');
console.log(argv, '===argv');
console.log(memoryUsage, '===memoryUsage');
console.log(pid, '===pid');

console.log(env, '===env');

// process.cwd()：返回当前的工作目录
// process.argv：获取执行进程后面的参数，返回的是一个数组
// process.memoryUsage：获取当前进程的内存使用情况
// process.exit()：强制进程尽快退出
// process.kill()：与 exit 类似，用来杀死一个进程，接收一个参数进程id，可以通过 process.pid 获取
// process.env：读取操作系统所有的环境变量，也可以修改和查询环境变量，但不会真正影响操作系统的变量，只在当前进程生效。可以配合 cross-env 第三方库使用
