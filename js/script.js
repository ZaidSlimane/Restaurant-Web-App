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
let paymentMethods = document.querySelectorAll(".check-out .payment-methods div");
document.querySelectorAll(".check-out .payment-methods div").forEach(function (el) {
    el.onclick = function (ev) {
        paymentMethods.forEach(el => {
            if (el != this) {
                el.classList.remove("select")
            }
        })
        this.classList.toggle("select");
    }
})
document.querySelector(".card-number input").onkeypress = function (ev) {
    if (Number.isNaN(+ev.key)) {
        ev.preventDefault();
    }
}