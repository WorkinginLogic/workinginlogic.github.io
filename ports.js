/* --- Show / Hide refTable --- */
let hideButton = document.getElementById("hide");
let refTable = document.querySelector(".refTable");
hideButton.addEventListener("click", function () {
  if (refTable.style.display === "none" || refTable.style.display === "") {
    refTable.style.display = "flex"; // show refTable
  } else {
    refTable.style.display = "none"; // Hide refTable
  }
});

var hideAnswers = document.getElementById("hideAnswers");
var answers = document.querySelector("#answers");

hideAnswers.addEventListener("click", function () {
  if (answers.style.display === "none") {
    answers.style.display = "block";
  } else {
    answers.style.display = "none";
  }
});

/* --- Ports --- */
// Define an array of question-answer pairs
const questionPairs = [
  { question: "ftp-data | File Transfer Protocol - Data", answer: "TCP 20" },
  { question: "ftp | File Transfer Protocol - Control", answer: "TCP 21" },
  { question: "ssh/sftp | Secure Shell / FTP over SSH", answer: "TCP 22" },
  { question: "telnet | Telnet", answer: "TCP 23" },
  { question: "smtp | Simple Mail Transfer Protocol", answer: "TCP 25" },
  { question: "domain | Domain Name System", answer: "TCP/UDP 53" },
  { question: "bootps | BOOTP/DHCP Server", answer: "UDP 67" },
  { question: "bootpc | BOOTP/DHCP Client", answer: "UDP 68" },
  { question: "tftp | Trivial File Transfer Protocol", answer: "UDP 69" },
  { question: "http | HTTP", answer: "TCP 80" },
  { question: "pop | Post Office Protocol", answer: "TCP 110" },
  {
    question: "ntp/sntp | Network Time Protocol / Simple NTP",
    answer: "UDP 123",
  },
  { question: "imap | Internet Message Access Protocol", answer: "TCP 143" },
  { question: "snmp | Simple Network Management Protocol", answer: "UDP 161" },
  {
    question: "snmp-trap | Simple Network Management Protocol Trap",
    answer: "UDP 162",
  },
  {
    question: "ldap | Lightweight Directory Access Protocol",
    answer: "TCP/UDP 389",
  },
  {
    question:
      "https | HTTP-Secure / Secure Sockets Layer(SSL) / Transport Layer Security(TLS)", answer: "TCP 443",
  },
  { question: "smb | Server Message Block over TCP / IP", answer: "TCP 445" },
  { question: "syslog | Syslog", answer: "UDP 514" },
  { question: "dhcpv6-client | DHCP6 Client", answer: "UDP 546" },
  { question: "dhcpv6-server | DHCP6 Server", answer: "TCP 547" },
  { question: "smtps | SMTP - Secure", answer: "TCP 587" },
  { question: "ldaps | LDAP - Secure", answer: "TCP 636" },
  { question: "imaps | IMAP - Secure", answer: "TCP 993" },
  { question: "pop3s | POP3 - Secure", answer: "TCP 995" },
  {
    question: "sql-server | MS Structured Query Language (SQL) Server",
    answer: "TCP 1433",
  },
  { question: "sqlnet | Oracle SQL *Net", answer: "TCP 1521" },
  { question: "mysql | MySQL / MariaDB", answer: "TCP 3306" },
  { question: "rdp | Remote Desktop Protocol", answer: "TCP 3389" },
  { question: "rtp | Real - Time Protocol", answer: "UDP 5004" },
  { question: "rtcp | Real - Time Control Protocol", answer: "UDP 5005" },
  { question: "sip | Session Initiation Protocol", answer: "TCP/UDP 5060" },
  { question: "sips | SIP-Secure", answer: "TCP/UDP 5061" },
];

currentQuestionIndex = Math.floor(Math.random() * questionPairs.length);

// Function to generate a new question
function generateNewQuestion(moduleId) {
  const questionIndex = Math.floor(Math.random() * questionPairs.length);
  const moduleIdElement = document.getElementById(moduleId);
  const promptElement = moduleIdElement.querySelector(".prompt");
  const inputElement = moduleIdElement.querySelector(".input");

  // Display the question
  promptElement.textContent = questionPairs[questionIndex].question;
  inputElement.value = "";

  return questionPairs[questionIndex].answer;
}

// Function to update the output
function updateOutput(moduleId, correctAnswer) {
  const moduleIdElement = document.getElementById(moduleId);
  const inputElement = document.getElementById("userInput");
  const outputElement = moduleIdElement.querySelector(".output");
  const correctElement = document.getElementById("correct-answers");
  const wrongElement = document.getElementById("wrong-answers");

  const userAnswer = inputElement.value;
  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    outputElement.textContent = "Correct!";
    /*correctElement.textContent += "hi ";*/
  } else {
    outputElement.textContent = `Wrong. The correct answer was ${correctAnswer}.`;
  }
}

const moduleId = "question-prompt";
const submitButton = document.getElementById("submitBtn");
const userInput = document.getElementById("userInput");

let correctAnswer = generateNewQuestion(moduleId);

submitButton.addEventListener("click", function () {
  updateOutput(moduleId, correctAnswer);
  correctAnswer = generateNewQuestion(moduleId);
});

userInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    updateOutput(moduleId, correctAnswer);
    correctAnswer = generateNewQuestion(moduleId);
  }
});
