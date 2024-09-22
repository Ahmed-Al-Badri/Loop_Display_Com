import { Component } from "react";
import Media_data from "../Media_p/media_p";
import Margin from "./margin";
import "./styles.css";
export default class Media extends Component {
  constructor(probs) {
    super(probs);
    this.state = {
      style: probs.cors,
      onClick: probs.onClick,
      data: probs.data || undefined,
      loaded: false,
      onClick: probs.onClick,
    };
  }

  componentDidMount() {
    if (this.state.data) {
      let temp = this.state.style;
      temp.fontSize *= 0.9;
      Media_data.effect(this.state.data.title, (result) => {
        this.setState({
          data: result,
          style: temp,
        });
      });
      this.setState({
        loaded: true,
      });
    }
  }

  render() {
    return (
      <>
        {this.state.loaded == true ? (
          <>
            <div
              style={this.state.style}
              onClick={this.state.onClick}
              className="formating"
            >
              <div className="withplayers">
                <div className="imgplayerfilter">
                  <img
                    className="imgplayer"
                    src={`
                    ${this.state.data.coverArt.sizes.M}`}
                  />
                </div>
                <div className="playerformat">
                  <div className="playertitle">{this.state.data.title}</div>
                  <div className="playerplayers">
                    {Object.entries(this.state.data.player).map(
                      ([name, result], num) => {
                        return (
                          <AudioLoc
                            key={`${num}${name}${result.player.paused}${
                              result.player.current / result.player.max
                            }`}
                            className={"itemsplayers"}
                            onClick={(res) => {
                              this.state.onClick((res, this.state.title));
                            }}
                            titlesmall={name}
                            data={result}
                            title={this.state.data.title}
                          />
                        );
                      }
                    )}
                  </div>
                </div>
                <div
                  onClick={() => {
                    Media_data.pops(this.state.data.title);
                  }}
                >
                  Pop
                </div>
              </div>
            </div>
          </>
        ) : (
          <>Loading Media</>
        )}
      </>
    );
  }
}

class AudioLoc extends Component {
  constructor(probs) {
    super(probs);
    this.probs = probs;
  }

  render() {
    return (
      <>
        <div className={this.probs.className} onClick={this.probs.onClick_2}>
          <div
            onClick={(res) => {
              Media_data.player(
                this.probs.title,
                this.probs.data.player.currentSrc
              );
            }}
          >
            {this.probs.titlesmall}
            {Object.entries(this.probs.data).map(([title, info]) => {
              if (title == "current") {
                return (
                  <Margin
                    key={info}
                    onClick={(result) => {
                      Media_data.player(
                        this.probs.title,
                        this.probs.data.player.currentSrc,
                        result
                      );
                    }}
                    style={{ width: "100%" }}
                    ratio={
                      this.probs.data.current.toFixed(2) / this.probs.data.max
                    }
                  />
                );
              }
            })}
            <div className="NumberString">
              {`${Math.floor(this.probs.data.current / 60)
                .toString()
                .padStart(2, "0")}:${Math.floor(this.probs.data.current % 60)
                .toString()
                .padStart(2, "0")}:${Math.floor(
                (this.probs.data.current % 1) * 100
              )
                .toString()
                .padStart(2, "0")}`}
            </div>
          </div>
        </div>
      </>
    );
  }
}
