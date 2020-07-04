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
        $(".nav").hide();
        link.style.animation = "";
      } else {
        $(".nav").show();
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
