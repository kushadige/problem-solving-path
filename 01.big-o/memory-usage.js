const formatMemoryUsage = (data) =>
  `${Math.round((data / 1024 / 1024) * 100) / 100} MB`;

const memoryData = process.memoryUsage();

const memoryUsage = {
  rss: `${formatMemoryUsage(
    memoryData.rss
  )} -> Resident Set Size - total memory allocated for the process execution`,
  heapTotal: `${formatMemoryUsage(
    memoryData.heapTotal
  )} -> total size of the allocated heap`,
  heapUsed: `${formatMemoryUsage(
    memoryData.heapUsed
  )} -> actual memory used during the execution`,
  external: `${formatMemoryUsage(memoryData.external)} -> V8 external memory`,
};

console.log(memoryUsage);

// const os = require("os");

// const freeMem = os.freemem();
// const totalMem = os.totalmem();

// console.log(freeMem, totalMem);

// https://stackoverflow.com/questions/74820123/nodejs-is-using-a-lot-of-heap-memory-when-nothing-is-happening

// https://blog.appsignal.com/2021/12/08/nodejs-memory-limits-what-you-should-know.html
