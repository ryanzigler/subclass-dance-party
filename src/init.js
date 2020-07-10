$(document).ready(function() {
  window.dancers = [];

  /* ====== BLINKY ====== */

  $('.addBlinkyDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var newBlinkyDancer = new MakeBlinkyDancer(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(newBlinkyDancer);
    $('body').append(newBlinkyDancer.$node);

  });

  /* ====== BABY ====== */

  $('.addDancingBabyButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var newDancingBaby = new MakeDancingBaby(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(newDancingBaby);
    $('body').append(newDancingBaby.$node);
  });


  /* ====== ELAINE ====== */
  $('.addElaineDanceButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var newDancingElaine = new MakeElaineDance(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(newDancingElaine);
    $('body').append(newDancingElaine.$node);
  });

  /* ====== LINEUP ====== */
  $('.lineUpDancers').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  /* ====== FACE OFF ====== */
  $('.faceOff').on('click', function(event) {
    for (var i = 0; i < window.dancers.length - 1; i+=2) {
      var top =  $('body').height() * Math.random();
      var left = $('body').width() * Math.random();
      // var top = 20;
      // var left = 20;
      window.dancers[i].setPosition(top, left);
      window.dancers[i + 1].setPosition(top, left);
    }
  })

  /* ====== ASSEMBLE ====== */
  $('.assemble').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].assemble();
    }
  })
});
