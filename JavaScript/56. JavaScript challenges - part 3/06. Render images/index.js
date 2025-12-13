// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];

const imgEl = document.getElementById("container");

function render3Img(arr) {
  let listImg = "";
  arr.forEach((img) => {
    listImg += `
            <img class="team-img" src=${img}>
        `;
  });
  imgEl.innerHTML = listImg;
}

render3Img(imgs);
