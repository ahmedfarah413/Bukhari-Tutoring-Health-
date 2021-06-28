let paynmentForm = document.getElementById("payment-form");
let collection = document.getElementsByClassName("form-check-input");

Array.from(collection).forEach(element => {
  element.addEventListener("change", function () {
    inputValue.value = "";
  });
});

// paynmentForm.addEventListener("submit", submitDonation);
const inputValue = document.getElementById("donation-amount");

inputValue.addEventListener("focus", toggleRadioButtonsOff);

function clearInputValue() {
  inputValue.value = "";
}

function toggleRadioButtonsOff() {
  //   const collection = document.getElementsByClassName("form-check-input");

  Array.from(collection).forEach(function (element) {
    if (element.checked) {
      element.checked = false;
    }
  });
}
