var assert = require('assert');
var findByWords = require('./find-by-words');

describe('find by words', function() {

  var verifyOutput = function(list, word, expected, caseSensitive) {
    var output = findByWords(list, word, caseSensitive);
    assert(expected.every((v, i) => v == output[i]));
  };

  it('should return an empty array', function() {
    verifyOutput(['banana', 'orange', 'apple'], 'gra', []);
  });

  it('should return an array with two items', function() {
    verifyOutput(['python', 'ruby', 'java', 'javascript', 'lua'],
        'java', ['java', 'javascript']);
  });

  it('should return an array with two items using case sensitive comparation', function() {
    verifyOutput(['python', 'ruby', 'Java', 'JavaScript', 'lua'],
        'java', ['Java', 'JavaScript'], true);
  });

  it('should return an empty array with because caseSenstive parameter is undefined', function() {
    verifyOutput(['python', 'ruby', 'Java', 'JavaScript', 'lua'],
        'java', []);
  });

  it('should return an empty array with because caseSenstive parameter is false', function() {
    verifyOutput(['python', 'ruby', 'Java', 'JavaScript', 'lua'],
        'java', [], false);
  });
});
