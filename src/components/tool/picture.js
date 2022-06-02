import { Container, TextStyle, Sprite, Texture } from "pixi.js";
import Box from "./Box";
import { Circle, Rectangle, Texts } from "./tool";

export default class Picture extends Sprite {
  constructor(option, func) {
    let texture = new Texture.from(option.url);
    super(texture, func);
    this.anchor.set(0.5);
    this.name = option.name;
    this.width = option.width;
    this.height = option.height;
    this.x = option.x;
    this.y = option.y;
    this.interactive = option.interactive;
    this.buttonMode = option.buttonMode;

    func ? this.on("click", func) : null;
  }
}
