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
}

export class Picture extends Sprite {
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
    this.name = option.name;
    this.interactive = false;
    this.buttonMode = false;
    this.beginFill(option.color);
    this.lineStyle(3, 0x000000, 1);
    this.drawCircle(option.x, option.y, option.d);
    this.on("click", func);
  }
}
export class Box extends Graphics {
  constructor(option, func) {
    super();
    this._drawRect(option);
    this._enableBox(option.interactive);
    option.textOption ? this._setText(option.textOption) : null;
    func ? this.on("click", func) : null;
  }

  _drawRect(option) {
    this.beginFill(option.color);
    this.lineStyle(1, 0x000000, option.line);
    this.drawRoundedRect(
      option.x,
      option.y,
      option.width,
      option.height,
      option.radius
    );
    this.endFill();
    this.alpha = option.alpha ? option.alpha : 1;
  }

  _setText(option) {
    const t = new Texts(option);
    this.addChild(t);
  }

  _enableBox(bool) {
    this.interactive = bool;
    this.buttonMode = bool;
  }
}
