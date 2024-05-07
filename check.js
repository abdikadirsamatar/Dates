"use strict";

window.onload = function() {
    const btn = document.getElementById('btn');
    btn.onclick = date;
};

function date() {
    let startDate = new Date("May 6, 2024");
    let academyEndDate = new Date("June 28, 2024");
    let capStone = new Date("May 27, 2024");
    let msecPerDay = 1000 * 60 * 60 * 24;
    let elapsedMS = academyEndDate.getTime() - startDate.getTime();
    let elapsedMS2 = capStone.getTime() - startDate.getTime();
    let dayDiff = elapsedMS / msecPerDay;
    let dayDiff2 = elapsedMS2 / msecPerDay;
    let dayNum = Math.round(dayDiff);
    let dayNum2 = Math.round(dayDiff2);
    let text = `The number of days between now and the end of Academy is ${dayNum}, and the number of days from now until the next capstone is ${dayNum2} days.`;
    document.getElementById('james').innerHTML = text';'