let hamButton = document.querySelector(".ham-button");
let nav = document.querySelector(".main-nav");
let activityList
//loading
window.addEventListener("load", function() {
  document.querySelector(".animated.inload").classList.remove("inload");
});

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
        document.querySelector("header.home").classList.remove("start");
      } 
    else {
        document.querySelector("header.home").classList.add("start");
    }
});
let heightPanel = window.innerHeight + 700;
window.addEventListener("scroll", ()=> {
  if(document.body.scrollTop > window.innerHeight && document.body.scrollTop < heightPanel || document.documentElement.scrollTop > window.innerHeight && document.documentElement.scrollTop < heightPanel) {
    document.querySelector(".ham-button.home").classList.add("darkversion");
  }
  else{
    document.querySelector(".ham-button.home.darkversion").classList.remove("darkversion");
  }
});




// DEVIS FORMULAIRE

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("devis-fieldset");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.querySelector(".devis-button.previous").style.display = "none";
  } else {
    document.querySelector(".devis-button.previous").style.display = "block";
  }
  if (n == (x.length - 1)) {
    document.querySelector(".devis-button.next").innerHTML = "Valider";
  } else {
    document.querySelector(".devis-button.next").innerHTML = "Suivant";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("devis-fieldset");
  // Exit the function if any field in the current tab is invalid:
  //if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("devis-form").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}
let submitButton = document.querySelector(".devis-button.next");
function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("devis-fieldset");
  y = x[4].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    let theField = input[i]
    // If a field is empty...
    
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("devis-step")[currentTab].className += " checked";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("devis-step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
};



//formulaire type contact animation + disabled

let input = document.querySelectorAll(".input-contact");


input.forEach(element => {

    let submitButton = document.querySelector(".devis-button.next");

    // submit active
    element.addEventListener("change", function() {
        console.log(element.value.length)
        for (let i = 0; i < input.length; i++) {
            let theField = input[i] //recuération d'un champ
            
             if ( theField.value == '') // si la valeur est vide
             {
                 test = false
                 break //sortir de la boucle
             }
             else if (theField.type == 'email') { //si pas vide mais email
                 let expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/ //pattern
                 if (!expressionReguliere.test(theField.value)) { //si value différent du pattern
                     test = false
                     console.log(this.classList)
                     break //sortir boucle
                 }

             }
             else { //value ok
                 test = true
             }
        }

        if ( test == true) { 
          submitButton.removeAttribute('disabled') //active le btn en retirant attriut desabled
        }
        else {
          submitButton.setAttribute('disabled', true) // désactive le btn en ajoutant l'attribut desabled
        }
         //  console.log(test)
    })

    




    element.addEventListener("mouseout", function(){
        console.log(element.previousElementSibling)
        if(element.value == ""){
            element.previousElementSibling.classList.remove("texted")
        }
    })


    element.addEventListener("mouseenter", function() {
        console.log(element.previousElementSibling)
        element.previousElementSibling.classList.add("texted")
    })
   element.addEventListener("change", function() {
        if(element.value == ""){
            element.classList.remove("texted")
            element.previousElementSibling.classList.remove("texted")
        }
        else {
            element.classList.add("texted")
        }
   });
   element.addEventListener("change", function () {
    let expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/ //pattern

     if(element.type == 'email' || !expressionReguliere.test(theField.value)) {
      element.classList.add("false")
     }
     else {}
   });
});