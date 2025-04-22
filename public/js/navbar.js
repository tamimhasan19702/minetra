/** @format */

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenuToggle.classList.toggle("active");
  });

  // Accordion Submenu Toggle
  const accordionToggles = document.querySelectorAll(".accordion-toggle");

  accordionToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const targetId = toggle.getAttribute("data-target");
      const submenu = document.getElementById(targetId);

      // Toggle active class for submenu and button
      submenu.classList.toggle("active");
      toggle.classList.toggle("active");

      // Optional: Close other open submenus (for single open accordion)
      accordionToggles.forEach((otherToggle) => {
        if (otherToggle !== toggle) {
          const otherTargetId = otherToggle.getAttribute("data-target");
          const otherSubmenu = document.getElementById(otherTargetId);
          otherSubmenu.classList.remove("active");
          otherToggle.classList.remove("active");
        }
      });
    });
  });
});
