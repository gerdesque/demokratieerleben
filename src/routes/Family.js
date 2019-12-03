import React, { Component, lazy } from "react";
import { Redirect } from "react-router-dom";
import "./Family.css";
import Chapter from "../helper/Chapter";
const Puzzle = lazy(() => import("../games/Puzzle"));

const text = {};
text["AnnaVater"] =
  "Anna gefiel diese Idee und so machte sie sich auf zur Ortsgruppe der sozialistischen Arbeiterjugend.";
text["AnnaMutter"] =
  "Anna behagte nicht, was ihre Mutter erzählt hatte. Von einer Freundin hatte sie von der sozialistischen Arbeiterjugend gehört, die jedes Jahr in den Sommerferien Ferienlager veranstalteten. Das wollte sie sich mal ansehen!";
text["AnnaGroßvater"] =
  "Anna wurde traurig bei dem Gedanken an ihrer verstorbene Großmutter, die sie sehr geliebt hatte. Es musste doch noch andere Möglichkeiten geben, sein Leben zu bestreiten. Hilfe und Rat erhoffte sie sich von der Ortsgruppe der sozialistischen Arbeiterjugend, von der sie einen Aushang in der Schule gesehen hatte.";
text["KarlVater"] =
  "Karl gefiel diese Idee und so machte er sich auf zur Ortsgruppe der sozialistischen Arbeiterjugend.";
text["KarlMutter"] =
  "Karl behagte nicht, was seine Mutter erzählt hatte. Von einem Freund hatte er von der sozialistischen Arbeiterjugend gehört, die jedes Jahr in den Sommerferien Ferienlager veranstaltete. Das wollte er sich mal ansehen!";
text["KarlGroßmutter"] =
  "Karl wurde traurig bei dem Gedanken an seinen verstorbenen Großvater, den er sehr geliebt hatte. Es musste doch noch andere Möglichkeiten geben, sein Leben zu bestreiten. Hilfe und Rat erhoffte er sich von der Ortsgruppe der sozialistischen Arbeiterjugend, von der er einen Aushang in der Schule gesehen hatte.";

class Family extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: this.props.location.state ? this.props.location.state.avatar : "Anna",
      family: this.props.location.state ? this.props.location.state.family : "Mutter",
      hasPuzzleSolved: false
    };
  }

  handleCheckBoard = solved => {
    solved && setTimeout(() => this.setState({ hasPuzzleSolved: true }), 1500);
  };

  render() {
    return (
      <Chapter class="family">
        <div className='title'><h1 className='title'>Bei {this.state.avatar}</h1></div>
        <div className='box'>
          <p>{text[this.state.avatar + this.state.family]}</p>
        </div>
        <></>
        <div className='box'>
          <p>{this.state.avatar} hat einen Stadtplan mit dem eingezeichneten Weg zur Ortsgruppe bekommen. Nur leider ist dieser in mehrere Teile zerrissen. Hilf {this.state.avatar}, ihn wieder zusammenzufügen, um zum Treffpunkt der Ortsgruppe zu gelangen. Ziehe dazu die durcheinandergewürfelten Kartenausschnitte in das entsprechende vorgezeichnete Feld. Wenn du das Puzzle richtig gelöst hast, kommst du zum nächsten Kapitel.</p>
        </div>
        <>
          <Puzzle onCheckBoard={this.handleCheckBoard} />
          {this.state.hasPuzzleSolved && <Redirect exact to={{ pathname: "/localgroup", state: { ...this.state } }} />}
        </>
      </Chapter>
    );
  }
}

export default Family;
