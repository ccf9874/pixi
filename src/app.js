import { Container, TextStyle } from "pixi.js";
import * as style from "./style";
import Box from "./components/tool/Box";
import Button from "./components/tool/Button";
import Picture from "./components/tool/picture";
import { Circle, Rectangle, Texts } from "./components/tool/tool.js";
import GameView from "./components/GameView";

export default class App {
  constructor() {
    this.con = new Container();
    const BoxContainer = this.makeBox({
      x: 300,
      y: 50,
      width: 600,
      height: 800,
      color: 0xd0a040,
      line: true,
      text: "",
    });
    const header = this.makeBox({
      x: 300,
      y: 50,
      width: 600,
      height: 80,
      color: 0xd0a040,
      line: true,
      text: "카드 짝 맞추기 게임",
    });
    const nav = this.makeBox({
      x: 301,
      y: 140,
      width: 598,
      height: 50,
      color: 0xd0a040,
      line: false,
      text: "(캐릭터 이름)과 같은 색 버튼을 터치해주세요!",
    });
    const readyBox = this.makeBox({
      x: 300,
      y: 50,
      width: 600,
      height: 800,
      color: 0xbbbbbb,
      line: false,
      text: "",
      alpah: 0.5,
    });
    const char = this.renderImage({
      url: "static/char.png",
      name: "name",
      width: 480,
      height: 400,
      x: 600,
      y: 450,
      interactive: false,
      buttonMode: false,
    });
    const back = this.renderImage(
      {
        url: "static/back.png",
        name: "name",
        width: 40,
        height: 30,
        x: 350,
        y: 90,
        interactive: true,
        buttonMode: true,
      },
      () => ToBack()
    );
    const startBtn = this.makeBtn(
      {
        x: 500,
        y: 750,
        width: 200,
        height: 50,
        color: 0xaaaaaa,
        line: true,
        text: "게임 시작",
        style: style.normalText,
      },
      () => StartGame()
    );
    const endBtn = this.makeBtn(
      {
        x: 500,
        y: 750,
        width: 200,
        height: 50,
        color: 0xaaaaaa,
        line: true,
        text: "게임 종료",
        style: style.normalText,
      },
      () => console.log("finished")
    );
    const WaitText = new Texts({
      text: "Ready",
      width: 0,
      height: 0,
      x: 600,
      y: 450,
    });
    const WaitText2 = new Texts({
      text: "Go!",
      width: 0,
      height: 0,
      x: 600,
      y: 450,
    });
    const red = this.makeCircle(
      { x: 400, y: 700, d: 50, color: 0xff0000 },
      (e) => this.onClick(e)
    );
    const green = this.makeCircle(
      { x: 600, y: 700, d: 50, color: 0x0000ff },
      () => console.log("blue")
    );
    const blue = this.makeCircle(
      { x: 800, y: 700, d: 50, color: 0x00ff00 },
      () => console.log("green")
    );
    const gameView = new GameView();
    const StartGame = () => {
      this.con.removeChild(nav, char, startBtn);
      this.con.addChild(
        back,
        red,
        green,
        blue,
        gameView.con,
        readyBox,
        WaitText
      );

      setTimeout(() => {
        this.con.removeChild(WaitText);
        this.con.addChild(WaitText2);
      }, 1000);

      setTimeout(() => {
        this.con.removeChild(WaitText2, readyBox);
        gameView.TickerStart();
      }, 1250);
    };

    const ToBack = () => {
      this.con.addChild(nav, char, startBtn);
      this.con.removeChild(readyBox, back, red, green, blue, gameView.con);
    };

    this.con.addChild(BoxContainer, header, nav, char, startBtn);
  }
  makeBox(option) {
    const bgBox = new Box(option);
    const boxText = new Texts(option);
    bgBox.addChild(boxText);
    option.alpah ? (bgBox.alpha = option.alpah) : null;

    return bgBox;
  }
  makeBtn(option, func) {
    const Btn = new Button(option, func);
    return Btn;
  }

  renderImage(option, func) {
    const imgBox = new Container();
    const img = new Picture(option, func);
    return imgBox.addChild(img);
  }
  makeCircle(option, func) {
    const circle = new Circle(option, func);
    return circle;
  }
  onClick(e) {
    e.target.interactive = false;
    setTimeout((e) => (e.target.interactive = true), 750);
  }
}
