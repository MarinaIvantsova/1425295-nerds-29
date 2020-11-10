const closeLink = document.querySelector(".modal-close");
const feedbackPopup = document.querySelector(".modal-feedback");

closeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("popap-close");


});
