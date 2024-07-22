import React from "react";
import { Component } from "react";
import { useRef } from "react";
import Media_data from "../Media_p/media_p";

export default class Displayer extends Component {
  constructor(probs) {
    //style, data_form, data, tag
    super(probs);
    this.state = {
      style_: probs.style_,
      data_form: probs.data_form,
      data: probs.data || [],
      ref_c: React.createRef(),
      loaded: false,
      onclick: probs.onclick,
      title: probs.title,
    };
  }

  componentDidMount() {
    this.setState({ data: [[], this.state.data], loaded: true });
  }

  render() {
    return (
      <div
        className="mainformatter"
        style={{ width: "80%", height: "30vh" }}
        ref={this.state.ref_c}
      >
        {this.state.loaded == true && this.state.data.length > 0
          ? this.state.data.map((result, loc) => {
              if (result.length > 0) {
                return (
                  <this.state.style_
                    title={this.state.title}
                    key={`${this.state.data.length}${Math.random() * 100}${
                      this.state.data
                    }`}
                    data={result}
                    tag_names={this.state}
                  />
                );
              }
            })
          : "not loaded"}
      </div>
    );
  }
}

//use formatt
//render Displayer style_{vertical} requires array and a title inside, style is format and inside data_form, data is the required data, array is best

class Displayer_qu extends Displayer {
  componentDidMount() {
    Media_data.set_process([
      this.state.title || "Displayer album",
      (new_data) => {
        this.setState({ data: [[], new_data] });
        this.setState({ loaded: true });
      },
      () => {
        this.setState({ loaded: false });
      },
    ]);
    super.componentDidMount();
  }
}

export { Displayer_qu };
