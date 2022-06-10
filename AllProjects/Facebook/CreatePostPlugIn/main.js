/* Is this the main JavaScript File which is work by magic */
/* <button id="displayBlock">Add Post</button> (displayBlock) is the main id which are click 
    to open a Post page like Facebook post page */

const hide = document.getElementById("addPost");
const post = document.getElementById("displayBlock");
const visible = document.getElementById("magic");

visible.addEventListener("click", () => {
    alert("Are You Sure to Discard Your Post?");
    location = "../index.html";
})