import React from "react";
import FadeInSection from "../helper/FadeInSection";

function FadingImage(props) {
  return (
    <FadeInSection direction={props.direction}>
      <picture>
        <source srcSet={require(`../assets/${props.source}.webp`)} type='image/webp' />
        <source srcSet={require(`../assets/fallback/${props.source}.png`)} type='image/png' />
        <img draggable="false" src={require(`../assets/fallback/${props.source}.png`)} alt='Smoking Pit' />
      </picture>
    </FadeInSection>
  );
}

export default FadingImage;
