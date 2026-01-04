// function add(a, b) {
//   return a + b;
// }

let total = (a, b) => a + b;

console.log(total(7, 9));

// function square(n) {
//   return n * n;
// }

let square = (n) => n * n;

console.log(square(2));

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((n) => n * 2);

console.log(doubledNumbers);

const evenNumber = numbers.filter((number) => number % 2 == 0);

console.log(evenNumber);

const arrTotal = numbers.reduce((number, total) => number + total, 0);

console.log(arrTotal);

const createUser = (name, age) => ({
  name: name,
  age: age,
});

console.log(createUser("tuan", 15));

const user = {
  name: "Tuan",
  sayHi: () => {
    console.log(this.name);
  },
};

user.sayHi();

const todos = [
  { title: "Learn JS", done: true },
  { title: "Practice LeetCode", done: false },
  { title: "Build project", done: false },
];

const unfinishedTodo = todos.filter((todo) => {
  if (todo.done == false) {
    return todo.title;
  }
});

console.log(unfinishedTodo);
