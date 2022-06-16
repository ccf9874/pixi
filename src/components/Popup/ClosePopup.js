import UIUtil from "../UIUtil";
import BasePopup from "./BasePopup";

export default class ClosePopup extends BasePopup {
  constructor() {
    super();
    this.endBox = UIUtil.makeText({
      text: "게임종료!",
      x: 550,
      y: 200,
      width: 100,
      height: 100,
      style: {
        fill: 0xffffff,
        fontSize: 30,
      },
    });
    this.score = UIUtil.makeText({
      text: "0 점",
      x: 550,
      y: 300,
      width: 100,
      height: 50,
      style: {
        fill: 0xffffff,
        fontSize: 50,
      },
    });
    this.endBtn = UIUtil.makeRec(
      {
        x: 450,
        y: 680,
        width: 300,
        height: 50,
        color: 0x888888,
        line: true,
        interactive: true,
        textOption: {
          text: "확인",
          x: 450,
          y: 680,
          width: 300,
          height: 50,
          style: {
            fill: 0xffffff,
            fontSize: 25,
          },
        },
      },
      () => this._toBack()
    );

    this._onEnd();
  }
  _onEnd() {
    this.con.addChild(this.endBox, this.score, this.endBtn);
  }
  _toBack() {
    console.log("뒤로가기");
  }
}
