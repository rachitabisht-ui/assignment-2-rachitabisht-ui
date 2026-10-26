import { useState } from 'react'
import './App.css'
import TaskCounter from './components/TaskCounter'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import menuIcon from './assets/menu_icon.png'
import searchIcon from './assets/search_icon.png'
import inboxIcon from './assets/inbox_icon.png'
import calendarIcon from './assets/calendar_icon.png'
import upcomingIcon from './assets/upcoming_icon.png'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Call Mom', completed: false },
    { id: 2, text: 'Buy the new issue of Scientific American', completed: false },
    { id: 3, text: 'Return the textbook to Josie', completed: true },
    { id: 4, text: 'Buy the new album by Rake', completed: false },
    { id: 5, text: 'Buy a gift card for Dad', completed: false },
  ])
  const [filter, setFilter] = useState('all') // NEW: which filter is active

  function handleToggle(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  function handleAdd(text) {
    setTasks([...tasks, { id: Date.now(), text: text, completed: false }])
  }

  // NEW: the tasks to show, worked out from the filter
  const visibleTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <>
      <header className="main-header">
        <button className="menu-button" type="button" aria-label="Open menu">
          <img src={menuIcon} alt="" />
        </button>

        <div className="quick-find">
          <img src={searchIcon} alt="" />
          <label htmlFor="quick-find-input" className="visually-hidden">Quick find</label>
          <input type="search" id="quick-find-input" placeholder="Quick find" />
        </div>

        <TaskCounter total={tasks.length} completed={tasks.filter(task => task.completed).length} />
      </header>

      <div className="app-body">
        <nav className="sidebar" aria-label="Task categories">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#">
                <img src={inboxIcon} alt="" />
                <span className="nav-label">Inbox</span>
                <span className="nav-count">5</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <img src={calendarIcon} alt="" />
                <span className="nav-label">Today</span>
                <span className="nav-count">5</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#">
                <img src={upcomingIcon} alt="" />
                <span className="nav-label">Upcoming</span>
              </a>
            </li>
          </ul>
        </nav>

        <main className="main-content">
          <section className="task-section" aria-labelledby="inbox-heading">
            <h1 id="inbox-heading">Inbox</h1>

            {/* NEW: filter buttons */}
            <div className="filters">
              <button type="button" className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
              <span>|</span>
              <button type="button" className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>Active</button>
              <span>|</span>
              <button type="button" className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>Completed</button>
            </div>

            <TaskList tasks={visibleTasks} onToggle={handleToggle} onDelete={handleDelete} />
            <TaskForm onAdd={handleAdd} />
          </section>
        </main>
      </div>
    </>
  )
}

export default App