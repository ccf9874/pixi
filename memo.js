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
