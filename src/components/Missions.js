import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  constructor(props) {
    super(props);
    this.x = 0;
    this.state = {
      arrowLeft: false,
      arrowRight: true
    };
    this.slider = React.createRef();
  }

  goLeft() {
    if (this.x - 960 >= 0) {
      this.slider.current.scrollTo(this.x - 100, 0);
    } else {
      this.slider.current.scrollTo(0, 0);
    }
  }

  goRight() {
    if (this.x + 960 <= 4800) {
      this.slider.current.scrollTo(this.x + 100, 0);
    } else {
      this.slider.current.scrollTo(4800, 0);
    }
  }

  onSlide() {
    this.x = this.slider.current.scrollLeft;
    this.setState({arrowLeft:  this.x > 0 ? true : false});
    this.setState({arrowRight: this.x < 4800 ? true : false});
  }
  render() {
    return (
      <>
        <Title headline="Missões" />
        <div className="flex">
          <button 
          style={{visibility: `${this.state.arrowLeft ? 'visible' : 'hidden'}`}}  
          onClick={()=> this.goLeft()} 
          className="rounded-full bg-slate-500 h-16 self-center w-16"
          >
            esquerda
          </button>
          <div ref={this.slider} onScroll={()=> this.onSlide()} className="flex h-64 relative w-full overflow-hidden after:clear-both after:block after:content-[''] transition-all" data-testid="missions">
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
          <button 
            style={{visibility: `${this.state.arrowRight ? 'visible' : 'hidden'}`}} 
            onClick={()=> this.goRight()} 
            className="rounded-full bg-slate-500 h-16 w-16 self-center"
          >
            direita
            {/* <img src="./images/right-arrow.png" alt="button-right"/> */}
          </button>
        </div>
      </>
    );
  }
}

export default Missions;
