let btn1 = document.querySelector(".right__item1");
let btn2 = document.querySelector(".right__item2");
let btn3 = document.querySelector(".right__item3");
let btn4 = document.querySelector(".right__item4");
let item1 = document.querySelector(".wrap__item1");
let item2 = document.querySelector(".wrap__item2");
let item3 = document.querySelector(".wrap__item3");


btn1.addEventListener("click", function () {
    item1.classList.toggle("open1");
    item2.classList.remove("open2");
    item3.classList.remove("open3");
})
btn2.addEventListener("click", function () {
    item2.classList.toggle("open2");
    item1.classList.remove("open1");
    item3.classList.remove("open3");
})
btn3.addEventListener("click", function () {
    item3.classList.toggle("open3");
    item1.classList.remove("open1");
    item2.classList.remove("open2");
})
btn4.addEventListener("click", function (){
    item1.classList.remove("open1");
    item2.classList.remove("open2");
    item3.classList.remove("open3");
})