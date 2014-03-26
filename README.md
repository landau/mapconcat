[![Build Status](https://travis-ci.org/landau/mapconcat.svg)](https://travis-ci.org/landau/mapconcat)

mapconcat
=========

Returns the result of applying concat to the result of applying a function to arrays.  Thus the function should return an array.

## Install

`npm i -S mapconcat`

## Usage

```js
var assert = require('assert');
var mapconcat = require('./');

function reverse(arr) {
  return arr.reduce(function(acc, val, idx) {
    return acc.concat(arr[arr.length - idx - 1]);
  }, []);
}

var a = [3, 2, 1];
var b = [6, 5, 4];
var arr = mapconcat([a, b], reverse);
assert.deepEqual(arr, [1, 2, 3, 4, 5, 6]); // true
```
