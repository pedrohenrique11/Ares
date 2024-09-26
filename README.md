# Ares-POC

### Description
Ares-POC is an application designed for managing workout routines and tracking exercise progress. Users can create and customize their own workouts, track sets, repetitions, weight, and RIR (Rate of Perceived Exertion). The system also supports importing exercises from an external API, making it easier to create workout plans. Users can view graphical progress reports, and the app features authentication via phone, email, Google, and Apple accounts.

### Features
User Registration:

Register users with name, email, password, phone, height, and weight.
Authentication via phone, email, Google, and Apple.

Workout Management:
Create and customize workouts with names and dates.
Add exercises to each workout, with planned sets, reps, and weight.
Track exercises with planned and completed details.

Progression Tracking:
Graphs to track the load progression in exercises, weight fluctuation, and workout days.

Exercise Import:
Users can import exercises from an external API as templates.
The exercise name is imported, while planned details (sets, reps, weight) are added by the user during creation.

Load Progression Control:
The system calculates load progression or regression based on the planned vs. completed sets and reps.

User Deletion:
Users can be deleted along with all associated workout and exercise data.

### Business Logic
Users can add and create their own exercises while creating workouts.
Each exercise can be linked to a workout with planned and completed sets, reps, and weight.
Load progression is calculated based on planned vs. completed sets and reps.
Dynamic graphs visualize workout progress and weight fluctuation.
Predefined exercises can be imported from an external API and used as a base for new workouts.
Users can authenticate using multiple providers: phone, email, Google, or Apple.
Technologies Used
### Backend:
Node.js with TypeScript
Express.js for route handling and flow control
Prisma ORM for database modeling and access
PostgreSQL as the database
JWT (JSON Web Token) for authentication
bcrypt for password hashing

### Testing:
Jest for unit and integration tests

### Frontend (Future):
Vue.js for the user interface
Dynamic charts to visualize workout progress

### Others:
External API for importing exercise templates
Docker for containerization of the development and production environment
Installation
Prerequisites
Node.js
Docker
