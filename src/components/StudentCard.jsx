// Shows one student. It receives the student object and three functions as props.
export default function StudentCard({ student, onDelete, onView, onToggleStatus }) {
  return (
    <div className="student-card">
      <h4>{student.name}</h4>
      <p>ID: {student.id}</p>
      <p>{student.email}</p>
      <p>
        {student.course} · Age {student.age}
      </p>

      {/* Conditional rendering: different badge style for inactive students */}
      <span className={student.status === "Active" ? "badge" : "badge inactive"}>
        {student.status}
      </span>

      <div className="card-actions">
        <button className="btn btn-light" onClick={() => onView(student)}>
          View
        </button>
        <button className="btn btn-light" onClick={() => onToggleStatus(student.id)}>
          {student.status === "Active" ? "Deactivate" : "Activate"}
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(student.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
