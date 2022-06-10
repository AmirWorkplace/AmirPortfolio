setInterval(() => {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");
  let time = document.getElementById("time");

  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");

  let hr_dot = document.querySelector(".hr_dot");
  let min_dot = document.querySelector(".min_dot");
  let sec_dot = document.querySelector(".sec_dot");

  //Datw Format Part By Part
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? "PM" : "AM";

  // Convert 24hrs to 12 hrs
  if(h > 12){
    h = h -12;
  }

  // Add zero before a single digit Number.
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;


  hours.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minutes</span>";
  seconds.innerHTML = s + "<br><span>Seconds</span>";
  ampm.innerHTML = am;

  //12 Hours clok
  hh.style.strokeDashoffset = 440- (440 * h) / 12;

  //60 Minutes
  mm.style.strokeDashoffset = 440- (440 * m) / 60;
  
  //60 Seconds
  ss.style.strokeDashoffset = 440- (440 * s) / 60;


  // 360 / 12 = 30
  hr_dot.style.transform = `rotate(${h * 30}deg)`;

  // 360 / 60 = 6
  min_dot.style.transform = `rotate(${m * 6}deg)`;

  // 360 / 60 = 6
  sec_dot.style.transform = `rotate(${s * 6}deg)`;

});