import { Container } from "pixi.js";
import * as style from "./style";
import Box from "./components/tool/Box";
import Button from "./components/tool/Button";
import Picture from "./components/tool/picture";
import { Texts } from "./components/tool/tool.js";
import GameView from "./components/GameView";

import UIUtil from "./components/UIUtil";

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
      line: 1,
      text: "캐릭터 짝 맞추기 게임",
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
    const startBtn = UIUtil.makeBtn(
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

    this.gameView = new GameView();

    const StartGame = () => {
      this.con.removeChild(nav, char, startBtn);
      this.con.addChild(back, gameView.con, readyBox, WaitText);
      gameView.onInteractive(false);

      setTimeout(() => {
        this.con.removeChild(WaitText);
        this.con.addChild(WaitText2);
      }, 1000);

      setTimeout(() => {
        this.con.removeChild(WaitText2, readyBox);
        gameView.progressBar.TickerStart();
        gameView.onInteractive(true);
      }, 1250);
      gameView.charRender();
    };

    const ToBack = () => {
      gameView.progressBar.time = 0;
      gameView.progressBar.seconds.text = "60 초";
      gameView.progressBar.outerBar.width = 400;
      gameView.scoreNumber = 0;
      gameView.score.text = "0 점";
      gameView.progressBar.close.endScore.text = "0 점";
      gameView.progressBar.tickers.stop();
      this.con.removeChild(readyBox, back, gameView.con);
      this.con.addChild(nav, char, startBtn);
    };

    this.con.addChild(BoxContainer, header, nav, char, startBtn);

    gameView.progressBar.close.exitButton.on("click", () => ToBack());
  }

  _ToBack() {
    this.gameView.progressBar.time = 0;
    this.gameView.progressBar.seconds.text = "60 초";
    this.gameView.progressBar.outerBar.width = 400;
    this.gameView.scoreNumber = 0;
    this.gameView.score.text = "0 점";
    this.gameView.progressBar.close.endScore.text = "0 점";
    this.gameView.progressBar.tickers.stop();
    this.con.removeChild(readyBox, back, gameView.con);
    this.con.addChild(nav, char, startBtn);
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
}
