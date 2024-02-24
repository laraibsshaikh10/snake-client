# Snake Client Project

This project is a clone of the snake multiplayer game. This project is completed for Lighthouse Labs Web Development Flex Program. 

## Installation Description

Two separate terminals are required to set up both server and client instructions.

### Server Setup Instructions
- Clone the git repository, a modified version of the single player game Snek created by Tania Rascia
```javascript
cd /vagrant
git clone https://github.com/lighthouse-labs/snek-multiplayer.git
cd snek-multiplayer
npm install
```

### Client Setup Instructions
- In a separate terminal, create and clone a new github repository and install dependencies
```javascript
cd /vagrant
git clone https://github.com/laraibsshaikh10/snake-client
cd snake-client
npm init -y
npm install net
```

## Configuration
- Both server and client run on the "localhost" machine with a local IP address '::1' and the default port is 50541.

To start the server:
```javascript
npm run play
```
To enable the client side:
```javascript
node play.js
```

## Usage
The game involves using the keyboard keys for snake movements as well as some greetings.

### Snake Movements
- To move up: Press W
- To move down: Press S
- To move right: Press D
- To move left: Press A

### Greetings messages
- Hello message: Press H
- Goodbye message: G
- Nice to meet you message: N
- See you later message: B

### Exit the game
- To exit: Press Ctrl+C

## Author
- Laraib Shaikh 

## Acknowledgements
- Lighthouse Labs 
- Tania Rascia for the original code provided



