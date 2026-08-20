const phoneHref = "tel:+420775448890";

const homes = [
  {
    id: "01",
    name: "Byt 01",
    floor: "1. NP",
    area: 157.19,
    price: 11290000,
    image: "assets/100554635.webp",
    alt: "Obytný prostor s vysokými okny a parketovou podlahou",
    description: "Byt o výměře 157,19 m² v prvním nadzemním podlaží. Prodává se ve stávajícím stavu.",
  },
  {
    id: "02",
    name: "Byt 02",
    floor: "1. NP",
    area: 97.85,
    price: 7790000,
    image: "assets/100554632.webp",
    alt: "Světlý interiér s parketovou podlahou",
    description: "Byt o výměře 97,85 m² v prvním nadzemním podlaží. Prodává se ve stávajícím stavu.",
  },
  {
    id: "03",
    name: "Byt 03",
    floor: "2. NP",
    area: 139.36,
    price: 10590000,
    image: "assets/100554636.webp",
    alt: "Obývací prostor s vysokými stropy a parketami",
    description: "Byt o výměře 139,36 m² ve druhém nadzemním podlaží. Prodává se ve stávajícím stavu.",
  },
  {
    id: "04",
    name: "Byt 04",
    floor: "2. NP",
    area: 61.23,
    price: 5590000,
    image: "assets/100554637.webp",
    alt: "Světlý pokoj s vysokými okny",
    description: "Byt o výměře 61,23 m² ve druhém nadzemním podlaží. Prodává se ve stávajícím stavu.",
  },
  {
    id: "05",
    name: "Byt 05",
    floor: "2. NP",
    area: 76.03,
    price: 6890000,
    image: "assets/100554638.webp",
    alt: "Jídelna s kuchyní a dřevěnou podlahou",
    description: "Byt o výměře 76,03 m² ve druhém nadzemním podlaží. Prodává se ve stávajícím stavu.",
  },
  {
    id: "06",
    name: "Byt 06",
    floor: "3. NP",
    area: 143.05,
    price: 10790000,
    image: "assets/100554635.webp",
    alt: "Obytný prostor s vysokými okny a parketovou podlahou",
    description: "Byt o výměře 143,05 m² ve třetím nadzemním podlaží. Prodává se ve stávajícím stavu.",
  },
  {
    id: "07",
    name: "Byt 07",
    floor: "3. NP",
    area: 59.13,
    price: 5490000,
    image: "assets/100554639.webp",
    alt: "Výhled z vysokých oken do zeleně",
    description: "Byt o výměře 59,13 m² ve třetím nadzemním podlaží. Prodává se ve stávajícím stavu.",
  },
  {
    id: "08",
    name: "Byt 08",
    floor: "3. NP",
    area: 76.64,
    price: 6990000,
    image: "assets/100554637.webp",
    alt: "Světlý pokoj s vysokými okny",
    description: "Byt o výměře 76,64 m² ve třetím nadzemním podlaží. Prodává se ve stávajícím stavu.",
  },
  {
    id: "09",
    name: "Byt 09",
    floor: "4. NP",
    area: 76.77,
    price: 7090000,
    image: "assets/100554636.webp",
    alt: "Obývací prostor s vysokými stropy a parketami",
    description: "Byt o výměře 76,77 m² ve čtvrtém nadzemním podlaží. Prodává se ve stávajícím stavu.",
  },
  {
    id: "10",
    name: "Byt 10",
    floor: "4. NP",
    area: 199.72,
    price: 13290000,
    image: "assets/100554635.webp",
    alt: "Obytný prostor s vysokými okny a parketovou podlahou",
    description: "Byt o výměře 199,72 m² ve čtvrtém nadzemním podlaží. Prodává se ve stávajícím stavu.",
  },
];

const attic = {
  id: "P",
  name: "Půdní investiční celek",
  floor: "Půda",
  area: 237.73,
  price: 10490000,
  image: "assets/100554650.webp",
  alt: "Původní dřevěný krov v půdním prostoru domu",
  description: "Samostatně přístupný celek o výměře 237,73 m² zahrnuje půdní prostor, prádelnu a navazující chodbu. Prodává se jako samostatný investiční celek.",
};

const allOffers = [...homes, attic];
const money = new Intl.NumberFormat("cs-CZ", { maximumFractionDigits: 0 });
const areaNumber = new Intl.NumberFormat("cs-CZ", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function formatPrice(value) {
  return `${money.format(value)} Kč`;
}

function formatArea(value) {
  return `${areaNumber.format(value)} m²`;
}

function cardFor(home) {
  return `
    <article class="unit-card" data-floor="${home.floor}">
      <div class="unit-card-image">
        <img src="${home.image}" alt="${home.alt}" loading="lazy" />
        <span class="unit-card-floor">${home.floor}</span>
      </div>
      <div class="unit-card-content">
        <div>
          <h3>${home.name}</h3>
          <p class="unit-area">${formatArea(home.area)}</p>
        </div>
        <p class="unit-price">${formatPrice(home.price)}</p>
      </div>
      <button type="button" data-open-unit="${home.id}">Detail bytu <span aria-hidden="true">↗</span></button>
    </article>
  `;
}

function rowFor(home) {
  return `
    <tr>
      <td class="table-name">${home.name}</td>
      <td>${home.floor}</td>
      <td>${formatArea(home.area)}</td>
      <td class="table-price">${formatPrice(home.price)}</td>
      <td><button class="table-action" type="button" data-open-unit="${home.id}">Detail <span aria-hidden="true">↗</span></button></td>
    </tr>
  `;
}

const grid = document.querySelector("#unit-grid");
const tableBody = document.querySelector("#price-table-body");
const total = homes.reduce((sum, home) => sum + home.price, 0);

grid.innerHTML = homes.map(cardFor).join("");
tableBody.innerHTML = homes.map(rowFor).join("");
document.querySelector("#residential-total").textContent = formatPrice(total);

const filters = document.querySelectorAll(".filter");
filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const requestedFloor = filter.dataset.filter;
    filters.forEach((item) => item.classList.toggle("is-active", item === filter));
    document.querySelectorAll(".unit-card").forEach((card) => {
      const matches = requestedFloor === "all" || card.dataset.floor === requestedFloor;
      card.hidden = !matches;
    });
  });
});

const dialog = document.querySelector("#unit-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogFloor = document.querySelector("#dialog-floor");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector("#dialog-description");
const dialogArea = document.querySelector("#dialog-area");
const dialogPrice = document.querySelector("#dialog-price");
const closeDialog = document.querySelector(".dialog-close");

function openOffer(id) {
  const offer = allOffers.find((item) => item.id === id);
  if (!offer) return;

  dialogImage.src = offer.image;
  dialogImage.alt = offer.alt;
  dialogFloor.textContent = offer.floor;
  dialogTitle.textContent = offer.name;
  dialogDescription.textContent = offer.description;
  dialogArea.textContent = formatArea(offer.area);
  dialogPrice.textContent = formatPrice(offer.price);
  dialog.showModal();
  dialogTitle.focus();
}

document.addEventListener("click", (event) => {
  const opener = event.target.closest("[data-open-unit]");
  if (opener) openOffer(opener.dataset.openUnit);
});

closeDialog.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

const toggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-menu");

toggle.addEventListener("click", () => {
  const opened = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!opened));
  toggle.querySelector(".sr-only").textContent = opened ? "Otevřít navigaci" : "Zavřít navigaci";
  mobileNav.hidden = opened;
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.querySelector(".sr-only").textContent = "Otevřít navigaci";
    mobileNav.hidden = true;
  });
});

// Keep the telephone target in one explicit place for easy deployment edits.
document.querySelectorAll('a[href="tel:+420775448890"]').forEach((link) => {
  link.setAttribute("href", phoneHref);
});
