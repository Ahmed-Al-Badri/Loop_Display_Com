import DDOD from "./DDOD";
import { Line, Circle, Triangle } from "./DDOD";

export default class WHITE {
  constructor(link, color) {
    this.link = link;
    this.location = this.link.getBoundingClientRect();
    this.doc = link.getContext("2d");
    this.color = color || "255,44,66";
    this.stat_sets = [
      [this.location.width, this.location.height, 30],
      [1, 1],
      [1, 1],
      this.color,
    ];
    this.DDOD_amount = 80;
    this.DDODs = [];
    this.stat_Intervel = null;
    this.move = 0;
    this.EventListeners();
    this.setup();
    this.start();
  }

  create() {
    this.move = Math.random();
    if (this.move < 0.05) {
      return Line;
    }
    if (this.move < 0) {
      return Triangle;
    }
    return Circle;
  }
  setup() {
    for (let d = 0; d < this.DDOD_amount; d += 1) {
      this.DDODs.push(new (this.create())(this.stat_sets));
    }
  }

  start() {
    this.stop();
    this.stat_Intervel = setInterval(() => {
      this.doc.beginPath();
      this.doc.clearRect(0, 0, window.innerWidth, window.innerHeight);
      this.doc.stroke();
      this.frame();
    }, 20);
  }

  stop() {
    if (this.stat_Intervel != null) {
      clearInterval(this.stat_Intervel);
    }
  }

  frame() {
    this.DDODs.map((result, vals) => {
      if (result.done) {
        this.DDODs[vals] = new (this.create())(this.stat_sets);
        result = this.DDODs[vals];
      }
      result.draw(this.doc);
      for (this.move = vals + 1; this.move < this.DDOD_amount; this.move += 1) {
        this.line(result, this.DDODs[this.move]);
      }
    });
  }

  line(object1, object2) {
    let amount = object2.pows(object1);
    if (amount < (100.0 * window.innerWidth) / 1800) {
      this.doc.beginPath();
      this.doc.strokeStyle = `rgba(${this.color}, ${
        1.0 - amount / ((100.0 * window.innerWidth) / 1800)
      })`;
      this.doc.moveTo(object1.cors[0], object1.cors[1]);
      this.doc.lineTo(object2.cors[0], object2.cors[1]);
      this.doc.stroke();
    }
  }

  EventListeners() {
    this.link.addEventListener("mousemove", (res) => {
      this.DDODs[0].Mouse_Move(
        res.x - this.location.x,
        res.y - this.location.y
      );
    });
  }
}
