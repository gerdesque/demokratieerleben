import React, { Component,lazy } from "react";
import { Redirect } from "react-router-dom";
import "./Republic.css";
import Chapter from "../helper/Chapter";
const Daily = lazy(() => import("../games/Daily"));
const PlayableVideo = lazy(() => import('../helper/PlayableVideo'));

const text = {};
text["AnnaRepublik1"] = 'Anna ist jetzt endlich in der Kinderrepublik angekommen und hat ihr Zelt gemeinsam mit mehreren anderen Kindern bezogen. Sie verschafft sich sofort einen Überblick über das Gelände und das Lager.'
text["AnnaRepublik2"] = 'Anna findet diese neue Aufgabe spannend und freut sich, dass sie sofort mithelfen kann. Ihre Zeltgemeinschaft ist dabei nur ein winziger Teil des Zeltlagers, aber trotzdem hat sie das Gefühl, ein wichtiger Teil der demokratischen Ordnung der Kinderrepublik zu sein.'
text["AnnaRepublik3"] = 'In der Kinderrepublik gilt es, viele Tage mit Programm zu füllen, sich auf Unternehmungen zu einigen und Interessensgruppen zu organisieren. Damit das alles für 2000 Kinder funktionieren kann, gibt es einen strikten Tagesplan. Wie sieht der Tagesplan aus? Hilf Anna, die einzelnen Tagesereignisse in die richtige Reihenfolge zu bringen.'
text["KarlRepublik1"] = 'Karl ist jetzt endlich in der Kinderrepublik angekommen und hat sein Zelt gemeinsam mit mehreren anderen Kindern bezogen. Er verschafft sich sofort einen Überblick über das Gelände und das Lager.'
text["KarlRepublik3"] = 'In der Kinderrepublik gilt es, viele Tage mit Programm zu füllen, sich auf Unternehmungen zu einigen und Interessensgruppen zu organisieren. Damit das alles für 2000 Kinder funktionieren kann, gibt es einen strikten Tagesplan. Wie sieht der Tagesplan aus? Hilf Karl, die einzelnen Tagesereignisse in die richtige Reihenfolge zu bringen.'

class Republic extends Component {
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
    const isAnna = this.state.avatar === "Anna";
    return (
      <Chapter class="republic">
        <h1 className='title'>Die Kinder&shy;republik</h1>
        <div className='box column'>
          <p>{text[this.state.avatar + "Republik1"]}</p>
          {isAnna && <PlayableVideo source={`${this.state.avatar}_Zeltobmann`} pauseVideo={() => this.pauseVideo('#group3')}/>}
        </div>
        <div className='box column'>
          {isAnna && <p>{text[this.state.avatar + "Republik2"]}</p>}
          <PlayableVideo source={`${this.state.avatar}_Lagerparlament`} pauseVideo={() => this.pauseVideo('#group4')}/>
        </div>
        <div className='box column image'>
          <p>{text[this.state.avatar + "Republik3"]}</p>
        </div>
        <>
          <Daily />
          <button type='button' className='link-button redirect' onClick={() => this.setState({redirect: true})}>Du weißt das schon alles, deswegen beschäftigst du dich lieber direkt mit den anderen Kindern.</button>
          {this.state.redirect && <Redirect exact to={{ pathname: "/children", state: { ...this.state } }} />}
        </>
      </Chapter>
    );
  }
}

export default Republic;
