import { Container } from "pixi.js";
import StartView from "./View/StartView";
import GameView from "./View/GameView";
import ClosePopup from "./Popup/ClosePopup";

export default class ViewManager {
  constructor() {
    this.con = new Container();
    this.startView = new StartView();
    this.closePopup = new ClosePopup();

    this.startView.startBtn.on("click", () => this._onGameStart());
    this.closePopup.endBtn.on("click", () => this._toBack());

    this._onGameLoad();
  }
  _onGameLoad() {
    //맨처음시작
    this.con.addChild(this.startView.con);
  }
  _onGameStart() {
    //게임시작하기 버튼을 눌렀을 때
    this.gameView = new GameView(this.closePopup);
    this.con.removeChild(this.startView.con);
    this.con.addChild(this.gameView.con, this.startView.readyPopup.con);
    this.startView.readyPopup.onReady();
    setTimeout(() => {
      this.gameView.TickerStart();
      this.con.removeChild(this.startView.readyPopup.con);
    }, 1250);
  }

  _toBack() {
    console.log("처음으로");
    this.gameView.progressBar.time = 0;
    this.gameView.progressBar.seconds.text = "60 초";
    this.gameView.progressBar.outerBar.width = 400;
    this.gameView.scoreNumber = 0;
    this.gameView.score.text = "0 점";

    this.con.removeChild(this.gameView.con, this.startView.readyPopup.con);
    this.gameView.con.removeChild(this.closePopup.con);
    this.con.addChild(this.startView.con);
  }
}
