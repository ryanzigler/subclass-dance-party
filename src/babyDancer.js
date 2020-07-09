var MakeDancingBaby = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeDancingBaby.prototype = Object.create(MakeDancer.prototype);
MakeDancingBaby.prototype.constructor = MakeDancingBaby;

MakeDancingBaby.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag. See http://api.jquery.com/category/effects/ for this and other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
  this.$node = $('<span class="baby"></span>');
};