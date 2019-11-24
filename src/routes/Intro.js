import React, { Component, lazy } from 'react';
import './Intro.css';
import Birds from '../effects/Birds';
import FadeInSection from '../helper/FadeInSection';
const SmokingPit = lazy(() => import('../effects/SmokingPit'));
const IntroDecission = lazy(() => import('./IntroDecission'));

class Intro extends Component {

setBirdsRef = element => {
    this.birds = element;
  };

stopAudio = (value) => {
  value ? this.birds.pause() : this.birds.play();
}

render = () => {
  return (
      <div className="parallax">
        <div id="header" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <div className="title">
              <h1>Demokratie <i>er</i>leben</h1>
              <FadeInSection direction="title" onOutOfView={(value) => this.stopAudio(value)}>
                <Birds/>
                <audio ref={this.setBirdsRef} hidden loop>
                  <source src={require('../assets/sounds/birds.mp3')} type="audio/mpeg"/>
                  Your browser does not support the audio element.
                </audio>
              </FadeInSection>
            </div>
          </div>
        </div>
        <div id="group2" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <div className="box"><p>Es ist 1927. Irgendwo im Ruhrgebiet leben zwei Kinder: Anna und Karl. Die Eltern der Beiden gehören zur großen Arbeiterschaft, die im Bergbau, in Webereien, Fabriken und Stahlwerken arbeiten.</p></div>
          </div>
          <div className="parallax__layer parallax__layer--deep"></div>
        </div>
        <div id="group3" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <SmokingPit />
          </div>
          <div className="parallax__layer parallax__layer--back">
            
          </div>
        </div>
        <div id="group4" className="parallax__group">
          <div className="parallax__layer parallax__layer--fore">
            <IntroDecission/>
          </div>
        </div>
      </div>
  );
}
}

export default Intro;
