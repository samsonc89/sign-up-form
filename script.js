"use strict";

const pwd = document.querySelector("#password");
const confirmPwd = document.querySelector("#confirm_password");
const matchMsg = document.querySelector("#matchMsg");

confirmPwd.addEventListener("focusout", () => {
  if (pwd.value !== confirmPwd.value) {
    confirmPwd.setCustomValidity("Passwords must match");
    matchMsg.classList.remove("hidden");
  } else {
    confirmPwd.setCustomValidity("");
    matchMsg.classList.add("hidden");
  }
});
