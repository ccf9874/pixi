import { Container, Graphics, Sprite, Text, TextStyle, Texture } from "pixi.js";
import * as PIXI from "pixi.js";
import { Circle, Rectangle, Texts, Image } from "./tool/tool";
import Close from "./tool/close";

// 버튼 , charList , close

export default class GameView {
  constructor() {
    this.con = new Container();
    this.gameContainer = new Container();
    this.charListContainer = new Container();

    this.red = this.makeCircle(
      { x: 400, y: 700, d: 50, color: 0xff0000, name: "red" },
      () => {
        onButtonClick("red");
      }
    );
    this.blue = this.makeCircle(
      { x: 600, y: 700, d: 50, color: 0x0000ff, name: "blue" },
      () => {
        onButtonClick("blue");
      }
    );
    this.green = this.makeCircle(
      { x: 800, y: 700, d: 50, color: 0x00ff00, name: "green" },
      () => {
        onButtonClick("green");
      }
    );
    this.score = new Texts({
      text: "",
      x: 500,
      y: 130,
      width: 200,
      height: 50,
      style: {
        fill: 0xffffff,
        fontSize: 20,
      },
    });

    this.close = new Close();

    this.scoreNumber = 0;
    this.srcList = []; // 999
    this.charList = []; // start
    this.newList = []; // correct

    this.list = [
      "static/charList1.png",
      "static/charList2.png",
      "static/charList3.png",
    ];

    for (let i = 0; i < 999; i++) {
      const charsrc = this.list[Math.floor(Math.random() * 3)];
      this.srcList.push(charsrc);
    }

    this.viewList = this.srcList.slice(0, 6);
    this.restList = this.srcList.slice(6);

    const onButtonClick = (color) => {
      if (this.newList.at(-1).name === color) {
        this.gameContainer.removeChild(this.charListContainer);
        charRender();
        this.score.text = `${this.scoreNumber} 점`;
      } else {
        console.log("X");
        this.wrongClick();
      }
      console.log(color, this.scoreNumber);
    };

    const charRender = () => {
      this.gameContainer.addChild(this.charListContainer);
      this.viewList.pop();
      this.viewList.unshift(this.restList[0]);
      this.restList.shift();
      this.scoreNumber += 100;
      for (let i = 0; i < 6; i++) {
        const charTexture = new Texture.from(this.viewList[i]);
        const char = new Image(
          600,
          300 + i * 50,
          charTexture,
          "",
          160 * 0.95 ** (6 - i),
          160 * 0.95 ** (6 - i)
        );
        if (this.viewList[i] === this.list[0]) {
          char.name = "red";
        } else if (this.viewList[i] === this.list[1]) {
          char.name = "green";
        } else if (this.viewList[i] === this.list[2]) {
          char.name = "blue";
        }
        this.newList.pop();
        this.newList.pop();
        this.newList.unshift(char);
        this.charListContainer.addChild(char);
      }
    };
    this.con.addChild(
      this.red,
      this.green,
      this.blue,
      this.score,
      this.gameContainer
    );
  }

  makeCircle(option, func) {
    const circle = new Circle(option, func);
    circle.interactive = false;
    return circle;
  }

  onInteractive(bool) {
    this.red.interactive =
      this.blue.interactive =
      this.green.interactive =
        bool;
  }

  wrongClick() {
    this.onInteractive(false);
    setTimeout(() => {
      this.onInteractive(true);
    }, 750);
  }

  charRender() {
    for (let i = 0; i < 6; i++) {
      const charTexture = new Texture.from(this.viewList[i]);
      const char = new Image(
        600,
        300 + i * 50,
        charTexture,
        "",
        160 * 0.95 ** (6 - i),
        160 * 0.95 ** (6 - i)
      );
      if (this.viewList[i] === this.list[0]) {
        char.name = "red";
      } else if (this.viewList[i] === this.list[1]) {
        char.name = "green";
      } else if (this.viewList[i] === this.list[2]) {
        char.name = "blue";
      }
      this.charList.push(char);
      this.newList.push(char);
      this.charListContainer.addChild(char);
    }
    this.gameContainer.addChild(this.charListContainer);
  }

  onEnd() {}

  onButtonClick(e) {
    console.log(e.target.name);
  }
  shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
  }
}
