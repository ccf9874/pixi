import {
  Container,
  Graphics,
  Sprite,
  Application,
  Text,
  TextStyle,
  Texture,
  Ticker,
} from "pixi.js";
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
  constructor(text, x, y, style) {
    super();
    this.text = text;
    this.anchor.set(0.5);
    this.position.set(x, y);
    this.style = style;
  }
}
export class Circle extends Graphics {
  constructor(x, y, d, color) {
    super();
    this.interactive = true;
    this.buttonMode = true;
    this.beginFill(color);
    this.lineStyle(3, 0x000000, 1);
    this.drawCircle(x, y, d);
  }
  onClick() {
    console.log("hi");
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
