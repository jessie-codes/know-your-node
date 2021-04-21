/*
EXERCISE Two
  1 - Run the script using `node lib/loop.js`
  2 - Wrap the call to bar in a setTimeout with a delay of zero
  3 - Run the script again and see how it affects the output order
  4 - Instead of calling baz directly, wrap it in a promise and call it in the then clause
*/

const bar = () => {
  console.log('bar')
}

const baz = () => {
  console.log('baz')
}

const foo = () => {
  bar()
  baz()
  console.log('foo')
}

foo()