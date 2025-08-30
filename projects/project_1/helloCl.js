//scripts that greets user from the command line
const client_name = process.argv.slice(2);

if (client_name.length === 0) {
  console.log("user should input his name!!");
  process.exit(1);
} else {
  console.log(`hello ${client_name}! we are happy to have you onboard`);
  process.exit(0);
}
