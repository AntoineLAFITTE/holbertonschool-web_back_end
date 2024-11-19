/* eslint-disable */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeEntry = newGrades.find((grade) => grade.studentId === student.id);

      let grade; // Initialisation de la variable grade

      if (gradeEntry) {
        grade = gradeEntry.grade; // Si une note existe pour cet étudiant
      } else {
        grade = 'N/A'; // Si aucune note n'est trouvée
      }

      return {
        ...student, // Copier toutes les propriétés de l'objet étudiant
        grade,      // Ajouter ou remplacer la propriété "grade"
      };
    });
}
