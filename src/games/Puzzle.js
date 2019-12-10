import React, { Component } from "react";
import originalImage from "../assets/puzzle.webp";
import "./Puzzle.scss";
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import FadingImage from "../helper/FadingImage";

class Puzzle extends Component {
  state = {
    pieces: [],
    shuffled: [],
    solved: []
  };

  componentDidMount() {
    const pieces = [...Array(16)].map((_, i) => ({
      img: `puzzle_${("0" + (i + 1)).substr(-2)}`,
      order: i,
      board: "shuffled"
    }));

    this.setState({
      pieces,
      shuffled: this.shufflePieces(pieces),
      solved: [...Array(16)]
    });
  }

  checkBoard() {
    for (let i = 0; i < this.state.solved.length; i++) {
      if (this.state.solved[i] === undefined) {
        return false;
      }
    }
    this.props.onCheckBoard(true);
  }

  handleDrop(e, targetName) {
    let target = this.state[targetName];
    const pieceOrder = e.dragData.piece.order;
    if (target[pieceOrder]) return;

    const pieceData = this.state.pieces.find(p => p.order === +pieceOrder);
    const origin = this.state[pieceData.board];

    if (targetName === pieceData.board) target = origin;
    origin[origin.indexOf(pieceData)] = undefined;
    target[pieceOrder] = pieceData;
    pieceData.board = targetName;

    this.setState({ [pieceData.board]: origin, [targetName]: target });
    this.checkBoard();
  }

  // onDrag(dragData, currentTarget, x, y) {
  //   console.log(dragData, currentTarget, x, y)
  //   var rect = currentTarget.getBoundingClientRect();
  //   currentTarget.style.left = rect.x - 500 + 'px';
  //   currentTarget.style.top  = rect.y - 500 + 'px';
  // }

  render() {
    return (
      <div className='puzzleBox'>
        <p className="description">Setze den Stadtplan richtig zusammen, indem du die einzelnen Kartenausschnitte auf die entsprechende vorgezeichnete Stelle des leeren Planes ziehst. Wenn du das Puzzle richtig gelöst hast, kommst du weiter zur Ortgruppe. </p>
        <div className='puzzle'>
          <ul className='puzzle__shuffled-board'>
            {this.state.shuffled.map((piece, i) => this.renderPieceContainer(piece, i, "shuffled"))}
          </ul>
          <ol className='puzzle__solved-board' style={{ backgroundImage: `url(${originalImage})` }}>
            {this.state.solved.map((piece, i) => this.renderPieceContainer(piece, i, "solved"))}
          </ol>
          <button type='button' className='link-button' onClick={() => this.props.onCheckBoard(true)}>Du kennst eine Abkürzung und gehst direkt zur Ortsgruppe.</button>
        </div>
      </div>
    );
  }

  renderPieceContainer(piece, index, boardName) {
    const boardContent = (boardName === "shuffled") ? 
    <DragDropContainer key={index} targetKey="puzzle" dragData={{piece: piece}} onDrop={e => this.handleDrop(e, "solved")}>
      <DropTarget targetKey="puzzle">
        <li>{piece && (<FadingImage source={piece.img} />)}</li>
      </DropTarget>
    </DragDropContainer> :
    <DropTarget key={index} targetKey="puzzle">
      <li >{piece && (<FadingImage source={piece.img} />)}</li>
    </DropTarget>
    return boardContent;
  }

  shufflePieces(pieces) {
    const shuffled = [...pieces];

    for (let i = shuffled.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let tmp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = tmp;
    }

    return shuffled;
  }
}

export default Puzzle;
