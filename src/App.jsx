import React, { useState } from 'react'
import ModernStartScreen from './components/ModernStartScreen'
import TeamSelection from './components/TeamSelection'
import './App.css'

function App() {
  // Stav aplikace - řídí, jaká obrazovka se zobrazuje
  const [currentScreen, setCurrentScreen] = useState('start')
  // Stav pro vybraný tým
  const [selectedTeam, setSelectedTeam] = useState(null)
  
  // Funkce pro přechod ze start obrazovky na výběr týmu
  const handleStartGame = () => {
    setCurrentScreen('teamSelection')
  }
  
  // Funkce pro zpracování výběru týmu
  const handleTeamSelection = (team) => {
    setSelectedTeam(team)
    setCurrentScreen('game')
  }
  
  // Renderování obsahu podle aktuálního stavu aplikace
  let content
  switch (currentScreen) {
    case 'start':
      content = <ModernStartScreen onStartGame={handleStartGame} />
      break
    case 'teamSelection':
      content = <TeamSelection onSelectTeam={handleTeamSelection} />
      break
    case 'game':
      // Zde později přidáme HockeyGame komponentu
      content = (
        <div className="placeholder">
          Zde bude hokejová hra
          {selectedTeam && (
            <div style={{ marginTop: '20px', fontSize: '18px' }}>
              Hraješ za tým: {selectedTeam.name}
            </div>
          )}
        </div>
      )
      break
    default:
      content = <ModernStartScreen onStartGame={handleStartGame} />
  }
  
  return (
    <div className="app">
      {content}
    </div>
  )
}

export default App