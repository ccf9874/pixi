import { Container } from "pixi.js";
import ViewManager from "./components/ViewManager";
import UIUtil from "./components/UIUtil";

export default class App {
  constructor() {
    this.con = new Container();
    const BoxContainer = UIUtil.makeRec({
      x: 300,
      y: 50,
      width: 600,
      height: 800,
      color: 0xd0a040,
      line: true,
    });
    this.view = new ViewManager();
    this.con.addChild(BoxContainer, this.view.con);
  }
}
