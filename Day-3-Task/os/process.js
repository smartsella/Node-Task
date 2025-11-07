import os from "os";

console.log("💻 OS Type:", os.type());
console.log("🧱 Architecture:", os.arch());
console.log("🧠 Total Memory:", os.totalmem());
console.log("📉 Free Memory:", os.freemem());
console.log("👨‍💻 User Info:", os.userInfo());
console.log("⏱ System Uptime:", os.uptime(), "seconds");
console.log("💪 CPU Cores:", os.cpus().length);

console.log("-------------");

console.log("CPU Info:", os.cpus());
console.log("Network Interfaces:", os.networkInterfaces());
console.log("Platform:", os.platform());
console.log("Release:", os.release());
console.log("Host Name:", os.hostname());
