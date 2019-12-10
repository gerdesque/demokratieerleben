import React, { Component } from "react";
import "./PlayableVideo.scss";

class PlayableVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasVideoStarted: false
    };
  }

  playVideo = () => {
    this.setState({ hasVideoStarted: true });
    this.refs.video.play();
  };

  render() {
    return (
    <div className="video">
      <video ref='video' key={this.props.avatar} onPause={this.props.pauseVideo}>
        <source type='video/mp4' src={require(`../assets/movies/${this.props.source}.mp4`)}></source>
        Your browser does not support the video tag.
      </video>
      <button className={`play ${this.state.hasVideoStarted && 'hide'}`} onClick={this.playVideo} />
    </div>);
  }

}

export default PlayableVideo;