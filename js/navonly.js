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

const cookies1Enabled = () => {
  const container = document.querySelector(".container");
  if (document.cookie.match(/deactivated/i) != null) {
    container.classList.toggle("container-deactivate-scroll", true);
    return 1;
  }
  return 0;
};


function getStyleSheetName() {
  let nume = document.getElementById("pagestyle").getAttribute("href");
  return nume;
};


function swapStyleSheet(sheet) {
  document.getElementById("pagestyle").setAttribute("href", sheet);
};

const cookies2Enabled = () => {
  if (document.cookie.match(/light/i) != null) {
    swapStyleSheet(getStyleSheetName().slice(0, getStyleSheetName().length - 4) + '_light.css');
    return 1;
  }
  else swapStyleSheet(getStyleSheetName());
  return 0;
};



const initAllFunctions = () => {
  navSlide();

  console.log(document.cookie);
  console.log(getStyleSheetName());
  console.log(getStyleSheetName().slice(0, getStyleSheetName().length - 4) + '_light.css');
  cookies1Enabled();

  cookies2Enabled();


};


initAllFunctions();
