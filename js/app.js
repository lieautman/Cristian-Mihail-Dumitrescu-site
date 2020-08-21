const carouselSlide = () => {

  const carouselImages = document.querySelectorAll(".display");

  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");

  let counter = 0;
  var i;

  const nrImages = carouselImages.length;

  carouselImages[counter].style.left = "-50vw";
  carouselImages[counter].style.left = "0vw";
  const initFunctionStyle = () => {
    for (i = 1; i <= nrImages; i++) {
      var currentChild = document.querySelector(`.display:nth-child(${i})`);
      currentChild.style.zIndex = `${nrImages - i + 1}`;
      if (i !== 1) currentChild.style.opacity = "0";
      if (i === 2) currentChild.style.left = "50vw";
      if (i === nrImages) currentChild.style.left = "-50vw";
    }
  };
  initFunctionStyle();

  nextBtn.addEventListener("click", () => {
    switch (counter) {
      case nrImages:
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
      case nrImages - 1:
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
      case nrImages - 2:
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

    for (i = counter + 1; i <= nrImages - 2; i++) {
      carouselImages[i].style.zIndex = nrImages + 1 - i + counter;
    }
    for (i = 0; i < counter; i++) {
      carouselImages[i].style.zIndex = nrImages - 5 - i + counter;
    }

    counter++;
    console.log(counter);
  });
  prevBtn.addEventListener("click", () => {
    switch (counter) {
      case nrImages:
        carouselImages[nrImages - 1].style.left = "0vw";
        carouselImages[nrImages - 1].style.opacity = "1";

        carouselImages[nrImages - 2].style.left = "-50vw";
        carouselImages[0].style.left = "50vw";
        carouselImages[nrImages - 1].style.zIndex = "6";
        nextBtn.disabled = true;
        prevBtn.disabled = true;
        setTimeout(function () {
          carouselImages[0].style.opacity = "0";
          nextBtn.disabled = false;
          prevBtn.disabled = false;
        }, 400);
        break;
      case 0:
        counter = nrImages;
        carouselImages[nrImages - 1].style.left = "0vw";
        carouselImages[nrImages - 1].style.opacity = "1";

        carouselImages[nrImages - 2].style.left = "-50vw";
        carouselImages[0].style.left = "50vw";
        carouselImages[nrImages - 1].style.zIndex = "6";
        nextBtn.disabled = true;
        prevBtn.disabled = true;
        setTimeout(function () {
          carouselImages[0].style.opacity = "0";
          nextBtn.disabled = false;
          prevBtn.disabled = false;
        }, 400);
        break;
      case 1:
        counter = nrImages + 1;
        carouselImages[0].style.left = "0vw";
        carouselImages[0].style.opacity = "1";
        carouselImages[nrImages - 1].style.left = "-50vw";
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
    for (i = counter; i <= nrImages - 1; i++) {
      carouselImages[i].style.zIndex = counter - i + 5;
    }

    counter--;
    console.log(counter);
  });

};


const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navlist");
  const navLinks = document.querySelectorAll(".navlist li");

  burger.addEventListener("click", () => {
    //Toggle nav
    nav.classList.toggle("nav-active1");
    setTimeout(() => {
      nav.classList.toggle("nav-active2");
    }, 1);

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




const buttonToggle = () => {
  const buttonul = document.querySelector(".toggle-button");
  const container = document.querySelector(".container");
  let a = 0;
  if (cookies1Enabled() == 1) a = 1;

  buttonul.addEventListener("click", () => {
    buttonul.classList.toggle("toggle-button-active");
    container.classList.toggle("container-deactivate-scroll");
    if (a % 2 == 0 && document.cookie.match(/light/i) != null) document.cookie = ' deactivated light';
    else if (a % 2 == 0 && document.cookie.match(/light/i) == null) document.cookie = ' deactivated dark';
    else if (a % 2 == 1 && document.cookie.match(/light/i) != null) document.cookie = ' activated light';
    else if (a % 2 == 1 && document.cookie.match(/light/i) == null) document.cookie = ' activated dark';
    a = a + 1;
    console.log('pt buton1 a este:' + a);
    console.log(document.cookie);
  });
};



const cookies1Enabled = () => {
  const buttonul = document.querySelector(".toggle-button");
  const container = document.querySelector(".container");
  if (document.cookie.match(/deactivated/i) != null) {
    buttonul.classList.toggle("toggle-button-active", true);
    container.classList.toggle("container-deactivate-scroll", true);
    return 1;
  }
  return 0;
};


const button2Toggle = () => {

  const buttonul = document.querySelector(".toggle-button2");
  let a = 0;
  if (cookies2Enabled() == 1) a = 1;
  buttonul.addEventListener("click", () => {
    buttonul.classList.toggle("toggle-button2-active");
    if (a % 2 == 0 && document.cookie.match(/deactivated/i) != null) document.cookie = ' deactivated light';
    else if (a % 2 == 0 && document.cookie.match(/deactivated/i) == null) document.cookie = ' activated light';
    else if (a % 2 == 1 && document.cookie.match(/deactivated/i) != null) document.cookie = ' deactivated dark';
    else if (a % 2 == 1 && document.cookie.match(/deactivated/i) == null) document.cookie = ' activated dark';
    a = a + 1;
    console.log('pt buton2 a este:' + a);
    console.log(document.cookie);
  });
};


const cookies2Enabled = () => {
  const buttonul = document.querySelector(".toggle-button2");
  if (document.cookie.match(/light/i) != null) {
    buttonul.classList.toggle("toggle-button2-active", true);
    return 1;
  }
  return 0;
};



const initAllFunctions = () => {
  navSlide();

  carouselSlide();

  buttonToggle();

  button2Toggle();

  cookies1Enabled();

  cookies2Enabled();
  console.log(document.cookie);
};


initAllFunctions();
