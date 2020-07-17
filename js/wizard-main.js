'use strict';

(function () {
  var wizard = {
    coatColor: 'rgb(101, 137, 164)',
    eyesColor: 'black'
  };

  // Функции: задание параметров главного мага (Игрок)
  var setupWizardCoat = function () {
    var input = document.querySelector('.setup-player input[name=coat-color]');
    var color = window.data.getRandomElement(window.data.COATCOLORS);
    window.data.wizardCoat.style.cssText = 'fill' + ':' + color;
    input.value = color;
  };

  var setupWizardEyes = function () {
    var input = document.querySelector('.setup-player input[name=eyes-color]');
    var color = window.data.getRandomElement(window.data.EYESCOLORS);
    window.data.wizardEyes.style.cssText = 'fill' + ':' + color;
    input.value = color;
  };

  var setupWizardFireball = function () {
    var input = document.querySelector('.setup-player input[name=fireball-color]');
    var color = window.data.getRandomElement(window.data.FIREBALLCOLORS);
    window.data.wizardFireball.style.cssText = 'background' + ':' + color;
    input.value = color;
  };

  window.wizardMain = {
    coatColor: wizard.coatColor,
    eyesColor: wizard.eyesColor,
    setupWizardCoat: setupWizardCoat,
    setupWizardEyes: setupWizardEyes,
    setupWizardFireball: setupWizardFireball,
  };

})();
