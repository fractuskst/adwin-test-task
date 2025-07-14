import { formatPhone } from "./utils/formatPhone";

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const menuIcon = document.querySelector(".menu-icon");
  const callbackButtons = document.querySelectorAll(".callback-button");
  const desktopCallbackButton = document.getElementById("desktop-callback-button");
  const menuCloseIcon = document.querySelector(".menu-close-icon");
  const cartIcon = document.querySelector(".cart-icon");
  const mobileMenu = document.querySelector(".mobile-menu");

  const overlay = document.querySelector(".overlay");

  const popup = document.querySelector(".popup");
  const popupCloseIcon = document.querySelector(".popup-close-icon");
  const phoneInput = document.getElementById("phone");

  const toggleMenu = () => {
    const isOpen = mobileMenu.classList.toggle("open");
    overlay.classList.toggle("visible", isOpen);
    menuIcon.classList.toggle("hidden", isOpen);
    desktopCallbackButton.classList.toggle("hidden", isOpen);
    cartIcon.classList.toggle("hidden", isOpen);
    menuCloseIcon.classList.toggle("hidden", !isOpen);
  };

  const togglePopup = () => {
    const isOpen = popup.classList.toggle("open");

    header.style.zIndex = isOpen ? "1" : "100";

    if (isOpen && mobileMenu.classList.contains("open")) {
      toggleMenu();
    }

    overlay.classList.toggle("visible", isOpen);
  };

  menuIcon.addEventListener("click", toggleMenu);
  menuCloseIcon.addEventListener("click", toggleMenu);

  callbackButtons.forEach((button) => {
    button.addEventListener("click", togglePopup);
  });

  popupCloseIcon.addEventListener("click", togglePopup);

  phoneInput.addEventListener("input", () => {
    formatPhone(phoneInput);
  });

  overlay.addEventListener("click", () => {
    if (mobileMenu.classList.contains("open")) {
      toggleMenu();
    } else if (popup.classList.contains("open")) {
      togglePopup();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (mobileMenu.classList.contains("open")) {
        toggleMenu();
      } else if (popup.classList.contains("open")) {
        togglePopup();
      }
    }
  });
});
