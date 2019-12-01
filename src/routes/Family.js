import React, { Component, lazy } from "react";
import { Redirect } from "react-router-dom";
import "./Family.css";
import Chapter from "../helper/Chapter";
const Puzzle = lazy(() => import("../games/Puzzle"));

const text = {};
text["AnnaVater"] =
  "Anna gefiel diese Idee und so machte sie sich auf zur Ortsgruppe der sozialistischen Arbeiterjugend.";
text["AnnaMutter"] =
  "Anna gefiel diese Idee und so machte sie sich auf zur Ortsgruppe der sozialistischen Arbeiterjugend.";
text["AnnaGroßvater"] =
  "Anna wurde traurig bei dem Gedanken an ihrer verstorbene Großmutter, die sie sehr geliebt hatte. Es musste doch noch andere Möglichkeiten geben, sein Leben zu bestreiten. Hilfe und Rat erhoffte sie sich von der Ortsgruppe der sozialistischen Arbeiterjugend, von der sie einen Aushang in der Schule gesehen hatte.";
text["KarlVater"] =
  "Karl gefiel diese Idee und so machte er sich auf zur Ortsgruppe der sozialistischen Arbeiterjugend.";
text["KarlMutter"] =
  "Karl behagte nicht, was seine Mutter erzählt hatte. Von einem Freund hatte er von der sozialistischen Arbeiterjugend gehört, die jedes Jahr in den Sommerferien Ferienlager veranstalteten. Das wollte er sich mal ansehen!";
text["KarlGroßvater"] =
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
    solved && setTimeout(() => this.setState({ hasPuzzleSolved: true }), 2000);
  };

  render() {
    return (
      <Chapter class="family">
        <h1 className='title__white'>Bei {this.state.avatar}</h1>
        <div className='box'>
          <p>{text[this.state.avatar + this.state.family]}</p>
        </div>
        <></>
        <div className='box'>
          <p>
            Minigame als Puzzle um einen Stadtplan zu erhalten, bei korrekter Lösung gelangt man zum nächsten Kapitel
            „Die Ortsgruppe“
          </p>
        </div>
        <>
          <Puzzle onCheckBoard={this.handleCheckBoard} />
          {this.state.hasPuzzleSolved && <Redirect exact to={{ pathname: "/chaptertwo", state: { ...this.state } }} />}
        </>
      </Chapter>
    );
  }
}

export default Family;
