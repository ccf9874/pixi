import { Container } from "pixi.js";
import UIUtil from "../UIUtil";

export default class BaseView {
  constructor() {
    this.hi = "hi";
    this.con = new Container();
    this.BoxContainer = UIUtil.makeBtn({
      x: 500,
      y: 50,
      width: 600,
      height: 800,
      color: 0xd0a040,
      line: true,
      text: "",
    });
    this.con.addChild(this.BoxContainer);

    setParent = () => {};
    setRelease = () => {};
  }
}
