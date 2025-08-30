const process_pid = process.pid;
const os = require("os");

console.log(`process started with PID: ${process_pid}`);
console.log(`platform: ${os.platform()}`);
console.log(`CWD: ${process.cwd()}`);

if (process.argv.includes("--once")) {
  let memoryUsage = process.memoryUsage();

  let currentMemory = {
    rss: (memoryUsage.rss / 1024 ** 2).toFixed(2),
    heapUsedMb: (memoryUsage.heapUsed / 1024 ** 2).toFixed(2),
  };

  console.log(
    `uptime: ${process.uptime().toFixed(1)}s | heapUsedMd: ${
      currentMemory.heapUsedMb
    }mb | rss: ${currentMemory.rss}`
  );
  process.exit(0);
} else {
  let uptime;
  let memoryUsage;

  const cli_arg = process.argv.find((value,_i)=> value.startsWith("--interval"));

  let slit_cl = cli_arg ? cli_arg.split("=") : [];


  const interval = setInterval(() => {
    uptime = process.uptime();
    memoryUsage = process.memoryUsage();
    let current = {
      rss: (memoryUsage.rss / 1024 ** 2).toFixed(2),
      heapUsedMb: (memoryUsage.heapUsed / 1024 ** 2).toFixed(2),
    };

    console.log(
      `uptime: ${uptime.toFixed(1)}s | heapUsedMd: ${
        current.heapUsedMb
      }mb | rss: ${current.rss}`
    );
  }, parseInt(slit_cl[1]) || 1000);
//parseInt(slit_cl?.[1]) ?? 1000 study nullish coalescing
  process.on("SIGINT", () => {
    clearInterval(interval);
    console.log(`\nGoodbye! total uptime: ${uptime.toFixed(1)}s`);
    process.exit(0);
  });
}
