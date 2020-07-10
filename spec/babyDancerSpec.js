describe('babyDancer', function() {

  var babyDancer, clock, dancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    babyDancer = new MakeDancingBaby(10, 20, timeBetweenSteps);
    dancer = new MakeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(babyDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(babyDancer, 'step');
      expect(babyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(babyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(babyDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('instance of', function() {
    it('babyDancer should be an instance of dancer', function() {
      expect(babyDancer instanceof MakeDancer).to.be.true;
    });
  });

  describe('lineUp', function() {
    it('contains a lineUp method', function() {
      sinon.spy(dancer, 'lineUp');
      var mock = sinon.mock('lineUp');
      mock.verify();
      expect(dancer.lineUp.callCount).to.be.equal(0);
    });
  });
});