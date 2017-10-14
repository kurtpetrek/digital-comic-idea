import React, { Component } from "react";

import Tile1 from "./Components/Tile1";
import Tile2 from "./Components/Tile2";
import Tile3 from "./Components/Tile3";
import Tile4 from "./Components/Tile4";
import Tile5 from "./Components/Tile5";

class App extends Component {
  render() {
    return (
      <div style={{ margin: "auto", maxWidth: "550px" }}>
        <Tile1 />
        <Tile2 />
        <Tile3 />
        <Tile4 />
        <Tile5 />
      </div>
    );
  }
}

export default App;
