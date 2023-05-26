import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <>
        <Title headline="Missões" />
        <div className="flex gap-5 flex-wrap" data-testid="missions">
          {
            missions.map((mission) => (
              <MissionCard className=""
                key={ mission.name }
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />
            ))
          }

        </div>
      </>
    );
  }
}

export default Missions;
