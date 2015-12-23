(function(window) {

  var ObjEvent = function(obj) {
    return new init(obj);
  }

  var init = function(obj) {
    this.obj = obj;
  };

  ObjEvent.prototype = {
    on: function(eventName, fun) {
      this.obj._myevent = this.obj._myevent || {};
      if (!this.obj._myevent[eventName]) {
        this.obj._myevent[eventName] = [];
      }
      this.obj._myevent[eventName].push(fun);
    },
    off: function(eventName, fun) {
      this.obj._myevent = this.obj._myevent || {};
      if (this.obj._myevent[eventName]) {
        for (var i = 0; i < this.obj._myevent[eventName].length; i++) {
          if (this.obj._myevent[eventName][i] == fun) {
            this.obj._myevent[eventName].splice(i, 1);
            return;
          }
        }
      }
    },
    fire: function(eventName) {
      this.obj._myevent = this.obj._myevent || {};
      if (this.obj._myevent[eventName]) {
        for (var i = 0; i < this.obj._myevent[eventName].length; i++) {
          this.obj._myevent[eventName][i]();
        }
      }
    }
  }


  init.prototype = ObjEvent.prototype;

  window.ObjEvent = ObjEvent;
})(window);
