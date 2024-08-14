import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Meme from './Components/Meme.jsx'

function App() {

return (
  <div className="container">
    <Header></Header>
    <Meme></Meme>
</div>
  )
   

}

export default App
