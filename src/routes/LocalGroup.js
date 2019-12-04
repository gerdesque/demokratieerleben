import React, { Component, lazy } from "react";
import { Redirect } from "react-router-dom";
import "./LocalGroup.css";
import FadingImage from "../helper/FadingImage";
import Chapter from "../helper/Chapter";
const PlayableVideo = lazy(() => import('../helper/PlayableVideo'));
const Suitcase = lazy(() => import("../games/Suitcase"));

const text = {};
text["AnnaOrtsgruppe"] = 'Anna betritt den großen Raum und wird direkt von einem Mädchen begrüßt, dass so alt ist wie sie: "Guten Tag, ich bin Gerda. Ich kümmere mich um die Neuen. Ich zeige dir, was wir hier machen. Wir bereiten gerade ein Zeltlager für das nächste Jahr vor."';
text["AnnaOrtsgruppe2"] = "Anna findet Gerda sofort sympathisch und lässt sich von ihr mehr über die Arbeit der Ortsgruppe erzählen.";
text["AnnaOrtsgruppe3"] = "Inzwischen steht auch fest, an welchem Ort das Lager aufgebaut wird: In einem kleinen Ort in der Nähe von Kiel. Auf einer Karte hat Annas Ortsgruppe markiert, aus welchen Städten der Weimarer Republik sich Kinder- und Jugendgruppen angemeldet haben. Auf der Karte kannst du dir ansehen, woher die Kinder kommen.";
text["AnnaOrtsgruppe4"] = "Nach mehreren Wochen der Vorbereitung steht das Zeltlager nun endlich bevor. Anna muss ihre Sachen packen, damit sie die nächsten drei Wochen alles dabei hat, was sie brauchen wird. Hilf Anna beim Packen ihres Rucksacks. Welche Dinge wird sie in der Kinderrepublik benötigen?";
text["KarlOrtsgruppe"] = 'Karl betritt den großen Raum und wird direkt von einem Mädchen begrüßt, dass so alt ist wie er: "Guten Tag, ich bin Gerda. Ich kümmere mich um die Neuen. Ich zeige dir, was wir hier machen. Wir bereiten gerade ein Zeltlager für das nächste Jahr vor."';
text["KarlOrtsgruppe2"] = "Karl findet Gerda sofort sympathisch und lässt sich von ihr mehr über die Arbeit der Ortsgruppe erzählen.";
text["KarlOrtsgruppe3"] = "Inzwischen steht auch fest, an welchem Ort das Lager aufgebaut wird: In einem kleinen Ort in der Nähe von Kiel. Auf einer Karte hat Karls Ortsgruppe markiert, aus welchen Städten der Weimarer Republik sich Kinder- und Jugendgruppen angemeldet haben. Auf der Karte kannst du dir ansehen, woher die Kinder kommen.";
text["KarlOrtsgruppe4"] = "Nach mehreren Wochen der Vorbereitung steht das Zeltlager nun endlich bevor. Karl muss seine Sachen packen, damit er die nächsten drei Wochen alles dabei hat, was er brauchen wird. Hilf Karl beim Packen seines Rucksacks. Welche Dinge wird er in der Kinderrepublik benötigen?";

class LocalGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: this.props.location.state ? this.props.location.state.avatar : "Anna",
      family: this.props.location.state ? this.props.location.state.family : "Mutter",
      hasGameSolved: false
    };
  }

  pauseVideo = value => {
    document.querySelector(value).scrollIntoView({ behavior: 'smooth' });
  };

  handleCheckBag = () => {
    setTimeout(() => this.setState({ hasGameSolved: true }), 1500);
  };

  render() {
    return (
      <Chapter class="local-group">
        <div className='title'><h1 className='title'>Die Ortsgruppe</h1></div>
        <>
          <div className='box'>
            <p>{text[this.state.avatar + "Ortsgruppe"]}</p>
            <FadingImage direction='right' source='gerda' />
          </div>
        </>
        <div className='box column'>
          <p>{text[this.state.avatar + "Ortsgruppe2"]}</p>
          <PlayableVideo source={`${this.state.avatar}_Ortsgruppe`} pauseVideo={() => this.pauseVideo('#group4')}/>
        </div>
        <div className='box column'>
          <p>{text[this.state.avatar + "Ortsgruppe3"]}</p>
        </div>
        <div className='box column'>
          <p>{text[this.state.avatar + "Ortsgruppe4"]}</p>
        </div>
        <>
          <Suitcase avatar={this.state.avatar} onCheckBag={this.handleCheckBag}/>
          <button type='button' className='link-button redirect' onClick={() => this.setState({hasGameSolved: true})}>Du sitzt schon längst auf gepackten Koffern und gehst direkt zum Treffpunkt.</button>
          {this.state.hasGameSolved && <Redirect exact to={{ pathname: "/way", state: { ...this.state } }} />}
        </>
      </Chapter>
    );
  }
}

export default LocalGroup;
