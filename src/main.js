import { Container, Application, Texture, Graphics } from "pixi.js";
import * as PIXI from "pixi.js";
import { Image, Texts, Circle, Rectangle } from "./tools";
import Button from "./UI/Button.js";

const app = new Application({
  backgroundColor: 0x6495ed,
  width: 1200,
  height: 900,
});

document.body.appendChild(app.view);

const BoxContainer = new Container();
app.stage.addChild(BoxContainer);

const styleEX = {
  fontSize: 20,
  fill: 0x000000,
  align: "center",
  wordWrap: true,
  wordWrapWidth: 500,
  boxcolor: 0xafabab,
  width: 500,
};

Button.makeBtn("ddd", "ddd");
