var assert = require('assert');
var findByWords = require('./find-by-words');

describe('find by words', function() {

  var verifyOutput = function(list, word, expected) {
    var output = findByWords(list, word);
    assert(expected.every((v, i) => v == output[i]));
  };

  it('should return an empty array', function() {
    verifyOutput(['banana', 'orange', 'apple'], 'gra', []);
  });

  it('should return an array with two items', function() {
    verifyOutput(['python', 'ruby', 'java', 'javascript', 'lua'],
        'java', ['java', 'javascript']);
  });
});
