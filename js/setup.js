'use strict';
// Константы
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALLCOLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// Переменные
var setup = document.querySelector('.setup');
var setupUserName = document.querySelector('.setup-user-name');

var setupOpen = document.querySelector('.setup-open');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var setupClose = document.querySelector('.setup-close');

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

var similarListElement = setup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Функции
var getRandomElement = function (array) {
  var random = Math.floor(Math.random() * array.length);

  return array[random];
};

var createWizard = function (name, surname, coatColor, eyesColor) {
  var wizard = {
    name: getRandomElement(name) + ' ' + getRandomElement(surname),
    coatColor: getRandomElement(coatColor),
    eyesColor: getRandomElement(eyesColor)
  };

  return wizard;
};

var createWizards = function (wizardsCount) {
  var wizardsArr = [];

  for (var i = 0; i < wizardsCount; i++) {
    wizardsArr.push(createWizard(NAMES, SURNAMES, COATCOLORS, EYESCOLORS));
  }

  return wizardsArr;
};

var createWizardBlock = function (wizard) {

  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;

};

var renderWizardsBlocks = function (wizardsArr) {

  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizardsArr.length; i++) {
    fragment.appendChild(createWizardBlock(wizardsArr[i]));
  }

  similarListElement.appendChild(fragment);
};

// Функция: действия на Escape
var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    setup.classList.add('hidden');
    setup.querySelector('.setup-similar').classList.add('hidden');
  }
};

// Функция: показ окна настроек
var showSetup = function () {
  setup.classList.remove('hidden');
  setup.querySelector('.setup-similar').classList.remove('hidden');
  // Добавляем обработчик на Escape
  document.addEventListener('keydown', onPopupEscPress);
};

// Функция: скрытие окна настроек
var hideSetup = function () {
  setup.classList.add('hidden');
  setup.querySelector('.setup-similar').classList.add('hidden');
  // Удаляем обработчик на Escape
  document.removeEventListener('keydown', onPopupEscPress);
};

// Функция: задание параметра (случайное значение из массива значений)
var setupWizardOption = function (varWithHandler, valuesArr, cssOptionName, inputName) {
  var input = document.querySelector('.setup-player input[name=' + inputName + ']');
  var color = getRandomElement(valuesArr);

  varWithHandler.style.cssText = cssOptionName + ':' + color;
  input.value = color;
};

// Функции: задание определенных параметров (случайное значение из массива значений)
var setupWizardCoat = function () {
  setupWizardOption(wizardCoat, COATCOLORS, 'fill', 'coat-color');
};

var setupWizardEyes = function () {
  setupWizardOption(wizardEyes, EYESCOLORS, 'fill', 'eyes-color');
};

var setupWizardFireball = function () {
  setupWizardOption(wizardFireball, FIREBALLCOLORS, 'background', 'fireball-color');
};

// Инструкции
// Создаем объекты и добавляем их на страницу
var wizards = createWizards(4);
renderWizardsBlocks(wizards);

// Задаем обработчики событий
// Обработчики на открытие окна настроек

// Клик
setupOpen.addEventListener('click', function () {
  showSetup();
});
// Наведение с Enter
setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    showSetup();
  }
});

// Обработчики на закрытие окна настроек
setupClose.addEventListener('click', function () {
  hideSetup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    hideSetup();
  }
});

// Если фокус находится на форме ввода имени, то окно не закрывается при нажатии Escape
setupUserName.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    document.removeEventListener('keydown', onPopupEscPress);
  } else {
    document.addEventListener('keydown', onPopupEscPress);
  }
});

// Обработчики на задание параметров
wizardCoat.addEventListener('click', setupWizardCoat);
wizardEyes.addEventListener('click', setupWizardEyes);
wizardFireball.addEventListener('click', setupWizardFireball);
