import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let container = document.querySelector(".slider-track");

let slider = gsap.to(".slider-track", {
  scrollTrigger: {
    trigger: ".horizontal-scroll",
    start: "top top", // Change the start point to better align with the top of the trigger
    end: "+=400%", // Change to a more specific distance for horizontal scroll
    pin: true,
    scrub: true,
    toggleActions: "play none none reverse",
  },
  //   x: -window.innerWidth * 0.75, // Adjust the horizontal scroll amount
  x: () =>
    -(container.scrollWidth - document.documentElement.clientWidth) -
    parseInt(window.getComputedStyle(container).marginLeft) -
    parseInt(window.getComputedStyle(container).marginRight) +
    "px",
  ease: "sine.inOut",
});

window.addEventListener("resize", () => {
  let progress = slider.totalProgress();
  slider.progress(0);
  slider.invalidate();
  slider.totalProgress(progress);
});

document.addEventListener("DOMContentLoaded", function () {
  var playButton = document.getElementById("playButton");
  var audioPlayer = document.getElementById("audioPlayer");

  playButton.addEventListener("click", function () {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const animationDuration = 20000;
  const delayBeforeScroll = 2000;

  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
        duration: animationDuration,
        easing: "ease-in",
      });
    }
  };

  setTimeout(() => {
    scrollToSection("section2");
  }, delayBeforeScroll);
});

var audio = document.getElementById("audioPlayer");
audio.volume = 0.01;
