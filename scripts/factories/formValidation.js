// DOM Elements
const form = document.getElementById("form");
const errorMsg = document.querySelectorAll(".invalid-feedback");
const confirmation = document.getElementById("confirmation");
const btnSubmit = document.getElementById("submitValidation");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");

const message = document.getElementById("message");

const Identityregex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

const mailFormatRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

console.log("btnSubmit", btnSubmit);
// submit modal event
form.addEventListener("submit", checkValidation);

// check input form
//check identityName

function checkIdentityName(identityName, index) {
  if (
    identityName.value.trim().length < 2 ||
    identityName.value.trim() === "" ||
    !identityName.value.match(Identityregex)
  ) {
    errorMsg[index].style.display = "block";
    return false;
  }
  errorMsg[index].style.display = "none";
  return true;
}

// check email
function checkEmail() {
  console.log("email", email);
  if (mailFormatRegex.test(email.value) === false) {
    errorMsg[2].style.display = "block";
    return false;
  }
  errorMsg[2].style.display = "none";
  return true;
}

// check Message

function checkMessage() {
  console.log("message", message);
  if (
    message.value.trim().length < 20 ||
    message.value.trim() === "" ||
    !message.value.match(Identityregex)
  ) {
    errorMsg[3].style.display = "block";

    return false;
  }
  errorMsg[3].style.display = "none";
  return true;
}

function checkValidation(event) {
  event.preventDefault();

  const isCheckFirstName = checkIdentityName(firstName, 0);

  const iscCheckLastName = checkIdentityName(lastName, 1);

  const isCheckEmail = checkEmail();

  const ischeckMessage = checkMessage();
  console.log(
    "checkvalidation",
    isCheckFirstName,
    iscCheckLastName,
    isCheckEmail,
    ischeckMessage
  );
  if (
    isCheckFirstName === true &&
    iscCheckLastName === true &&
    isCheckEmail === true &&
    ischeckMessage === true
  ) {
    // We display the modal of the successful message.
    confirmation.style.display = "block";
    console.log(
      "Prenom : " +
        firstName.value +
        ", Nom : " +
        lastName.value +
        ", Email : " +
        email.value +
        ", Message : " +
        message.value
    );
  }
  return false;
  // return  form.style.display="block";
}
