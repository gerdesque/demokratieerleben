import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Imprint.css";
import Chapter from "../helper/Chapter";

const text = {};
text["Imprint1"] = 'Natürlich besteht das Zeltlager nicht nur aus Regeln, Arbeitsgruppen und Diskussionen. Auch Essen ist ein wichtiger Bestandteil des Programms, denn schließlich sollen die Kinder und Jugendlichen, die oft aus armen Familien stammen, hier auch richtig satt werden.'
text["Imprint2"] = 'Nach drei Wochen ist das Zeltlager zu Ende und die Republikanerinnen und Republikaner fahren in alle Himmelsrichtungen nach Hause. Für Anna ist diese Zeit wie im Flug vergangen. Sie hat viele neue Freunde gefunden. Viele davon werden, wie sie, bald eine Lehre in einer der großen Fabriken anfangen.'
text["Imprint3"] = 'Anna hofft, dass sie sich vielleicht Briefe schreiben werden, falls sie nach der Arbeit dann noch Zeit und Kraft dafür finden wird. Zumindest fühlt sie sich nicht mehr so allein, denn sie weiß nun, dass es viele Kinder und Jugendliche gibt, denen es ähnlich geht wie ihr. Und sie alle hoffen auf eine bessere Zukunft für sich und ihre Familien.'

class Imprint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  render() {
    return (
      <Chapter class="imprint">
        <>
        <h1 className='title'>Hintergründe</h1>
        </>
        <div className='box column'>
          <p>{text["Imprint1"]}</p>
        </div>
        <div className='box column'>
          <p>{text["Imprint2"]}</p>
        </div>
        <div className='box'>
          <p>{text["Imprint3"]}</p>
        </div>
        <>
          <button type='button' className='link-button' onClick={() => this.setState({redirect: true})}>Zum Start der Geschichte</button>
          {this.state.redirect && <Redirect exact to={{ pathname: "/"}} />}
        </>
      </Chapter>
    );
  }
}

export default Imprint;
