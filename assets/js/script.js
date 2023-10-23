
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

