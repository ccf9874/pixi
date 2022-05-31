let user = {
  // name: "티에리",
  // surname: "앙리",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get name() {
    return this._name;
  },
  set name(value) {
    if (value.length < 4) {
      console.log(
        "입력하신 값이 너무 짧습니다. 네 글자 이상으로 구성된 이름을 입력하세요."
      );
      return;
    }
    this._name = value;
  },
};
user.name = "Tom";

class User {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 2) {
      console.log(
        "입력하신 값이 너무 짧습니다. 네 글자 이상으로 구성된 이름을 입력하세요."
      );
      return;
    }
    this._name = value;
  }
}
let userClass = new User("앙리");
console.log(userClass.name);
