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

  function handleToggle(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

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
            <TaskList tasks={tasks} onToggle={handleToggle} />
            <TaskForm />
          </section>
        </main>
      </div>
    </>
  )
}

export default App