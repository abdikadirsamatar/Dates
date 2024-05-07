let currentTime = new Date();

let date = currentTime.getDate();
let year = currentTime.getFullYear();

const months = ["January", "February", "March", "April", 
 "May", "June", "July", "August", "September",
 "October", "November", "December"];
let monthName = months[currentTime.getMonth()]; // Simplified this line

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; 
let day = weekday[currentTime.getDay()];

console.log(`${date}-${monthName}-${year}(${day})`);


