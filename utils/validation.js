const errorHandler = require("./errorHandler");

module.exports = {
  makeTextUnique: function makeTextUnique(text) {
    const blockedChar = new RegExp("[^a-zA-Z ]");

    if (!blockedChar.test(text)) {
      return removeMultiplesAndSort(text);
    } else {
      return new Error("400");
    }
  }
};

function removeMultiplesAndSort(text) {
  var arrayLetters = text.trim().split("");

  var finalArray = arrayLetters.filter(function(letter, position) {
    return arrayLetters.indexOf(letter) >= position;
  });

  return finalArray
    .sort()
    .join("")
    .trim();
}
