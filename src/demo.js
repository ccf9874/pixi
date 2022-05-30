import Manager from "./Manage/Manager";
import * as PIXI from "pixi.js";
import ButtonManager from "./UI/Button";

export default class Button extends PIXI.Sprite {
  constructor() {
    const width = Manager.width;
    const height = Manager.height;
    let graphic = new PIXI.Graphics();
    graphic.lineStyle(1, 0x000000, 1);
    graphic.beginFill(0x6495ed);
    graphic.drawRect(0, 0, width, height);
    graphic.endFill();
    graphic.clear();
    this.anchor.set(0.5);
    this.alpha = 0.8;
  }

  makeBtn(text, name) {
    const width = Manager.width;
    const height = Manager.height;

    let button = new ButtonManager({
      width,
      height,
      line: 0,
      rounded: 5,
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
