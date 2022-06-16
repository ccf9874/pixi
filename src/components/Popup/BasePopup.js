import { Container } from "pixi.js";
import UIUtil from "../UIUtil";

export default class BasePopup {
  constructor() {
    this.con = new Container();
    this.BoxContainer = UIUtil.makeRec({
      x: 300,
      y: 50,
      width: 600,
      height: 800,
      color: 0x888888,
      line: 1,
      radius: 0,
      interactive: false,
      alpha: 0.6,
    });
    this.con.addChild(this.BoxContainer);
  }
}
