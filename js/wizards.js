'use strict';

(function () {
  var createWizard = function (name, surname, coatColor, eyesColor) {
    var wizard = {
      name: window.data.getRandomElement(name) + ' ' + window.data.getRandomElement(surname),
      coatColor: window.data.getRandomElement(coatColor),
      eyesColor: window.data.getRandomElement(eyesColor)
    };

    return wizard;
  };

  var createWizards = function (wizardsCount) {
    var wizardsArr = [];

    for (var i = 0; i < wizardsCount; i++) {
      wizardsArr.push(createWizard(window.data.NAMES, window.data.SURNAMES, window.data.COATCOLORS, window.data.EYESCOLORS));
    }

    return wizardsArr;
  };

  var createWizardBlock = function (wizard) {

    var wizardElement = window.data.similarWizardTemplate.cloneNode(true);

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

    window.data.similarListElement.appendChild(fragment);
  };

  var wizards = createWizards(4);
  renderWizardsBlocks(wizards);

})();
