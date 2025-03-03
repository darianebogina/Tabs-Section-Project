let content = document.getElementsByClassName("text__content");
let button = document.getElementsByClassName("btn__tab");
let pics = document.getElementsByClassName("picture__wrapper")[0];

content[1].style.display = "none";
content[2].style.display = "none";

pics.children[1].style.display = "none";
pics.children[2].style.display = "none";

function show(num) {
    content[num].style.display = "flex";
    pics.children[num].style.display = "flex";
    button[num].classList.add("active");
}

function hide(num) {
    for (let i = 0; i < 3; i += 1) {
        if (num !== i) {
            content[i].style.display = "none";

            pics.children[i].style.display = "none";

            button[i].classList.remove("active");
        }
    }
}

function openTab(num) {
    show(num);
    hide(num);
}