/* make an array of size n of objects
 * `makeN(3, 'durp')` -> ['durp','durp', 'durp']
 *
 * Optionally pass in a function, and make an array of size n of whatever
 * that function returns.
 *
 * `makeN(100, Math.random)` -> 100 random numbers
 * EAT YOUR HEART OUT CROCKFORD
 **/
function makeN(n, obj) {
  function map() {
    if (typeof obj == 'function') {
      return obj();
    } else {
      return obj;
    }
  }
  // gotta use .apply(null) because Array(n) makes a new empty array of size n
  // and map behaves strangely
  //
  // Array.apply(null, Array(n)) creates an array of size n with undefined as
  // the value of every item
  //
  // we can then call map on it to get back an array with n `obj`s.
  return Array.apply(null, Array(n)).map(map);
}

module.exports = makeN;
