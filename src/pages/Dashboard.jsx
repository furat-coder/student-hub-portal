import StatCard from "../components/StatCard.jsx";

// The Dashboard only calculates numbers from the data it receives as props.
export default function Dashboard({ students, tasks }) {
  const totalStudents = students.length;
  const totalTasks = tasks.length;

  // .filter() gives us a smaller array, .length gives us the count
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div>
      <div className="grid">
        <StatCard label="Total Students" value={totalStudents} />
        <StatCard label="Total Tasks" value={totalTasks} />
        <StatCard label="Completed Tasks" value={completedTasks} />
        <StatCard label="Pending Tasks" value={pendingTasks} />
      </div>

      <div className="card">
        <h3>Recent Students</h3>
        {/* Conditional rendering: message when the list is empty */}
        {students.length === 0 ? (
          <p className="empty">No students yet. Register one to get started.</p>
        ) : (
          students.slice(0, 4).map((student) => (
            <p key={student.id}>
              {student.name} — {student.course}
            </p>
          ))
        )}
      </div>
    </div>
  );
}
