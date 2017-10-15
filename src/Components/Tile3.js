import React, { Component } from "react";
import styled from "styled-components";

const Tile3Container = styled.div`
  width: 44%;
  margin: 1% 0 1% 1%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  background: #83bddd;
  border: 5px solid black;
  float: left;
  cursor: pointer;

  @media (max-width: 450px) {
    width: 98%;
    margin: 1%;
  }

  .figures {
    box-shadow: 0px 0px 30px 17px rgba(0, 0, 0, 0.28);
    box-sizing: border-box;
    width: 100%;
    transform: translate(0%, 90%);
  }

  &.animated {
    .figures {
      animation: tile2-figures 1s forwards;
    }
  }

  @keyframes tile2-figures {
    0% {
      transform: translate(0%, 90%);
    }
    100% {
      transform: translate(0%, 0%);
    }
  }

  .text {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  &.animated {
    .text {
      animation: title2-text 1s 1s forwards;
    }
    @keyframes title2-text {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

const figures = <img src="images/tile-3/figures.svg" className="figures" />;

const text = <img src="images/tile-3/text.svg" className="text" />;

export default class Tile3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationPlaying: ""
    };
  }

  triggerAnimation = () => {
    this.setState(prevState => (prevState.animationPlaying = "animated"));
  };

  render() {
    const { animationPlaying } = this.state;
    return (
      <Tile3Container
        className={animationPlaying}
        onClick={this.triggerAnimation}
      >
        {figures}
        {text}
      </Tile3Container>
    );
  }
}
