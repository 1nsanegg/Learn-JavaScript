greet = (name = "Guest") => console.log(`Hello ${name}`);
greet();
greet("Tuan");

calculatePrice = (price, tax = 0.1) => {
  console.log(price + price * tax);
};

calculatePrice(100);

calculatePrice(100, 0.2);

const user = { name: "Tuan", age: 25 };

showUser = (user) => console.log(`${user.name} is ${user.age} years old`);

showUser(user);

const users = [
  { name: "Tuan", active: true },
  { name: "Lan", active: false },
  { name: "Minh", active: true },
];

let activeUser = users
  .filter((user) => user.active === true)
  .map((user) => user.name);

console.log(activeUser);

// const counter = {
//   count: 0,
//   increment: () => {
//     this.count++;
//   },
// };

// counter.increment();
// console.log(counter.count);

// this will log 'undified' cause this refer to the outer scope of this object

const timer = {
  seconds: 0,
  start() {
    setInterval(() => {
      seconds++;
    }, 1000);
  },
};

timer.start();

//<button onClick={() => handleDelete(id)}>Delete</button>;
// this is preferred cause you can pass the param to the function
