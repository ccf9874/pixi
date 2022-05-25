import { Container, Graphics, Sprite, Application, Text, TextStyle, Texture } from "pixi.js";
import * as PIXI from "pixi.js";
const app = new Application({
  backgroundColor: 0x6495ed,
  width: 1200,
  height: 900,
});
document.body.appendChild(app.view);

class Image extends Sprite {
  constructor(x = 0, y = 0, texture, name = "name", width, height, interactive = false, buttonMode = false) {
    super(texture);
    this.anchor.set(0.5);
    this.name = name;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.interactive = interactive;
    this.buttonMode = buttonMode;
  }
  callName() {
    console.log(`this box name is ${this.name}`);
    return `${this.name}`;
  }
}
class Texts extends Text {
  constructor(text, x, y, style, score = "") {
    super(text);
    this.score = score;
    this.text = `${score}${text}`;
    this.anchor.set(0.5);
    this.position.set(x, y);
    this.style = style;
  }
}
class Circle extends Graphics {
  constructor(x, y, d, color) {
    super();
    this.interactive = true;
    this.buttonMode = true;
    this.beginFill(color);
    this.lineStyle(3, 0x000000, 1);
    this.drawCircle(x, y, d);
  }
}
class Rectangle extends Graphics {
  constructor(x, y, width, height, color, radius = 0, interactive = false, buttonMode = false) {
    super();
    this.interactive = interactive;
    this.buttonMode = buttonMode;
    this.beginFill(color);
    this.lineStyle(3, 0x000000, 1);
    this.drawRoundedRect(x, y, width, height, radius);
    this.endFill();
  }
}
const BoxContainer = new Container();
app.stage.addChild(BoxContainer);

const box = new Rectangle(350, 145, 500, 700, 0xfffaaa, 5);
BoxContainer.addChild(box);

const introBox = new Rectangle(350, 145, 500, 65, 0x888888);

BoxContainer.addChild(introBox);

const titleTextStyle = new TextStyle({
  fontSize: 30,
  fill: 0x000000,
  align: "center",
  wordWrap: true,
  wordWrapWidth: 500,
});

const titleText = new Texts("캐릭터 짝 맞추기", app.screen.width / 2, 180, titleTextStyle);
BoxContainer.addChild(titleText);

const navText = new Texts("(캐릭터 이름)과 같은 색 버튼을 터치해주세요!", 600, 225, {
  fontSize: 20,
  fill: 0x000000,
  align: "center",
  wordWrap: true,
  wordWrapWidth: 500,
});

BoxContainer.addChild(navText);
navText.anchor.set(0.5, 0);
navText.position.set(app.screen.width / 2, 215);

const startBtn = new Rectangle(425, 670, 350, 65, 0x888888, 16, true, true);
BoxContainer.addChild(startBtn);

const startText = new Texts("게임 시작", 600, 700);
startBtn.addChild(startText);

const charTexture = new Texture.from("static/char.png");

const char = new Image(600, 450, charTexture, "char", 480, 400);
char.callName();
BoxContainer.addChild(char);

const backTexture = new Texture.from("static/back.png");
const back = new Image(400, 180, backTexture, "back", 40, 25, true, true);

back.on("pointerdown", () => {
  console.log("뒤로가기");
  BoxContainer.addChild(startBtn, char, navText);
  BoxContainer.removeChild(back, score, circleRed, circleBlue, circleGreen);
  gameBox.removeChild(healthBar);
  healthBar.removeChild(innerBar, outerBar);
  gameContainer.removeChild(mosterBox);
});

const gameContainer = new Container();
BoxContainer.addChild(gameContainer);

const gameBox = new Graphics();

gameBox.lineStyle(3, 0x000000, 0);
gameBox.drawRoundedRect(353, 215, 494, 450, 5);
gameBox.endFill();
gameContainer.addChild(gameBox);
gameBox.interactive = true;
gameBox.buttonMode = true;

const score = new Texts(
  "점",
  600,
  225,
  {
    fontSize: 20,
    fill: 0x000000,
    align: "center",
    wordWrap: true,
    wordWrapWidth: 500,
  },
  0
);
console.log(150150, score.score);

const circleRed = new Circle(450, 750, 40, 0xfe0000);
const circleBlue = new Circle(600, 750, 40, 0x0071c1);
const circleGreen = new Circle(750, 750, 40, 0x70ad46);

const healthBar = new Container();
healthBar.position.set(400, 240);
gameBox.addChild(healthBar);

const innerBar = new Rectangle(0, 0, 400, 30, 0x000000, 10, false, false);
const outerBar = new Rectangle(0, 0, 400, 30, 0xff3300, 10, false, false);

healthBar.outer = outerBar;
healthBar.outer.width = (400 / 120) * 1;
const mosterBox = new Container();

const tickers = new PIXI.Ticker();
tickers.lastTime = 0;
tickers.stop();
tickers.add((deltaTime) => {
  // do something every frame

  healthBar.outer.width = 400 - tickers.deltaTime;
});
tickers.start();

const charListContainer = new Container();
app.stage.addChild(charListContainer);

const manyCharList = [];
for (i = 0; i < 999; i++) {
  const list = ["static/charList1.png", "static/charList2.png", "static/charList3.png"];
  const charsrc = list[Math.floor(Math.random() * 3)];
  const charTexture = new Texture.from(charsrc);
  const char = new Image(600, 350 + i * 45, charTexture, "", 160 * 0.95 ** (6 - i), 160 * 0.95 ** (6 - i));
  if (charsrc === list[0]) {
    char.name = "red";
  } else if (charsrc === list[1]) {
    char.name = "green";
  } else if (charsrc === list[2]) {
    char.name = "blue";
  }

  manyCharList.push(char);
  const sixList = manyCharList.slice(0, 6);
  const restList = manyCharList.slice(6);
}
const sixList = manyCharList.slice(0, 6);
const restList = manyCharList.slice(6);

console.log(9874, sixList[5].name);
sixList.pop();
sixList.push(restList[0]);
console.log(9874, sixList[5].name);
restList.shift();
console.log(9874, restList);

const charList = [];
for (var i = 0; i < 6; i++) {
  const list = ["static/charList1.png", "static/charList2.png", "static/charList3.png"];
  const charsrc = list[Math.floor(Math.random() * 3)];
  console.log(charsrc);
  const charTexture = new Texture.from(charsrc);
  const char = new Image(600, 350 + i * 45, charTexture, "", 160 * 0.95 ** (6 - i), 160 * 0.95 ** (6 - i));
  if (charsrc === list[0]) {
    char.name = "red";
  } else if (charsrc === list[1]) {
    char.name = "green";
  } else if (charsrc === list[2]) {
    char.name = "blue";
  }
  charList.push(char);
  const sixList = manyCharList.slice(0, 6);
  const restList = manyCharList.slice(6);
  startBtn.on("pointerdown", () => {
    console.log("게임시작");
    charListContainer.addChild(char);
    console.log(char.name);
  });
  back.on("pointerdown", () => {
    console.log("뒤로가기");
    charListContainer.removeChild(char);
  });
}

startBtn.on("pointerdown", () => {
  console.log("게임시작");
  BoxContainer.removeChild(startBtn, char, navText);
  BoxContainer.addChild(back, score, circleRed, circleBlue, circleGreen);
  gameBox.addChild(healthBar);
  healthBar.addChild(innerBar, outerBar);
  gameContainer.addChild(mosterBox);
});

circleRed.on("click", () => {
  if (charList[5].name === "red") {
    score.score += 100;
    charListContainer.y += 50;
    charListContainer.removeChild(charList.at(-1));
  } else {
    console.log("X");
  }
  console.log("red ", score.score);
});

circleBlue.on("click", () => {
  if (charList[5].name === "blue") {
    score.score += 100;
    charListContainer.y += 45;
    charListContainer.removeChild(charList.at(-1));
  } else {
    console.log("X");
  }
  console.log("blue ", score.score);
});
circleGreen.on("click", () => {
  if (charList[5].name === "green") {
    score.score += 100;
    charListContainer.y += 45;
    charListContainer.removeChild(charList.at(-1));
  } else {
    console.log("X");
  }
  console.log("green ", score.score);
});
function screen() {}
