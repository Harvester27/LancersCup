import React, { useState, useEffect } from 'react';
import './TeamSelection.css';

// Import log pro ukázku v náhledu - opravené cesty
import logo1 from '../assets/Loga/logo1.png';
import logo2 from '../assets/Loga/logo2.png';
import logo3 from '../assets/Loga/logo3.png';
import logo4 from '../assets/Loga/logo4.png';
import logo5 from '../assets/Loga/logo5.png';
import logo6 from '../assets/Loga/logo6.png';
import harvesters from '../assets/Loga/Harvesters.png';
import lancersWhite from '../assets/Loga/LancersWhite.jpg';

const TeamSelection = ({ onSelectTeam }) => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [logoLoaded, setLogoLoaded] = useState({});
  
  // Definice týmů s cestami k obrázkům
  const teamLogos = [
    { id: 1, name: "Buldoci Most", image: logo1, primaryColor: "#d60000" },
    { id: 2, name: "Delfíní Krupka", image: logo2, primaryColor: "#084a94" },
    { id: 3, name: "Fofr Liga", image: logo3, primaryColor: "#c72c2c" },
    { id: 4, name: "Krysáci Duchcov", image: logo4, primaryColor: "#B8860B" },
    { id: 5, name: "Marťani Chomutov", image: logo5, primaryColor: "#696969" },
    { id: 6, name: "Vlčáci Most", image: logo6, primaryColor: "#8B0000" },
    { id: 7, name: "Kombajny Teplice", image: harvesters, primaryColor: "#FF8C00" },
    { id: 8, name: "Litvínov Lancers", image: lancersWhite, primaryColor: "#fff" }
  ];
  
  // Efekt pro animaci postupného načítání prvků
  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoLoaded({});
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleTeamSelect = (team) => {
    setSelectedTeam(team);
  };
  
  const handleConfirmSelection = () => {
    if (selectedTeam) {
      onSelectTeam(selectedTeam);
    }
  };
  
  // Zaznamenat načtení loga
  const handleLogoLoad = (teamId) => {
    setLogoLoaded(prev => ({ ...prev, [teamId]: true }));
  };
  
  return (
    <div className="team-selection-screen">
      <div className="team-selection-content">
        <div className="selection-header">
          <div className="hockey-sticks small">
            <div className="stick left"></div>
            <div className="stick right"></div>
            <div className="puck"></div>
          </div>
          
          <h1 className="selection-title">VYBER SVŮJ TÝM</h1>
          
          <div className="selection-subtitle">
            Zvol tým, za který budeš hrát
          </div>
        </div>
        
        <div className="teams-grid">
          {teamLogos.map((team, index) => (
            <div 
              key={team.id}
              className={`team-card ${selectedTeam?.id === team.id ? 'selected' : ''}`}
              onClick={() => handleTeamSelect(team)}
              style={{ 
                animationDelay: `${(index * 0.1) + 0.2}s`,
                borderColor: selectedTeam?.id === team.id ? team.primaryColor : 'transparent'
              }}
            >
              <div className="logo-container">
                <div className={`logo-wrapper ${logoLoaded[team.id] ? 'loaded' : ''}`}>
                  <img 
                    src={team.image}
                    alt={team.name}
                    className="team-logo"
                    onLoad={() => handleLogoLoad(team.id)}
                  />
                </div>
              </div>
              <div className="team-name">{team.name}</div>
              
              {selectedTeam?.id === team.id && (
                <div className="selected-indicator">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#fff"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <button 
          className={`confirm-button ${!selectedTeam ? 'disabled' : ''}`}
          onClick={handleConfirmSelection}
          disabled={!selectedTeam}
        >
          <span className="button-text">POTVRDIT VÝBĚR</span>
          <span className="button-shine"></span>
        </button>
        
        {selectedTeam && (
          <div className="team-info">
            <p>Vybraný tým: <strong>{selectedTeam.name}</strong></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamSelection;