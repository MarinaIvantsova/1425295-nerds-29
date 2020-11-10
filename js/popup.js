const openLink = document.querySelector(".feedback-popup");
const closeLink = document.querySelector(".modal-close");

const feedbackPopup = document.querySelector(".modal-feedback");
const loginForm = document.querySelector(".login-form");
const loginLogin = modal-feedback.querySelector(".login-icon-name");
const loginEmail = modal-feedback.querySelector(".login-icon-email");


openLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("popup-open");
});

closeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("popup-open");
  feedbackPopup.classList.remove("modal-error");


});

loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginEmail.value) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-error");
  }

});
