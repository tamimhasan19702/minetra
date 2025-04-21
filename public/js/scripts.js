/** @format */

document.addEventListener("DOMContentLoaded", () => {
  // Toggle mobile menu
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    // Animate mobile menu using Framer Motion
    if (!mobileMenu.classList.contains("hidden")) {
      motion.animate(
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

  // Theme toggle functions
  function updateThemeIcon(buttonId, iconId, theme) {
    const icon = document.getElementById(iconId);
    if (!icon) return;
    icon.textContent = theme === "dark" ? "dark_mode" : "light_mode";
  }

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

  function initializeTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }

    updateThemeIcon("theme-toggle-desktop", "theme-icon-desktop", savedTheme);
    updateThemeIcon("theme-toggle-mobile", "theme-icon-mobile", savedTheme);
  }

  initializeTheme();

  const toggleDesktop = document.getElementById("theme-toggle-desktop");
  const toggleMobile = document.getElementById("theme-toggle-mobile");

  if (toggleDesktop) toggleDesktop.addEventListener("click", toggleTheme);
  if (toggleMobile) toggleMobile.addEventListener("click", toggleTheme);

  // Framer Motion Blob
  const { motion } = window.framer;
  const blob = document.createElement("div");
  blob.className = "blob";
  document.getElementById("blob-container").appendChild(blob);

  const blobMotion = motion(blob, {
    x: { type: "spring", stiffness: 50 },
    y: { type: "spring", stiffness: 50 },
    scale: { type: "spring", stiffness: 50 },
  });

  const pointer = document.createElement("div");
  pointer.className = "pointer";
  document.body.appendChild(pointer);

  const pointerMotion = motion(pointer, {
    x: { type: "spring", stiffness: 50, damping: 20 },
    y: { type: "spring", stiffness: 50, damping: 20 },
  });

  document.addEventListener("mousemove", (e) => {
    blobMotion.set({
      x: e.clientX - 150,
      y: e.clientY - 150,
      scale: 1.2,
    });

    pointerMotion.set({
      x: e.clientX,
      y: e.clientY,
    });
  });

  blobMotion.animate(
    {
      scale: [1, 1.3, 1],
      opacity: [0.5, 0.8, 0.5],
    },
    {
      duration: 3,
      repeat: Infinity,
    }
  );
});
