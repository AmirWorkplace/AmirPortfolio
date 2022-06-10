/* My Main Index Js All File */

// const locationPage = document.getElementById("GoToCreatePostPage");

// locationPage.addEventListener("click", () => {
//     location = "./CreatePostPlugIn/index.html";
// })
/* https://www.facebook.com/syedamir0/ */
/* const darkBtn = document.querySelector("#dark-btn");

darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark-btn-on");
} */



const AlertOpenPage = document.getElementById("Alerte");
const AlertClosePage = document.getElementById("CancelPost");
const AlertCreatePage = document.getElementById("CreatePost");


const clickToHide = document.getElementById("magic");
const clickToSelect = document.getElementById("addPost");
const clickToOpen = document.getElementById("GoToCreatePostPage");




clickToOpen.addEventListener("click", () => {
    clickToSelect.style.display = "block";
    // AddPost.classList.toggle("fixed_it");

})

clickToHide.addEventListener("click", () => {
    AlertOpenPage.style.display = "block";
})

AlertClosePage.addEventListener("click", () => {
    AlertOpenPage.style.display = "none";
})

AlertCreatePage.addEventListener("click", () => {
    clickToSelect.style.display = "none";
    // AddPost.classList.toggle("fixed_it");

    AlertOpenPage.style.display = "none";

})

const AddPost = document.querySelector(".AddPost");

// clickToOpen.addEventListener("click", () => {


// })

// clickToOpen.addEventListener("click", () => {
//     AddPost.classList.add("fixed_it");

// })


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