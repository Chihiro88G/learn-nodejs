const http = require('http');

const express = require('express');

const app = express();

// path to different middleware
app.use('/different-path', (req, res, next) => {
  console.log('in another middleware');
  res.send('<p>LEARNING EXPRESS</p>');
})

app.use('/', (req, res, next) => {
  console.log('in another middleware');
  res.send('<p>LEARNING EXPRESS</p>');
})

const server = http.createServer(app);

server.listen(3300);


// ****************************************************************** //
// app.use((req, res, next) => {
//   console.log('in the middleware');
//   next(); // allows to continue to the next middleware (the one below)
// })

// app.use((req, res, next) => {
//   console.log('in another middleware');
//   res.send('<p>LEARNING EXPRESS</p>');
// })
// ****************************************************************** //
