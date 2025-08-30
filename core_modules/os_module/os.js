// to learn more visit nodejs website
const os = require("os");

let os_type = os.type();
let os_cpu = os.cpus();
let arc_os = os.arch();
let host_name = os.hostname();
let platform = os.platform();
let freememe_os = os.freemem();

console.log(freememe_os);
