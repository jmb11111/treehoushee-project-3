// When the page loads, give focus to the first text field
// Set focus on the first text field
let nameField = $("#name");
let emailField =$("#mail");
let ccField = $("#cc-num");
let zipField = $("#zip");
let cvvField = $("#cvv");
let registrationFlag = $("#register");
let CVVError = $("#CVVError");
let emailError = $("#emailError");
let emailError2 = $("#emailError2");

let ccError = $("#ccError");
let zipError = $("#zipError");
let nameError = $("#nameError");

nameField.focus();



// ”Job Role” section of the form:
// A text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
// Give the field an id of “other-title,” and add the placeholder text of "Your Job Role" to the field.
let otherField= $("#other_title");
otherField.attr("style","display: none");
function hideOtherInput(){
  let title = document.getElementById("title").value;
if (title !== "other") {
  otherField.attr("style","display: none");

  }else {
    otherField.attr("style","display:");
}
}


// ”T-Shirt Info” section of the form:
// For the T-Shirt color menu, only display the color options that match the design selected in the "Design" menu.
// If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
// If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."

const colors = $("#color");
const colorSection =$("#colors-js-puns");

colorSection.css("display", "none");

function showColorSection(){
  colorSection.css("display", "");
}

function onClickColors(){
let selectedDesign = document.getElementById("design").selectedIndex;
showColorSection();
if (selectedDesign === 1) {
  colors.children().remove();
  colors.append('<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>');
  colors.append('<option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>');
  colors.append('<option value="gold">Gold (JS Puns shirt only)</option>');
}else if (selectedDesign === 2){
colors.children().remove();
    colors.append('<option value="tomato">Tomato (I &#9829; JS shirt only)</option>');
    colors.append('<option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>');
    colors.append('<option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>');
}else {
  colorSection.css("display", "none");
}
}




// ”Register for Activities” section of the form:
// Some events are at the same time as others. If the user selects a workshop, don"t allow selection of a workshop at the same date and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn"t available.
// When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
// As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300.
const mainConference = $('[name = "all"]');
mainConference.value= 200;

const javaScriptFrameworks = $('[name = "js-frameworks"]');
javaScriptFrameworks.value = 100;

const javaScriptLibraries = $('[name = "js-libs"]');
javaScriptLibraries.value = 100;

const express = $('[name = "express"]');
express.value =100;

const nodeJS = $('[name = "node"]');
nodeJS.value =100;

const buildTools = $('[name = "build-tools"]');
buildTools.value =100;

const npm  = $('[name = "npm"]');
npm.value=100;

let price = 0;
const priceDisplay= $('#totalPrice');

function updatePrice(){
  if (price > 0){
    priceDisplay.css("display","");
    priceDisplay.text("Total Price $"+ price +".00");
  }else {
    priceDisplay.css("display","none");
  }

}

function activitiesCheck1(){
  if (mainConference.is(":checked")){
    price+= 200;
    updatePrice();
  }else {
price-= 200;
updatePrice();
  }
}
function activitiesCheck2(){
  if (javaScriptFrameworks.is(":checked")){
    express.attr("disabled", true);

    price+= 100;
    updatePrice();


  }else {
    express.removeAttr("disabled");

    price-= 100;
    updatePrice();
  }
}
function activitiesCheck3(){
if (javaScriptLibraries.is(":checked")){
    nodeJS.attr("disabled", true);

    price+= 100;
    updatePrice();

    }else {
      nodeJS.removeAttr("disabled");

      price-= 100;
      updatePrice();
    }
  }
function activitiesCheck4(){
  if (express.is(":checked")){
    javaScriptFrameworks.attr("disabled", true);

    price+= 100;
    updatePrice();
    }else {
      javaScriptFrameworks.removeAttr("disabled");

      price-= 100;
      updatePrice();
    }
  }
function activitiesCheck5(){
  if (nodeJS.is(":checked")){
      javaScriptLibraries.attr("disabled", true);

      price+= 100;
      updatePrice();
    }else {
      javaScriptLibraries.removeAttr("disabled");

      price-= 100;
      updatePrice();
    }
  }
  function activitiesCheck6(){
  if (buildTools.is(":checked")){

    price+= 100;
    updatePrice();
    }else {

      price-= 100;
      updatePrice();
    }
  }
  function activitiesCheck7(){
  if (npm.is(":checked")){

      price+= 100;
      updatePrice();
    }else {

      price-= 100;
      updatePrice();
    }
}



// Payment Info section of the form:
// Display payment sections based on the payment option chosen in the select menu
// The "Credit Card" payment option should be selected by default, display the #credit-card div, and hide the "Paypal" and "Bitcoin information.
// When a user selects the "PayPal" payment option, the Paypal information should display, and the credit card and “Bitcoin” information should be hidden.
// When a user selects the "Bitcoin" payment option, the Bitcoin information should display, and the credit card and “PayPal” information should be hidden.

const creditCard = $("#credit-card");
const paypal = $("#paypal");
const bitcoin = $("#bitcoin");

function paymentSelection(){
  let paymentChoice = document.getElementById("payment").selectedIndex;
  if (paymentChoice === 0 ) {
    creditCard.css("display","none");
    paypal.css("display","none");
    bitcoin.css("display","none");
  }else if (paymentChoice === 1) {
    creditCard.css("display","");
    paypal.css("display","none");
    bitcoin.css("display","none");
  }else if (paymentChoice === 2) {
    creditCard.css("display","none");
    paypal.css("display","");
    bitcoin.css("display","none");
  }else if (paymentChoice === 3) {
    creditCard.css("display","none");
    paypal.css("display","none");
    bitcoin.css("display","");
  }
}
paymentSelection();






// Form validation:
// If any of the following validation errors exist, prevent the user from submitting the form:


// Name field can"t be blank
function checkName(){
let name = document.forms["myForm"]["user_name"].value;
  if (name == "") {
    nameError.show();
    nameField.css("border","2px red solid");
    return false;
  }else {
    nameError.hide();
    nameField.css("border","2px solid #c1deeb");
    return true;
  }
}


// Email field must be a validly formatted e-mail address (you don"t have to check that it"s a real e-mail address, just that it"s formatted like one: dave@teamtreehouse.com for example.
// *EXTRA CREDIT* This checks for two things, if the email is empty or if it is invalid and gives a message in real time depending on which is the case
function checkEmail(){
  let email = document.forms["myForm"]["user_email"].value;
  let emailFilter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
  if (email == "") {
    emailError.show();
    emailField.css("border","2px red solid");
    return false;
   }else if (!emailFilter.test(email)) {
          emailError2.show();
          emailField.css("border","2px red solid");
          return false;
   }
   else {
     emailError.hide();
     emailError2.hide();
     emailField.css("border","2px solid #c1deeb");
     return true;
}
}


// Must select at least one checkbox under the "Register for Activities" section of the form.
function checkChecker(){
  if (mainConference.is(":checked") || javaScriptFrameworks.is(":checked") || javaScriptLibraries.is(":checked") || express.is(":checked")|| nodeJS.is(":checked")|| buildTools.is(":checked")|| npm.is(":checked")) {
    registrationFlag.css("border","");
    return true;
  }else {

    alert("Please register for at least one activity!");
    registrationFlag.css("border","2px red solid");
    return false;

  }
}

// If the selected payment option is "Credit Card," make sure the user has supplied a credit card number, a zip code, and a 3 number CVV value before the form can be submitted.
// Credit card field should only accept a number between 13 and 16 digits
ccError.css("display", "none");
function creditCardChecker(){
  let paymentChoice = document.getElementById("payment").selectedIndex;
  let cc = document.forms["myForm"]["user_cc-num"].value;
  let cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  if(cc.match(cardno)|| paymentChoice == 2 || paymentChoice ==3)
        {
      ccError.hide();
      ccField.css("border","2px solid #c1deeb");
      return true;
        }
      else
        {
        ccError.show();
        ccField.css("border","2px red solid");
        return false;
        }
}


// The zipcode field should accept a 5-digit number
zipError.css("display", "none");
function zipChecker(){
  let paymentChoice = document.getElementById("payment").selectedIndex;
  let zip = document.forms["myForm"]["user_zip"].value;
  let zipCheck = /^(?:[0-9]{5})$/;
  if(zip.match(zipCheck) || paymentChoice === 2 || paymentChoice === 3 ){
      zipError.hide();
      zipField.css("border","2px solid #c1deeb");
      return true;
    }else
        {
        zipError.show();
         zipField.css("border","2px red solid");
        return false;
        }
}
CVVError.hide();

// The CVV should only accept a number that is exactly 3 digits long
function cvvChecker(){
  let paymentChoice = document.getElementById("payment").selectedIndex;
  let cvv = document.forms["myForm"]["user_cvv"].value;
  let cvvCheck = /^(?:[0-9]{3})$/;
  if(cvv.match(cvvCheck) || paymentChoice === 2 || paymentChoice === 3)
        {
      cvvField.css("border","2px solid #c1deeb");
      CVVError.hide();
      return true;
        }
      else
        {
        CVVError.show();
        cvvField.css("border","2px red solid");
        return false;
        }
}

// Form validation messages:
// Provide some kind of indication when there’s a validation error. The field’s borders could turn red, for example, or a message could appear near the field or at the top of the form
// There should be an error indication for the name field, email field, “Register for Activities” checkboxes, credit card number, zip code, and CVV
//scroll the message box to the top offset of browser"s scrool bar


//These functions make each error message able to be hidden independantly
function closeEmailMessage(){
  $("#emailError").css("display", "none");
}
function closeEmail2Message(){
  $("#emailError2").css("display", "none");
}
function closeNameMessage(){
  $("#nameError").css("display", "none");
}
function closeCCMessage(){
  $("#ccError").css("display", "none");
}
function closeCVVMessage(){
  $("#CVVError").css("display", "none");
}
function closeZipMessage(){
  $("#zipError").css("display", "none");
}

//runs all validation functions
function formValidation() {
  if(
  checkName()&&
  checkEmail()&&
  checkChecker()&&
  creditCardChecker()&&
  zipChecker()&&
  cvvChecker()){
return true;

}else {
return false;
}
}
const button  = document.getElementById("submit");
button.addEventListener("click", function(e) {
  if(!formValidation()) {
    console.log(e);
    e.preventDefault();
    console.log("Name is wrong!");
  } else {
    console.log("Name is right!");
  }

});
