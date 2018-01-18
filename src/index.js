import forEach from 'lodash/forEach';
import map from 'lodash/map';
import isNil from 'lodash/isNil';
import isString from 'lodash/isString';
import isRegExp from 'lodash/isRegExp';
import cloneDeep from 'lodash/cloneDeep';
import assign from 'lodash/assign';
import hasIn from 'lodash/hasIn';

/**
 * Filters the identity according to filter parameters
 *
 * @param src {Object} identity map to filter
 * @param queries {Array} list of queries
 * @return {Object} filtered identity map
 */
export function filter(src, queries) {
  let $queries = queries;
  // Clean query
  if (isNil($queries)) {
    $queries = [/.*/];
  }
  $queries = map($queries, (value) => {
    if (isString(value) || isRegExp(value)) {
      return {
        regex: value,
      };
    }
    return value;
  });

  const dest = {};
  forEach(Object.keys(src), (key) => {
    forEach($queries, ({ regex }) => {
      if (isString(regex) ? key === regex : key.match(regex)) {
        dest[key] = src[key];
      }
    });
  });

  return dest;
}

function $merge(src, src2) {
  forEach(src2, (identity, key) => {
    const $identity = cloneDeep(identity);

    if (hasIn(src, key)) {
      assign(src[key], $identity);
    } else {
      /* eslint no-param-reassign:0 */
      src[key] = cloneDeep($identity);
    }
  });

  return src;
}

/**
 * Merges the properties of two identity maps
 *
 * @param src {Object} identity map #1
 * @param src2 {Object} identity map #2
 * @return {Object} merged identity map
 */
export function merge(src, src2) {
  return $merge($merge({}, src), src2);
}
