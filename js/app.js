const carouselImages = document.querySelectorAll(".display");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 0;
var i;

carouselImages[counter].style.left = "-50vw";
carouselImages[counter].style.left = "0vw";

nextBtn.addEventListener("click", () => {
  switch (counter) {
    case 6:
      counter = 0;
      carouselImages[counter + 1].style.left = "0vw";
      carouselImages[counter].style.zIndex = "1";
      carouselImages[counter + 1].style.opacity = "1";
      carouselImages[counter + 2].style.left = "50vw";
      carouselImages[counter].style.left = "-50vw";
      nextBtn.disabled = true;
      prevBtn.disabled = true;
      setTimeout(function () {
        carouselImages[counter - 1].style.opacity = "0";
        nextBtn.disabled = false;
        prevBtn.disabled = false;
      }, 400);

      break;
    case 5:
      carouselImages[0].style.left = "0vw";
      carouselImages[counter].style.zIndex = "1";
      carouselImages[0].style.opacity = "1";
      carouselImages[1].style.left = "50vw";
      carouselImages[counter].style.left = "-50vw";
      nextBtn.disabled = true;
      prevBtn.disabled = true;
      setTimeout(function () {
        carouselImages[counter - 1].style.opacity = "0";
        nextBtn.disabled = false;
        prevBtn.disabled = false;
      }, 400);
      break;
    case 4:
      carouselImages[0].style.left = "50vw";
      carouselImages[counter + 1].style.left = "0vw";
      carouselImages[counter].style.zIndex = "1";
      carouselImages[counter + 1].style.opacity = "1";
      carouselImages[counter].style.left = "-50vw";
      nextBtn.disabled = true;
      prevBtn.disabled = true;
      setTimeout(function () {
        carouselImages[counter - 1].style.opacity = "0";
        nextBtn.disabled = false;
        prevBtn.disabled = false;
      }, 400);
      break;
    default:
      carouselImages[counter + 1].style.left = "0vw";
      carouselImages[counter].style.zIndex = "1";
      carouselImages[counter + 1].style.opacity = "1";
      carouselImages[counter + 2].style.left = "50vw";
      carouselImages[counter].style.left = "-50vw";
      nextBtn.disabled = true;
      prevBtn.disabled = true;
      setTimeout(function () {
        carouselImages[counter - 1].style.opacity = "0";
        nextBtn.disabled = false;
        prevBtn.disabled = false;
      }, 400);
      break;
  }

  for (i = counter + 1; i <= 5; i++) {
    carouselImages[i].style.zIndex = carouselImages.length + 1 - i + counter;
  }
  for (i = 0; i < counter; i++) {
    carouselImages[i].style.zIndex = carouselImages.length - 5 - i + counter;
  }

  counter++;
  console.log(counter);
});
prevBtn.addEventListener("click", () => {
  switch (counter) {
    case 6:
      carouselImages[5].style.left = "0vw";
      carouselImages[5].style.opacity = "1";

      carouselImages[4].style.left = "-50vw";
      carouselImages[0].style.left = "50vw";
      carouselImages[5].style.zIndex = "6";
      nextBtn.disabled = true;
      prevBtn.disabled = true;
      setTimeout(function () {
        carouselImages[0].style.opacity = "0";
        nextBtn.disabled = false;
        prevBtn.disabled = false;
      }, 400);
      break;
    case 0:
      counter = 6;
      carouselImages[5].style.left = "0vw";
      carouselImages[5].style.opacity = "1";

      carouselImages[4].style.left = "-50vw";
      carouselImages[0].style.left = "50vw";
      carouselImages[5].style.zIndex = "6";
      nextBtn.disabled = true;
      prevBtn.disabled = true;
      setTimeout(function () {
        carouselImages[0].style.opacity = "0";
        nextBtn.disabled = false;
        prevBtn.disabled = false;
      }, 400);
      break;
    case 1:
      counter = 7;
      carouselImages[0].style.left = "0vw";
      carouselImages[0].style.opacity = "1";
      carouselImages[5].style.left = "-50vw";
      carouselImages[1].style.left = "50vw";
      carouselImages[0].style.zIndex = "6";
      nextBtn.disabled = true;
      prevBtn.disabled = true;
      setTimeout(function () {
        carouselImages[1].style.opacity = "0";
        nextBtn.disabled = false;
        prevBtn.disabled = false;
      }, 400);
      break;
    default:
      carouselImages[counter - 1].style.left = "0vw";
      carouselImages[counter - 1].style.opacity = "1";
      carouselImages[counter - 2].style.left = "-50vw";
      carouselImages[counter].style.left = "50vw";
      carouselImages[counter - 1].style.zIndex = "6";
      nextBtn.disabled = true;
      prevBtn.disabled = true;
      setTimeout(function () {
        carouselImages[counter + 1].style.opacity = "0";
        nextBtn.disabled = false;
        prevBtn.disabled = false;
      }, 400);
      break;
  }

  for (i = 0; i < counter - 1; i++) {
    carouselImages[i].style.zIndex = counter - i - 1;
  }
  for (i = counter; i <= 5; i++) {
    carouselImages[i].style.zIndex = counter - i + 5;
  }

  counter--;
  console.log(counter);
});
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navlist");
  const navLinks = document.querySelectorAll(".navlist li");

  burger.addEventListener("click", () => {
    //Toggle nav
    nav.classList.toggle("nav-active");

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
