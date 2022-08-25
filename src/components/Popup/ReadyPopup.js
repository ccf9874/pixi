import UIUtil from "../UIUtil";
import BasePopup from "./BasePopup";

export default class ReadyPopup extends BasePopup {
  constructor() {
    super();
    this.textReady = UIUtil.makeText({
      text: "READY",
      x: 550,
      y: 300,
      width: 100,
      height: 50,
      style: {
        fill: 0xffffff,
        fontSize: 50,
      },
    });
    this.textGo = UIUtil.makeText({
      text: "GO!",
      x: 550,
      y: 300,
      width: 100,
      height: 50,
      style: {
        fill: 0xffffff,
        fontSize: 50,
      },
    });
  }
  onReady() {
    this.con.addChild(this.textReady);
    setTimeout(() => {
      this.con.removeChild(this.textReady);
      this.con.addChild(this.textGo);
    }, 1000);
    setTimeout(() => {
      this.con.removeChild(this.textGo);
    }, 1250);
  }
}
