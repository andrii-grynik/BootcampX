/*
Now that we understand JOINs a little bit, let's try writing another query that requires a JOIN. Sometimes a student's start_date will differ from their cohort's start_date. A student may have started in one cohort, gotten sick, and had to finish in a different cohort. We'll call this type of student a rollover student.

Instruction
Select all rollover students.

Get the student's name, student's start_date, cohort's name, and cohort's start_date.
Alias the column names to be more descriptive.
Order by the start date of the cohort.
*/

//rollover from join methods

SELECT students.name, cohorts.name, cohorts.start_date as cohort_start_date, students.start_date as student_start_date
FROM students
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.start_date != students.start_date
ORDER BY cohort_start_date;

