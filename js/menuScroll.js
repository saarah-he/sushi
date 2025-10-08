document.addEventListener("DOMContentLoaded", () => {
  const frontSection = document.querySelector(".front-area");
  const backToTop = document.querySelector(".menu-back-to-top");

  // Use one Intersection Observer to handle everything
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When front section is visible
          backToTop.classList.remove("visible");
        } else {
          // When front section is out of view
          backToTop.classList.add("visible");
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(frontSection);
});
