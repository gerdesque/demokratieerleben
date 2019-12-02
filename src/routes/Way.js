import React, { Component,lazy } from "react";
import { Redirect } from "react-router-dom";
import "./Way.css";
import FadingImage from "../helper/FadingImage";
import Chapter from "../helper/Chapter";
const TicTacToe = lazy(() => import("../games/TicTacToe"));

const text = {};
text["AnnaWeg1"] = 'Nachdem Anna mit Packen fertig war, war ihr Rucksack voll und schwer. Sie freute sich riesig, denn nun konnte es endlich losgehen. Ihre Eltern und ihr Großvater waren etwas traurig, denn Anna war noch nie von zu Hause weg gewesen- und schon gar nicht allein.'
text["AnnaWeg2"] = 'Mit 35 anderen Kindern und einigen Erwachsenen als Begleitung fährt Anna im Zug Richtung Norden.'
text["AnnaWeg3"] = 'Um sich die Zeit zu vertreiben, spielen die Kinder verschiedene Spiele. Anna möchte mit dir "Drei gewinnt" spielen, weil ihr langweilig ist.'
text["AnnaWeg4"] = 'Nach einem halben Tag kommen die Kinder und Jugendlichen erschöpft, aber freudig in Kiel an, wo sie eine Nacht bei den Kieler Genossinnen und Genossen übernachten sollen, bevor es am nächsten Tag gemeinsam mit allen Anderen zum Zielort gehen soll.'
text["AnnaWeg5"] = 'Am Sonntagmorgen versammeln sich alle angereisten Kinder in der Kieler Nordostseehalle, es gibt Ansprachen und Musik. Am Ende singt der Chorverein „Brüder, zur Sonne, zur Freiheit“. Nun geht es endlich los zur Kinderrepublik. Den letzten Weg legen alle mit dem Dampfer zurück, während die Zelte bereits mit Autos zum Zielort gebracht wurden.'
text["KarlWeg1"] = 'Nachdem Karl mit Packen fertig war, war sein Rucksack voll und schwer. Er freute sich riesig, denn nun konnte es endlich losgehen. Seine Eltern und seine Großmutter waren etwas traurig, denn Karl war noch nie von zu Hause weg gewesen- und schon gar nicht allein.'
text["KarlWeg2"] = 'Mit 35 anderen Kindern und einigen Erwachsenen als Begleitung fährt Karl im Zug Richtung Norden.'
text["KarlWeg3"] = 'Um sich die Zeit zu vertreiben, spielen die Kinder verschiedene Spiele. Karl möchte mit dir "Drei gewinnt" spielen, weil ihm langweilig ist.'
text["KarlWeg4"] = 'Nach einem halben Tag kommen die Kinder und Jugendlichen erschöpft, aber freudig in Kiel an, wo sie eine Nacht bei den Kieler Genossinnen und Genossen übernachten sollen, bevor es am nächsten Tag gemeinsam mit allen Anderen zum Zielort gehen soll.'
text["KarlWeg5"] = 'Am Sonntagmorgen versammeln sich alle angereisten Kinder in der Kieler Nordostseehalle, es gibt Ansprachen und Musik. Am Ende singt der Chorverein „Brüder, zur Sonne, zur Freiheit“. Nun geht es endlich los zur Kinderrepublik. Den letzten Weg legen alle mit dem Dampfer zurück, während die Zelte bereits mit Autos zum Zielort gebracht wurden.'


class Way extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: this.props.location.state ? this.props.location.state.avatar : "Anna",
      redirect: false
    };
  }

  pauseVideo = () => {
    document.querySelector('#group4').scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    return (
      <Chapter class="way">
        <h1 className='title'>Der Weg zur Kinder&shy;republik</h1>
        <>
          <div className='box column'>
            <p>{text[this.state.avatar + "Weg1"]}</p>
          </div>
        </>
        <div className='box column image'>
          <p>{text[this.state.avatar + "Weg2"]}</p>
          <FadingImage direction='adults' source='adults' />
        </div>
        <div className='box column'>
          <p>{text[this.state.avatar + "Weg3"]}</p>
        </div>
        <TicTacToe avatar={this.state.avatar}/>
        <div className='box column'>
          <p>{text[this.state.avatar + "Weg4"]}</p>
        </div>
        <div className='box column'>
          <p>{text[this.state.avatar + "Weg5"]}</p>
          <button type='button' className='link-button' onClick={() => this.setState({redirect: true})}>Auf zur Kinderrepublik!</button>
          {this.state.redirect && <Redirect exact to={{ pathname: "/republic", state: { ...this.state } }} />}
        </div>
      </Chapter>
    );
  }
}

export default Way;
