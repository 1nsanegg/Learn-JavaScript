/* ===============================================
   Exercise 1: Delay Promise (warm-up)
================================================ */

// function delay(ms) {
//   // TODO:
//   // - return a Promise
//   // - resolve after ms milliseconds
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), ms);
//   });
// }

// // Test
// delay(1000).then(() => console.log("1 second passed"));

/* ===============================================
   Exercise 2: Simulate API request
================================================ */

// function fetchUser(id) {
//   // TODO:
//   // - return a Promise
//   // - after 1 second:
//   //   - resolve { id: 1, name: "Tuan" } if id === 1
//   //   - reject "User not found" otherwise
//   return new Promise((resolve, reject) => {
//     if (id === 1) {
//       setTimeout(() => resolve({ id: 1, name: "Tuan" }), 1000);
//     } else {
//       setTimeout(() => reject("User not found"),1000);
//     }
//   });
// }

// // Test
// fetchUser(1).then(console.log).catch(console.error);
// fetchUser(2).then(console.log).catch(console.error);

/* ===============================================
   Exercise 3: Image loader with timeout
================================================ */

function loadImage(url) {
  // TODO:
  // - return a Promise
  // - resolve(img) on load
  // - reject on error
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.alt = "An img";
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", () => reject("img not found"));
  });
}

function loadImageWithTimeout(url, timeout) {
  // TODO:
  // - race loadImage(url) with a timeout Promise
  const timeoutLoad = new Promise((_, reject) => {
    setTimeout(() => reject("false to load"), timeout);
  });
  return Promise.race([loadImage(url), timeoutLoad]);
}

// Test (replace IMAGE_URL)
loadImageWithTimeout(
  "https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg",
  3000
)
  .then((img) => document.body.appendChild(img))
  .catch(console.error);
