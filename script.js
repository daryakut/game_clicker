let score_holder = document.querySelector(".score");
function start_game() {
  console.log("start_game works");
  object.classList.add("active");
  score_holder.textContent = `Score: ${score}`;
}

function hit() {
  console.log("hit works");
  score++;
  score_holder.textContent = `Score: ${score}`;
  object.classList.remove("active");
  void object.offsetWidth;
  object.classList.add("active");
  change_obj_position();
  changeBackgroundColor();
  change_obj_size();
  hit_sound.currentTime = 0;
  hit_sound.play();
  if (score === 20) {
    showCongratulations();
    score = 0;
    object.classList.remove("active");
  }
}

function miss(event) {
  if (object.classList.contains("active")) {
    if (event.target.id == "area") {
      score--;
      score_holder.textContent = `Score: ${score}`;
    }
    miss_sound.currentTime = 0;
    miss_sound.play();
    if (score <= -3) {
      showLostGame();
      object.classList.remove("active");
    }
  }
}

function change_obj_position() {
  let position = Math.random() * 390;
  object.style.left = `${position}px`;
}

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const colors = [];
for (let i = 0; i < 500; i++) {
  colors.push(generateRandomColor());
}
function changeBackgroundColor() {
  const randomIndex1 = Math.floor(Math.random() * colors.length);
  object.style.backgroundColor = colors[randomIndex1];
}

function change_obj_size() {
  const size = Math.floor(Math.random() * 40) + 40;
  console.log(size);
  object.style.width = `${size}px`;
}

function showCongratulations() {
  let congratulations = document.querySelector(".congratulations");
  congratulations.textContent = "Congratulations! You won the game!";
  congratulations.classList.add("show");
  win_sound.play();
  setTimeout(() => {
    congratulations.classList.remove("show");
  }, 7000);
}

function showLostGame() {
  let congratulations = document.querySelector(".congratulations");
  congratulations.textContent = "You lost the game";
  congratulations.classList.add("show");
  gameover_sound.play();
  setTimeout(() => {
    congratulations.classList.remove("show");
  }, 6000);
}

let score = 0;
let object = document.querySelector("#object");
const congratulations = document.querySelector(".congratulations");

const hit_sound = new Audio("sounds/hit.mp3");
const miss_sound = new Audio("sounds/miss.mp3");
const win_sound = new Audio("sounds/win.mp3");
const gameover_sound = new Audio("sounds/gameover.mp3");
