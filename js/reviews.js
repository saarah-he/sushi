document.addEventListener("DOMContentLoaded", () => {
  const reviews = [
    {
      text: `"Best sushi i have had in Montreal and NYC. Theres something unique about their sushi and it's so delicious. Send all my friends here and they agree!"`,
      name: "- Latex N.",
    },
    {
      text: `"I've been going to this place since I was a teenager & it's my favorite sushi in the neighborhood! Excellent value for money & always pleasant service, it's a place more for take-outs, but they prepare the sushi super quickly and in front of you, I recommend!"`,
      name: "- Melissa G.",
    },
    {
      text: `"The sushi is always excellent, fresh, and flavorful. It's a prime spot for takeout, and it's also very affordable. Always excellent, our must-try is the 60-piece platter, freshly made and delicious!"`,
      name: "- Edith T.",
    },
    {
      text: `"The sushi is generous, not just rice! The soups are huge and the prices are excellent. In addition, there is always a sushi on special not to mention the loyalty card. The man who works there is also so kind! Even if I no longer live in the area, I still go back."`,
      name: "- Laura D.",
    },
    {
      text: `"The gentleman who takes our orders is always pleasant, helpful and responds well to our needs. We always receive our good orders. Plus the prices are affordable. I recommend "`,
      name: "- Jonathan S.",
    },
  ];

  let index = 0;

  const textEl = document.getElementById("review-text");
  const nameEl = document.getElementById("review-name");
  const prevBtn = document.querySelector(".left-quote");
  const nextBtn = document.querySelector(".right-quote");

  function updateReview(nextIndex) {
    // fade out
    textEl.classList.add("fade-out");
    nameEl.classList.add("fade-out");

    setTimeout(() => {
      index = (nextIndex + reviews.length) % reviews.length;
      textEl.textContent = reviews[index].text;
      nameEl.textContent = reviews[index].name;

      // fade back in
      textEl.classList.remove("fade-out");
      nameEl.classList.remove("fade-out");
    }, 400);
  }

  prevBtn.addEventListener("click", () => updateReview(index - 1));
  nextBtn.addEventListener("click", () => updateReview(index + 1));
});
