import { Container, TextStyle } from "pixi.js";
import * as style from "../style";
import Box from "./Box";
import Button from "./Button";
import Picture from "./picture";
import { Circle, Rectangle, Texts } from "./tool";

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

    const StartGame = () => {
      this.con.removeChild(nav, char, startBtn);
      this.con.addChild(back, readyBox);
      let readyOption = {
        text: "Ready",
        width: 0,
        height: 0,
        x: 600,
        y: 450,
      };
      let text = this.setText(readyOption);

      setTimeout(() => {
        this.con.removeChild(this.setText(readyOption));
        readyOption.text = "GO!";
        this.con.addChild(text);
        console.log(readyOption.text);
      }, 1000);

      this.con.addChild(back, readyBox, text);
    };
    const ToBack = () => {
      this.con.addChild(nav, char, startBtn);
      this.con.removeChild(readyBox, back);
    };
    this.con.addChild(BoxContainer, header, nav, char, startBtn);
  }
  makeBox(option) {
    const bgBox = new Box(option);
    const boxText = new Texts(option);
    bgBox.addChild(boxText);
    option.alpah ? (bgBox.alpha = option.alpah) : null;
    this.setText(option);
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
  setText(option) {
    const text = new Texts(option);
    return text;
  }
}
