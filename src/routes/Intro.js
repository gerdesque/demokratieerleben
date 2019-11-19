import React from 'react';
import {NavLink} from "react-router-dom";
import './Intro.css';
import Birds from '../Birds';
import FadeInSection from '../FadeInSection';
import SmokingPit from '../SmokingPit';

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
            <div className="box"><p>Anna und Karl machen sich Gedanken über ihre Zukunft, denn sie sind 13 Jahre alt und ihr letztes Schuljahr steht bald bevor. Begleite sie dabei, wie sie ihren Weg zu einer „Kinderrepublik“ der sozialistischen Arbeiterjugend finden und was sie dort erleben.</p></div>
            <SmokingPit />
          </div>
          <div className="parallax__layer parallax__layer--back">
            
          </div>
        </div>
        <div id="group4" className="parallax__group">
          <div className="parallax__layer parallax__layer--fore">
            <div className="box decission">
              <FadeInSection direction="bottom">
                <p>Wen möchtest du auf diesem Weg begleiten?</p>
                <NavLink exact to={{ pathname: "/chapterone", state: { avatar: "Karl" } }}>Karl</NavLink>
                <NavLink exact to={{ pathname: "/chapterone", state: { avatar: "Anna" } }}>Anna</NavLink>
            </FadeInSection>
            </div>
          </div>
          <FadeInSection direction="left">
            <div className="parallax__layer parallax__layer--base parallax__layer--left"></div>
          </FadeInSection>
          <FadeInSection direction="right">
            <div className="parallax__layer parallax__layer--base parallax__layer--right"></div>
          </FadeInSection>
        </div>
      </div>
  );
}

export default Intro;
