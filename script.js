// Smooth scrolling for nav links
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const href = this.getAttribute("href");

    // Only apply smooth scroll for internal anchors (starts with '#')
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });
});