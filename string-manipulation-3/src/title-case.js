/* exported titleCase
  make title all lowercase and then split each word into array
  loop over each word in array and check if word is equal to javascript or api
  in order to apply custom capitalization. then perform a check to make sure that
  shorter words that DO need to be capitalized, are, and ones that dont arent
  finally a check for special characters  */
function titleCase(title) {
  var wordsArray = title.toLowerCase();
  wordsArray = wordsArray.split(' ');
  var newWordsArray = [];
  var titledWords = '';
  for (var i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].toLowerCase().includes('javascript')) {
      if (wordsArray[i].includes(':')) {
        wordsArray[i] = 'JavaScript:';
        wordsArray[i + 1] = wordsArray[i + 1].charAt(0).toUpperCase() + wordsArray[i + 1].slice(1);
      } else {
        wordsArray[i] = 'JavaScript';
      }
      newWordsArray.push(wordsArray[i]);
    } else if (wordsArray[i].includes(':')) {
      wordsArray[i] = wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
      newWordsArray.push(wordsArray[i]);
      wordsArray[i + 1] = wordsArray[i + 1].charAt(0).toUpperCase() + wordsArray[i + 1].slice(1);
    } else if (i === 0 || wordsArray[i].length > 3) {
      var firstLetter = wordsArray[i].slice(0, 1);
      var otherLetters = wordsArray[i].slice(1, wordsArray[i].length);
      otherLetters = otherLetters.toLowerCase();
      if (otherLetters.includes('-')) {
        var whereHyphen = otherLetters.indexOf('-');
        var beforeHyphen = otherLetters.slice(0, whereHyphen + 1);
        var bigLetter = otherLetters[whereHyphen + 1].toUpperCase();
        var postCaps = otherLetters.slice(whereHyphen + 2, otherLetters.length);
        otherLetters = `${beforeHyphen}${bigLetter}${postCaps}`;
      }
      var firstWord = firstLetter.toUpperCase() + otherLetters;
      newWordsArray.push(firstWord);
    } else if (wordsArray[i].length <= 3 && wordsArray[i].toLowerCase() !== 'api' && wordsArray[i] !== 'and' &&
      wordsArray[i] !== 'or' && wordsArray[i] !== 'nor' && wordsArray[i] !== 'but' && wordsArray[i] !== 'a' &&
      wordsArray[i] !== 'an' && wordsArray[i] !== 'the' && wordsArray[i] !== 'as' && wordsArray[i] !== 'at' &&
      wordsArray[i] !== 'by' && wordsArray[i] !== 'for' && wordsArray[i] !== 'in' && wordsArray[i] !== 'of' &&
      wordsArray[i] !== 'on' && wordsArray[i] !== 'per' && wordsArray[i] !== 'to') {
      var lowerFirst = wordsArray[i].slice(0, 1);
      var lowerRest = wordsArray[i].slice(1, wordsArray[i].length);
      var correctWord = lowerFirst.toUpperCase() + lowerRest.toLowerCase();
      newWordsArray.push(correctWord);
    } else if (wordsArray[i].length <= 3 && i !== 0 && wordsArray[i].toLowerCase() !== 'api') {
      var shortSmallWord = wordsArray[i].toLowerCase();
      newWordsArray.push(shortSmallWord);
    } else if (wordsArray[i].toLowerCase() === 'api') {
      var bigAPI = wordsArray[i].toUpperCase();
      newWordsArray.push(bigAPI);
    }
  }
  titledWords += newWordsArray.join(' ');
  return titledWords;
}
