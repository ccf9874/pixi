// import Manager from "../Manage/Manager";
import { Sprite } from "pixi.js";
import ButtonManager from "./ButtonManager";

export default class Button extends Sprite {
  constructor() {
    let graphic = new PIXI.Graphics();
    graphic.lineStyle(1, 0x000000, 1);
    graphic.beginFill(0x0000ff);
    graphic.drawRect(0, 0, 200, 200);
    graphic.endFill();
    graphic.clear();
    this.anchor.set(0.5);
    this.alpha = 0.8;
  }

  static makeBtn(text, name, width, height, fillColor) {
    let button = new ButtonManager({
      text: "option.text",
      width,
      height,
      rounded: 5,
      fillColor,
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
      name,
    });
    button.onClick(() => console.log("onClick"));
    return button;
  }
}

/*
    만들려는 class 안에서
    this.audioBtn = this.makeBtn({
      url: "audio_icon",
      width: size,
      height: size,
    },"넣을 텍스트" , "")
    형식으로 사용
*/
