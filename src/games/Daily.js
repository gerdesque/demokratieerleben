import React, { Component } from "react";
import "./Daily.css";
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import FadingImage from "../helper/FadingImage";

var shortid = require('shortid');
const dailyPlanItems = ["Waschen und Baden", "Frühstück", "Wanderungen machen", "Sprechstunde des Lagerarztes", 
"Lagerruhe - Post- und Zeitungsausgabe", "Tagung des Lagerparlaments", "Gemeinsame Veranstaltungen", "Zeltruhe"];
const dailyPlanSchedule = ["Morgens 6 Uhr", "Morgens 8 Uhr", "Morgens 8 ½ – 12 Uhr ", "Morgens 8 ½ – 9 ½", "Mittags 12 ½ – 14 ½ ",
"Nachmittags 14 ½ – 19 Uhr", "Abends 19 ½ – 21 Uhr", "Abends 21 Uhr"]

class Daily extends Component {

  constructor(props) {
    super(props);
    this.state = {
      boxCount: 0,
      showResult: false
    };
  }

  handleClick = () => {
    this.setState({showResult: true})
    this.props.onCheckDaily();
};

  render() {
    const daily = this.state.showResult ? 
      <FadingImage direction='daily_result' source='daily_result' /> : 
      <>
      <Box targetKey="box"/>
      <button type='button' className='link-button' onClick={this.handleClick}>Tagesplan prüfen!</button>
      </>
    return (
      <div className="daily">
        <p className="description">Spielbeschreibung einfügen!</p>
        <div className="items">
        {dailyPlanItems.map((item, index) =>
          <Items key={index} targetKey="box" label={item} id={index} />
        )}
        </div>
        {daily}
      </div>
    )
  }
}

class Items extends React.Component {
  render() {
    return (
      <div className="item">
          <DragDropContainer targetKey={this.props.targetKey} dragData={{label: this.props.label}}>
            <p>{this.props.label}</p>
          </DragDropContainer>
        </div>  
    );
  }
}

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  handleDrop = (e) => {
    let items = this.state.items.slice();
    items.push({label: e.dragData.label, uid: shortid.generate()});
    this.setState({items: items});
    e.containerElem.style.visibility="hidden";
  };

  swap = (fromIndex, toIndex, dragData) => {
    let items = this.state.items.slice();
    const item = {label: dragData.label, uid: shortid.generate()};
    items.splice(toIndex, 0, item);
    this.setState({items: items});
  };

  kill = (uid) => {
    let items = this.state.items.slice();
    const index = items.findIndex((item) => {
      return item.uid === uid
    });
    if (index !== -1) {
      items.splice(index, 1);
    }
    this.setState({items: items});
  };

  render() {
    return (
      <div>
          <DropTarget
            onHit={this.handleDrop}
            targetKey={this.props.targetKey}
            dropData={{name: this.props.name}}>
            <DropTarget
              onHit={this.handleDrop}
              targetKey="boxItem"
              dropData={{name: this.props.name}}>
              <div className="component_box">
                {this.state.items.map((item, index) => {
                  return (
                    <BoxItem key={item.uid} uid={item.uid} kill={this.kill} index={index} swap={this.swap}>
                      {item.label}
                    </BoxItem>
                  )
                })}
              </div>
            </DropTarget>
          </DropTarget>
      </div>
    );
  }
}

class BoxItem extends React.Component {
  
  handleDrop = (e) => {
    e.stopPropagation();
    this.props.swap(e.dragData.index, this.props.index, e.dragData);
    e.containerElem.style.visibility="hidden";
  };

  deleteMe = () => {
    this.props.kill(this.props.uid);
  };

  render() {
    return (
      <div className="box_item_component">
        <DragDropContainer
            targetKey="boxItem"
            dragData={{label: this.props.children, index: this.props.index}}
            onDrop={this.deleteMe}
            disappearDraggedElement={true}
            dragHandleClassName="grabber">
            <DropTarget
              onHit={this.handleDrop}
              targetKey="boxItem">
              <div className="outer">
                <div className="item">
                  <span className="grabber">&#8759;</span>
                  {dailyPlanSchedule[this.props.index]}
                  <span>&emsp;</span>
                  {this.props.children}
                </div>
              </div>
          </DropTarget>
        </DragDropContainer>
      </div>
    );
  }
}

export default Daily;