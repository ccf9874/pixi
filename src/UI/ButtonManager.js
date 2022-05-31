// import Manager from "../Manage/Manager";
import { Graphics, Text } from "pixi.js";
import { Image, Texts, Circle, Rectangle } from "../Component/tool/tools";
export default class ButtonManager {
  set text(value) {
    this.buttonText.text = value;
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
    this[obj.name] = new Texts(obj.text, obj.x, obj.y, obj.style);
    this.button.addChild(this[obj.name]);
  }
  constructor(option) {
    this.graphics = new Graphics();
    this.graphics.lineStyle(3, 0x000000, 1);
    this.graphics.beginFill(option.fillColor);
    this.graphics.drawRoundedRect(
      0,
      0,
      option.width,
      option.height,
      option.rounded ? option.rounded : 0
    );
    this.graphics.endFill();
    if (option.text) {
      let obj = option.text;
      this.buttonText = new Text(obj.text, obj.style);

      this.button = new Rectangle({
        width: option.width,
        height: option.height,
        text: this.buttonText,
      });
    } else {
      this.button = new Rectangle({
        width: option.width,
        height: option.height,
      });
    }
  }
}
