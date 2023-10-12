/* --- Show / Hide refTable --- */
let hideButton = document.getElementById("hide");
let refTable = document.querySelector(".refTable");
hideButton.addEventListener("click", function () {
  if (refTable.style.display === "none" || refTable.style.display === "") {
    refTable.style.display = "flex";
  } else {
    refTable.style.display = "none"; 
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
const initialQuestionPairs = [
  {
    question: "ftp-data",
    description: "File Transfer Protocol - Data",
    answer: "TCP 20",
  },
  {
    question: "ftp",
    description: "File Transfer Protocol - Control",
    answer: "TCP 21",
  },
  {
    question: "ssh/sftp",
    description: "Secure Shell / FTP over SSH",
    answer: "TCP 22",
  },
  {
    question: "telnet",
    description: "Telnet",
    answer: "TCP 23",
  },
  {
    question: "smtp",
    description: "Simple Mail Transfer Protocol",
    answer: "TCP 25",
  },
  {
    question: "domain",
    description: "Domain Name System",
    answer: "TCP/UDP 53",
  },
  {
    question: "bootps",
    description: "BOOTP/DHCP Server",
    answer: "UDP 67",
  },
  {
    question: "bootpc",
    description: "BOOTP/DHCP Client",
    answer: "UDP 68",
  },
  {
    question: "tftp",
    description: "Trivial File Transfer Protocol",
    answer: "UDP 69",
  },
  {
    question: "http",
    description: "HTTP",
    answer: "TCP 80",
  },
  {
    question: "pop",
    description: "Post Office Protocol",
    answer: "TCP 110",
  },
  {
    question: "ntp/sntp",
    description: "Network Time Protocol / Simple NTP",
    answer: "UDP 123",
  },
  {
    question: "imap",
    description: "Internet Message Access Protocol",
    answer: "TCP 143",
  },
  {
    question: "snmp",
    description: "Simple Network Management Protocol",
    answer: "UDP 161",
  },
  {
    question: "snmp-trap",
    description: "Simple Network Management Protocol Trap",
    answer: "UDP 162",
  },
  {
    question: "ldap",
    description: "Lightweight Directory Access Protocol",
    answer: "TCP/UDP 389",
  },
  {
    question: "https",
    description:
      "HTTP-Secure / Secure Sockets Layer(SSL) / Transport Layer Security(TLS)",
    answer: "TCP 443",
  },
  {
    question: "smb",
    description: "Server Message Block over TCP / IP",
    answer: "TCP 445",
  },
  {
    question: "syslog",
    description: "Syslog",
    answer: "UDP 514",
  },
  {
    question: "dhcpv6-client",
    description: "DHCP6 Client",
    answer: "UDP 546",
  },
  {
    question: "dhcpv6-server",
    description: "DHCP6 Server",
    answer: "TCP 547",
  },
  {
    question: "smtps",
    description: "SMTP - Secure",
    answer: "TCP 587",
  },
  {
    question: "ldaps",
    description: "LDAP - Secure",
    answer: "TCP 636",
  },
  {
    question: "imaps",
    description: "IMAP - Secure",
    answer: "TCP 993",
  },
  {
    question: "pop3s",
    description: "POP3 - Secure",
    answer: "TCP 995",
  },
  {
    question: "sql-server",
    description: "MS Structured Query Language (SQL) Server",
    answer: "TCP 1433",
  },
  {
    question: "sqlnet",
    description: "Oracle SQL *Net",
    answer: "TCP 1521",
  },
  {
    question: "mysql",
    description: "MySQL / MariaDB",
    answer: "TCP 3306",
  },
  {
    question: "rdp",
    description: "Remote Desktop Protocol",
    answer: "TCP 3389",
  },
  {
    question: "rtp",
    description: "Real - Time Protocol",
    answer: "UDP 5004",
  },
  {
    question: "rtcp",
    description: "Real - Time Control Protocol",
    answer: "UDP 5005",
  },
  {
    question: "sip",
    description: "Session Initiation Protocol",
    answer: "TCP/UDP 5060",
  },
  {
    question: "sips",
    description: "SIP-Secure",
    answer: "TCP/UDP 5061",
  },
];

let questionPairs = [...initialQuestionPairs];
const inputElement = document.getElementById("userInput");

currentQuestionIndex = Math.floor(Math.random() * questionPairs.length);
let answeredCorrectly = [];

function transformAnswerToAsterisks(answer) {
  return answer.replace(/[^ /]/g, "*");
}

// Function to generate a new question
function generateNewQuestion(moduleId) {
  const moduleIdElement = document.getElementById(moduleId);
  const promptElement = moduleIdElement.querySelector(".prompt");
  const correctElement = document.getElementById("correct-answers");
  const descriptionElement = document.getElementById("description");

  if (initialQuestionPairs.length === answeredCorrectly.length) {
    alert("Congrats! You've answered all questions correctly.");
    questionPairs = [...initialQuestionPairs];
    answeredCorrectly = [];
    correctElement.textContent = "Correct: ";
  } else {
    let questionIndex = Math.floor(Math.random() * questionPairs.length);

    const currentQuestion = questionPairs[questionIndex];
    const { answer, description } = currentQuestion;

    const asteriskAnswer = transformAnswerToAsterisks(answer);
    inputElement.placeholder = asteriskAnswer;

    promptElement.textContent = currentQuestion.question;
    descriptionElement.textContent = description;
    inputElement.value = "";

    return answer;
  }
}

// Function to update the output
function updateOutput(moduleId, correctAnswer) {
  const moduleIdElement = document.getElementById(moduleId);
  const outputElement = moduleIdElement.querySelector(".output");
  const correctElement = document.getElementById("correct-answers");
  const wrongElement = document.getElementById("wrong-answers");
  const userAnswer = inputElement.value;
  const promptText = moduleIdElement.querySelector(".prompt").textContent;
  
  const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();

  if (isCorrect) {
    outputElement.textContent = "Correct!";
    const matchingQuestion = questionPairs.find((q) => q.answer === correctAnswer);

    if (matchingQuestion) {
      answeredCorrectly.push(matchingQuestion);
      questionPairs = questionPairs.filter((q) => q.answer !== correctAnswer);
    }

    correctElement.textContent += promptText + " ";

    if (wrongElement.textContent.includes(promptText)) {
      wrongElement.textContent = wrongElement.textContent.replace(promptText, "");
    }
  } else {
    outputElement.textContent = `Wrong. The correct answer was ${correctAnswer}`;

    if (!wrongElement.textContent.includes(promptText)) {
      wrongElement.textContent += promptText + " ";
    }
  }
}

const moduleId = "question-prompt";
const submitButton = document.getElementById("submitBtn");

let correctAnswer = generateNewQuestion(moduleId);

submitButton.addEventListener("click", function () {
  updateOutput(moduleId, correctAnswer);
  correctAnswer = generateNewQuestion(moduleId);
});

inputElement.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    updateOutput(moduleId, correctAnswer);
    correctAnswer = generateNewQuestion(moduleId);
  }
});
