$(document).ready(function() {
  window.dancers = [];

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

  $('.lineUpDancers').on('click', function(event) {
    // var index = 0;
    // for (var i = 0; i < window.dancers.length; i++) {
    //   $(window.dancers[i]).animate({
    //     top: 100,
    //     left: 100 + index
    //   });
    //   index += 50;
    // }
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });
});