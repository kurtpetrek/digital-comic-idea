import React, { Component } from "react";

import Tile1 from "./Components/Tile1";
import Tile2 from "./Components/Tile2";
import Tile3 from "./Components/Tile3";

class App extends Component {
  render() {
    return (
      <div>
        <Tile1 />
        <Tile2 />
        <Tile3 />
      </div>
    );
  }
}

export default App;
