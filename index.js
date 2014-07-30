/* make an array of size n of objects
 * `makeN(3, 'durp')` -> ['durp','durp', 'durp']
 * EAT YOUR HEART OUT CROCKFORD
 **/
function makeN(n, obj) {
  // gotta use .apply(null) because Array(n) makes a new empty array of size n and map behaves starngely
  // Array.apply(null, Array(n)) creates an array of size n with undefined as the value of every item
  // we can then call map on it to get back an array with n `obj`s.
  return Array.apply(null, Array(n)).map(function() { return obj; });
}

module.exports = makeN;
