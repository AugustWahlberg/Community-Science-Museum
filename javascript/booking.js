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

/*Validation book event 1*/

const eventForm1 = document.getElementById(
  "book-event-1"
);
const inputNameEvent1 = document.getElementById(
  "fullname-event-1"
);

const contactNameErrorEvent1 =
  document.querySelector(
    "#contact-name-error-event-1"
  );
const contactEmailEvent1 = document.querySelector(
  "#email-event-1"
);
const contactEmailErrorEvent1 =
  document.querySelector(
    "#contact-email-error-event-1"
  );

const sendSuccsessEvent1 = document.querySelector(
  "#send-succsess-event-1"
);
let verdi1 = true;

function validateFormEvent(event) {
  event.preventDefault();
  verdi1 = true;

  if (
    checkLength(inputNameEvent1.value, 5) === true
  ) {
    contactNameErrorEvent1.style.display = "none";
    verdi1 = true;
    console.log(verdi1);
  } else {
    contactNameErrorEvent1.style.display =
      "block";
    verdi1 = false;
  }

  if (
    validateEmailEvent(
      contactEmailEvent1.value
    ) === true
  ) {
    contactEmailErrorEvent1.style.display =
      "none";
    verdi1 = true;
  } else {
    contactEmailErrorEvent1.style.display =
      "block";
    verdi1 = false;
  }
  sendInquiryEvent();
}

function validateEmailEvent(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

eventForm1.addEventListener(
  "click",
  validateFormEvent
);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

sendSuccsessEvent1.addEventListener(
  "click",
  sendInquiryEvent
);

function sendInquiryEvent() {
  if (verdi1 == true)
    sendSuccsessEvent1.style.display = "block";
}
