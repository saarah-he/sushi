document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const frontArea = document.querySelector(".front-area");
  const headerHeight = 65;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        sidebar.classList.remove("fixed");
      } else {
        sidebar.classList.add("fixed");
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: `-${headerHeight}px 0px 0px 0px`
    }
  );

  observer.observe(frontArea);
});
