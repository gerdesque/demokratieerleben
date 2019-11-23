import React, {Component, lazy} from 'react';
import {Redirect} from "react-router-dom";
import './IntroDecission.css';
import KarlWebp from '../assets/karl.webp';
import KarlPng from '../assets/fallback/karl.png';
import AnnaWebp from '../assets/anna_highlighted.webp';
import AnnaPng from '../assets/fallback/anna_highlighted.png';
const FadeInSection = lazy(() => import('../helper/FadeInSection'));

const textDefault = "Anna und Karl machen sich Gedanken über ihre Zukunft, denn sie sind 13 Jahre alt und ihr letztes Schuljahr steht bald bevor. Begleite sie dabei, wie sie ihren Weg zu einer „Kinderrepublik“ der sozialistischen Arbeiterjugend finden und was sie dort erleben.";
const textKarl = "Karl ist 13 Jahre alt und wird bald 14. Sein Vater ist Bergmann und seine Mutter arbeitet in einer Weberei. Der Lohn der Beiden reicht gerade dafür aus, um Karl und seine 3 Geschwister sowie seine alte Großmutter zu versorgen.";
const textAnna = "Anna ist gerade 13 Jahre alt geworden. Ihr Vater arbeitet unter Tage im Bergbau. Ihre Mutter arbeitet in einer Weberei. Der Lohn der Beiden reicht gerade aus, um Anna und ihre 4 jüngeren Geschwister sowie ihren alten Großvater zu versorgen.";

class IntroDecission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      introText: "",
      videoSrc: require('../assets/movies/Anna_Vater.mp4'),
      hasVideoStarted: false,
      hasVideoStopped: false
    }
  }

playVideo = (value) => {
  this.setState({videoSrc: require(`../assets/movies/${this.state.introText}_${value}.mp4`), hasVideoStarted: true});
  this.refs.vidRef.play();
}

pauseVideo = () => {
  this.setState({hasVideoStopped: true});
}

render = () => {
  return (
    <div className="decission">
      <div className="intro"><p>{this.state.introText === "" ? textDefault : this.state.introText === "Anna" ? textAnna : textKarl}</p></div>
      <div className={`body ${this.state.introText}`}>
      <div className="main">
        {this.state.introText === "" &&
          <FadeInSection direction="bottom">
            <p>Wen möchtest du auf diesem Weg begleiten?</p>
            <button type="button" className="link-button" onClick={() => this.setState({introText: "Karl"})}>Karl</button>
            <button type="button" className="link-button" onClick={() => this.setState({introText: "Anna"})}>Anna</button>
          </FadeInSection>}
          <FadeInSection direction="top">
            {!this.state.hasVideoStarted && <div>
              {this.state.introText === "Anna" && <p>Anna macht sich Gedanken um ihre Zukunft. Mit wem soll sie darüber sprechen?</p>}
              {this.state.introText === "Karl" && <p>Karl macht sich Gedanken um ihre Zukunft. Mit wem soll er darüber sprechen?</p>}
              {this.state.introText !== "" && <button type="button" className="link-button" onClick={() => this.playVideo("Vater")}>Vater</button>}
              {this.state.introText !== "" && <button type="button" className="link-button" onClick={() => this.playVideo("Mutter")}>Mutter</button>}
              {this.state.introText === "Anna" && <button type="button" className="link-button" onClick={() => this.playVideo("Großvater")}>Großvater</button>}
              {this.state.introText === "Karl" && <button type="button" className="link-button" onClick={() => this.playVideo("Großmutter")}>Großmutter</button>}
            </div>}
            {this.state.introText !== "" && <video ref="vidRef" poster={require('../assets/poster_intro.webp')} onPause={this.pauseVideo}>
              <source type="video/mp4" src={this.state.videoSrc}></source>
              Your browser does not support the video tag.
            </video>}
            {this.state.hasVideoStopped && <Redirect exact to={{ pathname: "/chapterone", state: { avatar: this.state.introText } }} />}
          </FadeInSection>
        </div>
        <div className="aside-left">
          <FadeInSection direction="right">
            <picture>
              <source srcSet={KarlWebp} type="image/webp"/>
              <source srcSet={KarlPng} type="image/png"/>
              <img src={KarlPng} alt="Smoking Pit"/>
            </picture>
          </FadeInSection>
        </div>
        <div className="aside-right">
          {/* <FadeInSection direction="right"> */}
            <picture>
              <source srcSet={AnnaWebp} type="image/webp"/>
              <source srcSet={AnnaPng} type="image/png"/>
              <img src={AnnaPng} alt="Smoking Pit"/>
            </picture>
          {/* </FadeInSection> */}
        </div>
      </div>
    </div>
  );
}
}

export default IntroDecission;
