//From client.js, import the connect function using ES6 Shorthand syntax

const { connect } = require("./client");
const { setupInput } = require("./input");


console.log("Connecting ...");

const connection = connect();

setupInput(connection);
