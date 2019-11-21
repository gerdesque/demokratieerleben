import React from 'react';
import './SmokingPit.css';
import PitWebp from '../assets/pit_without_smoke.webp';
import PitPng from '../assets/fallback/pit_without_smoke.png';

function SmokingPit() {
  return (
    <div className="smokingPit">
      <picture>
        <source srcSet={PitWebp} type="image/webp"/>
        <source srcSet={PitPng} type="image/png"/>
        <img src={PitPng} alt="Smoking Pit"/>
      </picture>
      <div className="smoke">
        <span className="s0"></span>
        <span className="s1"></span>
        <span className="s2"></span>
        <span className="s3"></span>
        <span className="s4"></span>
        <span className="s5"></span>
        <span className="s6"></span>
        <span className="s7"></span>
        <span className="s8"></span>
        <span className="s9"></span>
      </div>
    </div>
  );
}

export default SmokingPit;
