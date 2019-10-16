var mapLink = document.querySelector(".link-map");
var mapModal = document.querySelector(".modal-map");
var mapClose = mapModal.querySelector(".modal-close");

var contactLink = document.querySelector(".section__link--contacts");
var feedbackModal = document.querySelector(".modal-feedback");
var feedbackClose = feedbackModal.querySelector(".modal-close");
var form = feedbackModal.querySelector("form");
var userName = feedbackModal.querySelector("[name=name]");
var email = feedbackModal.querySelector("[name=email]");
var message = feedbackModal.querySelector("[name=message]");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

//Map
mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapModal.classList.contains("modal-show")) {
      evt.preventDefault();
      mapModal.classList.remove("modal-show");
    }
  }
});

//Feedback
try {
  storageName = localStorage.getItem("userName");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

contactLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.add("modal-show");

  if (storageName || storageEmail) {
    userName.value = storageName;
    email.value = storageEmail;
    message.focus();
  } else {
    userName.focus();
  }


});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.remove("modal-show");
  feedbackModal.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !email.value || !message.value) {
    evt.preventDefault();
    feedbackModal.classList.remove("modal-error");
    feedbackModal.offsetWidth = feedbackModal.offsetWidth;
    feedbackModal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedbackModal.classList.contains("modal-show")) {
      feedbackModal.classList.remove("modal-show");
      feedbackModal.classList.remove("modal-error");
    }
  }
});
