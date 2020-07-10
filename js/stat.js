'use strict';

(function () {
  var CLOUD_WIDTH = window.data.CLOUD_WIDTH;
  var CLOUD_HEIGHT = window.data.CLOUD_HEIGHT;
  var CLOUD_X = window.data.CLOUD_X;
  var CLOUD_Y = window.data.CLOUD_Y;
  var CLOUD_SHADOW_GAP = window.data.CLOUD_SHADOW_GAP;
  var BAR_MAX_HEIGHT = window.data.BAR_MAX_HEIGHT;
  var BAR_WIDTH = window.data.BAR_WIDTH;
  var BAR_X = window.data.BAR_X;
  var BAR_Y = window.data.BAR_Y;
  var BAR_GAP = window.data.BAR_GAP;

  var getRandomBlueColor = function () {
    return 'hsl(240,' + (Math.random() * 100).toString() + '%,50%)';
  };

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var renderTextField = function (ctx, text, x, y) {
    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.fillText(text, x, y);
  };

  var renderScoreList = function (ctx, players, times) {
    var maxTime = window.data.getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      var currentBarHeight = (BAR_MAX_HEIGHT * times[i]) / maxTime;
      var currentBarHeightDiff = BAR_MAX_HEIGHT - currentBarHeight;
      var currentBarX = BAR_X + (BAR_WIDTH + BAR_GAP) * i;

      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = getRandomBlueColor();
      }

      ctx.fillRect(currentBarX, BAR_Y + currentBarHeightDiff, BAR_WIDTH, currentBarHeight);
      renderTextField(ctx, players[i], currentBarX, BAR_Y + BAR_MAX_HEIGHT + 20);
      renderTextField(ctx, Math.round(times[i]), currentBarX, BAR_Y + currentBarHeightDiff - 10);
    }
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + CLOUD_SHADOW_GAP, CLOUD_Y + CLOUD_SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');
    renderTextField(ctx, 'Ура вы победили!', CLOUD_X + 20, CLOUD_Y + 30);
    renderTextField(ctx, 'Список результатов:', CLOUD_X + 20, CLOUD_Y + 50);
    renderScoreList(ctx, players, times);
  };
})();
