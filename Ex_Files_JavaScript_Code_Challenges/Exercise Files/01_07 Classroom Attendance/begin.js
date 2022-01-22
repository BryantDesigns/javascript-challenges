/*
  WRITE YOUR SOLUTION HERE
*/
const getStudents = classroom => {
  let { hasTeachingAssistant, classList } = classroom
  let teacher, teachersAide, students;

  if (hasTeachingAssistant) {
    [teacher, teachersAide, ...students] = classList
  } else {
    [teacher, ...students] = classList
  }
  return students
}

console.log(
  getStudents({
    hasTeachingAssistant: false,
    classList: ['Rashida', 'John', 'Roman', 'Lisa', 'Omair', 'Lukas'],
  })
);