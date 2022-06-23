const img = document.querySelector(".home-container__img");
const hr1 = document.querySelector(".hr");
const hr2 = document.querySelector(".hr-0");
const sc = document.querySelector(".skill-container");
const sign = document.querySelector(".sign-1");
const hrSkill = document.querySelector(".hr-skill");
const sc2 = document.querySelector(".sc-2");
const pyramid = document.querySelector(".multiple");

img.addEventListener("mouseover", function () {
  hr1.style.transform = "rotate(0)";
  hr2.style.transform = "rotate(90deg)";
});

img.addEventListener("mouseleave", function () {
  hr1.style.transform = "rotate(5deg)";
  hr2.style.transform = "rotate(100deg)";
});

sc.addEventListener("mouseover", function () {
  sign.style.transform = "rotate(45deg)";
  hrSkill.style.width = "213px";
});

sc.addEventListener("mouseleave", function () {
  sign.style.transform = "rotate(0)";
  hrSkill.style.width = "0";
});

sc2.addEventListener("mouseover", function () {
  sign.style.transform = "rotate(45deg)";
  hrSkill.style.width = "213px";
});

sc2.addEventListener("mouseleave", function () {
  sign.style.transform = "rotate(0)";
  hrSkill.style.width = "0";
});
