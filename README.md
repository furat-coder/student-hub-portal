# Student Hub Portal

I am a beginner frontend development student and I need to build a React project that I will present.

Build ONE beginner-friendly React application called:

"Student Management Portal"

IMPORTANT:

This is a beginner frontend project, so keep the code simple, readable, and easy for a beginner to explain during a presentation. Do not use unnecessary advanced libraries, complex architecture, TypeScript, backend servers, authentication, databases, or complicated state-management libraries.

TECHNOLOGY:

- React

- JavaScript

- HTML/JSX

- CSS

- React Hooks

- localStorage

- Fetch API where appropriate

The project must combine these six curriculum projects into ONE application:

1. Interactive Student Portal UI

2. Personal Profile App

3. Todo / Task Manager

4. Student Directory

5. Student Registration App

6. Student Data Dashboard

APPLICATION STRUCTURE:

Create a clean dashboard layout with:

- Sidebar navigation

- Header

- Main content area

- Responsive design

- Cards

- Buttons

- Forms

- Tables or student cards

Navigation sections:

1. Dashboard

2. My Profile

3. Students

4. Tasks

5. Register Student

DASHBOARD:

Show simple statistics:

- Total students

- Total tasks

- Completed tasks

- Pending tasks

PROFILE:

Create a simple student profile page showing:

- Profile image/avatar

- Name

- Student ID

- Email

- Course

- Phone

- About section

STUDENT DIRECTORY:

Create a student list using an array of student objects.

Each student should have:

- id

- name

- email

- course

- age

- status

Features:

- Display students

- Search students

- Filter students by course or status

- View student information

- Delete a student

STUDENT REGISTRATION:

Create a form with:

- Full name

- Student ID

- Email

- Age

- Course

- Phone

Add beginner-friendly validation:

- Required fields

- Valid email

- Age must be reasonable

- Student ID must not be empty

When submitted:

- Add the student to the student list

- Clear the form

- Show a success message

TODO / TASK MANAGER:

Create a task manager where users can:

- Add a task

- Mark a task as completed

- Delete a task

- Display pending and completed tasks

Use React state for the task list.

LOCAL STORAGE:

Use localStorage to save:

- Students

- Tasks

When the page reloads, saved data should remain.

REACT REQUIREMENTS:

Use:

- Components

- Props

- useState

- useEffect

- Event handling

- Conditional rendering

- Array.map()

- Forms

- Controlled inputs

Keep component structure beginner-friendly.

Suggested structure:

src/

  components/

    Sidebar.jsx

    Header.jsx

    StatCard.jsx

    StudentCard.jsx

    TaskItem.jsx

  pages/

    Dashboard.jsx

    Profile.jsx

    Students.jsx

    Tasks.jsx

    RegisterStudent.jsx

  App.jsx

  main.jsx

  App.css

DESIGN:

Make the UI clean and modern but not overly complicated.

Use:

- Responsive layout

- Cards

- Rounded corners

- Good spacing

- Clear typography

- Hover effects

- Mobile-friendly design

Do not use excessive animations.

CODE QUALITY:

- Use meaningful variable names

- Add comments explaining important beginner concepts

- Keep components small

- Avoid unnecessary abstraction

- Avoid complicated one-line code

- Make the code easy to explain in a classroom presentation

PRESENTATION REQUIREMENT:

After generating the project, also provide:

1. Project overview

2. Problem statement

3. Project objectives

4. Features

5. Technologies used

6. React concepts used

7. Folder structure explanation

8. Explanation of each component

9. Explanation of useState

10. Explanation of useEffect

11. Explanation of props

12. Explanation of event handling

13. Explanation of localStorage

14. Explanation of form validation

15. Explanation of how student registration works

16. Explanation of how tasks work

17. Explanation of how the dashboard statistics work

18. Possible questions a teacher may ask

19. Simple answers to those questions

20. A short presentation script that a beginner can memorize

IMPORTANT:

Do not give me a huge complicated application that I cannot understand.

Build the project step by step.

First show me:

1. Project setup

2. Folder structure

3. Basic App

4. Sidebar/Header

5. Dashboard

6. Profile

7. Student Directory

8. Registration

9. Task Manager

10. localStorage

11. Final styling

For every step:

- Explain what we are doing

- Explain why we are doing it

- Give the code

- Tell me where to put the code

- Tell me how to run it

- Give me a small test before moving to the next step

The final application must work as a single React project.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b5149c3d-e365-46e4-b550-9aa28ff2d284).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
