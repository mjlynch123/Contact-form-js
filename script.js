var fullName = document.getElementById("full-name");
var email = document.getElementById("email");
var message = document.getElementById("message");
var today = document.getElementById("currentDay");

var currentDate = new Date();

// Get the month, day, and year
var month = ("0" + (currentDate.getMonth() + 1)).slice(-2)
var day = ("0" + currentDate.getDate()).slice(-2);
var year = currentDate.getFullYear();

function SubForm(event) {
  event.preventDefault();
  // Get the phone number input value and remove any non-digit characters
  var phoneInput = document.getElementById("phone-number").value;
  var phoneDigits = phoneInput.replace(/\D/g, "");

  // Format the phone number as (XXX) XXX-XXXX
  var formattedPhone =
    "(" +
    phoneDigits.substring(0, 3) +
    ") " +
    phoneDigits.substring(3, 6) +
    "-" +
    phoneDigits.substring(6);

  if (phoneInput !== "") {
    // Set the phone number input value to the formatted phone number
    document.getElementById("phone-number").value = formattedPhone;
    
    var now = year + "-" + month + "-" + day;
    document.getElementById("currentDay").value = now;

    $.ajax({
      url: "https://api.apispreadsheets.com/data/sVhQOLQGvbj5bcaI/",
      type: "post",
      data: $("#myForm").serializeArray(),
      success: function () {
        alert("Form Data Submitted :)");
      },
      error: function () {
        alert("There was an error :(");
      },
    });
    fullName.value = "";
    email.value = "";
    message.value = "";
    document.getElementById("phone-number").value = "";
    document.getElementById("currentDay").value = "";
  } else {
    alert("Please Enter a value.");
  }
}
