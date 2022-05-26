import {
  Container,
  Graphics,
  Sprite,
  Application,
  Text,
  TextStyle,
  Texture,
  Ticker,
} from "pixi.js";
import * as PIXI from "pixi.js";
const app = new Application({
  backgroundColor: 0x6495ed,
  width: 1200,
  height: 900,
});
document.body.appendChild(app.view);

class Image extends Sprite {
  constructor(
    x = 0,
    y = 0,
    texture,
    name = "name",
    width,
    height,
    interactive = false,
    buttonMode = false
  ) {
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
  constructor(text, x, y, style) {
    super();
    this.score = score;
    this.text = text;
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
  constructor(
    x,
    y,
    width,
    height,
    color,
    radius = 0,
    interactive = false,
    buttonMode = false
  ) {
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
const introBox = new Rectangle(350, 145, 500, 65, 0x888888);

const titleText = new Texts("캐릭터 짝 맞추기", app.screen.width / 2, 180, {
  fontSize: 30,
  fill: 0x000000,
  align: "center",
  wordWrap: true,
  wordWrapWidth: 500,
});

const navText = new Texts(
  "(캐릭터 이름)과 같은 색 버튼을 터치해주세요!",
  600,
  225,
  {
    fontSize: 20,
    fill: 0x000000,
    align: "center",
    wordWrap: true,
    wordWrapWidth: 500,
  }
);
navText.anchor.set(0.5, 0);
navText.position.set(app.screen.width / 2, 215);
const score = new Texts("0 점", 600, 225, {
  fontSize: 20,
  fill: 0x000000,
  align: "center",
});
const startBtn = new Rectangle(425, 670, 350, 65, 0x888888, 16, true, true);
const startText = new Texts("게임 시작", 600, 700);
const charTexture = new Texture.from("static/char.png");
const char = new Image(600, 450, charTexture, "char", 480, 400);
const backTexture = new Texture.from("static/back.png");
const back = new Image(400, 180, backTexture, "back", 40, 25, true, true);
const gameContainer = new Container();
const waitContainer = new Container();
const waitBox = new Rectangle(350, 145, 500, 700, 0x888888, 5);
const waitText = new Texts("READY", 600, 500, {
  fill: 0xffffff,
  fontSize: 70,
});
const waitText2 = new Texts("GO!", 600, 500, {
  fill: 0xffffff,
  fontSize: 70,
});
const circleRed = new Circle(450, 750, 40, 0xfe0000);
const circleBlue = new Circle(600, 750, 40, 0x0071c1);
const circleGreen = new Circle(750, 750, 40, 0x70ad46);
const healthBar = new Container();
healthBar.position.set(400, 240);
healthBar.outer = outerBar;
const innerBar = new Rectangle(0, 0, 400, 30, 0xafabab, 10, false, false);
const outerBar = new Rectangle(0, 0, 400, 30, 0xd8f0d9, 10, false, false);
const charListContainer = new Container();
const tickers = new PIXI.Ticker();
let scoreNumber = 0;

BoxContainer.addChild(
  box,
  introBox,
  titleText,
  navText,
  startBtn,
  char,
  gameContainer,
  waitContainer
);
startBtn.addChild(startText);
gameContainer.addChild(healthBar, charListContainer);

const charList = [];
for (let i = 0; i < 999; i++) {
  const list = [
    "static/charList1.png",
    "static/charList2.png",
    "static/charList3.png",
  ];
  const charsrc = list[Math.floor(Math.random() * 3)];
  console.log(charsrc);
  const charTexture = new Texture.from(charsrc);
  const char = new Image(
    600,
    350 + i * 50,
    charTexture,
    "",
    160 * 0.95 ** (6 - i),
    160 * 0.95 ** (6 - i)
  );
  if (charsrc === list[0]) {
    char.name = "red";
  } else if (charsrc === list[1]) {
    char.name = "green";
  } else if (charsrc === list[2]) {
    char.name = "blue";
  }
  charList.push(char);
}

const viewList = charList.slice(0, 6);
const restList = charList.slice(6);
startBtn.on("pointerdown", () => {
  BoxContainer.addChild(waitContainer);

  console.log("게임시작");
  circleRed.interactive = false;
  circleBlue.interactive = false;
  circleGreen.interactive = false;
  setTimeout(() => {
    waitContainer.removeChild(waitText);
    waitContainer.addChild(waitText2);
  }, 1000);
  setTimeout(() => {
    waitContainer.removeChild(waitText2);
    BoxContainer.removeChild(waitContainer);
    circleRed.interactive = true;
    circleBlue.interactive = true;
    circleGreen.interactive = true;

    let time = 0;
    tickers.autoStart = false;
    tickers.add((deltaTime) => {
      // do something every frame
      time += deltaTime / 60;
      console.log("time is ", Math.round(time));
      outerBar.width -= (deltaTime * 400 * 10) / (60 * 60);
      console.log(Math.floor(outerBar.width));

      if (outerBar.width < 0) {
        outerBar.width = 0;
        tickers.stop();
      }
    });
    tickers.start();
  }, 1250);
  BoxContainer.removeChild(startBtn, char, navText);
  gameContainer.addChild(
    back,
    score,
    circleRed,
    circleBlue,
    circleGreen,
    healthBar
  );
  healthBar.addChild(innerBar, outerBar);

  for (let i = 0; i < 6; i++) {
    charListContainer.addChild(viewList[i]);
  }
  waitContainer.addChild(waitBox, waitText);
  waitBox.alpha = 0.6;
});
back.on("pointerdown", () => {
  console.log("뒤로가기");
  BoxContainer.addChild(startBtn, char, navText);
  gameContainer.removeChild(
    back,
    score,
    circleRed,
    circleBlue,
    circleGreen,
    healthBar
  );
  healthBar.removeChild(innerBar, outerBar);
  tickers.stop();
  outerBar.width = 400;
  for (let i = 0; i < 6; i++) {
    charListContainer.removeChild(viewList[i]);
  }
});

circleRed.on("click", () => {
  if (viewList[5].name === "red") {
    scoreNumber += 100;
    score.text = `${scoreNumber} 점`;
    charListContainer.y += 50;
    charListContainer.removeChild(viewList.at(-1));
    viewList.pop();
    viewList.unshift(restList[0]);
    restList.shift();
    charListContainer.addChild(viewList.at(-1));
    charListContainer.y -= 50;
  } else {
    console.log("X");
    circleRed.interactive = false;
    circleBlue.interactive = false;
    circleGreen.interactive = false;
    setTimeout(() => {
      circleRed.interactive = true;
      circleBlue.interactive = true;
      circleGreen.interactive = true;
    }, 750);
  }
  console.log("red ", scoreNumber);
  console.log(viewList);
});
circleBlue.on("click", () => {
  if (viewList[5].name === "blue") {
    scoreNumber += 100;
    score.text = `${scoreNumber} 점`;
    charListContainer.y += 50;
    charListContainer.removeChild(viewList.at(-1));
    viewList.pop();
    viewList.unshift(restList[0]);
    restList.shift();
    charListContainer.addChild(viewList.at(-1));
    charListContainer.y -= 50;
  } else {
    console.log("X");
    circleRed.interactive = false;
    circleBlue.interactive = false;
    circleGreen.interactive = false;
    setTimeout(() => {
      circleRed.interactive = true;
      circleBlue.interactive = true;
      circleGreen.interactive = true;
    }, 750);
  }
  console.log("blue ", scoreNumber);
  console.log(viewList);
});
circleGreen.on("click", () => {
  if (viewList[5].name === "green") {
    scoreNumber += 100;
    score.text = `${scoreNumber} 점`;
    charListContainer.y += 50;
    charListContainer.removeChild(viewList.at(-1));
    viewList.pop();
    viewList.unshift(restList[0]);
    restList.shift();
    charListContainer.addChild(viewList.at(-1));
    charListContainer.y -= 50;
  } else {
    console.log("X");
    circleRed.interactive = false;
    circleBlue.interactive = false;
    circleGreen.interactive = false;
    setTimeout(() => {
      circleRed.interactive = true;
      circleBlue.interactive = true;
      circleGreen.interactive = true;
    }, 750);
  }
  console.log("green ", scoreNumber);
  console.log(viewList);
});