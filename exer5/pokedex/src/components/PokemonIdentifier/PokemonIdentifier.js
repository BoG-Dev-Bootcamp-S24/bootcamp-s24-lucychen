import React from 'react';
import { getTypeColor } from '../../utils';
import './PokemonIdentifier.css';

const PokemonIdentifier = ({ pokemonData }) => (
  <div>
    <img className = "identifier" src={pokemonData?.sprites.front_default} alt={pokemonData?.name} />
    <div className = "name-container">
        <p>{pokemonData?.name}</p>
    </div>
    <h4>Types: </h4>
    <div>
      {pokemonData?.types.map((type, index) => (
        <span key={index} className = "pokemon-type" style={{ backgroundColor: getTypeColor(type.type.name) }}>
          {type.type.name}
        </span>
      ))}
    </div>
  </div>
);

export default PokemonIdentifier;