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

## Installation

```bash
npm install --save maken
```

Inspired by [@angustweets](https://twitter.com/angustweets).

## Does anyone even use this
It comes in handy all the time in testing. Also this inflates my npm statistics
and also my ego which is the purpose of existence.
