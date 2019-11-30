import React, { Component } from "react";
import "./Chapter.css";

class Chapter extends Component {
  render() {
    return (
      <div className='parallax'>
        {this.props.children[0] && (
          <div id='header' className='parallax__group'>
            <div className='parallax__layer parallax__layer--base'>
              <div className='title'>{this.props.children[0]}</div>
            </div>
          </div>
        )}
        {this.props.children[1] && (
          <div id='group2' className='parallax__group'>
            <div className='parallax__layer parallax__layer--base'>{this.props.children[1]}</div>
            <div className='parallax__layer parallax__layer--deep'></div>
          </div>
        )}
        {this.props.children[2] && (
          <div id='group3' className='parallax__group'>
            <div className='parallax__layer parallax__layer--base'>{this.props.children[2]}</div>
            <div className='parallax__layer parallax__layer--back'></div>
          </div>
        )}
        {this.props.children[3] && (
          <div id='group4' className='parallax__group'>
            <div className='parallax__layer parallax__layer--fore'>{this.props.children[3]}</div>
            <div className='parallax__layer parallax__layer--back'></div>
          </div>
        )}
        {this.props.children[4] && (
          <div id='group5' className='parallax__group'>
            <div className='parallax__layer parallax__layer--fore'>{this.props.children[4]}</div>
            <div className='parallax__layer parallax__layer--base'></div>
          </div>
        )}
        {this.props.children[5] && (
          <div id='group6' className='parallax__group'>
            <div className='parallax__layer parallax__layer--back'></div>
            <div className='parallax__layer parallax__layer--base'></div>
            <div className='parallax__layer parallax__layer--fore'>{this.props.children[5]}</div>
          </div>
        )}
        {this.props.children[6] && (
          <div id='group7' className='parallax__group'>
            <div className='parallax__layer parallax__layer--base'></div>
            <div className='parallax__layer parallax__layer--fore'>{this.props.children[6]}</div>
          </div>
        )}
      </div>
    );
  }
}

export default Chapter;
