'use strict';

(function () {

  var MAX_SIMILAR_WIZARD_COUNT = 4;

  var wizards = [];

  var createWizard = function (name, surname, coatColors, eyesColors) {
    var wizard = {
      name: window.data.getRandomElement(name) + ' ' + window.data.getRandomElement(surname),
      colorCoat: window.data.getRandomElement(coatColors),
      colorEyes: window.data.getRandomElement(eyesColors)
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
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderWizardsBlocks = function (wizardsArr) {
    var fragment = document.createDocumentFragment();
    var similarList = document.querySelector('.setup-similar-list');
    similarList.innerHTML = '';
    for (var i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(createWizardBlock(wizardsArr[i]));
    }

    similarList.appendChild(fragment);
  };

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === window.wizardMain.coatColor) {
      rank += 2;
    } if (wizard.colorEyes === window.wizardMain.eyesColor) {
      rank += 1;
    } return rank;
  };

  var updateSimilarWizards = function () {
    for (var i = 0; i < wizards.length; i++) {
      wizards[i].rank = getRank(wizards[i]);
    }

    wizards.sort(function (leftWizard, rigthWizard) {
      if (leftWizard.rank < rigthWizard.rank) {
        return 1;
      } if (leftWizard.rank > rigthWizard.rank) {
        return -1;
      } return 0;
    });
    renderWizardsBlocks(wizards);
  };

  // var onLoad = function (data) {
  //   wizards = data;
  //   updateSimilarWizards();
  // };

  // window.backend.load(onLoad, window.backend.onError);

  var onLoad = function () {
    wizards = createWizards(15);
    updateSimilarWizards();
  };

  onLoad();

  window.wizardsSimilar = {
    updateSimilarWizards: updateSimilarWizards
  };

})();
