import * as PIXI from "pixi.js";
import { Container } from "pixi.js";
import Box from "./Box";
import { Rectangle, Texts } from "./tool";
export default class Close {
  constructor() {
    this.con = new Container();
    this.endBox = new Rectangle(300, 50, 600, 800, 0x888888, 5);
    this.endBox.alpha = 0.6;
    this.endText = new Texts({
      text: "게임종료!",
      x: 500,
      y: 300,
      width: 200,
      height: 200,
      style: {
        fill: 0xffffff,
        fontSize: 50,
      },
    });

    this.exitText = new Texts({
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
    this.endScore = new Texts({
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
    this.exitButton = new Rectangle(
      425,
      670,
      350,
      65,
      0x888888,
      16,
      true,
      true
    );
    this.con.addChild(
      this.endBox,
      this.endText,
      this.exitButton,
      this.exitText,
      this.endScore
    );
  }
}
