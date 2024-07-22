class data {
  constructor(probs = undefined) {
    this.main_data = [];
    this.find = false;
    this.plays = [];
    this.set_in = 0;
    this.dos = [];

    this.playing = [];
    this.play_sent = [];

    this.moves();
  }

  pushs(data, play = "", event = undefined) {
    this.find = false;
    this.main_data.map((result) => {
      if (result.length > 0) {
        if (result[0].title == data.title) {
          this.find = true;
        }
      }
    });
    if (!this.find) {
      data.player = {};
      Object.entries(data.stems).map(([name, datas]) => {
        data.player[name] = {
          player: new Audio(datas.mplc),
          current: 0,
          max: 0,
        };
      });
      this.main_data.push([data, event]);
      this.form_data();
    }
    if (play != "") {
      this.find = 0;
      this.plays.map((res, keys) => {
        if (res[0] == data.title) {
          this.find == 1;
          res[1].map((info, key) => {
            if (info == play) {
              this.find = 2;
            }
          });
          if (this.find == 1) {
            this.plays[keys][1].push(play);
          }
        }
      });
      if (this.find == 0 && this.find != "") {
        this.plays.push([data.title, [play]]);
      }
    }
  }

  effect(title, effect) {
    this.main_data.map((result, vals) => {
      if (result.length > 0 && result[0].title == title) {
        this.main_data[vals][1] = effect;
      }
    });
  }

  update_chg(resul, find) {
    this.main_data.map((result, key) => {
      if (result.length > 0 && result.title == find) {
        this.main_data[key][1] = resul;
      }
    });
  }

  moves() {
    let bsms = [];
    this.set_in = setInterval(() => {
      bsms = [];
      this.main_data.map((result, key) => {
        if (result.length > 0 && result[1] != undefined) {
          this.plays.map((ply_info) => {
            if (ply_info[0] == result[0].title) {
              ply_info[1].map((finds_) => {
                Object.entries(result[0].stems).map(([ssm, value]) => {
                  if (value.mplc == finds_) {
                    this.main_data[key][0].player[ssm].current =
                      this.main_data[key][0].player[ssm].player.currentTime ||
                      0;
                    this.main_data[key][0].player[ssm].max =
                      this.main_data[key][0].player[ssm].player.duration || 0;
                    this.main_data[key][1](this.main_data[key][0]);
                    bsms.push([
                      this.main_data[key][0],
                      ssm,
                      this.main_data[key][0].player[ssm],
                    ]);
                  }
                });
              });
            }
          });
        }
      });
      this.playing.map((res) => {
        res[1](bsms);
      });
    }, 100);
  }

  form_data() {
    if (this.dos.length > 0) {
      let b = [];
      this.main_data.map((result) => {
        if (result.length > 0) {
          b.push(result[0]);
        }
      });
      this.dos.map((res) => {
        res[1](b);
      });
    }
  }

  set_process(info) {
    this.find = false;
    this.dos.map((resu, key) => {
      if (resu[0] == info[0]) {
        this.find = true;
        this.dos[key][1] = info[1];
      }
    });
    if (!this.find) {
      this.dos.push(info);
    }
  }

  player(title, url, move = -1) {
    this.find = false;
    this.main_data.map((result, val) => {
      if (result.length > 0 && result[0].title == title) {
        Object.entries(result[0].stems).map(([type, datas]) => {
          if (this.main_data[val][0].player[type].player.readyState < 2) {
            let wait = setInterval(() => {
              if (this.main_data[val][0].player[type].player.readyState > 1) {
                clearInterval(wait);
              }
            }, 500);
          }
          url = url.replace(/%20/g, " ");
          if (datas.mplc == url) {
            if (move == -1) {
              if (this.main_data[val][0].player[type].player.paused) {
                this.main_data[val][0].player[type].player.play();
                this.plays.push([title, [url]]);
              } else {
                this.main_data[val][0].player[type].player.pause();
              }
            } else if (move != -1) {
              this.main_data[val][0].player[type].player.currentTime =
                this.main_data[val][0].player[type].player.duration * move;
            }
          }
        });
      }
    });
    move = -1;
  }

  pops(title) {
    this.find = false;
    this.main_data.map((res, val) => {
      if (res.length > 0 && res[0].title == title) {
        Object.entries(res[0].player).map(([name, result]) => {
          this.main_data[val][0].player[name].player.pause();
        });
        this.main_data[val] = [];
        this.find = true;
      }
    });
    if (this.find == true) {
      this.form_data();
    }
  }
}
let Media_data = new data();
export default Media_data;
