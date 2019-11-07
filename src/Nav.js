import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Nav.css';

class Nav extends Component {
  constructor() {
    super()

    this.state = {
      activeItem: -1,
      items: ['/', '/chapterone', '/chaptertwo'],
    }
  }

  handleItemClick(index) {
    this.setState({ activeItem: index })
  }

  render() {
    return (
      <nav>
        <ul>
          {this.state.items.map((item, index) =>
              <li
                key={index}
                className={this.state.activeItem === index ? 'current' : ''}
                onClick={this.handleItemClick.bind(this, index)}
              >
                <Link to={item}>{item}</Link>
              </li>
            )}
        </ul>
      </nav>
    )};
}

export default Nav;
