const img = document.querySelector(".home-container__img");
const hr1 = document.querySelector(".hr");
const hr2 = document.querySelector(".hr-0");
img.addEventListener("mouseover", function () {
  hr1.style.transform = "rotate(0)";
  hr2.style.transform = "rotate(90deg)";
});

img.addEventListener("mouseleave", function () {
  hr1.style.transform = "rotate(5deg)";
  hr2.style.transform = "rotate(100deg)";
});
