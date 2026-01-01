function logAnswer(a, b) {
  console.log(
    `The answer is ${a} of course! If you got that right, giver yourself ${b} point.`
  );
}

console.log("What is the capital of Peru?");

setTimeout(logAnswer, 3000, "Peru", 10);

// JavaScript run function -> put the function in CallStack, when function execute then remove it from the callStack. For special function like setTimeout, it put the function into WebAPI to count, then put it in callStack. Call Stack can only handle 1 function at a time ( JavaScript is single-threated)
