var MakeElaineDance = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeElaineDance.prototype = Object.create(MakeDancer.prototype);
MakeElaineDance.prototype.constructor = MakeElaineDance;

MakeElaineDance.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag. See http://api.jquery.com/category/effects/ for this and other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
  this.$node = $('<span class="elaine"></span>');
};