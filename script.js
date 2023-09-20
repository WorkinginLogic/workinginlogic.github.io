/* --- Show / Hide refTable --- */

var hideButton = document.getElementById("hide");
var refTable = document.querySelector(".refTable");
hideButton.addEventListener("click", function () {
  if (refTable.style.display === "none" || refTable.style.display === "") {
    refTable.style.display = "block"; // show refTable
  } else {
    refTable.style.display = "none"; // Hide refTable
  }
});

/* --- Masking Octet --- */

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
  var randomOctet;
  do {
    randomOctet = maskOctets[Math.floor(Math.random() * maskOctets.length)];
  } while (randomOctet === previousOctet);

  previousOctet = randomOctet;
  return randomOctet;
}
function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

function generateNewQuestion4() {
  const octetElement = document.getElementById("octet");
  const outputElement = document.getElementById("output");
  const decimalInput1 = document.getElementById("decimalInput1");

  const randomOctet = pickOctet();
  octetElement.textContent = `${randomOctet}`;
  decimalInput1.value = "";

  return randomOctet;
}

function updateOutput4(randomOctet) {
  const decInput = document.getElementById("decimalInput1").value;
  const outputElement = document.getElementById("output");
  const correctDec = binaryToDecimal(randomOctet);

  if (decInput === correctDec.toString()) {
    outputElement.textContent = "Correct!";
  } else {
    outputElement.textContent = `Wrong. The correct answer is ${correctDec}.`;
  }
}

const decimalButton1 = document.getElementById("decimalButton1");
let currentRandomOctet = generateNewQuestion4();

decimalButton1.addEventListener("click", function () {
  updateOutput4(currentRandomOctet);
  currentRandomOctet = generateNewQuestion4();
});

decimalInput1.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    updateOutput4(currentRandomOctet);
    currentRandomOctet = generateNewQuestion4();
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

function generateNewQuestion() {
  const randomBinaryElement = document.getElementById("randomBinary");
  const outputElement = document.getElementById("output");
  const hexInput = document.getElementById("hexInput");

  const randomBinary = randomNibble();
  randomBinaryElement.textContent = `${randomBinary}`;
  hexInput.value = "";

  return randomBinary;
}

function updateOutput(randomBinary) {
  const hexInput = document.getElementById("hexInput").value;
  const outputElement = document.getElementById("output");
  const correctHex = binaryToHex(randomBinary);

  if (hexInput === correctHex) {
    outputElement.textContent = "Correct!";
  } else {
    outputElement.textContent = `Wrong. The correct answer is ${correctHex}.`;
  }
}

const binaryButton = document.getElementById("binaryButton");
let currentRandomBinary = generateNewQuestion();

binaryButton.addEventListener("click", function () {
  updateOutput(currentRandomBinary);
  currentRandomBinary = generateNewQuestion();
});

hexInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    updateOutput(currentRandomBinary);
    currentRandomBinary = generateNewQuestion();
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

function generateNewQuestion1() {
  const randomHexElement = document.getElementById("randomHex");
  const outputElement = document.getElementById("output");
  const binaryInput = document.getElementById("binaryInput");

  const randomHex = randomHexadecimal();
  randomHexElement.textContent = `${randomHex}`;
  binaryInput.value = "";

  return randomHex;
}

function updateOutput1(randomHex) {
  const binaryInput = document.getElementById("binaryInput").value;
  const outputElement = document.getElementById("output");
  const correctBinary = hexToBinary(randomHex);

  if (binaryInput === correctBinary) {
    outputElement.textContent = "Correct!";
  } else {
    outputElement.textContent = `Wrong. The correct answer is ${correctBinary}.`;
  }
}

const hexButton = document.getElementById("hexButton");
const binaryInput = document.getElementById("binaryInput");
let currentRandomHex = generateNewQuestion1();

hexButton.addEventListener("click", function () {
  updateOutput1(currentRandomHex);
  currentRandomHex = generateNewQuestion1();
});

binaryInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    updateOutput1(currentRandomHex);
    currentRandomHex = generateNewQuestion1();
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

function generateNewQuestion2() {
  const randomHexElement = document.getElementById("randomHex2");
  const outputElement = document.getElementById("output");
  const binaryInput = document.getElementById("binaryInput2");

  const randomHex = randomHexadecimal2();
  randomHexElement.textContent = `${randomHex}`;
  binaryInput.value = "";

  return randomHex;
}

function updateOutput2(randomHex) {
  const binaryInput = document.getElementById("binaryInput2").value;
  const outputElement = document.getElementById("output");
  const correctBinary = hexToBinary2(randomHex);

  if (binaryInput === correctBinary) {
    outputElement.textContent = "Correct!";
  } else {
    outputElement.textContent = `Wrong. The correct answer is ${correctBinary}.`;
  }
}

const hexButton2 = document.getElementById("hexButton2");
const binaryInput2 = document.getElementById("binaryInput2");
let currentRandomHex2 = generateNewQuestion2();

hexButton2.addEventListener("click", function () {
  updateOutput2(currentRandomHex2);
  currentRandomHex2 = generateNewQuestion2();
});

binaryInput2.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    updateOutput2(currentRandomHex2);
    currentRandomHex2 = generateNewQuestion2();
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

function generateNewQuestion3() {
  const randomHexElement = document.getElementById("randomHex3");
  const outputElement = document.getElementById("output");
  const decimalInput = document.getElementById("decimalInput");

  const randomHex = randomHexadecimal3();
  randomHexElement.textContent = `${randomHex}`;
  decimalInput.value = "";

  return randomHex;
}

function updateOutput3(randomHex) {
  const decimalInput = document.getElementById("decimalInput").value;
  const outputElement = document.getElementById("output");
  const correctDecimal = hexToDecimal(randomHex);

  if (decimalInput === correctDecimal.toString()) {
    outputElement.textContent = "Correct!";
  } else {
    outputElement.textContent = `Wrong. The correct answer is ${correctDecimal}.`;
  }
}

const decimalButton = document.getElementById("decimalButton");
const decimalInput = document.getElementById("decimalInput");
let currentRandomHex3 = generateNewQuestion3();

decimalButton.addEventListener("click", function () {
  updateOutput3(currentRandomHex3);
  currentRandomHex3 = generateNewQuestion3();
});

decimalInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    updateOutput3(currentRandomHex3);
    currentRandomHex3 = generateNewQuestion3();
  }
});
