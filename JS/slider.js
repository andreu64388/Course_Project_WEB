(function Slider() {
  let slide = document.querySelectorAll(".slide");
  let right = document.querySelector(".right-btn");
  let left = document.querySelector(".left-btn");
  let counter = 0;

  var slider_const = 2;
  const info_schedule = document.querySelectorAll(".info_schedule");
  const photo_schedule = document.querySelectorAll(".photo_schedule");
  const animateH1 = document.querySelectorAll(".h1_animate");
  const section_opportunities = document.querySelector(
    ".section_opportunities"
  );
  if (window.screen.width < 1024) {
    for (let i = 0; i < info_schedule.length; i++) {
      info_schedule[i].classList.add("nonActive");
      photo_schedule[i].classList.add("nonActive");
      animateH1[i].classList.add("nonActive");
    }
    section_opportunities.classList.add("active");
  }

  if (window.screen.width > 698 && window.screen.width <= 999) {
    slider_const = 1;
  } else if (window.screen.width < 697) {
    slider_const = 0;
  } else {
    slider_const = 2;
  }
  window.onresize = () => {
    if (window.screen.width > 698 && window.screen.width <= 999) {
      slider_const = 1;
    } else if (window.screen.width < 697) {
      slider_const = 0;
    } else {
      slider_const = 2;
    }
    if (window.screen.width < 1024) {
      for (let i = 0; i < info_schedule.length; i++) {
        info_schedule[i].classList.add("active");
        photo_schedule[i].classList.add("active");
        animateH1[i].classList.add("active");
      }
      section_opportunities.classList.add("active");
    }
  };

  // перетаскивание слайдов по пальцам свайпов
  right.onclick = () => {
    counter++;
    for (let i = 0; i < slide.length; i++) {
      if (counter >= slide.length - slider_const) {
        slide[i].style.left = 0 + "px";
        counter = 0;
      }

      slide[i].style.left = -(350 * counter) + "px";
    }
  };

  left.onclick = () => {
    counter--;
    for (let i = 0; i < slide.length; i++) {
      if (counter < 0) {
        slide[i].style.left = 0 + "px";
        counter = slide.length - 3;
      }
      slide[i].style.left = -(350 * counter) + "px";
    }
  };

  // touch swipe
  let startX = 0;
  let isBool = false;
  let endX = 0;
  const slider = document.querySelector(".slider");
  slider.addEventListener("touchstart", (e) => {
    startX = e.changedTouches[0].clientX;
    isBool = true;
  });
  slider.addEventListener("touchmove", (e) => {
    if (isBool) {
      endX = e.changedTouches[0].clientX;
      if (endX - startX > 0) {
        left.click();
      }
      if (endX - startX < 0) {
        right.click();
      }

      isBool = false;
    }
  });
  slider.addEventListener("touchend", (e) => {
    isBool = false;
  });
  slider.addEventListener("mousedown", (e) => {
    startX = e.clientX;
    isBool = true;
  });
  slider.addEventListener("mousemove", (e) => {
    if (isBool) {
      endX = e.clientX;
      if (endX - startX > 0) {
        left.click();
      }
      if (endX - startX < 0) {
        right.click();
      }
      isBool = false;
    }
  });
  slider.addEventListener("mouseup", (e) => {
    isBool = false;
  });
})();
const info_schedule = document.querySelectorAll(".info_schedule");
const photo_schedule = document.querySelectorAll(".photo_schedule");
const animateH1 = document.querySelectorAll(".h1_animate");
const section_opportunities = document.querySelector(".section_opportunities");
if (window.screen.width < 1024) {
  for (let i = 0; i < info_schedule.length; i++) {
    info_schedule[i].classList.add("nonActive");
    photo_schedule[i].classList.add("nonActive");
    animateH1[i].classList.add("nonActive");
  }
  section_opportunities.classList.add("active");
}





