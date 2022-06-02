import { Container, Graphics, Sprite, Text, TextStyle, Texture } from "pixi.js";
import * as PIXI from "pixi.js";

export class Image extends Sprite {
  constructor(
    x = 0,
    y = 0,
    texture,
    name = "name",
    width,
    height,
    interactive = false,
    buttonMode = false
  ) {
    super(texture);
    this.anchor.set(0.5);
    this.name = name;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.interactive = interactive;
    this.buttonMode = buttonMode;
  }
  callName() {
    console.log(`this box name is ${this.name}`);
    return `${this.name}`;
  }
}
export class Texts extends Text {
  constructor(option) {
    super();
    this.text = option.text;
    this.anchor.set(0.5);

    this.position.set(
      option.x + option.width / 2,
      option.y + option.height / 2
    );
    this.style = option.style;
  }
}
export class Circle extends Graphics {
  constructor(option, func) {
    super();
    this.interactive = true;
    this.buttonMode = true;
    this.beginFill(option.color);
    this.lineStyle(3, 0x000000, 1);
    this.drawCircle(option.x, option.y, option.d);
    this.on("click", func);
  }
}
export class Rectangle extends Graphics {
  constructor(
    x,
    y,
    width,
    height,
    color,
    radius = 0,
    interactive = false,
    buttonMode = false
  ) {
    super();
    this.interactive = interactive;
    this.buttonMode = buttonMode;
    this.beginFill(color);
    this.lineStyle(3, 0x000000, 1);
    this.drawRoundedRect(x, y, width, height, radius);
    this.endFill();
  }
}
