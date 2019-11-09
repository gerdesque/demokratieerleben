import React from 'react';
import {Link} from "react-router-dom";
import './Intro.css';
import Birds from '../Birds';
import TicTacToe from '../games/TicTacToe';

function Intro() {
  return (
      <div className="parallax">
        {/* <div id="header" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <div className="title">
              <h1 className="title__white">Demokratie <i>er</i>leben</h1>
              <Birds/>
            </div>
          </div>
          <div className="parallax__layer parallax__layer--fore">
            <div className="text__action"><h2>Scrolle nach unten! &dArr;</h2></div>
          </div>
        </div>
        <div id="chapter2" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <div className="title box"><p>Es ist 1927. Irgendwo im Ruhrgebiet leben zwei Kinder: Anna und Karl. Die Eltern der beiden gehören zur großen Arbeiterschaft, die im Bergbau, in Webereien, Fabriken und Stahlwerken arbeiten. Anna und Karl machen sich Gedanken über ihre Zukunft, denn sie sind 13 Jahre alt und ihr letztes Schuljahr steht bald bevor. Begleite sie dabei, wie sie ihren Weg zu einer „Kinderrepublik“ der sozialistischen Arbeiterjugend finden und was sie dort erleben.</p></div>
          </div>
          <div className="parallax__layer parallax__layer--back"></div>
        </div>
        <div id="chapter3" className="parallax__group">
          <div className="parallax__layer parallax__layer--fore">
          <div className="title box"><p>Wen möchtest du auf diesem Weg begleiten?</p>
            <Link to={{ pathname: "/chapterone", state: { avatar: "Anna" } }}>Anna</Link>
            <Link to={{ pathname: "/chapterone", state: { avatar: "Karl" } }}>Karl</Link>
          </div>
          </div>
          <div className="parallax__layer parallax__layer--base parallax__layer--left"> */}
            {/* <div className="title box">Foreground Layer</div> */}
          {/* </div>
        </div> */}
        <div id="chapter4" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <div className="title box"><TicTacToe /></div>
          </div>
          <div className="parallax__layer parallax__layer--back"></div>
          <div className="parallax__layer parallax__layer--deep"></div>
        </div>
        <div id="chapter5" className="parallax__group">
          <div className="parallax__layer parallax__layer--fore">
            {/* <div className="title box">Foreground Layer</div> */}
          </div>
          <div className="parallax__layer parallax__layer--base parallax__layer--right">
            {/* <div className="title box">Base Layer</div> */}
          </div>
        </div>
        <div id="chapter6" className="parallax__group">
          <div className="parallax__layer parallax__layer--back"></div>
          <div className="parallax__layer parallax__layer--base">
            {/* <div className="title box">Base Layer</div> */}
          </div>
        </div>
        <div id="chapter7" className="parallax__group">
          <div className="parallax__layer parallax__layer--base parallax__layer--right">
            {/* <div className="title box">Base Layer</div> */}
          </div>
        </div>
      </div>
  );
}

export default Intro;
