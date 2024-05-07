"use strict"
let currentDate = new Date(); // Get current date
let targetDate = new Date("June 28, 2024"); // Define target date

// Calculate the difference in milliseconds between the current date and the target date
let elapsedMilliseconds = targetDate.getTime() - currentDate.getTime();

// Calculate the number of days from milliseconds
let msec_per_day = 1000 * 60 * 60 * 24; // Milliseconds per day
let dayDiff = elapsedMilliseconds / msec_per_day; // Convert milliseconds to days

// Round the number of days
let numDays = Math.round(dayDiff);

console.log("The number of days left until June 28, 2024 is " + numDays);