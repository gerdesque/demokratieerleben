import React, { Component,lazy } from "react";
import { Redirect } from "react-router-dom";
import "./Food.scss";
import Chapter from "../helper/Chapter";
import FadingImage from "../helper/FadingImage";
const PlayableVideo = lazy(() => import('../helper/PlayableVideo'));

const text = {};
text["AnnaFood1"] = 'Natürlich besteht das Zeltlager nicht nur aus Regeln, Arbeitsgruppen und Diskussionen. Auch Essen ist ein wichtiger Bestandteil des Programms, denn schließlich sollen die Kinder und Jugendlichen, die oft aus armen Familien stammen, hier auch richtig satt werden.'
text["AnnaFood2"] = 'Nach drei Wochen ist das Zeltlager zu Ende und die Republikanerinnen und Republikaner fahren in alle Himmelsrichtungen nach Hause. Für Anna ist diese Zeit wie im Flug vergangen. Sie hat viele neue Freunde gefunden. Viele davon werden, wie sie, bald eine Lehre in einer der großen Fabriken anfangen.'
text["AnnaFood3"] = 'Anna hofft, dass sie sich vielleicht Briefe schreiben werden, falls sie nach der Arbeit dann noch Zeit und Kraft dafür finden wird. Zumindest fühlt sie sich nicht mehr so allein, denn sie weiß nun, dass es viele Kinder und Jugendliche gibt, denen es ähnlich geht wie ihr. Und sie alle hoffen auf eine bessere Zukunft für sich und ihre Familien.'
text["KarlFood1"] = 'Natürlich besteht das Zeltlager nicht nur aus Regeln, Arbeitsgruppen und Diskussionen. Auch Essen ist ein wichtiger Bestandteil des Programms, denn schließlich sollen die Kinder und Jugendlichen, die oft aus armen Familien stammen, hier auch richtig satt werden.'
text["KarlFood2"] = 'Nach drei Wochen ist das Zeltlager zu Ende und die Republikanerinnen und Republikaner fahren in alle Himmelsrichtungen nach Hause. Für Karl ist diese Zeit wie im Flug vergangen. Er hat viele neue Freunde gefunden. Viele davon werden, wie er, bald eine Lehre in einer der großen Fabriken oder in einem Berkwerk anfangen.'
text["KarlFood3"] = 'Karl hofft, dass sie sich vielleicht Briefe schreiben werden, falls er nach der Arbeit dann noch Zeit und Kraft dafür finden wird. Zumindest fühlt er sich nicht mehr so allein, denn er weiß nun, dass es viele Kinder und Jugendliche gibt, denen es ähnlich geht wie ihm. Und sie alle hoffen auf eine bessere Zukunft für sich und ihre Familien.'

class Food extends Component {
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
      <Chapter class="food">
        <div className='title'><h1 className='title'>Essen in der Republik</h1></div>
        <div className='box column'>
          <p>{text[this.state.avatar + "Food1"]}</p>
          <PlayableVideo source={`${this.state.avatar}_Essen`} pauseVideo={() => this.pauseVideo('#group3')}/>
        </div>
        <div className='box column image'>
          <p>{text[this.state.avatar + "Food2"]}</p>
          <FadingImage direction='bottom' source='letter' />
        </div>
        <div className='box'>
          <p>{text[this.state.avatar + "Food3"]}</p>
        </div>
        <>
          <button type='button' className='link-button redirect' onClick={() => this.setState({redirect: true})}>Wenn dich die Hintergründe zu der Geschichte von Anna und Karl interessieren, findest du hier weitere Informationen und Links. </button>
          {this.state.redirect && <Redirect exact to={{ pathname: "/imprint"}} />}
        </>
      </Chapter>
    );
  }
}

export default Food;
