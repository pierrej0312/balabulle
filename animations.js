let hamButton = document.querySelector(".ham-button");
let nav = document.querySelector(".main-nav")
let activityList
//ouvre nav
hamButton.addEventListener("click", function() {
        hamButton.classList.toggle("active");
        nav.classList.toggle("active");
  });

let search = document.querySelector(".search");
let closeSearch = document.querySelector(".close-search");
let searchForm = document.querySelector(".search-form");
let more = document.querySelector(".more");

//scroll nav bar

window.addEventListener("scroll", ()=> {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector("header").classList.remove("start");
      } 
    else {
        document.querySelector("header").classList.add("start");
    }
});