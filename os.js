const os = require("os");
console.log("freememory", os.freemem()/1024/1024/1024);
console.log("totalmemory", os.totalmem()/1024/1024/1024);

console.log("platform", os.platform());
console.log("Version", os.version());
console.log(`Processor, ${os.cpus().length} Core`);
console.log("uptime", os.uptime());
console.log("arch", os.arch());