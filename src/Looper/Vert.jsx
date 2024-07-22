import Loop from "./Vert_main";

class Vertical extends Loop {
  constructor(val) {
    super(val);
  }
  loop_cor(degrees) {
    let info = this.loop_degrees(degrees);
    return info;
  }

  loop_degrees(amount) {
    let data = [];

    data.push(Math.PI * 2 * (amount / this.rotation));
    data[0] = data[0] % (Math.PI * 2);
    this.let_c = [data[0], 0];
    data.push(this.locks[0] + Math.cos(data[0]) * this.margi[0] * 0.9);

    if (
      (data[0] > Math.PI && data[0] <= Math.PI * 2) ||
      (data[0] <= 0 && data[0] > Math.PI * -1)
    ) {
      data.push(this.locks[1] + Math.sin(data[0]) * this.margi[1]);
    } else {
      data.push(this.locks[1] + Math.sin(data[0]) * this.margi_b[1]);
      this.let_c[1] = 1;
    }
    data.push(Math.cos(data[0]) * 25 + 75);

    data[0] = data[1];
    data[1] = data[2];
    data[2] = data[3] / 100.0;
    data[3] = Math.floor(((data[3] + 17.5) / 100) * this.data_num * 2);
    if (this.let_c[1] == 1) {
      this.let_c; //Math.sin(data[0]) * (1.0-data[2]);

      data[1] += Math.sin(this.let_c[0]) * (1.0 - data[2]) * this.sizes[1];
    }
    return data;
  }
}

export { Vertical };
