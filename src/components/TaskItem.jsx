function TaskItem({ task }) {
  return (
    <li className={task.completed ? 'task-item completed' : 'task-item'}>
      <input type="checkbox" id={`task-${task.id}`} checked={task.completed} readOnly />
      <label htmlFor={`task-${task.id}`}>{task.text}</label>
      <button type="button" aria-label="Delete task">✕</button>
    </li>
  )
}

export default TaskItem