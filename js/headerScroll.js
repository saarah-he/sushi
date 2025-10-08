document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const frontSection = document.querySelector(".front-image-area");
  const logoText = document.querySelector(".header-svg");
  const backToTop = document.querySelector(".back-to-top");

  // Use one Intersection Observer to handle everything
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When front section is visible
          header.classList.add("transparent");
          logoText.classList.remove("visible");
          backToTop.classList.remove("visible");
        } else {
          // When front section is out of view
          header.classList.remove("transparent");
          logoText.classList.add("visible");
          backToTop.classList.add("visible");
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(frontSection);
});
