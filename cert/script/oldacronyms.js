/* --- Show / Hide  --- */
/*  || answers.style.display === "" */

var hideAnswers = document.getElementById("hideAnswers");
var answers = document.querySelector("#answers");
var hideWordList = document.getElementById("hideWords");
var words = document.querySelector("#wordList");

hideAnswers.addEventListener("click", function () {
  if (answers.style.display === "none") {
    answers.style.display = "block";
  } else {
    answers.style.display = "none";
  }
});

hideWords.addEventListener("click", function () {
  if (words.style.display === "none") {
    words.style.display = "block";
  } else {
    words.style.display = "none";
  }
});

/*
 * Generates a new question for the module (Needs #module to have a .promt and .input)
 *
 *@param {string} x - Module ID.
 *@param {function} y - Takes a function to generate new value.
 *@returns {number} - newNumber
 */
function generateNewQuestion(x, y) {
  const moduleId = document.getElementById(x);
  const promptElement = moduleId.querySelector(".prompt");
  const inputElement = moduleId.querySelector(".input");
  const newNumber = y();
  promptElement.textContent = `${newNumber}`;
  inputElement.value = "";
  return newNumber;
}

/*
 * Generates a new question for the module (Needs #module to have an .input and .output)
 *
 *@param {string} - Module ID.
 *@param {number} - The number to be compared.
 *@returns {} - 
 */
function updateOutput(x, y) {
  const moduleId = document.getElementById(x);
  const inputElement = moduleId.querySelector(".input");
  const outputElement = moduleId.querySelector(".output");
  const number = y;

  if (inputElement.value === number.toString()) {
    outputElement.textContent = "Correct!";
  } else {
    outputElement.textContent = `Wrong. The correct answer is ${number}`;
  }
}

/* --- Acronyms --- */
const acronymDictionary = {
  AAAA: "Authentication, Authorizaton, Accounting, Auditing",
};

/* --- Quiz --- */

const randomAcronym = getRandomAcronym(acronymDictionary);
const userInput = document.getElementById("userInput");
const outputElement = document.getElementById("output")

if (
  userInput === acronymDictionary[randomAcronym].toLowerCase()
) {
  outputElement.textContent = "Correct!";
} else {
  outputElement.textContent = `Wrong. The correct answer is`;
}

function getRandomAcronym(dictionary) {
  const keys = Object.keys(dictionary);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return randomKey;
}
