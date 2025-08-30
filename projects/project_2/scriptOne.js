/**
 * A basic Journal Entry Application, that appends user input to a journal file.
 */
const fs = require("fs");

const input = process.argv.slice(2);

if (input.length === 0) {
    console.log("Journal cannot be left empty.");
    process.exit(1);
} else {
    const date = new Date().toLocaleString()
    const journal =  date + "-:  " + input.join(" ") + "\n";

    fs.appendFile("journal.txt", journal, (error)=>{
        if(!error){
            console.log("Journal entry added successfully.");
        }else{
            console.log("An error occurred while adding the journal entry.");
        }
    })

}