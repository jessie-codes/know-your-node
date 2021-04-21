/*
EXERCISE Four
  1 - Run the script using `node lib/server.js`
  2 - Notice that our server is running on port 8080
  3 - Use npm to install yargs. `npm install yargs`
  4 - Add .gitignore file
  5 - Require `yargs` in your application
  6 - Check if the port exists, exit if not
  7 - Use the past in port for starting the server
*/

const http = require('http');
const port = 8080


const server = http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end();
})

server.listen(port, () => {
  console.log(`Server listening on 127.0.0.1:${port}`)
})