const button = document.querySelector(".js-button");
button.addEventListener("click", function () {
  const form = document.querySelector(".js-form");

  const requiredFields = form.querySelectorAll("[required]");
  button.insertAdjacentHTML("beforebegin", `<div id="message" style="margin-bottom:5px; margin-top:25px; text-align:center"></div>`);
  const message = document.querySelector("#message");
  let isFormValid = true;

  for (let i = 0; i < requiredFields.length; i += 1) {
    if (!requiredFields[i].value) {
      isFormValid = false;
      break;
    }
  }
  if (!isFormValid) {
    message.textContent = "Συμπληρώστε όλα τα πεδία των εντύπων";
    message.style.color = "red";
  } else {
    message.textContent = "Τα δεδομένα σας στάλθηκαν";
    message.style.color = "#00a300";
    form.reset();
  }
});

