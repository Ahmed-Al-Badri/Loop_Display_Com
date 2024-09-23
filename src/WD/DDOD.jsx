export default class DDOD {
  constructor(corss, speeds, size, color) {
    this.base_c = corss;
    this.cors = [];
    this.cors = [
      Math.floor(Math.random() * corss[0]),
      Math.floor(Math.random() * corss[1]),
      Math.floor(Math.random() * corss[2]),
    ];
    this.base = this.cors;
    this.speed = speeds[0] + (speeds[1] - speeds[0]) * Math.random();
    this.size = size;
    this.radius = () => {
      return (
        this.size[0] +
        (this.size[1] - this.size[0]) *
          (Math.sqrt(Math.pow(this.cors[2], 2)) /
            Math.sqrt(Math.pow(this.base_c[2], 2)))
      );
    };
    this.color = () => {
      return `rgba(${color}, ${1.0 - this.cors[2] / this.base_c[2]})`;
    };
    this.angle = [2.0 * Math.PI * Math.random(), 2.0 * Math.PI * Math.random()];
    this.loop = null;
    this.fo = 0;
    this.done = false;
    this.start();
  }

  start() {
    this.end();
    this.loop = setInterval(() => {
      this.framing();
    }, 20);
  }

  end() {
    if (!this.loop) {
      clearInterval(this.loop);
    }
  }

  framing() {} // for classes that extend this class

  check() {
    if (this.done) {
      this.end();
    } else {
      for (this.fo = 0; this.fo < 2; this.fo += 1) {
        if (
          0 > this.cors[this.fo] ||
          this.base_c[this.fo] < this.cors[this.fo] ||
          this.speed < 1
        ) {
          this.done = true;
          this.end();
          this.fo = 3.1;
        }
        if (0 > this.cors[2] || this.base_c[2] < this.cors[2]) {
          this.angle[1] += Math.PI / 2.0;
        }
      }
    }
  }

  draw(draw_box) {
    draw_box.beginPath();
    draw_box.strokeStyle = this.color();
    draw_box.arc(this.cors[0], this.cors[1], this.radius(), 0, 2.0 * Math.PI);
    draw_box.fill();
    draw_box.stroke();
  }

  pows(object) {
    return Math.sqrt(
      Math.pow(this.cors[0] - object.cors[0], 2) +
        Math.pow(this.cors[1] - object.cors[1], 2) +
        Math.pow(this.cors[2] - object.cors[2], 2)
    );
  }

  Mouse_Move(x, y) {
    this.cors[0] = x;
    this.cors[1] = y;
  }
}

class Line extends DDOD {
  constructor(args) {
    super(args[0], args[1], args[2], args[3]);
  }

  framing() {
    this.cors[0] =
      this.cors[0] + Math.floor(Math.cos(this.angle[0]) * this.speed);
    this.cors[1] =
      this.cors[1] + Math.floor(Math.sin(this.angle[0]) * this.speed);
    this.cors[2] = this.cors[2] + Math.cos(this.angle[1]) * this.speed;
    this.check();
  }
}

let s = window.innerWidth / 1600;
class Circle extends DDOD {
  constructor(args) {
    super(args[0], args[1], args[2], args[3]);
    this.time = 500 + 400 * Math.random();
    this.radius_c = Math.PI / 40.0;
    this.line = this.speed * (4 + Math.random());
    this.line *= s;
  }

  framing() {
    this.time -= 50;
    this.angle[0] += this.radius_c;
    this.cors[0] =
      this.base[0] + Math.floor(Math.cos(this.angle[0]) * this.line);
    this.cors[1] =
      this.base[1] + Math.floor(Math.sin(this.angle[0]) * this.line);

    this.check();
  }

  check() {
    if (this.time < 0) {
    }
    super.check();
  }

  Mouse_Move(x, y) {
    this.base[0] = x;
    this.base[1] = y;
  }
}

class Triangle extends DDOD {
  constructor(args) {
    super(args[0], args[1], args[2], args[3]);
    this.line = this.cors[2];
    this.line = Math.floor(this.line * 3.0 + this.line * Math.random());
    this.stat_c = 3;
    this.cur = 0;
    this.stat_line = 0;
    this.stat_angs = [(Math.PI / 18.0) * 12.6666, Math.PI * Math.random()];
    this.cori = [[]];
    this.set_angs();
    this.stop_line = Math.sqrt(
      Math.pow(this.line, 2) * 2.0 -
        2.0 * this.line * 2.0 * Math.cos((63.33 * Math.PI) / 18.0)
    );
    this.temp = 0;
  }

  set_angs() {
    this.cori = [
      this.tri_set(this.stat_angs[0] + this.stat_angs[1]),
      this.tri_set(this.stat_angs[0] * 2.0 + this.stat_angs[1]),
      this.tri_set(this.stat_angs[0] * 3.0 + this.stat_angs[1]),
    ];
  }

  tri_set(angs) {
    return [
      Math.floor(this.base[0] + Math.cos(angs) * this.line),
      Math.floor(this.base[1] + Math.sin(angs) * this.line),
    ];
  }

  framing() {
    this.temp = this.stat_angs[0] * this.cur + this.stat_angs[1];
    this.cors[0] =
      this.cori[this.cur][0] + Math.floor(Math.cos(this.temp) * this.stat_line);

    this.cors[1] =
      this.cori[this.cur][1] + Math.floor(Math.sin(this.temp) * this.stat_line);
    this.stat_line += this.speed;

    if (this.stat_line > this.stop_line) {
      this.stat_line = 0;
      this.cur = (this.cur + 1) % this.stat_c;
    }
    this.check();
  }

  Mouse_Move(x, y) {
    this.base[0] = x;
    this.base[1] = y;
    this.set_angs();
  }
}

export { Line, Circle, Triangle };
