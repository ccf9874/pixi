import { Container, Graphics, Sprite, Text, TextStyle, Texture } from "pixi.js";
import * as PIXI from "pixi.js";
import { Circle, Rectangle } from "./tool/tool";

export default class GameView {
  constructor() {
    this.con = new Container();
    const timeBar = new Container();
    timeBar.position.set(400, 190);
    timeBar.outer = outerBar;

    const innerBar = new Rectangle(0, 0, 400, 30, 0xafabab, 10);
    const outerBar = new Rectangle(0, 0, 400, 30, 0xd8f0d9, 10);

    const red = this.makeCircle(
      { x: 400, y: 700, d: 50, color: 0xff0000, name: "red" },
      (e) => {
        this.onButtonClick(e);
        onInteactive(false);
      }
    );
    const blue = this.makeCircle(
      { x: 600, y: 700, d: 50, color: 0x0000ff, name: "blue" },
      (e) => {
        this.onButtonClick(e);
        onInteactive(false);
      }
    );
    const green = this.makeCircle(
      { x: 800, y: 700, d: 50, color: 0x00ff00, name: "green" },
      (e) => {
        this.onButtonClick(e);
        onInteactive(false);
      }
    );

    timeBar.addChild(innerBar, outerBar);
    this.con.addChild(timeBar, red, green, blue);

    const onInteactive = (bool) => {
      red.interactive = bool;
      blue.interactive = bool;
      green.interactive = bool;
    };

    const tickers = new PIXI.Ticker();
    let scoreNumber = 0;

    const srcList = []; // 999
    const charList = []; // start
    const newList = []; // correct
    const list = [
      "static/charList1.png",
      "static/charList2.png",
      "static/charList3.png",
    ];
    for (let i = 0; i < 999; i++) {
      const charsrc = list[Math.floor(Math.random() * 3)];
      srcList.push(charsrc);
    }
    const viewList = srcList.slice(0, 6);
    const restList = srcList.slice(6);
  }
  makeCircle(option, func) {
    const circle = new Circle(option, func);
    return circle;
  }
  TickerStart() {
    console.log("ticker Start");
  }
  charRender() {}
  onEnd() {}
  onButtonClick(e) {
    console.log(e.target.name);
  }
}
