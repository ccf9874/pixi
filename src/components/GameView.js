import { Container, Graphics, Sprite, Text, TextStyle, Texture } from "pixi.js";
import * as PIXI from "pixi.js";
import { Rectangle } from "./tool/tool";

export default class GameView {
  constructor() {
    this.con = new Container();
    const timeBar = new Container();
    timeBar.position.set(400, 190);
    timeBar.outer = outerBar;

    const innerBar = new Rectangle(0, 0, 400, 30, 0xafabab, 10);
    const outerBar = new Rectangle(0, 0, 400, 30, 0xd8f0d9, 10);

    timeBar.addChild(innerBar, outerBar);
    this.con.addChild(timeBar);

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
  TickerStart() {
    console.log("ticker Start");
  }
  charRender() {}
  onBack() {}
  onButtonClick() {}

  // onButtonClick = (color) => {
  //   if (newList.at(-1).name === color) {
  //     // gameContainer.removeChild(charListContainer);
  //     // charRender();
  //     // score.text = `${scoreNumber} 점`;
  //   } else {
  //     console.log("X");
  //     onCircleIntercative(false);
  //     setTimeout(() => {
  //       onCircleIntercative(true);
  //     }, 750);
  //   }
  //   console.log(color, scoreNumber);
  // };
}
