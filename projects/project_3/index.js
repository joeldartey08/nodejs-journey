//emit the event

const eventEmitter = require("./script");
const pathToJournals = "../project_2/journal.txt";

eventEmitter.emit("read-journal", pathToJournals);