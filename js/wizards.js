'use strict';

(function () {

  var MAX_SIMILAR_WIZARD_COUNT = 4;
  var getRandomUniqueNumbersArr = window.data.getRandomUniqueNumbersArr;

  var createWizardBlock = function (wizard) {

    var wizardElement = window.data.similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderWizardsBlocks = function (wizardsArr) {
    var numbers = getRandomUniqueNumbersArr(wizardsArr.length, MAX_SIMILAR_WIZARD_COUNT);
    var fragment = document.createDocumentFragment();

    for (var b = 0; b < MAX_SIMILAR_WIZARD_COUNT; b++) {
      fragment.appendChild(createWizardBlock(wizardsArr[numbers[b]]));
    }

    window.data.similarListElement.appendChild(fragment);
  };

  window.wizards = {
    renderWizardsBlocks: renderWizardsBlocks
  };

})();
