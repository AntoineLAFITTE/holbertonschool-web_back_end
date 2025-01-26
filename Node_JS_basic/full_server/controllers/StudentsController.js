import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    const databasePath = process.argv[2];

    try {
      const fields = await readDatabase(databasePath);
      const responseLines = ['This is the list of our students'];

      Object.keys(fields)
        .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
        .forEach((field) => {
          const students = fields[field];
          responseLines.push(
            `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`
          );
        });

      res.status(200).send(responseLines.join('\n'));
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const databasePath = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase(databasePath);
      const students = fields[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
