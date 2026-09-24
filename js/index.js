const textFirstName = document.querySelector(".textFirstName");
const inputFirstName = document.querySelector(".inputFirstName");
const textLastName = document.querySelector(".textLastName");
const inputLastName = document.querySelector(".inputLastName");
const textEmail = document.querySelector(".textEmail");
const inputEmail = document.querySelector(".inputEmail");
const textPhoneNumber = document.querySelector(".textPhoneNumber");
const inputPhoneNumber = document.querySelector(".inputPhoneNumber");
const textPassword = document.querySelector(".textPassword");
const inputPassword = document.querySelector(".inputPassword");
const textConfirmPassword = document.querySelector(".textConfirmPassword");
const inputConfirmPassword = document.querySelector(".inputConfirmPassword");
const textGender = document.querySelector(".textGender");
const inputGenderMale = document.querySelector(".inputGenderMale");
const inputGenderFemale = document.querySelector(".inputGenderFemale");
const textBirthdate = document.querySelector(".textBirthdate");
const inputBirthdate = document.querySelector(".inputBirthdate");

function showError(textElement, message) {
  textElement.innerHTML = message;
  textElement.classList.add("text-danger");
}
function showSuccess(textElement, message) {
  textElement.innerHTML = message;
  textElement.classList.remove("text-danger");
}

function validation() {
  // first name
  if (inputFirstName.value == "") {
    showError(textFirstName, "Invalid First Name :");
    return false;
  }
  showSuccess(textFirstName, "First Name :");

  // last name
  if (inputLastName.value == "") {
    showError(textLastName, "Invalid Last Name :");
    return false;
  }
  showSuccess(textLastName, "Last Name :");

  // Email
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(
      inputEmail.value,
    )
  ) {
    showError(textEmail, "Invalid Email :");
    return false;
  }
  showSuccess(textEmail, "Email :");

  // phone number
  if (!/^(010|011|012|015)[0-9]{8}$/.test(inputPhoneNumber.value)) {
    showError(textPhoneNumber, "Invalid Phone Number :");
    return false;
  }
  showSuccess(textPhoneNumber, "Phone Number :");

  // password
  if (inputPassword.value.length <= 8) {
    showError(textPassword, "Invalid Password :");
    return false;
  }
  showSuccess(textPassword, "Password :");

  // confirm Password
  if (
    inputConfirmPassword.value.length <= 8 ||
    inputConfirmPassword.value !== inputPassword.value
  ) {
    showError(textConfirmPassword, "Password doesn't match :");
    return false;
  }
  showSuccess(textConfirmPassword, "Confirm Password :");

  // Gender
  if (!inputGenderMale.checked && !inputGenderFemale.checked) {
    showError(textGender, "Please select your gender.");

    return false;
  }
  showSuccess(textGender, "Gender :");

  // Birthdate
  if (inputBirthdate.value == "") {
    showError(textBirthdate, "Enter Birthdate :");
    return false;
  }
  showSuccess(textBirthdate, "Birthdate :");

  return true;
}
