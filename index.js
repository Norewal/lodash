const _ = require('lodash');

//console.log(_.size('asd'));

console.log('*** Manipulating Strings ***');
console.log(_.toUpper('--> toUpper, toLower'));
console.log(_.toUpper('foobar'));
console.log(_.toLower('foo bar'));
console.log(_.toUpper(' USING toUpper and    space'));
console.log(_.toLower('USING toLower and some spec char.: @ -*'));
console.log(_.toUpper('-foo-bar-'));
console.log(_.toLower('-FooBar-'));

console.log(_.toUpper('--> upperCase, lowerCase'));
console.log(_.upperCase('ILikeProgramming'));
console.log(_.lowerCase('i_like_programming '));
console.log(_.lowerCase('i*ike**programming '));
console.log(_.upperCase('-foo-bar-'));
console.log(_.upperCase('foo bar'));
console.log(_.lowerCase('-FooBar-'));

console.log(_.toUpper('--> upperFirst & lowerFirst'));
console.log(_.upperFirst('i_like_programming'));
console.log(_.lowerFirst('ILikeProgramming '));
console.log(_.upperFirst('-foo-bar-'));
console.log(_.lowerFirst('-FooBar-'));

console.log(_.toUpper('--> capitalize vs upperFirst'));
console.log(_.capitalize('foobar'));
console.log(_.capitalize('fooBar'));
console.log(_.capitalize('fOOBAR'));
console.log(_.upperFirst('foobar'));
console.log(_.upperFirst('fOOBAR'));
console.log(_.capitalize('-foo-bar-'));
console.log(_.upperFirst('foo bar'));

console.log(_.toUpper('--> startCase'));
console.log(_.startCase('foobar'));
console.log(_.startCase('fooBar'));
console.log(_.startCase('fOoBar'));
console.log(_.startCase('foo bar'));
console.log(_.startCase('foo--bar'));
console.log(_.startCase('foo**Bar'));
console.log(_.startCase('foO**BAR'));
console.log(_.startCase('-foo-bar-'));

console.log(_.toUpper('--> _.pad & _.padStart & _.padEnd'));
console.log(_.pad('abc', 9));
console.log(_.pad('abc', 10, '-'));
console.log(_.pad('abc', 20, '+-'));
console.log(_.padStart('abc', 9));
console.log(_.padStart('abc', 10, '-'));
console.log(_.padStart('abc', 20, '+-'));
console.log(_.padEnd('abc', 9));
console.log(_.padEnd('abc', 10, '-'));
console.log(_.padEnd('abc', 20, '+-'));

console.log(_.toUpper('--> _.trim & _.trimStart & _.trimEnd'));
console.log(_.trim(' hello     '));
console.log(_.trim('&&&hello&', '&'));
console.log(_.trim('+-hello-+', '+-'));
console.log(_.map(['hello     ', '  bye '],  _.trim));
console.log(_.trimStart(' hello     '));
console.log(_.trimEnd(' hello     '));
console.log(_.trimStart('+hello+', '+'));
console.log(_.trimEnd('+hello+', '+'));