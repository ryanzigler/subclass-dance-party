var MakeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span></span>');
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
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// MakeDancer.prototype.lineUp = function() {
//   var index = 0;
//   var styleSettings = {
//     top: 100,
//     left: 100 + index
//   };
//   index += 50;
//   this.$node.css(styleSettings);
// };

MakeDancer.prototype.lineUp = function(value) {
  this.$node.animate({top: 100}, 100);
};


