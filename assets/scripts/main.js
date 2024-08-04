"use strict";

// Toggle Hamburger Menu
function toggleHamburgerMenu() {
  const hamburgerMenu = document.querySelector(".hamburger-icon");
  const lines = document.querySelectorAll(".hamburger-icon__line");
  const animationClasses = ["top-line", "middle-line", "bottom-line"];
  let isOpen = false;

  function addOpenClasses() {
    lines.forEach((line, index) =>
      line.classList.add(
        `hamburger-icon__${animationClasses[index]}--animation`
      )
    );
  }

  function removeOpenClasses(params) {
    lines.forEach((line, index) =>
      line.classList.remove(
        `hamburger-icon__${animationClasses[index]}--animation`
      )
    );
  }

  function addCloseClasses(params) {
    lines.forEach((line, index) =>
      line.classList.add(
        `hamburger-icon__${animationClasses[index]}--animation-reverse`
      )
    );
  }

  function removeCloseClasses(params) {
    lines.forEach((line, index) =>
      line.classList.remove(
        `hamburger-icon__${animationClasses[index]}--animation-reverse`
      )
    );
  }

  hamburgerMenu.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
      addOpenClasses();
      removeCloseClasses();
    } else {
      removeOpenClasses();
      addCloseClasses();
    }
  });
}

toggleHamburgerMenu();
