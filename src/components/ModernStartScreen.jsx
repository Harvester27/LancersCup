import React, { useState, useEffect } from 'react'
import './ModernStartScreen.css'

const ModernStartScreen = ({ onStartGame }) => {
  // Pro animace a efekty
  const [loaded, setLoaded] = useState(false)
  const [hoverStart, setHoverStart] = useState(false)
  
  // Nastavení načtení po vykreslení komponenty
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 300)
  }, [])
  
  return (
    <div className="modern-start-screen">
      <div className={`content-container ${loaded ? 'loaded' : ''}`}>
        <div className="logo-area">
          <div className="hockey-sticks">
            <div className="stick left"></div>
            <div className="stick right"></div>
            <div className="puck"></div>
          </div>
          
          <h1 className="game-title">
            <span className="title-part">LANCERS</span>
            <span className="cup-part">CUP</span>
          </h1>
          
          <div className="tagline">HOKEJOVÁ VÝZVA</div>
        </div>
        
        <button 
          className={`start-button ${hoverStart ? 'hover' : ''}`}
          onClick={onStartGame}
          onMouseEnter={() => setHoverStart(true)}
          onMouseLeave={() => setHoverStart(false)}
        >
          <span className="button-text">START HRY</span>
          <span className="button-shine"></span>
        </button>
        
        <div className="control-info">
          <h2>OVLÁDÁNÍ</h2>
          <div className="controls-grid">
            <div className="control-item">
              <div className="key-group">
                <div className="key">W</div>
                <div className="key">A</div>
                <div className="key">S</div>
                <div className="key">D</div>
              </div>
              <div className="control-desc">Pohyb hráče</div>
            </div>
            
            <div className="control-item">
              <div className="key wide">SHIFT</div>
              <div className="control-desc">Sprint</div>
            </div>
            
            <div className="control-item">
              <div className="key round">
                <svg viewBox="0 0 24 24" className="mouse-icon">
                  <path d="M12,4A4,4 0 0,1 16,8V16A4,4 0 0,1 12,20A4,4 0 0,1 8,16V8A4,4 0 0,1 12,4M12,2A6,6 0 0,0 6,8V16A6,6 0 0,0 12,22A6,6 0 0,0 18,16V8A6,6 0 0,0 12,2M12,10A1,1 0 0,0 11,11V13A1,1 0 0,0 12,14A1,1 0 0,0 13,13V11A1,1 0 0,0 12,10Z" />
                </svg>
              </div>
              <div className="control-desc">Střela</div>
            </div>
            
            <div className="control-item">
              <div className="key">SPACE</div>
              <div className="control-desc">Přihrávka</div>
            </div>
          </div>
        </div>
        
        <div className="version-info">v1.0.0 | &copy; 2025 Lancers Team</div>
      </div>
      
      <div className="bg-effects">
        <div className="ice-particles">
          {Array.from({ length: 30 }).map((_, i) => (
            <div 
              key={i} 
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ModernStartScreen