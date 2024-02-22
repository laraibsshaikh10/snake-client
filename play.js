//From client.js, import the connect function using ES6 Shorthand syntax

const { connect } = require("./client");

connect;

// setup interface to handle user input from stdin
//the stdin object returned by setupInput will allow us to listen for keyboard input and react to it.
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function (key) {

    // \u0003 maps to ctrl+c input to exit
    if (key === '\u0003') {
      process.exit();
    }
  };

  stdin.on("data", handleUserInput);


  return stdin;
};

setupInput();