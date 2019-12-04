import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./IntroDecission.css";
import FadeInSection from "../helper/FadeInSection";
import FadingImage from "../helper/FadingImage";

const text = {};
text["Default"] = "Anna und Karl machen sich Gedanken über ihre Zukunft, denn sie sind 13 Jahre alt und ihr letztes Schuljahr steht bald bevor. Begleite sie dabei, wie sie ihren Weg zu einer „Kinderrepublik“ der sozialistischen Arbeiterjugend finden und was sie dort erleben.";
text["Karl"] = "Karl ist 13 Jahre alt und wird bald 14. Sein Vater ist Bergmann und seine Mutter arbeitet in einer Weberei. Beide Eltern sind Mitglied in der Gewerkschaft. Der Lohn der beiden reicht gerade dafür aus, um Karl und seine 3 Geschwister sowie seine alte Großmutter zu versorgen.";
text["Anna"] = "Anna ist gerade 13 Jahre alt geworden. Ihr Vater arbeitet unter Tage im Bergbau. Ihre Mutter arbeitet in einer Weberei. Beide Eltern sind Mitglied in der Gewerkschaft. Der Lohn der beiden reicht gerade aus, um Anna und ihre 4 jüngeren Geschwister sowie ihren alten Großvater zu versorgen.";

class IntroDecission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: "Default",
      family: "",
      videoSrc: require("../assets/movies/Anna_Vater.mp4"),
      hasVideoStarted: false,
      hasVideoStopped: false,
      isHover: false
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
    const avatars = ["Karl", "Anna"];
    const isDefault = this.state.avatar === "Default";
    const isAnna = this.state.avatar === "Anna";
    const isKarl = this.state.avatar === "Karl";

    const defaultText = 
      <FadeInSection direction='bottom'>
        <p>Wen möchtest du auf diesem Weg begleiten?</p>
        {avatars.map((avatar) =>
          <button type='button' className='link-button' key={avatar} onMouseOut={() => this.setState({ isHover: false })} onMouseOver={() => this.setState({ isHover: avatar })} onClick={() => this.setState({ avatar: avatar })}>{avatar}</button>)}
      </FadeInSection>

    const overlayText = 
      !this.state.hasVideoStarted &&
        <div className='main-overlay'>
          {isAnna && <p>Anna macht sich Gedanken um ihre Zukunft. Mit wem soll sie darüber sprechen?</p>}
          {isKarl && <p>Karl macht sich Gedanken um seine Zukunft. Mit wem soll er darüber sprechen?</p>}
          {!isDefault && (
            <>
              <button type='button' className='link-button' onClick={() => this.playVideo("Vater")}>Vater</button>
              <button type='button' className='link-button' onClick={() => this.playVideo("Mutter")}>Mutter</button>
            </>)}
          {isAnna && (<button type='button' className='link-button' onClick={() => this.playVideo("Großvater")}>Großvater</button>)}
          {isKarl && (<button type='button' className='link-button' onClick={() => this.playVideo("Großmutter")}>Großmutter</button>)}
        </div>

    const mainText = isDefault ? defaultText : overlayText
    
    const video = !isDefault && (
      <video ref='vidRef' key={this.state.videoSrc} poster={require("../assets/poster_intro.webp")} onPause={this.pauseVideo}>
        <source type='video/mp4' src={this.state.videoSrc}></source>
        Your browser does not support the video tag.
      </video>
    )

    const redirect = this.state.hasVideoStopped && (
      <Redirect exact to={{ pathname: "/family", state: { avatar: this.state.avatar, family: this.state.family } }} />
    )

    return (
      <div className={`decission ${this.state.avatar}`}>
        <div className='intro'>
          <p>{text[this.state.avatar]}</p>
        </div>
        <div className='main'>
          {mainText}
          {video}
          {redirect}
        </div>
        <div className='aside aside-left'>
          {this.state.isHover === "Karl" ? <FadingImage direction='left' source='karl_highlighted' /> : <FadingImage direction='left' source='karl' />}
        </div>
        <div className='aside aside-right'>
          {this.state.isHover === "Anna" ? <FadingImage direction='right' source='anna_highlighted' /> : <FadingImage direction='right' source='anna' />}
        </div>
      </div>
    );
  };
}

export default IntroDecission;
