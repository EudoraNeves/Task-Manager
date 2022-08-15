//App.js is the root component
import { useState } from 'react';
import { useEffect } from 'react'; //in order to load on the page load
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';
import About from './components/About'



function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([])

  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks();
  }, [])

  //Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks, data])
    // const id = Math.floor(Math.random()*10000+1);
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  }
  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
    setTasks(tasks.filter((task) => {
      return task.id !== id;
    }))
  }

  //Toggle Reminder
  //fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }
  const toggleReminder = async (id) => {
    //fetch task
    const taskToToggle = await fetchTask(id)
    //prepare the updated task
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    //send request to update the server data
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })
    //get back the updated data from the server
    const data = await res.json()
    //update the local data
    setTasks(tasks.map((task) => {
      return task.id === id ? { ...task, reminder: !data.reminder } : task;
    }))

  }

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAddBtn={showAddTask} />
        <Routes>
          <Route path='/' element={
            <>
              {showAddTask && <AddTask onAddTask={addTask} />}
              {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No tasks to show!')}
            </>
          } />
          <Route path='/about' element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router >
  );
}

export default App;



// if you want to create this component as a class-based component, you need to import React
// import React from 'react';
// import Header from "./components/Header";
// import Tasks from "./components/Tasks";

// class App extends React.Component {
//   render(){
//     return (
//     <div className="container">
//       <Header />
//       <Tasks />
//     </div>
//     )
//   }
// }
// export default App;

