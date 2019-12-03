import React, { Component } from "react";
import "./Memory.css";
import FadingImage from "../helper/FadingImage";

class Memory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ['geschirrspülerei','heimfahrt','ordnung','schlaf','schwimmen','seekamp','zeltaufbau','zeltgemeinschaft'],
      duplicatedItems: [],
      randomizedItems: [],
      finalizedItems: [],
      openedItems: []
    }
    this.start()
  }

  handleClick(name,index){
    if (this.state.openedItems.length === 2) {
      setTimeout(() => { this.checkItems() },1000)
    } else {
      let item = { name, index }
      let finalizedItems = this.state.finalizedItems
      let items = this.state.openedItems
      finalizedItems[index].close = false
      items.push(item)
      this.setState({ openedItems: items, finalizedItems: finalizedItems })
      if (this.state.openedItems.length === 2) {
        setTimeout(() => { this.checkItems() },1000)
      }
    }
  }

  isSamePair() {
    const isDifferentItem = this.state.openedItems[0].index !== this.state.openedItems[1].index;
    const isPair = this.state.openedItems[0].name.startsWith(this.state.openedItems[1].name) ||
      this.state.openedItems[1].name.startsWith(this.state.openedItems[0].name)
    return isDifferentItem && isPair ? true : false;
  }

  checkItems(){
    let finalizedItems = this.state.finalizedItems
    if(this.isSamePair()) {
      finalizedItems[this.state.openedItems[0].index].complete = true
      finalizedItems[this.state.openedItems[1].index].complete = true
    } else {
      finalizedItems[this.state.openedItems[0].index].close = true
      finalizedItems[this.state.openedItems[1].index].close = true
    }
    this.setState({ finalizedItems, openedItems: [] })
  }

  start(){
    let finalizedItems = [];
    const alternateItems = this.state.items.map((item) => item.concat("2"));
    this.state.duplicatedItems = this.state.items.concat(alternateItems)
    this.state.randomizedItems = this.shuffleItems(this.state.duplicatedItems)
    this.state.randomizedItems.map((name,index) => {
      finalizedItems.push({
        name,
        close: true,
        complete: false,
        fail: false
      })
    })
    this.state.finalizedItems = finalizedItems
  }

  shuffleItems(array){
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array
  }

  render(){
    return (
      <div className="memory">
        <p className="description">Spielbeschreibung einfügen!</p>
        {this.state.finalizedItems.map((item, index) => {
            return <Card item={item.name} click={() => {this.handleClick(item.name,index)}} close={item.close} complete={item.complete}/>
          })}
      </div>
    )
  }
}

class Card extends React.Component {
  clicked(item){
    this.props.click(item)
  }

  render(){
    return (
      <div className={"card" + (!this.props.close ? ' opened' : '') + (this.props.complete ? ' matched' : '')} 
        onClick={() => this.clicked(this.props.item)}>
        {!this.props.complete && <div className="front">
          <FadingImage direction='logo' source='logo' />
        </div>}
        <div className="back">
          <FadingImage direction='logo' source={this.props.item} />
        </div>
      </div>
    )
  }
}

export default Memory;