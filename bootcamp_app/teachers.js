const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.connect()

const text = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
ORDER BY teacher;
`;
const cohortName = [`%${process.argv[2]}%`];
pool.query(text, cohortName)
.then(res => {
  console.log('connected')
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
});


