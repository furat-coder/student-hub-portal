import { useState, useEffect } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import Students from "./pages/Students.jsx";
import Tasks from "./pages/Tasks.jsx";
import RegisterStudent from "./pages/RegisterStudent.jsx";

// Starting data used the very first time the app runs
const defaultStudents = [
  { id: "STU-1001", name: "Amina Hassan", email: "amina@school.edu", course: "Computer Science", age: 20, status: "Active" },
  { id: "STU-1002", name: "Brian Otieno", email: "brian@school.edu", course: "Information Technology", age: 22, status: "Active" },
  { id: "STU-1003", name: "Cynthia Wanjiru", email: "cynthia@school.edu", course: "Business Administration", age: 21, status: "Inactive" },
  { id: "STU-1004", name: "Daniel Kimani", email: "daniel@school.edu", course: "Engineering", age: 23, status: "Active" },
];

const defaultTasks = [
  { id: 1, text: "Submit React assignment", completed: false },
  { id: 2, text: "Read about useEffect", completed: true },
];

// Small helper: read saved data from localStorage, or use the default data
function loadFromStorage(key, fallbackValue) {
  if (typeof window === "undefined") return fallbackValue;
  const saved = window.localStorage.getItem(key);
  if (saved === null) return fallbackValue;
  return JSON.parse(saved);
}

export default function App() {
  // Which page is shown in the main area
  const [currentPage, setCurrentPage] = useState("Dashboard");

  // The two main lists of the app
  const [students, setStudents] = useState(defaultStudents);
  const [tasks, setTasks] = useState(defaultTasks);

  // Load saved data once, after the first render
  useEffect(() => {
    setStudents(loadFromStorage("students", defaultStudents));
    setTasks(loadFromStorage("tasks", defaultTasks));
  }, []);

  // Save students every time the students list changes
  useEffect(() => {
    window.localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Save tasks every time the tasks list changes
  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ----- Student functions -----
  function addStudent(newStudent) {
    setStudents([newStudent, ...students]);
  }

  function deleteStudent(studentId) {
    setStudents(students.filter((student) => student.id !== studentId));
  }

  // ----- Task functions -----
  function addTask(text) {
    const newTask = { id: Date.now(), text: text, completed: false };
    setTasks([newTask, ...tasks]);
  }

  function toggleTask(taskId) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  // Short description under the page title
  const subtitles = {
    Dashboard: "Overview of students and tasks",
    "My Profile": "Your personal information",
    Students: "Search, filter and manage students",
    Tasks: "Plan and track your work",
    "Register Student": "Add a new student to the portal",
  };

  return (
    <div className="portal">
      <Sidebar currentPage={currentPage} onChangePage={setCurrentPage} />

      <div className="main">
        <Header title={currentPage} subtitle={subtitles[currentPage]} />

        <main className="content">
          {/* Conditional rendering: show one page at a time */}
          {currentPage === "Dashboard" && (
            <Dashboard students={students} tasks={tasks} />
          )}

          {currentPage === "My Profile" && <Profile />}

          {currentPage === "Students" && (
            <Students students={students} onDeleteStudent={deleteStudent} />
          )}

          {currentPage === "Tasks" && (
            <Tasks
              tasks={tasks}
              onAddTask={addTask}
              onToggleTask={toggleTask}
              onDeleteTask={deleteTask}
            />
          )}

          {currentPage === "Register Student" && (
            <RegisterStudent onAddStudent={addStudent} />
          )}
        </main>
      </div>
    </div>
  );
}
