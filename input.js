
// setup interface to handle user input from stdin
//the stdin object returned by setupInput will allow us to listen for keyboard input and react to it.


// Stores the active TCP connection object.
let connection;
const handleUserInput = function(key) {

  // \u0003 maps to ctrl+c input to exit
  if (key === '\u0003') {
    process.exit();
  }
  // Use keyboard keys to track snake movements
  if (key === "w") {
    connection.write("Move: up");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "d") {
    connection.write("Move: right");
    //to print greetings, use keyboard keys
  } else if (key === "h") {
    connection.write("Say: Hello there!");
  } else if (key === "g") {
    connection.write("Say: Good Bye!");
  } else if (key === "n") {
    connection.write("Say: Nice to meet you!");
  } else if (key === "b") {
    connection.write("Say: See you later!");
  }
 
};

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  

  stdin.on("data", handleUserInput);


  return stdin;
};

setupInput();

module.exports = { setupInput };