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
 *@returns {} - newNumber
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

/* --- Show / Hide refTable --- */
let hideButton = document.getElementById("hide");
let refTable = document.querySelector(".refTable");
hideButton.addEventListener("click", function () {
  if (refTable.style.display === "none") {
    refTable.style.display = "flex"; // show refTable
  } else {
    refTable.style.display = "none"; // Hide refTable
  }
});

/* --- Masking Octets --- */
const maskOctets = [
  "10000000",
  "11000000",
  "11100000",
  "11110000",
  "11111000",
  "11111100",
  "11111110",
  "11111111",
];

let previousOctet = "";
function pickOctet() {
  let randomOctet;
  do {
    randomOctet = maskOctets[Math.floor(Math.random() * maskOctets.length)];
  } while (randomOctet === previousOctet);

  previousOctet = randomOctet;
  return randomOctet;
}
function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

const decimalButton1 = document.getElementById("decimalButton1");
let currentRandomOctet = generateNewQuestion("octets", pickOctet);

decimalButton1.addEventListener("click", function () {
  updateOutput("octets", binaryToDecimal(currentRandomOctet));
  currentRandomOctet = generateNewQuestion("octets", pickOctet);
});

decimalInput1.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    updateOutput("octets", binaryToDecimal(currentRandomOctet));
    currentRandomOctet = generateNewQuestion("octets", pickOctet);
  }
});

/* --- Binary to Hex ---  */
function randomNibble() {
  return (Math.floor(Math.random() * 15) + 1).toString(2).padStart(4, "0");
}

function binaryToHex(b) {
  const integer = parseInt(b, 2);
  return integer.toString(16);
}

const binaryButton = document.getElementById("binaryButton");
let currentRandomBinary = generateNewQuestion("binary2Hex", randomNibble);

binaryButton.addEventListener("click", function () {
  updateOutput("binary2Hex", binaryToHex(currentRandomBinary));
  currentRandomBinary = generateNewQuestion("binary2Hex", randomNibble);
});

hexInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    updateOutput("binary2Hex", binaryToHex(currentRandomBinary));
    currentRandomBinary = generateNewQuestion("binary2Hex", randomNibble);
  }
});

/* --- Hex to Binary --- */
function randomHexadecimal() {
  const characters = "0123456789ABCDEF";
  let result = "";
  for (let i = 0; i < 1; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function hexToBinary(hex) {
  const binary = parseInt(hex, 16).toString(2);
  return binary.padStart(4, "0");
}

const hexButton = document.getElementById("hexButton");
const binaryInput = document.getElementById("binaryInput");
let currentRandomHex = generateNewQuestion("hex2Binary", randomHexadecimal);

hexButton.addEventListener("click", function () {
  updateOutput("hex2Binary", hexToBinary(currentRandomHex));
  currentRandomHex = generateNewQuestion("hex2Binary", randomHexadecimal);
});

binaryInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    updateOutput("hex2Binary", hexToBinary(currentRandomHex));
    currentRandomHex = generateNewQuestion("hex2Binary", randomHexadecimal);
  }
});

/* --- Double Hex to Binary --- */
function randomHexadecimal2() {
  const characters = "0123456789ABCDEF";
  let result = "";
  for (let i = 0; i < 2; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function hexToBinary2(hex) {
  const binary = parseInt(hex, 16).toString(2);
  return binary.padStart(8, "0");
}

const hexButton2 = document.getElementById("hexButton2");
const binaryInput2 = document.getElementById("binaryInput2");
let currentRandomHex2 = generateNewQuestion("hex2Binary2", randomHexadecimal2);

hexButton2.addEventListener("click", function () {
  updateOutput("hex2Binary2", hexToBinary2(currentRandomHex2));
  currentRandomHex2 = generateNewQuestion("hex2Binary2", randomHexadecimal2);
});

binaryInput2.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    updateOutput("hex2Binary2", hexToBinary2(currentRandomHex2));
    currentRandomHex2 = generateNewQuestion("hex2Binary2", randomHexadecimal2);
  }
});

/* --- Hex to Decimal --- */
function randomHexadecimal3() {
  const characters = "0123456789ABCDEF";
  let result = "";
  for (let i = 0; i < 2; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function hexToDecimal(hex) {
  const decimal = parseInt(hex, 16);
  return decimal;
}

const decimalButton = document.getElementById("decimalButton");
const decimalInput = document.getElementById("decimalInput");
let currentRandomHex3 = generateNewQuestion("hex2Decimal", randomHexadecimal3);

decimalButton.addEventListener("click", function () {
  updateOutput("hex2Decimal", hexToDecimal(currentRandomHex3));
  currentRandomHex3 = generateNewQuestion("hex2Decimal", randomHexadecimal3);
});

decimalInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    updateOutput("hex2Decimal", hexToDecimal(currentRandomHex3));
    currentRandomHex3 = generateNewQuestion("hex2Decimal", randomHexadecimal3);
  }
});