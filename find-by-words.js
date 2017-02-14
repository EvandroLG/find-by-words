/*
 * find-by-words
 * author: Evandro Leopoldino Gonçalves <evandrolgoncalves@gmail.com>
 * https://github.com/evandrolg
 * License: MIT
*/

(function (name, context, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition();
  else if (typeof define == 'function' && define.amd) define(definition)
  else context[name] = definition()
})('findByWords', this, function (name, context) {

  var _isEqual = function(word1, word2, caseSensitive) {
    if (caseSensitive) {
      return word1.toLowerCase() == word2.toLowerCase();
    }

    return word1 == word2;
  };

  var findByWords = function(a, word, caseSensitive) {
    var size = word.length;
    var first = 0;
    var last = a.length - 1;
    var found = false;
    var output = [];

    while(first <= last && !found) {
      var middle = Math.ceil((first + last) / 2);
      var wordPart = a[middle].slice(0, size);

      if (_isEqual(wordPart, word, caseSensitive)) {
        found = true;
        output.push(a[middle]);
        var _middle = middle;

        while (a[--_middle] && _isEqual(a[_middle].slice(0, size), word, caseSensitive)) {
          output.push(a[_middle]);
        }

        while (a[++middle] && _isEqual(a[middle].slice(0, size), word, caseSensitive)) {
          output.push(a[middle]);
        }

      } else if (wordPart > word) {
        last = middle - 1;
      } else {
        first = middle + 1;
      }
    }

    return output;
  };

  return findByWords;
});
