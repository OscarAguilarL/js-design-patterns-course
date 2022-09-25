function sum(a, b) {
  return a + b;
}

let res = sum(1, 2);

console.log(res);

const fSum = sum;
res = fSum(5, 6);
console.log(res);

function operation(fn, a, b) {
  console.log('se hace algo');
  console.log(fn(a, b));
}

operation(sum, 10, 20);

// arrow functions
operation((a, b) => a * b, 5, 5);
operation(
  (a, b) => {
    const c = a + b;
    return c * 2;
  },
  1,
  2
);

// forEach
const names = ['Oscar', 'Juan', 'Pablo'];
names.forEach((name, index) => console.log(name));
names.forEach((name, index) => console.log(name.toUpperCase()));

// map
const namesUpper = names.map((name) => name.toUpperCase());
console.log(namesUpper);

// reduce
const numbers = [5, 4, 7, 1, 10];
const total = numbers.reduce((acc, number) => acc + number, 0);

console.log(total);

class Drink {
  constructor(name) {
    this.name = name;
  }

  info() {
    return `El nombre de la bebida es: ${this.name}`;
  }
}

const drink = new Drink('Té');
console.log(drink.info());
