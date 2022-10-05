const greeting = document.querySelector(".greeting");
const greetingBtn = document.querySelector(".btn-greeting");
const loginModal = document.querySelector(".modal-login");
const closeBtn = document.querySelector(".icon-close");

const HIDDEN_CLASSNAME = "hidden";

greetingBtn.addEventListener("click", onLoginBtn);
closeBtn.addEventListener("click", onClose);

function onLoginBtn(event) {
  greeting.classList.add(HIDDEN_CLASSNAME);
  loginModal.classList.remove(HIDDEN_CLASSNAME);
}

function onClose(e) {
  loginModal.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
