function TaskForm() {
  return (
    <form className="task-form">
      <input type="text" id="new-task" placeholder="Add task" />
      <button type="submit">Add</button>
    </form>
  )
}

export default TaskForm