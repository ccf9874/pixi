import Manager from "../Manage/Manager";
import { Graphics, Text } from "pixi.js";

export default class ButtonManager {
  set text(t) {
    this.buttonText.text = t;
  }
  get text() {
    return this.buttonText;
  }
  pos(x, y) {
    this.button.x = x;
    this.button.y = y;
  }
  onClick(func) {
    this.button.on("click", func);
  }
  addText(obj) {
    this[obj.name] = new Text(obj.text, obj.style);
    this.button.addChild(this[obj.name]);
  }
  constructor(option) {
    this.graphics = new Graphics();
    this.graphics.lineStyle(3, 0x000000, 1);
    this.graphic.beginFill(option.fillColor);
    this.graphic.drawRoundedRect(
      0,
      0,
      option.width,
      option.height,
      option.rounded ? option.rounded : 0
    );
    this.graphic.endFill();
  }
}
