import React from 'react';
import './App.css';
import Birds from './Birds';

function App() {
  return (
    <div className="App">

      <div className="parallax">
        <div id="header" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <div className="title">
              <h1 className="title__white">Demokratie <i>er</i>leben</h1>
              <Birds/>
            </div>
          </div>
          <div className="parallax__layer parallax__layer--fore">
            <div className="text__action">Scrolle nach unten! &dArr;</div>
          </div>
        </div>
        <div id="chapter2" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <div className="title box">Willkommen in der Kinderrepublik</div>
          </div>
          <div className="parallax__layer parallax__layer--back"></div>
        </div>
        <div id="chapter3" className="parallax__group">
          <div className="parallax__layer parallax__layer--fore">
            {/* <div className="title box">Foreground Layer</div> */}
          </div>
          <div className="parallax__layer parallax__layer--base parallax__layer--left">
            {/* <div className="title box">Base Layer</div> */}
          </div>
        </div>
        <div id="chapter4" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            {/* <div className="title box">Base Layer</div> */}
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
        
    </div>
  );
}

export default App;
