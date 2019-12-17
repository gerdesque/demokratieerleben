import React, { Component } from "react";
import "./PlayableVideo.scss";

class PlayableVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasVideoStarted: false
    };
  }

  openFullscreen = elem => {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  };

  closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      document.msExitFullscreen();
    }
  }

  playVideo = () => {
    this.setState({ hasVideoStarted: true });
    this.openFullscreen(this.refs.video);
    this.refs.video.play();
  };

  pauseVideo = () => {
    this.closeFullscreen();
    this.props.pauseVideo();
  };

  render() {
    return (
      <div className='video'>
        <video ref='video' key={this.props.avatar} onPause={this.pauseVideo}>
          <source type='video/mp4' src={require(`../assets/movies/${this.props.source}.mp4`)}></source>
          Your browser does not support the video tag.
        </video>
        <button className={`play ${this.state.hasVideoStarted && "hide"}`} onClick={this.playVideo} />
      </div>
    );
  }
}

export default PlayableVideo;
