'use strict';

(function () {
  // Времнно вернул (не работает сервер)
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  // Константы
  var COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALLCOLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

  // Переменные
  var setup = document.querySelector('.setup');
  var dialogHandle = setup.querySelector('.upload');
  var setupUserName = document.querySelector('.setup-user-name');

  var setupOpen = document.querySelector('.setup-open');
  var setupOpenIcon = document.querySelector('.setup-open-icon');
  var setupClose = document.querySelector('.setup-close');

  var setupWizard = document.querySelector('.setup-wizard');
  var setupWizardForm = setup.querySelector('.setup-wizard-form');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  var similarListElement = setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // Функции
  var getRandomElement = function (arr) {
    var random = Math.floor(Math.random() * arr.length);

    return arr[random];
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  var getRandomUniqueNumbersArr = function (maxNumber, count) {
    var numbersArr = [];
    for (var i = 0; i < count; i++) {
      var newArrNumber = Math.floor(Math.random() * maxNumber);
      if (numbersArr.includes(newArrNumber)) {
        i--;
      } else {
        numbersArr.push(newArrNumber);
      }
    }
    return numbersArr;
  };

  // Экспорт
  window.data = {
    // Времнно вернул (не работает сервер)
    NAMES: NAMES,
    SURNAMES: SURNAMES,
    // Константы
    COATCOLORS: COATCOLORS,
    EYESCOLORS: EYESCOLORS,
    FIREBALLCOLORS: FIREBALLCOLORS,
    CLOUD_WIDTH: CLOUD_WIDTH,
    CLOUD_HEIGHT: CLOUD_HEIGHT,
    CLOUD_X: CLOUD_X,
    CLOUD_Y: CLOUD_Y,
    CLOUD_SHADOW_GAP: CLOUD_SHADOW_GAP,
    BAR_MAX_HEIGHT: BAR_MAX_HEIGHT,
    BAR_WIDTH: BAR_WIDTH,
    BAR_X: BAR_X,
    BAR_Y: BAR_Y,
    BAR_GAP: BAR_GAP,
    // Переменные
    setup: setup,
    setupUserName: setupUserName,
    dialogHandle: dialogHandle,
    setupOpen: setupOpen,
    setupOpenIcon: setupOpenIcon,
    setupClose: setupClose,
    setupWizard: setupWizard,
    setupWizardForm: setupWizardForm,
    wizardCoat: wizardCoat,
    wizardEyes: wizardEyes,
    wizardFireball: wizardFireball,
    similarListElement: similarListElement,
    similarWizardTemplate: similarWizardTemplate,
    // Функции
    getRandomElement: getRandomElement,
    getMaxElement: getMaxElement,
    getRandomUniqueNumbersArr: getRandomUniqueNumbersArr
  };
})();
