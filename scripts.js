//business logic
function check() {
  var day = parseInt(document.getElementById("date").value);
  var century = parseInt(document.getElementById("century").value);
  var year = parseInt(document.getElementById("year").value);
  var month = parseInt(document.getElementById("month").value);
  var gender = document.getElementById("gender").value;

  var findDay = Math.floor((century / 4 - 2 * century - 1 + (5 * year )/ 4 + (26 * (month + 1)) / 10 + day) % 7)

  //here we match the days starting from Saturday with the corresponding name.
  //Amma is hence Saturday and Afua is Friday.
  var femaleName = ["Amma","Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"]
  var maleName = ["Kwame","Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"]
alert(findDay)
  if (gender === "male") {
    alert("Your Akan name is " + maleName[findDay]);
  } else if (gender === "female") {
    alert("Your Akan name is " + femaleName[findDay]);
  };

}
//ui logic
