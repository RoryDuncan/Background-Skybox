var BGSKY;

BGSKY = (function() {

  function BGSKY(URL) {
    if (this.find() === true) {
      if (URL !== void 0 || null) {
        this.background = URL;
        this.set();
      }
    } else {
      console.log("BGSKY.js: ");
    }
  }

  BGSKY.prototype.el = null;

  BGSKY.prototype.find = function() {
    if ($('.BGSKYBOX').length > 0) {
      return true;
    }
    if ($('.BGSKYBOX').length === 0) {
      return false;
    }
  };

  BGSKY.prototype.set = function() {
    if (this.find() === true && this.background !== void 0 || null) {
      $('.BGSKYBOX').css({
        "background-color": "#fff",
        "background-image": "url(" + this.background + ")"
      });
      this.getMousePositions();
    } else {
      return console.log("Cannot add styles");
    }
  };

  BGSKY.prototype.mouse = {
    x: 0,
    y: 0
  };

  BGSKY.prototype.setBackground = function(URL) {
    this.background = URL;
    return this.set();
  };

  BGSKY.prototype.getMousePositions = function() {
    var mouse, root;
    root = this;
    mouse = this.mouse;
    $(document).mousemove(function(e) {
      mouse.x = (e.pageX / window.innerWidth) * 100;
      mouse.y = (e.pageY / window.innerHeight) * 100;
      return root.setBackgroundPosition();
    });
  };

  BGSKY.prototype.movement = 8;

  BGSKY.prototype.inverse = false;

  BGSKY.prototype.setBackgroundPosition = function() {
    if (this.inverse === true) {
      return $('.BGSKYBOX').css({
        "background-position": ((1 - this.mouse.x) / this.movement) + "% " + ((1 - this.mouse.y) / this.movement) + "%"
      });
    } else {
      return $('.BGSKYBOX').css({
        "background-position": (this.mouse.x / this.movement) + "% " + (this.mouse.y / this.movement) + "%"
      });
    }
  };

  BGSKY.prototype.background = null;

  return BGSKY;

})();

$(document).ready(function() {
  return BGSKY = new BGSKY();
});

// Generated by CoffeeScript 1.5.0-pre
