# BootcampX
This is a Lighthouse Labs assignment to practice SQL (PostgreSQL). The app will help manage data about students and mentors and offer quick insight into data, such as assignment completion and the effectiveness of assistance requests.

# Entities
### Main:
* assignments
* assignment_submissions
* assistance_requests
* cohorts
* teachers
* students

### Attributes(Cohorts):
* name: The name of the cohort
* id: A unique identifier
* start_date: The cohorts' start date
*end_date: The cohorts' end date

### Attributes(Students):
* id: A unique identifier
* name: The full name of the student
* email: The students' email address
* phone: The students' phone number
* github: The students' github profile url
* start_date: The students' start date of the Bootcamp
* end_date: The students' end date of the Bootcamp
* cohort_id: The id of the cohort that the student is enrolled in


## Entity Relation Diagram(ERD)
![BootcampX](https://user-images.githubusercontent.com/95922075/218002690-8a5e7d49-7e64-4bc8-aee7-aef6ac48abd1.jpg)

