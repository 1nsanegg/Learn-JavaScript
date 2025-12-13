let data = [
  {
    player: "Jane",
    score: 52,
  },
  {
    player: "Mark",
    score: 41,
  },
];

// Fetch the button from the DOM, store it in a variable
const showJaneBtn = document.getElementById("show-jane-btn");

// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

showJaneBtn.addEventListener("click", function () {
  let janeScore = data[0].score;
  console.log(janeScore);
});
