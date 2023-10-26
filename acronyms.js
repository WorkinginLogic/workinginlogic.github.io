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
    { question: "A", answer: "Address" },
    { question: "AAA", answer: "Authentication, Authorization and Accounting" },
    { question: "AAAA", answer: "Authentication, Authorization, Accounting and Address" },
    { question: "ABR", answer: "Area Border Router" },
    { question: "ACL", answer: "Access Control List" },
    { question: "AD", answer: "Active Directory" },
    { question: "ADSL", answer: "Asymmetric Digital Subscriber Line" },
    { question: "AES", answer: "Advanced Encryption Standard" },
    { question: "AH", answer: "Authentication Header" },
    { question: "AP", answer: "Access Point" },
    { question: "APC", answer: "Angle Polished Connector" },
    { question: "APIPA", answer: "Automatic Private Internet Protocol Addressing" },
    { question: "APT", answer: "Advanced Persistent Protocol" },
    { question: "ARIN", answer: "American Registry for Internet Numbers" },
    { question: "ARP", answer: "Address Resolution Protocol" },
    { question: "AS", answer: "Autonomous System" },
    { question: "ASIC", answer: "Application Specific Integrated Circuit" },
    { question: "ASP", answer: "Application Service Provider" },
    { question: "ATM", answer: "Asynchronous Transfer Mode" },
    { question: "AUI", answer: "Attachment Unit Interface" },
    { question: "AUP", answer: "Acceptable Use Policy" },
    { question: "BCP", answer: "Business Continuity Plan" },
    { question: "BCS", answer: "Business Connectivity Services" },
    { question: "BDR", answer: "Backup Designated Router" },
    { question: "BERT", answer: "Bit Error Rate Test" },
    { question: "BGP", answer: "Border Gateway Protocol" },
    { question: "BLE", answer: "Bluetooth Low Energy" },
    { question: "BNC", answer: "British Naval Connector or Bayonet Neill-Concelman" },
    { question: "BootP", answer: "Boot Protocol or Bootstrap Protocol" },
    { question: "BPDU", answer: "Bridge Protocol Data Unit" },
    { question: "BRI", answer: "Basic Rate Interface" },
    { question: "BSSID", answer: "Basic Service Set Identifier" },
    { question: "BYOD", answer: "Bring Your Own Device" },
    { question: "CAM", answer: "Channel Access Method" },
    { question: "CAN", answer: "Campus Area Network" },
    { question: "CARP", answer: "Common Address Redundancy Protocol" },
    { question: "CAT", answer: "Computer And Telephone" },
    { question: "CCTV", answer: "Closed Circuit TV" },
    { question: "CDMA", answer: "Code Division Multiple Access" },
    { question: "CDMA/CD", answer: "Carrier Sense Multiple Access/Collision Detection" },
    { question: "CHAP", answer: "Challenge Handshake Authentication Protocol" },
    { question: "CIDR", answer: "Classless Inter-Domain Routing" },
    { question: "CIFS", answer: "Common Internet File System/Services" },
    { question: "CLI", answer: "Command Line Interface" },
    { question: "CNAME", answer: "Canonical Name" },
    { question: "COOP", answer: "Concurrent Object-Oriented Programming" },
    { question: "COS", answer: "Class Of Service" },
    { question: "CPU", answer: "Central Processing Unit" },
    { question: "CRAM", answer: "Challenge-Response Authentication Mechanism–Message Digest 5" },
    { question: "CRC", answer: "Cyclic Redundancy Checking" },
    { question: "CSMA/CA", answer: "Carrier Sense Multiple Access/Collision Avoidance" },
    { question: "CSU", answer: "Channel Service Unit" },
    { question: "CWDM", answer: "Course Wave Division Multiplexing" },
    { question: "dB", answer: "Decibels" },
    { question: "DCS", answer: "Distributed Computer System" },
    { question: "DDoS", answer: "Distributed Denial of Service" },
    { question: "DHCP", answer: "Dynamic Host Configuration Protocol" },
    { question: "DLC", answer: "Data Link Control" },
    { question: "DLP", answer: "Data Leak Prevention" },
    { question: "DLR", answer: "Device Level Ring" },
    { question: "DMZ", answer: "Demilitarized Zone" },
    { question: "DNAT", answer: "Destination Network Address Translation" },
    { question: "DNS", answer: "Domain Name Service or Domain Name Server or Domain Name System" },
    { question: "DOCSIS", answer: "Data-Over-Cable Service Interface Specification" },
    { question: "DoS", answer: "Denial of Service" },
    { question: "DR", answer: "Designated Router" },
    { question: "DSCP", answer: "Differentiated Services Code Point" },
    { question: "DSL", answer: "Digital Subscriber Line" },
    { question: "DSSS", answer: "Direct Sequence Spread Spectrum" },
    { question: "DSU", answer: "Data Service Unit" },
    { question: "DWDM", answer: "Dense Wavelength Division Multiplexing" },
    { question: "E1", answer: "E-Carrier Level 1" },
    { question: "EAP", answer: "Extensible Authentication Protocol" },
    { question: "EDNS", answer: "Extension Mechanisms for DNS" },
    { question: "EGP", answer: "Exterior Gateway Protocol" },
    { question: "EIA/TIA", answer: "Electronic Industries Alliance/ Telecommunication Industries Association" },
    { question: "EIGRP", answer: "Enhanced Interior Gateway Routing Protocol" },
    { question: "EMI", answer: "Electromagnetic Interference" },
    { question: "ESD", answer: "Electrostatic Discharge" },
    { question: "ESP", answer: "Encapsulated Security Packets" },
    { question: "ESSID", answer: "Extended Service Set Identifier" },
    { question: "EUI", answer: "Extended Unique Identifier" },
    { question: "FC", answer: "Fibre Channel" },
    { question: "FCS", answer: "Frame Check Sequence" },
    { question: "FDDI", answer: "Fiber Distributed Data Interface" },
    { question: "FDM", answer: "Frequency Division Multiplexing" },
    { question: "FHSS", answer: "Frequency Hopping Spread Spectrum" },
    { question: "FIPS", answer: "Federal Information Processing Standard" },
    { question: "FM", answer: "Frequency Modulation" },
    { question: "FQDN", answer: "Fully Qualified Domain Name" },
    { question: "FTP", answer: "File Transfer Protocol" },
    { question: "FTPS", answer: "File Transfer Protocol Security" },
    { question: "GBIC", answer: "Gigabit Interface Converter" },
    { question: "Gbps", answer: "Gigabits per second" },
    { question: "GLBP", answer: "Gateway Load Balancing Protocol" },
    { question: "GPG", answer: "GNU Privacy Guard" },
    { question: "GPRS", answer: "General Packet Radio Service" },
    { question: "GRE", answer: "Generic Routing Encapsulation" },
    { question: "GSM", answer: "Global System for Mobile communications" },
    { question: "HBA", answer: "Host Bus Adapter" },
    { question: "HDLC", answer: "High-level Data Link Control" },
    { question: "HDMI", answer: "High Definition Multimedia Interface" },
    { question: "HIDS", answer: "Host Intrusion Detection System" },
    { question: "HIPS", answer: "Host Intrusion Prevention System" },
    { question: "HSPA", answer: "High-Speed Packet Access" },
    { question: "HSRP", answer: "Hot Standby Router Protocol" },
    { question: "HT", answer: "High Throughput" },
    { question: "HTTP", answer: "Hypertext Transfer Protocol" },
    { question: "HTTPS", answer: "Hypertext Transfer Protocol Secure" },
    { question: "HVAC", answer: "Heating, Ventilation and Air Conditioning" },
    { question: "Hz", answer: "Hertz" },
    { question: "IaaS", answer: "Infrastructure as a Service" },
    { question: "IANA", answer: "Internet Assigned Numbers Authority" },
    { question: "ICA", answer: "Independent Computer Architecture" },
    { question: "ICANN", answer: "Internet Corporation for Assigned Names and Numbers" },
    { question: "ICMP", answer: "Internet Control Message Protocol" },
    { question: "ICS", answer: "Internet Connection Sharing or Industrial Control System" },
    { question: "IDF", answer: "Intermediate Distribution Frame" },
    { question: "IDS", answer: "Intrusion Detection System" },
    { question: "IEEE", answer: "Institute of Electrical and Electronics Engineers" },
    { question: "IGMP", answer: "Internet Group Multicast Protocol" },
    { question: "IGP", answer: "Interior Gateway Protocol" },
    { question: "IGRP", answer: "Interior Gateway Routing Protocol" },
    { question: "IKE", answer: "Internet Key Exchange" },
    { question: "IMAP4", answer: "Internet Message Access Protocol version 4" },
    { question: "InterNIC", answer: "Internet Network Information Center" },
    { question: "IO", answer: "Input/Output" },
    { question: "IP", answer: "Internet Protocol" },
    { question: "IPS", answer: "Intrusion Prevention System" },
    { question: "IPSec", answer: "Internet Protocol Security" },
    { question: "IPv4", answer: "Internet Protocol version 4" },
    { question: "IPv6", answer: "Internet Protocol version 6" },
    { question: "IR", answer: "Infrared" },
    { question: "ISAKMP", answer: "Internet Security Association and Key Management Protocol" },
    { question: "iSCSI", answer: "Internet Small Computer System" },
    { question: "ISDN", answer: "Integrated Services Digital Network" },
    { question: "IS-IS", answer: "Intermediate System to Intermediate System" },
    { question: "ISP", answer: "Internet Service Provider" },
    { question: "IT", answer: "Information Technology" },
    { question: "ITS", answer: "Intelligent Transportation System" },
    { question: "IV", answer: "Initialization Vector" },
    { question: "Kbps", answer: "Kilobits per second" },
    { question: "KVM", answer: "Keyboard Video Mouse" },
    { question: "L2F", answer: "Layer 2 Forwarding" },
    { question: "L2TP", answer: "Layer 2 Tunneling Protocol" },
    { question: "LACP", answer: "Link Aggregation Control Protocol" },
    { question: "LAN", answer: "Local Area Network" },
    { question: "LC", answer: "Local Connector" },
    { question: "LDAP", answer: "Lightweight Directory Access Protocol" },
    { question: "LEC", answer: "Local Exchange Carrier" },
    { question: "LED", answer: "Light Emitting Diode" },
    { question: "LLC", answer: "Logical Link Control" },
    { question: "LSA", answer: "Link State Advertisement" },
    { question: "LTE", answer: "Long Term Evolution" },
    { question: "LWAPP", answer: "Light Weight Access Point Protocol" },
    { question: "MAC", answer: "Media Access Control or Medium Access Control" },
    { question: "MAN", answer: "Metropolitan Area Network" },
    { question: "Mbps", answer: "Megabits per second" },
    { question: "MBps", answer: "Megabytes per second" },
    { question: "MDF", answer: "Main Distribution Frame" },
    { question: "MDI", answer: "Media Dependent Interface" },
    { question: "MDIX", answer: "Media Dependent Interface Crossover" },
    { question: "MGCP", answer: "Media Gateway Control Protocol" },
    { question: "MIB", answer: "Management Information Base" },
    { question: "MIBS", answer: "Management Information Bases" },
    { question: "MIMO", answer: "Multiple Input, Multiple Output" },
    { question: "MLA", answer: "Master License Agreement" },
    { question: "MOA", answer: "Memorandum Of Agreement" },
    { question: "MOU", answer: "Memorandum Of Understanding" },
    { question: "MPLS", answer: "Multi-Protocol Label Switching" },
    { question: "MS-CHAP", answer: "Microsoft Challenge Handshake Authentication Protocol" },
    { question: "MSA", answer: "Master Service Agreement" },
    { question: "MSDS", answer: "Material Safety Data Sheet" },
    { question: "MT-RJ", answer: "Mechanical Transfer-Registered Jack" },
    { question: "MTU", answer: "Maximum Transmission Unit" },
    { question: "MUMIMO", answer: "Multiuser Multiple Input, Multiple Output" },
    { question: "MX", answer: "Mail Exchanger" },
    { question: "NAC", answer: "Network Access Control" },
    { question: "NAS", answer: "Network Attached Storage" },
    { question: "NAT", answer: "Network Address Translation" },
    { question: "NCP", answer: "Network Control Protocol" },
    { question: "NDR", answer: "Non-Delivery Receipt" },
    { question: "NetBEUI", answer: "Network Basic Input/Output Extended User Interface" },
    { question: "NetBIOS", answer: "Network Basic Input/Output System" },
    { question: "NFC", answer: "Near Field Communication" },
    { question: "NFS", answer: "Network File Service" },
    { question: "NIC", answer: "Network Interface Card" },
    { question: "NIDS", answer: "Network Intrusion Detection System" },
    { question: "NIPS", answer: "Network Intrusion Prevention System" },
    { question: "NIST", answer: "Network Information Security & Technology" },
    { question: "NIU", answer: "Network Interface Unit" },
    { question: "nm", answer: "Nanometer" },
    { question: "NMS", answer: "Network Management System" },
    { question: "NNTP", answer: "Network News Transport Protocol" },
    { question: "NTP", answer: "Network Time Protocol" },
    { question: "OCx", answer: "Optical Carrier" },
    { question: "OS", answer: "Operating Systems" },
    { question: "OSI", answer: "Open Systems Interconnect" },
    { question: "OSPF", answer: "Open Shortest Path First" },
    { question: "OTDR", answer: "Optical Time Domain Reflectometer" },
    { question: "OUI", answer: "Organizationally Unique Identifier" },
    { question: "P2P", answer: "Peer-to-Peer" },
    { question: "PaaS", answer: "Platform as a Service" },
    { question: "PAN", answer: "Personal Area Network" },
    { question: "PAP", answer: "Password Authentication Protocol" },
    { question: "PAT", answer: "Port Address Translation" },
    { question: "PBX", answer: "Private Branch Exchange" },
    { question: "PC", answer: "Personal Computer" },
    { question: "PCM", answer: "Phase Change Memory" },
    { question: "PDU", answer: "Protocol Data Unit" },
    { question: "PGP", answer: "Pretty Good Privacy" },
    { question: "PKI", answer: "Public Key Infrastructure" },
    { question: "PLC", answer: "Programmable Logic Controller" },
    { question: "PoE", answer: "Power over Ethernet" },
    { question: "POP", answer: "Post Office Protocol" },
    { question: "POP3", answer: "Post Office Protocol version 3" },
    { question: "POTS", answer: "Plain Old Telephone System" },
    { question: "PPP", answer: "Point-to-Point Protocol" },
    { question: "PPPoE", answer: "Point-to-Point Protocol over Ethernet" },
    { question: "PPTP", answer: "Point-to-Point Tunneling Protocol" },
    { question: "PRI", answer: "Primary Rate Interface" },
    { question: "PSK", answer: "Pre-Shared Key" },
    { question: "PSTN", answer: "Public Switched Telephone Network" },
    { question: "PTP", answer: "Point-to-Point" },
    { question: "PTR", answer: "Pointer" },
    { question: "PVC", answer: "Permanent Virtual Circuit" },
    { question: "QAM", answer: "Quadrature Amplitude Modulation" },
    { question: "QoS", answer: "Quality of Service" },
    { question: "RADIUS", answer: "Remote Authentication Dial-In User Service" },
    { question: "RARP", answer: "Reverse Address Resolution Protocol" },
    { question: "RAS", answer: "Remote Access Service" },
    { question: "RDP", answer: "Remote Desktop Protocol" },
    { question: "RDS", answer: "Radio Data System" },
    { question: "RF", answer: "Radio Frequency" },
    { question: "RFI", answer: "Radio Frequency Interference" },
    { question: "RFID", answer: "Radio Frequency Identification" },
    { question: "RG", answer: "Radio Guide" },
    { question: "RIP", answer: "Routing Internet Protocol" },
    { question: "RJ", answer: "Registered Jack" },
    { question: "RPO", answer: "Recovery Point Objective" },
];

let questionPairs = [...initialQuestionPairs];
const inputElement = document.getElementById("userInput");

currentQuestionIndex = Math.floor(Math.random() * questionPairs.length);
let answeredCorrectly = [];

function transformAnswerToAsterisks(answer) {
    const alphanumericCharacters = /[a-zA-Z0-9]/g;
    return answer.replace(alphanumericCharacters, "*");
}

// Function to generate a new question
function generateNewQuestion(moduleId) {
    const moduleIdElement = document.getElementById(moduleId);
    const promptElement = moduleIdElement.querySelector(".prompt");
    const correctElement = document.getElementById("correct-answers");

    if (initialQuestionPairs.length === answeredCorrectly.length) {
        alert("Congrats! You've answered all questions correctly.");
        questionPairs = [...initialQuestionPairs];
        answeredCorrectly = [];
        correctElement.textContent = "Correct: ";
    } else {
        let questionIndex = Math.floor(Math.random() * questionPairs.length);

        const currentQuestion = questionPairs[questionIndex];
        const answer = currentQuestion.answer;

        const asteriskAnswer = transformAnswerToAsterisks(answer);
        inputElement.placeholder = asteriskAnswer;

        promptElement.textContent = currentQuestion.question;
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


    if (correctAnswer) {
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
            outputElement.textContent = `The correct answer was: ${correctAnswer}`;

            if (!wrongElement.textContent.includes(promptText)) {
                wrongElement.textContent += promptText + " ";
            }
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
