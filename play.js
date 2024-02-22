const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //to handle incoming data and logging it to the player
  conn.on("data", (data) => {
    console.log("Data received from server:", data);
  });

  return conn;
};

//before the connection happens
console.log("Connecting ...");

//to call the connect function
const client = connect();

//once the client is connected, show:
client.on("connect", () => {
  console.log("Connected to the server");
});

//For error handling during the connection
client.on("error", () => {
  console.log("Error while connecting:", error);
});