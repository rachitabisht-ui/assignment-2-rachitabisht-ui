function TaskItem({ task, onToggle }) {
  return (
    <li className={task.completed ? 'task-item completed' : 'task-item'}>
      <input
        type="checkbox"
        id={`task-${task.id}`}
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <label htmlFor={`task-${task.id}`}>{task.text}</label>
      <button type="button" aria-label="Delete task">✕</button>
    </li>
  )
}

export default TaskItem