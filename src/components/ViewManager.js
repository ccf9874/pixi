export default class ViewManager {
  constructor() {}
  static changeScene(newScene) {
    if (_currentScene) {
      _uiStage.removeChild(_currentScene.con);
    }
    _currentScene = newScene;
    _uiStage.addChild(_currentScene.con);
  }
}
