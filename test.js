'use strict';

var assert = require('assert');
var mapconcat = require('./');

function reverse(arr) {
  return arr.reduce(function(acc, val, idx) {
    return acc.concat(arr[arr.length - idx - 1]);
  }, []);
}

describe('mapconcat', function() {
  it('should concat many arrays with an applied fn', function() {
    var a = [3, 2, 1];
    var b = [6, 5, 4];
    var arr = mapconcat([a, b], reverse);
    assert.deepEqual(arr, [1, 2, 3, 4, 5, 6]);
  });
});
