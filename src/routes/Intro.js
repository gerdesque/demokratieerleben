import React, { lazy } from 'react';
import './Intro.css';
import Birds from '../effects/Birds';
const SmokingPit = lazy(() => import('../effects/SmokingPit'));
const IntroDecission = lazy(() => import('./IntroDecission'));

function Intro() {
  return (
      <div className="parallax">
        <div id="header" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <div className="title">
              <h1 className="title__white">Demokratie <i>er</i>leben</h1>
              <Birds/>
            </div>
          </div>
          <div className="parallax__layer parallax__layer--fore">
            <div className="subtitle"><h2>Scrolle nach unten! &dArr;</h2></div>
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

export default Intro;
