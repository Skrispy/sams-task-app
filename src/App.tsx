// import { useState } from 'react'
import TaskList from './components/TaskList'

function App() {

  return (
    <>
      <div>
      <h1>Task Manager</h1>
      <TaskList tasks={[]}></TaskList>
      </div>
    </>
  )
}

export default App
