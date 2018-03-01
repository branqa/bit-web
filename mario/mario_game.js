var background = document.querySelector("body");
var marioRun = document.querySelector("#mario-run");
var marioStand = document.querySelector("#mario-stop");

marioRun.classList.add("invisible");

var run = false;
var interval;
function moveBackground() {
  var x = 0;
  interval = setInterval(function() {
    x -= 1;
    background.style.backgroundPosition = x + "px 500px";
  }, 10);
}

background.addEventListener("keydown", function(event) {
  if (event.key == "ArrowRight" && run == false) {
    marioStand.classList.add("invisible");
    marioRun.classList.add("visible");
    moveBackground();
  }
  run = true;
});

background.addEventListener("keyup", function(event) {
  marioRun.classList.remove("visible");
  marioStand.classList.remove("invisible");
  clearInterval(interval);
  run = false;
});
