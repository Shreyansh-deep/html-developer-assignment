const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

const productImages = [
  "assets/mainPerfumeBottle.png",
  "assets/mainPerfumeBottle.png",
  "assets/mainPerfumeBottle.png",
  "assets/mainPerfumeBottle.png",
];

let currentIndex = 0;

const mainImage = document.getElementById("mainProductImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("galleryDots");

function renderDots() {
  dotsContainer.innerHTML = "";
  productImages.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === currentIndex) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });
}

function updateImage() {
  mainImage.src = productImages[currentIndex];
  renderDots();
}

prevBtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + productImages.length) % productImages.length;
  updateImage();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % productImages.length;
  updateImage();
});

// Initial load
updateImage();

document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const parent = header.parentElement;
    const content = parent.querySelector(".accordion-content");
    const icon = header.querySelector(".toggle-icon");

    // Toggle this one only
    parent.classList.toggle("active");

    if (parent.classList.contains("active")) {
      content.style.display = "block";
      icon.textContent = "−";
    } else {
      content.style.display = "none";
      icon.textContent = "+";
    }
  });
});

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    // Handle fragrance selection
    if (this.name === "fragrance") {
      document.querySelectorAll(".fragrance-option").forEach((option) => {
        option.classList.remove("active");
      });
      this.closest(".fragrance-option").classList.add("active");
    }

    // Handle purchase option selection
    if (this.name === "purchase") {
      document.querySelectorAll(".inclusion-option").forEach((option) => {
        option.classList.remove("active");
      });
      this.closest(".inclusion-option").classList.add("active");
    }

    // Handle subscription plan selection
    if (this.name === "plan") {
      document.querySelectorAll(".subscription-box").forEach((box) => {
        box.classList.add("inactive");
      });
      this.closest(".subscription-box").classList.remove("inactive");
    }
  });
});
