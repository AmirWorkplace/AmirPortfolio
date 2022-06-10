let navigation = document.querySelector(".navigation");
let closer = document.querySelector(".closer");
let opener = document.querySelector(".opener");
let menuToggle = document.querySelector(".toggle");
menuToggle.onclick = function() {
    menuToggle.classList.toggle("actives");
    navigation.classList.toggle("active");
}

closer.onclick = function() {
    menuToggle.classList.add("dMaching");
    menuToggle.classList.remove("DpMaching");

}


opener.onclick = function() {
    menuToggle.classList.add("DpMaching");
    menuToggle.classList.remove("dMaching");

}



// controls toggle bar on category system
let list = document.querySelectorAll(".list");

for (let i = 0; i < list.length; i++) {
    list[i].onclick = function() {
        let j = 0;
        while (j < list.length) {
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
    }
}