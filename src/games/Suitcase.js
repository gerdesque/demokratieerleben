import React, { Component } from "react";
import "./Suitcase.scss";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
import FadingImage from "../helper/FadingImage";

class Suitcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drag: "",
      bagCount: 0,
      showResult: false
    };
  }

  dropped = e => {
    e.containerElem.style.visibility = "hidden";
    this.setState({ bagCount: this.state.bagCount + 1, drag: `${this.props.avatar} packt ${e.dragData.label} ein.` });
    if (this.state.bagCount === 5) {
      this.props.onCheckBag();
    }
  };

  droppedFalseItem = e => {
    this.setState({ drag: `${this.props.avatar} braucht ${e.dragData.label} wohl eher nicht.` });
  };

  render() {
    return (
      <div className='suitcase'>
        <p className='description'>
          Um einen Gegenstand einzupacken, ziehe ihn direkt auf den Rucksack. <br /> Tipp: Manche Dinge werden in der
          Kinderrepublik dringend benötigt, andere gab es 1928 noch gar nicht.
        </p>
        <div className='items'>
          <Items targetKey='bag' label='eine Feldflasche' image='Feldflasche' />
          <Items targetKey='negative' label='einen Hammer' image='Hammer' />
          <Items targetKey='bag' label='ein Hemd' image='Hemd' />
          <Items targetKey='bag' label='einen Löffel' image='Löffel' />
          <Items targetKey='negative' label='eine Topfpflanze' image='Topfpflanze' />
          <Items targetKey='negative' label='eine Karaffe' image='Karaffe' />
          <Items targetKey='bag' label='eine Seife' image='Seife' />
          <Items targetKey='negative' label='ein Radio' image='Radio' />
          <Items targetKey='bag' label='eine Zahnbürste' image='Zahnbürste' />
          <Items targetKey='negative' label='ein Smartphone' image='Smartphone' />
        </div>
        <DropTarget onHit={this.dropped} targetKey='bag'>
          <DropTarget onHit={this.droppedFalseItem} targetKey='negative'>
            <div className='bag'>
              <FadingImage source='bag' />
              <div className='dragText'>{this.state.drag}</div>
            </div>
          </DropTarget>
        </DropTarget>
      </div>
    );
  }
}

class Items extends React.Component {
  render() {
    return (
      <DragDropContainer
        targetKey={this.props.targetKey}
        dragData={{ label: this.props.label }}
        render={() => {
          return <FadingImage source={this.props.image} />;
        }}
      />
    );
  }
}

export default Suitcase;
