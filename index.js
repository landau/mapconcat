'use strict';

module.exports = function mapconcat(maps, fn, ctx) {
  return Array.prototype.concat.apply([], maps.map(fn, ctx));
};
