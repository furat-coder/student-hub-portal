import { useState } from "react";
import TaskItem from "../components/TaskItem.jsx";

export default function Tasks({ tasks, onAddTask, onToggleTask, onDeleteTask }) {
  // Controlled input: the text box value lives in React state
  const [taskText, setTaskText] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // stops the page from reloading
    if (taskText.trim() === "") {
      return; // do nothing for empty tasks
    }
    onAddTask(taskText.trim());
    setTaskText(""); // clear the input
  }

  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div>
      <div className="card">
        <h3>Add a Task</h3>
        <form onSubmit={handleSubmit}>
          <div className="toolbar">
            <input
              type="text"
              placeholder="e.g. Finish React assignment"
              value={taskText}
              onChange={(event) => setTaskText(event.target.value)}
            />
            <button className="btn" type="submit">
              Add Task
            </button>
          </div>
        </form>
      </div>

      <div className="card">
        <h3>Pending ({pendingTasks.length})</h3>
        {pendingTasks.length === 0 ? (
          <p className="empty">No pending tasks.</p>
        ) : (
          pendingTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggleTask}
              onDelete={onDeleteTask}
            />
          ))
        )}
      </div>

      <div className="card">
        <h3>Completed ({completedTasks.length})</h3>
        {completedTasks.length === 0 ? (
          <p className="empty">No completed tasks yet.</p>
        ) : (
          completedTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggleTask}
              onDelete={onDeleteTask}
            />
          ))
        )}
      </div>
    </div>
  );
}
