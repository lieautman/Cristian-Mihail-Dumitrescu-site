const carouselImages = document.querySelectorAll("img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 0;
var i;

nextBtn.addEventListener("click", () => {
  switch (counter) {
    case 6:
      counter = 0;
      carouselImages[counter + 1].style.left = "25vw";
      carouselImages[counter].style.zIndex = "1";
      carouselImages[counter + 1].style.transition = "left 0.4s ease-in-out";
      carouselImages[counter + 1].style.opacity = "1";
      carouselImages[counter].style.opacity = "0";
      carouselImages[counter + 2].style.left = "75vw";
      carouselImages[counter].style.left = "-25vw";
      break;
    case 5:
      carouselImages[0].style.left = "25vw";
      carouselImages[counter].style.zIndex = "1";
      carouselImages[0].style.transition = "left 0.4s ease-in-out";
      carouselImages[0].style.opacity = "1";
      carouselImages[counter].style.opacity = "0";
      carouselImages[1].style.left = "75vw";
      carouselImages[counter].style.left = "-25vw";
      break;
    case 4:
      carouselImages[0].style.left = "75vw";
      carouselImages[counter + 1].style.left = "25vw";
      carouselImages[counter].style.zIndex = "1";
      carouselImages[counter + 1].style.transition = "left 0.4s ease-in-out";
      carouselImages[counter + 1].style.opacity = "1";
      carouselImages[counter].style.opacity = "0";
      carouselImages[counter].style.left = "-25vw";
      break;
    default:
      carouselImages[counter + 1].style.left = "25vw";
      carouselImages[counter].style.zIndex = "1";
      carouselImages[counter + 1].style.transition = "left 0.4s ease-in-out";
      carouselImages[counter + 1].style.opacity = "1";
      carouselImages[counter].style.opacity = "0";
      carouselImages[counter + 2].style.left = "75vw";
      carouselImages[counter].style.left = "-25vw";
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
      carouselImages[5].style.left = "25vw";
      carouselImages[5].style.transition = "left 0.4s ease-in-out";
      carouselImages[5].style.opacity = "1";
      carouselImages[0].style.opacity = "0";
      carouselImages[4].style.left = "-25vw";
      carouselImages[0].style.left = "75vw";
      carouselImages[5].style.zIndex = "6";
      break;
    case 0:
      counter = 6;
      carouselImages[5].style.left = "25vw";
      carouselImages[5].style.transition = "left 0.4s ease-in-out";
      carouselImages[5].style.opacity = "1";
      carouselImages[0].style.opacity = "0";
      carouselImages[4].style.left = "-25vw";
      carouselImages[0].style.left = "75vw";
      carouselImages[5].style.zIndex = "6";
      break;
    case 1:
      counter = 7;
      carouselImages[0].style.left = "25vw";
      carouselImages[0].style.transition = "left 0.4s ease-in-out";
      carouselImages[0].style.opacity = "1";
      carouselImages[1].style.opacity = "0";
      carouselImages[5].style.left = "-25vw";
      carouselImages[1].style.left = "75vw";
      carouselImages[0].style.zIndex = "6";
      break;
    default:
      carouselImages[counter - 1].style.left = "25vw";
      carouselImages[counter - 1].style.transition = "left 0.4s ease-in-out";
      carouselImages[counter - 1].style.opacity = "1";
      carouselImages[counter].style.opacity = "0";
      carouselImages[counter - 2].style.left = "-25vw";
      carouselImages[counter].style.left = "75vw";
      carouselImages[counter - 1].style.zIndex = "6";
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
