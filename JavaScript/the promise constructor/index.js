const promise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;
  if (success) {
    console.log("Operation successfull!");
  } else {
    console.log("Operation failed!");
  }
});
