const openLink = document.querySelector(".feedback-popup");
const closeLink = document.querySelector(".modal-close");

const feedbackPopup = document.querySelector(".modal-feedback");


openLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("popup-open");
});

closeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("popup-close");
});
