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

      while (a[--_middle].slice(0, size) == word) {
        output.push(a[_middle]); 
      }

      while (a[++middle].slice(0, size) == word) {
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

module.exports = searchByWords;
