const header = document.querySelector("[data-header]");
const sizeInput = document.querySelector("[data-size]");
const copyInput = document.querySelector("[data-copy]");
const output = document.querySelector("[data-output]");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

const updateSpecimen = () => {
  output.textContent = copyInput.value.trim() || "Eason Type";
  output.style.fontSize = `${sizeInput.value}px`;
};

document.querySelectorAll(".section, .work-item, .service-list article").forEach((node) => {
  node.setAttribute("data-reveal", "");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));

window.addEventListener("scroll", updateHeader, { passive: true });
sizeInput.addEventListener("input", updateSpecimen);
copyInput.addEventListener("input", updateSpecimen);

updateHeader();
updateSpecimen();
