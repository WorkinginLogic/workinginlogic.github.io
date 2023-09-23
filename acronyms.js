


/* --- Acronyms --- */
const acronymList = [
  { acronym: "", fullForm: "" },
  { acronym: "", fullForm: "" },
  { acronym: "", fullForm: "" },
  { acronym: "", fullForm: "" },
  { acronym: "", fullForm: "" },
];

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
