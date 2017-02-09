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
  var findByWords = function(a, word) {
    var size = word.length;
    var first = 0;
    var last = a.length - 1;
    var found = false;
    var output = [];

    while(first <= last && !found) {
      var middle = Math.ceil((first + last) / 2);
      var wordPart = a[middle].slice(0, size);

      if (wordPart == word) {
        found = true;
        output.push(a[middle]);
        var _middle = middle;

        while (a[--_middle] && a[_middle].slice(0, size) == word) {
          output.push(a[_middle]);
        }

        while (a[++middle] && a[middle].slice(0, size) == word) {
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
