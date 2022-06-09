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

function validateFormEvent1(event) {
  event.preventDefault();
  verdi1 = true;

  if (
    checkLength1(inputNameEvent1.value, 5) === true
  ) {
    contactNameErrorEvent1.style.display = "none";
    verdi1 = true;
  } else {
    contactNameErrorEvent1.style.display =
      "block";
    verdi1 = false;
  }

  if (
    validateEmailEvent1(
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
  sendInquiryEvent1();
}

function validateEmailEvent1(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

eventForm1.addEventListener(
  "click",
  validateFormEvent1
);

function checkLength1(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

sendSuccsessEvent1.addEventListener(
  "click",
  sendInquiryEvent1
);

function sendInquiryEvent1() {
  if (verdi1 == true)
    sendSuccsessEvent1.style.display = "block";
}


/*Validation book event 2*/

const eventForm2 = document.getElementById(
  "book-event-2"
);
const inputNameEvent2 = document.getElementById(
  "fullname-event-2"
);

const contactNameErrorEvent2 =
  document.querySelector(
    "#contact-name-error-event-2"
  );
const contactEmailEvent2 = document.querySelector(
  "#email-event-2"
);
const contactEmailErrorEvent2 =
  document.querySelector(
    "#contact-email-error-event-2"
  );

const sendSuccsessEvent2 = document.querySelector(
  "#send-succsess-event-2"
);
let verdi2 = true;

function validateFormEvent2(event) {
  event.preventDefault();
  verdi2 = true;

  if (
    checkLength2(inputNameEvent2.value, 5) === true
  ) {
    contactNameErrorEvent2.style.display = "none";
    verdi2 = true;
  } else {
    contactNameErrorEvent2.style.display =
      "block";
    verdi2 = false;
  }

  if (
    validateEmailEvent2(
      contactEmailEvent2.value
    ) === true
  ) {
    contactEmailErrorEvent2.style.display =
      "none";
    verdi2 = true;
  } else {
    contactEmailErrorEvent2.style.display =
      "block";
    verdi2 = false;
  }
  sendInquiryEvent2();
}

function validateEmailEvent2(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

eventForm2.addEventListener(
  "click",
  validateFormEvent2
);

function checkLength2(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

sendSuccsessEvent2.addEventListener(
  "click",
  sendInquiryEvent2
);

function sendInquiryEvent2() {
  if (verdi2 == true)
    sendSuccsessEvent2.style.display = "block";
}


/*Validation book event 3*/

const eventForm3 = document.getElementById(
  "book-event-3"
);
const inputNameEvent3 = document.getElementById(
  "fullname-event-3"
);

const contactNameErrorEvent3 =
  document.querySelector(
    "#contact-name-error-event-3"
  );
const contactEmailEvent3 = document.querySelector(
  "#email-event-3"
);
const contactEmailErrorEvent3 =
  document.querySelector(
    "#contact-email-error-event-3"
  );

const sendSuccsessEvent3 = document.querySelector(
  "#send-succsess-event-3"
);
let verdi3 = true;

function validateFormEvent3(event) {
  event.preventDefault();
  verdi3 = true;

  if (
    checkLength3(inputNameEvent3.value, 5) === true
  ) {
    contactNameErrorEvent3.style.display = "none";
    verdi3 = true;
  } else {
    contactNameErrorEvent3.style.display =
      "block";
    verdi3 = false;
  }

  if (
    validateEmailEvent3(
      contactEmailEvent3.value
    ) === true
  ) {
    contactEmailErrorEvent3.style.display =
      "none";
    verdi3 = true;
  } else {
    contactEmailErrorEvent3.style.display =
      "block";
    verdi3 = false;
  }
  sendInquiryEvent3();
}

function validateEmailEvent3(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

eventForm3.addEventListener(
  "click",
  validateFormEvent3
);

function checkLength3(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

sendSuccsessEvent3.addEventListener(
  "click",
  sendInquiryEvent3
);

function sendInquiryEvent3() {
  if (verdi3 == true)
    sendSuccsessEvent3.style.display = "block";
}
