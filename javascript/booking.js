import { info } from "/javascript/data.js";

let content = document.querySelector(".content");
let start = 0;
let end = 1;

function getExibition() {
  for (let i = 4; i < info.length; i++) {
    content.innerHTML += `<div class="booking-ex-ilu"> <i class="fas fa-chevron-left" id="left-button"></i> <img src="${info[start].image}" alt="${info[start].alt}"> <i class="fas fa-chevron-right" id="right-button"></i></div>
  <h3>${info[start].name}</h3>
  <p>${info[start].text}</p>`;
  }

  const rightButton = document.getElementById(
    "right-button"
  );

  function moveRight() {
    content.innerHTML = "";
    start = start + 1;
    end = end + 1;
    if (end > 4) {
      end = 1;
      start = 0;
    }
    getExibition();
  }
  rightButton.addEventListener(
    "click",
    moveRight
  );

  const leftButton = document.getElementById(
    "left-button"
  );

  function moveLeft() {
    content.innerHTML = "";
    start = start - 1;
    end = end - 1;
    if (start < 0) {
      end = 4;
      start = 4;
    }

    getExibition();
  }
  leftButton.addEventListener("click", moveLeft);
}

getExibition();

/*Validation book guide tour*/

const bookTourForm = document.querySelector(
  "#book-tour-form"
);
const inputName = document.querySelector(
  "#fullname-1"
);
const contactNameError = document.querySelector(
  "#contact-name-error"
);
const contactEmail =
  document.querySelector("#email-1");
const contactEmailError = document.querySelector(
  "#contact-email-error"
);
const contactMessage = document.querySelector(
  "#contact-message"
);
const contactMessageError =
  document.querySelector(
    "#contact-message-error"
  );
const sendSuccsess = document.querySelector(
  ".send-succsess"
);

let verdi = true;

function validate(item, itemError, length) {
  if (item.value.trim().length > length) {
    itemError.style.display = "none";
  } else {
    itemError.style.display = "block";
    verdi = false;
  }
}

function validateForm() {
  event.preventDefault();
  verdi = true;

  if (
    validateEmail(contactEmail.value) === true
  ) {
    contactEmailError.style.display = "none";
  } else {
    contactEmailError.style.display = "block";
    verdi = false;
  }

  validate(inputName, contactNameError, 5);

  validate(
    contactMessage,
    contactMessageError,
    40
  );
}

function validateEmail(contactEmail) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(contactEmail);
  return patternMatches;
}

const btnSend = document.getElementById("send");

bookTourForm.addEventListener(
  "submit",
  validateForm
);

btnSend.addEventListener("click", sendInquiry);

function sendInquiry() {
  validateForm();

  if (verdi == true)
    sendSuccsess.style.display = "flex";
}

/*Validation book event


const inputNameEvent = document.getElementById(
  "fullname-2"
);
const contactNameErrorEvent = document.querySelector(
  "#contact-name-error-event"
);
const contactEmailEvent = document.querySelector(
  "#email-1-event"
);
const contactEmailErrorEvent = document.querySelector(
  "#contact-email-error-event"
);

const sendSuccsessEvent = document.querySelector(
  ".send-succsess-event"
);


const eventForm1 = document.getElementById("book-event-1");
const eventForm2 = document.getElementById("book-event-2");
const eventForm3 = document.getElementById("book-event-3");

const bookEventbtn1 = document.getElementById("book-event-1-btn");
const bookEventbtn2 = document.getElementById("book-event-2-btn");
const bookEventbtn3 = document.getElementById("book-event-3-btn");

bookEventbtn1.addEventListener("click", sendInquiryEvent); 
bookEventbtn2.addEventListener("click", sendInquiryEvent); 
bookEventbtn3.addEventListener("click", sendInquiryEvent); 


eventForm1.addEventListener("submit", validateFormEvent);
eventForm2.addEventListener("submit", validateFormEvent);
eventForm3.addEventListener("submit", validateFormEvent);


function validate(item, itemError, length) {
  if (item.value.trim().length > length) {
    itemErrorEvent.style.display = "none";
  } else {
    itemErrorEvent.style.display = "block";
    verdi = false;
  }
}

function validateFormEvent() {
  event.preventDefault();
  verdi = true;

  if (
    validateEmailEvent(contactEmailEvent.value) === true
  ) {
    contactEmailErrorEvent.style.display = "none";
  } else {
    contactEmailErrorEvent.style.display = "block";
    verdi = false;
  }

  validate(inputNameEvent, contactNameErrorEvent, 5);
}

function validateEmailEvent(contactEmailEvent) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(contactEmailEvent);
  return patternMatches;
}

sendSuccsessEvent.addEventListener("click", sendInquiryEvent);

function sendInquiryEvent() {
  validateFormEvent();

  if (verdi == true)
    sendSuccsess.style.display = "flex";
} */

// Form
const eventForm1 = document.getElementById(
  "book-event-1"
);
const inputNameEvent =
  document.getElementById("fullname-2");
const contactNameErrorEvent =
  document.querySelector(
    "#contact-name-error-event"
  );
const contactEmailEvent = document.querySelector(
  "#email-1-event"
);
const contactEmailErrorEvent =
  document.querySelector(
    "#contact-email-error-event"
  );

const sendSuccsessEvent = document.querySelector(
  "#send-succsess-event"
);
let verdi2 = true;
 
function validateFormEvent(event) {
  event.preventDefault();
  verdi2 = true;
  

  if (checkLength(inputNameEvent.value, 5) === true) {
    contactNameErrorEvent.style.display = "none";
    verdi2 = true;
    console.log(verdi2)
  } else {
    contactNameErrorEvent.style.display = "block";
    verdi2 = false;
  }

  if (validateEmailEvent(contactEmailEvent.value) === true) {
    contactEmailErrorEvent .style.display = "none";
    verdi2 = true;
  } else {
    contactEmailErrorEvent .style.display = "block";
    verdi2 = false;
  }
  sendInquiryEvent()
}

function validateEmailEvent(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

eventForm1.addEventListener("click", validateFormEvent);

function checkLength(value, len) {
  
  if (value.trim().length > len) {
    return true;

  } else {
    return false;
  }
}

sendSuccsessEvent.addEventListener("click", sendInquiryEvent);

function sendInquiryEvent() {
  if (verdi2 == true)
    sendSuccsessEvent.style.display = "block";
} 
