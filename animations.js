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
let heightPanel = window.innerHeight + 700;
window.addEventListener("scroll", ()=> {
  if(document.body.scrollTop > window.innerHeight && document.body.scrollTop < heightPanel || document.documentElement.scrollTop > window.innerHeight && document.documentElement.scrollTop < heightPanel) {
    document.querySelector(".ham-button").classList.add("darkversion");
  }
  else{
    document.querySelector(".ham-button.darkversion").classList.remove("darkversion");
  }
  /*if(document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
    document.querySelector(".ham-button").classList.add("darkversion");
  }*/
  /*if (document.body.scrollTop > heightPanel || document.documentElement.scrollTop > heightPanel) {
    document.querySelector(".ham-button.darkversion").classList.remove("darkversion");
  }*/
  /*else if (document.body.scrollTop < window.innerHeight || document.documentElement.scrollTop < window.innerHeight) {
    document.querySelector(".ham-button.darkversion").classList.remove("darkversion");
  }*/
})
/*if (document.body.scrollTop < window.innerHeight || document.documentElement.scrollTop < window.innerHeight) {
    document.querySelector(".ham-button.darkversion").classList.remove("darkversion");
  }
  else{
    document.querySelector(".ham-button.darkversion").classList.remove("darkversion");
  }*/