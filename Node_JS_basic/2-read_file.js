const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    //filter lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    //Remoove first line
    const students = lines.slice(1);

    const fields = {};

    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    // consolelog students number
    console.log(`Number of students: ${students.length}`);

    // consolelog students names and the number of students for every fields
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    // error throw if data can't be loaded
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
