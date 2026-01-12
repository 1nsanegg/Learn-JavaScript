/*************************************************
 * ASYNC / AWAIT HOMEWORK
 * Paste this file into VS Code and complete TODOs
 *************************************************/

/* ===============================================
   Part 1: Basics
================================================ */

// 1️⃣ Convert Promise to async function
// TODO: Rewrite getNumber using async so it returns 5

// BEFORE:
// function getNumber() {
//   return Promise.resolve(5);
// }

// AFTER:
const getNumber = async () => {
  // TODO
  return 5;
};

// Test
// getNumber().then(console.log);

/* ===============================================
   Part 2: Delay function
================================================ */

// 2️⃣ Create delay(ms)
// TODO: Return a Promise that resolves after ms milliseconds

const delay = (ms) => {
  // TODO
  return new Promise.resolve(ms)
};

// Test (should log after 1 second)
// async function testDelay() {
//   await delay(1000);
//   console.log("1 second passed");
// }
// testDelay();

/* ===============================================
   Part 3: Error handling
================================================ */

const fetchUser = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject("User not found"), 500);
  });

// 3️⃣ Use async/await + try/catch to handle error
// TODO: Call fetchUser and log error message

const loadUser = async () => {
  // TODO
  try {
    const data = await fetchUser()
    console.log(data)
  } catch (error) {
    console.error("Data not found!!!")
  }
};

// loadUser();

/* ===============================================
   Part 4: Sequential execution
================================================ */

// Helper tasks
const task1 = () => delay(1000);
const task2 = () => delay(1000);

// 4️⃣ Run task1, then task2 (sequential)
// TODO: Await task1 first, then task2, then log "Done"

const runSequential = async () => {
  // TODO
  const task1 = await task1()
  const task2 = await task2()
};

// runSequential();

/* ===============================================
   Part 5: Parallel execution
================================================ */

// 5️⃣ Run task1 and task2 in parallel
// TODO: Use Promise.all and log "Done"

const runParallel = async () => {
  // TODO
  const [a,b] = await Promise.all([task1(), task2()])
};

// runParallel();

/* ===============================================
   Bonus: Thinking question (comment only)
================================================ */

/*
6️⃣ Why is this wrong?

const data = await fetch(url);

👉 Answer:
- await can only be used inside an async function
- This code must be inside an async function or module
*/
