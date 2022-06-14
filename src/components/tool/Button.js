import { Graphics } from "pixi.js";

import { Texts } from "./tool";

export default class Button extends Graphics {
  constructor(option, func) {
    super();

    this._drawRect();
    this._setText();
    this._enableButton();

    func ? this.on("click", func) : null;
  }

  _drawRect() {
    this.beginFill(option.color);
    this.lineStyle(1, 0x000000, option.line);
    this.drawRect(option.x, option.y, option.width, option.height);
    this.endFill();
  }

  _setText(option) {
    const t = new Texts(option);
    this.addChild(t);
  }

  _enableButton() {
    this.interactive = true;
    this.buttonMode = true;
  }
}
