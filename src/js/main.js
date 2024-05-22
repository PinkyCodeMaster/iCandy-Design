document.getElementById("menu-button").addEventListener("click", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when a link is clicked
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.add("hidden");
  });
});

// when the Discover button is clicked send an alert
document.querySelector(".font-bold").addEventListener("click", () => {
  alert("Discover Our Gallery");
});
