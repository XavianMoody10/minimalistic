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

// Resuable function for button animation
function buttonAnimation(buttonsEl, buttonsInnerEl, overColor, leaveColor) {
  buttonsEl.forEach((b, i) => {
    b.addEventListener("mouseover", (e) => {
      buttonsInnerEl[i].style.transform = "translateX(0%)";
      b.style.color = overColor;
    });
  });

  buttonsEl.forEach((b, i) => {
    b.addEventListener("mouseleave", (e) => {
      buttonsInnerEl[i].style.transform = "translateX(-100%)";
      b.style.color = leaveColor;
    });
  });
}

// Green button functionality
function greenButtonAnimation() {
  const buttons = document.querySelectorAll(".btn--green-outline");
  const buttonInners = document.querySelectorAll(
    ".btn--green-outline .btn--green-outline__inner"
  );
  buttonAnimation(buttons, buttonInners, "white", "#285e67");
}

// White button functionality
function whiteOulineButtonAnimation() {
  const buttons = document.querySelectorAll(".btn--white-outline");
  const buttonInners = document.querySelectorAll(
    ".btn--white-outline .btn--white-outline__inner"
  );
  buttonAnimation(buttons, buttonInners, "black", "white");
}

// Reusable Intersection Observer function
function IntersectionObserverResuable(sectionEl, animationCallback) {
  const options = { threshold: 0.8 };

  function callback(entries, observer) {
    [...entries].forEach((entry) => {
      if (entry.isIntersecting) {
        animationCallback();
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(callback, options);

  observer.observe(sectionEl);
}

// Start animation for image in the first wellbeing section
function animatedWellbeingImage() {
  const wellbeingImage = document.querySelector(
    ".wellbeing:nth-of-type(2) .wellbeing-wrapper .wellbeing-image"
  );

  function callback() {
    wellbeingImage.classList.add("wellbeing-image--go-up");
    setTimeout(() => {
      wellbeingImage.classList.remove("wellbeing-image--go-up");
      wellbeingImage.classList.add("wellbeing-image--floating");
    }, 1000);
  }

  IntersectionObserverResuable(wellbeingImage, callback);
}

// Start animation for image in the second wellbeing section
function animatedWellbeingImage2() {
  const wellbeingImage = document.querySelector(
    ".wellbeing:nth-of-type(4) .wellbeing-wrapper .wellbeing-image"
  );

  function callback() {
    wellbeingImage.classList.add("wellbeing-image--slide-in");
  }

  IntersectionObserverResuable(wellbeingImage, callback);
}

// Animated Produce section
function animateProduceSectionImage() {
  const produceImage = document.querySelector(".produce-image img");

  function callback() {
    if (screen.width >= 1024) {
      produceImage.classList.add("image--turn-negative-180");
    }
  }

  IntersectionObserverResuable(produceImage, callback);
}

toggleHamburgerMenu();
greenButtonAnimation();
whiteOulineButtonAnimation();
animatedWellbeingImage();
animatedWellbeingImage2();
animateProduceSectionImage();
