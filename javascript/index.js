
import { info } from "/javascript/data.js";

let content = document.querySelector(".content");
let start = 0;
let end = 1;

function getExibition() {
  for (let i = 4; i < info.length; i++) {
    content.innerHTML += `<div class="booking-ex-ilu"> <i class="fas fa-chevron-left" id="left-button"></i> <img src="${info[start].image}" alt="${info[start].alt}"> <i class="fas fa-chevron-right" id="right-button"></i></div>
  <h3>${info[start].name}</h3>
`;
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
