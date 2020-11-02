const form = document.querySelector("form");

form.addEventListener("submit", checkInputs);

function checkInputs(e) {
  // Prevent Submit Form
  e.preventDefault();

  // Get Inputs
  const { firstName, lastName, email, password } = e.target.elements;

  // Regexps
  const emailReg = /\S+@\S+\.\S/;
  const passReg = /^\w{8,}/;

  firstName.value === "" && warningMessage("empty", firstName);
  lastName.value === "" && warningMessage("empty", lastName);
  
  if (email.value === "") {
    warningMessage("empty", email)
  } else {
    if (!emailReg.test(email.value)) {
      warningMessage("invalid", email)
    }
  }

  if (password.value == "") {
    warningMessage("empty", password)
  } else {
    if (!passReg.test(password.value)) {
      warningMessage("invalid", password)
    }
  }
}


function warningMessage(err, el) {
  const pMessage = el.nextElementSibling;
  const errIcon = pMessage.nextElementSibling;
  console.log(el);

  err == "empty" ? pMessage.textContent = "Empty Field" : pMessage.textContent = "Invalid Field";
  el.classList.add("warning");
  errIcon.classList.add("show")

  setTimeout(() => {
      pMessage.textContent = "";
      el.classList.remove("warning");
      errIcon.classList.remove("show");
    }, 2000);
}