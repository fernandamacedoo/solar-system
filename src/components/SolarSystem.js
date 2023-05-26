import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="grid place-items-center">
        <Title headline="Planetas" />
        <div className="flex" data-testid="solar-system">
          {Planets.map((planeta) => (
          <PlanetCard className=""
              key={ planeta.name }
              planetName={ planeta.name }
              planetImage={ planeta.image }
            />
          ))}
        </div>
      
      </div>
    );
  }
}

export default SolarSystem;
