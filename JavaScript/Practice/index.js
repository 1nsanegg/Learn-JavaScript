// document.getElementById("count").innerText = 6;

let count = 0;
let countClick = document.getElementById("count")
function handleClick() {
  count++;
  countClick.innerText = count;
};
console.log(count)

function save() {
    console.log(count)
}