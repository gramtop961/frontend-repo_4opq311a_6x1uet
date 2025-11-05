import React, { useState } from 'react'
import HeroSection from './components/HeroSection'
import ModeSelector from './components/ModeSelector'
import ConversationalWizard from './components/ConversationalWizard'
import HelpPanel from './components/HelpPanel'

function App() {
  const [mode, setMode] = useState(null)

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-blue-50/40">
      <HeroSection />
      <ModeSelector selected={mode} onSelect={setMode} />
      <ConversationalWizard mode={mode} />
      <HelpPanel />

      <footer className="border-t border-slate-200 bg-white/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-slate-600 flex items-center justify-between">
          <span>© {new Date().getFullYear()} astra.ai — built for digital product creators</span>
          <a href="#modes" className="text-blue-700 hover:underline">Get started</a>
        </div>
      </footer>
    </div>
  )
}

export default App
