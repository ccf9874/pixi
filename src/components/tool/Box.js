import { Container, Graphics } from "pixi.js";
import * as PIXI from "pixi.js";

export default class Box extends Graphics {
  constructor(option) {
    super();
    this.beginFill(option.color);
    this.lineStyle(1, 0x000000, option.line);
    this.drawRect(option.x, option.y, option.width, option.height);
    this.endFill();
  }
}
