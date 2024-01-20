// ||= gán giá trị bên phải chỉ khi bên trái là giá trị falsy.

let a = null;

// if (!a) {
//   a = 10;
// }

// a = a || 10;

a ||= 10;

console.log(a);

// &&= gán giá trị bên phải chỉ khi bên trái là giá trị truthy.

let b = 10;

if (b) {
  b = 20;
}

b = b && 20;

b &&= 20;

console.log(b);

// ??= gán giá trị bên phải chỉ khi bên trái là null hoặc undefined.

let c = null;

if (c === null || c === undefined) {
  c = 20;
}

c = c ?? 20;

c ??= 20;

console.log(c);