let moleHere;
let score = document.querySelector("span");

let molePopUp = function () {
  let prevSquare;
  let randomNumber = Math.floor(Math.random() * 29);
  let squareClass = `.cell0` + randomNumber;
  moleHere = document.querySelector(squareClass);

  while (moleHere === prevSquare) {
    if (moleHere.classList.contains("hit")) {
      moleHere.classList.remove("hit");
    } else if (moleHere.classList.contains("miss")) {
      moleHere.classList.remove("miss");
    }
  }
  randomNumber = Math.floor(Math.random() * 29);
  squareClass = `.cell0` + randomNumber;
  moleHere = document.querySelector(squareClass);

  prevSquare = moleHere;
  console.log(squareClass);
  moleHere.classList.add("mole");
};
molePopUp();
//----------------------------------------------------
let tryHit = function () {
  console.log("trying hit");
  const tryArray = ["hit", "miss", "hit"];
  let thisTry = tryArray[Math.floor(Math.random() * 3)];
  let prevHit = document.querySelector(".hit");
  let prevMiss = document.querySelector(".miss");
  if (prevHit) {
    prevHit.classList.remove("hit");
  } else if (prevMiss) {
    prevMiss.classList.remove("miss");
  }
  moleHere.classList.replace("mole", thisTry);
  if (thisTry === "hit") {
    ++score.textContent;
  }
  molePopUp();
};

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("mole")) {
    tryHit();
  }
});