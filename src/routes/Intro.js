import React, { Component, lazy } from "react";
import "./Intro.css";
import Birds from "../effects/Birds";
import FadeInSection from "../helper/FadeInSection";
import Chapter from "../helper/Chapter";
const SmokingPit = lazy(() => import("../effects/SmokingPit"));
const IntroDecission = lazy(() => import("./IntroDecission"));
const introText =
  "Es ist 1927. Irgendwo im Ruhrgebiet leben zwei Kinder: Anna und Karl. Die Eltern der beiden gehören zur großen Arbeiterschaft, die im Bergbau, in Webereien, Fabriken und Stahlwerken arbeiten.";

class Intro extends Component {
  setAudioRef = element => {
    this.audio = element;
  };

  stopAudio = value => {
    if (!this.audio) return;

    var promise = value ? this.audio.pause() : this.audio.play();

    if (promise !== undefined) {
      promise.then(_ => {
        // Autoplay started!
      }).catch(error => {
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
      });
    }
  };

  render = () => {
    return (
      <Chapter class="intro">
        <FadeInSection onOutOfView={value => this.stopAudio(value)}>
          <div className='title'><h1>Demokratie <i>er</i>leben</h1></div>
          <Birds />
          <audio ref={this.setAudioRef} hidden loop>
            <source src={require(`../assets/sounds/birds.mp3`)} type='audio/mpeg' />
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
