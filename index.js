'use strict';

/**
 * Returns the result of applying concat to the result of applying a function to values.
 *
 * @param {array} vals - an array of values
 * @param {function} fn
 * @param {object} ctx
 *
 * @return {array}
 */
module.exports = function mapconcat(vals, fn, ctx) {
  return Array.prototype.concat.apply([], vals.map(fn, ctx));
};
