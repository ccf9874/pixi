let _width;
let _height;

export default class Manager {
  constructor() {}
  static set _width(object) {
    _width = object;
  }
  static set _height(object) {
    _height = object;
  }
  static get width() {
    return _width;
  }
  static get height() {
    return _height;
  }
}
