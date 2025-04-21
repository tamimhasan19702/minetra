/** @format */

// Toggle mobile menu
const menuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  // Animate mobile menu using Framer Motion
  if (!mobileMenu.classList.contains("hidden")) {
    framerMotion.animate(
      mobileMenu,
      { opacity: [0, 1], y: [-10, 0] },
      { duration: 0.3 }
    );
  }
});

// Scroll Squeeze Effect
const navbar = document.getElementById("main-navbar");
const logo = document.getElementById("logo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.classList.add("py-2");
    navbar.classList.remove("py-4");
    logo.querySelector("img").classList.add("h-8");
    logo.querySelector("img").classList.remove("h-10");
  } else {
    navbar.classList.remove("py-2");
    navbar.classList.add("py-4");
    logo.querySelector("img").classList.remove("h-8");
    logo.querySelector("img").classList.add("h-10");
  }
});

// theme toggle

// navbar.js

// Set icon depending on current theme
function updateThemeIcon(buttonId, iconId, theme) {
  const icon = document.getElementById(iconId);
  if (!icon) return;
  icon.textContent = theme === "dark" ? "dark_mode" : "light_mode";
}

// Toggle theme
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
    updateThemeIcon("theme-toggle-desktop", "theme-icon-desktop", "light");
    updateThemeIcon("theme-toggle-mobile", "theme-icon-mobile", "light");
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
    updateThemeIcon("theme-toggle-desktop", "theme-icon-desktop", "dark");
    updateThemeIcon("theme-toggle-mobile", "theme-icon-mobile", "dark");
  }
}

// Initial setup
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  }

  updateThemeIcon("theme-toggle-desktop", "theme-icon-desktop", savedTheme);
  updateThemeIcon("theme-toggle-mobile", "theme-icon-mobile", savedTheme);
}

// Add event listeners
document.addEventListener("DOMContentLoaded", () => {
  initializeTheme();

  const toggleDesktop = document.getElementById("theme-toggle-desktop");
  const toggleMobile = document.getElementById("theme-toggle-mobile");

  if (toggleDesktop) toggleDesktop.addEventListener("click", toggleTheme);
  if (toggleMobile) toggleMobile.addEventListener("click", toggleTheme);
});

// framer motion blob
