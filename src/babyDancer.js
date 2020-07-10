var MakeDancingBaby = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('baby');
  this.$node.append('<img class="baby" id="image" src="assets/dancing-baby-1.gif"></img>');
  this.$node.click(function() {
    if ($(this).css('transform') === 'none' ) {
      $(this).css('transform', 'rotate(180deg)');
    } else {
      $(this).css('transform', '');
    }
  });
};

MakeDancingBaby.prototype = Object.create(MakeDancer.prototype);
MakeDancingBaby.prototype.constructor = MakeDancingBaby;

// MakeDancingBaby.prototype.spin = function() {
//   this.$node.toggle()
// };

// MakeDancingBaby.prototype.step = function() {
//   MakeDancer.prototype.step.call(this);
//   // toggle() is a jQuery method to show/hide the <span> tag. See http://api.jquery.com/category/effects/ for this and other effects you can use on a jQuery-wrapped html tag.
//   //this.$node.toggle();

// };