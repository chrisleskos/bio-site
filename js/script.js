/* SIDEBAR NAVIGATION */

let night = false;

function openSidebar() {
  document.getElementById("sidebar").classList.add("open");
  document.body.classList.add("no-scroll");
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.body.classList.remove("no-scroll");
}

function navigateTo(elementId) {
  closeSidebar();

  // Wait for the slide-out animation to finish before scrolling
  setTimeout(() => {
    const target = document.getElementById(elementId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, 500);
}

/* NIGHT MODE TOGGLE */
function toggleNight(btn) {
  night = !night;
  lamps = document.getElementsByClassName("lamp");
  homeWindows = document.getElementsByClassName("window");
  wallClock = document.getElementsByClassName("wall-clock")[0];
  body = document.getElementsByTagName("body")[0];
  yardEl = document.getElementsByClassName("yard")[0];
  screens = document.getElementsByClassName("screen");

  for (i = 0; i < lamps.length; i++) lamps[i].classList.toggle("open-lamp");

  for (i = 0; i < homeWindows.length; i++)
    homeWindows[i].classList.toggle("night");

  for (i = 0; i < screens.length; i++) screens[i].classList.toggle("night");

  birdSound.currentTime = 0;
  night && birdSound.pause();

  if (btn) btn.classList.toggle("open");
  wallClock.classList.toggle("night");
  body.classList.toggle("night");
  yardEl.classList.toggle("night");
}

const yard = document.getElementsByClassName("yard")[0];
const birdSound = new Audio("../auxilary/sound/birds.wav");
birdSound.play();
birdSound.loop = true;

const yardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !night) {
        birdSound.currentTime = 0;
        birdSound.play();
      } else {
        birdSound.pause();
        birdSound.currentTime = 0;
      }
    });
  },
  {
    threshold: 0.2,
  },
);

yardObserver.observe(yard);

/* FOOTBALL KICK */
const football = document.getElementById("football");
const kickSound = new Audio("../auxilary/sound/ball-kick.wav");

football.addEventListener("click", function () {
  football.classList.toggle("kick");

  kickSound.currentTime = 0.1;
  kickSound.play();
});

/* CALCULATE AGE */
(() => {
  const ageElement = document.getElementById("years-old");
  const birthDate = new Date("2000-07-13");
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  ageElement.textContent = age;
})();

/* ===================
 *    TV START/STOP
 * =================== */

const livingRoom = document.getElementsByClassName("living-room")[0];
const tv = document.getElementById("tv");
const friendsVideo = tv.getElementsByTagName("video")[0];
tv.addEventListener("click", function () {
  tv.classList.toggle("open");
  tv.classList.contains("open") ? friendsVideo.play() : friendsVideo.pause();
});

const livingRoomObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        friendsVideo.muted = false;
      } else {
        friendsVideo.muted = true;
      }
    });
  },
  {
    threshold: 0.2,
  },
);

livingRoomObserver.observe(livingRoom);

function toggleDetailedDiagram(diagId) {
  const diag = document.getElementById(diagId);
  diag.style.display = diag.style.display === "flex" ? "none" : "flex";
  console.log(diag.querySelectorAll(".title-var")[0].innerHTML);
}
