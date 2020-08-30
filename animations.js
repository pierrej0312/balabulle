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
  //x[n].style.display = "block";
  x[n].classList.add('currentSlide');
  x[n].classList.remove('left');
  x[n].classList.remove('right');
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.querySelector(".devis-button.previous").style.display = "none";
  } else {
    document.querySelector(".devis-button.previous").style.display = "block";
  }
  if (n == (x.length - 1)) {
    document.querySelector(".devis-button.next").innerHTML = "Valider";
    document.querySelector(".form-buttons").classList.add("end");
    document.querySelector("#devis-form").classList.add("end");
  } else {
    document.querySelector(".devis-button.next").innerHTML = "Suivant";
    document.querySelector(".form-buttons").classList.remove("end");
    document.querySelector("#devis-form").classList.remove("end");
  }
  
  /*let nextSlide() {
    // current slide becomes hidden
    x[currentTab].className = 'slide';
    // set the current slide as the next one
    currentTab = (currentTab + 1) % x.length;
    // add the class showing to the slide to make it visible
    x[currentSlide].className = 'slide showing';
  }*/
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

/*function prevPrev(n) {
  var x = document.getElementsByClassName("devis-fieldset");
  if (n > 1 && n > x.length) {
    x[currentTab].classList.add("right");
    x[currentTab].classList.remove("currentSlide");
    x[currentTab].classList.remove("left");
    currentTab = currentTab + n;
  }
  else {
    x[currentTab].classList.add("left");
    x[currentTab].classList.remove("currentSlide");
    currentTab = currentTab + n;
  }
}*/

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("devis-fieldset");
  // Exit the function if any field in the current tab is invalid:
  //if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].classList.add("left");
  x[currentTab].classList.remove("currentSlide");
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  /*if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("devis-form").submit();
    return false;
  }*/
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
    document.getElementsByClassName("devis-step")[currentTab].className.add(" checked");
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
   /*element.addEventListener("change", function () {
    let expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/ //pattern

     if(element.type == 'email' || !expressionReguliere.test(theField.value)) {
      element.classList.add("false")
     }
     else {}
   });*/
});

// radio take value

/*const btn = document.querySelector('#btn');


        // handle click button
        btn.onclick = function () {
            const rbs = document.querySelectorAll('input[name="choice"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            alert(selectedValue);
        };*/


// Range with input

var myRange = document.querySelector('#CupQuantityRange');
var myValue = document.querySelector('#cupQuantityNumber');
var myUnits = 'myUnits';
var off = myRange.offsetWidth / (myRange.max - myRange.min);
var px =  ((myRange.value - myRange.min) * off);

  myValue.style.left = px + 'px';
  console.log("px" + px);
  console.log("offsetwidth" + myRange.offsetWidth);
  console.log("rangeMax" + myRange.max);
  console.log("rangeMin" + myRange.min);
  console.log("off" + off);
  console.log("rangeValue" + myRange.value);
  if (myRange.offsetWidth == 0) {
    myRange.offsetWidth == 300;
  }

  myRange.oninput =function(){
    let px = ((myRange.value - myRange.min) * off);
    myValue.style.left = px + 'px';
    console.log("px modified" + px);

  };
  let QuantityAnimation = document.querySelector(".Quantity-animation");

  myRange.addEventListener("change", function() {
    var x = ((myRange.value - myRange.min) / (myRange.max - myRange.min) * 100 );
    var color = 'linear-gradient(90deg, rgb(80, 176, 162)' + x + '%, rgb(248, 248, 248)' + x + '%)';
    myRange.style.background = color;
    if (myRange.value < 666) {
      QuantityAnimation.classList.add("step1");
      QuantityAnimation.classList.remove("step2");
      QuantityAnimation.classList.remove("step3");
    }
    if (myRange.value > 666 && myRange.value < 1333) {
      QuantityAnimation.classList.add("step2");
      QuantityAnimation.classList.remove("step1");
      QuantityAnimation.classList.remove("step3");
    }
    if (myRange.value > 1333) {
      QuantityAnimation.classList.add("step3");
      QuantityAnimation.classList.remove("step1");
      QuantityAnimation.classList.remove("step2");
    }
  })

  //input date min today

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
  if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;

document.querySelector(".dateInputBegin").setAttribute("min", today);
document.querySelector(".dateInputEnd").setAttribute("min", today);
document.querySelector(".dateInputDate").setAttribute("min", today);
document.querySelector(".dateInputBegin").setAttribute("value", today);
document.querySelector(".dateInputEnd").setAttribute("value", today);
document.querySelector(".dateInputDate").setAttribute("value", today);

let radioAchat = document.querySelector('#achat');
let radioLoc = document.querySelector('#location');
let begins = document.querySelector('.begins');
let end = document.querySelector('.end');
let AchatDate = document.querySelector('.input-container');
let rbs = document.querySelectorAll('input[name="device"]');

function achatlocCheck() {
  if (document.getElementById('location').checked) {
    document.querySelector('.dates-form.achat').classList.remove('achat');
    document.querySelector('.dates-form').classList.add('location');
    document.querySelector('.date-writed').style = "display:none;";
    document.querySelector('.dates-begin-writed').style = "display:block;";
  document.querySelector('.date-end-writed').style = "display:block;";
    document.querySelector('.device-selected').innerHTML = 'location';
} 
if (document.getElementById('achat').checked) {
  document.querySelector('.dates-form.location').classList.remove('location');
  document.querySelector('.dates-form').classList.add('achat');
  document.querySelector('.dates-begin-writed').style = "display:none;";
  document.querySelector('.date-end-writed').style = "display:none;";
  document.querySelector('.date-writed').style = "display:block;";
  document.querySelector('.device-selected').innerHTML = 'achat';
}
}

//resultat formulaire js

//quantité
let quantityInput = document.querySelector('input[name="CupQuantity"]');
let quantity = document.querySelector('.quantity-selected') ;
quantityInput.addEventListener('change', ev => {
  quantity.innerHTML = quantityInput.value
});
//dates
let dateBeginWrited = document.querySelector('.dates-begin-writed');
let dateEndWrited = document.querySelector('.date-end-writed');
let theDateWrited = document.querySelector('.date-writed');
let dateBeginInput = document.querySelector('.dateInputBegin');
let dateEndInput = document.querySelector('.dateInputEnd');
let theDateInput = document.querySelector('.dateInputDate');
theDateInput.addEventListener('change', function() {
  theDateWrited.innerHTML = "Le" + " " + theDateInput.value
});
dateBeginInput.addEventListener('change', function() {
  dateBeginWrited.innerHTML = "Du" + " " + dateBeginInput.value
});
dateEndInput.addEventListener('change', function() {
  dateEndWrited.innerHTML = "Au" + " " + dateEndInput.value
});
//Bonus Nettoyage
let NetInput = document.querySelector('#nettoyage')
let ResumeNet = document.querySelector('.bonus-checked')

function NetWrited () {
  if (NetInput.checked = true) {
    ResumeNet.innerHTML = "Nettoyage";
  }
  else {
    ResumeNet.innerHTML = "aucun";
  }
}

let firstName = document.querySelector('.firstname-writed')
function FirstNameoutput() {
  firstName.innerHTML = " " + document.querySelector('#firstName').value
}
let lastName = document.querySelector('.lastname-writed')
function LastNameoutput() {
  lastName.innerHTML = " " + document.querySelector('#lastName').value
}
let Company = document.querySelector('.company-writed')
function Companyoutput() {
  Company.innerHTML = " " + document.querySelector('#company').value
}
function Emailoutput() {
  document.querySelector('.email-writed').innerHTML = " " + document.querySelector('#email').value
}
function Phoneoutput() {
  document.querySelector('.phone-writed').innerHTML = " " + document.querySelector('#phone').value
}
function Messageoutput() {
  document.querySelector('.message-writed').innerHTML = " " + document.querySelector('#message').value
}