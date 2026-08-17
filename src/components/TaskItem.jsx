// One task row: a checkbox, the task text and a delete button.
export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span className={task.completed ? "done" : ""}>{task.text}</span>
      <button className="btn btn-danger" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
}
