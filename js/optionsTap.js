if ('ontouchstart' in window) {
  const items = document.querySelectorAll('.option-item');

  document.addEventListener('click', (e) => {
    // check if click was inside an option-item
    const clickedItem = e.target.closest('.option-item');

    // remove active from all items first
    items.forEach(item => item.classList.remove('active'));

    // if click was on an option-item, activate it
    if (clickedItem) {
      clickedItem.classList.add('active');
    }
  });
}
