import React, { Component,lazy } from "react";
import { Redirect } from "react-router-dom";
import "./Routine.css";
import Chapter from "../helper/Chapter";
const TicTacToe = lazy(() => import("../games/TicTacToe"));
const Rain = lazy(() => import('../effects/Rain'));
const PlayableVideo = lazy(() => import('../helper/PlayableVideo'));

const text = {};
text["AnnaRoutine1"] = 'Fast alle Dinge im Zeltlager werden demokratisch diskutiert und beschlossen. Nur einige wenige Dinge können die Kinder und Jugendlichen nicht beeinflussen, denn...'
text["AnnaRoutine2"] = 'Als das Zeltlager wieder aufgebaut ist, geht alles wieder seinen geregelten Gang. Dazu gehört auch, dass die Kinder sich für Küchen- und Wachdienste melden müssen. Jedes Mädchen und jeder Junge hat einen Beitrag zu leisten, damit das Zeltlager gut funktioniert.'
text["AnnaRoutine3"] = 'Anna hat sich dafür ein Spiel ausgedacht, um jüngeren Kindern diese Regeln leichter erklären zu können. Sie spielt es mit Karl, um auszuprobieren, ob es verständlich ist.'
text["KarlRoutine1"] = 'Fast alle Dinge im Zeltlager werden demokratisch diskutiert und beschlossen. Nur einige wenige Dinge können die Kinder und Jugendlichen nicht beeinflussen, denn...'
text["KarlRoutine2"] = 'Als das Zeltlager wieder aufgebaut ist, geht alles wieder seinen geregelten Gang. Dazu gehört auch, dass die Kinder sich für Küchen- und Wachdienste melden müssen. Jedes Mädchen und jeder Junge hat einen Beitrag zu leisten, damit das Zeltlager gut funktioniert.'
text["KarlRoutine3"] = 'Anna hat sich dafür ein Spiel ausgedacht, um jüngeren Kindern diese Regeln leichter erklären zu können. Karl probiert es mit ihr aus, um zu sehen, ob es verständlich ist.'

class Routine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: this.props.location.state ? this.props.location.state.avatar : "Anna",
      redirect: false
    };
  }

  pauseVideo = value => {
    document.querySelector(value).scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    return (
      <Chapter class="routine">
        <>
          <Rain />
          <div className='title'><h1 className='title'>Alltag in der Republik</h1></div>
        </>
        <div className='box column'>
          <p>{text[this.state.avatar + "Routine1"]}</p>
          <PlayableVideo source={`${this.state.avatar}_Gewitter`} pauseVideo={() => this.pauseVideo('#group3')}/>
        </div>
        <div className='box column'>
          <p>{text[this.state.avatar + "Routine2"]}</p>
        </div>
        <div className='box column'>
          <p>{text[this.state.avatar + "Routine3"]}</p>
        </div>
        <>
          <TicTacToe />
          <button type='button' className='link-button redirect' onClick={() => this.setState({redirect: true})}>Dein Magen knurrt und du hast jetzt keine Lust mehr, etwas zu spielen. Gehe direkt zum Essen.</button>
          {this.state.redirect && <Redirect exact to={{ pathname: "/food", state: { ...this.state } }} />}
        </>
      </Chapter>
    );
  }
}

export default Routine;
