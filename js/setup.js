'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
userDialog.querySelector('.setup-similar').classList.remove('hidden');

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

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

var wizards = createWizards(4);

renderWizardsBlocks(wizards);
