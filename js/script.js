/* SIDEBAR NAVIGATION */

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
  lamps = document.getElementsByClassName("lamp");
  homeWindows = document.getElementsByClassName("window");
  wallClock = document.getElementsByClassName("wall-clock")[0];
  body = document.getElementsByTagName("body")[0];
  yard = document.getElementsByClassName("yard")[0];
  screens = document.getElementsByClassName("screen");

  for (i = 0; i < lamps.length; i++) lamps[i].classList.toggle("open-lamp");

  for (i = 0; i < homeWindows.length; i++)
    homeWindows[i].classList.toggle("night");

  for (i = 0; i < screens.length; i++) screens[i].classList.toggle("night");

  btn.classList.toggle("open");
  wallClock.classList.toggle("night");
  body.classList.toggle("night");
  yard.classList.toggle("night");
}

/* FOOTBALL KICK */
football = document.getElementById("football");

football.addEventListener("click", function () {
  football.classList.toggle("kick");
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
