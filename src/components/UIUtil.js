import { Circle, Box } from "./tool/tool";

export default class _ {
  static makeBtn(option, func) {
    const button = new Box(option, func);
    return button;
  }
  static makeCircle(option, func) {
    const circle = new Circle(option, func);
    return circle;
  }
}
