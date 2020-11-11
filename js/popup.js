const openLink = document.querySelector(".feedback-popup");
const closeLink = document.querySelector(".modal-close");
const feedbackPopup = document.querySelector(".modal-feedback");
const form = feedbackPopup.querySelector("form");
const loginLogin = feedbackPopup.querySelector("[name=user-name]");
const loginEmail = feedbackPopup.querySelector("[name=user-email]");

openLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("popup-open");
});

closeLink.addEventListener("click", function (evt) {
  feedbackPopup.classList.remove("popup-open");
  feedbackPopup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginEmail.value) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-error");
  }
});
