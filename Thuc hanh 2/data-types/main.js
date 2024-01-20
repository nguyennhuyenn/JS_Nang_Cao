// String
const lastName = 'Duc';

// Number 
const age = 20;
const heigh = 176;

// boolean | Sử dụng is và has
const hasCar = false;
const isMarried = false;

// Null 
const address = null;

// undefined
const bruh = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const n = 9007199254740991n;

// Reference Types

const numbers = [1, 2, 3, 4];

const person = {
  name: 'Brad',
};

function sayHello() {
  console.log('Hello');
}

const output = sayHello;

console.log(output, typeof output);