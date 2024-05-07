"use strict";

let birthday = new Date("2000-12-24");
let otherDay = new Date(birthday);
otherDay.setDate(otherDay.getDate() + 7); // Corrected the syntax here

console.log(birthday.toDateString());
console.log(otherDay.toDateString());