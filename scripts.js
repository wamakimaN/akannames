//business logic
function check() {
  var day = parseInt(document.getElementById("date").value);
  var century = parseInt(document.getElementById("century").value);
  var year = parseInt(document.getElementById("year").value);
  var month = parseInt(document.getElementById("month").value);
  var gender = document.getElementById("gender").value;

  var findDay = Math.round((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7)
  var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
  var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]

  if (gender === "male") {
    alert("Your Akan name is " + maleName[findDay]);
  } else if (gender === "female") {
    alert("Your Akan name is " + femaleName[findDay]);
  };

}
//ui logic