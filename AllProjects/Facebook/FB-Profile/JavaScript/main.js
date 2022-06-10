/* My Profile page Index Js All File */



/* Users Setting Dropdown Menu */

const SettingsDropDown = document.querySelector(".sittings-menu");

function MenuToggle() {
    SettingsDropDown.classList.toggle("settingsMenuHeight");
}

const RightContainer = document.getElementById("RightContainer");
const rightContainerEvent = document.getElementById("rightContainerEvents");

function RightContainerToggle() {
    rightContainerEvent.classList.toggle("rightContainerEvent");

}


const darkBtn = document.querySelector("#dark-btn");
const DarkBtnSpan = document.querySelector("#darkBtnSpan");

darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark-btn-on");
    DarkBtnSpan.classList.toggle("dark-btn-span");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    DarkBtnSpan.classList.remove("dark-btn-span");
    document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    DarkBtnSpan.classList.add("dark-btn-span");
    document.body.classList.add("dark-theme");
} else {
    localStorage.setItem("theme", "light");
}