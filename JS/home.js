(function Home() {
  const hide = document.getElementById("click");
  const hidden_menu = document.querySelector(".hidden_menu");
  const sign = document.querySelector(".sign");
  const detailed = document.querySelector(".detailed");
  hide.onclick = () => {
    if (hidden_menu.classList.contains("active")) {
      hidden_menu.classList.remove("active");
      hide.classList.remove("change");
    } else {
      hidden_menu.classList.add("active");
      hide.classList.add("change");
      hidden_menu.classList.add("active");
    }
  };
  const menu_registration1 = document.querySelectorAll(".menu_registration1");
  const close = document.querySelector(".close");
  const close_one_form = document.querySelector(".close_one_form");
  const hide_forms = document.querySelector(".hide_forms");

  const menu_registration = document.querySelector(".menu_registration");
  for (let i = 0; i < menu_registration1.length; i++) {
    menu_registration1[i].addEventListener("click", () => {
      hide_forms.style.display = "block";
      sign.style.display = "none";
    });
  }
  menu_registration.addEventListener("click", () => {
    hide_forms.style.display = "block";
  });
  close.onclick = () => {
    hide_forms.style.display = "none";
  };

  close_one_form.onclick = () => {
    hide_forms.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target === hide_forms) {
      hide_forms.style.display = "none";
    } else if (event.target === sign) {
      sign.style.display = "none";
    } else if (event.target === detailed) {
      detailed.style.display = "none";
      document.body.style.overflow = "visible";
    }
  };
  const mobile_registration = document.querySelector(".mobile_registration");
  mobile_registration.onclick = () => {
    hide_forms.style.display = "block";
    hidden_menu.classList.remove("active");
    hide.classList.remove("change");
  };

  setInterval(() => {
    if (window.screen.width > 999) {
      hidden_menu.classList.remove("active");
      hide.classList.remove("change");
    }
  }, 0);
  const closing_form2 = document.querySelector(".closing_form2");
  const close_sign = document.querySelector(".close-sign");

  const register_sigb = document.querySelector(".register_sigb");

  register_sigb.onclick = () => {
    sign.style.display = "block";
    hide_forms.style.display = "none";
  };
  close_sign.addEventListener("click", () => {
    sign.style.display = "none";
  });

  closing_form2.addEventListener("click", () => {
    sign.style.display = "none";
  });

  const hide_slider = document.querySelector(".hide-slider");
  const all_display_none = document.querySelector(".all_display_none");
  const open_slider = document.querySelectorAll(".open_slider");
  const close_slider = document.querySelectorAll(".close_slider");
  for (let i = 0; i < close_slider.length; i++) {
    close_slider[i].onclick = () => {
      hidden_menu.classList.remove("active");
      hide.classList.remove("change");
      hide_slider.style.display = "none";
      all_display_none.style.display = "block";
      section_infomation.style.display = "none";
      window.scrollTo({
        top: 0,
      });
    };
  }
  for (let i = 0; i < open_slider.length; i++) {
    open_slider[i].onclick = () => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
        });
      }, 0);

      hide_slider.style.display = "block";
      all_display_none.style.display = "none";
      section_infomation.style.display = "none";
    };
  }
  const close_detailed = document.querySelector(".close_detailed");
  const open_app = document.querySelectorAll(".open_app");
  for (let i = 0; i < open_app.length; i++) {
    open_app[i].onclick = () => {
      detailed.style.display = "block";
      document.body.style.overflow = "hidden";
    };
  }
  close_detailed.onclick = () => {
    detailed.style.display = "none";
    document.body.style.overflow = "visible";
  };

  const section_infomation = document.querySelector(".section_infomation");
  const open_blog = document.querySelectorAll(".open_blog");
  for (let i = 0; i < open_blog.length; i++) {
    open_blog[i].onclick = () => {
      hide_slider.style.display = "none";
      hidden_menu.classList.remove("active");
      hide.classList.remove("change");
      section_infomation.style.display = "block";
      all_display_none.style.display = "none";
      window.scrollTo({
        top: 0,
      });
    };
  }
  const sign_btn = document.querySelectorAll(".sign-btn");
  for (let i = 0; i < sign_btn.length; i++) {
    sign_btn[i].onclick = () => {
      hidden_menu.classList.remove("active");
      hide.classList.remove("change");
      sign.style.display = "block";
    };
  }
})();
