describe('elaineDancer', function() {

  var elaineDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    elaineDancer = new MakeElaineDance(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(elaineDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(elaineDancer, 'step');
      expect(elaineDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(elaineDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(elaineDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('instance of', function() {
    it('elaineDancer should be an instance of dancer', function() {
      expect(elaineDancer instanceof MakeDancer).to.be.true;
    });
  });
});