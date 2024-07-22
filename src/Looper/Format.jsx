import { Component } from "react";
import "../styles/format.css";
import "./style/styles.css";
import Media_data from "../Media_p/media_p";

let extb = [];

export default class Format extends Component {
  constructor(vals) {
    super(vals);
    this.state = { data: vals.data, mounted: false };
    this.b = vals.b;
    this.cors = vals.cors;
    if (
      isNaN(this.cors.top) ||
      isNaN(vals.cors.left) ||
      isNaN(vals.cors.fontSize)
    ) {
      this.cors = {};
    }
    this.onc = vals.onClick;
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {
    if (this.state.mounted == false) {
      return "Loading Format";
    }
    try {
      return (
        <div
          tabIndex={4}
          onClick={this.onc}
          className="format"
          style={this.cors}
        >
          <div
            className="imgformat"
            onClick={() => {
              this.pause_all();
            }}
          >
            <img
              className="imgformat"
              src={`${this.state.data.coverArt.sizes.XS}`}
            />
          </div>
          <div className="infoformat">
            <div
              style={{ fontsize: this.cors.fontsize }}
              className="infoformattop"
            >
              {this.state.data.title}
            </div>
            <div className="infoformatresults">
              {Object.entries(this.state.data.stems).map(([names, value]) => {
                return (
                  <Sound
                    onClick={() => {
                      Media_data.pushs(this.state.data);
                    }}
                    title={this.state.data.title}
                    datas={{ type: names, etc: this.state.data }}
                    style={{ fontSize: this.cors.fontSize }}
                    tabIndex={3}
                    key={this.state.data.title + names}
                    data={{ name: names, url: value.mplc }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      );
    } catch (error) {
      return (
        <div className="format" style={this.cors}>
          Still working
        </div>
      );
    }
  }

  pause_all() {
    extb.map((data) => {
      data.pause();
    });
  }
}

class Sound extends Component {
  constructor(values) {
    super(values);
    this.state = {
      style: values.style,
      data: values.data,
      active: false,
      url: values.data.url,
      player: undefined,
      entire: values,
      title: values.title,
      onClick: values.onClick,
    };
  }

  async play() {
    if (this.state.active == false) {
      if (this.state.player == undefined) {
        await this.setState({
          active: true,
          player: new Audio(this.state.url),
        });
      }
      extb.push(this.state.player);
      this.state.player.play();
    } else {
      this.state.player.pause();
      this.setState({ active: false });
    }
  }

  render() {
    return (
      <div
        style={this.state.entire.style}
        tabIndex={this.state.entire.tabIndex}
        onClick={() => {
          try {
            this.state.onClick();
            Media_data.player(this.state.title, this.state.url);
          } catch (error) {}
        }}
      >
        {this.state.data.name}
      </div>
    );
  }
}
