let score_holder = document.querySelector(".score");
function start_game() {
  console.log("start_game works");
  object.classList.add("active");
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
  hit_sound.currentTime=0;
  hit_sound.play();
}

function miss(event) {
  if (event.target.id == "area") {
    console.log("miss works");
    score--;
    score_holder.textContent = `Score: ${score}`;
  }
  miss_sound.currentTime = 0;
  miss_sound.play();
  if (score <= -3) {
    finish_game();
  }
}
function finish_game() {
  object.classList.remove("active");
  alert("You Lose. Game over");
}
//change_obj_position on X
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

let score = 0;
let object = document.querySelector("#object");

const hit_sound = new Audio("sounds/hit.mp3");
const miss_sound = new Audio("sounds/miss.mp3");
