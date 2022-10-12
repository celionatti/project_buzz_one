(() => {
  // src/main.js
  (function($) {
    "use strict";
    const sunIcon = document.querySelector(".sun");
    const moonIcon = document.querySelector(".moon");
    const sunMobileIcon = document.querySelector(".sun-mobile");
    const moonMobileIcon = document.querySelector(".moon-mobile");
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-colors-scheme: dark)").matches;
    const iconToggle = () => {
      moonIcon.classList.toggle("hidden");
      sunIcon.classList.toggle("hidden");
      moonMobileIcon.classList.toggle("hidden");
      sunMobileIcon.classList.toggle("hidden");
    };
    const themeCheck = () => {
      if (userTheme === "dark" || !userTheme && systemTheme) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("hidden");
        moonMobileIcon.classList.add("hidden");
        return;
      }
      sunIcon.classList.add("hidden");
      sunMobileIcon.classList.add("hidden");
    };
    const themeSwitch = () => {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
      }
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      iconToggle();
    };
    sunIcon.addEventListener("click", () => {
      themeSwitch();
    });
    moonIcon.addEventListener("click", () => {
      themeSwitch();
    });
    sunMobileIcon.addEventListener("click", () => {
      themeSwitch();
    });
    moonMobileIcon.addEventListener("click", () => {
      themeSwitch();
    });
    themeCheck();
    $(window).scroll(function() {
      if ($(this).scrollTop() > 45) {
        $(".navbar").addClass("sticky top-0 shadow-sm");
      } else {
        $(".navbar").removeClass("sticky top-0 shadow-sm");
      }
    });
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    });
    $(".back-to-top").click(function() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
      return false;
    });
  })(jQuery);
})();
