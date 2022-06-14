import { Container } from "pixi.js";
import UIUtil from "../UIUtil";

export default class BaseView {
  constructor() {
    this.con = new Container();

    const BoxContainer = UIUtil.makeBtn({
      x: 300,
      y: 50,
      width: 600,
      height: 800,
      color: 0xd0a040,
      line: true,
      text: "",
    });
    this.con.addChild(BoxContainer);

    setParent = () => {};
    setRelease = () => {};
  }
}
