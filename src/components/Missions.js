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
    if (this.x>= 0) {
      this.slider.current.scrollTo(this.x - 10, 0);
    } else {
      this.slider.current.scrollTo(0, 0);
    }
  }

  goRight() {
    if (this.x <= 4800) {
      this.slider.current.scrollTo(this.x + 10, 0);
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
          className={`${this.state.arrowLeft ? 'rounded-full bg-slate-500 h-16 self-center w-16 opacity-70' : 'opacity-0'}`}  
          onMouseMoveCapture={()=> this.goLeft()} 
          // className="rounded-full bg-slate-500 h-16 self-center w-16 opacity-70"
          >
            <img className="w-12" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39092/preview.png" alt="arrow-left" />
          </button>
          <div ref={this.slider} onScroll={()=> this.onSlide()} className="flex h-64 w-full overflow-hidden after:clear-both after:block after:content-[''] transition-all" data-testid="missions">
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
            className={`${this.state.arrowRight ? 'rounded-full bg-slate-500 h-16 w-16 self-center opacity-70' : 'opacity-0'}`} 
            onMouseMoveCapture={()=> this.goRight()}             
          >
            <img className="w-12 m-2" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39093/preview.png" alt="arrow-left" />
          </button>
        </div>
      </>
    );
  }
}

export default Missions;
