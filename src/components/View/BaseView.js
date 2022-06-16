import { Container } from "pixi.js";
import UIUtil from "../UIUtil";

export default class BaseView {
  constructor() {
    this.con = new Container();
    this.BoxContainer = UIUtil.makeRec({
      x: 300,
      y: 50,
      width: 600,
      height: 800,
      color: 0xd0a040,
      line: 1,
      radius: 0,
      interactive: false,
    });

    this.title = UIUtil.makeRec({
      x: 300,
      y: 50,
      width: 600,
      height: 100,
      color: 0xd0a040,
      line: 1,
      radius: 0,
      textOption: {
        text: "캐릭터 짝 맞추기",
        x: 500,
        y: 80,
        width: 200,
        height: 50,
        style: {
          fill: 0x000000,
          fontSize: 20,
        },
      },
    });
    this.con.addChild(this.BoxContainer);
    this.BoxContainer.addChild(this.title);

    // setParent = () => {};
    // setRelease = () => {};
  }
}
