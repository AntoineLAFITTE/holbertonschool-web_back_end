const fs = require('fs');

function countStudents(path) {
  try {
    // Read file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split data into lines and filter out empty ones
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      // If there's only a header or no students, exit early
      console.log('Number of students: 0');
      return;
    }

    // Remove the first line (header)
    const students = lines.slice(1);

    // Prepare field map
    const fields = {};

    students.forEach((student) => {
      const values = student.split(',').map((value) => value.trim());

      if (values.length >= 4) {
        const [firstname, , , field] = values;

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    });

    // Total number of students
    console.log(`Number of students: ${students.length}`);

    // Log each field and its students
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    // Throw a clear error message if the file can't be loaded
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
