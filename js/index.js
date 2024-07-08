let currentIndex = 0;

const slider = document.getElementById("slider");
const cards = document.querySelectorAll(".card");
const totalCards = cards.length;
const visibleCards = 3;
const cardWidth = 100 / visibleCards;

document.getElementById("next").addEventListener("click", () => {
  slide(1);
});

document.getElementById("prev").addEventListener("click", () => {
  slide(-1);
});

function slide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalCards - visibleCards;
    slider.style.transition = "none";
    const offset = -currentIndex * cardWidth;
    slider.style.transform = `translateX(${offset}%)`;
    setTimeout(() => {
      currentIndex -= direction;
      slide(0);
    }, 0);
  } else if (currentIndex >= totalCards - visibleCards + 1) {
    currentIndex = 0;
    slider.style.transition = "none";
    const offset = -currentIndex * cardWidth;
    slider.style.transform = `translateX(${offset}%)`;
    setTimeout(() => {
      currentIndex += direction;
      slide(0);
    }, 0);
  } else {
    slider.style.transition = "transform 0.5s ease-in-out";
    const offset = -currentIndex * cardWidth;
    slider.style.transform = `translateX(${offset}%)`;
  }
}
