'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_SHADOW_GAP = 10;
var BAR_MAX_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_X = 140;
var BAR_Y = 90;
var BAR_GAP = 50;

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
}

var getRandomBlueColor = function() {
  return 'hsl(240,' + (Math.random()*100).toString() + '%,50%)';
}

 var renderCloud = function(ctx, x, y, color) {
   ctx.fillStyle  = color;
   ctx.fillRect(x,y,CLOUD_WIDTH,CLOUD_HEIGHT);
}

var renderTextField = function(ctx, text, x, y) {
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono'
  ctx.fillText(text, x, y);
}

var renderScoreList = function(ctx, players, times) {
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var currentBarHeight = (BAR_MAX_HEIGHT * times[i]) / maxTime;
    var currentBarHeightDiff = BAR_MAX_HEIGHT - currentBarHeight;
    var currentBarX = BAR_X + (BAR_WIDTH + BAR_GAP) * i;

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    else {
      ctx.fillStyle = getRandomBlueColor();
    }

    ctx.fillRect(currentBarX, BAR_Y + currentBarHeightDiff, BAR_WIDTH, currentBarHeight);
    renderTextField(ctx, players[i], currentBarX, BAR_Y + BAR_MAX_HEIGHT + 20);
    renderTextField(ctx, Math.round(times[i]), currentBarX, BAR_Y + currentBarHeightDiff - 10);
  }
}

window.renderStatistics = function(ctx, players, times) {
    renderCloud(ctx, CLOUD_X + CLOUD_SHADOW_GAP, CLOUD_Y + CLOUD_SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');
    renderTextField(ctx, 'Ура вы победили!',CLOUD_X + 20, CLOUD_Y + 30);
    renderTextField(ctx, 'Список результатов:',CLOUD_X + 20, CLOUD_Y + 50);
    renderScoreList(ctx, players, times);
}
