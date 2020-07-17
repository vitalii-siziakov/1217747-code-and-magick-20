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

  var setCoatColor = function (color) {
    window.wizardMain.coatColor = color;
  };

  var setEyesColor = function (color) {
    window.wizardMain.eyesColor = color;
  };

  var onCoatChange = window.debounce(function () {
    window.wizardMain.setupWizardCoat();
    setCoatColor((document.querySelector('.wizard').querySelector('.wizard-coat').style.fill));
    window.wizardsSimilar.updateSimilarWizards();
  });

  var onEyesChange = window.debounce(function () {
    window.wizardMain.setupWizardEyes();
    setEyesColor((document.querySelector('.wizard').querySelector('.wizard-eyes').style.fill));
    window.wizardsSimilar.updateSimilarWizards();
  });

  // // Обработчики на задание параметров
  window.data.wizardCoat.addEventListener('click', onCoatChange);
  window.data.wizardEyes.addEventListener('click', onEyesChange);
  window.data.wizardFireball.addEventListener('click', window.wizardMain.setupWizardFireball);

})();
