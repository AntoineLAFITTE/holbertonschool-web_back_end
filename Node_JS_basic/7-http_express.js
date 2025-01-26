const express = require('express');
const fs = require('fs');

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

// Create the Express app
const app = express();

// Root route
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

// Students route
app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const databasePath = process.argv[2];

  if (!databasePath) {
    res.status(500).send('Database file is required as an argument');
    return;
  }

  res.write('This is the list of our students\n');
  try {
    const result = await countStudents(databasePath);
    res.end(result);
  } catch (error) {
    res.end(error.message);
  }
});

// Start the server
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
