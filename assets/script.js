var x = moment();

// assign month, day year to id currentDay
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
console.log(today)

// get hour of day
var hourOfDay = parseInt(moment().hour());
console.log(hourOfDay)

// change color of 
if (hourOfDay > x) {
  $('#colorTime').css('background-color', '#d3d3d3');
} else if (hourOfDay < x) {
  $('#colorTime').css('background-color', '#77dd77');
} else {
  $('#colorTime').css('background-color', '#ff6961');
};















