var assert = require('assert');
var maken = require('../');

function test(text, test) {
  try {
    test()
  } catch (e) {
    console.error(text, 'failed!');
    console.error(e.stack);
    process.exit(1);
  }
}

test('it makes an array of n items', function() {
  var arr = maken(3, 'durp');
  assert(Array.isArray(arr));
  assert.equal(arr.length, 3);
  assert.deepEqual(['durp', 'durp', 'durp'], arr);
});
