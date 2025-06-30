mySingleton.getInstance = function () {
  if (this._instance == null) {
    if (isFoo()) {
      this._instance = newFooSingleton();
    } else {
      this._instance = newBasicSingleton();
    }
  }
  returnthis._instance;
};
