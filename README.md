# maken

You want an array of n objects, all the same. Or, you really want to make
Douglas Crockford mad by using the `Array` constructor instead of the literal
form.

`maken` to the rescue!

## Usage

```javascript
var maken = require('maken');
var myArray = maken(3, 'blind mouse');
console.log(myArray); // ['blind mouse', 'blind mouse', 'blind mouse']
```

Optionally pass in a function instead of an object to make an array of whatever
the function returns instead!

```javascript
var maken = require('maken');

var i = 0;
function yolo() {
  return 'YOLO'.substr(i++, 1) || 'I HAVE BUT ONE LIFE TO YOLO';
}

var myYolos = maken(6, yolo); // ['Y', 'O', 'L', 'O', 'I HAVE BUT ONE LIFE TO YOLO', 'I HAVE BUT ONE LIFE TO YOLO'];
```

## Installation

```bash
npm install --save maken
```

Inspired by [@angustweets](https://twitter.com/angustweets).

## Does anyone even use this
It comes in handy all the time in testing. Also this inflates my npm statistics
and also my ego which is the purpose of existence.
