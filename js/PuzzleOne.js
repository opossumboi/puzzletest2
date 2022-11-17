// TEST COMMENT COMMIT
// Puzzle navigation Buttons in Nav bar
const NAV1 = document.getElementById('puzzle1-nav-button');
const NAV2 = document.getElementById('puzzle2-nav-button');
const NAV3 = document.getElementById('puzzle3-nav-button');
const NAV4 = document.getElementById('puzzle4-nav-button');
const NAV5 = document.getElementById('puzzle5-nav-button');

// Puzzle Elements
const PE1 = document.getElementById('puzzle1-element');
const PE2 = document.getElementById('puzzle2-element');
const PE3 = document.getElementById('puzzle3-element');
const PE4 = document.getElementById('puzzle4-element');
const PE5 = document.getElementById('puzzle5-element');

// Dialogue Elements
const DIA0 = document.getElementById("dialogue-0");
const DIA1 = document.getElementById("dialogue-1");
const DIA2 = document.getElementById("dialogue-2");
const DIA3 = document.getElementById("dialogue-3");
const DIA4 = document.getElementById("dialogue-4");
const DIA5 = document.getElementById("dialogue-5");
const DIA6 = document.getElementById("dialogue-6");

// Welcome Screen elements
const PE0 = document.getElementById('puzzle0-element');
const P0Start = document.getElementById('p0-p1-navbutton');

// ANSWER TO PUZZLE 1
const P1A = "map";

// ANSWER TO PUZZLE 2
const P2A = '20';

// ANSWER TO PUZZLE 3
const P3A = "patchyass";

// ANSWER TO PUZZLE 4
const P4A = "chenga";

// ANSWER TO PUZZLE 5
// const P5A = "";

// Submit Answer Buttons Puzzles 1-4
const SA1Btn = document.getElementById('submit-button-1');
const SA2Btn = document.getElementById('submit-button-2');
const SA3Btn = document.getElementById('submit-button-3');
const SA4Btn = document.getElementById('submit-button-4');

// Puzzle 5 answer buttons (Yes & No)
const SA5Btn_Accept = document.getElementById('submit-button-5-accept');
const SA5Btn_Reject = document.getElementById('submit-button-5-reject');

// PuzzleOne Answer input
let a1 = document.getElementById('Answer1');

// PuzzleTwo Answer input
let a2 = document.getElementById('Answer2');

// PuzzleThree Answer input
let a3 = document.getElementById('Answer3');

// PuzzleFour Answer input
let a4 = document.getElementById('Answer4');

// Reveal the answer button in puzzle 4
const reveal_button = document.getElementById('reveal-button-4');

// Danger dont click decoy heading for Puzzle nav button 5
const Danger1 = document.getElementById('danger-decoy');

// This will setup the Welcome Screen if you open up index.html
// Dialogue 0 Element will be shown at the start, replacing every Dialogue element
DIA1.replaceWith(DIA0);
DIA2.replaceWith(DIA0);
DIA3.replaceWith(DIA0);
DIA4.replaceWith(DIA0);
DIA5.replaceWith(DIA0);
DIA6.replaceWith(DIA0);

// FOR DEVELOPERS, REVEALS ALL PUZZLE NAV BUTTONS, COMMENT NAV2-NAV5 AFTER COMPLETION
NAV1.classList.add('reveal');
// NAV2.classList.add('reveal');
// NAV3.classList.add('reveal');
// NAV4.classList.add('reveal');
// NAV5.classList.add('reveal');

// Nav button to puzzle 1 from the Welcome Screen puzzle
P0Start.addEventListener('click', () => {

  // This will replace all Puzzle elements with Puzzle 1 Element, 
  // will work in reverse (eg. p5 to p1)
  PE0.replaceWith(PE1);
  PE2.replaceWith(PE1);
  PE3.replaceWith(PE1);
  PE4.replaceWith(PE1);
  PE5.replaceWith(PE1);
  PE1.classList.remove('hidden');

  // This will replace all Dialogue elements with Dialogue 1 Element,
  // will work in reverse (eg. p5 to p1)
  DIA0.replaceWith(DIA1);
  DIA2.replaceWith(DIA1);
  DIA3.replaceWith(DIA1);
  DIA4.replaceWith(DIA1);
  DIA5.replaceWith(DIA1);
  DIA6.replaceWith(DIA1);
  DIA1.classList.remove('hidden');

})

// Nav button to puzzle 1 from navigation menu
NAV1.addEventListener('click', () => {

  // This will replace all Puzzle elements with Puzzle 1 Element,
  // will work in reverse (eg. p5 to p1)
  PE0.replaceWith(PE1);
  PE2.replaceWith(PE1);
  PE3.replaceWith(PE1);
  PE4.replaceWith(PE1);
  PE5.replaceWith(PE1);
  PE1.classList.remove('hidden');

  // This will replace all Dialogue elements with Dialogue 1 Element,
  // will work in reverse (eg. d5 to d1)
  DIA0.replaceWith(DIA1);
  DIA2.replaceWith(DIA1);
  DIA3.replaceWith(DIA1);
  DIA4.replaceWith(DIA1);
  DIA5.replaceWith(DIA1);
  DIA6.replaceWith(DIA1);
  DIA1.classList.remove('hidden');

})

// Nav button to puzzle 2 from navigation menu
NAV2.addEventListener('click', () => {

  // This will replace all Puzzle elements with Puzzle 2 Element,
  // will work in reverse (eg. p5 to p1)
  PE0.replaceWith(PE2);
  PE1.replaceWith(PE2);
  PE3.replaceWith(PE2);
  PE4.replaceWith(PE2);
  PE5.replaceWith(PE2);
  PE2.classList.remove('hidden');

  // This will replace all Dialogue elements with Dialogue 2 Element,
  // will work in reverse (eg. d5 to d1)
  DIA0.replaceWith(DIA2);
  DIA1.replaceWith(DIA2);
  DIA3.replaceWith(DIA2);
  DIA4.replaceWith(DIA2);
  DIA5.replaceWith(DIA2);
  DIA6.replaceWith(DIA2);
  DIA2.classList.remove('hidden');


})

// Nav button to puzzle 3 from navigation menu
NAV3.addEventListener('click', () => {

  // This will replace all Puzzle elements with Puzzle 3 Element,
  // will work in reverse (eg. p5 to p1)
  PE0.replaceWith(PE3);
  PE1.replaceWith(PE3);
  PE2.replaceWith(PE3);
  PE4.replaceWith(PE3);
  PE5.replaceWith(PE3);
  PE3.classList.remove('hidden');

  // This will replace all Dialogue elements with Dialogue 3 Element,
  // will work in reverse (eg. d5 to d1)
  DIA0.replaceWith(DIA3);
  DIA1.replaceWith(DIA3);
  DIA2.replaceWith(DIA3);
  DIA4.replaceWith(DIA3);
  DIA5.replaceWith(DIA3);
  DIA6.replaceWith(DIA3);
  DIA3.classList.remove('hidden');

})

// Nav button to puzzle 4 from navigation menu
NAV4.addEventListener('click', () => {

  // This will replace all Puzzle elements with Puzzle 4 Element,
  // will work in reverse (eg. p5 to p1)
  PE0.replaceWith(PE4);
  PE1.replaceWith(PE4);
  PE2.replaceWith(PE4);
  PE3.replaceWith(PE4);
  PE5.replaceWith(PE4);
  PE4.classList.remove('hidden');

  // This will replace all Dialogue elements with Dialogue 4 Element,
  // will work in reverse (eg. d5 to d1)
  DIA0.replaceWith(DIA4);
  DIA1.replaceWith(DIA4);
  DIA2.replaceWith(DIA4);
  DIA3.replaceWith(DIA4);
  DIA5.replaceWith(DIA4);
  DIA6.replaceWith(DIA4);
  DIA4.classList.remove('hidden');


})

// Nav button to puzzle 5 from navigation menu
NAV5.addEventListener('click', () => {

  // This will replace all Puzzle elements with Puzzle 5 Element,
  // will work in reverse (eg. p5 to p1)
  PE0.replaceWith(PE5);
  PE1.replaceWith(PE5);
  PE2.replaceWith(PE5);
  PE3.replaceWith(PE5);
  PE4.replaceWith(PE5);
  PE5.classList.remove('hidden');

  // This will replace all Dialogue elements with Dialogue 5 Element,
  // will work in reverse (eg. d5 to d1)
  DIA0.replaceWith(DIA5);
  DIA1.replaceWith(DIA5);
  DIA2.replaceWith(DIA5);
  DIA3.replaceWith(DIA5);
  DIA4.replaceWith(DIA5);
  DIA6.replaceWith(DIA5);

  DIA5.classList.remove('hidden');

})

// PUZZLE 1 SUBMIT ANSWER BUTTON
// On click compares answer from user input element (a1) to (P1A)
SA1Btn.addEventListener('click', () => {

  // If the answer is correct, reveals next puzzle Nav Button
  if (a1.value == P1A) {
    console.log("haha its correct!");
    NAV2.classList.add("reveal");
    alert('Check Navigation tab for new puzzle!');

    // If the answer is wrong, alerts the user it's wrong
  } else {
    console.log("Sorry, try again!");
    alert("I don't think that's the answer");
  }

})

// PUZZLE 2 SUBMIT ANSWER BUTTON
// On click compares answer from user input element (a2) to (P2A)
SA2Btn.addEventListener('click', () => {

  // If the answer is correct, reveals next puzzle Nav Button
  if (a2.value == P2A) {
    console.log("haha its correct!");
    NAV3.classList.add("reveal");
    alert('Check Navigation tab for new puzzle!');

    // If the answer is wrong, alerts the user it's wrong
  } else {
    console.log("Sorry, try again!");
    alert("I don't think that's the answer");
  }

})

// PUZZLE 3 SUBMIT ANSWER BUTTON
// On click compares answer from user input element (a3) to (P3A)
SA3Btn.addEventListener('click', () => {

  // If the answer is correct, reveals next puzzle Nav Button
  if (a3.value == P3A) {
    console.log("haha its correct!");
    NAV4.classList.add("reveal");
    alert('Check Navigation tab for new puzzle!');

    // If the answer is wrong, alerts the user it's wrong
  } else {
    console.log("Sorry, try again!");
    alert("I don't think that's the answer");
  }

})

// PUZZLE 4 REVEAL THE PASSWORD BUTTON
// Clicking the text "button" in the <p> element, will bring up an alert and show the password
reveal_button.addEventListener('click', () => {

  console.log('He clicked it pog!');
  alert('The password is chenga');

})

// PUZZLE 4 SUBMIT ANSWER BUTTON
// On click compares answer from user input element (a4) to (P4A)
SA4Btn.addEventListener('click', () => {

  // If the answer is correct, reveals next puzzle Nav Button
  if (a4.value == P4A) {
    console.log("haha its correct!");
    NAV5.classList.add("reveal");
    Danger1.classList.remove("hidden");
    alert('Check Navigation tab for new puzzle!');

    // If the answer is wrong, alerts the user it's wrong
  } else {
    console.log("Sorry, try again!");
    alert("I don't think that's the answer");
  }

})

// PUZZLE 5
// if you click yes it will open an Alert asking to confirm
// clicking no will open a youtube link to an angry opossum
SA5Btn_Accept.addEventListener('click', () => {

  console.log("ay it works!");

  // confirming again, will open a youtube link and change DIAX element to DIA6
  if (confirm("ARE YOU SURE? KIDNEYS DONT GROW BACK!") == true) {

    console.log("You pressed OK!");

    DIA0.replaceWith(DIA6);
    DIA1.replaceWith(DIA6);
    DIA2.replaceWith(DIA6);
    DIA3.replaceWith(DIA6);
    DIA4.replaceWith(DIA6);
    DIA5.replaceWith(DIA6);
    DIA6.classList.remove("hidden");
    window.open("https://www.youtube.com/shorts/TBsDFFtmiuE");

    // cancelling the confirm opens a youtube link with an angry opossum
  } else {
    window.open("https://www.youtube.com/watch?v=iPLurn6MEXM");

  }

})

// If you click no in Puzzle 5, it will open that link!
SA5Btn_Reject.addEventListener('click', () => {

  console.log('Reject Button Works!');
  window.open("https://www.youtube.com/watch?v=iPLurn6MEXM");
})


