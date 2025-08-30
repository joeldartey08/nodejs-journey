const os = require("os");
const fs = require("fs");
const EventEmmitter = require("events");
const { uptime } = require("process");

const eventEmmiter = new EventEmmitter();

const writeStream = fs.createWriteStream("./summary_1.log", { flags: "a" });

eventEmmiter.on("resourceData", (data) => {
  writeStream.write(`${JSON.stringify(data, null, 2)}\n\n`, (error) => {
    if (!error) console.log("data log successfull");
  });
  console.log("writing file to suumary_1 log successfull", data);
});

const monitorData = () => {
  const processUptime = process.uptime(); // process uptime
  const osUptime = os.uptime(); //cpu uptime
  const totalMemory = os.totalmem(); //cpu total memory
  const freeMomory = os.freemem(); //cpu free memory

  const memoryUsage = process.memoryUsage(); // process
  let current = {
    rss: (memoryUsage.rss / 1024 ** 2).toFixed(2),
    heapUsedMb: (memoryUsage.heapUsed / 1024 ** 2).toFixed(2),
  };

  const usedMemoryPercentage = (totalMemory - freeMomory / totalMemory) * 100;

  const finalData = {
    date: new Date().toISOString(),
    cpu: {
      uptime: osUptime.toFixed(2) + "s",
      free_memory: freeMomory + "mb",
      total_memory: totalMemory.toFixed(2) + "mb",
      used_memory_percentage: usedMemoryPercentage + "%",
    },
    _process: {
      uptime: processUptime.toFixed(2) + "s",
      rss: current.rss + "mb",
      heapUsed: current.heapUsedMb + "mb",
    },
  };

  eventEmmiter.emit("resourceData", finalData);
};

const cli_arg = process.argv;

if (cli_arg.includes("--once")) {
  monitorData();
  process.exit(0);
} else {
  
    const cli_arg_value = cli_arg.find(i => i.startsWith("--interval"));
    const timeValue = cli_arg_value ? parseInt(cli_arg_value.split("=")[1]) || 3000 : 5000;

    const interval = setInterval(monitorData,timeValue)


  process.on("SIGINT", () => {
    clearInterval(interval);
    console.log(`\nGoodbye! see you next time`);
  });
}
