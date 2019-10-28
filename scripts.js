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
