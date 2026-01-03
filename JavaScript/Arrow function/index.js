// let speedWarning = (limitSpeed, speed) => {
//   if (speed > limitSpeed) {
//     return `You are going at ${speed} mph`;
//   }
// };

// console.log(speedWarning(30,20));

const distanceTraveledMiles = [267, 345, 234, 190, 299];

const distanceTraveledKm = distanceTraveledMiles.map((mile) =>
  Math.floor(mile * 1.6)
);

console.log(distanceTraveledKm);
