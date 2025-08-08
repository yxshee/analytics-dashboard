import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Analytics from './components/Analytics'
import Reports from './components/Reports'
import Settings from './components/Settings'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'analytics':
        return <Analytics />
      case 'reports':
        return <Reports />
      case 'settings':
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Header />
      <main>
        {renderContent()}
      </main>
    </div>
  )
}

export default App
