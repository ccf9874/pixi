import { Container } from "pixi.js";

import UIUtil from "./UIUtil";

export default class ProgressBar {
  constructor() {
    this.con = new Container();
    this.timeBar = new Container();
    this.timeBar.position.set(400, 190);
    this.innerBar = UIUtil.makeRec({
      x: 0,
      y: 0,
      width: 400,
      height: 30,
      color: 0xafabab,
      radius: 10,
    });
    this.outerBar = UIUtil.makeRec({
      x: 0,
      y: 0,
      width: 400,
      height: 30,
      color: 0xd8f0d9,
      radius: 10,
    });
    this.timeBar.outer = this.outerBar;
    this.seconds = new UIUtil.makeText({
      text: "60 초",
      x: 150,
      y: 15,
      width: 100,
      height: 0,
      style: {
        fill: 0x000000,
        fontSize: 18,
      },
    });

    this.timeBar.addChild(this.innerBar, this.outerBar, this.seconds);
    this.con.addChild(this.timeBar);
  }
}
