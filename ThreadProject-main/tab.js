//alert("this is a test!")

// open different tabs between tickets & things to do
function openTab(e, tabId) {
  let tabs = document.querySelectorAll(".tab");
  let contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => tab.classList.remove("active"));
  contents.forEach((content) => content.classList.remove("active"));

  e.currentTarget.classList.add("active");
  document.getElementById(tabId).classList.add("active");
}

// function openTravelerPopup() {
//   document.getElementById("travelerPopup").style.display = "block";
// }

// function closeTravelerPopup() {
//   document.getElementById("travelerPopup").style.display = "none";
// }

document.getElementById("travelerInput").addEventListener("focus", function () {
  console.log("Input has been focused!");
  let description = document.getElementById("travelerPopup");
  //popup.style.visibility = "visible";
  description.style.display = "block";
});

// document.getElementById("travelerInput").addEventListener("blur", function () {
//   console.log("Input has not been focused!");
//   let description = document.getElementById("travelerPopup");
//   //popup.style.visibility = "visible";
//   description.style.visibility = "hidden";
// });

function applyTravelerSelection() {
  let adults = document.getElementById("adultCount").value;
  let children = document.getElementById("childCount").value;
  let travelerInput = document.getElementById("travelerInput");

  travelerInput.value = `${adults} Adult(s), ${children} Child(ren)`;
  // closeTravelerPopup();
  let description = document.getElementById("travelerPopup");
  description.style.display = "none";
}

//for the registration form
// Get form and message elements

//let message = document.getElementById("confirmationMessage");

// // Handle form submission

//function submitForm() {
// document.getElementById("Submit").addEventListener("click", function () {
//event.preventDefault(); //prevent page reload
//     alert("Please confirm information are entered correctly!");
//});
//}

// function resetForm() {
//   document.getElementById("Reset").reset();
//   // console.log("you clicked reset button");
// }

// prevent normal form submit
