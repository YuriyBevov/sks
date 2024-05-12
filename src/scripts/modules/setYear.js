const yearNodes = document.querySelectorAll(".js-current-year");

if (yearNodes.length) {
  yearNodes.forEach((node) => {
    node.innerHTML = ` ${new Date().getFullYear()} `;
  });
}
