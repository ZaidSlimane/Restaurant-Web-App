/* Fill src image 8-Product And Stars*/
const urlImg = [
  "https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/1.jpg",
  "https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/2.jpg",
  "https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/3.jpg",
  "https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/4.jpg",
  "https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/5.jpg",
  "https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/6.jpg",
  "https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/7.jpg",
  "https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/8.jpg",
];
const stars = [4, 5, 3, 4, 4, 5, 3, 4];
let starsProduct = document.querySelectorAll(".section-show .stars");
let src = document.querySelectorAll(".section-show div img");
src.forEach(function (e, i, arr) {
  e.src = urlImg[i];
});
starsProduct.forEach(function (element, index, array) {
  let str = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><linearGradient id="b" x1="-1483.396" x2="-1155.767" y1="1056.787" y2="1056.787" gradientUnits="userSpaceOnUse" xlink:href="#a"/><linearGradient id="a"><stop offset="0" stop-color="#fcd635"/><stop offset="1" stop-color="#f7a928"/></linearGradient></defs><path fill="url(#b)" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" style="marker:none"/></svg>`;
  element.innerHTML = `${str}\n${str}\n${str}\n${str}\n${str} `;
  let div = element.children;
  for (let i = stars[index] + 1; i <= 5; i++) {
    div[i - 1].children[1].style.fill = "#999999";
  }
  let div1 = document.createElement("div");
  div1.innerHTML = `<svg fill="#000000" height="40px" width="42px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 224.549 224.549" xml:space="preserve">
  <g>
    <path d="M223.476,108.41c-1.779-2.96-44.35-72.503-111.202-72.503S2.851,105.45,1.072,108.41c-1.43,2.378-1.43,5.351,0,7.729   c1.779,2.96,44.35,72.503,111.202,72.503s109.423-69.543,111.202-72.503C224.906,113.761,224.906,110.788,223.476,108.41z    M112.274,173.642c-49.925,0-86.176-47.359-95.808-61.374c9.614-14.032,45.761-61.36,95.808-61.36   c49.925,0,86.176,47.359,95.808,61.374C198.468,126.313,162.321,173.642,112.274,173.642z"/>
    <path d="M112.274,61.731c-27.869,0-50.542,22.674-50.542,50.543c0,27.868,22.673,50.54,50.542,50.54   c27.868,0,50.541-22.672,50.541-50.54C162.815,84.405,140.143,61.731,112.274,61.731z M112.274,147.814   c-19.598,0-35.542-15.943-35.542-35.54c0-19.599,15.944-35.543,35.542-35.543s35.541,15.944,35.541,35.543   C147.815,131.871,131.872,147.814,112.274,147.814z"/>
    <path d="M112.274,92.91c-10.702,0-19.372,8.669-19.372,19.364c0,10.694,8.67,19.363,19.372,19.363   c10.703,0,19.373-8.669,19.373-19.363C131.647,101.579,122.977,92.91,112.274,92.91z"/>
  </g>
  </svg>
  <svg width="800px" height="800px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">

<path d="M0 0h48v48H0z" fill="none"/>
<g id="Shopicon">
	<path d="M8.444,27L24,42l15.556-15c2.7-2.033,4.444-5.256,4.444-8.889C44,11.978,39.022,7,32.889,7   C29.256,7,26.022,8.756,24,11.456C21.978,8.756,18.744,7,15.111,7C8.978,7,4,11.978,4,18.111C4,21.744,5.744,24.967,8.444,27z    M15.111,11c2.256,0,4.329,1.04,5.687,2.853L24,18.128l3.202-4.275C28.56,12.04,30.633,11,32.889,11C36.81,11,40,14.19,40,18.111   c0,2.254-1.039,4.329-2.851,5.694l-0.195,0.147l-0.176,0.169L24,36.443L11.221,24.121l-0.176-0.169l-0.195-0.147   C9.039,22.44,8,20.365,8,18.111C8,14.19,11.19,11,15.111,11z"/>
</g>
</svg>
  <svg fill="#000000" height="800px" width="800px" version="1.1" id="XMLID_269_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve">
<g id="shop-cart">
	<g>
		<circle cx="9" cy="21" r="2"/>
	</g>
	<g>
		<circle cx="19" cy="21" r="2"/>
	</g>
	<g>
		<path d="M21,18H7.2l-4-16H0V0h4.8l0.8,3H24l-3.2,11H8.3l0.5,2H21V18z M7.8,12h11.5l2-7H6L7.8,12z"/>
	</g>
</g>
</svg>
  `;
  div1.className = "hover-buttons";
  element.parentElement.parentElement.appendChild(div1);
});
let starsProduct2 = document.querySelectorAll(
  ".section-Best .cont .properties .stars"
);
starsProduct2.forEach(function (element, index, array) {
  let str = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><linearGradient id="b" x1="-1483.396" x2="-1155.767" y1="1056.787" y2="1056.787" gradientUnits="userSpaceOnUse" xlink:href="#a"/><linearGradient id="a"><stop offset="0" stop-color="#fcd635"/><stop offset="1" stop-color="#f7a928"/></linearGradient></defs><path fill="url(#b)" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" style="marker:none"/></svg>`;
  element.innerHTML = `${str}\n${str}\n${str}\n${str}\n${str} `;
  let div = element.children;
  for (let i = stars[index] + 1; i <= 5; i++) {
    div[i - 1].children[1].style.fill = "#999999";
  }
});

let starsProduct3 = document.querySelectorAll(
  ".section-bottom-pr .properties .stars"
);
starsProduct3.forEach(function (element, index, array) {
  let str = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><linearGradient id="b" x1="-1483.396" x2="-1155.767" y1="1056.787" y2="1056.787" gradientUnits="userSpaceOnUse" xlink:href="#a"/><linearGradient id="a"><stop offset="0" stop-color="#fcd635"/><stop offset="1" stop-color="#f7a928"/></linearGradient></defs><path fill="url(#b)" d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z" color="#000" overflow="visible" transform="matrix(.04574 0 0 .04561 68.85 -40.34)" style="marker:none"/></svg>`;
  element.innerHTML = `${str}\n${str}\n${str}\n${str}\n${str} `;
  let div = element.children;
  for (let i = stars[index] + 1; i <= 5; i++) {
    div[i - 1].children[1].style.fill = "#999999";
  }
});

// Automatic Animation fro SmartPhone
window.onload = function () {
  let smartPhone = document.querySelector(".section-smart .smart-phone");
  smartPhone.style.animation = "slide 1s ease-in-out";
  setTimeout(() => (smartPhone.style.animation = null), 1000);
};
let swiper = document.querySelector(".own-carousel");
let swiperImg = document.querySelectorAll(".partner-ship .all img");
let counTranslate = -1205;
function swipBrand(swiper) {
  let mouseDrag = {
    stat: false,
    value: 0,
  };
  let pos_previous = {
    init: false,
    value: 0,
  };
  swiper.ondragstart = (ev) => {
    ev.preventDefault();
    mouseDrag.stat = true;
  };
  for (let i of swiper.children) {
    i.ondrag = (ev) => ev.preventDefault();
  }

  swiper.onmousemove = (ev) => {
    if (mouseDrag.stat) {
      if (!pos_previous.init) {
        pos_previous.value = ev.clientX;
        pos_previous.init = true;
      }
      counTranslate += ev.clientX - pos_previous.value;
      /*     if(ev.clientX > pos_previous.value)
        counTranslate+= 1.2;
      else
        counTranslate-=1.2; */
      pos_previous.value = ev.clientX;
      if (swiper.tagName === "IMG") {
        swiperImg.forEach((el) => {
          el.style.transform = `translateX(${counTranslate}px)`;
        });
      }
      swiper.querySelectorAll("img").forEach((el) => {
        el.style.transform = `translateX(${counTranslate}px)`;
      });
    }
  };
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".own-carousel__container").ownCarousel({
    itemPerRow: 5,
    itemWidth: 0,
    responsive: {
      1200: [4, 24],
      765: [1, 100],
    },
  });
  responsive();
});
for (let i of swiper.children) {
  i.children[0].ondragstart = (ev) => ev.preventDefault();
  i.children[0].ondrag = (ev) => ev.preventDefault();
}
//  click span => show list / hide list
document.getElementById("select-search-bar").onclick = function (ev) {
  ev.target.nextElementSibling.classList.toggle("display");
};
document.querySelector(".fa-chevron-down").onclick = function (ev) {
  document.querySelector(".search-bar .select").classList.toggle("display");
};
//  click option of span => replace span by clicker content
document.querySelectorAll(".search-bar div .select > div").forEach((el) => {
  el.onclick = function (ev) {
    document.getElementById("select-search-bar").innerHTML =
      ev.target.innerHTML;
    document.querySelector(".search-bar .select").classList.toggle("display");
  };
});
document.body.onclick = function (ev) {
  if(!ev.target.onclick){
    let target = document.querySelector(".search-bar .select");
    if (target.className.includes("display")) target.classList.remove("display");
  }
};
document.querySelector(".inside-notification div:nth-child(2)").onclick = function (ev) {
  let notif = document.querySelector(".notification");
  notif.style.marginTop = "-73px";
}
document.querySelector(".button-drop-menu .bars").onclick = () => {
  let ev = document.querySelector(".button-drop-menu .bars")
  let drop =document.querySelector(".drop-menu-bar ul");
  if (!ev.className.includes("crois")) {
    ev.innerHTML = "X";
    ev.classList.add("crois")
    drop.style.marginTop = "0px";
  }else {
    ev.innerHTML = `
      <span></span>
      <span></span>
      <span></span>`
    ev.classList.remove("crois")
    drop.style.marginTop = "-200px"
  }
}
