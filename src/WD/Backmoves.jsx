import React from "react";
import { Component } from "react";
import WHITE from "./Control";
export default class Backmoves extends Component {
  constructor(probs) {
    super(probs);
    this.state = {
      tag: React.createRef(),
    };
    this.background_holder = undefined;
  }

  componentDidMount() {
    this.background_holder = new WHITE(
      document.getElementById("aa"),
      "220, 220, 220"
    );
  }

  render() {
    return (
      <div className="backMoves" style={{ width: 0, height: 0 }}>
        <canvas
          width={window.innerWidth}
          height={window.innerHeight}
          ref={this.state.tag}
          id="aa"
          style={{
            zIndex: -5,
            top: 0,
            left: 0,
            position: "absolute",
          }}
        />
      </div>
    );
  }
}
