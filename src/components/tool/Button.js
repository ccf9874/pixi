import { Container, TextStyle, Sprite, Graphics } from "pixi.js";
import Box from "./Box";
import { Texts } from "./tool";

export default class Button extends Box {
  constructor(option, func) {
    super(option, func);
    const btnText = new Texts(option);
    this.interactive = true;
    this.buttonMode = true;

    func ? this.on("click", func) : null;

    this.addChild(btnText);
  }
}
