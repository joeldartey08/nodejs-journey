/**
 * what are process in node.js?
 * process are node global objects that provide information about,
 *  and control over Node.js runtime environment.
 */

const process_env = process.env; // returns an object containing the user environment 
process.env.NODE_ENV =  "development"//sets the NODE_ENV variable

const process_argv = process.argv.slice(2) // ignores the last command line argument

if(process.env.NODE_ENV !== "development"){
    console.log(`Please set your node environment to development, it is currently set to ${process.env.NODE_ENV}`);
    process.exit(1); // exits the process with a failure code
}else{
    console.log(`Hello!! your node environment is set to  ${process.env.NODE_ENV}!`); // tells the user his node environment..
    // process.exit(0); // exits the process successfully
}

const cwd = process.cwd(); // returns the current working directory
console.log(`Current working directory: ${cwd}`);

const pid = process.pid; // returns the process id
console.log(`Process ID: ${pid}`);

const platform = process.platform; // returns the platform of the operating system
console.log(`Platform: ${platform}`);

const uptime = process.uptime(); // returns the uptime of the process in seconds
console.log(`Uptime: ${uptime} seconds`);

const memory = process.memoryUsage();//returns the memory stats of the current process
console.log(memory)//prints an object container the rss,heaptotal and heapused and enterna
