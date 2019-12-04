import React from "react";
import FadeInSection from "../helper/FadeInSection";

function FadingImage(props) {
  return (<>{props.direction ? <FadeInSection direction={props.direction}>{getPicture()}</FadeInSection> : getPicture()}</>);

  function getPicture() {
    return <picture>
      <source srcSet={require(`../assets/${props.source}.webp`)} type='image/webp' />
      <source srcSet={require(`../assets/fallback/${props.source}.png`)} type='image/png' />
      <img draggable="false" src={require(`../assets/fallback/${props.source}.png`)} alt='Smoking Pit' />
    </picture>;
  }
}

export default FadingImage;
