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
      toggleMobileNavigation(isOpen);
    } else {
      removeOpenClasses();
      addCloseClasses();
      toggleMobileNavigation(isOpen);
    }
  });
}

// Toggle Mobile Navigation
function toggleMobileNavigation(bool) {
  const mobileVavigation = document.querySelector(".mobile-navigation");

  if (bool) {
    mobileVavigation.style.transform = `translateX(0px)`;
  } else {
    mobileVavigation.style.transform = `translateX(-100%)`;
  }
}

// Green button functionality
function greenButtonAnimation() {
  const buttons = document.querySelectorAll(".btn--green");
  const buttonInners = document.querySelectorAll(
    ".btn--green .btn--green__inner"
  );

  buttons.forEach((b, i) => {
    b.addEventListener("mouseover", (e) => {
      buttonInners[i].style.transform = "translateX(0%)";
      b.style.color = "white";
    });
  });

  buttons.forEach((b, i) => {
    b.addEventListener("mouseleave", (e) => {
      buttonInners[i].style.transform = "translateX(-100%)";
      b.style.color = "#285e67";
    });
  });
}

function smoothScrolling() {
  luxy.init();
}

toggleHamburgerMenu();
greenButtonAnimation();
smoothScrolling();
