import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Agency from './pages/Agency.jsx'
import Work from './pages/Work.jsx'

function App() {


  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Agency' element={<Agency/>} />
    <Route path='/Work' element={<Work/>} />
    </Routes>
    </>
  )
}

export default App
