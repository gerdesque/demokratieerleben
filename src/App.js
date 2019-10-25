import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="parallax">
        <div id="header" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <div className="title">
              <h1 className="title__white">Demokratie <i>er</i>leben</h1>
              <div className="bird-container bird-container--one">
                <div className="bird bird--one"></div>
              </div>
              
              <div className="bird-container bird-container--two">
                <div className="bird bird--two"></div>
              </div>
              
              <div className="bird-container bird-container--three">
                <div className="bird bird--three"></div>
              </div>
              
              <div className="bird-container bird-container--four">
                <div className="bird bird--four"></div>
              </div>
            </div>
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
          <div className="parallax__layer parallax__layer--base">
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
          <div className="parallax__layer parallax__layer--base">
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
          <div className="parallax__layer parallax__layer--base">
            {/* <div className="title box">Base Layer</div> */}
          </div>
        </div>
      </div>
        
    </div>
  );
}

export default App;
