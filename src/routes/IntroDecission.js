import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./IntroDecission.css";
import FadeInSection from "../helper/FadeInSection";
import FadingImage from "../helper/FadingImage";

const text = {};
text["Default"] =
  "Anna und Karl machen sich Gedanken über ihre Zukunft, denn sie sind 13 Jahre alt und ihr letztes Schuljahr steht bald bevor. Begleite sie dabei, wie sie ihren Weg zu einer „Kinderrepublik“ der sozialistischen Arbeiterjugend finden und was sie dort erleben.";
text["Karl"] =
  "Karl ist 13 Jahre alt und wird bald 14. Sein Vater ist Bergmann und seine Mutter arbeitet in einer Weberei. Der Lohn der Beiden reicht gerade dafür aus, um Karl und seine 3 Geschwister sowie seine alte Großmutter zu versorgen.";
text["Anna"] =
  "Anna ist gerade 13 Jahre alt geworden. Ihr Vater arbeitet unter Tage im Bergbau. Ihre Mutter arbeitet in einer Weberei. Der Lohn der Beiden reicht gerade aus, um Anna und ihre 4 jüngeren Geschwister sowie ihren alten Großvater zu versorgen.";

class IntroDecission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: "Default",
      family: "",
      videoSrc: require("../assets/movies/Anna_Vater.mp4"),
      hasVideoStarted: false,
      hasVideoStopped: false
    };
  }

  playVideo = value => {
    this.setState({
      videoSrc: require(`../assets/movies/${this.state.avatar}_${value}.mp4`),
      family: value,
      hasVideoStarted: true
    });
    setTimeout(() => {
      this.refs.vidRef.play();
    }, 1000);
  };

  pauseVideo = () => {
    this.setState({ hasVideoStopped: true });
  };

  render = () => {
    return (
      <div className={`decission ${this.state.avatar}`}>
        <div className='intro'>
          <p>{text[this.state.avatar]}</p>
        </div>
        <div className='main'>
          {this.state.avatar === "Default" && (
            <FadeInSection direction='bottom'>
              <p>Wen möchtest du auf diesem Weg begleiten?</p>
              <button type='button' className='link-button' onClick={() => this.setState({ avatar: "Karl" })}>
                Karl
              </button>
              <button type='button' className='link-button' onClick={() => this.setState({ avatar: "Anna" })}>
                Anna
              </button>
            </FadeInSection>
          )}
          {!this.state.hasVideoStarted && (
            <div className='main-overlay'>
              {this.state.avatar === "Anna" && (
                <p>Anna macht sich Gedanken um ihre Zukunft. Mit wem soll sie darüber sprechen?</p>
              )}
              {this.state.avatar === "Karl" && (
                <p>Karl macht sich Gedanken um seine Zukunft. Mit wem soll er darüber sprechen?</p>
              )}
              {this.state.avatar !== "Default" && (
                <button type='button' className='link-button' onClick={() => this.playVideo("Vater")}>
                  Vater
                </button>
              )}
              {this.state.avatar !== "Default" && (
                <button type='button' className='link-button' onClick={() => this.playVideo("Mutter")}>
                  Mutter
                </button>
              )}
              {this.state.avatar === "Anna" && (
                <button type='button' className='link-button' onClick={() => this.playVideo("Großvater")}>
                  Großvater
                </button>
              )}
              {this.state.avatar === "Karl" && (
                <button type='button' className='link-button' onClick={() => this.playVideo("Großmutter")}>
                  Großmutter
                </button>
              )}
            </div>
          )}
          {this.state.avatar !== "" && (
            <video
              ref='vidRef'
              key={this.state.videoSrc}
              poster={require("../assets/poster_intro.webp")}
              onPause={this.pauseVideo}
            >
              <source type='video/mp4' src={this.state.videoSrc}></source>
              Your browser does not support the video tag.
            </video>
          )}
          {this.state.hasVideoStopped && (
            <Redirect
              exact
              to={{ pathname: "/chapterone", state: { avatar: this.state.avatar, family: this.state.family } }}
            />
          )}
        </div>
        <div className='aside aside-left'>
          <FadingImage direction='left' source='karl' />
        </div>
        <div className='aside aside-right'>
          <FadingImage direction='right' source='anna_highlighted' />
        </div>
      </div>
    );
  };
}

export default IntroDecission;
