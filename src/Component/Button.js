import { Graphics, Text } from "pixi.js";
import { Sprite } from "puxi.js";
import ButtonManager from "../UI/ButtonManager";
import { Image } from "./tool/tools";

export default class Button {
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
  //   constructor(option) {
  //     this.graphics = new Graphics();
  //     this.graphics.lineStyle(3, 0x000000, 1);
  //     this.graphics.beginFill(option.fillColor);
  //     this.graphics.drawRoundedRect(
  //       0,
  //       0,
  //       option.width,
  //       option.height,
  //       option.rounded ? option.rounded : 0
  //     );
  //     this.graphics.endFill();
  //     if (option.text) {
  //       let obj = option.text;
  //       this.buttonText = new Text(obj.text, obj.style);

  //       this.button = new Rectangle({
  //         width: option.width,
  //         height: option.height,
  //         text: this.buttonText,
  //       });
  //     } else {
  //       this.button = new Rectangle({
  //         width: option.width,
  //         height: option.height,
  //       });
  //     }
  //     this.startBtn = this.makeBtn("게임시작", {
  //       x: 100,
  //       y: 100,
  //       width: 100,
  //       height: 100,
  //       fillColor: 0x0000ff,
  //       rounded: 5,
  //     });
  //     this.backBtn = this.makeBtn("뒤로가기", {
  //       x: 200,
  //       y: 200,
  //       width: 200,
  //       height: 200,
  //       fillColor: 0x0000ff,
  //       rounded: 5,
  //     });
  //     this.endBtn = this.makeBtn("게임종료", {
  //       x: 300,
  //       y: 300,
  //       width: 300,
  //       height: 300,
  //       fillColor: 0x0000ff,
  //       rounded: 5,
  //     });
  //   }

  constructor(option) {
    let graphic = new PIXI.Graphics();
    graphic.lineStyle(1, 0x000000);
    graphic.beginFill(0x00f0ff);
    graphic.drawRect(0, 0, 100, 100);
    graphic.endFill();
    // super(Manager.app.renderer.generateTexture(graphic));
    this.width = 100;
    this.heigth = 100;

    this.startBtn = this.makeBtn("게임시작", {
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      fillColor: 0x0000ff,
      rounded: 5,
    });
    this.backBtn = this.makeBtn("뒤로가기", {
      x: 200,
      y: 200,
      width: 200,
      height: 200,
      fillColor: 0x0000ff,
      rounded: 5,
    });
    this.endBtn = this.makeBtn("게임종료", {
      x: 300,
      y: 300,
      width: 300,
      height: 300,
      fillColor: 0x0000ff,
      rounded: 5,
    });

    // this.cardBtn.button.anchorTop = 60 * ratioY;
    // this.audioBtn.button.anchorTop = 153 * ratioY;
    // this.gridBtn.button.anchorTop = 246 * ratioY;
    // this.hlBtn.button.anchorTop = 350 * ratioY;
    // this.previewBtn.button.anchorBottom = 349 * ratioY;
    // this.gatherBtn.button.anchorBottom = 256 * ratioY;
    // this.saveBtn.button.anchorBottom = 163 * ratioY;
    // this.finBtn.button.anchorBottom = 70 * ratioY;

    this.addChild(
      this.cardBtn.button,
      this.audioBtn.button,
      this.gridBtn.button,
      this.hlBtn.button,
      this.previewBtn.button,
      this.gatherBtn.button,
      this.saveBtn.button,
      this.finBtn.button
    );
  }

  addImage(obj) {
    let img = new Image();
    this[obj.url].interactive = true;
    this[obj.url].buttonMode = true;

    this.button.addChild(this[obj.url]);
  }

  makeBtn(text, img, style) {
    let button = new ButtonManager({
      text: text,
      rounded: style.rounded,
      x: style.x,
      y: style.y,
      width: style.width,
      height: style.height,
      fillColor: style.fillColor,
    });
    button.addText({
      text,
      style: {
        fontSize: 20,
        fill: 0x000000,
        align: "center",
        wordWrap: true,
        wordWrapWidth: 500,
        // boxcolor: 0xafabab,
        // width: 500,
      },
    });
    if (img) {
      let image = img;
      this.addImage(image);
    }
    button.onClick(() => console.log("onClick"));
    return button;
  }
}
