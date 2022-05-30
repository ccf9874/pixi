class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}

const user = new User("jay");
user.sayHi();

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs ${this.speed}m/s.`);
  }
}
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides.`);
  }
  stop() {
    super.stop(); //부모의 stop 불러오기
    this.hide();
  }
}
const rabbit = new Rabbit("white rabbit");

rabbit.run(4);

class Animal {
  static planet = "지구";

  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  run(speed = 0) {
    this.speed += speed;
    console.log(`${this.name} runs ${this.speed}m/s.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stopped.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides.`);
  }
  stop() {
    super.stop(); //부모의 stop 불러오기
    this.hide();
  }
}
const rabbits = [new Rabbit("남기", 5), new Rabbit("대호", 10)];

rabbits.sort(Rabbit.compare);
console.log(rabbits[0].name);
console.log("시발", rabbits[0].planet); //undefined

class Article {
  constructor(title, date, id) {
    this.title = title;
    this.date = date;
    this.id = id;
  }
  // Article 생성하는 메소드
  // this는 Article입니다.
  static createTodays(title, id) {
    return new this(title, new Date(), id);
  }
  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}
let article = Article.createTodays("이거 머임", "ㅋㅋ");
console.log(888, article.id);
// 사용법
let articles = [
  new Article("HTML", new Date(2019, 1, 1), 1),
  new Article("CSS", new Date(2019, 0, 1), 2),
  new Article("JavaScript", new Date(2019, 11, 1), 3),
];

articles.sort(Article.compare);

console.log(articles[0].title);

// 내부 인터페이스와 외부 인터페이스
// public: 어디서든지 접근할 수 있으며 외부 인터페이스를 구성합니다.
// 지금까지 다룬 프로퍼티와 메서드는 모두 public입니다.

// private: 클래스 내부에서만 접근할 수 있으며 내부 인터페이스를 구성할 때 쓰입니다.
// protected 프로퍼티 명 앞엔 밑줄 _이 붙습니다.

class CoffeeMachinePublic {
  waterAmount = 0; //public
  constructor(power) {
    this.power = power; //public
    console.log(`전력량이 ${this.power}W 인 커피머신을 만듭니다.`);
  }
}
let coffeeMachinePublic = new CoffeeMachinePublic(200);
coffeeMachinePublic.waterAmount = 200;

class CoffeeMachineProtected {
  // waterAmount를 protected로 바꿔서 waterAmount를 통제해 보겠습니다.
  // 예시로 waterAmount를 0 미만의 값으로는 설정하지 못하도록 만들어 볼 겁니다.
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) throw new Error("물의 양은 음수가 될 수 없급니다.");
    this._waterAmount = value;
  }
  get waterAmount() {
    return this._waterAmount;
  }
  constructor(power) {
    this._power = power;
  }
}
let coffeeMachineProtected = new CoffeeMachineProtected(200);
coffeeMachineProtected.waterAmount = 10;

// power 프로퍼티를 읽기만 가능하도록 만들어봅시다.
// 프로퍼티를 생성할 때만 값을 할당할 수 있고,
// 그 이후에는 값을 절대 수정하지 말아야 하는 경우가 종종 있는데,
//  이럴 때 읽기 전용 프로퍼티를 활용할 수 있습니다.

// !!   읽기 전용 프로퍼티를 만들려면
// !!   setter(설정자)는 만들지 않고 getter(획득자)만 만들어야 합니다.

class CoffeeMachineReadOnly {
  constructor(power) {
    this._power = power;
  }
  get power() {
    return this._power;
  }
}

let coffeeMachineReadOnly = new CoffeeMachineReadOnly(200);

coffeeMachineReadOnly.power = 100;
console.log(coffeeMachineReadOnly.power); //200

class CoffeeMachinePrivate {
  #waterLimit = 200;

  #checkWater(value) {
    if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
    if (value > this.#waterLimit) throw new Error("물이 용량을 초과합니다.");
  }
}

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}
let arr = new PowerArray(1, 2, 3, 4, 5, 6);

console.log(arr.isEmpty());

let evenArr = arr.filter((e) => e % 2 === 0);
console.log(evenArr);
console.log(evenArr.isEmpty());
console.log(arr.constructor === PowerArray);

class Animalu {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) return true;
  }
}
let object = { canEat: false };

console.log(188, object instanceof Animalu);

let greetMixin = {
  sayHi() {
    console.log(`hello ${this.name}`);
  },
  sayBye() {
    console.log(`fuck off bitch ${this.name} jeon radian`);
  },
};

class Users {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Users.prototype, greetMixin);

const nemgi = new Users("홍흑산");
nemgi.sayBye();

let eventMixin = {
  // 이벤트 구독
  // 사용패턴: menu.on('select', function(item) { ... }

  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },
  // 구독 취소
  // 사용패턴: menu.off('select', handler)
  off(eventName, handler) {
    let handlers = this._eventHandlers?.[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },
};

class Button {
  constructor(
    text,
    style,
    width,
    height,
    radius,
    interactive = false,
    buttonMode = false
  ) {
    this.text = text;
    this.style = style;
    this.width = width;
    this.height = height;
    this.radius = radius;
    new Texts(text, 0, 0, style),
      new Rectangle(
        0,
        0,
        width,
        height,
        style.boxcolor,
        (radius = 0),
        (interactive = false),
        (buttonMode = false)
      );
  }
  static createBtn(text, style, width, height) {
    return new this(text, style, width, height);
  }
}
const styleEX = {
  fontSize: 20,
  fill: 0x000000,
  align: "center",
  wordWrap: true,
  wordWrapWidth: 500,
  boxcolor: 0xafabab,
};
