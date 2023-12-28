import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/ForAll/Nav'
import Home from './pages/Home'
import './style/home.css';
import Destination from './pages/Destination';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Crew from './pages/Crew'
import Technology from './pages/Technology'


function App() {

  return (
    <>
    <Router>
    <Routes>
      {/* Dodaj Routy dla różnych widoków */}
      <Route path="/" exact element={<Home/>} />
      <Route path="/destination" element={<Destination/>} />
      <Route path="/crew" element={<Crew/>} />
      <Route path="/technology" element={<Technology/>} />
    </Routes>
  </Router>
  </>

  )
}

export default App
