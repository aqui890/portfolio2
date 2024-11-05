wheader = document.querySelector("#header");
const logo = document.querySelector(".logo");
const menu = document.querySelectorAll(".menu>li>a");
const sign = document.querySelector(".sign-in");

console.log(menu)

window.addEventListener("scroll", () => {
    console.log(scrollY)
    if (window.scrollY > 100) {
        header.style.backgroundColor = "#f0f5ff";
        header.style.boxShadow = "0px 5px 5px -2px gray";
        logo.style.color = "#161966";
        sign.style.color = "#161966";
        for (let i = 0; i < 4; i++) {
            menu[i].style.color = "#161966"
        }
    } else {
        logo.style.color = "white";
        sign.style.color = "white";
        for (let i = 0; i < 4; i++) {
            menu[i].style.color = "white"
        }
        header.setAttribute("style", "background: transparent;");
    }
});


const loadMorebtn = document.querySelector(".btn-wrap a");

loadMorebtn.addEventListener("click", function() {
    loadMorebtn.style.border = "none";
})

const linkfuture = document.querySelector(".project-future");
const linkschoolweb = document.querySelector(".project-web");
const linkalready = document.querySelector(".project-c");

linkfuture.addEventListener("click", function() {
    window.location.href = "https://aqui890.github.io/portfolio2";
});

linkschoolweb.addEventListener("click", function() {
    window.location.href = "https://aqui890.github.io/swjb";
});

linkalready.addEventListener("click", function() {
    window.location.href = "https://www.miricanvas.com/v/13t60p7";
});


const linkgithub = document.querySelector(".Gwrap");
const linktistory = document.querySelector(".Bwrap");

linkgithub.addEventListener("click", function() {
    window.location.href = "https://github.com/aqui890";
});

linktistory.addEventListener("click", function() {
    window.location.href = "https://aqui890.tistory.com/";
})