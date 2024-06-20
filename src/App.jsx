import { useState } from 'react'
import './App.css'
import GalleryComponent from './Components/GalleryComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GalleryComponent/>
    </>
  )
}

export default App
