import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Header />
      <main>
        <Dashboard />
      </main>
    </div>
  )
}

export default App
