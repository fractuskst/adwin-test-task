document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const desktopCallbackButton = document.getElementById("desktop-callback-button");
  const closeIcon = document.querySelector(".close-icon");
  const cartIcon = document.querySelector(".cart-icon");
  const mobileMenu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".overlay");

  const toggleMenu = () => {
    const isOpen = mobileMenu.classList.toggle("open");
    overlay.classList.toggle("visible", isOpen);
    menuIcon.classList.toggle("hidden", isOpen);
    desktopCallbackButton.classList.toggle("hidden", isOpen);
    cartIcon.classList.toggle("hidden", isOpen);
    closeIcon.classList.toggle("hidden", !isOpen);
  };

  menuIcon.addEventListener("click", toggleMenu);
  closeIcon.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
      toggleMenu();
    }
  });

  mobileMenu.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
