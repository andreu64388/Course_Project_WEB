//animation blocks
(function Animate() {
  const info_schedule = document.querySelectorAll(".info_schedule");
  const photo_schedule = document.querySelectorAll(".photo_schedule");
  const animateH1 = document.querySelectorAll(".h1_animate");
  const section_opportunities = document.querySelector(
    ".section_opportunities"
  );
  const funAnimate = () => {
    section_opportunities.classList.add("active");
  };
  const FunctionAnimate = (info, photo, text) => {
    info.classList.add("active");
    photo.classList.add("active");
    text.classList.add("active");
  };
  const scroll_up = document.querySelector(".scroll");
  scroll_up.addEventListener("click", fun1);
  window.onscroll = () => {
    if (window.screen.width >= 1024) {
      if (
        document.documentElement.scrollTop > 1200 &&
        document.documentElement.scrollTop < 1650
      ) {
        FunctionAnimate(info_schedule[0], photo_schedule[0], animateH1[0]);
      }
      if (
        document.documentElement.scrollTop > 415 &&
        document.documentElement.scrollTop < 815
      ) {
        funAnimate();
      }
      if (
        document.documentElement.scrollTop > 1900 &&
        document.documentElement.scrollTop < 2300
      ) {
        FunctionAnimate(info_schedule[1], photo_schedule[1], animateH1[1]);
      }
      if (
        document.documentElement.scrollTop > 2400 &&
        document.documentElement.scrollTop < 2800
      ) {
        FunctionAnimate(info_schedule[2], photo_schedule[2], animateH1[2]);
      }
    }
    if (document.documentElement.scrollTop > 200)
      scroll_up.style.display = "block";
    else {
      scroll_up.style.display = "none";
    }
  };
  function fun1() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
})();
