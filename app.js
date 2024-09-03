const http = require('http');

const express = require('express');
const session = require('express-session');

const app = express();

// secret: should be way more complex in production
// resave & saveUninitialized: session will not be saved on every single request. still uses cookie but it's hashed
app.use(session({ secret: 'my secret as an example', resave: false, saveUninitialized: false }))

// path to different middleware
app.use('/different-path', (req, res, next) => {
  console.log('in another middleware');
  res.send('<p>LEARNING EXPRESS</p>');
})

app.use('/', (req, res, next) => {
  console.log('in another middleware');
  req.session.isLoggedIn = true;        // for session practice
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
