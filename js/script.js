window.onload = function () {
    if (window.location.pathname.includes("home_page")) {
        window.addEventListener("scroll", function () {
            let header = this.document.getElementById("Home");
            header.classList.toggle("fixed", this.window.scrollY > 0)
        })
    }
}
let burgerBtn = document.querySelector(".burger i");
burgerBtn.onclick = function () {
    burgerBtn.classList.toggle("fa-xmark");
    let menu = document.querySelector(".header nav .burger ul")
    menu.classList.toggle("active");
}
