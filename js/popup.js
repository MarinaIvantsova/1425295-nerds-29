const openLink = document.querySelector(".feedback-popup");
const closeLink = document.querySelector(".modal-close");

const feedbackPopup = document.querySelector(".modal-feedback");
const loginForm = document.querySelector(".login-form");
const loginLogin = loginPopup.querySelector(".login-icon-name");
const loginEmail = loginPopup.querySelector(".login-icon-email");


openLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("popup-open");
});

closeLink.addEventListener("click", function (evt) {
  feedbackPopup.classList.add("popup-close");
  loginPopup.classList.remove("popup-open");
  loginPopup.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginEmail.value) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginLogin.value);
    }
  }
});
