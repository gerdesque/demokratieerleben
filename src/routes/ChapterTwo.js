import React, { Component } from 'react';
import './ChapterTwo.css';

class ChapterTwo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      avatar: this.props.location.state ? this.props.location.state.avatar : "Anna",
      family: this.props.location.state ? this.props.location.state.family : "Mutter"
    };
  }

  render () {
    return (
      <div className="parallax">
        <div id="header" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <div className="title">
              <h1 className="title__white">Die Ortsgruppe</h1>
            </div>
          </div>
        </div>
        <div id="group2" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <div className="box"><p>Anna betritt den großen Raum und wird direkt von einem Mädchen begrüßt, dass so alt ist wie sie: "Guten Tag, ich bin Gerda. Ich kümmere mich um die Neuen. Ich zeige dir, was wir hier machen. Wir bereiten gerade ein Zeltlager für das nächste Jahr vor."</p></div>
          </div>
          <div className="parallax__layer parallax__layer--back parallax__layer--left"></div>
        </div>
        <div id="group3" className="parallax__group">
          <div className="parallax__layer parallax__layer--fore">
          <div className="box"><p>Möchtest du mitmachen? / Anna ist sofort begeistert.</p><p>Hier Video einbinden!</p></div>
          </div>
          <div className="parallax__layer parallax__layer--base parallax__layer--left"></div>
          <div className="parallax__layer parallax__layer--back parallax__layer--right"></div>
        </div>
        <div id="group4" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
          </div>
          <div className="parallax__layer parallax__layer--back"></div>
          <div className="parallax__layer parallax__layer--deep"></div>
        </div>
        <div id="group5" className="parallax__group">
          <div className="parallax__layer parallax__layer--fore">
            <div className="box"><p>Anna schreibt einen Artikel über das geplante Tagesprogramm während des Zeltlagers. Wie sieht der Tagesplan aus?</p><p>Hier Spiel einfügen!</p></div>
          </div>
          <div className="parallax__layer parallax__layer--base parallax__layer--right">
          </div>
        </div>
        <div id="group6" className="parallax__group">
          <div className="parallax__layer parallax__layer--back"></div>
          <div className="parallax__layer parallax__layer--base">
          </div>
          <div className="parallax__layer parallax__layer--fore">
            <div className="box"><p>Inzwischen steht auch fest, an welchem Ort das Lager aufgebaut wird: In Seekamp in der Nähe von Kiel. Auf einer Karte hat Annas Ortsgruppe markiert, aus welchen Städten der Weimarer Republik sich Kinder- und Jugendgruppen angemeldet haben.</p><p>Hier Karte einfügen!</p></div>
          </div>
        </div>
        <div id="group7" className="parallax__group">
          <div className="parallax__layer parallax__layer--base parallax__layer--right">
          </div>
          <div className="parallax__layer parallax__layer--fore">
            <div className="box"><p>Bald geht es los ins Zeltlager Seekamp! Anna muss ihre Sachen zusammensuchen. Hilf ihr den Koffer zu packen!</p><p>Hier Spiel einfügen! Spiel gelöst leitet zum nächsten Kapitel</p></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChapterTwo;
