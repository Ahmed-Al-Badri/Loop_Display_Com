import React from "react";
import { Component } from "react";
import "./styles.css";
export default class Words extends Component {
  constructor(probs) {
    super(probs);
    this.state = {
      style: probs.style,
      tabIndex: probs.tabIndex,
      classname: probs.classname,
      onKeyDown: probs.onKeyDown,
      string: probs.string || "",
      title: probs.title || "",
      ref: React.createRef(),
      loads: false,
    };
    this.wheels = probs.wheels;
    this.tag = React.createRef();
    this.dis_stri = probs.title || "Click and Type";
    this.per = 12;
    this.hold = [[]];
    this.lengths = 0;
    this.stn_break = null;
    this.temp = 0;
  }

  onclicks() {}

  componentDidMount() {
    this.tag.current.addEventListener("wheel", (result) => {
      result.preventDefault();
      this.wheels(result);
    });
    this.setState({ loads: true });
  }

  onkeys(key_down) {
    let string_ = this.state.string;
    if (key_down.key.length == 1) {
      if (key_down.key == " ") {
        key_down.preventDefault();
      }
      if (!(string_ == "" && key_down.key == " ")) {
        string_ += key_down.key;
      }
    } else {
      if (key_down.key == "Enter") {
      }
      if (key_down.key == "Backspace") {
        string_ = string_.slice(0, -1);
        if (string_[string_.length - 1] == " ") {
          string_ = string_.slice(0, -1);
        }
      }
    }
    string_ = string_.replace("  ", " ");
    this.state.onKeyDown(string_);
    this.setState({ string: string_, loads: true });
  }

  render() {
    this.lengths = this.state.string.length;
    this.hold = this.state.string.split(" ");
    return (
      <div ref={this.tag}>
        {this.state.loads == true ? (
          <div
            onKeyDown={(val) => {
              this.onkeys(val);
            }}
            style={this.state.style}
            tabIndex={1}
            ref={this.state.ref}
            className={`${this.state.classname} stringformat`}
          >
            {this.state.string != "" ? (
              <>
                {this.hold.map((result) => {
                  if (result[0] != " " && result != "") {
                    return (
                      <div className="charletter" key={result}>
                        {result}
                      </div>
                    );
                  }
                })}
              </>
            ) : (
              <div className="charletter">{this.dis_stri}</div>
            )}
          </div>
        ) : (
          <>Loading Data</>
        )}
      </div>
    );
  }
}
