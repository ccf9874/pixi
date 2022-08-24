import { Container } from "pixi.js";
import ViewManager from "./components/ViewManager";
import UIUtil from "./components/UIUtil";
import * as PIXI from "pixi.js";

export default class App {
  constructor() {
    this.con = new Container();
    console.log(9598, this.con);
    const BoxContainer = UIUtil.makeRec({
      x: 300,
      y: 50,
      width: 600,
      height: 800,
      color: 0x0,
      line: true,
    });
    // this.view = new ViewManager();
    this.con.addChild(BoxContainer);
    // this.con.addChild(BoxContainer, this.view.con);
    this.loader = new PIXI.Loader();
    console.log(2121, this.loader);
    this.loader.add("static/spritesheet3.json");
    this.loader.onProgress.add(this.setup, this);
    this.loader.onComplete.add(this.doneFn, this);
    this.loader.load();
  }
  setup(loader) {
    console.log(2626, loader);
    let sheet = loader.resources["static/spritesheet3.json"];
    console.log(2525, sheet);
    let aniLoop = new PIXI.AnimatedSprite(sheet.spritesheet.animations.progress);

    aniLoop.x = 500;
    aniLoop.y = 500;
    aniLoop.animationSpeed = 0.167; // 1/6 frame
    console.log(3535, aniLoop);
    aniLoop.play();
    this.con.addChild(aniLoop);
  }
  doneFn() {
    setTimeout(() => {
      console.log("다댓따");
      const box = new Container();
      const exampleBox = UIUtil.makeRec({
        x: 300,
        y: 50,
        width: 600,
        height: 800,
        color: 0x0,
        line: true,
      });
      this.con.addChild(box);
      box.addChild(exampleBox);
    }, 3000);
  }
}
