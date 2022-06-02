const Application = PIXI.Application,
  Container = PIXI.Container,
  loader = PIXI.Loader.shared,
  resources = PIXI.Loader.shared.resources,
  TextureCache = PIXI.utils.TextureCache,
  Sprite = PIXI.Sprite,
  Rectangle = PIXI.Rectangle;

const app = new Application({
  width: 900,
  height: 1000,
  antialias: true,
  autoDensity: true,
  backgroundColor: 0x1099bb,
  resolution: devicePixelRatio,
});
document.body.appendChild(app.view);

const back = PIXI.Sprite.from("./images/back.png");

const xBox1 = Sprite.from("./images/charList1.png");
const xBox2 = Sprite.from("./images/charList2.png");
const xBox3 = Sprite.from("./images/charList3.png");

const imageTexture = PIXI.Texture.from("./images/charList3.png");

app.stage.interactive = true;
app.stage.hitArea = app.renderer.screen;
// app.stage.on("click", onClick);
imageTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
const container = new Container();
app.stage.addChild(container);

for (let i = 5; i > 0; i--) {
  console.log(Math.round((Math.random() * 10 * i) % 2));

  if (Math.round((Math.random() * 10 * i) % 2) === 0) {
    const char1 = Sprite.from("./images/charList1.png");
    char1.interactive = true;
    char1.name = "1";
    char1.buttonMode = true;
    char1.anchor.set(0.5);
    char1.width = 200 * 0.95 ** i;
    char1.height = 200 * 0.95 ** i;
    char1.x = app.screen.width / 2;
    char1.y = 700 - (i + 1) * 60;

    app.stage.addChild(char1);
    // app.ticker.add((delta) => {
    //   char1.y += 0.05;
    //   char1.x -= 0.05;
    // });
  } else if (Math.round((Math.random() * 10 * i) % 2) === 1) {
    const char2 = Sprite.from("./images/charList2.png");
    char2.interactive = true;
    char2.buttonMode = true;
    char2.anchor.set(0.5);
    char2.width = 200 * 0.95 ** i;
    char2.height = 200 * 0.95 ** i;
    char2.x = app.screen.width / 2;
    char2.y = 700 - (i + 1) * 60;
    app.stage.addChild(char2);
    char2.on("click", (e) => {
      console.log(e);
    });
    //   app.ticker.add((delta) => {
    //     char2.y += 0.05;
    //   });
  } else if (Math.round((Math.random() * 10 * i) % 2) === 2) {
    const char3 = Sprite.from("./images/charList3.png");
    char3.interactive = true;
    char3.buttonMode = true;
    char3.anchor.set(0.5);
    char3.width = 200 * 0.95 ** i;
    char3.height = 200 * 0.95 ** i;
    char3.x = app.screen.width / 2;
    char3.y = 700 - (i + 1) * 60;
    app.stage.addChild(char3);

    // app.ticker.add((delta) => {
    //   char3.y += 0.05;
    //   char3.x += 0.05;
    // });
  } else {
    const char1 = Sprite.from("./images/charList1.png");
    char1.interactive = true;
    char1.buttonMode = true;
    char1.anchor.set(0.5);
    char1.width = 200 * 0.95 ** i;
    char1.height = 200 * 0.95 ** i;
    char1.x = app.screen.width / 2;
    char1.y = 700 - (i + 1) * 60;
    app.stage.addChild(char1);
    // app.ticker.add((delta) => {
    //   char1.y += 0.05;
    //   char1.x -= 0.05;
    // });
  }
  // Setup events for mouse + touch using the pointer events
  // bunny.on("pointerdown", onDragStart);
  // bunny.on("pointerup", onDragEnd);
  // bunny.on("pointerupoutside", onDragEnd);
}

back.width = 70;
back.height = 50;
back.position.y = 35;
back.position.x = 35;

xBox1.anchor.set(0.5, 0.5);
xBox1.interactive = true;
xBox1.buttonMode = true;
xBox1.width = 180;
xBox1.height = 180;
xBox1.on("click", (e) => {
  console.log("빨간색 클릭");
});

xBox2.anchor.set(0.5, 0.5);
xBox2.interactive = true;
xBox2.buttonMode = true;
xBox2.width = 180;
xBox2.height = 180;
xBox2.on("click", (e) => {
  console.log("파란색 클릭");
});

xBox3.anchor.set(0.5, 0.5);
xBox3.interactive = true;
xBox3.buttonMode = true;
xBox3.width = 180;
xBox3.height = 180;
xBox3.on("click", (e) => {
  console.log("초록색 클릭");
  healthBar.outer.width -= 10;
});

container.addChild(back);

container.addChild(xBox1, xBox2, xBox3);
xBox1.position.set((app.screen.width * 1) / 4, 900);
xBox2.position.set((app.screen.width * 2) / 4, 900);
xBox3.position.set((app.screen.width * 3) / 4, 900);

const style = new PIXI.TextStyle({
  fontSize: 40,
  stroke: "#ffffff",
  // strokeThickness: 4,
  // dropShadow: true,
  // dropShadowDistance: 10,
  dropShadowAngle: Math.PI / 2,
  dropShadowBlur: 4,
  // dropShadowColor: "#000000",
});

const titleText = new PIXI.Text("Hello World", style);
app.stage.addChild(titleText);
titleText.text = "캐릭터 짝 맞추기";
titleText.style.wordWrap = true;
titleText.style.wordWrapWidth = 500;
titleText.style.align = "center";
titleText.anchor.set(0.5, 0);
titleText.position.set(app.screen.width / 2, 35);

// Store the bunny being dragged
let selectedTarget;

// Make bunny semi-transparent and listen to drag-move events when one is
// pressed.
function onDragStart(e) {
  // Show that the bunny can now be dragged.
  e.target.alpha = 0.5;
  selectedTarget = e.target;

  // Start listening to dragging on the stage
  app.stage.addEventListener("pointermove", onDragMove);
}

// Restore the dragTarget bunny's alpha & deregister listener when the bunny is
// released.
function onDragEnd() {
  // Restore the original bunny alpha.
  selectedTarget.alpha = 1;

  // Stop listening to dragging on the stage
  app.stage.removeEventListener("pointermove", onDragMove);
}

// Copy the position of the cursor into the dragTarget's position.
function onDragMove(e) {
  // Don't use e.target because the pointer might move out of the bunny if
  // the user drags fast, which would make e.target become the stage.
  selectedTarget.parent.toLocal(e.global, null, selectedTarget.position);
}

function onClick(e) {
  console.log(11);
  const ticker = new PIXI.Ticker();
  ticker.add((delta) => {
    e.x += 5;
  });
  if (selectedTarget) {
    selectedTarget.position.copyFrom(e.global);
  }
}
const ticker = new PIXI.Ticker();
let time = 120;
ticker.autoStart = true;
ticker.add((delta) => {
  time = Math.round(120 - ticker.lastTime / 1000);
  // console.log(time);
});

const healthBar = new Container();
healthBar.position.set(0, 140);
app.stage.addChild(healthBar);

//Create the black background rectangle
const innerBar = new PIXI.Graphics();
innerBar.beginFill(0x5f5f5f);
innerBar.drawRect(app.screen.width / 6, 0, (app.screen.width * 2) / 3, 60);
innerBar.endFill();
healthBar.addChild(innerBar);

//Create the front red rectangle
const outerBar = new PIXI.Graphics();
outerBar.beginFill(0xff3300);
outerBar.drawRect(app.screen.width / 6, 0, (app.screen.width * 2) / 3, 60);
outerBar.endFill();
healthBar.outer = outerBar;
healthBar.addChild(outerBar);

// const timeBar = new PIXI.Graphics();
// timeBar
//   .beginFill(0xaa33bb)
//   .lineStyle(4, 0xffea00, 1)
//   .drawRect(50, 130, 800, 80)
//   .endFill();
// app.stage.addChild(timeBar);

const timeText = new PIXI.Text("Hello World", style);
app.stage.addChild(timeText);
timeText.text = `${time}초`;
timeText.style.wordWrap = true;
timeText.style.wordWrapWidth = 500;
timeText.style.align = "center";
timeText.anchor.set(0.5, 0);
timeText.position.x = app.screen.width / 2;
timeText.position.y = 150;
