import React from 'react'
import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'


const App = () => {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "asdf",
        day: "day1",
        reminder: true,
    },
    {
        id: 2,
        text: "asdf2",
        day: "day2",
        reminder: true,
    },
    {
        id: 3,
        text: "asdf3",
        day: "day3",
        reminder: false,
    },
])


  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  )
}




export default App;
