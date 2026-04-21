const navShell = document.querySelector(".nav-shell");
const menuToggle = document.querySelector(".menu-toggle");
const pageName = document.body.dataset.page;

if (menuToggle && navShell) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navShell.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll("[data-nav]").forEach((link) => {
  if (link.dataset.nav === pageName) {
    link.classList.add("active");
  }
});

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

const estimateButton = document.getElementById("estimate-price");
const routeSelect = document.getElementById("route");
const travelersInput = document.getElementById("travelers");
const priceOutput = document.getElementById("estimated-total");

const basePrices = {
  bali: 780,
  dubai: 620,
  nepal: 340,
  maldives: 910,
  japan : 940,
  china : 860 ,
  switzerland : 980,
  kashmir: 420
};

if (estimateButton && routeSelect && travelersInput && priceOutput) {
  estimateButton.addEventListener("click", () => {
    const selectedRoute = routeSelect.value;
    const travelers = Number(travelersInput.value) || 1;
    const total = (basePrices[selectedRoute] || 0) * travelers;
    priceOutput.textContent = `$${total}`;
  });
}
