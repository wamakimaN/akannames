//business logic
//global variables
var femaleName = ["Amma", "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"]
var maleName = ["Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"]

class BirthDay {
  constructor(century, year, month, day) {
    this.century = century;
    this.year = year;
    this.month = month;
    this.day = day;
  }
  findDay() {
    return Math.floor((this.century / 4 - 2 * this.century - 1 + (5 * this.year) / 4 + (26 * (this.month + 1)) / 10 + this.day) % 7)
  }
}

//ui logic
$(document).ready(function () {
  $("#userinput").submit(function (event) {
    event.preventDefault()

    var myDate = $("#date").val();
    var myMonth = $("#month").val();
    var myYear = $("#year").val();
    var myCentury = $("#century").val();
    var myGender = $("#gender").val();

    let newName = new BirthDay(myCentury, myYear, myMonth, myDate)
    if (myDate >= 1 && myDate <= 31 && myCentury <= 20 && myYear <= 99 && myMonth >= 1 && myMonth <= 12) {
      if (myGender === "male") {
        alert("Your Akan name is " + maleName[newName.findDay()]);
      } else if (gender === "female") {
        alert("Your Akan name is " + femaleName[newName.findDay()]);
      }
    } else {
      return false;
    }

  })
})