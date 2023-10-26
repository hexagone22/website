
      // This script checks the current URL and adds the 'active' class to the corresponding navbar item
    document.addEventListener("DOMContentLoaded", function () {
    // Get current page URL
    let currentUrl = window.location.pathname;
    if (currentUrl === "/") {
    currentUrl = "/"; // If at the root, set to the base URL
    }

    // Select all navbar links
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    // Loop through each link
    navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentUrl) {
      // Add 'active' class to the link that matches the current URL
      link.classList.add("active");
    } else {
      // Remove 'active' class from other links
      link.classList.remove("active");
    }
    });
    });


var mentionsElement = document.getElementById("mentions");

function updateMentions() {
  var currentText = mentionsElement.textContent || mentionsElement.innerText;
  if (currentText.includes("SARL ATELIER 2D")) {
    mentionsElement.innerHTML =
      "© " + new Date().getFullYear() + " mentions légales";
  } else {
    mentionsElement.innerHTML =
      " SARL ATELIER 2D au capital de 5000€ - SIRET 977 891 092 00016 R.C.S. Saint Brieuc <br> Code APE 71.12B police assurance SMA BTP n°7352000 / 002 158751/0 <br> Webmaster et hébergement - Etienne Design ";
  }
}

mentionsElement.addEventListener("click", updateMentions);
