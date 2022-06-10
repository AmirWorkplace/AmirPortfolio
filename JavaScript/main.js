let PluginMain = document.querySelector(".plugin-main");
let PlugIn = document.querySelector(".pluginImg");
let Notify = document.querySelector(".Notify");

//worked Notify
let Nevigation = document.querySelector(".navigation");
let plugInIcon = document.querySelector(".plugin-icon");
let DotsBody = document.querySelector(".body");
let clickCross = document.querySelector(".clickCross");
let pluginImage = document.querySelector(".pluginImage");
let pluginImageTest = document.querySelector(".pluginImageTest");

clickCross.addEventListener("click", () => {
  pluginImage.classList.add("displayNone");
  pluginImageTest.classList.add("pluginImageTestActive");
  clickCross.style.display = "none";
  DotsBody.style.display = "block";
  plugInIcon.classList.remove("plugInIconActive");
});

pluginImage.addEventListener("click", () => {
  pluginImageTest.classList.remove("pluginImageTestActive");
  clickCross.style.display = "block";
  DotsBody.style.display = "none";
});

Nevigation.addEventListener("click", () => {
  Nevigation.classList.toggle("active");
  plugInIcon.classList.add("plugInIconActive");
});

