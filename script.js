const options = document.querySelectorAll("[data-option]");

options.forEach(option => {
  option.addEventListener("click", (e) => {
    const key = e.target.getAttribute("data-option");
    const btn = document.querySelector(`[data-select='${key}']`);
    btn.innerText = option.textContent;
  })
});

let swiper1 = new Swiper(".swiper1", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
  slidesPerGroup: 1,
  slidesPerView: 5,
  grabCursor: true,
  breakpoints: {
    350: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

const travels = document.getElementById("travels-cont");
[...travels.children].forEach(ele => ele.addEventListener("click", () => {
  [...travels.children].forEach(ele => ele.classList.remove("active"));
  ele.classList.add("active");
}));
