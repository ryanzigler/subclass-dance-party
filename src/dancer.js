var MakeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span></span>');
  this.flaf = true;
  this.styleSettings = {
    top: top,
    left: left
  };
  this.step();
  this.setPosition(top, left);
};

MakeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  // var styleSettings = {
  //   top: top,
  //   left: left
  // };
  this.$node.css(this.styleSettings);
};

MakeDancer.prototype.lineUp = function(value) {
  this.$node.animate({top: 500}, 100);
};

MakeDancer.prototype.getOffset = function(value) {
  var position = this.$node.offset();
};

MakeDancer.prototype.assemble = function() {
  if(this.flag === true) {
    this.flag = false;
    this.$node.animate({
      top: 20,
      left: 20
    })
   } else {
      this.$node.animate(this.styleSettings);
      this.flag = true;
    }
  }

