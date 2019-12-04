import React, {Component} from "react";

class Audio extends Component {
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
      <audio ref={this.setAudioRef} hidden loop>
        <source src={require(`../assets/sounds/${this.props.source}.mp3`)} type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
    );
  };
}

export default Audio;
