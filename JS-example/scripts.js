const btnModals = document.querySelectorAll("[data-toggle='open-modal']");
const btnCloseModals = document.querySelectorAll("[data-toggle='close-modal']");
const overlay = document.getElementById('overlay');

btnModals.forEach(modal => modal.addEventListener("click", function (e) {
  e.preventDefault();
  const modal = getElementByTarget(this);
  showElem(modal, overlay);
}));

btnCloseModals.forEach(btn => btn.addEventListener("click", function (e) {
  e.preventDefault();
  const modal = this.closest(".modal");
  hideElem(modal, overlay);
}));

overlay.addEventListener('click', function () {
  this.classList.remove('is-visible');
  const openModal = document.querySelector(".modal.is-visible");
  hideElem(openModal);
});

function getElementByTarget(elem) {
  const {target} = elem.dataset;
  const searchElement = document.querySelector(target);
  return searchElement;
}

function showElem(...elements) {
  elements.forEach(elem => elem.classList.add('is-visible'));
}

function hideElem(...elements) {
  elements.forEach(elem => elem.classList.remove('is-visible'));
}
