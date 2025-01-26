const http = require('http');
const fs = require('fs');
const path = require('path');

// Function to count students asynchronously
function countStudents(databasePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(databasePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1); // Exclude header line

      const fields = {};
      students.forEach((student) => {
        const values = student.split(',');
        if (values.length >= 4) {
          const [firstname, , , field] = values.map((val) => val.trim());
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });

      const output = [`Number of students: ${students.length}`];
      for (const [field, names] of Object.entries(fields)) {
        output.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve(output.join('\n'));
    });
  });
}

// Create HTTP server
const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];

    if (!databasePath) {
      res.statusCode = 500;
      res.end('Database file is required as an argument');
      return;
    }

    res.statusCode = 200;
    res.write('This is the list of our students\n');
    try {
      const result = await countStudents(databasePath);
      res.end(result);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Start the server
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
