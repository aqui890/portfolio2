wheader = document.querySelector("#header");
const logo = document.querySelector(".logo");
const menu = document.querySelectorAll(".menu>li>a");
const sign = document.querySelector(".sign-in");
const hambugerbtn = document.querySelector(".hambuger");

console.log(menu)

window.addEventListener("scroll", () => {
    console.log(scrollY)
    if (window.scrollY > 100) {
        header.style.backgroundColor = "#f0f5ff";
        header.style.boxShadow = "0px 5px 5px -2px gray";
        logo.style.color = "#161966";
        sign.style.color = "#161966";
        hambugerbtn.style.color = "#161966";
        for (let i = 0; i < 4; i++) {
            menu[i].style.color = "#161966"
        }
    } else {
        logo.style.color = "white";
        sign.style.color = "white";
        hambugerbtn.style.color = "white";
        for (let i = 0; i < 4; i++) {
            menu[i].style.color = "white"
        }
        header.setAttribute("style", "background: transparent;");
    }
});
const navB = document.querySelector(".navB");
const Mnav = document.querySelector(".navBar");
const closeBtn = document.querySelector(".close-btn");

const menus = document.querySelectorAll(".Mmenu-content");
menus.forEach(menu => {
    menu.addEventListener("click", function() {
        navB.style.display = "none";
        Mnav.style.transform = "translateX(400px)";
    })
})

hambugerbtn.addEventListener("click", function() {
    navB.style.display = "block";
    Mnav.style.transform = "translateX(0)";
})

navB.addEventListener("click", function() {
    navB.style.display  = "none";
    Mnav.style.transform = "translateX(400px)";
})

closeBtn.addEventListener("click", function() {
    navB.style.display = "none";
    Mnav.style.transform = "translateX(400px)";
})


const loadMorebtn = document.querySelector(".btn-wrap a");

loadMorebtn.addEventListener("click", function() {
    loadMorebtn.style.border = "none";
});