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
    id,
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
class Button {
  constructor() {}

  static create() {
    let button = new Rectangle(300, 300, 300, 300, 0x0000ff);
    // BoxContainer.addChild(button);
  }
  static remove() {}
  static onClick() {
    console.log("click");
  }
}

Button.onClick();
Button.create();

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static createTodays() {
    // this는 Article입니다.
    return new this("Today's digest", new Date());
  }
  static remove(id) {
    console.log(id);
  }
}
// Article.remove({ id: 12345 });

/*----*----*----*----*----*----*----*----*/

// import { Container, Application, Texture, Graphics } from "pixi.js";
// import * as PIXI from "pixi.js";
// import { Image, Texts, Circle, Rectangle } from "./tools";

// const app = new Application({
//   backgroundColor: 0x6495ed,
//   width: 1200,
//   height: 900,
// });
// document.body.appendChild(app.view);

// const BoxContainer = new Container();
// app.stage.addChild(BoxContainer);

// // class Textures {
// //   constructor(text, style, width, height, radius, interactive, buttonMode) {
// //     this.text = text;
// //     this.style = style;
// //     this.width = width;
// //     this.height = height;
// //     this.radius = radius;
// //     this.interactive = interactive;
// //     this.buttonMode = buttonMode;
// //   }
// //   static createTexture(text, x, y, style) {
// //     return new Texts(text, x, y, style);
// //   }
// //   static createRect(
// //     x,
// //     y,
// //     width,
// //     height,
// //     color,
// //     radius,
// //     interactive,
// //     buttonMode
// //   ) {
// //     return new Rectangle(
// //       "",
// //       x,
// //       y,
// //       width,
// //       height,
// //       color,
// //       radius,
// //       interactive,
// //       buttonMode
// //     );
// //   }
// // }

// // class AddText extends Textures {
// //   constructor() {
// //     super();
// //   }
// //   static createBox(
// //     text,
// //     x,
// //     y,
// //     style,
// //     width,
// //     height,
// //     color,
// //     radius,
// //     interactive,
// //     buttonMode
// //   ) {
// //     BoxContainer.addChild(
// //       super.createRect(
// //         100,
// //         100,
// //         width,
// //         height,
// //         color,
// //         radius,
// //         interactive,
// //         buttonMode
// //       )
// //     );
// //     BoxContainer.addChild(super.createTexture(text, x, y, style));
// //   }

// //   static removeBox(text, x, y, style) {
// //     BoxContainer.removeChild(super.createTexture(text, x, y, style));
// //   }

// //   static onClick() {
// //     console.log("hi");
// //   }
// // }

// const styleEX = {
//   fontSize: 20,
//   fill: 0x000000,
//   align: "center",
//   wordWrap: true,
//   wordWrapWidth: 500,
//   boxcolor: 0xafabab,
//   width: 500,
// };

// // const a = AddText.createBox(
// //   "ㄴ1ㄴ1ㄴ1asdㅇㅇasssdㄴ1",
// //   200,
// //   200,
// //   styleEX,
// //   200,
// //   200,
// //   styleEX.boxcolor,
// //   10,
// //   false,
// //   false
// // );

// // const b = AddText.removeBox("ㄴ1ㄴ1ㄴ1asdㅇㅇasssdㄴ1", 200, 200, styleEX);

// // class Ring extends Circle {
// //   constructor(x, y, d, color) {
// //     super(x, y, d, color);
// //     this.interactive = true;
// //     this.buttonMode = true;
// //     this.beginFill(color);
// //     this.drawCircle(x, y, d);
// //     this.endFill();

// //     new Rectangle(300, 300, 300, 300, 0x0000ff, 10);
// //   }

// //   static onAdd() {
// //     BoxContainer.addChild(this);
// //   }
// // }
// // const newBox = new Ring(200, 200, 50, 0xff0000);

// // newBox.onAdd();

// // newBox.onRemove();

// // class Box extends Rectangle {
// //   constructor(x, y, width, height) {
// //     super();
// //     this.x = x;
// //     this.y = y;
// //     this.width = width;
// //     this.height = height;
// //   }

// //   _createBox(width, height) {
// //     const container = new Container();
// //     const boundary = new Graphics();
// //     boundary.lineStyle(8, 0xff0000);
// //     boundary.drawRect(0, 0, width, height);
// //     container.addChild(boundary);
// //     return container;
// //   }
// // }

// // const box = new Box(200, 200, 200, 200);

// // class ButtonObject {
// //   constructor(id, title) {
// //     this.id = id;
// //     this.title = title;
// //   }
// // }
// let buttonBasket;
// let buttonArray = [];
// let textArray = [];
// class Button {
//   constructor() {}
//   static create(text, x, y, width, height, color, style) {
//     buttonBasket = new Rectangle(text, x, y, width, height, color);
//     buttonBasket.state.data = text;
//     buttonBasket.on("click", () => {
//       alert("hihi");
//     });
//     console.log(buttonBasket);
//     buttonArray.push(buttonBasket);
//     BoxContainer.addChild(buttonBasket);
//     buttonBasket = new Texts(text, x, y, style);
//     buttonBasket.on;
//     buttonBasket.x = x + width / 2;
//     buttonBasket.y = y + height / 2;
//     textArray.push(buttonBasket);
//     BoxContainer.addChild(buttonBasket);
//   }
//   static remove(text) {
//     BoxContainer.removeChild(
//       buttonArray.filter((e) => e.state.data === text)[0]
//     );
//     BoxContainer.removeChild(textArray.filter((e) => e._text === text)[0]);
//   }
//   static onClick() {
//     console.log("clicked");
//   }
// }

// Button.create("123", 500, 300, 300, 300, 0x00f0ff, styleEX);
// Button.create("124", 50, 30, 30, 30, 0x00f0ff, styleEX);
// Button.create("1255", 450, 430, 300, 30, 0x00f0ff, styleEX);

// setTimeout(() => Button.remove("1255"), 1000);
