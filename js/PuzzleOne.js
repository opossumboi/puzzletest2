// TEST COMMENT COMMIT
// Nav Buttons
const N1 = document.getElementById('P1NavBtn');
const N2 = document.getElementById('P2NavBtn');
const N3 = document.getElementById('P3NavBtn');
const N4 = document.getElementById('P4NavBtn');
const N5 = document.getElementById('P5NavBtn');

// Puzzle Elements
const PE1 = document.getElementById('PE1')
const PE2 = document.getElementById('PE2')
const PE3 = document.getElementById('PE3')
const PE4 = document.getElementById('PE4')
const PE5 = document.getElementById('PE5')

// Dialogue Elements
const DIA0 = document.getElementById("Dia0")
const DIA1 = document.getElementById("Dia1")
const DIA2 = document.getElementById("Dia2")
const DIA3 = document.getElementById("Dia3")
const DIA4 = document.getElementById("Dia4")
const DIA5 = document.getElementById("Dia5")
const DIA6 = document.getElementById("Dia6")


// Welcome Screen!
const PE0 = document.getElementById('P0Element')
const P0Start= document.getElementById('P0-P1NavBtn')

DIA1.replaceWith(DIA0)
DIA2.replaceWith(DIA0)
DIA3.replaceWith(DIA0)
DIA4.replaceWith(DIA0)
DIA5.replaceWith(DIA0)
DIA6.replaceWith(DIA0)
DIA1.classList.remove('hidden')


// PuzzleOne
const CP1 = document.getElementById('P1Congrats');
let A1 = document.getElementById('Answer1');

// PuzzleTwo
let A2 = document.getElementById('Answer2');

// PuzzleThree
let A3 = document.getElementById('Answer3');

// PuzzleFour
let A4 = document.getElementById('Answer4');

// REVEALS ALL BUTTONS REMOVE AFTER COMPLETION
N1.classList.add('reveal')
// N2.classList.add('reveal')
// N3.classList.add('reveal')
// N4.classList.add('reveal')
// N5.classList.add('reveal')

P0Start.addEventListener('click', () => {
PE0.replaceWith(PE1)
PE2.replaceWith(PE1)
PE3.replaceWith(PE1)
PE4.replaceWith(PE1)
PE5.replaceWith(PE1)
PE1.classList.remove('hidden')

})

// FIRST NAV BUTTON
N1.addEventListener('click', () =>  {

PE0.replaceWith(PE1)
PE2.replaceWith(PE1)
PE3.replaceWith(PE1)
PE4.replaceWith(PE1)
PE5.replaceWith(PE1)
PE1.classList.remove('hidden')

DIA0.replaceWith(DIA1)
DIA2.replaceWith(DIA1)
DIA3.replaceWith(DIA1)
DIA4.replaceWith(DIA1)
DIA5.replaceWith(DIA1)
DIA6.replaceWith(DIA1)
DIA1.classList.remove('hidden')

})

// SECOND NAV BUTTON
N2.addEventListener('click', () =>  {

PE0.replaceWith(PE2)
PE1.replaceWith(PE2)
PE3.replaceWith(PE2)
PE4.replaceWith(PE2)
PE5.replaceWith(PE2)
PE2.classList.remove('hidden')

DIA0.replaceWith(DIA2)
DIA1.replaceWith(DIA2)
DIA3.replaceWith(DIA2)
DIA4.replaceWith(DIA2)
DIA5.replaceWith(DIA2)
DIA6.replaceWith(DIA2)
DIA2.classList.remove('hidden')


})

// THIRD NAV BUTTON
N3.addEventListener('click', () =>  {

PE0.replaceWith(PE3)
PE1.replaceWith(PE3)
PE2.replaceWith(PE3)
PE4.replaceWith(PE3)
PE5.replaceWith(PE3)
PE3.classList.remove('hidden')

DIA0.replaceWith(DIA3)
DIA1.replaceWith(DIA3)
DIA2.replaceWith(DIA3)
DIA4.replaceWith(DIA3)
DIA5.replaceWith(DIA3)
DIA6.replaceWith(DIA3)
DIA3.classList.remove('hidden')

})

// FOURTH NAV BUTTON
N4.addEventListener('click', () =>  {
PE0.replaceWith(PE4)
PE1.replaceWith(PE4)
PE2.replaceWith(PE4)
PE3.replaceWith(PE4)
PE5.replaceWith(PE4)
PE4.classList.remove('hidden')

DIA0.replaceWith(DIA4)
DIA1.replaceWith(DIA4)
DIA2.replaceWith(DIA4)
DIA3.replaceWith(DIA4)
DIA5.replaceWith(DIA4)
DIA6.replaceWith(DIA4)
DIA4.classList.remove('hidden')


})

// FIFTH NAV BUTTON
N5.addEventListener('click', () =>  {
PE0.replaceWith(PE5)
PE1.replaceWith(PE5)
PE2.replaceWith(PE5)
PE3.replaceWith(PE5)
PE4.replaceWith(PE5)
PE5.classList.remove('hidden')

DIA0.replaceWith(DIA5)
DIA1.replaceWith(DIA5)
DIA2.replaceWith(DIA5)
DIA3.replaceWith(DIA5)
DIA4.replaceWith(DIA5)
DIA6.replaceWith(DIA5)

DIA5.classList.remove('hidden')

})




// ANSWER TO PUZZLE 1
const P1A = "map"

// ANSWER TO PUZZLE 2
const P2A = '20'

// ANSWER TO PUZZLE 3
const P3A = "patchyass"

// ANSWER TO PUZZLE 4
const P4A = "chenga"

// ANSWER TO PUZZLE 5
const P5A = ""

// Submit Answer Buttons
const SA1Btn = document.getElementById('SubmitBtn1')
const SA2Btn = document.getElementById('SubmitBtn2')
const SA3Btn = document.getElementById('SubmitBtn3')
const SA4Btn = document.getElementById('SubmitBtn4')
const SA5Btn = document.getElementById('SubmitBtn5')


// PUZZLE 1 BUTTON
SA1Btn.addEventListener('click', () => {

if (A1.value == P1A) {
console.log ("haha its correct!");
N2.classList.add("reveal");
alert('Check Navigation tab for new puzzle!')

} else {
  console.log("Sorry, try again!");
  alert("I don't think that's the answer")
}

})

// PUZZLE 2 BUTTON
SA2Btn.addEventListener('click', () => {

if (A2.value == P2A) {
console.log ("haha its correct!");
N3.classList.add("reveal");
alert('Check Navigation tab for new puzzle!')

} else {
  console.log("Sorry, try again!");
    alert("I don't think that's the answer")
}

})

// PUZZLE 3 BUTTON
SA3Btn.addEventListener('click', () => {

if (A3.value == P3A) {
console.log ("haha its correct!");
N4.classList.add("reveal");
alert('Check Navigation tab for new puzzle!')

} else {
  console.log("Sorry, try again!");
    alert("I don't think that's the answer")
}

})

// PUZZLE 4 BUTTON
const Danger1 = document.getElementById('dntclick')

SA4Btn.addEventListener('click', () => {

if(A4.value == P4A) {
console.log ("haha its correct!");
N5.classList.add("reveal");
Danger1.classList.remove("hidden")
alert('Check Navigation tab for new puzzle!')

} else {
  console.log("Sorry, try again!")
    alert("I don't think that's the answer")
}

})



// reveal answer button
const realbtn = document.getElementById('RealBtn4')


realbtn.addEventListener('click', () => {

console.log('He clicked it pog!')
alert('The password is chenga')

})


// PUZZLE 5 BUTTON
SA5Btn.addEventListener('click', () => {

console.log("ay it works!")

if (confirm("ARE YOU SURE? KIDNEYS DONT GROW BACK!") == true) {
console.log("You pressed OK!");

DIA0.replaceWith(DIA6)
DIA1.replaceWith(DIA6)
DIA2.replaceWith(DIA6)
DIA3.replaceWith(DIA6)
DIA4.replaceWith(DIA6)
DIA5.replaceWith(DIA6)
DIA6.classList.remove("hidden")
window.open("https://www.youtube.com/shorts/TBsDFFtmiuE")

} else {
window.open("https://www.youtube.com/watch?v=iPLurn6MEXM");

}

})
// revealBtn.addEventListener('click', () => {


// if (A1.value == P1A) {
// console.log ("Haha it is correct!");
// Pz2.classList.add("reveal");
// CP1.classList.add("reveal")
// alert("That's correct! Click Okay and then check the Navigation tab!");


// } else {
//   console.log ("Try again buddy!");
//   Pz2.classList.remove("reveal");
//   alert("That doesn't seem right!");
// }

// })

