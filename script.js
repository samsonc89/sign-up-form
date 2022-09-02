"use strict";

const pwd = document.querySelector("#password");
const confirmPwd = document.querySelector("#confirm_password");
const matchMsg = document.querySelector("#matchMsg");

//check if password format is correct
pwd.addEventListener("focusout", () => {
  if (pwd.checkValidity() == false) {
    if (document.querySelector(".validPwd") == null) {
      pwd.insertAdjacentHTML(
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
    if (document.querySelector(".validPwd") != null) {
      document.querySelector(".validPwd").remove();
    }
  }
});

// check if password format is correct and matches
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
      if (document.querySelector(".validPwd") != null) {
        document.querySelector(".validPwd").remove();
      }
      matchMsg.classList.remove("hidden");
    } else {
      matchMsg.classList.add("hidden");
      if (document.querySelector(".validPwd") != null) {
        document.querySelector(".validPwd").remove();
      }
    }
  }
});
