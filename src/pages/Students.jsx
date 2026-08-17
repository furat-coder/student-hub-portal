import { useState } from "react";
import StudentCard from "../components/StudentCard.jsx";

// The student list and delete function come from App.jsx as props.
export default function Students({ students, onDeleteStudent }) {
  // useState keeps the search text and the selected filters
  const [searchText, setSearchText] = useState("");
  const [courseFilter, setCourseFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Build the list of courses for the dropdown (no duplicates)
  const courses = ["All"];
  students.forEach((student) => {
    if (!courses.includes(student.course)) {
      courses.push(student.course);
    }
  });

  // Filter the students step by step so it is easy to read
  const visibleStudents = students.filter((student) => {
    const text = searchText.toLowerCase();
    const matchesSearch =
      student.name.toLowerCase().includes(text) ||
      student.email.toLowerCase().includes(text);
    const matchesCourse =
      courseFilter === "All" || student.course === courseFilter;
    const matchesStatus =
      statusFilter === "All" || student.status === statusFilter;

    return matchesSearch && matchesCourse && matchesStatus;
  });

  return (
    <div>
      <div className="toolbar">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />

        <select
          value={courseFilter}
          onChange={(event) => setCourseFilter(event.target.value)}
        >
          {courses.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>

        <select
          value={statusFilter}
          onChange={(event) => setStatusFilter(event.target.value)}
        >
          <option value="All">All statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Show details of the student the user clicked "View" on */}
      {selectedStudent && (
        <div className="card">
          <h3>Student Details</h3>
          <p>Name: {selectedStudent.name}</p>
          <p>ID: {selectedStudent.id}</p>
          <p>Email: {selectedStudent.email}</p>
          <p>Course: {selectedStudent.course}</p>
          <p>Age: {selectedStudent.age}</p>
          <p>Status: {selectedStudent.status}</p>
          <div className="card-actions">
            <button className="btn btn-light" onClick={() => setSelectedStudent(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      {visibleStudents.length === 0 ? (
        <p className="empty">No students match your search.</p>
      ) : (
        <div className="grid">
          {visibleStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onDelete={onDeleteStudent}
              onView={setSelectedStudent}
            />
          ))}
        </div>
      )}
    </div>
  );
}
