import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './component/Login'
import Registration from './component/Registration'
import Dashboard from './component/Dashboard'
import MainLayout from './component/MainLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mainlayout" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
