import React from "react";
import { Component } from "react";

export default class Margin extends Component {
  constructor(probs) {
    super(probs);
    this.state = {
      ratio: this.props.ratio || 0,
      style: probs.style,
      loaded: false,
      tag: React.createRef(),
      onClick: probs.onClick,
    };
    this.width = 0;
    this.left = 0;
  }

  componentDidMount() {
    this.setState({ loaded: true });
    this.color();
  }

  color() {
    let hold = document.getElementById(this.state.tag);
    let draw = this.state.tag.current.getContext("2d");
    let hw = this.state.tag.current.getBoundingClientRect();
    this.width = hw.width;
    this.left = hw.left;
    draw.fillStyle = "rgb(10,10,10)";
    draw.beginPath();
    draw.fillRect(
      0,
      0,
      this.state.tag.current.width,
      this.state.tag.current.height
    );
    draw.stroke();

    draw.fillStyle = "rgb(240,240,240)";
    draw.beginPath();
    draw.fillRect(
      0,
      0,
      this.state.tag.current.width * this.state.ratio,
      this.state.tag.current.height
    );
    draw.stroke();
  }

  render() {
    return (
      <>
        <div style={this.state.style} className="margin">
          <canvas
            ref={this.state.tag}
            onClick={(result) => {
              this.state.onClick((result.clientX - this.left) / this.width);
            }}
            className="margincanvas"
          />
          {this.state.loaded == true ? <></> : <>Loading A</>}
        </div>
      </>
    );
  }
}
