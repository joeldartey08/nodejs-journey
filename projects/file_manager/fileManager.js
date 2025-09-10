const fs = require("fs");
if (process.argv[2] === "list") {
  const cli3 = process.argv[3];

  if (cli3) {
    fs.readdir(cli3, (error, files) => {
      if (!error) console.log(files.map((item) => item));
    });
  } else {
    console.log("Please provide a path");
    process.exit(1);
  }
} else if (process.argv[2] === "read") {
  const cli = process.argv[3];

  if (cli) {
    fs.readFile(cli, { encoding: "utf-8" }, (error, data) => {
      if (error) {
        console.error("Error reading file:", error.message);
        return;
      }
      console.log(data);
    });
  } else {
    console.log("Please provide a path");
    process.exit(1);
  }
} else if (process.argv[2] === "create") {
  const cli = process.argv[3];
  const data = process.argv[4];

  if (cli && data) {
    fs.writeFile(cli, data, (error) => {
      if (!error) console.log(`File created successfully: ${cli}`);
    });
  } else {
    console.log("Please provide a path and content");
    process.exit(1);
  }
} else if (process.argv[2] === "delete") {
  const cli = process.argv[3];

  if (cli) {
    fs.unlink(cli, (error) => {
      if (!error) console.log(`File deleted successfully: ${cli}`);
    });
  } else {
    console.log("Please provide a path");
    process.exit(1);
  }
} else {
  console.log(`
  Usage: node fileManager.js <command> <path> [content]

  Commands:
    list <dir>          List files in a directory
    read <file>         Read a file
    create <file> <txt> Create a new file with text
    delete <file>       Delete a file
  `);
}

// console.log(cliAgu)
