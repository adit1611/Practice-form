import { useState } from 'react'
import './App.css'
import Entry from '../entry'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1>Data frontend to databse</h1>
      <div>
        <Entry/>
      </div>
    </>
  )
}

export default App
