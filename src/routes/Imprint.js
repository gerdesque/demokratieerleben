import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Imprint.css";
import FadingImage from "../helper/FadingImage";
import FadeInSection from "../helper/FadeInSection";
import Chapter from "../helper/Chapter";

const text = {};
text["Imprint1"] = 'Natürlich besteht die Kinderrepublik nicht nur aus Karl, Anna und Gerda. Damit ihr mit den beiden dieses Abenteuer erleben könnt, hat Florian eine Website entworfen, die Gerd umgesetzt hat. Anne hat dafür unter dem Einsatz von Felix‘ Sprecherstimme Trickfilme produziert.'
text["Imprint2"] = 'Unsere Website richtet sich an all jene, die sich spielerisch mit dem Thema „Kinderrepublik“ und partizipativer Jugendarbeit in der ersten Hälfte des 20. Jahrhunderts beschäftigen wollen und erfahren möchten, wie solche Zeltlager als Form früher und praktischer Demokratiebildung funktioniert haben. In Zeiten wie jetzt, wo mehr und mehr Menschen sich von den demokratischen Institutionen abwenden, lohnt es sich, einen Blick zurückzuwerfen und zu schauen, wie Demokratiebildung insbesondere für bildungsfernere Schichten in der Vergangenheit funktioniert hat und inwiefern wir dafür etwas für unsere heutige Zeit lernen können.'

class Imprint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

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

  render() {
    return (
      <Chapter class="imprint">
        <FadeInSection onOutOfView={value => this.stopAudio(value)}>
          <div className='title'><h1 className='title'>Hinter&shy;gründe</h1></div>
          <audio ref={this.setAudioRef} hidden loop>
            <source src={require(`../assets/sounds/imprint.mp3`)} type='audio/mpeg' />
          </audio>
        </FadeInSection>
        <div className='box column'>
          <p>{text["Imprint1"]}</p>
        </div>
        <div className='box column image'>
          <p>{text["Imprint2"]}</p>
          <FadingImage direction='bottom' source='cleaning' />
        </div>
        <div className='box'>
          <p>Diese Website entstand im Rahmen des <a href="https://codingdavinci.de/events/westfalen-ruhrgebiet/" target="_blank" rel="noopener noreferrer">Coding da Vinci Westfalen-Ruhrgebiet</a> von Oktober bis Dezember 2019. 
          Wir danken dem <a href="https://arbeiterjugend.de/" target="_blank" rel="noopener noreferrer">Archiv der Arbeiterjugendbewegung</a>, welches die Fotografien und Bildkärtchen unter einer CC BY-SA 3.0 DE Lizenz zur Verfügung gestellt hat. 
          Ebenso danken wir dem <a href="https://www.lwl.org/industriemuseum/" target="_blank" rel="noopener noreferrer">LWL-Freilichtmuseum Detmold</a>, aus deren Sammlung wir Bilder eines Tagelöhnerhauses genutzt haben, die unter einer CC BY-SA 4.0 Lizenz zur Verfügung gestellt wurden. 
          <br/><br/>Wir danken auch dem <a href="https://www.lwl.org/industriemuseum/" target="_blank" rel="noopener noreferrer">LWL-Industriemuseum</a>, deren unter einer CC BY 4.0 Lizenz veröffentlichten <a href="http://www.soundsofchanges.eu/" target="_blank" rel="noopener noreferrer">„Sounds of Changes“</a> wir genutzt haben. 
          Die Sounds wurden von Kathinka Engels, Konrad Gutkowski, Erik Palsson und Fredrik Johansson erstellt. Und zu guter Letzt danken wir <a href="https://commons.wikimedia.org/wiki/Hauptseite" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>, dank deren umfangreicher Sammlung wir einen Stadtplan von <a href="https://commons.wikimedia.org/wiki/File:Stadtplan-DO-1894-IMG_2727.jpg" target="_blank" rel="noopener noreferrer">Dortmund</a> und eine Karte der <a href="https://commons.wikimedia.org/wiki/File:Weimar_Republic_states_and_provinces.svg" target="_blank" rel="noopener noreferrer">Weimarer Republik</a> einbinden konnten. 
          <br/><br/>Der Quellcode läuft unter einer MIT license. Die eigens für das Projekt erstellten Videodateien sind unter einer CC BY-SA 3.0 Lizenz veröffentlicht.
          </p>
        </div>
        <div className='box column'>
          <button type='button' className='link-button' onClick={() => this.setState({redirect: true})}>Zum Start der Geschichte</button>
          {this.state.redirect && <Redirect exact to={{ pathname: "/"}} />}
        </div>
      </Chapter>
    );
  }
}

export default Imprint;
