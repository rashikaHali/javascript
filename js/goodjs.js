// Code this, not that

// CONSOLE LOGS
// Tricks to console.log in better ways
const foo = { name: 'Foo', age: 30 };
const bar = { name: 'Bar', age: 40 };
const bla = { name: 'Bla', age: 50 };

// Noob
console.log(foo);
console.log(bar);
console.log(bla);

// Pro (logs with names, reduces code)
console.log({ foo, bar, bla })

// If data is important and we want to make it stand out
// 2nd arg is css style
console.log('%c Title or heading', 'color: orange; font-weight: bold')

// Objects in the above example share common properties so that can be displayed in a table
console.table([foo, bar, bla]);

// For benchmarking performance, you can keep track of time
console.time('looper')

let i = 0;
while (i < 100) { i++ }

console.timeEnd('looper')

// To know where a console log originated from
// will tell where fn was defined and where it was called
const deleteme = () => console.trace('bye bye db')

deleteme()
deleteme()

// DESTRUCTURING
// can be done in arguments or inside the function

const animal = {
  name: 'Dog',
  age: 10,
}

// TEMPLATE LITERALS

// Bad code:
let str = animal.name + ' is ' + animal.age;

//Good code:
const { name, age } = animal;
str = `${name} is ${age}`;

// Advanced tag example

function animalage(str, age) {
  const ageStr = age > 5 ? 'old' : 'young'
  return `${str[0]}${ageStr} at ${age} years`
}
// You can take a single argument and use it to compose multiple values in return statement
const bio2 = animalage`This horse is ${animal.age}`;

// SPREAD SYNTAX
const pikachu = { name: 'Pikachu' }
const stats = { hp: 45, attack: 60, defence: 40 }

// Bad ( mutating an old object, but we want a new one )
pikachu['hp'] = stats.hp
pikachu['attack'] = stats.attack
pikachu['defence'] = stats.defence
// This will merge them together from left to right
const lvl0 = Object.assign(pikachu, stats)
const lvl1 = Object.assign(pikachu, { hp: 40 }) // for single property

// Good
// will create a new object from left to right
const lvl00 = Object.assign(...pikachu, ...stats);
const lvl01 = Object.assign(...pikachu, { hp: 50 });
// property farthest to right will have priority

// for Array
// Bad
let pokemon = ['Bulba', 'Pikachu', 'Eevee']
pokemon.push('Weedle');
pokemon.push('Raichu');

// Good
// Push
pokemon = [ ...pokemon, 'Weedle', 'Raichu' ]

// Unshift
pokemon = [ 'Weedle', 'Raichu', ...pokemon ]
pokemon = [ 'Weedle', ...pokemon, 'Raichu' ]

// LOOPS
const orders = [100, 34, 55, 77, 45]

// Bad ( normal for loop )
const total = 0;
const withTax = [];
const highValue = [];
for (i=0; i < orders.length; i++) {
  // Reduce
  total += orders[i]
  // Map
  withTax.push(order[i] * 1.1)
  // Filter
  if (orders[i] > 100) {
    highValue.push(orders[i])
  }
}

// Good
// Reduce
const total = orders.reduce((acc, curr) => acc + curr); // accumulated and current value
// Map
const withTax = orders.map((o) => o * 1.1);
// Filter
const highValue = orders.filter((o) => o > 100);

// ASYNC / AWAIT
const random = () => {
  return Promise.resolve(Math.random())
}

// Bad (unnecessary chaining)
const sumRandomNums = () => {
  let first;
  let second;
  let third;
  return random().then((t) => {
    first = t;
    return random();
  }).then((v) => {
    second = v
    return random();
  }).then((b) => {
    third = b
    return first + second + third;
  })
}

// Good (async / await)
// async will force it to return a promise
// we can use await in front of our promises and have them resolve to a variable value
const sumRandomNums = async() => {
  const first = await random();
  const second = await random();
  const third = await random();
  console.log(first + second + third);
}