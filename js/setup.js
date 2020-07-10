'use strict';

(function () {
// Функция: действия на Escape
  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      window.data.setup.classList.add('hidden');
      window.data.setup.querySelector('.setup-similar').classList.add('hidden');
    }
  };

  // Функция: показ окна настроек
  var showSetup = function () {
    window.data.setup.classList.remove('hidden');
    window.data.setup.querySelector('.setup-similar').classList.remove('hidden');
    // Добавляем обработчик на Escape
    document.addEventListener('keydown', onPopupEscPress);
  };

  // Функция: скрытие окна настроек
  var hideSetup = function () {
    window.data.setup.classList.add('hidden');
    window.data.setup.querySelector('.setup-similar').classList.add('hidden');
    // Удаляем обработчик на Escape
    document.removeEventListener('keydown', onPopupEscPress);
    window.data.setup.style.top = '';
    window.data.setup.style.left = '';
  };

  // Функция: задание параметра (случайное значение из массива значений)
  var setupWizardOption = function (varWithHandler, valuesArr, cssOptionName, inputName) {
    var input = document.querySelector('.setup-player input[name=' + inputName + ']');
    var color = window.data.getRandomElement(valuesArr);

    varWithHandler.style.cssText = cssOptionName + ':' + color;
    input.value = color;
  };

  // Функции: задание определенных параметров (случайное значение из массива значений)
  var setupWizardCoat = function () {
    setupWizardOption(window.data.wizardCoat, window.data.COATCOLORS, 'fill', 'coat-color');
  };

  var setupWizardEyes = function () {
    setupWizardOption(window.data.wizardEyes, window.data.EYESCOLORS, 'fill', 'eyes-color');
  };

  var setupWizardFireball = function () {
    setupWizardOption(window.data.wizardFireball, window.data.FIREBALLCOLORS, 'background', 'fireball-color');
  };

  // Задаем обработчики событий
  // Обработчики на открытие окна настроек

  // Клик
  window.data.setupOpen.addEventListener('click', function () {
    showSetup();
  });
  // Наведение с Enter
  window.data.setupOpenIcon.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      showSetup();
    }
  });

  // Обработчики на закрытие окна настроек
  window.data.setupClose.addEventListener('click', function () {
    hideSetup();
  });

  window.data.setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      hideSetup();
    }
  });

  // Если фокус находится на форме ввода имени, то окно не закрывается при нажатии Escape
  window.data.setupUserName.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      document.removeEventListener('keydown', onPopupEscPress);
    } else {
      document.addEventListener('keydown', onPopupEscPress);
    }
  });

  // Обработчики на задание параметров
  window.data.wizardCoat.addEventListener('click', setupWizardCoat);
  window.data.wizardEyes.addEventListener('click', setupWizardEyes);
  window.data.wizardFireball.addEventListener('click', setupWizardFireball);
})();
