/*
Accordion JS
Héctor Guedea
Updated: November 9th, 2023
*/
document.addEventListener("DOMContentLoaded", () => {
  fetch('js/content-accordion.json')
    .then(response => response.json())
    .then(jsonData => initializeAccordion(jsonData))
    .catch(error => console.error('Error to get JSON file:', error));
});

function initializeAccordion(jsonData) {
  const items = document.querySelectorAll(".accordion-item");

  items.forEach((item, index) => {
    item.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      if (isActive) {
        const selector = `.accordion-item[data-index="${index}"]`;
        const button = document.querySelector(`${selector} .accordion-button`);
        const content = document.querySelector(`${selector} .accordion-body`);

        button.classList.toggle("collapsed");
        content.classList.toggle("show");

        const ariaHiddenValue = content.getAttribute('aria-hidden');
        content.setAttribute('aria-hidden', ariaHiddenValue === 'true' ? 'false' : 'true');

        const next = document.querySelector(`.accordion-item[data-index="${index+1}"]`);
        if (next) next.classList.add("active");
      }
    });
  });

  jsonData.sections.forEach((section, index) => {
    const selector = `.accordion-item[data-index="${index}"]`;
    const header = document.querySelector(`${selector} button`);
    const content = document.querySelector(`${selector} .accordion-body`);

    header.innerHTML = section.title.value;
    content.innerHTML = `<p>${section.panel.value}</p>
                         <img src="${section.panel.image.src}" alt="${section.panel.image.title}">`;
  });
}