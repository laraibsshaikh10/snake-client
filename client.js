// const { CONNREFUSED } = require("dns");
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //Event handler: to handle incoming data and logging it to the player
  conn.on("data", (data) => {
    console.log("Data received from server:", data);
  });

  //Event handler: once the client is successfully connected, show the message:
  conn.on("connect", () => {
    console.log("Successfully connected to the game server");
    //Send the string "Name: ___" to the server, upon connection
    conn.write("Name: LSS");

    //Send the string "Move: " as data to the server via the conn object.
    //What happens if we send more than one, but delay each of them by about 50ms apart, using setTimeout?

    setTimeout(() => {
      conn.write("Move: up");
    }, 50);

    
    setTimeout(() => {
      conn.write("Move: down");
    }, 100);

    
    setTimeout(() => {
      conn.write("Move: left");
    }, 150);

    
    setTimeout(() => {
      conn.write("Move: right");
    }, 200);
  });

  //Event handler: For error handling during the connection
  conn.on("error", (error) => {
    console.log("Error while connecting:", error);
  })

  return conn;
};


//export the connect function using ES6 Shorthand syntax
module.exports = { connect };