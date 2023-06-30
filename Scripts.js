const Crabsandcoins = [];
const TotalCrabsandcoins = 21;
let Score = 0;
// console.log('Anya')
addEventListener("keypress", function (e) {
  if (e.key === " ") {
    const ball = document.getElementById("ball");
    ball.classList.add("jump");
  }
  setTimeout(function () {
    document.getElementById("ball");
    ball.classList.remove("jump");
  }, 700);
});
const makeCrab = () => {
  const shouldmakecoin = Math.random() * 100 > 70;
  let element;
  if (shouldmakecoin) {
    const Coin = document.createElement("div");
    Coin.classList.add("Coin");
    element = document.createElement("div");
    element.classList.add("MoveRight");
    element.append(Coin);
  } else {
    element = document.createElement("img");
    element.classList.add("crab");
    element.classList.add("MoveRight");
    element.src = "crab.png";
  }
  const crabcontainer = document.getElementById("crabcontainer");
  crabcontainer.append(element);
  const randomNumber = Math.random() * 100;
  const toppixel = randomNumber + 250;
  element.style.top = toppixel + "px";
  const milliseconds = getRandomNumber(2000, 3000);
  Crabsandcoins.push(element);
  if (Crabsandcoins.length < TotalCrabsandcoins) {
    setTimeout(makeCrab, milliseconds);
  }
};
const CollisionDetection = () => {
  const CharacterRight = 138;
  const Character = document.getElementById("ball");
  const CharacterBottom = Character.getBoundingClientRect().bottom;
  Crabsandcoins.forEach((item, index) => {
    const shouldignore = item.classList.contains("ignore");
    const topIsTouching =
      item.getBoundingClientRect().bottom < CharacterBottom;
	  if (!shouldignore) {
		console.log('item.getBoundingClientRect().bottom', item.getBoundingClientRect().bottom)
	  }
    const isCrab = item.classList.contains("crab");
    const isPastCharacter = item.getBoundingClientRect().right < CharacterRight;
	if (isPastCharacter) {
		item.classList.add("ignore");
	}
    if (isPastCharacter && !shouldignore && topIsTouching) {
      console.log("Avoided!!");
      Score = isCrab ? Score - 1 : Score + 1;
      console.log(Score);
      item.classList.add("ignore");
      document.getElementById("Score").innerHTML = Score;
    }
  });
  requestAnimationFrame(CollisionDetection);
};

let calc = Math.floor(Math.random() * 100 + 1);
// console.log(calc);

const getRandomNumber = function (start, range) {
  let randomNumber = Math.floor(Math.random() * range + start);
  while (randomNumber > range) {
    randomNumber = Math.floor(Math.random() * range + start);
  }
  return randomNumber;
};
// console.log(getRandomNumber(500, 1500));
const milliseconds = getRandomNumber(500, 1500);
setTimeout(makeCrab, milliseconds);
requestAnimationFrame(CollisionDetection);
