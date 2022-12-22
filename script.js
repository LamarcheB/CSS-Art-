"use strict";

//*****************************************************************************/
//***                        Selecting HTML elements                        ***/
//*****************************************************************************/

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent =
//   "Winner winner! Chicken Dinner!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
//
//

//*****************************************************************************/
//***                           JS and CSS Styles                           ***/
//*****************************************************************************/

//  create handle, use style, pick a property to change and apply the style in " "
//
//  document.querySelector("body").style.backgroundColor = "#60b347";
//  document.querySelector(".number").style.width = "30rem";
//
//
//  document.addEventListener("keydown", function (e) {    //keydown, keyup, keysomething....
//    e is for event, aka, pass in the event object to the next function
//    console.log(e); // Shows the properties of the event
//    console.log(e.key);

//   if (e.key === "Escape" && !instructions.classList.contains("hidden")) {
//     instructionModal.classList.add("hidden");
//    }
//   });

//*****************************************************************************/
//***                            Event Listener                             ***/
//*****************************************************************************/

const player = document.querySelector(".player");
let xMod, yMod, currentPlayerXPos, currentPlayerYPos;

document.addEventListener("keydown", function (e) {
  // console.log(e); // Shows the properties of the event
  // console.log(e.key);

  // Get current position
  // update current position
  // set current position to new position.

  currentPlayerXPos = parseInt(getComputedStyle(player).left);
  currentPlayerYPos = parseInt(getComputedStyle(player).bottom);

  if (e.key === "ArrowLeft") {
    xMod = -5;
  } else if (e.key === "ArrowRight") {
    xMod = 5;
  }
  if (e.key === " " || e.key === "ArrowUp") {
    yMod = 10;
    // if (!isJumping) {
    //   player.classList.toggle("jumping"); // Which will trigger an animation to move up
    // }
    // if (playerHitsHead) {
    //   player.classList.toggle("jumping"); // which will turn off the jump animation and have player fall.
    // }
    // setTimeout(function () {
    //   player.style.backgroundColor = "#333";
    // }, 5000);
  } else if (e.key === "ArrowDown") {
    yMod = -10;
  }
  console.log(`${currentPlayerXPos + yMod}px`);
  player.style.left = `${currentPlayerXPos + xMod}px`;
  player.style.bottom = `${currentPlayerYPos + yMod}px`;
  xMod = 0;
  yMod = 0;
});

//  document.querySelector(".number").style.width = "30rem";
