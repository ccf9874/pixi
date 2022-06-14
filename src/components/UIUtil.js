import Button from "./tool/Button";

export default class _ {
  static makeBtn(option, func) {
    const Btn = new Button(option, func);
    return Btn;
  }
}
