import React, { useState, useEffect } from 'react';
import './App.css';
import ArrowButton from './components/ArrowButton/ArrowButton';
import InfoMoveButton from './components/InfoMoveButton/InfoMoveButton';
import PokemonIdentifier from './components/PokemonIdentifier/PokemonIdentifier';
import StatsPanel from './components/StatsPanel/StatsPanel';

const App = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonData, setPokemonData] = useState(null);
  const [displayInfo, setDisplayInfo] = useState(true);
  const [activeTab, setActiveTab] = useState('Info');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };
  
    fetchData();
  }, [pokemonId]);  

  return (
    <div className="container">
      <h1>Exercise 5 - PokeDex!</h1>
      <div className="sections">
        <div className="left-section">
          <PokemonIdentifier pokemonData={pokemonData} />
            <ArrowButton
              onArrowButtonClick={(increment) => setPokemonId((prevId) => (increment ? prevId + 1 : prevId - 1))}
              disabled={pokemonId <= 1}
            />
        </div>
        <div className="right-section">
          <StatsPanel
            displayInfo={displayInfo}
            stats={pokemonData?.stats}
            height={pokemonData?.height}
            weight={pokemonData?.weight}
            moves={pokemonData?.moves}
            activeTab={activeTab}
            setActiveTab={(isInfo) => setActiveTab(isInfo ? 'Info' : 'Moves')}
          />
          <InfoMoveButton
            displayInfo={displayInfo}
            onInfoMoveButtonClick={(isInfo) => {
              setDisplayInfo(isInfo);
              setActiveTab(isInfo ? 'Info' : 'Moves');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;