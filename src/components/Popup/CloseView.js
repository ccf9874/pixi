import { Container } from "pixi.js";
import { Box, Texts } from "../tool/tool";
import UIUtil from "../UIUtil";

export default class Close {
  constructor() {
    this.con = new Container();
    const endBox = UIUtil.makeBtn({
      x: 300,
      y: 50,
      width: 600,
      height: 800,
      color: 0x888888,
      radius: 5,
      textOption: {
        text: "게임종료!",
        x: 500,
        y: 300,
        width: 200,
        height: 200,
        style: {
          fill: 0xffffff,
          fontSize: 50,
        },
      },
    });
    endBox.alpha = 0.6;

    const exitText = new Texts({
      text: "확인",
      x: 500,
      y: 600,
      width: 200,
      height: 200,
      style: {
        fill: 0xffffff,
        fontSize: 30,
      },
    });
    const endScore = new Texts({
      text: "",
      x: 500,
      y: 400,
      width: 200,
      height: 200,
      style: {
        fill: 0xffffff,
        fontSize: 80,
      },
    });
    this.exitButton = new Box({
      x: 425,
      y: 670,
      width: 350,
      height: 65,
      color: 0x888888,
      radius: 16,
      interactive: true,
      buttonMode: true,
      textOption: {
        text: "",
        x: 500,
        y: 300,
        width: 200,
        height: 200,
        style: {
          fill: 0xffffff,
          fontSize: 50,
        },
      },
    });
    this.con.addChild(endBox, exitText, endScore, this.exitButton);
  }
}
