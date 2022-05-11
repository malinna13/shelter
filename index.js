// Load pets

const myPets = async () => {
  const petsJSON = await fetch("./pets.json");
  const petData = await petsJSON.json();

  return petData;
};

const pets = await myPets();

//Mobile menu

const btnNavEl = document.querySelector("label");
const headerEl = document.querySelector(".header-container");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  scrollSwitch("nav-open", headerEl);
});

const scrollSwitch = function (className, element) {
  if (element.classList.contains(className)) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "visible";
  }
};
//Close menu on items click

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((el) =>
  el.addEventListener("click", () => {
    headerEl.classList.remove("nav-open");
    scrollSwitch("nav-open", headerEl);
  })
);
document.body.addEventListener("click", function (e) {
  if (
    !e.target.classList.contains("nav") &&
    e.target.classList.contains("overlay")
  ) {
    headerEl.classList.remove("nav-open");
    scrollSwitch("nav-open", headerEl);
  }
});

//shuffle pets

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
shuffleArray(pets);

let pets48 = [];

for (let i = 0; i < 6; i++, shuffleArray(pets)) {
  pets48.push(pets);
  pets48 = pets48.flat();
}

const sliderContainer = document.querySelector(".slider-content");
const gridContainer = document.querySelector(".friends-grid");

class Card {
  constructor(
    name,
    imgUrl,
    type,
    breed,
    description,
    age,
    inoculations,
    diseases,
    parasites
  ) {
    this.name = name;
    this.imgUrl = imgUrl;
    this.type = type;
    this.breed = breed;
    this.description = description;
    this.age = age;
    this.inoculations = inoculations;
    this.diseases = diseases;
    this.parasites = parasites;
  }
  createCard() {
    const newCard = document.createElement("div");
    newCard.classList.add("swiper-slide");
    newCard.classList.add("slider-item");

    newCard.addEventListener("click", () => {
      // Modal
      document.body.style.overflowY = "hidden";

      const modal = document.createElement("div");
      modal.classList.add("modal");
      modal.innerHTML += `
      <div class="overlay">
       
      <div class="modal-box">
      <button class="btn btn-round btn-outline modal-button">
       <img width="12px" height="12px" src="assets/images/close.svg">
       
     </img>
     </button>
      <img src="${this.imgUrl}" alt="cat" class="modal-image" />
      <div class="modal-content">
      <h3 class="modal-header">${this.name}</h3>
      <h4 class="modal-subheader">${this.type} - ${this.breed}</h4>
      <p class="modal-text">${this.description}</p>
      <ul class="modal-list">
      <li class="modal-list-item"><b>Age:</b> ${this.age}
      </li>
      <li class="modal-list-item"><b>Inoculations:</b> ${this.inoculations}
      </li>
      <li class="modal-list-item"><b>Diseases:</b> ${this.diseases}
      </li>
      <li class="modal-list-item"><b>Parasites:</b> ${this.parasites}
      </li>
      </ul>
      </div> 
      </div></div>
      
      `;
      document.body.append(modal);

      const closeButton = document.querySelector(".modal-button");
      const insideModal = document.querySelector(".modal-box");
      closeButton.addEventListener("click", (e) => {
        e.preventDefault();
        modal.remove();
        document.body.style.overflowY = "visible";
      });
      modal.addEventListener("click", (e) => {
        const isClickedInside = insideModal.contains(e.target);
        if (!isClickedInside) {
          modal.remove();
          document.body.style.overflowY = "visible";
        }
      });
    });

    newCard.innerHTML += `
    <div class="slider-image">
    <img src="${this.imgUrl}" alt="cat" />
  </div>
  <div class="slider-item-text">
    <h4 class="slider-item-name">${this.name}</h4>
    <a href="#">
      <button class="btn learn btn-outline">Learn more</button></a
    >
      `;

    if (sliderContainer) sliderContainer.append(newCard);
  }
  createGridCard() {
    const newCard = document.createElement("div");
    newCard.classList.add("friends-grid-item");
    newCard.classList.add("swiper-slide");
    newCard.addEventListener("click", () => {
      // Modal
      document.body.style.overflowY = "hidden";

      const modal = document.createElement("div");
      modal.classList.add("modal");
      modal.innerHTML += `
      <div class="overlay">
       
      <div class="modal-box">
      <button class="btn btn-round btn-outline modal-button">
       <img width="12px" height="12px" src="assets/images/close.svg">
       
     </img>
     </button>
      <img src="${this.imgUrl}" alt="cat" class="modal-image" />
      <div class="modal-content">
      <h3 class="modal-header">${this.name}</h3>
      <h4 class="modal-subheader">${this.type} - ${this.breed}</h4>
      <p class="modal-text">${this.description}</p>
      <ul class="modal-list">
      <li class="modal-list-item"><b>Age:</b> ${this.age}
      </li>
      <li class="modal-list-item"><b>Inoculations:</b> ${this.inoculations}
      </li>
      <li class="modal-list-item"><b>Diseases:</b> ${this.diseases}
      </li>
      <li class="modal-list-item"><b>Parasites:</b> ${this.parasites}
      </li>
      </ul>
      </div> 
      </div></div>
      
      `;
      document.body.append(modal);

      const closeButton = document.querySelector(".modal-button");
      const insideModal = document.querySelector(".modal-box");
      closeButton.addEventListener("click", (e) => {
        e.preventDefault();
        modal.remove();
        document.body.style.overflowY = "visible";
      });
      modal.addEventListener("click", (e) => {
        const isClickedInside = insideModal.contains(e.target);
        if (!isClickedInside) {
          modal.remove();
          document.body.style.overflowY = "visible";
        }
      });
    });

    newCard.innerHTML += `
    <div class="slider-image">
    <img src="${this.imgUrl}" alt="cat" />
  </div>
  <div class="slider-item-text">
    <h4 class="slider-item-name">${this.name}</h4>
    <a href="#">
      <button class="btn learn btn-outline">Learn more</button></a
    >
      `;

    if (gridContainer) gridContainer.append(newCard);
  }
}

pets.forEach(
  ({
    name,
    img,
    type,
    breed,
    description,
    age,
    inoculations,
    diseases,
    parasites,
  }) => {
    new Card(
      name,
      img,
      type,
      breed,
      description,
      age,
      inoculations,
      diseases,
      parasites
    ).createCard();
  }
);
pets48.forEach(
  ({
    name,
    img,
    type,
    breed,
    description,
    age,
    inoculations,
    diseases,
    parasites,
  }) => {
    new Card(
      name,
      img,
      type,
      breed,
      description,
      age,
      inoculations,
      diseases,
      parasites
    ).createGridCard();
  }
);

const learn = document.querySelectorAll(".learn");

learn.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
