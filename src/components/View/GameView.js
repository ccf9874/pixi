import { Container, Texture } from "pixi.js";

import { Circle, Texts, Image, Picture } from "../tool/tool";
import ProgressBar from "../ProgressBar";

export default class GameView {
  constructor() {
    this.con = new Container();
    this.gameContainer = new Container();
    this.charListContainer = new Container();
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
    this.red = this.makeCircle({ x: 400, y: 700, d: 50, color: 0xff0000 }, () => {
      onButtonClick("charList1");
    });
    this.blue = this.makeCircle({ x: 600, y: 700, d: 50, color: 0x0071c1 }, () => {
      onButtonClick("charList3");
    });
    this.green = this.makeCircle({ x: 800, y: 700, d: 50, color: 0x70ad46 }, () => {
      onButtonClick("charList2");
    });
    this.score = new Texts({
      text: "0 점",
      x: 500,
      y: 130,
      width: 200,
      height: 50,
      style: {
        fill: 0xffffff,
        fontSize: 20,
      },
    });

    this.progressBar = new ProgressBar(this.red, this.blue, this.green);

    this.scoreNumber = 0;
    this.srcList = []; // 999
    this.charList = []; // start 시작할때 보여줄 리스트

    this.list = ["static/charList1.png", "static/charList2.png", "static/charList3.png"];

    for (let i = 0; i < 1000; i++) {
      const charsrc = this.list[Math.floor(Math.random() * 3)];
      this.srcList.push(charsrc);
    } ///무작위 1000개

    this.viewList = this.srcList.slice(0, 6);
    //보여줄 6개 url List
    this.restList = this.srcList.slice(6);
    //나머지 url List

    const onButtonClick = (name) => {
      if (this.viewList.at(-1).slice(7, 16) === name) {
        charRender();
        this.score.text = this.progressBar.close.endScore.text = `${this.scoreNumber} 점`;
      } else {
        console.log("X");
        this.wrongClick();
      }
      console.log(name, this.scoreNumber);
    };

    const charRender = () => {
      this.viewList.pop();
      this.viewList.unshift(this.restList[0]);
      this.restList.shift();
      this.scoreNumber += 100;

      for (let i = 0; i < 6; i++) {
        const charTexture = new Texture.from(this.viewList[i]);
        const char = new Image(600, 300 + i * 50, charTexture, "", 160 * 0.95 ** (6 - i), 160 * 0.95 ** (6 - i));
        this.charListContainer.addChild(char);
      }
    };
    this.con.addChild(this.red, this.green, this.blue, this.score, this.gameContainer, this.progressBar.con);
  }
  charRender() {
    for (let i = 0; i < 6; i++) {
      const charTexture = new Texture.from(this.viewList[i]);
      const char = new Image(600, 300 + i * 50, charTexture, "", 160 * 0.95 ** (6 - i), 160 * 0.95 ** (6 - i));
      this.charList.push(char);
      this.charListContainer.addChild(char);
    }
    this.gameContainer.addChild(this.charListContainer);
  }
  makeCircle(option, func) {
    const circle = new Circle(option, func);
    circle.interactive = false;
    return circle;
  }

  onInteractive(bool) {
    this.red.interactive = this.blue.interactive = this.green.interactive = bool;
  }

  wrongClick() {
    this.onInteractive(false);
    this.con.addChild(this.Xtile1, this.Xtile2, this.Xtile3);
    setTimeout(() => {
      this.onInteractive(true);
      this.con.removeChild(this.Xtile1, this.Xtile2, this.Xtile3);
    }, 750);
  }
}
