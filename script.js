console.log("Hello World");

const btnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("header");

btnEl.addEventListener("click", function (e) {
  headerEl.classList.toggle("nav-open");
});
