
// setup interface to handle user input from stdin
//the stdin object returned by setupInput will allow us to listen for keyboard input and react to it.

const { createConnection } = require("net");

const handleUserInput = function (key) {

  // \u0003 maps to ctrl+c input to exit
  if (key === '\u0003') {
    process.exit();
  }
 
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  

  stdin.on("data", handleUserInput);


  return stdin;
};

setupInput();

module.exports = {
  setupInput
};