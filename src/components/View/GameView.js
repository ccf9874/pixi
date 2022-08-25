import { Container, Texture } from "pixi.js";
import * as PIXI from "pixi.js";

import { Image, Picture } from "../tool/tool";
import BaseView from "./BaseView";
import ProgressBar from "../ProgressBar";
import UIUtil from "../UIUtil";

export default class GameView extends BaseView {
  constructor(closePopup) {
    super();

    this.Xtile1 = new Picture({
      url: "static/1044.png",
      name: "Xtile",
      width: 50,
      height: 50,
      x: 400,
      y: 700,
      interactive: false,
      buttonMode: false,
    });
    this.Xtile2 = new Picture({
      url: "static/1044.png",
      name: "Xtile",
      width: 50,
      height: 50,
      x: 600,
      y: 700,
      interactive: false,
      buttonMode: false,
    });
    this.Xtile3 = new Picture({
      url: "static/1044.png",
      name: "Xtile",
      width: 50,
      height: 50,
      x: 800,
      y: 700,
      interactive: false,
      buttonMode: false,
    });
    this.red = UIUtil.makeCircle({ x: 400, y: 700, d: 50, color: 0xff0000 }, () => {
      console.log("red running");
      this.score.text = "red click";
      this._onButtonClick("charList1");
    });
    this.blue = UIUtil.makeCircle({ x: 600, y: 700, d: 50, color: 0x0071c1 }, () => {
      console.log("blue running");
      this.score.text = "blue click";
      this._onButtonClick("charList3");
    });
    this.green = UIUtil.makeCircle({ x: 800, y: 700, d: 50, color: 0x70ad46 }, () => {
      console.log("green running");
      this.score.text = "green click";
      this._onButtonClick("charList2");
    });
    this.score = new UIUtil.makeText({
      text: "0 점",
      x: 500,
      y: 145,
      width: 200,
      height: 50,
      style: {
        fill: 0xffffff,
        fontSize: 20,
      },
    });

    this.closePopup = closePopup;
    this.progressBar = new ProgressBar();

    this.charListContainer = new Container();

    this.scoreNumber = 0;
    this.srcList = []; // 1000ro
    this.list = ["static/charList1.png", "static/charList2.png", "static/charList3.png"];
    for (let i = 0; i < 1000; i++) {
      const charsrc = this.list[Math.floor(Math.random() * 3)];
      this.srcList.push(charsrc);
    }
    this.viewList = this.srcList.slice(0, 6);
    this.restList = this.srcList.slice(6);

    this.BoxContainer.addChild(this.red, this.green, this.blue, this.score, this.progressBar.con);
    this._charRender();

    let time = 0;
    this.time = time;
    this.tickers = new PIXI.Ticker();
  }

  TickerStart() {
    this.tickers.autoStart = false;
    this._onInteractive(true);
    this.tickers.add((deltaTime) => {
      this.time += deltaTime / 60;
      this.progressBar.outerBar.width -= (deltaTime * 400) / (60 * 60);
      this.progressBar.seconds.text = `${60 - Math.floor(this.time)} 초`;

      if (this.progressBar.outerBar.width < 0) {
        this.tickers.stop();
        this.con.addChild(this.closePopup.con);
        this._onInteractive(false);
      }
      this.tickers.update(this.time);
    });
    this.tickers.start();
  }

  _charRender() {
    for (let i = 0; i < 6; i++) {
      const charTexture = new Texture.from(this.viewList[i]);
      const char = new Image(600, 300 + i * 50, charTexture, "", 160 * 0.95 ** (6 - i), 160 * 0.95 ** (6 - i));
      this.charListContainer.addChild(char);
    }
    this.BoxContainer.addChild(this.charListContainer);
  }
  _charRerender() {
    this.viewList.pop();
    this.viewList.unshift(this.restList[0]);
    this.restList.shift();
    this.scoreNumber += 100;
    for (let i = 0; i < 6; i++) {
      const charTexture = new Texture.from(this.viewList[i]);
      const char = new Image(600, 300 + i * 50, charTexture, "", 160 * 0.95 ** (6 - i), 160 * 0.95 ** (6 - i));
      this.charListContainer.addChild(char);
    }
  }
  _onButtonClick(name) {
    if (this.viewList.at(-1).slice(7, 16) === name) {
      this._charRerender();
      this.score.text = this.closePopup.score.text = `${this.scoreNumber} 점`;
    } else {
      console.log("X");
      this._wrongClick();
    }
    console.log(name, this.scoreNumber);
  }
  _onInteractive(bool) {
    this.red.interactive = this.blue.interactive = this.green.interactive = bool;
    this.red.buttonMode = this.blue.buttonMode = this.green.buttonMode = bool;
  }
  _wrongClick() {
    this._onInteractive(false);
    this.con.addChild(this.Xtile1, this.Xtile2, this.Xtile3);
    setTimeout(() => {
      this._onInteractive(true);
      this.con.removeChild(this.Xtile1, this.Xtile2, this.Xtile3);
    }, 750);
  }
}
