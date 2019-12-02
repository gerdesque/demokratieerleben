import React, { Component,lazy } from "react";
import { Redirect } from "react-router-dom";
import "./Children.css";
import Chapter from "../helper/Chapter";
const PlayableVideo = lazy(() => import('../helper/PlayableVideo'));

const text = {};
text["AnnaChildren1"] = 'Anna kann es kaum glauben, dass hier rund 2000 Kinder und Jugendliche auf einem Haufen versammelt sind. Es bereitet ihr große Freude, jeden Tag neue Kinder kennenzulernen, auch wenn das manchmal so seine Tücken hat.'
text["AnnaChildren2"] = 'Ein Großteil des Tages besteht darin, dass die Kinder und Jugendlichen ihren eigenen Interessen nachgehen können und an einer der vielfältigen Arbeitsgruppen teilnehmen können. Oft organisieren die Kinder auch eigene Veranstaltungen oder Kurse. Anna bringt sich direkt mit Begeisterung ein.'
text["KarlChildren1"] = 'Karl kann es kaum glauben, dass hier rund 2000 Kinder und Jugendliche auf einem Haufen versammelt sind. Es bereitet ihm große Freude, jeden Tag neue Kinder kennenzulernen, auch wenn das manchmal so seine Tücken hat.'
text["KarlChildren2"] = 'Ein Großteil des Tages besteht darin, dass die Kinder und Jugendlichen ihren eigenen Interessen nachgehen können und an einer der vielfältigen Arbeitsgruppen teilnehmen können. Oft organisieren die Kinder auch eigene Veranstaltungen oder Ausflüge. Karl kann sich vor lauter Möglichkeiten kaum entscheiden. Am Ende findet er doch etwas, was ihn interessiert.'

class Children extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: this.props.location.state ? this.props.location.state.avatar : "Anna",
      redirect: false
    };
  }

  pauseVideo = value => {
    document.querySelector(value).scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    return (
      <Chapter class="children">
        <h1 className='title'>Die Kinder der Republik</h1>
        <div className='box column'>
          <p>{text[this.state.avatar + "Children1"]}</p>
          <PlayableVideo source={`${this.state.avatar}_Dialekte`} pauseVideo={() => this.pauseVideo('#group3')}/>
        </div>
        <div className='box column'>
          <p>{text[this.state.avatar + "Children2"]}</p>
          <PlayableVideo source={`${this.state.avatar}_Arbeitsgruppe`} pauseVideo={() => this.pauseVideo('#group4')}/>
        </div>
        <div className='box column'>
          <button type='button' className='link-button' onClick={() => this.setState({redirect: true})}>Zum Alltag der Kinderrepublik gehören auch Überraschungen...</button>
          {this.state.redirect && <Redirect exact to={{ pathname: "/routine", state: { ...this.state } }} />}
          </div>
      </Chapter>
    );
  }
}

export default Children;
