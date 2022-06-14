import * as PIXI from "pixi.js";
import { Container } from "pixi.js";
import Close from "./close";
import { Rectangle, Texts } from "./tool";

export default class ProgressBar {
  constructor(redBtn, blueBtn, greenBtn) {
    this.con = new Container();
    this.timeBar = new Container();
    this.timeBar.position.set(400, 190);
    this.innerBar = new Rectangle(0, 0, 400, 30, 0xafabab, 10);
    this.outerBar = new Rectangle(0, 0, 400, 30, 0xd8f0d9, 10);
    this.timeBar.outer = this.outerBar;
    this.seconds = new Texts({
      text: "60 초",
      x: 150,
      y: 15,
      width: 100,
      height: 0,
      style: {
        fill: 0x000000,
        fontSize: 18,
      },
    });
    this.redBtn = redBtn;
    this.blueBtn = blueBtn;
    this.greenBtn = greenBtn;
    this.close = new Close();

    let time = 0;
    this.time = time;
    this.tickers = new PIXI.Ticker();
    this.timeBar.addChild(this.innerBar, this.outerBar, this.seconds);
    this.con.addChild(this.timeBar);
    this.close.exitButton.on("click", () => {
      this.con.removeChild(this.close.con);
    });
  }

  TickerStart() {
    this.tickers.autoStart = false;
    this.tickers.add((deltaTime) => {
      this.time += deltaTime / 60;
      this.outerBar.width -= (deltaTime * 400 * 10) / (60 * 60);

      this.seconds.text = `${60 - Math.floor(this.time)} 초`;
      if (this.outerBar.width < 0) {
        this.tickers.stop();
        this.con.addChild(this.close.con);
        this.redBtn.interactive =
          this.blueBtn.interactive =
          this.greenBtn.interactive =
            false;
      }
      this.tickers.update(this.time);
    });
    this.tickers.start();
  }
}
