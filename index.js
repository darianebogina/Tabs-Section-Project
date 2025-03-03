let content = document.getElementsByClassName("text__content");
let pics = document.getElementsByClassName("picture__wrapper");

content[1].style.display = "none";
content[2].style.display = "none";

pics[1].style.display = "none";
pics[2].style.display = "none";

function openTab(num) {
    if (num === 1) {
        content[0].style.display = "flex";
        content[1].style.display = "none";
        content[2].style.display = "none";
    }
    else if (num === 2) {
        content[1].style.display = "flex";
        content[0].style.display = "none";
        content[2].style.display = "none";
    }
    else if (num === 3) {
        content[2].style.display = "flex";
        content[0].style.display = "none";
        content[1].style.display = "none";
    }
}