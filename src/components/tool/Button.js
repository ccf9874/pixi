import { Graphics } from "pixi.js";

import { Texts } from "./tool";

export default class Button extends Graphics {
  constructor(option, func) {
    super();
    this.beginFill(option.color);
    this.lineStyle(1, 0x000000, option.line);
    this.drawRect(option.x, option.y, option.width, option.height);
    this.endFill();
    const btnText = new Texts(option);
    this.interactive = true;
    this.buttonMode = true;

    func ? this.on("click", func) : null;

    this.addChild(btnText);
  }
}
