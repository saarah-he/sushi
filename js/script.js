const scrollContainer = document.getElementById("popular-scroll");
const leftBtn = document.querySelector(".popular-arrow.left");
const rightBtn = document.querySelector(".popular-arrow.right");

const item = document.querySelector(".popular-item");
const containerStyle = getComputedStyle(scrollContainer);
const gap = parseInt(containerStyle.columnGap) || 0;
const itemWidth = item.getBoundingClientRect().width + gap+ 2;

const sidebar = document.getElementById("sidebar");
const frontArea = document.querySelector(".front-area");
const headerHeight = 65; // height of your header

// Scroll by 1 item
leftBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -itemWidth, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: itemWidth, behavior: "smooth" });
});

// Update arrow states
function updateArrows() {
  const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

  if (scrollContainer.scrollLeft <= 0) {
    leftBtn.disabled = true;
    leftBtn.style.opacity = "0.5";   // greyed out
    leftBtn.style.cursor = "default";
  } else {
    leftBtn.disabled = false;
    leftBtn.style.opacity = "1";
    leftBtn.style.cursor = "pointer";
  }

  if (scrollContainer.scrollLeft >= maxScrollLeft - 1) {
    rightBtn.disabled = true;
    rightBtn.style.opacity = "0.5";
    rightBtn.style.cursor = "default";
  } else {
    rightBtn.disabled = false;
    rightBtn.style.opacity = "1";
    rightBtn.style.cursor = "pointer";
  }
  if (scrollContainer.scrollLeft <= 0) {
    scrollContainer.classList.add("no-left-fade");
  } else {
    scrollContainer.classList.remove("no-left-fade");
  }

  if (scrollContainer.scrollLeft >= maxScrollLeft - 1) {
    scrollContainer.classList.add("no-right-fade");
  } else {
    scrollContainer.classList.remove("no-right-fade");
  }

}


// Run on load + whenever user scrolls
updateArrows();
scrollContainer.addEventListener("scroll", updateArrows);
