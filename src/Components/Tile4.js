import React, { Component } from "react";
import styled from "styled-components";

const Tile4Container = styled.div`
  width: 53%;
  margin: 1%;
  position: relative;
  float: right;
  background: #83bddd;
  overflow: hidden;
  border: 5px solid black;
  box-sizing: border-box;
  cursor: pointer;

  @media (max-width: 450px) {
    width: 98%;
    margin: 1%;
  }

  .ground {
    position: absolute;
    bottom: 0;
    width: 110%;
  }

  .hero {
    width: 50%;
    position: absolute;
    bottom: 0;
    right: 5%;
    transform: translate(100%, 0%);
  }

  &.animated {
    .hero {
      animation: tile-4-hero 1s forwards;
    }
    @keyframes tile-4-hero {
      0% {
        transform: translate(100%, 0%);
      }
      100% {
        transform: translate(0%, 0%);
      }
    }
  }

  .enemies {
    position: relative;
    transform: translate(100%, 0%);
  }

  &.animated {
    .enemies {
      animation: tile-4-enemies 0.5s 1s forwards;
    }
    @keyframes tile-4-enemies {
      0% {
        transform: translate(100%, 0%);
      }
      100% {
        transform: translate(0%, 0%);
      }
    }
  }
`;

const ground = <img src="images/tile-4/ground.svg" className="ground" />;

const hero = <img src="images/tile-4/hero.svg" className="hero" />;

const enemies = <img src="images/tile-4/enemies.svg" className="enemies" />;

export default class Tile4 extends Component {
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
      <Tile4Container
        className={animationPlaying}
        onClick={this.triggerAnimation}
      >
        {ground}
        {hero}
        {enemies}
      </Tile4Container>
    );
  }
}
