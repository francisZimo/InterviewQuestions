const os = require('node:os');
const platform = os.platform(); // 'darwin', 'freebsd', 'linux', 'sunos' or 'win32' 返回操作系统平台
const type = os.type(); // 'Darwin', 'FreeBSD', 'Linux', 'SunOS' or 'Windows_NT' 返回操作系统名称
const release = os.release(); // 返回操作系统版本
const arch = os.arch(); // 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', 'x64' 返回操作系统架构
const cpus = os.cpus(); // 返回一个对象数组，包含每个逻辑 CPU 内核的信息
const networkInterfaces = os.networkInterfaces(); // 返回一个对象，包含有关网络接口的信息

console.log(platform, '===platform');
console.log(type, '===type');
console.log(release, '===release');
console.log(arch, '===arch');
console.log('===cpus', cpus.length);
console.log(networkInterfaces, '===networkInterfaces');
