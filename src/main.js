import { Container, Graphics, Application, TextStyle, Texture } from "pixi.js";

import * as PIXI from "pixi.js";
import App from "./components/app";
const app = new Application({
  backgroundColor: 0x6495ed,
  width: 1200,
  height: 900,
  resolution: window.devicePixelRatio || 1,
  antialias: true,
  backgroundAlpha: 0.8,
});
document.body.appendChild(app.view);
app.stage.addChild(new App().con);
