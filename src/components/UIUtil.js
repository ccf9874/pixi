import { Container } from "pixi.js";
import { Circle, Box, Picture, Texts } from "./tool/tool";

export default class _ {
  static makeRec(option, func) {
    const button = new Box(option, func);
    return button;
  }
  static makeText(option) {
    const text = new Texts(option);
    return text;
  }
  static makeCircle(option, func) {
    const circle = new Circle(option, func);
    return circle;
  }
  static renderImage(option, func) {
    const imgBox = new Container();
    const img = new Picture(option, func);
    return imgBox.addChild(img);
  }
}
