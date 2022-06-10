let baton = document.querySelector(".baton");
let testButton = document.querySelector(".test-button");
let innerContent = document.querySelectorAll(".inner-content");

let switch1 = document.querySelector("#switch1");
let switch2 = document.querySelector("#switch2");
let switch3 = document.querySelector("#switch3");
let switch4 = document.querySelector("#switch4");
let switch5 = document.querySelector("#switch5");
let switch6 = document.querySelector("#switch6");
let switch7 = document.querySelector("#switch7");

let innerText1 = document.querySelector("#innertext1");
let innerText2 = document.querySelector("#innertext2");
let innerText3 = document.querySelector("#innertext3");
let innerText4 = document.querySelector("#innertext4");
let innerText5 = document.querySelector("#innertext5");
let innerText6 = document.querySelector("#innertext6");
let innertext7 = document.querySelector("#innertext7");

//  Switch1
switch1.addEventListener("click", () => {
  innerContent.forEach((element1) => {
    element1.style.display = "none";
  });
  innerText1.style.display = "block";
});

//  Switch2
switch2.addEventListener("click", () => {
  innerContent.forEach((element2) => {
    element2.style.display = "none";
  });
  innerText2.style.display = "block";
});

//  Switch3
switch3.addEventListener("click", () => {
  innerContent.forEach((element3) => {
    element3.style.display = "none";
  });
  innerText3.style.display = "block";
});

//  Switch4
switch4.addEventListener("click", () => {
  innerContent.forEach((element4) => {
    element4.style.display = "none";
  });
  innerText4.style.display = "block";
});

//  Switch5
switch5.addEventListener("click", () => {
  innerContent.forEach((element5) => {
    element5.style.display = "none";
  });
  innerText5.style.display = "block";
});

//  Switch6
switch6.addEventListener("click", () => {
  innerContent.forEach((element6) => {
    element6.style.display = "none";
  });
  innerText6.style.display = "block";
});

//  Switch7
switch7.addEventListener("click", () => {
  innerContent.forEach((element7) => {
    element7.style.display = "none";
  });
  innertext7.style.display = "block";
});
