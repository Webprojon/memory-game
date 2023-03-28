const containerEl = document.getElementById("container");
const cards_length = 16;
const cards = [];

let previousShownCard = undefined;

let icons = [
  "apple-alt",
  "camera",
  "mug-hot",
  "book",
  "coins",
  "igloo",
  "cog",
  "life-ring",
];

icons.push(...icons);

for (let i = 0; i < 100; i++) {
  const indx1 = Math.floor(Math.random() * icons.length);
  const indx2 = Math.floor(Math.random() * icons.length);

  const temp = icons[indx1];
  icons[indx1] = icons[indx2];
  icons[indx2] = temp;
}

for (let i = 0; i < cards_length; i++) {
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  cardEl.innerHTML = `
         <div class="front">
         <i class="fas fa-${icons[i]}"></i>
         </div>
         <div class="back"><small>Click</small></div>
        `;
  cardEl.addEventListener("click", () => {
    if (!cardEl.classList.contains("show")) {
      cardEl.classList.toggle("show");
    }

    if (!previousShownCard) {
      previousShownCard = cardEl;
    } else {
      const iconsOne = previousShownCard.querySelector("i").classList[1];
      const iconsTwo = cardEl.querySelector("i").classList[1];
      if (iconsOne !== iconsTwo) {
        const temp = previousShownCard;
        setTimeout(() => {
          temp.classList.remove("show");
          cardEl.classList.remove("show");
        }, 1000);
      }
      previousShownCard = undefined;
    }
  });

  cards.push(cardEl);
  containerEl.appendChild(cardEl);
}
