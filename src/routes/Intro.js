import React, { Component, lazy } from "react";
import "./Intro.css";
import Birds from "../effects/Birds";
import FadeInSection from "../helper/FadeInSection";
import Audio from "../helper/Audio";
import Chapter from "../helper/Chapter";
const SmokingPit = lazy(() => import("../effects/SmokingPit"));
const IntroDecission = lazy(() => import("./IntroDecission"));
const introText =
  "Es ist 1927. Irgendwo im Ruhrgebiet leben zwei Kinder: Anna und Karl. Die Eltern der Beiden gehören zur großen Arbeiterschaft, die im Bergbau, in Webereien, Fabriken und Stahlwerken arbeiten.";

class Intro extends Component {
  render = () => {
    return (
      <Chapter class="intro">
        <FadeInSection onOutOfView={value => this.stopAudio(value)}>
          <div className='title'><h1>Demokratie <i>er</i>leben</h1></div>
          <Birds />
          <Audio source='birds'/>
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
