import React, { Component, lazy } from 'react';
import {Link} from "react-router-dom";
import './ChapterOne.css';
import Rain from '../Rain';
const Puzzle = lazy(() => import('../games/Puzzle'));

class groupOne extends Component {

  constructor(props) {
    super(props);
    this.state = {
      avatar: this.props.location.state ? this.props.location.state.avatar : "Anna"
    };
  }

  render () {
    return (
      <div className="parallax">
        <div id="header" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <Rain />
            <div className="title">
              <h1 className="title__white">Bei {this.state.avatar}</h1>
            </div>
          </div>
          <div className="parallax__layer parallax__layer--fore">
            <div className="subtitle"><h2>Scrolle nach unten! &dArr;</h2></div>
          </div>
        </div>
        <div id="group2" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <div className="box"><p>Anna ist gerade 13 Jahre alt geworden. Ihr Vater arbeitet unter Tage im Bergbau. Ihre Mutter arbeitet in einer Weberei. Der Lohn der Beiden reicht gerade aus, um Anna und ihre 4 jüngeren Geschwister sowie ihren alten Großvater zu versorgen.</p></div>
          </div>
          <div className="parallax__layer parallax__layer--back"></div>
        </div>
        <div id="group3" className="parallax__group">
          <div className="parallax__layer parallax__layer--fore">
          <div className="box"><p>Anna macht sich Gedanken um ihre Zukunft. Mit wem soll sie darüber sprechen?</p>
            <Link to={{ pathname: "/chaptertwo", state: { ...this.state, family: "Vater" } }}>Vater</Link>
            <Link to={{ pathname: "/chaptertwo", state: { ...this.state, family: "Mutter" } }}>Mutter</Link>
            <Link to={{ pathname: "/chaptertwo", state: { ...this.state, family: "Großvater" } }}>Großvater</Link>
            <p>Hier Videos einfügen!</p>
          </div>
          </div>
          <div className="parallax__layer parallax__layer--base parallax__layer--left">
          </div>
        </div>
        <div id="group4" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
          </div>
          <div className="parallax__layer parallax__layer--back"></div>
          <div className="parallax__layer parallax__layer--deep"></div>
        </div>
        <div id="group5" className="parallax__group">
          <div className="parallax__layer parallax__layer--fore">
            <div className="box"><p>Anna wurde traurig bei dem Gedanken an ihrer verstorbene Großmutter, die sie sehr geliebt hatte. Es musste doch noch andere Möglichkeiten geben, sein Leben zu bestreiten. Hilfe und Rat erhoffte sie sich von der Ortsgruppe der sozialistischen Arbeiterjugend, von der sie einen Aushang in der Schule gesehen hatte.</p></div>
          </div>
        </div>
        <div id="group6" className="parallax__group">
          <div className="parallax__layer parallax__layer--back"></div>
          <div className="parallax__layer parallax__layer--base">
            <div className="box">
              <Puzzle />
              <p>Erfolgreich gelöstes Puzzle leitet zum nächsten Kapitel!</p>
            </div>
          </div>
        </div>
        <div id="group7" className="parallax__group">
          <div className="parallax__layer parallax__layer--base parallax__layer--right">
          </div>
        </div>
      </div>
    );
  }
}

export default groupOne;
