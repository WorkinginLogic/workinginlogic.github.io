// Function to toggle the visibility of sections
function toggleSection(sectionId) {
    const sections = document.querySelectorAll(".module");
    sections.forEach((section) => {
      section.style.display = "none"; // Hide all sections
    });
  
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
      sectionToShow.style.display = "block";    
      sectionToShow.querySelectorAll(".module").forEach((childSection) => {
        childSection.style.display = "block";
    });
  }
}
  // Add event listeners to buttons
  document.getElementById("l1-button").addEventListener("click", function () {
    toggleSection("l1");
  });
  document.getElementById("l2-button").addEventListener("click", function () {
    toggleSection("l2");
  });
  document.getElementById("l3-button").addEventListener("click", function () {
    toggleSection("l3");
  });
  document.getElementById("l4-button").addEventListener("click", function () {
    toggleSection("l4");
  });
  document.getElementById("l5-button").addEventListener("click", function () {
    toggleSection("l5");
  });
  document.getElementById("l6-button").addEventListener("click", function () {
    toggleSection("l6");
  });
  document.getElementById("l7-button").addEventListener("click", function () {
    toggleSection("l7");
  });
  document.getElementById("l8-button").addEventListener("click", function () {
    toggleSection("l8");
  });
  document.getElementById("l9-button").addEventListener("click", function () {
    toggleSection("l9");
  });
  document.getElementById("l10-button").addEventListener("click", function () {
    toggleSection("l10");
  });
  document.getElementById("l11-button").addEventListener("click", function () {
    toggleSection("l11");
  });
  // Set an initial section to be visible (e.g., Lesson 1)
  toggleSection("l1");