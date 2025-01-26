const fs = require('fs').promises;

async function countStudents(path) {
  try {
    // Readfile asynchronously
    const data = await fs.readFile(path, 'utf8');
    // Split data into lines and filter out the empty lines
    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');

    // Ensure there is a header line
    if (lines.length <= 1) {
      throw new Error('Cant load data');
    }

    // Extract student data wihtout header
    const studentData = lines.slice(1);

    // count students by field
    const fields = {};
    studentData.forEach((line) => {
      const [firstname, , , field] = line.split(',');

      // Ignore invalid or incomplete lines
      if (firstname && field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    });

    // consolelog the total students number
    const totalStudents = Object.values(fields).reduce((acc, curr) => acc + curr.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    // consolelog number of students in each field by name
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
