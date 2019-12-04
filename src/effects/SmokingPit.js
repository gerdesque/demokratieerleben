import React from "react";
import "./SmokingPit.css";
import FadingImage from "../helper/FadingImage";

function SmokingPit() {
  return (
    <div className='smokingPit'>
      <FadingImage source='pit_without_smoke' />
      <div className='smoke'>
        <span className='s0'></span>
        <span className='s1'></span>
        <span className='s2'></span>
        <span className='s3'></span>
        <span className='s4'></span>
        <span className='s5'></span>
        <span className='s6'></span>
        <span className='s7'></span>
        <span className='s8'></span>
        <span className='s9'></span>
      </div>
    </div>
  );
}

export default SmokingPit;
