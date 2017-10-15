import React, { Component } from "react";
import styled from "styled-components";

const Tile1Container = styled.div`
  box-sizing: border-box;
  width: 98%;
  max-height: 165px;
  height: 30vw;
  position: relative;
  overflow: hidden;
  margin: 1%;
  background: #66323f;
  border: 5px solid black;
  animation-play-state: paused;
  cursor: pointer;

  svg,
  div,
  img {
    position: absolute;
    height: 100%;
    top: 0;
    left: -22%;
    width: 140%;
    animation-play-state: inherit;
  }

  .figures {
    animation: tile1-figures 5s forwards;
    animation-play-state: inherit;
  }

  @keyframes tile1-figures {
    0% {
      transform: translate(0%, 20%);
    }
    70%,
    100% {
      transform: translate(0%, 0%);
    }
  }

  .shadows {
    animation: tile1-shadows 5s forwards;
    animation-play-state: inherit;
  }

  @keyframes tile1-shadows {
    0% {
      transform: translate(0%, 40%) scale(1);
    }
    70%,
    100% {
      transform: translate(0%, 0%) scale(1);
    }
  }

  .text {
    animation: tile1-text 5s forwards;
    animation-play-state: inherit;
  }

  @keyframes tile1-text {
    0% {
      transform: translate(0%, 40%);
      opacity: 0;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: translate(0%, 0%);
      opacity: 1;
    }
  }

  .highlight {
    top: 0;
    left: 0;
    background: linear-gradient(
      to bottom,
      rgba(248, 80, 50, 0) 0%,
      rgba(242, 184, 82, 0) 37%,
      rgba(240, 220, 93, 0.12) 50%,
      rgba(240, 220, 93, 0) 75%
    );
    background-size: 300%;
    animation: tile1-highlight 5s infinite;
    animation-play-state: inherit;
  }

  @keyframes tile1-highlight {
    0% {
      background-position: top;
    }
    100% {
      background-position: bottom;
    }
  }
`;

const figures = <img src="images/tile-1/figures.svg" className="figures" />;

const shadows = <img src="images/tile-1/shadows.svg" className="shadows" />;

const text = <img src="images/tile-1/text.svg" className="text" />;

export default class Tile1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: "paused"
    };
  }

  playAnimation = () => {
    this.setState(prevState => (prevState.playState = "running"));
  };

  render() {
    return (
      <Tile1Container
        style={{ animationPlayState: this.state.playState }}
        onClick={this.playAnimation}
      >
        {shadows}
         {figures}
        {text}
        <div className="highlight" />
      </Tile1Container>
    );
  }
}
