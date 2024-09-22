import { Component } from "react";
import Words from "../words/Words";

class Loop extends Component {
  constructor(probs) {
    super(probs);
    this.state = {
      amount: 0,
      location: 0,
      style_type: probs.tag_names.data_form,
      data: probs.data,
      data_real: probs.data,
      tag: probs.tag_names.ref_c,
      examp: "",
      focus_: false,
      mounted: false,
      onClick: probs.tag_names.onClick || ((prob, name) => {}),
      title: probs.title,
    };
    this.Screen_title = probs.titQue;
    this.height = 0;
    this.width = 0;
    this.given_width = 0;
    this.cors = [0, 0];
    this.locks = [0, 0];
    this.sizes = [];
    this.margi_t = [];
    this.margi_b = [];
    this.margi_l = [];
    this.margi_t = [];
    this.current = 0;
    this.display_ = 0;
    this.points = 0;
    this.stop = true;
    this.data_sets = [];
    this.data_num = 0;
    this.data_setter = [];
    this.do = 2;
    this.let = 0;
    this.let_b = 0;
    this.let_c = 0;
    this.rotation = 360 * this.do;
    this.window_xy = [];
    this.ss = 0;
    this.font = 10;
    window.addEventListener("resize", (data) => {
      this.set_up_frm();
      this.set_up();
    });
  }

  componentDidMount() {
    this.setState({ mounted: true });
    this.set_up_frm();
    this.set_up();
  }

  change(value) {
    value = {
      amount: this.state.amount + value.deltaY,
      location: this.state.location,
    };
    if (value.amount >= this.points || value.amount < this.points * -1) {
      if (value.amount >= this.points) {
        value.location -= 1;
        if (value.location < 0) {
          value.location = this.data_num - 1;
        }
      } else {
        value.location = (value.location + 1) % this.data_num;
      }
      value.amount = 0;
    }
    if (isNaN(this.state.location)) {
      value.location = 0;
    }
    this.setState(value);
  }

  set_up_frm() {
    this.window_xy = [window.innerWidth, window.innerHeight];
    try {
      this.window = this.state.tag.current;
      if (!this.window) {
        throw "etc";
      }
      this.window = this.state.tag.current;
      this.window_info = this.window.getBoundingClientRect();
      this.height = this.window_info.height;

      this.width = this.window_info.width;
      this.font = (10 * this.width) / 800;
      this.cors[0] = this.window_info.top;
      this.cors[1] = this.window_info.left;
      this.window.addEventListener("wheel", (vals) => {
        vals.preventDefault();
        this.stop = true;
        this.change(vals);
        this.display();
      });
      this.window.addEventListener("scroll", (res) => {
        res.preventDefault();
        this.stop = true;
        this.change(res);

        this.display();
      });
    } catch (error) {}
  }

  set_up(examps = this.state.examp) {
    let s = [];
    this.state.data_real.map((result) => {
      if (examps == "" || com_st(result.title, examps)) {
        s.push(result);
      }
    });
    this.set_up_frm();

    this.display_ = 10;
    this.data_num = s.length;
    if (this.display_ > this.data_num) {
      if (this.display_ > 1) {
        this.display_ = this.data_num;
      } else {
        this.display_ = 1;
      }
    }
    this.points = this.rotation / this.display_;
    this.given_width = 30;
    this.sizes = [];
    this.sizes.push(this.width - 10);
    this.sizes.push(
      Math.floor(this.height / (this.display_ / (2.5 / (this.display_ / 10))))
    );

    if (this.sizes[1] > this.height * 0.4) {
      this.sizes[1] = this.height * 0.4;
    }
    this.locks = [50 / 2.0, this.height / 2];
    this.margi = [this.locks[0], this.locks[1]];
    this.margi_b = [this.margi[0], this.height / 2 - this.sizes[1]];

    this.setState({ data: s, amount: 0, examp: examps });
  }

  display() {
    this.amount = 0;
  }

  click_effect(num) {
    num = num - this.state.location;
    if (num >= this.display_) {
      num = num - this.data_num;
    } else {
      if (num <= -1 * this.display_) {
        num = this.data_num + num;
      }
    }
    this.effect_ck(num * this.points + this.state.amount);
  }

  effect_ck(value) {
    this.stop = false;
    let move_d = 26;
    let move = (-1.0 * value) / move_d;
    let v = setInterval(() => {
      if (this.stop == false && move_d > 0) {
        move_d -= 1;
        this.change({ deltaY: move });
      } else {
        clearInterval(v);
      }
    }, 10);
  }

  loop_cor() {}
  render() {
    if (this.state.mounted == false) {
      return <>Loading</>;
    }
    this.let = this.state.location - this.display_ / 2.0;
    this.data_setter = [];
    if (this.let < 0) {
      this.let = this.data_num + this.let;
    }
    for (
      this.let_b = Math.floor(this.display_ / 2);
      this.let_b <= this.display_ + Math.floor(this.display_ / 2) &&
      this.let_b <= this.data_num + Math.floor(this.display_ / 2);
      this.let_b += 1
    ) {
      this.data_setter.push(
        this.loop_cor(Math.floor(this.points * this.let_b + this.state.amount))
      );
    }
    return (
      <>
        <Words
          wheels={(result) => {
            this.change(result);
          }}
          title={this.state.title}
          className="mainblock"
          Screen_title={this.Screen_title}
          tabIndex={1}
          onKeyDown={(s) => {
            this.set_up(s);
          }}
          style={{ height: "100%", width: "100%" }}
        />
        <div className="display">
          {this.data_setter.map((result, loc) => {
            this.let_b = Math.floor(this.let + loc) % this.data_num;

            let d = this.let_b;
            return (
              <div key={`${result[2]} ${this.let_b} ${loc}`}>
                <this.state.style_type
                  key={`${this.let_b}${this.state.location}${this.state.amount}${this.state.examp}${this.width}${this.height}`}
                  b={this.data_setter[loc][2]}
                  cors={{
                    left: this.data_setter[loc][0] + this.cors[1],
                    top: this.data_setter[loc][1] + this.cors[0],
                    width: `${
                      (100.0 *
                        (this.data_setter[loc][2] * this.sizes[0] -
                          this.data_setter[loc][0])) /
                      this.window_xy[0]
                    }%`,
                    height: `${
                      (100.0 * (this.data_setter[loc][2] * this.sizes[1])) /
                      this.window_xy[1]
                    }%`,
                    fontSize:
                      this.font * this.data_setter[loc][2] +
                      this.data_setter[loc][0] * 0.15,
                    zIndex: this.data_setter[loc][3],
                    opacity: this.data_setter[loc][2],
                    color: "black",
                  }}
                  data={this.state.data[this.let_b]}
                  onClick={(dd, ddb = d, ccd = this.state.data[d].title) => {
                    this.state.onClick(dd, ccd);
                    this.click_effect(ddb);
                  }}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

function com_st(type_1, type_2) {
  let main_num = type_1.length;
  let find_num = type_2.length;
  let lop_1 = 0;
  let lop_2 = 0;
  let type = false;
  for (; lop_1 <= main_num - find_num; lop_1 += 1) {
    for (lop_2 = 0; lop_2 < find_num; lop_2 += 1) {
      if (!(type_1[lop_1 + lop_2] == type_2[lop_2])) {
        lop_2 = find_num;
      }
    }
    if (lop_2 == find_num) {
      lop_1 = main_num;
    }
  }

  if (lop_2 == find_num) {
    type = true;
  }
  return type;
}

export default Loop;
