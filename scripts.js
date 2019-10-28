//business logic
function check() {
  var day = document.getElementById("date").value;
  var century = document.getElementById("century").value;
  var year = document.getElementById("year").value;
  var month = document.getElementById("month").value;
  var gender = document.getElementById("gender").value;

  if (day >= 1 && day <= 31 && century <= 20 && year <= 99 && month >= 1 && month <= 12) {
    var findDay = Math.floor((century / 4 - 2 * century - 1 + (5 * year) / 4 + (26 * (month + 1)) / 10 + day) % 7)
  } else {
    return false;
  }
  //here we match the days starting from Saturday with the corresponding name.
  //Amma is hence Saturday and Afua is Friday.
  var femaleName = ["Amma", "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"]
  var maleName = ["Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"]

  if (gender === "male") {
    alert("Your Akan name is " + maleName[findDay]);
  } else if (gender === "female") {
    alert("Your Akan name is " + femaleName[findDay]);
  };

}
//ui logic