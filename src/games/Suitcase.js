import React, { Component } from "react";
import "./Suitcase.css";
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import FadingImage from "../helper/FadingImage";

class Suitcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drag: '',
      bagCount: 0,
      showResult: false
    };
  }

  dropped = (e) => {
      e.containerElem.style.visibility="hidden";
      this.setState({bagCount: this.state.bagCount+1, drag: `${this.props.avatar} packt ${e.dragData.label} ein.`})
      if (this.state.bagCount === 5) {
        this.props.onCheckBag();
      }
  };

  render() {
    return (
      <div className="suitcase">
        <p className="description">Spielbeschreibung einfügen!</p>
        <div className="items">
          <Items targetKey="bag" label="eine Feldflasche" image="Feldflasche"/>
          <Items targetKey="negativ" label="einen Hammer" image="Hammer"/>
          <Items targetKey="bag" label="ein Hemd" image="Hemd"/>
          <Items targetKey="bag" label="einen Löffel" image="Löffel"/>
          <Items targetKey="negativ" label="eine Topfpflanze" image="Topfpflanze"/>
          <Items targetKey="negativ" label="eine Karaffe" image="Karaffe"/>
          <Items targetKey="bag" label="eine Seife" image="Seife"/>
          <Items targetKey="negativ" label="ein Radio" image="Radio"/>
          <Items targetKey="bag" label="eine Zahnbürste" image="Zahnbürste"/>
          <Items targetKey="negativ" label="ein Smartphone" image="Smartphone"/>
        </div>
        <DropTarget
          onHit={this.dropped}
          targetKey="bag"
          dropData={{name: "Bag"}}
        >
          <div className='bag'>
            <FadingImage direction='bag' source='bag' />
            <div className="dragText">{this.state.drag}</div>
          </div>
        </DropTarget>
      </div>
    )
  }
}

class Items extends React.Component {
  render() {
    return (
      <DragDropContainer
        targetKey={this.props.targetKey}
        dragData={{label: this.props.label}}
        render = {() => {
          return <FadingImage direction={this.props.image} source={this.props.image} />
        }}
      />    
    );
  }
}

export default Suitcase;