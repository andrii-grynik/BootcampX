const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
pool.connect()

const cohortName = process.argv[2];
const numOfResults = process.argv[3];
const values = [`%${cohortName}%`, numOfResults]

const text = `
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;

pool.query(text, values)
    .then(res => {
      res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
      })
    })
    .catch(err => console.error('query error', err.stack));


/*When we make the query from our JavaScript application, the results come back as JavaScript objects.
That means that once the .then(res => {}) gets executed, we're not dealing with SQL or the database any more,
we're just dealing with JavaScript objects
*/