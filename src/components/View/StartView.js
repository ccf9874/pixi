import BaseView from "./BaseView";
import ReadyPopup from "../Popup/ReadyPopup";
import UIUtil from "../UIUtil";

export default class StartView extends BaseView {
  constructor() {
    super();
    this.readyPopup = new ReadyPopup();

    this.char = UIUtil.renderImage({
      url: "static/char.png",
      name: "name",
      width: 480,
      height: 400,
      x: 600,
      y: 450,
      interactive: false,
      buttonMode: false,
    });

    this.introText = UIUtil.makeText({
      text: "(캐릭터 이름)과 같은 색 버튼을 터치해주세요!",
      x: 500,
      y: 100,
      width: 200,
      height: 200,
      style: {
        fill: 0x000000,
        fontSize: 25,
      },
    });
    this.startBtn = UIUtil.makeRec(
      {
        x: 400,
        y: 700,
        width: 400,
        height: 50,
        color: 0x666666,
        line: 1,
        radius: 15,
        interactive: true,
        textOption: {
          text: "게임시작",
          x: 550,
          y: 700,
          width: 100,
          height: 50,
          style: {
            fill: 0xffffff,
            fontSize: 20,
          },
        },
      },
      () => this.onStart()
    );
    this.BoxContainer.addChild(this.char, this.introText, this.startBtn);
  }
  onStart() {}
}
