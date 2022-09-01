"use strict";

const pwd = document.querySelector("#password");
const confirmPwd = document.querySelector("#confirm_password");
const matchMsg = document.querySelector("#matchMsg");

confirmPwd.addEventListener("focusout", () => {
  if (confirmPwd.checkValidity() == false) {
    if (document.querySelector(".validPwd") == null) {
      confirmPwd.insertAdjacentHTML(
        "afterend",
        `    <p class="validPwd">
      Password must be <br />
      At least 6 characters<br />
      At least 1 uppercase character<br />
      At least 1 lowercase character<br />
      At least 1 number
    </p>`
      );
    }
  } else {
    if (pwd.value !== confirmPwd.value) {
      document.querySelector(".validPwd").remove();
      confirmPwd.setCustomValidity("Passwords must match");
      matchMsg.classList.remove("hidden");
    } else {
      confirmPwd.setCustomValidity("");
      matchMsg.classList.add("hidden");
    }
  }
});

pwd.addEventListener("focusout", () => {
  if (pwd.checkValidity() == false) {
    console.log("please type correct pwd");
  }
});
