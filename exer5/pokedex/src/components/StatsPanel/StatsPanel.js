import React from 'react';
import './StatsPanel.css';

const StatsPanel = ({ displayInfo, stats, height, weight, moves, activeTab, setActiveTab }) => {
  return (
    <div className='stat-center'>
      <p className="title" onClick={() => setActiveTab('Info')}>{activeTab}</p>
      <div className="stat-container">
        {activeTab === 'Info' && displayInfo && (
          <div className='lineHeight'>
            <p>Height: {height / 10} m</p>
            <p>Weight: {weight / 10} kg</p>
            {stats && stats.map && stats.map((stat, index) => (
              <p key={index}>
                {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: {stat.base_stat}
              </p>
            ))}
          </div>
        )}
        {activeTab === 'Moves' && !displayInfo && (
          <div className='lineHeight'>
              {moves && moves.map && moves.map((move, index) => (
                <p key={index}>{move.move.name}</p>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsPanel;