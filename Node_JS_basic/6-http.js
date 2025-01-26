const express = require('express');

const app = express();

// Define the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
