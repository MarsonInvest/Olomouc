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

const gallery = [
  {
    image: "assets/100554648.webp",
    alt: "Schodiště domu s původním kovovým zábradlím",
    caption: "Schodiště s původním kovovým zábradlím.",
  },
  {
    image: "assets/100554631.webp",
    alt: "Vstupní hala se secesní dlažbou",
    caption: "Vstupní hala se secesní dlažbou.",
  },
  {
    image: "assets/100554635.webp",
    alt: "Obytný prostor s vysokými okny",
    caption: "Vysoká okna a zachované dřevěné podlahy.",
  },
  {
    image: "assets/100554639.webp",
    alt: "Výhled z vysokých oken do zeleně",
    caption: "Zeleň Čechových sadů v bezprostředním okolí domu.",
  },
  {
    image: "assets/100555486.webp",
    alt: "Secesní fasáda domu v třídě Spojenců",
    caption: "Secesní architektura v klidné ulici u centra.",
  },
];

const allOffers = [...homes, attic];
const money = new Intl.NumberFormat("cs-CZ", { maximumFractionDigits: 0 });
const areaNumber = new Intl.NumberFormat("cs-CZ", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let heroWord = document.querySelector("#hero-word");
const heroWords = ["charakterem.", "prostorem.", "adresou."];
const heroCadence = 5000;
const heroWordOffset = 3340;
const heroEraseDelay = 46;
const heroTypeDelay = 90;
const heroTypePause = 150;
let heroWordIndex = 0;
let heroWordTimer;
let heroWordStartTimer;
let heroWordStepTimer;

const formatPrice = (value) => `${money.format(value)} Kč`;
const formatArea = (value) => `${areaNumber.format(value)} m²`;
const getOffer = (id) => allOffers.find((offer) => offer.id === id);

function updateHeroWord() {
  if (!heroWord || reduceMotion) return;

  window.clearTimeout(heroWordStepTimer);
  heroWordIndex = (heroWordIndex + 1) % heroWords.length;
  const nextWord = heroWords[heroWordIndex];
  let visibleWord = heroWord.textContent || "";

  heroWord.classList.add("is-typing");

  const eraseNextCharacter = () => {
    if (visibleWord.length) {
      visibleWord = visibleWord.slice(0, -1);
      heroWord.textContent = visibleWord;
      heroWordStepTimer = window.setTimeout(eraseNextCharacter, heroEraseDelay);
      return;
    }

    let typedLength = 0;
    const typeNextCharacter = () => {
      typedLength += 1;
      heroWord.textContent = nextWord.slice(0, typedLength);

      if (typedLength < nextWord.length) {
        heroWordStepTimer = window.setTimeout(typeNextCharacter, heroTypeDelay);
        return;
      }

      heroWord.classList.remove("is-typing");
    };

    heroWordStepTimer = window.setTimeout(typeNextCharacter, heroTypePause);
  };

  eraseNextCharacter();
}

function initHeroWordRotation() {
  if (!heroWord || reduceMotion) return;

  heroWordStartTimer = window.setTimeout(() => {
    updateHeroWord();
    heroWordTimer = window.setInterval(updateHeroWord, heroCadence);
  }, heroWordOffset);

  window.addEventListener("pagehide", () => {
    window.clearTimeout(heroWordStartTimer);
    window.clearTimeout(heroWordStepTimer);
    window.clearInterval(heroWordTimer);
  }, { once: true });
}

function initClosingOutro() {
  const sequence = document.querySelector(".closing-sequence");
  const footer = document.querySelector(".site-footer");

  if (!sequence || !footer || reduceMotion || !("IntersectionObserver" in window)) return;

  document.documentElement.classList.add("has-closing-motion");

  const outroObserver = new IntersectionObserver(([entry]) => {
    document.body.classList.toggle("is-closing-outro", entry.isIntersecting);
  }, { rootMargin: "-12% 0px -18% 0px", threshold: 0 });

  const footerObserver = new IntersectionObserver(([entry]) => {
    footer.classList.toggle("is-revealed", entry.isIntersecting);
  }, { threshold: 0.16 });

  outroObserver.observe(sequence);
  footerObserver.observe(footer);

  window.addEventListener("pagehide", () => {
    outroObserver.disconnect();
    footerObserver.disconnect();
  }, { once: true });
}

const tableBody = document.querySelector("#unit-table-body");
const offerResult = document.querySelector("#offer-result");
const offerEmpty = document.querySelector("#offer-empty");
const preview = document.querySelector(".unit-preview");
const previewImage = document.querySelector("#preview-image");
const previewFloor = document.querySelector("#preview-floor");
const previewName = document.querySelector("#preview-name");
const previewArea = document.querySelector("#preview-area");
const previewPrice = document.querySelector("#preview-price");
const previewDescription = document.querySelector("#preview-description");
const sortButton = document.querySelector("[data-sort='price']");
const filters = [...document.querySelectorAll(".filter")];
const total = homes.reduce((sum, home) => sum + home.price, 0);

document.querySelector("#residential-total").textContent = formatPrice(total);

let activeFloor = "all";
let priceOrder = "default";
let selectedId = homes[0].id;
let previewTimer;
let lastSheetTrigger;

function visibleHomes() {
  const matchingHomes = homes.filter((home) => activeFloor === "all" || home.floor === activeFloor);

  if (priceOrder === "asc") return [...matchingHomes].sort((a, b) => a.price - b.price);
  if (priceOrder === "desc") return [...matchingHomes].sort((a, b) => b.price - a.price);
  return matchingHomes;
}

function unitRow(home) {
  const selected = home.id === selectedId;
  return `
    <tr class="${selected ? "is-selected" : ""}" data-unit-row="${home.id}">
      <th scope="row" data-label="Jednotka">
        <button class="unit-name-button" type="button" data-select-unit="${home.id}" aria-pressed="${selected}">
          <strong>${home.name}</strong>
          <span>Vybrat jednotku</span>
        </button>
      </th>
      <td data-label="Podlaží">${home.floor}</td>
      <td data-label="Výměra">${formatArea(home.area)}</td>
      <td class="unit-price" data-label="Cena">${formatPrice(home.price)}</td>
      <td data-label=""><button class="table-detail" type="button" data-open-unit="${home.id}">Detail <span aria-hidden="true">→</span></button></td>
    </tr>
  `;
}

function updatePreview(offer, shouldAnimate = true) {
  const applyContent = () => {
    previewImage.src = offer.image;
    previewImage.alt = offer.alt;
    previewFloor.textContent = offer.floor;
    previewName.textContent = offer.name;
    previewArea.textContent = formatArea(offer.area);
    previewPrice.textContent = formatPrice(offer.price);
    previewDescription.textContent = offer.description;
  };

  window.clearTimeout(previewTimer);

  if (!shouldAnimate || reduceMotion) {
    applyContent();
    return;
  }

  preview.classList.add("is-changing");
  previewTimer = window.setTimeout(() => {
    applyContent();
    requestAnimationFrame(() => preview.classList.remove("is-changing"));
  }, 120);
}

function renderHomes({ animatePreview = false } = {}) {
  const displayedHomes = visibleHomes();
  const selectedVisible = displayedHomes.some((home) => home.id === selectedId);

  if (!selectedVisible && displayedHomes[0]) selectedId = displayedHomes[0].id;

  tableBody.innerHTML = displayedHomes.map(unitRow).join("");
  offerEmpty.hidden = displayedHomes.length > 0;
  offerResult.textContent = `${displayedHomes.length} ${displayedHomes.length === 1 ? "byt" : displayedHomes.length < 5 ? "byty" : "bytů"} v nabídce`;

  const selected = getOffer(selectedId);
  if (selected) updatePreview(selected, animatePreview);
}

function updateFilterControls() {
  filters.forEach((filter) => {
    const isActive = filter.dataset.filter === activeFloor;
    filter.classList.toggle("is-active", isActive);
    filter.setAttribute("aria-pressed", String(isActive));
  });
}

function updateSortControl() {
  sortButton.setAttribute("aria-pressed", String(priceOrder !== "default"));

  if (priceOrder === "asc") sortButton.textContent = "Cena od nejnižší";
  if (priceOrder === "desc") sortButton.textContent = "Cena od nejvyšší";
  if (priceOrder === "default") sortButton.textContent = "Řadit podle ceny";
}

function chooseHome(id) {
  if (!getOffer(id) || id === selectedId) return;
  selectedId = id;
  renderHomes({ animatePreview: true });
}

function cyclePriceOrder() {
  if (priceOrder === "default") priceOrder = "asc";
  else if (priceOrder === "asc") priceOrder = "desc";
  else priceOrder = "default";

  updateSortControl();
  renderHomes({ animatePreview: true });
}

const sheet = document.querySelector("#unit-sheet");
const sheetImage = document.querySelector("#sheet-image");
const sheetFloor = document.querySelector("#sheet-floor");
const sheetTitle = document.querySelector("#sheet-title");
const sheetDescription = document.querySelector("#sheet-description");
const sheetArea = document.querySelector("#sheet-area");
const sheetPrice = document.querySelector("#sheet-price");
const sheetNote = document.querySelector(".sheet-note");
const sheetClose = document.querySelector(".sheet-close");

function openSheet(id, trigger) {
  const offer = getOffer(id);
  if (!offer) return;

  lastSheetTrigger = trigger;
  sheetImage.src = offer.image;
  sheetImage.alt = offer.alt;
  sheetFloor.textContent = offer.floor;
  sheetTitle.textContent = offer.name;
  sheetDescription.textContent = offer.description;
  sheetArea.textContent = formatArea(offer.area);
  sheetPrice.textContent = formatPrice(offer.price);
  sheetNote.textContent = offer.id === "P" ? "Celek se prodává jako samostatný investiční celek." : "Jednotka se prodává ve stávajícím stavu.";

  if (!sheet.open) sheet.showModal();
  requestAnimationFrame(() => sheetClose.focus());
}

sheetClose.addEventListener("click", () => sheet.close());
sheet.addEventListener("click", (event) => {
  if (event.target === sheet) sheet.close();
});
sheet.addEventListener("close", () => {
  if (lastSheetTrigger instanceof HTMLElement) lastSheetTrigger.focus();
});

const galleryCaption = document.querySelector("#gallery-caption");
const galleryDeck = document.querySelector("#gallery-deck");
const galleryCurrent = document.querySelector("#gallery-current");
let galleryIndex = 0;

function renderGalleryCards() {
  if (!galleryDeck || !galleryCaption) return;

  galleryDeck.innerHTML = gallery.map((item, index) => `
    <button class="gallery-card ${index === galleryIndex ? "is-active" : ""}" type="button" data-gallery-index="${index}" aria-label="${index === galleryIndex ? "Vybraný pohled: " : "Otevřít pohled: "}${item.caption}" aria-pressed="${index === galleryIndex}">
      <span class="gallery-card-media"><img src="${item.image}" alt="" loading="lazy" /></span>
      <span class="gallery-card-index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
      <span class="gallery-card-caption">
        <strong>${item.caption}</strong>
        <span>Vybraný pohled <span aria-hidden="true">↗</span></span>
      </span>
    </button>
  `).join("");

  galleryCaption.textContent = gallery[galleryIndex].caption;
  if (galleryCurrent) galleryCurrent.textContent = String(galleryIndex + 1).padStart(2, "0");
}

function updateGallery(nextIndex) {
  galleryIndex = (nextIndex + gallery.length) % gallery.length;
  if (!galleryDeck || !galleryCaption) return;

  const cards = [...galleryDeck.querySelectorAll(".gallery-card")];
  if (cards.length !== gallery.length) {
    renderGalleryCards();
  } else {
    cards.forEach((card, index) => {
      const isActive = index === galleryIndex;
      card.classList.toggle("is-active", isActive);
      card.setAttribute("aria-pressed", String(isActive));
      card.setAttribute("aria-label", `${isActive ? "Vybraný pohled: " : "Otevřít pohled: "}${gallery[index].caption}`);
    });
    galleryCaption.textContent = gallery[galleryIndex].caption;
  }

  if (galleryCurrent) galleryCurrent.textContent = String(galleryIndex + 1).padStart(2, "0");

  if (window.matchMedia("(max-width: 760px)").matches) {
    galleryDeck.querySelector(`[data-gallery-index="${galleryIndex}"]`)?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
  }
}

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-menu");

function closeMobileMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.querySelector(".sr-only").textContent = "Otevřít navigaci";
  mobileNav.hidden = true;
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.querySelector(".sr-only").textContent = isOpen ? "Otevřít navigaci" : "Zavřít navigaci";
  mobileNav.hidden = isOpen;
});

mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileMenu));

document.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;

  if (target.dataset.filter) {
    activeFloor = target.dataset.filter;
    updateFilterControls();
    renderHomes({ animatePreview: true });
    return;
  }

  if (target.dataset.sort === "price") {
    cyclePriceOrder();
    return;
  }

  if (target.dataset.selectUnit) {
    chooseHome(target.dataset.selectUnit);
    return;
  }

  if (target.hasAttribute("data-open-selected")) {
    openSheet(selectedId, target);
    return;
  }

  if (target.dataset.openUnit) {
    openSheet(target.dataset.openUnit, target);
    return;
  }

  if (target.hasAttribute("data-gallery-previous")) {
    updateGallery(galleryIndex - 1);
    return;
  }

  if (target.hasAttribute("data-gallery-next")) {
    updateGallery(galleryIndex + 1);
    return;
  }

  if (target.dataset.galleryIndex) {
    updateGallery(Number(target.dataset.galleryIndex));
    return;
  }

});

renderHomes();
updateFilterControls();
updateSortControl();
renderGalleryCards();
initHeroWordRotation();
initClosingOutro();

document.querySelectorAll('a[href="tel:+420775448890"]').forEach((link) => link.setAttribute("href", phoneHref));
