import React, { Component, lazy } from "react";
import "./Intro.css";
import Birds from "../effects/Birds";
import FadeInSection from "../helper/FadeInSection";
import Chapter from "../helper/Chapter";
const SmokingPit = lazy(() => import("../effects/SmokingPit"));
const IntroDecission = lazy(() => import("./IntroDecission"));
const introText =
  "Es ist 1927. Irgendwo im Ruhrgebiet leben zwei Kinder: Anna und Karl. Die Eltern der Beiden gehören zur großen Arbeiterschaft, die im Bergbau, in Webereien, Fabriken und Stahlwerken arbeiten.";

class Intro extends Component {
  setBirdsRef = element => {
    this.birds = element;
  };

  stopAudio = value => {
    value ? this.birds.pause() : this.birds.play();
  };

  render = () => {
    return (
      <Chapter class="intro">
        <FadeInSection direction='title' onOutOfView={value => this.stopAudio(value)}>
          <h1>
            Demokratie <i>er</i>leben
          </h1>
          <Birds />
          <audio ref={this.setBirdsRef} hidden loop>
            <source src={require("../assets/sounds/birds.mp3")} type='audio/mpeg' />
            Your browser does not support the audio element.
          </audio>
        </FadeInSection>
        <div className='box'>
          <p>{introText}</p>
        </div>
        <SmokingPit />
        <IntroDecission />
      </Chapter>
    );
  };
}

export default Intro;
